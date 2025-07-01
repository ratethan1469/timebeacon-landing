/**
 * TimeBeacon Content Analyzer
 * Processes digital activities and generates intelligent time entry suggestions
 */

import { aiService, ContentAnalysisRequest, AIAnalysisResult } from './aiService';
import { timeBeaconDB } from './database';
import { Project, Client } from '../types';
import { SuggestedTimeEntry, TimeEntry } from '../types/privacy';

export interface ProcessedActivity {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  participants?: string[];
  location?: string;
  source: 'calendar' | 'slack' | 'jira' | 'linear' | 'email' | 'notion' | 'github';
  sourceId: string;
  timestamp: string;
  rawData?: any; // Store original data for debugging
}

export interface AnalysisContext {
  projects: Project[];
  clients: Client[];
  recentEntries: TimeEntry[];
  userPreferences: {
    defaultDuration: number;
    autoApproveThreshold: number;
    preferredCategories: string[];
  };
}

class ContentAnalyzer {
  private processingQueue: ProcessedActivity[] = [];
  private isProcessing = false;
  private analysisCache = new Map<string, AIAnalysisResult>();

  constructor() {
    // Process queue every 30 seconds to batch analyze activities
    setInterval(() => this.processQueue(), 30000);
  }

  /**
   * Add activity for analysis
   */
  async addActivity(activity: ProcessedActivity): Promise<void> {
    this.processingQueue.push(activity);
    console.log(`📝 Added activity for analysis: ${activity.title}`);
    
    // If queue has 5+ items or this is high priority, process immediately
    if (this.processingQueue.length >= 5 || this.isHighPriority(activity)) {
      await this.processQueue();
    }
  }

  /**
   * Process the queue of activities
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.processingQueue.length === 0) {
      return;
    }

    this.isProcessing = true;
    console.log(`🤖 Processing ${this.processingQueue.length} activities...`);

    try {
      const context = await this.buildAnalysisContext();
      const activitiesToProcess = [...this.processingQueue];
      this.processingQueue = [];

      for (const activity of activitiesToProcess) {
        await this.analyzeActivity(activity, context);
      }
    } catch (error) {
      console.error('Content analysis failed:', error);
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Analyze a single activity and generate suggestions
   */
  private async analyzeActivity(activity: ProcessedActivity, context: AnalysisContext): Promise<void> {
    try {
      const cacheKey = this.getCacheKey(activity);
      
      // Check cache first
      let analysisResult = this.analysisCache.get(cacheKey);
      
      if (!analysisResult) {
        const request: ContentAnalysisRequest = {
          title: activity.title,
          description: activity.description,
          participants: activity.participants,
          location: activity.location,
          source: activity.source as 'calendar' | 'slack' | 'email' | 'manual',
          timestamp: activity.timestamp,
          context: {
            projects: context.projects,
            clients: context.clients,
            recentEntries: context.recentEntries.slice(0, 10) // Recent context only
          }
        };

        analysisResult = await aiService.analyzeContent(request);
        
        // Cache the result for 1 hour
        this.analysisCache.set(cacheKey, analysisResult);
        setTimeout(() => this.analysisCache.delete(cacheKey), 3600000);
      }

      // Only create suggestions above confidence threshold
      if (analysisResult.confidence >= 0.5) {
        await this.createSuggestion(activity, analysisResult, context);
      } else {
        console.log(`⚠️ Low confidence (${analysisResult.confidence}) for activity: ${activity.title}`);
      }
    } catch (error) {
      console.error(`Failed to analyze activity ${activity.id}:`, error);
    }
  }

