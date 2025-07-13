import React, { useState } from 'react';
import { TimeEntry, Project, Client } from '../types';
import { formatTimeRange } from '../utils/dateUtils';
import { useCalendarEvents } from '../hooks/useCalendarEvents';
import { CalendarEvent } from '../services/calendarIntegration';

interface DashboardProps {
  entries: TimeEntry[];
  projects: Project[];
  clients: Client[];
  onUpdateEntry: (id: string, updates: Partial<TimeEntry>) => void;
  onDeleteEntry: (id: string) => void;
  onAddEntry?: (entry: Omit<TimeEntry, 'id'>) => void;
}

const getDayOfWeek = (date: string) => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return dayNames[new Date(date).getDay()];
};

const getWeekDates = (currentDate: Date) => {
  const week = [];
  const startOfWeek = new Date(currentDate);
  const dayOfWeek = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - dayOfWeek; // Sunday start (American format)
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

export const Dashboard: React.FC<DashboardProps> = ({
  entries,
  projects,
  clients,
  onUpdateEntry,
  onDeleteEntry,
  onAddEntry
}) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [editingEntry, setEditingEntry] = useState<TimeEntry | null>(null);
  const [showDurationModal, setShowDurationModal] = useState(false);
  const [newDuration, setNewDuration] = useState(0);
  const [showAddEntryModal, setShowAddEntryModal] = useState(false);
  const [selectedEntries, setSelectedEntries] = useState<Set<string>>(new Set());
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicatingEntry, setDuplicatingEntry] = useState<TimeEntry | null>(null);
  const [duplicateSettings, setDuplicateSettings] = useState({
    frequency: 'weekly' as 'weekly' | 'daily' | 'monthly',
    count: 4,
    skipWeekends: true
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [addEntryForm, setAddEntryForm] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    duration: 1,
    client: '',
    project: '',
    description: '',
    billable: true
  });
  
  // Calendar events integration
  const { getEventsForDate } = useCalendarEvents();
  
  const weekDates = getWeekDates(currentWeek);
  
  
  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentWeek(newDate);
  };

  const goToCurrentWeek = () => {
    setCurrentWeek(new Date());
  };

  const isCurrentWeek = () => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    return weekDates.includes(todayString);
  };
  
  const getEntriesForDate = (date: string) => {
    return entries.filter(entry => entry.date === date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  const renderCalendarEvent = (event: CalendarEvent) => {
    const startTime = new Date(event.start).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    const endTime = new Date(event.end).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    const duration = (new Date(event.end).getTime() - new Date(event.start).getTime()) / (1000 * 60 * 60);

    return (
      <div key={`calendar-${event.id}`} className="calendar-event-card">
        <div className="entry-header">
          <div className="entry-time">
            {startTime} - {endTime}
          </div>
          <div className="entry-duration">
            {formatHours(duration)}
          </div>
        </div>
        
        <div className="entry-content">
          <div className="entry-client">
            <div 
              className="client-dot"
              style={{ backgroundColor: '#4285F4' }}
            />
            <span className="client-name">📅 Calendar Event</span>
          </div>
          <div className="entry-project">{event.title}</div>
          {event.description && (
            <div className="entry-description">{event.description}</div>
          )}
          
          <div className="entry-meta">
            <div className="source-badge">
              <span>📅</span>
              <span>Google Calendar</span>
            </div>
            {event.attendees && event.attendees.length > 0 && (
              <span className="meeting-attendees">
                {event.attendees.length} attendees
              </span>
            )}
            {event.location && (
              <span className="meeting-location">
                📍 {event.location}
              </span>
            )}
          </div>
        </div>
        
        <div className="entry-actions">
          <button 
            className="btn btn-small btn-primary"
            onClick={() => convertCalendarEventToTimeEntry(event)}
            title="Convert to time entry"
          >
            ➕ Track Time
          </button>
        </div>
      </div>
    );
  };
  
  const formatHours = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };
  
  const getTotalHoursForDay = (date: string) => {
    return getEntriesForDate(date).reduce((sum, entry) => sum + entry.duration, 0);
  };
  
  const getTotalHoursForWeek = () => {
    return weekDates.reduce((sum, date) => sum + getTotalHoursForDay(date), 0);
  };
  
  const handleStatusChange = (entryId: string, newStatus: TimeEntry['status']) => {
    onUpdateEntry(entryId, { status: newStatus });
  };

  const handleEditDuration = (entry: TimeEntry) => {
    setEditingEntry(entry);
    setNewDuration(entry.duration);
    setShowDurationModal(true);
  };

  const calculateEndTime = (startTime: string, duration: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + (duration * 60);
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  };

  const saveDurationChange = () => {
    if (editingEntry && newDuration > 0) {
      const endTime = calculateEndTime(editingEntry.startTime, newDuration);
      onUpdateEntry(editingEntry.id, { 
        duration: newDuration,
        endTime: endTime
      });
      setShowDurationModal(false);
      setEditingEntry(null);
    }
  };

  const adjustDuration = (increment: number) => {
    const adjusted = Math.max(0.25, newDuration + increment); // Minimum 15 minutes
    setNewDuration(Math.round(adjusted * 4) / 4); // Round to nearest 15-minute increment
  };

  const handleAddEntrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onAddEntry) return;

    const endTime = calculateEndTime(addEntryForm.startTime, addEntryForm.duration);
    
    onAddEntry({
      date: addEntryForm.date,
      startTime: addEntryForm.startTime,
      endTime,
      duration: addEntryForm.duration,
      client: addEntryForm.client,
      project: addEntryForm.project,
      description: addEntryForm.description,
      category: 'client',
      status: 'pending',
      automated: false,
      billable: addEntryForm.billable
    });

    // Reset form and close modal
    setAddEntryForm({
      date: new Date().toISOString().split('T')[0],
      startTime: '09:00',
      duration: 1,
      client: '',
      project: '',
      description: '',
      billable: true
    });
    setShowAddEntryModal(false);
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
    selectedEntries.forEach(entryId => {
      onUpdateEntry(entryId, { status: newStatus });
    });
    setSelectedEntries(new Set());
  };

  const handleDuplicate = (entry: TimeEntry) => {
    setDuplicatingEntry(entry);
    setDuplicateSettings({
      frequency: 'weekly',
      count: 4,
      skipWeekends: true
    });
    setShowDuplicateModal(true);
  };

  const generateDuplicates = async () => {
    if (!duplicatingEntry || !onAddEntry) return;

    setIsGenerating(true);
    
    try {
      const duplicates: Omit<TimeEntry, 'id'>[] = [];
      const startDate = new Date(duplicatingEntry.date);
      let actualCount = 0;
      
      for (let i = 1; i <= duplicateSettings.count && actualCount < duplicateSettings.count; i++) {
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
            // Don't count this as one of our duplicates, try next date
            continue;
          }
        }

        duplicates.push({
          ...duplicatingEntry,
          date: newDate.toISOString().split('T')[0],
          status: 'pending' // Reset status for duplicates
        });
        
        actualCount++;
      }

      // Create all duplicate entries with a small delay for smooth UX
      for (const duplicate of duplicates) {
        onAddEntry(duplicate);
        await new Promise(resolve => setTimeout(resolve, 50)); // Small delay between additions
      }

      // Success feedback
      setTimeout(() => {
        setShowDuplicateModal(false);
        setDuplicatingEntry(null);
        setIsGenerating(false);
      }, 200);
      
    } catch (error) {
      console.error('Error generating duplicates:', error);
      setIsGenerating(false);
    }
  };

  // Helper function to preview upcoming dates
  const getPreviewDates = () => {
    if (!duplicatingEntry) return [];
    
    const startDate = new Date(duplicatingEntry.date);
    const previewDates: Date[] = [];
    let actualCount = 0;
    
    for (let i = 1; i <= duplicateSettings.count && actualCount < Math.min(duplicateSettings.count, 5); i++) {
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

      if (duplicateSettings.skipWeekends) {
        const dayOfWeek = newDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          continue;
        }
      }

      previewDates.push(newDate);
      actualCount++;
    }
    
    return previewDates;
  };

  const convertCalendarEventToTimeEntry = (event: CalendarEvent) => {
    if (!onAddEntry) {
      console.warn('onAddEntry prop not provided, cannot convert calendar event');
      return;
    }

    const startDate = new Date(event.start);
    const endDate = new Date(event.end);
    const duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
    
    // Extract client and project from event title or attendees
    const { client, project } = extractClientAndProject(event);
    
    const timeEntry: Omit<TimeEntry, 'id'> = {
      date: startDate.toISOString().split('T')[0],
      startTime: startDate.toTimeString().slice(0, 5),
      endTime: endDate.toTimeString().slice(0, 5),
      duration: duration,
      client: client,
      project: project,
      description: event.description || event.title,
      category: 'meeting',
      status: 'pending',
      automated: true,
      source: 'calendar',
      meetingType: determineMeetingType(event),
      billable: true, // Default to billable, user can change
      tags: event.attendees ? [`${event.attendees.length} attendees`] : undefined
    };

    onAddEntry(timeEntry);
    console.log('✅ Converted calendar event to time entry:', event.title);
  };

  const extractClientAndProject = (event: CalendarEvent): { client: string; project: string } => {
    // Try to extract client/project from event title
    const title = event.title.toLowerCase();
    
    // Look for existing clients in the title
    const matchedClient = clients.find(client => 
      title.includes(client.name.toLowerCase())
    );
    
    if (matchedClient) {
      // Look for existing projects for this client
      const clientProjects = projects.filter(p => p.client === matchedClient.name);
      const matchedProject = clientProjects.find(project => 
        title.includes(project.name.toLowerCase())
      );
      
      return {
        client: matchedClient.name,
        project: matchedProject?.name || 'General Meeting'
      };
    }
    
    // Try to extract from attendees email domains
    if (event.attendees && event.attendees.length > 0) {
      for (const attendee of event.attendees) {
        const domain = attendee.split('@')[1];
        if (domain) {
          const domainClient = clients.find(client => 
            client.name.toLowerCase().includes(domain.split('.')[0])
          );
          if (domainClient) {
            return {
              client: domainClient.name,
              project: 'General Meeting'
            };
          }
        }
      }
    }
    
    // Default fallback
    return {
      client: 'External',
      project: 'Calendar Meeting'
    };
  };

  const determineMeetingType = (event: CalendarEvent): TimeEntry['meetingType'] => {
    const title = event.title.toLowerCase();
    const description = (event.description || '').toLowerCase();
    const text = `${title} ${description}`;
    
    if (text.includes('kickoff') || text.includes('kick-off')) return 'kickoff';
    if (text.includes('discovery') || text.includes('discovery')) return 'discovery';
    if (text.includes('implementation') || text.includes('implement')) return 'implementation';
    if (text.includes('support') || text.includes('help')) return 'support';
    if (text.includes('training') || text.includes('onboarding')) return 'training';
    if (text.includes('check-in') || text.includes('checkin') || text.includes('status')) return 'check-in';
    if (text.includes('escalation') || text.includes('urgent')) return 'escalation';
    
    return 'check-in'; // Default
  };

  const formatDurationHours = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  const getStatusColor = (status: TimeEntry['status']) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'submitted': return '#3b82f6';
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getPendingEntriesCount = () => {
    return entries.filter(e => weekDates.includes(e.date) && e.status === 'pending').length;
  };

  const canSubmitWeek = () => {
    const weekEntries = entries.filter(e => weekDates.includes(e.date));
    return weekEntries.length > 0 && weekEntries.every(e => e.status === 'approved');
  };

  const handleSubmitWeek = () => {
    const weekEntries = entries.filter(e => weekDates.includes(e.date) && e.status === 'approved');
    weekEntries.forEach(entry => {
      onUpdateEntry(entry.id, { status: 'submitted' });
    });
  };

  const weekStart = new Date(weekDates[0]);
  const weekEnd = new Date(weekDates[6]);
  const weekRange = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

  return (
    <div>
      <div className="dashboard-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div>
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">
              Your weekly time tracking overview with smart automation
            </p>
          </div>
          
          {/* Top Right: Previous Week | Week Listed | Next Week */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '12px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px'
            }}>
              <button 
                className="btn btn-secondary"
                onClick={() => navigateWeek('prev')}
              >
                Previous Week
              </button>
              <span style={{ 
                fontWeight: '600', 
                fontSize: '16px', 
                minWidth: '200px', 
                textAlign: 'center' 
              }}>
                {weekRange}
              </span>
              <button 
                className="btn btn-secondary"
                onClick={() => navigateWeek('next')}
              >
                Next Week
              </button>
            </div>
            
            {/* Bottom Line: Add Entry and Current Week buttons */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px'
            }}>
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddEntryModal(true)}
              >
                Add Entry
              </button>
              {!isCurrentWeek() && (
                <button 
                  className="btn btn-secondary"
                  onClick={goToCurrentWeek}
                >
                  Current Week
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedEntries.size > 0 && (
        <div className="content-card" style={{ marginBottom: '24px', background: 'var(--brand-primary-light)', border: '2px solid var(--brand-primary)' }}>
          <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <span style={{ fontWeight: '600', color: 'var(--brand-primary)' }}>
              {selectedEntries.size} entries selected
            </span>
            <button 
              className="btn btn-secondary btn-small"
              onClick={() => handleBulkStatusUpdate('pending')}
            >
              Mark as Pending
            </button>
            <button 
              className="btn btn-primary btn-small"
              onClick={() => handleBulkStatusUpdate('approved')}
            >
              Mark as Approved
            </button>
            <button 
              className="btn btn-secondary btn-small"
              onClick={() => setSelectedEntries(new Set())}
            >
              Clear Selection
            </button>
          </div>
        </div>
      )}

      <div className="week-summary">
        <div className="summary-card">
          <div className="summary-label">Total Hours This Week</div>
          <div className="summary-value">{formatHours(getTotalHoursForWeek())}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Customer-Focused Hours</div>
          <div className="summary-value">
            {formatHours(entries.filter(e => weekDates.includes(e.date) && e.billable).reduce((sum, e) => sum + e.duration, 0))}
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Utilization Rate</div>
          <div className="summary-value">
            {getTotalHoursForWeek() > 0 ? ((entries.filter(e => weekDates.includes(e.date) && e.billable).reduce((sum, e) => sum + e.duration, 0) / getTotalHoursForWeek()) * 100).toFixed(1) : 0}%
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Automated Entries</div>
          <div className="summary-value">
            {entries.filter(e => weekDates.includes(e.date) && e.automated).length}
          </div>
        </div>
        <div className="summary-card approved-card">
          <div className="summary-label">✅ Approved Entries</div>
          <div className="summary-value status-value approved">
            {entries.filter(e => weekDates.includes(e.date) && e.status === 'approved').length}
          </div>
        </div>
        <div className="summary-card pending-card">
          <div className="summary-label">⏳ Pending Entries</div>
          <div className="summary-value status-value pending">
            {entries.filter(e => weekDates.includes(e.date) && e.status === 'pending').length}
          </div>
        </div>
        <div className="submit-actions">
          {isCurrentWeek() ? (
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button 
                className={`btn ${canSubmitWeek() ? 'btn-primary' : 'btn-secondary'}`}
                onClick={canSubmitWeek() ? handleSubmitWeek : undefined}
                disabled={!canSubmitWeek()}
                title={canSubmitWeek() ? 'Submit all approved entries for manager review' : `You have ${getPendingEntriesCount()} pending entries. Please approve all entries before submitting.`}
              >
                {canSubmitWeek() ? '📋 Submit Week for Review' : `⏳ ${getPendingEntriesCount()} Pending Entries`}
              </button>
              {!canSubmitWeek() && getPendingEntriesCount() > 0 && (
                <div className="tooltip-warning" style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--warning)',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  marginBottom: '8px',
                  opacity: 0,
                  animation: 'fadeIn 0.3s ease-in-out 2s forwards'
                }}>
                  Please approve all entries before submitting
                </div>
              )}
            </div>
          ) : (
            <button className="btn btn-secondary" disabled>
              {weekDates[0] > new Date().toISOString().split('T')[0] ? '📅 Future Week' : 
               entries.filter(e => weekDates.includes(e.date) && e.status === 'submitted').length > 0 ? '📋 Submitted' : '✅ Past Week'}
            </button>
          )}
        </div>
      </div>

      <div className="weekly-grid">
        {weekDates.map(date => {
          const dayEntries = getEntriesForDate(date);
          const dayCalendarEvents = getEventsForDate(date);
          const totalHours = getTotalHoursForDay(date);
          const isToday = date === new Date().toISOString().split('T')[0];
          
          const isPast = date < new Date().toISOString().split('T')[0];
          const isFuture = date > new Date().toISOString().split('T')[0];
          
          return (
            <div key={date} className={`day-column ${isToday ? 'today' : ''} ${isPast ? 'past' : ''} ${isFuture ? 'future' : ''}`}>
              <div className="day-header">
                <div className="day-info">
                  <div className="day-name">{getDayOfWeek(date)}</div>
                  <div className="day-date">{formatDate(date)}</div>
                </div>
                <div className="day-total">
                  {dayEntries.length > 0 && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', marginBottom: '4px' }}>
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
                  {totalHours > 0 && (
                    <span className="hours-badge">{formatHours(totalHours)}</span>
                  )}
                  {isFuture && totalHours === 0 && (
                    <span className="future-indicator">📅</span>
                  )}
                </div>
              </div>
              
              <div className="day-entries">
                {/* Render Calendar Events First */}
                {dayCalendarEvents.map(event => renderCalendarEvent(event))}
                
                {/* Render Time Entries */}
                {dayEntries.length === 0 && dayCalendarEvents.length === 0 ? (
                  <div className="no-entries">
                    {isFuture ? (
                      <>
                        <span>📅</span>
                        <p>Upcoming - no meetings scheduled</p>
                      </>
                    ) : (
                      <>
                        <span>🤖</span>
                        <p>No automated entries detected</p>
                      </>
                    )}
                  </div>
                ) : (
                  dayEntries.map(entry => {
                    const project = projects.find(p => p.name === entry.project);
                    const client = clients.find(c => c.name === entry.client);
                    
                    return (
                      <div key={entry.id} className="time-entry-card">
                        <div className="entry-header">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                          <div className="entry-duration">
                            {formatHours(entry.duration)}
                          </div>
                        </div>
                        
                        <div className="entry-content">
                          <div className="entry-client">
                            <div 
                              className="client-dot"
                              style={{ backgroundColor: client?.color || project?.color || '#gray' }}
                            />
                            <span className="client-name">{entry.client}</span>
                          </div>
                          <div className="entry-project">{entry.project}</div>
                          <div className="entry-description">{entry.description}</div>
                          
                          <div className="entry-meta">
                            {entry.automated && (
                              <div className="source-badge">
                                <span>🤖</span>
                                <span>{entry.source || 'Auto'}</span>
                              </div>
                            )}
                            {entry.meetingType && (
                              <span className="meeting-type">
                                {entry.meetingType.replace('-', ' ')}
                              </span>
                            )}
                            <span className={`billable-badge ${entry.billable ? 'billable' : 'non-billable'}`}>
                              {entry.billable ? 'Billable' : 'Non-billable'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="entry-actions">
                          <select
                            value={entry.status === 'submitted' || entry.status === 'rejected' ? 'approved' : entry.status}
                            onChange={(e) => handleStatusChange(entry.id, e.target.value as TimeEntry['status'])}
                            className="status-select"
                            style={{ borderColor: getStatusColor(entry.status) }}
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                          </select>
                          <button 
                            className="btn btn-small btn-secondary"
                            onClick={() => handleEditDuration(entry)}
                            title="Edit duration"
                          >
                            ✏️
                          </button>
                          <button 
                            className="btn btn-small btn-secondary"
                            onClick={() => handleDuplicate(entry)}
                            title="Duplicate for recurring meetings"
                          >
                            📋
                          </button>
                          <button 
                            className="btn btn-small btn-danger"
                            onClick={() => {
                              if (confirm('Delete this entry?')) {
                                onDeleteEntry(entry.id);
                              }
                            }}
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

      {/* Duration Edit Modal */}
      {showDurationModal && editingEntry && (
        <div className="modal-overlay" onClick={() => setShowDurationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>✏️ Edit Duration</h3>
              <button 
                className="modal-close"
                onClick={() => setShowDurationModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Entry Preview */}
              <div style={{ background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {editingEntry.project} • {editingEntry.client}
                </h4>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {new Date(editingEntry.date).toLocaleDateString()} • {formatTimeRange(editingEntry.startTime, editingEntry.endTime)}
                  <br />
                  {editingEntry.description}
                </div>
              </div>

              {/* Duration Controls */}
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', color: 'var(--text-primary)' }}>
                  Adjust Time Duration
                </h4>
                
                {/* Current Duration Display */}
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: 'var(--brand-primary)', 
                  marginBottom: '24px',
                  padding: '16px',
                  background: 'var(--brand-primary-light)',
                  borderRadius: '12px',
                  border: '2px solid var(--brand-primary)'
                }}>
                  {formatDurationHours(newDuration)}
                </div>

                {/* Quick Adjustment Buttons */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '12px', 
                  marginBottom: '24px',
                  maxWidth: '300px',
                  margin: '0 auto 24px auto'
                }}>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => adjustDuration(-0.25)}
                    disabled={newDuration <= 0.25}
                    style={{ fontSize: '16px', padding: '12px' }}
                  >
                    − 15min
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => adjustDuration(0.25)}
                    style={{ fontSize: '16px', padding: '12px' }}
                  >
                    + 15min
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => adjustDuration(-0.5)}
                    disabled={newDuration <= 0.5}
                    style={{ fontSize: '16px', padding: '12px' }}
                  >
                    − 30min
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => adjustDuration(0.5)}
                    style={{ fontSize: '16px', padding: '12px' }}
                  >
                    + 30min
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => adjustDuration(-1)}
                    disabled={newDuration <= 1}
                    style={{ fontSize: '16px', padding: '12px' }}
                  >
                    − 1hr
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => adjustDuration(1)}
                    style={{ fontSize: '16px', padding: '12px' }}
                  >
                    + 1hr
                  </button>
                </div>

                {/* Precise Input */}
                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    Or set exact duration (hours):
                  </label>
                  <input
                    type="number"
                    min="0.25"
                    max="24"
                    step="0.25"
                    value={newDuration}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value) || 0.25;
                      setNewDuration(Math.max(0.25, Math.round(value * 4) / 4));
                    }}
                    className="form-input"
                    style={{ textAlign: 'center', fontSize: '16px' }}
                  />
                  <small style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                    Minimum 15 minutes (0.25 hours)
                  </small>
                </div>

                {/* New End Time Preview */}
                <div style={{ 
                  background: 'var(--info-light)', 
                  padding: '12px', 
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <p style={{ fontSize: '14px', color: 'var(--info-dark)', margin: 0 }}>
                    <strong>New time range:</strong> {editingEntry.startTime} - {calculateEndTime(editingEntry.startTime, newDuration)}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDurationModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={saveDurationChange}
                disabled={newDuration <= 0}
              >
                Save Duration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Entry Modal */}
      {showAddEntryModal && (
        <div className="modal-overlay" onClick={() => setShowAddEntryModal(false)}>
          <div className="modal-content add-entry-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>✨ Create New Time Entry</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAddEntryModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddEntrySubmit} className="entry-form enhanced-form">
                {/* Quick Info Preview */}
                <div className="entry-preview">
                  <div className="preview-header">
                    <span className="preview-icon">⏰</span>
                    <div>
                      <div className="preview-time">
                        {new Date(addEntryForm.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })} • {addEntryForm.startTime} • {formatHours(addEntryForm.duration)}
                      </div>
                      <div className="preview-end-time">
                        Ends at {calculateEndTime(addEntryForm.startTime, addEntryForm.duration)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4 className="section-title">📅 When & How Long</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>📅 Date</label>
                      <input
                        type="date"
                        value={addEntryForm.date}
                        onChange={(e) => setAddEntryForm({ ...addEntryForm, date: e.target.value })}
                        className="form-input enhanced-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>🕐 Start Time</label>
                      <input
                        type="time"
                        value={addEntryForm.startTime}
                        onChange={(e) => setAddEntryForm({ ...addEntryForm, startTime: e.target.value })}
                        className="form-input enhanced-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>⏱️ Duration</label>
                      <div className="duration-input-wrapper">
                        <input
                          type="number"
                          min="0.25"
                          max="24"
                          step="0.25"
                          value={addEntryForm.duration}
                          onChange={(e) => setAddEntryForm({ ...addEntryForm, duration: parseFloat(e.target.value) || 1 })}
                          className="form-input enhanced-input"
                          required
                        />
                        <span className="input-suffix">hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="form-section">
                  <h4 className="section-title">🏢 Client & Project</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>🏢 Client</label>
                      <select
                        value={addEntryForm.client}
                        onChange={(e) => setAddEntryForm({ ...addEntryForm, client: e.target.value, project: '' })}
                        className="form-input enhanced-input"
                        required
                      >
                        <option value="">Choose a client...</option>
                        {clients.map(client => (
                          <option key={client.id} value={client.name}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>📂 Project</label>
                      <select
                        value={addEntryForm.project}
                        onChange={(e) => setAddEntryForm({ ...addEntryForm, project: e.target.value })}
                        className="form-input enhanced-input"
                        required
                        disabled={!addEntryForm.client}
                      >
                        <option value="">
                          {addEntryForm.client ? 'Choose a project...' : 'Select client first'}
                        </option>
                        {projects
                          .filter(p => p.active && p.client === addEntryForm.client)
                          .map(project => (
                            <option key={project.id} value={project.name}>
                              {project.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="form-section">
                  <h4 className="section-title">📝 Work Description</h4>
                  <div className="form-group">
                    <label>💬 What did you work on?</label>
                    <textarea
                      value={addEntryForm.description}
                      onChange={(e) => setAddEntryForm({ ...addEntryForm, description: e.target.value })}
                      className="form-input enhanced-input"
                      rows={3}
                      placeholder="Describe the work you completed..."
                      required
                    />
                  </div>
                </div>
                
                <div className="form-section">
                  <div className="billable-toggle">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={addEntryForm.billable}
                        onChange={(e) => setAddEntryForm({ ...addEntryForm, billable: e.target.checked })}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      <span className="toggle-text">
                        💰 Billable {addEntryForm.billable ? '(This work can be billed to the client)' : '(Internal time, not billable)'}
                      </span>
                    </label>
                  </div>
                </div>
                
                <div className="form-actions enhanced-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowAddEntryModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-large">
                    ✨ Create Time Entry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Duplicate Entry Modal */}
      {showDuplicateModal && duplicatingEntry && (
        <div className="modal-overlay" onClick={() => !isGenerating && setShowDuplicateModal(false)}>
          <div className="modal-content duplicate-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🔄 Create Recurring Time Entries</h3>
              <button 
                className="modal-close"
                onClick={() => !isGenerating && setShowDuplicateModal(false)}
                disabled={isGenerating}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Entry Preview */}
              <div className="duplicate-preview-card">
                <div className="preview-header">
                  <span className="preview-icon">📋</span>
                  <div>
                    <h4 className="preview-title">
                      {duplicatingEntry.project} • {duplicatingEntry.client}
                    </h4>
                    <div className="preview-details">
                      {new Date(duplicatingEntry.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })} • {formatTimeRange(duplicatingEntry.startTime, duplicatingEntry.endTime)} • {formatHours(duplicatingEntry.duration)}
                    </div>
                  </div>
                </div>
                <div className="preview-description">
                  {duplicatingEntry.description}
                </div>
              </div>

              <div className="duplicate-settings">
                <div className="settings-grid">
                  <div className="form-group">
                    <label>🔄 Frequency</label>
                    <select
                      value={duplicateSettings.frequency}
                      onChange={(e) => setDuplicateSettings({ ...duplicateSettings, frequency: e.target.value as 'weekly' | 'daily' | 'monthly' })}
                      className="form-input"
                      disabled={isGenerating}
                    >
                      <option value="daily">📅 Daily</option>
                      <option value="weekly">📆 Weekly</option>
                      <option value="monthly">🗓️ Monthly</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>📊 Count</label>
                    <div className="count-input-wrapper">
                      <input
                        type="number"
                        min="1"
                        max="52"
                        value={duplicateSettings.count}
                        onChange={(e) => setDuplicateSettings({ ...duplicateSettings, count: parseInt(e.target.value) || 1 })}
                        className="form-input"
                        disabled={isGenerating}
                      />
                      <span className="count-label">occurrences</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={duplicateSettings.skipWeekends}
                      onChange={(e) => setDuplicateSettings({ ...duplicateSettings, skipWeekends: e.target.checked })}
                      disabled={isGenerating}
                    />
                    <span className="checkbox-text">🚫 Skip weekends (Saturday & Sunday)</span>
                  </label>
                </div>
              </div>

              {/* Preview upcoming dates */}
              <div className="dates-preview">
                <h4 className="preview-section-title">📅 Upcoming dates preview:</h4>
                <div className="dates-list">
                  {getPreviewDates().map((date, index) => (
                    <div key={index} className="date-item">
                      <span className="date-number">{index + 1}</span>
                      <span className="date-text">
                        {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  ))}
                  {duplicateSettings.count > 5 && (
                    <div className="date-item more-dates">
                      <span className="date-number">...</span>
                      <span className="date-text">
                        +{duplicateSettings.count - 5} more dates
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDuplicateModal(false)}
                disabled={isGenerating}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={generateDuplicates}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <span className="spinner">⏳</span>
                    Creating...
                  </>
                ) : (
                  <>
                    ✨ Create {duplicateSettings.count} Duplicates
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};