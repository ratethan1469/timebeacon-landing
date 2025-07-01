/**
 * AI Settings Component
 * Configure and monitor the real AI processing system
 */

import React, { useState, useEffect } from 'react';
import { aiService } from '../services/aiService';
import { contentAnalyzer } from '../services/contentAnalyzer';
import { calendarIntegration } from '../services/calendarIntegration';

interface AISettingsProps {
  onClose?: () => void;
}

export const AISettings: React.FC<AISettingsProps> = ({ onClose }) => {
  const [aiStatus, setAiStatus] = useState(aiService.getStatus());
  const [analyzerStats, setAnalyzerStats] = useState(contentAnalyzer.getStats());
  const [calendarStatus, setCalendarStatus] = useState(calendarIntegration.getStatus());
  const [isTestingAI, setIsTestingAI] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);

  // Update status every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAiStatus(aiService.getStatus());
      setAnalyzerStats(contentAnalyzer.getStats());
      setCalendarStatus(calendarIntegration.getStatus());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTestAI = async () => {
    setIsTestingAI(true);
    setTestResult(null);
    
    try {
      const result = await aiService.testService();
      setTestResult(result);
    } catch (error) {
      setTestResult({ success: false, error: 'Test failed' });
    } finally {
      setIsTestingAI(false);
    }
  };

  const handleTestCalendar = async () => {
    try {
      const result = await calendarIntegration.testConnection();
      console.log('Calendar test result:', result);
    } catch (error) {
      console.error('Calendar test failed:', error);
    }
  };

  const handleForceSync = async () => {
    try {
      const result = await calendarIntegration.forceSync();
      console.log('Force sync result:', result);
    } catch (error) {
      console.error('Force sync failed:', error);
    }
  };

  return (
    <div className="content-card">
      <div className="card-header">
        <h2 className="card-title">🤖 AI Processing System</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
          Configure and monitor your local AI processing capabilities
        </p>
        {onClose && (
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        )}
      </div>
      
      <div style={{ padding: '32px' }}>
        
        {/* AI Service Status */}
        <div className="settings-section">
          <h3 className="settings-section-title">🧠 Local AI Engine (Ollama)</h3>
          
          <div className="status-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div className="status-card">
              <div className="status-label">AI Service</div>
              <div className={`status-value ${aiStatus.available ? 'status-success' : 'status-error'}`}>
                {aiStatus.available ? '✅ Available' : '❌ Not Available'}
              </div>
            </div>
            <div className="status-card">
              <div className="status-label">Model</div>
              <div className="status-value">{aiStatus.model}</div>
            </div>
            <div className="status-card">
              <div className="status-label">Processing</div>
              <div className={`status-value ${aiStatus.enabled ? 'status-success' : 'status-warning'}`}>
                {aiStatus.enabled ? '🟢 Enabled' : '🟡 Disabled'}
              </div>
            </div>
          </div>

          {!aiStatus.available && (
            <div className="alert alert-info">
              <h4>🔧 Ollama Setup Required</h4>
              <p>To enable local AI processing, install Ollama and the required model:</p>
              <div className="code-block">
                <code>
                  # Install Ollama (macOS/Linux)<br/>
                  curl -fsSL https://ollama.com/install.sh | sh<br/><br/>
                  # Pull the model<br/>
                  ollama pull llama3.2:3b<br/><br/>
                  # Start Ollama service<br/>
                  ollama serve
                </code>
              </div>
              <p style={{ marginTop: '16px' }}>
                <strong>Privacy Note:</strong> All AI processing happens locally on your machine. 
                No data is sent to external servers.
              </p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <button 
              className="btn btn-secondary"
              onClick={handleTestAI}
              disabled={isTestingAI}
            >
              {isTestingAI ? '🔄 Testing...' : '🧪 Test AI Service'}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => aiService.checkOllamaAvailability()}
            >
              🔄 Refresh Status
            </button>
          </div>

          {testResult && (
            <div className={`alert ${testResult.success ? 'alert-success' : 'alert-error'}`} style={{ marginTop: '16px' }}>
              {testResult.success ? (
                <p>✅ AI service test successful! Latency: {testResult.latency}ms</p>
              ) : (
                <p>❌ AI service test failed: {testResult.error}</p>
              )}
            </div>
          )}
        </div>

        {/* Content Analyzer Status */}
        <div className="settings-section">
          <h3 className="settings-section-title">📊 Content Analyzer</h3>
          
          <div className="status-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div className="status-card">
              <div className="status-label">Queue Length</div>
              <div className="status-value">{analyzerStats.queueLength}</div>
            </div>
            <div className="status-card">
              <div className="status-label">Processing</div>
              <div className={`status-value ${analyzerStats.isProcessing ? 'status-warning' : 'status-success'}`}>
                {analyzerStats.isProcessing ? '🟡 Active' : '🟢 Idle'}
              </div>
            </div>
            <div className="status-card">
              <div className="status-label">Cache Size</div>
              <div className="status-value">{analyzerStats.cacheSize}</div>
            </div>
            <div className="status-card">
              <div className="status-label">Total Suggestions</div>
              <div className="status-value">{analyzerStats.totalSuggestions}</div>
            </div>
            <div className="status-card">
              <div className="status-label">Pending Review</div>
              <div className="status-value">{analyzerStats.pendingSuggestions}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => contentAnalyzer.clearOldSuggestions(7)}
            >
              🧹 Clear Old Suggestions
            </button>
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="settings-section">
          <h3 className="settings-section-title">📅 Calendar Integration</h3>
          
          <div className="status-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div className="status-card">
              <div className="status-label">Status</div>
              <div className={`status-value ${calendarStatus.enabled ? 'status-success' : 'status-warning'}`}>
                {calendarStatus.enabled ? '✅ Connected' : '⚠️ Disconnected'}
              </div>
            </div>
            <div className="status-card">
              <div className="status-label">Last Sync</div>
              <div className="status-value">
                {calendarStatus.lastSync ? 
                  new Date(calendarStatus.lastSync).toLocaleString() : 
                  'Never'
                }
              </div>
            </div>
            <div className="status-card">
              <div className="status-label">Events Processed</div>
              <div className="status-value">{calendarStatus.processedEventsCount}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              className="btn btn-secondary"
              onClick={handleTestCalendar}
            >
              🧪 Test Connection
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleForceSync}
            >
              🔄 Force Sync
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => calendarIntegration.clearHistory()}
            >
              🧹 Clear History
            </button>
          </div>
        </div>

        {/* Privacy Information */}
        <div className="settings-section">
          <h3 className="settings-section-title">🔒 Privacy & Security</h3>
          
          <div className="alert alert-success">
            <h4>✅ Privacy-First Architecture</h4>
            <ul style={{ margin: '12px 0', paddingLeft: '20px' }}>
              <li><strong>Local Processing:</strong> All AI analysis happens on your device</li>
              <li><strong>No Data Transmission:</strong> Raw content never leaves your computer</li>
              <li><strong>Encrypted Storage:</strong> Suggestions stored locally with encryption</li>
              <li><strong>User Control:</strong> You approve every AI-generated time entry</li>
              <li><strong>Audit Trail:</strong> Complete visibility into AI decision-making</li>
            </ul>
          </div>

          <div className="alert alert-info">
            <h4>🔧 What the AI Analyzes</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '12px' }}>
              <div>
                <strong>📅 Calendar Events</strong>
                <ul style={{ fontSize: '14px', margin: '8px 0', paddingLeft: '16px' }}>
                  <li>Meeting titles and descriptions</li>
                  <li>Attendee information</li>
                  <li>Meeting duration and timing</li>
                  <li>Location details</li>
                </ul>
              </div>
              <div>
                <strong>📧 Email Content (Future)</strong>
                <ul style={{ fontSize: '14px', margin: '8px 0', paddingLeft: '16px' }}>
                  <li>Subject lines for project matching</li>
                  <li>Sender/recipient analysis</li>
                  <li>Project keywords and references</li>
                  <li>Time-related discussions</li>
                </ul>
              </div>
              <div>
                <strong>💬 Slack Messages (Future)</strong>
                <ul style={{ fontSize: '14px', margin: '8px 0', paddingLeft: '16px' }}>
                  <li>Project channel discussions</li>
                  <li>Client interaction threads</li>
                  <li>Work status updates</li>
                  <li>Meeting coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="settings-section">
          <h3 className="settings-section-title">⚡ Performance Optimization</h3>
          
          <div className="tips-grid" style={{ display: 'grid', gap: '16px' }}>
            <div className="tip-card">
              <h4>🚀 Speed Tips</h4>
              <ul style={{ fontSize: '14px', margin: '8px 0', paddingLeft: '16px' }}>
                <li>Use a smaller model (llama3.2:1b) for faster processing</li>
                <li>Increase RAM allocation to Ollama for better performance</li>
                <li>Close unnecessary applications when AI is processing</li>
                <li>Process activities in batches for efficiency</li>
              </ul>
            </div>
            <div className="tip-card">
              <h4>🎯 Accuracy Tips</h4>
              <ul style={{ fontSize: '14px', margin: '8px 0', paddingLeft: '16px' }}>
                <li>Use descriptive meeting titles and descriptions</li>
                <li>Maintain consistent project and client naming</li>
                <li>Review and approve suggestions to train the system</li>
                <li>Keep your project and client lists up to date</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};