  /**
   * Create a time entry suggestion from analysis
   */
  private async createSuggestion(
    activity: ProcessedActivity,
    analysis: AIAnalysisResult,
    context: AnalysisContext
  ): Promise<void> {
    const suggestion: SuggestedTimeEntry = {
      id: `suggestion-${activity.id}-${Date.now()}`,
      analysisId: `analysis-${activity.id}`,
      source: activity.source,
      suggestedDate: activity.startTime.split('T')[0],
      suggestedStartTime: this.extractTime(activity.startTime),
      suggestedDuration: this.calculateDuration(activity, analysis),
      suggestedProject: analysis.suggestedProject || 'Unknown Project',
      suggestedClient: analysis.suggestedClient || 'Unknown Client',
      suggestedDescription: analysis.suggestedDescription || activity.title,
      suggestedTags: analysis.tags || [],
      confidence: analysis.confidence,
      basedOnDataFrom: [activity.source],
      generatedAt: new Date().toISOString(),
      status: 'pending'
    };

    // Store suggestion in database
    await this.storeSuggestion(suggestion);
    
    console.log(`✨ Created suggestion: ${suggestion.suggestedProject} - ${suggestion.suggestedDescription} (${Math.round(suggestion.confidence * 100)}% confidence)`);

    // Auto-approve high confidence suggestions if enabled
    if (analysis.confidence >= context.userPreferences.autoApproveThreshold) {
      await this.autoApproveSuggestion(suggestion);
    }
  }

  /**
   * Calculate duration from activity or analysis
   */
  private calculateDuration(activity: ProcessedActivity, _analysis: AIAnalysisResult): number {
    if (activity.duration) {
      return activity.duration;
    }

    if (activity.startTime && activity.endTime) {
      const start = new Date(activity.startTime);
      const end = new Date(activity.endTime);
      return (end.getTime() - start.getTime()) / (1000 * 60 * 60); // Hours
    }

    // Default durations based on activity type
    const title = activity.title.toLowerCase();
    if (title.includes('standup') || title.includes('daily')) return 0.25; // 15 minutes
    if (title.includes('check-in') || title.includes('quick')) return 0.5; // 30 minutes
    if (title.includes('kickoff') || title.includes('discovery')) return 2; // 2 hours
    if (title.includes('training') || title.includes('workshop')) return 4; // 4 hours
    
    return 1; // Default 1 hour
  }

  /**
   * Extract time from ISO string
   */
  private extractTime(isoString: string): string {
    return new Date(isoString).toTimeString().slice(0, 5);
  }

