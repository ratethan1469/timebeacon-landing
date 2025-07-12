/**
 * Real Time Tracker Hook with Database Persistence
 * Replaces the mock useTimeTracker with actual data persistence
 */

import { useState, useEffect, useCallback } from 'react';
import { TimeEntry, Project, Client, UserSettings } from '../types';
import { timeBeaconDB } from '../services/database';
import { mockTimeEntries, mockProjects, mockClients } from '../mockData';

interface TimeTrackerState {
  timeEntries: TimeEntry[];
  projects: Project[];
  clients: Client[];
  settings: UserSettings;
  isLoading: boolean;
  error: string | null;
}

const defaultSettings: UserSettings = {
  theme: 'light',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  workingHours: {
    start: '09:00',
    end: '17:00',
    workingDays: [1, 2, 3, 4, 5]
  },
  notifications: {
    enableDesktop: true,
    reminderInterval: 60,
    endOfDayReminder: true
  },
  privacy: {
    trackActiveWindow: false,
    trackKeystrokes: false,
    trackMouse: false,
    blurScreenshots: true
  },
  integrations: {}
};

export const useTimeTrackerDB = () => {
  const [state, setState] = useState<TimeTrackerState>({
    timeEntries: [],
    projects: [],
    clients: [],
    settings: defaultSettings,
    isLoading: true,
    error: null
  });

  // Initialize data from database
  useEffect(() => {
    const initializeData = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        
        // Wait for database to initialize
        await timeBeaconDB.init();
        
        // Load all data
        const [timeEntries, projects, clients, settings] = await Promise.all([
          timeBeaconDB.getAllTimeEntries(),
          timeBeaconDB.getAllProjects(),
          timeBeaconDB.getAllClients(),
          timeBeaconDB.getSettings()
        ]);

        // If no data exists, create initial seed data
        if (projects.length === 0 && clients.length === 0) {
          await createInitialData();
          // Re-fetch after seeding
          const [newTimeEntries, newProjects, newClients] = await Promise.all([
            timeBeaconDB.getAllTimeEntries(),
            timeBeaconDB.getAllProjects(),
            timeBeaconDB.getAllClients()
          ]);
          
          setState({
            timeEntries: newTimeEntries,
            projects: newProjects,
            clients: newClients,
            settings: settings || defaultSettings,
            isLoading: false,
            error: null
          });
        } else {
          setState({
            timeEntries,
            projects,
            clients,
            settings: settings || defaultSettings,
            isLoading: false,
            error: null
          });
        }

        console.log('✅ Data loaded from database');
      } catch (error) {
        console.error('❌ Failed to load data:', error);
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to load data'
        }));
      }
    };

    initializeData();
  }, []);

  // Create initial seed data for new users using rich mock data
  const createInitialData = async () => {
    console.log('🚀 Creating initial data with mock entries...');
    
    // Use comprehensive mock data instead of minimal seed data
    for (const client of mockClients) {
      await timeBeaconDB.addClient(client);
    }
    
    for (const project of mockProjects) {
      await timeBeaconDB.addProject(project);
    }

    for (const entry of mockTimeEntries) {
      await timeBeaconDB.addTimeEntry(entry);
    }

    await timeBeaconDB.updateSettings(defaultSettings);
    
    console.log('✅ Initial data created with', mockTimeEntries.length, 'time entries,', mockProjects.length, 'projects, and', mockClients.length, 'clients');
  };

  // Time Entry Operations
  const addTimeEntry = useCallback(async (entryData: Omit<TimeEntry, 'id'>): Promise<TimeEntry> => {
    try {
      const entry: TimeEntry = {
        ...entryData,
        id: crypto.randomUUID(),
      };

      await timeBeaconDB.addTimeEntry(entry);
      setState(prev => ({
        ...prev,
        timeEntries: [...prev.timeEntries, entry]
      }));

      return entry;
    } catch (error) {
      console.error('❌ Failed to add time entry:', error);
      throw error;
    }
  }, []);

  const updateTimeEntry = useCallback(async (id: string, updates: Partial<TimeEntry>): Promise<void> => {
    try {
      await timeBeaconDB.updateTimeEntry(id, updates);
      setState(prev => ({
        ...prev,
        timeEntries: prev.timeEntries.map(entry =>
          entry.id === id ? { ...entry, ...updates } : entry
        )
      }));
    } catch (error) {
      console.error('❌ Failed to update time entry:', error);
      throw error;
    }
  }, []);

  const deleteTimeEntry = useCallback(async (id: string): Promise<void> => {
    try {
      await timeBeaconDB.deleteTimeEntry(id);
      setState(prev => ({
        ...prev,
        timeEntries: prev.timeEntries.filter(entry => entry.id !== id)
      }));
    } catch (error) {
      console.error('❌ Failed to delete time entry:', error);
      throw error;
    }
  }, []);

  // Project Operations
  const addProject = useCallback(async (projectData: Omit<Project, 'id' | 'createdAt'>): Promise<Project> => {
    try {
      const project: Project = {
        ...projectData,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
      };

      await timeBeaconDB.addProject(project);
      setState(prev => ({
        ...prev,
        projects: [...prev.projects, project]
      }));

      return project;
    } catch (error) {
      console.error('❌ Failed to add project:', error);
      throw error;
    }
  }, []);

  const updateProject = useCallback(async (id: string, updates: Partial<Project>): Promise<void> => {
    try {
      await timeBeaconDB.updateProject(id, updates);
      setState(prev => ({
        ...prev,
        projects: prev.projects.map(project =>
          project.id === id ? { ...project, ...updates } : project
        )
      }));
    } catch (error) {
      console.error('❌ Failed to update project:', error);
      throw error;
    }
  }, []);

  const deleteProject = useCallback(async (id: string): Promise<void> => {
    try {
      await timeBeaconDB.deleteProject(id);
      setState(prev => ({
        ...prev,
        projects: prev.projects.filter(project => project.id !== id)
      }));
    } catch (error) {
      console.error('❌ Failed to delete project:', error);
      throw error;
    }
  }, []);

  // Client Operations
  const addClient = useCallback(async (clientData: Omit<Client, 'id' | 'createdAt'>): Promise<Client> => {
    try {
      const client: Client = {
        ...clientData,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
      };

      await timeBeaconDB.addClient(client);
      setState(prev => ({
        ...prev,
        clients: [...prev.clients, client]
      }));

      return client;
    } catch (error) {
      console.error('❌ Failed to add client:', error);
      throw error;
    }
  }, []);

  const updateClient = useCallback(async (id: string, updates: Partial<Client>): Promise<void> => {
    try {
      await timeBeaconDB.updateClient(id, updates);
      setState(prev => ({
        ...prev,
        clients: prev.clients.map(client =>
          client.id === id ? { ...client, ...updates } : client
        )
      }));
    } catch (error) {
      console.error('❌ Failed to update client:', error);
      throw error;
    }
  }, []);

  const deleteClient = useCallback(async (id: string): Promise<void> => {
    try {
      await timeBeaconDB.deleteClient(id);
      setState(prev => ({
        ...prev,
        clients: prev.clients.filter(client => client.id !== id)
      }));
    } catch (error) {
      console.error('❌ Failed to delete client:', error);
      throw error;
    }
  }, []);

  // Settings Operations
  const setSettings = useCallback(async (settings: UserSettings): Promise<void> => {
    try {
      await timeBeaconDB.updateSettings(settings);
      setState(prev => ({ ...prev, settings }));
    } catch (error) {
      console.error('❌ Failed to update settings:', error);
      throw error;
    }
  }, []);

  // Integration Operations (placeholder for future real integrations)
  const toggleIntegration = useCallback((integrationId: string): void => {
    // This will be replaced with real OAuth flows
    console.log('🔗 Toggle integration:', integrationId);
    setState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        integrations: {
          ...prev.settings.integrations,
          [integrationId]: {
            enabled: !prev.settings.integrations[integrationId]?.enabled,
            lastSync: new Date().toISOString()
          }
        }
      }
    }));
  }, []);

  // Data Export/Import
  const exportData = useCallback(async (format: 'json' | 'csv') => {
    try {
      const data = await timeBeaconDB.exportAllData();
      
      if (format === 'json') {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `timebeacon-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        // CSV export for time entries
        const csvContent = [
          'Date,Start Time,End Time,Duration,Client,Project,Description,Status,Billable',
          ...data.timeEntries.map(entry => [
            entry.date,
            entry.startTime,
            entry.endTime,
            entry.duration,
            entry.client,
            entry.project,
            `"${entry.description.replace(/"/g, '""')}"`,
            entry.status,
            entry.billable ? 'Yes' : 'No'
          ].join(','))
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `timebeacon-entries-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
      }
      
      console.log('✅ Data exported successfully');
    } catch (error) {
      console.error('❌ Failed to export data:', error);
      throw error;
    }
  }, []);

  const clearAllData = useCallback(async (): Promise<void> => {
    try {
      await timeBeaconDB.clearAllData();
      setState({
        timeEntries: [],
        projects: [],
        clients: [],
        settings: defaultSettings,
        isLoading: false,
        error: null
      });
      console.log('✅ All data cleared');
    } catch (error) {
      console.error('❌ Failed to clear data:', error);
      throw error;
    }
  }, []);

  return {
    // Data
    timeEntries: state.timeEntries,
    projects: state.projects,
    clients: state.clients,
    settings: state.settings,
    isLoading: state.isLoading,
    error: state.error,

    // Time Entry Operations
    addTimeEntry,
    updateTimeEntry,
    deleteTimeEntry,

    // Project Operations
    addProject,
    updateProject,
    deleteProject,

    // Client Operations
    addClient,
    updateClient,
    deleteClient,

    // Settings
    setSettings,
    toggleIntegration,

    // Data Management
    exportData,
    clearAllData
  };
};