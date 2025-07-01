import { useState, useEffect } from 'react';
import { calendarIntegration, CalendarEvent } from '../services/calendarIntegration';

export const useCalendarEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Force sync calendar events
      const result = await calendarIntegration.forceSync();
      
      if (result.success) {
        console.log(`Calendar sync completed. Processed ${result.eventsProcessed} new events.`);
        
        // For now, we'll get events from the mock data
        // In a real implementation, these would be stored and retrieved from the database
        setEvents([]);
      } else {
        setError(result.error || 'Failed to sync calendar events');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch calendar events');
    } finally {
      setIsLoading(false);
    }
  };

  const getEventsForDate = (date: string): CalendarEvent[] => {
    return events.filter(event => {
      const eventDate = new Date(event.start).toISOString().split('T')[0];
      return eventDate === date;
    });
  };

  const getIntegrationStatus = () => {
    return calendarIntegration.getStatus();
  };

  useEffect(() => {
    // Initial fetch
    fetchEvents();
    
    // Set up periodic sync every 5 minutes
    const interval = setInterval(fetchEvents, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    events,
    isLoading,
    error,
    fetchEvents,
    getEventsForDate,
    getIntegrationStatus
  };
};