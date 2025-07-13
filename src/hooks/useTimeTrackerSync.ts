/**
 * Synchronous wrapper for the async TimeTrackerDB hook
 * Provides backward compatibility with existing components
 */

import { useCallback, useMemo } from 'react';
import { TimeEntry, Project, Client, Settings, DashboardStats } from '../types';
import { useTimeTrackerDB } from './useTimeTrackerDB';

// Convert UserSettings to Settings format for backward compatibility
const convertToLegacySettings = (userSettings: any): Settings => {
  return {
    defaultClients: [],
    defaultProjects: [],
    workingHours: {
      start: userSettings.workingHours?.start || '09:00',
      end: userSettings.workingHours?.end || '17:00',
      timezone: userSettings.timezone || 'UTC'
    },
    billableByDefault: true,
    autoTrackMeetings: true,
    autoTrackSlack: false,
    minimumSessionLength: 15,
    notifications: userSettings.notifications?.enableDesktop || true,
    autoBreaks: false,
    theme: userSettings.theme || 'light',
    emailNotifications: {
      enabled: false,
      dailyReviewTime: '17:00',
      approvalReminders: true,
      weeklyDigest: true,
      email: ''
    },
    integrations: Object.entries(userSettings.integrations || {}).map(([key, value]: [string, any]) => ({
      id: key,
      name: key as any,
      enabled: value.enabled || false,
      lastSync: value.lastSync,
      settings: value.settings || {}
    }))
  };
};

export const useTimeTrackerSync = () => {
  const db = useTimeTrackerDB();

  // Synchronous wrappers that handle async operations in the background
  const addTimeEntry = useCallback((entry: Omit<TimeEntry, 'id'>): TimeEntry => {
    const syncEntry: TimeEntry = {
      ...entry,
      id: crypto.randomUUID()
    };

    // Fire and forget the async operation
    db.addTimeEntry(entry).catch(error => {
      console.error('Failed to persist time entry:', error);
    });

    return syncEntry;
  }, [db]);

  const updateTimeEntry = useCallback((id: string, updates: Partial<TimeEntry>): void => {
    db.updateTimeEntry(id, updates).catch(error => {
      console.error('Failed to update time entry:', error);
    });
  }, [db]);

  const deleteTimeEntry = useCallback((id: string): void => {
    db.deleteTimeEntry(id).catch(error => {
      console.error('Failed to delete time entry:', error);
    });
  }, [db]);

  const addProject = useCallback((project: Omit<Project, 'id' | 'createdAt'>): Project => {
    const syncProject: Project = {
      ...project,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    db.addProject(project).catch(error => {
      console.error('Failed to persist project:', error);
    });

    return syncProject;
  }, [db]);

  const updateProject = useCallback((id: string, updates: Partial<Project>): void => {
    db.updateProject(id, updates).catch(error => {
      console.error('Failed to update project:', error);
    });
  }, [db]);

  const deleteProject = useCallback((id: string): void => {
    db.deleteProject(id).catch(error => {
      console.error('Failed to delete project:', error);
    });
  }, [db]);

  const addClient = useCallback((client: Omit<Client, 'id' | 'createdAt'>): Client => {
    const syncClient: Client = {
      ...client,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    db.addClient(client).catch(error => {
      console.error('Failed to persist client:', error);
    });

    return syncClient;
  }, [db]);

  const updateClient = useCallback((id: string, updates: Partial<Client>): void => {
    db.updateClient(id, updates).catch(error => {
      console.error('Failed to update client:', error);
    });
  }, [db]);

  const deleteClient = useCallback((id: string): void => {
    db.deleteClient(id).catch(error => {
      console.error('Failed to delete client:', error);
    });
  }, [db]);

  const setSettings = useCallback((settings: Settings): void => {
    // Convert Settings back to UserSettings format
    const userSettings = {
      theme: settings.theme,
      timezone: settings.workingHours.timezone,
      workingHours: {
        start: settings.workingHours.start,
        end: settings.workingHours.end,
        workingDays: [1, 2, 3, 4, 5] // Monday to Friday
      },
      notifications: {
        enableDesktop: settings.notifications,
        reminderInterval: 60,
        endOfDayReminder: true
      },
      privacy: {
        trackActiveWindow: false,
        trackKeystrokes: false,
        trackMouse: false,
        blurScreenshots: true
      },
      integrations: settings.integrations.reduce((acc, integration) => {
        acc[integration.id] = {
          enabled: integration.enabled,
          lastSync: integration.lastSync,
          settings: integration.settings
        };
        return acc;
      }, {} as Record<string, any>)
    };

    db.setSettings(userSettings).catch(error => {
      console.error('Failed to update settings:', error);
    });
  }, [db]);

  const toggleIntegration = useCallback((integrationId: string): void => {
    db.toggleIntegration(integrationId);
  }, [db]);

  // Calculate dashboard stats
  const stats = useMemo((): DashboardStats => {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const todayEntries = db.timeEntries.filter(entry => entry.date === today);
    const weekEntries = db.timeEntries.filter(entry => new Date(entry.date) >= weekStart);
    const monthEntries = db.timeEntries.filter(entry => new Date(entry.date) >= monthStart);
    
    const todayHours = todayEntries.reduce((sum, entry) => sum + entry.duration, 0);
    const weekHours = weekEntries.reduce((sum, entry) => sum + entry.duration, 0);
    const monthHours = monthEntries.reduce((sum, entry) => sum + entry.duration, 0);
    
    const billableEntries = db.timeEntries.filter(entry => entry.billable && entry.status === 'approved');
    const totalEarnings = billableEntries.reduce((sum, entry) => {
      // For now, use a default rate since hourlyRate isn't in Project interface
      const rate = 100; // TODO: Add hourlyRate to Project interface
      return sum + (entry.duration * rate);
    }, 0);

    return {
      todayHours,
      weekHours,
      monthHours,
      billableHours: billableEntries.reduce((sum, entry) => sum + entry.duration, 0),
      nonBillableHours: db.timeEntries.filter(entry => !entry.billable).reduce((sum, entry) => sum + entry.duration, 0),
      pendingEntries: db.timeEntries.filter(entry => entry.status === 'pending').length,
      totalClients: db.clients.length,
      activeProjects: db.projects.filter(p => p.active).length,
      totalEarnings,
      utilizationRate: weekHours > 0 ? (billableEntries.filter(entry => weekEntries.includes(entry)).reduce((sum, entry) => sum + entry.duration, 0) / weekHours) * 100 : 0,
      automatedEntries: monthEntries.filter(entry => entry.automated).length
    };
  }, [db.timeEntries, db.projects, db.clients]);

  return {
    // Data - convert UserSettings to Settings for backward compatibility
    timeEntries: db.timeEntries,
    projects: db.projects,
    clients: db.clients,
    settings: convertToLegacySettings(db.settings),
    stats,
    isLoading: db.isLoading,
    error: db.error,

    // Operations - synchronous interface
    addTimeEntry,
    updateTimeEntry,
    deleteTimeEntry,
    addProject,
    updateProject,
    deleteProject,
    addClient,
    updateClient,
    deleteClient,
    setSettings,
    toggleIntegration,

    // Data management - pass through async functions
    exportData: db.exportData,
    clearAllData: db.clearAllData
  };
};