  /**
   * Build analysis context from current data
   */
  private async buildAnalysisContext(): Promise<AnalysisContext> {
    const [projects, clients, allEntries] = await Promise.all([
      timeBeaconDB.getAllProjects(),
      timeBeaconDB.getAllClients(),
      timeBeaconDB.getAllTimeEntries()
    ]);

    // Get recent entries (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentEntries = allEntries.filter(entry => 
      new Date(entry.date) >= thirtyDaysAgo
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
      projects: projects.filter(p => p.active),
      clients: clients.filter(c => c.active),
      recentEntries: recentEntries.slice(0, 50) as TimeEntry[], // Limit to 50 recent entries
      userPreferences: {
        defaultDuration: 1,
        autoApproveThreshold: 0.85, // Auto-approve 85%+ confidence
        preferredCategories: ['client', 'implementation']
      }
    };
  }

  /**
   * Store suggestion in database (extend database to handle suggestions)
   */
  private async storeSuggestion(suggestion: SuggestedTimeEntry): Promise<void> {
    // For now, we'll use localStorage until we extend the database
    const suggestions = this.getStoredSuggestions();
    suggestions.push(suggestion);
    localStorage.setItem('timebeacon_suggestions', JSON.stringify(suggestions));
  }

  /**
   * Get stored suggestions
   */
  getStoredSuggestions(): SuggestedTimeEntry[] {
    try {
      const stored = localStorage.getItem('timebeacon_suggestions');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Update suggestion status
   */
  async updateSuggestion(id: string, updates: Partial<SuggestedTimeEntry>): Promise<void> {
    const suggestions = this.getStoredSuggestions();
    const index = suggestions.findIndex(s => s.id === id);
    
    if (index >= 0) {
      suggestions[index] = { ...suggestions[index], ...updates };
      localStorage.setItem('timebeacon_suggestions', JSON.stringify(suggestions));
    }
  }

  /**
   * Approve suggestion and create time entry
   */
  async approveSuggestion(id: string, modifications?: Partial<TimeEntry>): Promise<void> {
    const suggestions = this.getStoredSuggestions();
    const suggestion = suggestions.find(s => s.id === id);
    
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    // Create actual time entry
    const timeEntry: Omit<TimeEntry, 'id'> = {
      date: suggestion.suggestedDate,
      startTime: suggestion.suggestedStartTime,
      endTime: this.calculateEndTime(suggestion.suggestedStartTime, suggestion.suggestedDuration),
      duration: suggestion.suggestedDuration,
      client: suggestion.suggestedClient,
      project: suggestion.suggestedProject,
      description: suggestion.suggestedDescription,
      category: 'client', // Default category
      status: 'pending',
      automated: true,
      source: 'ai_suggested',
      billable: true, // Default billable
      tags: suggestion.suggestedTags,
      generatedFromSuggestion: suggestion.id,
      aiConfidence: suggestion.confidence,
      dataSourcesUsed: suggestion.basedOnDataFrom as any[],
      ...modifications
    };

    await timeBeaconDB.addTimeEntry({ ...timeEntry, id: crypto.randomUUID() });

    // Update suggestion status
    await this.updateSuggestion(id, {
      status: 'approved',
      approvedAt: new Date().toISOString()
    });

    console.log(`✅ Approved suggestion and created time entry: ${suggestion.suggestedProject}`);
  }

  /**
   * Reject suggestion
   */
  async rejectSuggestion(id: string, reason: string): Promise<void> {
    await this.updateSuggestion(id, {
      status: 'rejected',
      rejectedAt: new Date().toISOString(),
      rejectionReason: reason
    });

    console.log(`❌ Rejected suggestion: ${reason}`);
  }

  /**
   * Auto-approve high confidence suggestions
   */
  private async autoApproveSuggestion(suggestion: SuggestedTimeEntry): Promise<void> {
    try {
      await this.approveSuggestion(suggestion.id);
      console.log(`🚀 Auto-approved high confidence suggestion: ${suggestion.suggestedProject}`);
    } catch (error) {
      console.error('Auto-approval failed:', error);
    }
  }

  /**
   * Calculate end time from start time and duration
   */
  private calculateEndTime(startTime: string, duration: number): string {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + (duration * 60);
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  }

  /**
   * Check if activity is high priority for immediate processing
   */
  private isHighPriority(activity: ProcessedActivity): boolean {
    const title = activity.title.toLowerCase();
    return title.includes('urgent') || 
           title.includes('escalation') || 
           title.includes('emergency'); // High priority keywords
  }

  /**
   * Generate cache key for activity
   */
  private getCacheKey(activity: ProcessedActivity): string {
    return `${activity.source}-${activity.title}-${activity.startTime}`;
  }

  /**
   * Clear old suggestions (cleanup)
   */
  async clearOldSuggestions(daysOld: number = 30): Promise<void> {
    const suggestions = this.getStoredSuggestions();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);

    const activeSuggestions = suggestions.filter(s => 
      new Date(s.generatedAt) > cutoffDate || s.status === 'pending'
    );

    localStorage.setItem('timebeacon_suggestions', JSON.stringify(activeSuggestions));
    console.log(`🧹 Cleaned up ${suggestions.length - activeSuggestions.length} old suggestions`);
  }

  /**
   * Get processing statistics
   */
  getStats(): {
    queueLength: number;
    isProcessing: boolean;
    cacheSize: number;
    totalSuggestions: number;
    pendingSuggestions: number;
  } {
    const suggestions = this.getStoredSuggestions();
    const pendingSuggestions = suggestions.filter(s => s.status === 'pending');

    return {
      queueLength: this.processingQueue.length,
      isProcessing: this.isProcessing,
      cacheSize: this.analysisCache.size,
      totalSuggestions: suggestions.length,
      pendingSuggestions: pendingSuggestions.length
    };
  }
}

// Export singleton instance
export const contentAnalyzer = new ContentAnalyzer();