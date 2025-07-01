import React, { useState, useEffect } from 'react';
import { SuggestedTimeEntry } from '../types/privacy';
import { contentAnalyzer } from '../services/contentAnalyzer';
import { aiService } from '../services/aiService';
import { calendarIntegration } from '../services/calendarIntegration';
import { AISettings } from './AISettings';

interface AIInsightsProps {
  onApproveSuggestion: (id: string, modifications?: any) => void;
  onRejectSuggestion: (id: string, reason: string) => void;
  aiEnabled: boolean;
  onToggleAI: () => void;
}

export const AIInsights: React.FC<AIInsightsProps> = ({
  onApproveSuggestion,
  onRejectSuggestion,
  aiEnabled,
  onToggleAI
}) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<SuggestedTimeEntry[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [aiStatus, setAiStatus] = useState(aiService.getStatus());
  const [calendarStatus, setCalendarStatus] = useState(calendarIntegration.getStatus());

  // Load suggestions from content analyzer
  useEffect(() => {
    const loadSuggestions = () => {
      const storedSuggestions = contentAnalyzer.getStoredSuggestions();
      setSuggestions(storedSuggestions);
    };

    loadSuggestions();
    
    // Refresh suggestions every 30 seconds
    const interval = setInterval(loadSuggestions, 30000);
    return () => clearInterval(interval);
  }, []);

  // Update AI and calendar status periodically
  useEffect(() => {
    const updateStatus = () => {
      setAiStatus(aiService.getStatus());
      setCalendarStatus(calendarIntegration.getStatus());
    };

    const interval = setInterval(updateStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle suggestion approval
  const handleApproveSuggestion = async (id: string, modifications?: any) => {
    try {
      await contentAnalyzer.approveSuggestion(id, modifications);
      // Refresh suggestions
      setSuggestions(contentAnalyzer.getStoredSuggestions());
      onApproveSuggestion(id, modifications);
    } catch (error) {
      console.error('Failed to approve suggestion:', error);
    }
  };

  // Handle suggestion rejection
  const handleRejectSuggestion = async (id: string, reason: string) => {
    try {
      await contentAnalyzer.rejectSuggestion(id, reason);
      // Refresh suggestions
      setSuggestions(contentAnalyzer.getStoredSuggestions());
      onRejectSuggestion(id, reason);
    } catch (error) {
      console.error('Failed to reject suggestion:', error);
    }
  };

  // Force sync with calendar
  const handleForceSync = async () => {
    try {
      await calendarIntegration.forceSync();
      // Refresh after sync
      setTimeout(() => {
        setSuggestions(contentAnalyzer.getStoredSuggestions());
      }, 2000);
    } catch (error) {
      console.error('Force sync failed:', error);
    }
  };

  const pendingSuggestions = suggestions.filter(s => s.status === 'pending');
  const recentlyProcessed = suggestions.filter(s => s.status !== 'pending').slice(0, 5);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'var(--success)';
    if (confidence >= 0.6) return 'var(--warning)';
    return 'var(--error)';
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 0.8) return 'High Confidence';
    if (confidence >= 0.6) return 'Medium Confidence';
    return 'Low Confidence';
  };

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">AI Insights</h1>
          <p className="dashboard-subtitle">
            AI-generated time entry suggestions • All processing happens locally on your device
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowSettings(true)}
          >
            ⚙️ AI Settings
          </button>
          <button 
            className="btn btn-secondary"
            onClick={handleForceSync}
            disabled={!calendarStatus.enabled}
          >
            🔄 Sync Calendar
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}>
              AI Analysis
            </span>
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={aiEnabled && aiStatus.available}
                onChange={onToggleAI}
                id="ai-toggle"
                disabled={!aiStatus.available}
              />
              <label htmlFor="ai-toggle" className="toggle-slider"></label>
            </div>
          </div>
        </div>
      </div>

      {!aiStatus.available && (
        <div className="content-card" style={{ marginBottom: '32px', background: 'var(--warning-light)', border: '1px solid var(--warning)' }}>
          <div style={{ padding: '32px', textAlign: 'center' }}>
            <span style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>🔧</span>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--warning-dark)' }}>
              AI Service Setup Required
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              TimeBeacon uses Ollama for local AI processing. Install Ollama and the required model to enable intelligent time entry suggestions.
              All processing happens locally - your content never leaves this device.
            </p>
            <button className="btn btn-primary" onClick={() => setShowSettings(true)}>
              Setup Instructions
            </button>
          </div>
        </div>
      )}

      {!aiEnabled && aiStatus.available && (
        <div className="content-card" style={{ marginBottom: '32px', background: 'var(--info-light)', border: '1px solid var(--info)' }}>
          <div style={{ padding: '32px', textAlign: 'center' }}>
            <span style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>🤖</span>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--info-dark)' }}>
              AI Analysis Paused
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Your AI assistant is ready but currently paused. Enable AI analysis to automatically generate time entry suggestions from your digital activities.
              All processing happens locally - your content never leaves this device.
            </p>
            <button className="btn btn-primary" onClick={onToggleAI}>
              Enable AI Analysis
            </button>
          </div>
        </div>
      )}

      {aiEnabled && aiStatus.available && (
        <>
          {/* Status Bar */}
          <div className="content-card" style={{ marginBottom: '32px', background: 'var(--success-light)', border: '1px solid var(--success)' }}>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: 'var(--success-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🔒 Privacy Protected - AI Active
                </h3>
                <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>AI Model: <strong>{aiStatus.model}</strong></span>
                  <span style={{ color: 'var(--text-secondary)' }}>Calendar: <strong>{calendarStatus.enabled ? 'Connected' : 'Disconnected'}</strong></span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
                AI analysis runs entirely on your device using Ollama. Your emails, messages, and documents never leave your computer. 
                Only approved time entry summaries are stored.
              </p>
            </div>
          </div>

          {/* Pending Suggestions */}
          {pendingSuggestions.length > 0 && (
            <div className="content-card" style={{ marginBottom: '32px' }}>
              <div className="card-header">
                <h2 className="card-title">Pending Suggestions ({pendingSuggestions.length})</h2>
                <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
                  Review and approve AI-generated time entries
                </p>
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'grid', gap: '24px' }}>
                  {pendingSuggestions.map(suggestion => (
                    <div 
                      key={suggestion.id} 
                      className="content-card" 
                      style={{ 
                        border: `2px solid ${getConfidenceColor(suggestion.confidence)}20`,
                        background: 'var(--surface-elevated)',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedSuggestion(selectedSuggestion === suggestion.id ? null : suggestion.id)}
                    >
                      <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                              <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: 'var(--text-primary)' }}>
                                {suggestion.suggestedProject}
                              </h3>
                              <span 
                                style={{ 
                                  padding: '4px 8px', 
                                  borderRadius: '12px', 
                                  fontSize: '12px', 
                                  fontWeight: '600',
                                  background: `${getConfidenceColor(suggestion.confidence)}20`,
                                  color: getConfidenceColor(suggestion.confidence)
                                }}
                              >
                                {getConfidenceLabel(suggestion.confidence)} ({Math.round(suggestion.confidence * 100)}%)
                              </span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', margin: '0 0 12px 0' }}>
                              {suggestion.suggestedClient} • {suggestion.suggestedDuration}h • {new Date(suggestion.suggestedDate).toLocaleDateString()}
                            </p>
                            <p style={{ color: 'var(--text-primary)', margin: 0, lineHeight: '1.5' }}>
                              {suggestion.suggestedDescription}
                            </p>
                          </div>
                          <div style={{ display: 'flex', gap: '8px', flexShrink: 0, marginLeft: '16px' }}>
                            <button
                              className="btn btn-success btn-small"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleApproveSuggestion(suggestion.id);
                              }}
                            >
                              ✅ Approve
                            </button>
                            <button
                              className="btn btn-danger btn-small"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRejectSuggestion(suggestion.id, 'User rejected');
                              }}
                            >
                              ❌ Reject
                            </button>
                          </div>
                        </div>

                        {selectedSuggestion === suggestion.id && (
                          <div style={{ 
                            borderTop: '1px solid var(--border)', 
                            paddingTop: '16px', 
                            marginTop: '16px',
                            background: 'var(--background-secondary)',
                            padding: '16px',
                            borderRadius: '8px'
                          }}>
                            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                              AI Analysis Details
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '13px' }}>
                              <div>
                                <span style={{ color: 'var(--text-secondary)' }}>Generated:</span>
                                <br />
                                <span style={{ color: 'var(--text-primary)' }}>
                                  {new Date(suggestion.generatedAt).toLocaleString()}
                                </span>
                              </div>
                              <div>
                                <span style={{ color: 'var(--text-secondary)' }}>Source:</span>
                                <br />
                                <span style={{ color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                                  {suggestion.source}
                                </span>
                              </div>
                              <div>
                                <span style={{ color: 'var(--text-secondary)' }}>Data Sources:</span>
                                <br />
                                <span style={{ color: 'var(--text-primary)' }}>
                                  {suggestion.basedOnDataFrom.join(', ')}
                                </span>
                              </div>
                              <div>
                                <span style={{ color: 'var(--text-secondary)' }}>Tags:</span>
                                <br />
                                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '4px' }}>
                                  {suggestion.suggestedTags.map(tag => (
                                    <span
                                      key={tag}
                                      style={{
                                        padding: '2px 6px',
                                        background: 'var(--brand-primary-light)',
                                        color: 'var(--brand-primary)',
                                        borderRadius: '4px',
                                        fontSize: '11px'
                                      }}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recently Processed */}
          {recentlyProcessed.length > 0 && (
            <div className="content-card">
              <div className="card-header">
                <h2 className="card-title">Recently Processed</h2>
                <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
                  Your recent AI suggestion decisions
                </p>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Project</th>
                      <th>Description</th>
                      <th>Confidence</th>
                      <th>Decision</th>
                      <th>Processed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentlyProcessed.map(suggestion => (
                      <tr key={suggestion.id}>
                        <td>{new Date(suggestion.suggestedDate).toLocaleDateString()}</td>
                        <td>{suggestion.suggestedProject}</td>
                        <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {suggestion.suggestedDescription}
                        </td>
                        <td>
                          <span 
                            style={{ 
                              color: getConfidenceColor(suggestion.confidence),
                              fontWeight: '600'
                            }}
                          >
                            {Math.round(suggestion.confidence * 100)}%
                          </span>
                        </td>
                        <td>
                          <span 
                            className={`status-badge ${
                              suggestion.status === 'approved' ? 'status-approved' :
                              suggestion.status === 'rejected' ? 'status-rejected' : 'status-pending'
                            }`}
                          >
                            {suggestion.status}
                          </span>
                        </td>
                        <td className="time-value">
                          {suggestion.approvedAt ? new Date(suggestion.approvedAt).toLocaleDateString() :
                           suggestion.rejectedAt ? new Date(suggestion.rejectedAt).toLocaleDateString() : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {pendingSuggestions.length === 0 && recentlyProcessed.length === 0 && (
            <div className="content-card">
              <div style={{ padding: '64px', textAlign: 'center' }}>
                <span style={{ fontSize: '64px', marginBottom: '24px', display: 'block' }}>🤖</span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  AI Learning Your Patterns
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
                  Your AI assistant is analyzing your digital activities to learn your work patterns. 
                  Suggestions will appear here as the AI identifies potential time entries from your calendar and other sources.
                </p>
                <div style={{ marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button className="btn btn-primary" onClick={handleForceSync}>
                    🔄 Sync Calendar Now
                  </button>
                  <button className="btn btn-secondary" onClick={() => setShowSettings(true)}>
                    ⚙️ Configure AI
                  </button>
                </div>
                <div style={{ marginTop: '32px', padding: '24px', background: 'var(--background-secondary)', borderRadius: '12px', maxWidth: '600px', margin: '32px auto 0' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                    What the AI Analyzes (Locally)
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', fontSize: '14px' }}>
                    <div>
                      <strong>📅 Calendar Events</strong>
                      <br />Meeting titles, attendees, durations (Active)
                    </div>
                    <div>
                      <strong>📧 Email Content</strong>
                      <br />Project mentions, client names (Coming Soon)
                    </div>
                    <div>
                      <strong>💬 Slack Messages</strong>
                      <br />Project discussions, client interactions (Coming Soon)
                    </div>
                    <div>
                      <strong>📝 Document Access</strong>
                      <br />File names, project folders (Coming Soon)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* AI Settings Modal */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'var(--background)',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <AISettings onClose={() => setShowSettings(false)} />
          </div>
        </div>
      )}
    </div>
  );
};