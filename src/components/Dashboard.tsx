import React from 'react';
import { DashboardStats, TimeEntry } from '../types';
import { formatDateWithDay, formatTimeRange, getRelativeDay } from '../utils/dateUtils';

interface DashboardProps {
  stats: DashboardStats;
  recentEntries: TimeEntry[];
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  stats, 
  recentEntries
}) => {
  const formatHours = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  const getStatusBadgeClass = (status: TimeEntry['status']) => {
    const baseClass = 'status-badge';
    switch (status) {
      case 'pending':
        return `${baseClass} status-pending`;
      case 'approved':
        return `${baseClass} status-approved`;
      case 'submitted':
        return `${baseClass} status-submitted`;
      case 'rejected':
        return `${baseClass} status-rejected`;
      default:
        return baseClass;
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Overview of your time tracking activity</p>
      </div>

      {/* Automation Status Section */}
      <div className="automation-section">
        <div className="automation-card">
          <div className="automation-header">
            <h2>🤖 Automated Time Tracking</h2>
            <div className="automation-status">
              <span className="status-indicator active">Active</span>
            </div>
          </div>
          <div className="automation-info">
            <p>TimeBeacon is automatically tracking your time from connected integrations:</p>
            <div className="active-integrations">
              <span className="integration-badge">📅 Google Calendar</span>
              <span className="integration-badge">💬 Slack</span>
              <span className="integration-badge">📹 Zoom</span>
              <span className="integration-badge">☁️ Salesforce</span>
            </div>
            <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              {stats.automatedEntries} entries created automatically this month
            </p>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Today's Hours</div>
          <div className="stat-value">{formatHours(stats.todayHours)}</div>
          <div className="stat-change positive">+12% from yesterday</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">This Week</div>
          <div className="stat-value">{formatHours(stats.weekHours)}</div>
          <div className="stat-change positive">+5% from last week</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">This Month</div>
          <div className="stat-value">{formatHours(stats.monthHours)}</div>
          <div className="stat-change negative">-8% from last month</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">Total Earnings</div>
          <div className="stat-value">${stats.totalEarnings.toLocaleString()}</div>
          <div className="stat-change positive">from approved entries</div>
        </div>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h2 className="card-title">Recent Time Entries</h2>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date & Day</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Client & Project</th>
                <th>Description</th>
                <th>Status</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {recentEntries.map((entry) => {
                const dateInfo = formatDateWithDay(entry.date);
                const relativeDay = getRelativeDay(entry.date);
                return (
                  <tr key={entry.id}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: '600' }}>
                          {relativeDay || dateInfo.dayName}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {dateInfo.formattedDate}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="time-value">
                        {formatTimeRange(entry.startTime, entry.endTime)}
                      </span>
                    </td>
                    <td className="time-value">{formatHours(entry.duration)}</td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: '600', fontSize: '13px' }}>
                          {entry.client}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {entry.project}
                        </span>
                      </div>
                    </td>
                    <td style={{ maxWidth: '200px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span>{entry.description}</span>
                        {entry.meetingType && (
                          <span style={{ 
                            fontSize: '11px', 
                            color: 'var(--text-tertiary)',
                            textTransform: 'capitalize'
                          }}>
                            {entry.meetingType.replace('-', ' ')}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className={getStatusBadgeClass(entry.status)}>
                        {entry.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {entry.automated ? (
                          <>
                            <span style={{ color: 'var(--brand-primary)' }}>🤖</span>
                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                              {entry.source || 'Auto'}
                            </span>
                          </>
                        ) : (
                          <>
                            <span style={{ color: 'var(--text-secondary)' }}>✋</span>
                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                              Manual
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};