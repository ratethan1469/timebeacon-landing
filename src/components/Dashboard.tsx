import React, { useState } from 'react';
import { DashboardStats, TimeEntry, Project } from '../types';
import { formatDateWithDay, formatTimeRange, getRelativeDay } from '../utils/dateUtils';

interface DashboardProps {
  stats: DashboardStats;
  entries: TimeEntry[];
  projects: Project[];
  onAddEntry: (entry: Omit<TimeEntry, 'id'>) => TimeEntry;
  onUpdateEntry: (id: string, updates: Partial<TimeEntry>) => void;
  onDeleteEntry: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  stats, 
  entries,
  projects,
  onAddEntry,
  onUpdateEntry,
  onDeleteEntry
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null);
  const [selectedEntries, setSelectedEntries] = useState<Set<string>>(new Set());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    duration: 0.25,
    client: '',
    project: '',
    description: '',
    category: 'client' as TimeEntry['category'],
    status: 'pending' as TimeEntry['status'],
    billable: true
  });

  const formatHours = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };


  const durationOptions = [
    { value: 0.25, label: '15 minutes' },
    { value: 0.5, label: '30 minutes' },
    { value: 0.75, label: '45 minutes' },
    { value: 1, label: '1 hour' },
    { value: 1.25, label: '1 hour 15 minutes' },
    { value: 1.5, label: '1 hour 30 minutes' },
    { value: 1.75, label: '1 hour 45 minutes' },
    { value: 2, label: '2 hours' },
    { value: 2.5, label: '2 hours 30 minutes' },
    { value: 3, label: '3 hours' },
    { value: 4, label: '4 hours' },
    { value: 6, label: '6 hours' },
    { value: 8, label: '8 hours' }
  ];

  const calculateEndTime = (startTime: string, duration: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + (duration * 60);
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  };

  const getWeekDates = (currentDate: Date) => {
    const week = [];
    const startOfWeek = new Date(currentDate);
    const dayOfWeek = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - dayOfWeek;
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      week.push(date.toISOString().split('T')[0]);
    }
    return week;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const weekDates = getWeekDates(currentDate);
  const weekStart = weekDates[0];
  const weekEnd = weekDates[6];
  const isCurrentWeek = weekDates.includes(new Date().toISOString().split('T')[0]);

  // Filter entries for current week view
  const weekEntries = entries.filter(entry => 
    weekDates.includes(entry.date)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const endTime = calculateEndTime(formData.startTime, formData.duration);
    
    if (editingEntry) {
      onUpdateEntry(editingEntry.id, {
        ...formData,
        endTime,
        duration: formData.duration,
        automated: false
      });
      setEditingEntry(null);
    } else {
      onAddEntry({
        ...formData,
        endTime,
        duration: formData.duration,
        automated: false
      });
      setShowAddForm(false);
    }
    
    setFormData({
      date: new Date().toISOString().split('T')[0],
      startTime: '09:00',
      duration: 0.25,
      client: '',
      project: '',
      description: '',
      category: 'client',
      status: 'pending',
      billable: true
    });
  };

  const handleEdit = (entry: TimeEntry) => {
    setEditingEntry(entry);
    setFormData({
      date: entry.date,
      startTime: entry.startTime,
      duration: entry.duration,
      client: entry.client,
      project: entry.project,
      description: entry.description,
      category: entry.category,
      status: entry.status,
      billable: entry.billable
    });
    setShowAddForm(true);
  };

  const handleStatusChange = (entryId: string, newStatus: TimeEntry['status']) => {
    onUpdateEntry(entryId, { status: newStatus });
  };

  const handleEntrySelect = (entryId: string, checked: boolean) => {
    const newSelected = new Set(selectedEntries);
    if (checked) {
      newSelected.add(entryId);
    } else {
      newSelected.delete(entryId);
    }
    setSelectedEntries(newSelected);
  };

  const handleBulkStatusUpdate = (newStatus: TimeEntry['status']) => {
    if (newStatus === 'pending' || newStatus === 'approved' || newStatus === 'submitted') {
      selectedEntries.forEach(entryId => {
        onUpdateEntry(entryId, { status: newStatus });
      });
      setSelectedEntries(new Set());
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Overview of your time tracking activity</p>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="week-navigation" style={{ marginBottom: '24px', padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <button className="btn btn-secondary" onClick={() => navigateWeek('prev')}>
            ← Previous Week
          </button>
          <div className="week-range" style={{ fontWeight: '600', fontSize: '16px' }}>
            {new Date(weekStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(weekEnd).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <button className="btn btn-secondary" onClick={() => navigateWeek('next')}>
            Next Week →
          </button>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
          {!isCurrentWeek && (
            <button className="btn btn-primary" onClick={goToToday}>
              Current Week
            </button>
          )}
          <button 
            className="btn btn-secondary"
            onClick={() => setShowAddForm(true)}
          >
            ➕ Add Entry
          </button>
        </div>
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

      {/* Add/Edit Form */}
      {(showAddForm || editingEntry) && (
        <div className="content-card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h2 className="card-title">
              {editingEntry ? 'Edit Entry' : 'Add New Entry'}
            </h2>
          </div>
          <div style={{ padding: '24px' }}>
            <form onSubmit={handleSubmit} className="entry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Start Time</label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: parseFloat(e.target.value) })}
                    className="form-input"
                    required
                  >
                    {durationOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Project</label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="form-input"
                    required
                  >
                    <option value="">Select Project</option>
                    {projects.filter(p => p.active).map(project => (
                      <option key={project.id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as TimeEntry['status'] })}
                    className="form-input"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-input"
                  rows={3}
                  placeholder="What did you work on?"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingEntry ? 'Update Entry' : 'Add Entry'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingEntry(null);
                    setFormData({
                      date: new Date().toISOString().split('T')[0],
                      startTime: '09:00',
                      duration: 0.25,
                      client: '',
                      project: '',
                      description: '',
                      category: 'client',
                      status: 'pending',
                      billable: true
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Actions */}
      {selectedEntries.size > 0 && (
        <div className="content-card" style={{ marginBottom: '24px' }}>
          <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontWeight: '600' }}>Bulk Actions ({selectedEntries.size} selected):</span>
            <button 
              className="btn btn-secondary btn-small"
              onClick={() => handleBulkStatusUpdate('pending')}
            >
              Mark Pending
            </button>
            <button 
              className="btn btn-primary btn-small"
              onClick={() => handleBulkStatusUpdate('approved')}
            >
              Mark Approved
            </button>
            <button 
              className="btn btn-success btn-small"
              onClick={() => handleBulkStatusUpdate('submitted')}
              disabled={!Array.from(selectedEntries).some(id => {
                const entry = weekEntries.find(e => e.id === id);
                return entry && entry.status === 'approved';
              })}
            >
              Submit Entries
            </button>
          </div>
        </div>
      )}

      <div className="content-card">
        <div className="card-header">
          <h2 className="card-title">
            {isCurrentWeek ? 'This Week\'s Entries' : `Week Entries (${new Date(weekStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(weekEnd).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})`}
          </h2>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>
                  <input
                    type="checkbox"
                    checked={weekEntries.length > 0 && weekEntries.every(entry => selectedEntries.has(entry.id))}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedEntries(new Set(weekEntries.map(entry => entry.id)));
                      } else {
                        setSelectedEntries(new Set());
                      }
                    }}
                  />
                </th>
                <th>Date & Day</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Client & Project</th>
                <th>Description</th>
                <th>Status</th>
                <th>Source</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {weekEntries.map((entry) => {
                const dateInfo = formatDateWithDay(entry.date);
                const relativeDay = getRelativeDay(entry.date);
                return (
                  <tr key={entry.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedEntries.has(entry.id)}
                        onChange={(e) => handleEntrySelect(entry.id, e.target.checked)}
                      />
                    </td>
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
                      <select
                        value={entry.status === 'submitted' || entry.status === 'rejected' ? 'approved' : entry.status}
                        onChange={(e) => handleStatusChange(entry.id, e.target.value as TimeEntry['status'])}
                        className="status-select"
                        style={{ minWidth: '100px' }}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                      </select>
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
                    <td>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button
                          className="btn-small btn-secondary"
                          onClick={() => handleEdit(entry)}
                          title="Edit entry"
                        >
                          ✏️
                        </button>
                        <button
                          className="btn-small btn-danger"
                          onClick={() => {
                            if (confirm('Delete this entry?')) {
                              onDeleteEntry(entry.id);
                            }
                          }}
                          title="Delete entry"
                        >
                          🗑️
                        </button>
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