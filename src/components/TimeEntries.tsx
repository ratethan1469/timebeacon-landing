import React, { useState } from 'react';
import { TimeEntry, Project, Client } from '../types';
import { formatTimeRange } from '../utils/dateUtils';

interface TimeEntriesProps {
  entries: TimeEntry[];
  projects: Project[];
  clients: Client[];
  onAddEntry: (entry: Omit<TimeEntry, 'id'>) => TimeEntry;
  onUpdateEntry: (id: string, updates: Partial<TimeEntry>) => void;
  onDeleteEntry: (id: string) => void;
}

const getDayOfWeek = (date: string) => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return dayNames[new Date(date).getDay()];
};

const getWeekDates = (currentDate: Date) => {
  const week = [];
  const startOfWeek = new Date(currentDate);
  const dayOfWeek = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - dayOfWeek; // Sunday start
  startOfWeek.setDate(diff);

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    week.push(date.toISOString().split('T')[0]);
  }
  return week;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  if (dateString === today) return 'Today';
  if (dateString === yesterday) return 'Yesterday';
  
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric'
  });
};

export const TimeEntries: React.FC<TimeEntriesProps> = ({ 
  entries, 
  projects, 
  clients,
  onAddEntry, 
  onUpdateEntry, 
  onDeleteEntry 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEntries, setSelectedEntries] = useState<Set<string>>(new Set());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicatingEntry, setDuplicatingEntry] = useState<TimeEntry | null>(null);
  const [duplicateSettings, setDuplicateSettings] = useState({
    frequency: 'daily' as 'daily' | 'weekly' | 'monthly',
    count: 1,
    endDate: '',
    skipWeekends: true,
    adjustDates: true
  });
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

  const weekDates = getWeekDates(currentDate);
  const weekStart = weekDates[0];
  const weekEnd = weekDates[6];

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

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Get entries for the current week
  const weekEntries = entries.filter(entry => 
    weekDates.includes(entry.date)
  );

  const getEntriesForDate = (date: string) => {
    return weekEntries.filter(entry => entry.date === date);
  };

  const getDateTotalHours = (date: string) => {
    return getEntriesForDate(date).reduce((sum, entry) => sum + entry.duration, 0);
  };

  const weekTotalHours = weekEntries.reduce((sum, entry) => sum + entry.duration, 0);

  const handleEntrySelect = (entryId: string, checked: boolean) => {
    const newSelected = new Set(selectedEntries);
    if (checked) {
      newSelected.add(entryId);
    } else {
      newSelected.delete(entryId);
    }
    setSelectedEntries(newSelected);
  };

  // const handleSelectAll = (checked: boolean) => {
  //   if (checked) {
  //     setSelectedEntries(new Set(weekEntries.map(entry => entry.id)));
  //   } else {
  //     setSelectedEntries(new Set());
  //   }
  // };

  const handleBulkStatusUpdate = (newStatus: TimeEntry['status']) => {
    // Only allow pending and approved for employee actions
    if (newStatus === 'pending' || newStatus === 'approved') {
      selectedEntries.forEach(entryId => {
        onUpdateEntry(entryId, { status: newStatus });
      });
      setSelectedEntries(new Set());
    }
  };

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

  const handleDuplicate = (entry: TimeEntry) => {
    setDuplicatingEntry(entry);
    setDuplicateSettings({
      frequency: 'daily',
      count: 1,
      endDate: '',
      skipWeekends: true,
      adjustDates: true
    });
    setShowDuplicateModal(true);
  };

  const generateDuplicates = () => {
    if (!duplicatingEntry) return;

    const duplicates: Omit<TimeEntry, 'id'>[] = [];
    const startDate = new Date(duplicatingEntry.date);
    
    for (let i = 1; i <= duplicateSettings.count; i++) {
      const newDate = new Date(startDate);
      
      switch (duplicateSettings.frequency) {
        case 'daily':
          newDate.setDate(startDate.getDate() + i);
          break;
        case 'weekly':
          newDate.setDate(startDate.getDate() + (i * 7));
          break;
        case 'monthly':
          newDate.setMonth(startDate.getMonth() + i);
          break;
      }

      // Skip weekends if option is enabled
      if (duplicateSettings.skipWeekends) {
        const dayOfWeek = newDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          // Skip this iteration for weekends
          continue;
        }
      }

      // Check if we've exceeded the end date
      if (duplicateSettings.endDate && newDate > new Date(duplicateSettings.endDate)) {
        break;
      }

      duplicates.push({
        ...duplicatingEntry,
        date: newDate.toISOString().split('T')[0],
        status: 'pending' // Reset status for duplicates
      });
    }

    // Create all duplicate entries
    duplicates.forEach(duplicate => {
      onAddEntry(duplicate);
    });

    setShowDuplicateModal(false);
    setDuplicatingEntry(null);
  };

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Time Entries</h1>
          <p className="dashboard-subtitle">
            Weekly view • {new Date(weekStart).toLocaleDateString()} - {new Date(weekEnd).toLocaleDateString()}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowAddForm(true)}
          >
            ➕ Add Entry
          </button>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="week-navigation" style={{ marginBottom: '24px' }}>
        <button className="btn btn-secondary" onClick={() => navigateWeek('prev')}>
          ← Previous Week
        </button>
        <div className="week-range">
          {new Date(weekStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(weekEnd).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <button className="btn btn-secondary" onClick={() => navigateWeek('next')}>
          Next Week →
        </button>
        <button className="btn btn-primary" onClick={goToToday}>
          Today
        </button>
      </div>

      {/* Week Summary */}
      <div className="week-summary">
        <div className="summary-card">
          <div className="summary-label">Total Hours</div>
          <div className="summary-value">{formatHours(weekTotalHours)}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Entries</div>
          <div className="summary-value">{weekEntries.length}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Selected</div>
          <div className="summary-value">{selectedEntries.size}</div>
        </div>
        
        {/* Bulk Actions */}
        {selectedEntries.size > 0 && (
          <div className="summary-card" style={{ gridColumn: 'span 2' }}>
            <div className="summary-label">Bulk Actions</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
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
            </div>
          </div>
        )}
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

      {/* Weekly Grid */}
      <div className="weekly-grid">
        {weekDates.map(date => {
          const dayEntries = getEntriesForDate(date);
          const dayHours = getDateTotalHours(date);
          const isToday = date === new Date().toISOString().split('T')[0];
          const isPast = new Date(date) < new Date(new Date().toISOString().split('T')[0]);
          const isFuture = new Date(date) > new Date(new Date().toISOString().split('T')[0]);

          return (
            <div 
              key={date} 
              className={`day-column ${isToday ? 'today' : ''} ${isPast ? 'past' : ''} ${isFuture ? 'future' : ''}`}
            >
              <div className="day-header">
                <div className="day-info">
                  <div className="day-name">{getDayOfWeek(date)}</div>
                  <div className="day-date">{formatDate(date)}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  {dayHours > 0 && (
                    <div className="hours-badge">{formatHours(dayHours)}</div>
                  )}
                  {dayEntries.length > 0 && (
                    <label style={{ fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px', color: isToday ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)' }}>
                      <input
                        type="checkbox"
                        checked={dayEntries.every(entry => selectedEntries.has(entry.id))}
                        onChange={(e) => {
                          dayEntries.forEach(entry => handleEntrySelect(entry.id, e.target.checked));
                        }}
                        style={{ margin: 0 }}
                      />
                      All
                    </label>
                  )}
                </div>
              </div>

              <div className="day-entries">
                {dayEntries.length === 0 ? (
                  <div className="no-entries">
                    <span>📝</span>
                    No entries
                  </div>
                ) : (
                  dayEntries.map(entry => {
                    const project = projects.find(p => p.name === entry.project);
                    const client = clients.find(c => c.name === entry.client);
                    
                    return (
                      <div key={entry.id} className="time-entry-card">
                        <div className="entry-header">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <input
                              type="checkbox"
                              checked={selectedEntries.has(entry.id)}
                              onChange={(e) => handleEntrySelect(entry.id, e.target.checked)}
                              style={{ margin: 0 }}
                            />
                            <div className="entry-time">
                              {formatTimeRange(entry.startTime, entry.endTime)}
                            </div>
                          </div>
                          <div className="entry-duration">{formatHours(entry.duration)}</div>
                        </div>

                        <div className="entry-content">
                          <div className="entry-client">
                            <div 
                              className="client-dot" 
                              style={{ backgroundColor: client?.color || project?.color || '#gray' }}
                            />
                            <div className="client-name">{entry.client}</div>
                          </div>
                          <div className="entry-project">{entry.project}</div>
                          <div className="entry-description">{entry.description}</div>
                        </div>

                        <div className="entry-meta">
                          {entry.source && (
                            <div className="source-badge">
                              {entry.automated ? '🤖' : '✋'} {entry.source || 'Manual'}
                            </div>
                          )}
                          {entry.meetingType && (
                            <div className="meeting-type">{entry.meetingType.replace('-', ' ')}</div>
                          )}
                          <div className={`billable-badge ${entry.billable ? 'billable' : 'non-billable'}`}>
                            {entry.billable ? 'Billable' : 'Non-billable'}
                          </div>
                        </div>

                        <div className="entry-actions">
                          <select
                            value={entry.status === 'submitted' || entry.status === 'rejected' ? 'approved' : entry.status}
                            onChange={(e) => handleStatusChange(entry.id, e.target.value as TimeEntry['status'])}
                            className="status-select"
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                          </select>
                          <button
                            className="btn-small btn-secondary"
                            onClick={() => handleDuplicate(entry)}
                            title="Duplicate entry"
                          >
                            📋
                          </button>
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
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Duplicate Entry Modal */}
      {showDuplicateModal && duplicatingEntry && (
        <div className="modal-overlay" onClick={() => setShowDuplicateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📋 Duplicate Time Entry</h3>
              <button 
                className="modal-close"
                onClick={() => setShowDuplicateModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Entry Preview */}
              <div style={{ background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  Duplicating Entry
                </h4>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <strong>{duplicatingEntry.project}</strong> • {duplicatingEntry.client}
                  <br />
                  {new Date(duplicatingEntry.date).toLocaleDateString()} • {duplicatingEntry.duration}h
                  <br />
                  {duplicatingEntry.description}
                </div>
              </div>

              {/* Duplication Settings */}
              <div className="form-row">
                <div className="form-group">
                  <label>Frequency</label>
                  <select
                    value={duplicateSettings.frequency}
                    onChange={(e) => setDuplicateSettings({
                      ...duplicateSettings,
                      frequency: e.target.value as 'daily' | 'weekly' | 'monthly'
                    })}
                    className="form-input"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Number of Copies</label>
                  <input
                    type="number"
                    min="1"
                    max="365"
                    value={duplicateSettings.count}
                    onChange={(e) => setDuplicateSettings({
                      ...duplicateSettings,
                      count: parseInt(e.target.value) || 1
                    })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>End Date (Optional)</label>
                  <input
                    type="date"
                    value={duplicateSettings.endDate}
                    onChange={(e) => setDuplicateSettings({
                      ...duplicateSettings,
                      endDate: e.target.value
                    })}
                    className="form-input"
                  />
                  <small style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                    Leave empty to create exact number of copies
                  </small>
                </div>
              </div>

              {/* Options */}
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Options
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                    <input
                      type="checkbox"
                      checked={duplicateSettings.skipWeekends}
                      onChange={(e) => setDuplicateSettings({
                        ...duplicateSettings,
                        skipWeekends: e.target.checked
                      })}
                    />
                    Skip weekends (Saturday & Sunday)
                  </label>
                </div>
              </div>

              {/* Preview */}
              <div style={{ marginTop: '24px', padding: '16px', background: 'var(--info-light)', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--info-dark)' }}>
                  Preview
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>
                  {duplicateSettings.frequency === 'daily' && `Will create ${duplicateSettings.count} daily entries`}
                  {duplicateSettings.frequency === 'weekly' && `Will create ${duplicateSettings.count} weekly entries (same day of week)`}
                  {duplicateSettings.frequency === 'monthly' && `Will create ${duplicateSettings.count} monthly entries (same date)`}
                  {duplicateSettings.skipWeekends && ' (excluding weekends)'}
                  {duplicateSettings.endDate && ` until ${new Date(duplicateSettings.endDate).toLocaleDateString()}`}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDuplicateModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={generateDuplicates}
                disabled={duplicateSettings.count < 1}
              >
                Create {duplicateSettings.count} {duplicateSettings.count === 1 ? 'Copy' : 'Copies'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};