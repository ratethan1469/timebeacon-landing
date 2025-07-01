import React, { useState } from 'react';
import { UserPrivacySettings, DataSource, PrivacyAuditLog } from '../types/privacy';

interface PrivacyOwnershipProps {
  privacySettings: UserPrivacySettings;
  dataSources: DataSource[];
  auditLogs: PrivacyAuditLog[];
  onUpdatePrivacySettings: (settings: UserPrivacySettings) => void;
  onExportData: (format: 'json' | 'csv') => void;
  onDeleteAllData: () => void;
}

export const PrivacyOwnership: React.FC<PrivacyOwnershipProps> = ({
  privacySettings,
  dataSources,
  auditLogs,
  onUpdatePrivacySettings,
  onExportData,
  onDeleteAllData
}) => {
  const [showDataDeletion, setShowDataDeletion] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  const handleMasterPause = () => {
    onUpdatePrivacySettings({
      ...privacySettings,
      masterPauseEnabled: !privacySettings.masterPauseEnabled,
      dataProcessingEnabled: !privacySettings.masterPauseEnabled
    });
  };

  const handleEmergencyWipe = () => {
    if (deleteConfirmation === 'DELETE MY DATA') {
      onDeleteAllData();
      setShowDataDeletion(false);
      setDeleteConfirmation('');
    }
  };

  const enabledSources = dataSources.filter(source => source.enabled);
  const totalDataAccesses = auditLogs.length;
  const lastActivity = auditLogs[0]?.timestamp || 'Never';

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Privacy & Data Ownership</h1>
          <p className="dashboard-subtitle">
            Your data, your control, your choice. TimeBeacon is your personal assistant, not surveillance software.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className={`btn ${privacySettings.masterPauseEnabled ? 'btn-danger' : 'btn-secondary'}`}
            onClick={handleMasterPause}
          >
            {privacySettings.masterPauseEnabled ? '⏸️ Tracking Paused' : '▶️ Pause All Tracking'}
          </button>
        </div>
      </div>

      {/* Privacy Principles Hero Section */}
      <div className="content-card" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))', color: 'white', border: 'none' }}>
        <div style={{ padding: '48px 32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: 'white' }}>
            🛡️ Built for Employee Privacy & Empowerment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'rgba(255,255,255,0.95)' }}>
                🔒 Your Data Stays Yours
              </h3>
              <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                All content processing happens locally on your machine. Zero raw emails, messages, or documents ever leave your device. 
                You own and control every bit of your data.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'rgba(255,255,255,0.95)' }}>
                ✨ Personal Assistant, Not Surveillance
              </h3>
              <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                TimeBeacon helps you document your valuable work, not monitor you. Every feature is designed to empower you, 
                not your employer. You control what gets tracked and shared.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'rgba(255,255,255,0.95)' }}>
                🚪 Effortless Exit
              </h3>
              <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                Want to leave? Export all your data or delete everything with one click. No hidden data, no retention policies, 
                no questions asked. Your choice, your control.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources & Permissions */}
      <div className="content-card" style={{ marginBottom: '32px' }}>
        <div className="card-header">
          <h2 className="card-title">🔌 Data Sources & Permissions</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
            You explicitly control what TimeBeacon can access. Every connection requires your consent.
          </p>
        </div>
        <div style={{ padding: '32px' }}>
          {dataSources.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-secondary)' }}>
              <span style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>🔌</span>
              <h3>No Data Sources Connected</h3>
              <p>TimeBeacon only accesses what you explicitly allow. Connect your tools when you're ready.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '24px' }}>
              {dataSources.map(source => (
                <div key={source.id} className="integration-card" style={{ border: source.enabled ? '2px solid var(--success)' : '1px solid var(--border)' }}>
                  <div className="integration-header">
                    <div className="integration-info">
                      <div className="integration-icon-name">
                        <div className="integration-icon">
                          {source.type === 'email' && '📧'}
                          {source.type === 'calendar' && '📅'}
                          {source.type === 'slack' && '💬'}
                          {source.type === 'github' && '🐙'}
                          {source.type === 'notion' && '📝'}
                          {source.type === 'jira' && '🎫'}
                          {source.type === 'linear' && '📋'}
                        </div>
                        <div>
                          <h3 className="integration-name">{source.name}</h3>
                          <p className="integration-description">
                            {source.enabled ? `✅ Active • Last accessed: ${source.lastAccessed ? new Date(source.lastAccessed).toLocaleDateString() : 'Never'}` : '⏸️ Paused'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="integration-status">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div className="status-item">
                        <span className="status-label">Total Accesses</span>
                        <span className="status-value">{source.totalAccessCount}</span>
                      </div>
                      <div className="status-item">
                        <span className="status-label">Consent Granted</span>
                        <span className="status-value">{new Date(source.consentGrantedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="status-item">
                        <span className="status-label">Projects Tracked</span>
                        <span className="status-value">{source.permissions.allowedProjects?.length || 'All'}</span>
                      </div>
                      <div className="status-item">
                        <span className="status-label">Approval Required</span>
                        <span className={`status-value ${source.permissions.requireApproval ? 'enabled' : 'disabled'}`}>
                          {source.permissions.requireApproval ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Permissions Granted</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {source.permissions.canReadMetadata && (
                        <span className="integration-badge">📊 Metadata</span>
                      )}
                      {source.permissions.canReadContent && (
                        <span className="integration-badge">📄 Content (Local Only)</span>
                      )}
                      {source.permissions.canReadAttachments && (
                        <span className="integration-badge">📎 Attachments</span>
                      )}
                      {source.permissions.pausedUntil && (
                        <span className="integration-badge" style={{ background: 'var(--warning-light)', color: 'var(--warning)' }}>
                          ⏸️ Paused until {new Date(source.permissions.pausedUntil).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Transparency Dashboard */}
      <div className="content-card" style={{ marginBottom: '32px' }}>
        <div className="card-header">
          <h2 className="card-title">🔍 Transparency Dashboard</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
            See exactly what TimeBeacon has accessed and analyzed. No hidden activity.
          </p>
        </div>
        <div style={{ padding: '32px' }}>
          <div className="stats-grid" style={{ marginBottom: '32px' }}>
            <div className="stat-card">
              <div className="stat-label">Total Data Accesses</div>
              <div className="stat-value">{totalDataAccesses}</div>
              <div className="stat-change">All logged and auditable</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Active Data Sources</div>
              <div className="stat-value">{enabledSources.length}</div>
              <div className="stat-change">You control each one</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Last Activity</div>
              <div className="stat-value">{lastActivity === 'Never' ? 'Never' : new Date(lastActivity).toLocaleDateString()}</div>
              <div className="stat-change">Real-time tracking</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Data Retention</div>
              <div className="stat-value">{privacySettings.auditLogRetentionDays} days</div>
              <div className="stat-change">
                {privacySettings.autoDeleteOldData ? '✅ Auto-delete enabled' : '⚠️ Manual cleanup'}
              </div>
            </div>
          </div>

          {auditLogs.length > 0 && (
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Recent Activity Log</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Action</th>
                      <th>Source</th>
                      <th>Items Processed</th>
                      <th>Processing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.slice(0, 10).map(log => (
                      <tr key={log.id}>
                        <td className="time-value">
                          {new Date(log.timestamp).toLocaleDateString()} {new Date(log.timestamp).toLocaleTimeString()}
                        </td>
                        <td style={{ textTransform: 'capitalize' }}>
                          {log.action.replace('_', ' ')}
                        </td>
                        <td>
                          <span style={{ textTransform: 'capitalize' }}>{log.source}</span>
                        </td>
                        <td>{log.details.itemsAnalyzed || log.details.itemsAccessed || '-'}</td>
                        <td>{log.details.processingTimeMs ? `${log.details.processingTimeMs}ms` : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Data Control Center */}
      <div className="content-card" style={{ marginBottom: '32px' }}>
        <div className="card-header">
          <h2 className="card-title">🎛️ Data Control Center</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
            Complete control over your data. Export, delete, or modify anything at any time.
          </p>
        </div>
        <div style={{ padding: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            {/* Data Export */}
            <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--surface)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📦 Export Your Data
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '14px' }}>
                Download all your time entries, settings, and audit logs. Your data, your format.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => onExportData('json')}
                >
                  Export JSON
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => onExportData('csv')}
                >
                  Export CSV
                </button>
              </div>
            </div>

            {/* Privacy Settings */}
            <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--surface)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ⚙️ Privacy Controls
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input
                    type="checkbox"
                    checked={privacySettings.requireManualApproval}
                    onChange={(e) => onUpdatePrivacySettings({
                      ...privacySettings,
                      requireManualApproval: e.target.checked
                    })}
                  />
                  Require approval for all AI suggestions
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input
                    type="checkbox"
                    checked={privacySettings.showDetailedAuditLogs}
                    onChange={(e) => onUpdatePrivacySettings({
                      ...privacySettings,
                      showDetailedAuditLogs: e.target.checked
                    })}
                  />
                  Show detailed audit logs
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <input
                    type="checkbox"
                    checked={privacySettings.autoDeleteOldData}
                    onChange={(e) => onUpdatePrivacySettings({
                      ...privacySettings,
                      autoDeleteOldData: e.target.checked
                    })}
                  />
                  Auto-delete old audit logs
                </label>
              </div>
            </div>

            {/* Emergency Controls */}
            <div style={{ padding: '24px', border: '2px solid var(--error)', borderRadius: '12px', background: 'var(--error-light)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🚨 Emergency Controls
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '14px' }}>
                Need to stop everything immediately? These controls give you instant control.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  className="btn btn-danger"
                  onClick={handleMasterPause}
                >
                  {privacySettings.masterPauseEnabled ? '▶️ Resume All Tracking' : '⏸️ Pause All Tracking'}
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => setShowDataDeletion(true)}
                >
                  🗑️ Delete All Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Deletion Modal */}
      {showDataDeletion && (
        <div className="modal-overlay" onClick={() => setShowDataDeletion(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>⚠️ Delete All Data</h3>
              <button 
                className="modal-close"
                onClick={() => setShowDataDeletion(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div style={{ background: 'var(--error-light)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                <p style={{ color: 'var(--error)', fontWeight: '600', marginBottom: '8px' }}>
                  This action cannot be undone!
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  This will permanently delete:
                </p>
                <ul style={{ margin: '8px 0', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                  <li>All time entries and projects</li>
                  <li>All data source connections</li>
                  <li>All audit logs and analysis data</li>
                  <li>All settings and preferences</li>
                </ul>
              </div>
              
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>
                  Type "DELETE MY DATA" to confirm:
                </label>
                <input
                  type="text"
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  className="form-input"
                  placeholder="DELETE MY DATA"
                  style={{ marginTop: '8px' }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setShowDataDeletion(false);
                  setDeleteConfirmation('');
                }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-danger"
                onClick={handleEmergencyWipe}
                disabled={deleteConfirmation !== 'DELETE MY DATA'}
              >
                Delete Everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Commitment */}
      <div className="content-card" style={{ background: 'var(--surface)', border: '1px solid var(--success)' }}>
        <div style={{ padding: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--success)' }}>
            🤝 Our Privacy Commitment
          </h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              TimeBeacon exists to empower you, not monitor you. We've designed every feature with your privacy and autonomy in mind. 
              Your work is valuable, and you deserve tools that respect that value.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', fontSize: '14px' }}>
              <div>
                <strong>✅ Local Processing</strong>
                <br />Content never leaves your device
              </div>
              <div>
                <strong>✅ Full Transparency</strong>
                <br />See exactly what we access
              </div>
              <div>
                <strong>✅ Complete Control</strong>
                <br />Pause, export, or delete anytime
              </div>
              <div>
                <strong>✅ No Hidden Data</strong>
                <br />What you see is what we have
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};