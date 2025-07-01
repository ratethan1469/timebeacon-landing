import { describe, it, expect, beforeEach } from 'vitest';
import { TimeBeaconDatabase } from '../database';
import { TimeEntry, Project, Client } from '../../types';

describe('TimeBeaconDatabase', () => {
  let db: TimeBeaconDatabase;

  beforeEach(() => {
    db = new TimeBeaconDatabase();
  });

  describe('Time Entries', () => {
    const mockTimeEntry: TimeEntry = {
      id: 'test-entry-1',
      date: '2025-01-15',
      startTime: '09:00',
      endTime: '10:00',
      duration: 1,
      client: 'Test Client',
      project: 'Test Project',
      description: 'Test work',
      category: 'client',
      status: 'pending',
      automated: false,
      billable: true
    };

    it('should add a time entry', async () => {
      await expect(db.addTimeEntry(mockTimeEntry)).resolves.toBeUndefined();
    });

    it('should get a time entry by id', async () => {
      await db.addTimeEntry(mockTimeEntry);
      const result = await db.getTimeEntry('test-entry-1');
      expect(result).toEqual(mockTimeEntry);
    });

    it('should update a time entry', async () => {
      await db.addTimeEntry(mockTimeEntry);
      const updates = { duration: 2, endTime: '11:00' };
      await db.updateTimeEntry('test-entry-1', updates);
      
      const result = await db.getTimeEntry('test-entry-1');
      expect(result?.duration).toBe(2);
      expect(result?.endTime).toBe('11:00');
    });

    it('should delete a time entry', async () => {
      await db.addTimeEntry(mockTimeEntry);
      await db.deleteTimeEntry('test-entry-1');
      
      const result = await db.getTimeEntry('test-entry-1');
      expect(result).toBeNull();
    });

    it('should get all time entries', async () => {
      await db.addTimeEntry(mockTimeEntry);
      await db.addTimeEntry({ ...mockTimeEntry, id: 'test-entry-2' });
      
      const result = await db.getAllTimeEntries();
      expect(result).toHaveLength(2);
    });

    it('should filter time entries by date range', async () => {
      await db.addTimeEntry(mockTimeEntry);
      await db.addTimeEntry({ ...mockTimeEntry, id: 'test-entry-2', date: '2025-01-20' });
      await db.addTimeEntry({ ...mockTimeEntry, id: 'test-entry-3', date: '2025-02-01' });
      
      const result = await db.getTimeEntriesByDateRange('2025-01-01', '2025-01-31');
      expect(result).toHaveLength(2);
    });
  });

  describe('Projects', () => {
    const mockProject: Project = {
      id: 'test-project-1',
      name: 'Test Project',
      client: 'Test Client',
      color: '#3b82f6',
      active: true,
      createdAt: '2025-01-15'
    };

    it('should add a project', async () => {
      await expect(db.addProject(mockProject)).resolves.toBeUndefined();
    });

    it('should get a project by id', async () => {
      await db.addProject(mockProject);
      const result = await db.getProject('test-project-1');
      expect(result).toEqual(mockProject);
    });

    it('should update a project', async () => {
      await db.addProject(mockProject);
      const updates = { name: 'Updated Project', rate: 150 };
      await db.updateProject('test-project-1', updates);
      
      const result = await db.getProject('test-project-1');
      expect(result?.name).toBe('Updated Project');
      expect(result?.rate).toBe(150);
    });

    it('should delete a project', async () => {
      await db.addProject(mockProject);
      await db.deleteProject('test-project-1');
      
      const result = await db.getProject('test-project-1');
      expect(result).toBeNull();
    });

    it('should get all projects', async () => {
      await db.addProject(mockProject);
      await db.addProject({ ...mockProject, id: 'test-project-2', name: 'Project 2' });
      
      const result = await db.getAllProjects();
      expect(result).toHaveLength(2);
    });
  });

  describe('Clients', () => {
    const mockClient: Client = {
      id: 'test-client-1',
      name: 'Test Client',
      color: '#10b981',
      active: true,
      createdAt: '2025-01-15'
    };

    it('should add a client', async () => {
      await expect(db.addClient(mockClient)).resolves.toBeUndefined();
    });

    it('should get a client by id', async () => {
      await db.addClient(mockClient);
      const result = await db.getClient('test-client-1');
      expect(result).toEqual(mockClient);
    });

    it('should update a client', async () => {
      await db.addClient(mockClient);
      const updates = { name: 'Updated Client', defaultRate: 200 };
      await db.updateClient('test-client-1', updates);
      
      const result = await db.getClient('test-client-1');
      expect(result?.name).toBe('Updated Client');
      expect(result?.defaultRate).toBe(200);
    });

    it('should delete a client', async () => {
      await db.addClient(mockClient);
      await db.deleteClient('test-client-1');
      
      const result = await db.getClient('test-client-1');
      expect(result).toBeNull();
    });

    it('should get all clients', async () => {
      await db.addClient(mockClient);
      await db.addClient({ ...mockClient, id: 'test-client-2', name: 'Client 2' });
      
      const result = await db.getAllClients();
      expect(result).toHaveLength(2);
    });
  });

  describe('Data Management', () => {
    it('should export all data', async () => {
      const mockTimeEntry: TimeEntry = {
        id: 'test-entry-1',
        date: '2025-01-15',
        startTime: '09:00',
        endTime: '10:00',
        duration: 1,
        client: 'Test Client',
        project: 'Test Project',
        description: 'Test work',
        category: 'client',
        status: 'pending',
        automated: false,
        billable: true
      };

      await db.addTimeEntry(mockTimeEntry);
      
      const exportedData = await db.exportAllData();
      expect(exportedData.timeEntries).toHaveLength(1);
      expect(exportedData.timeEntries[0]).toEqual(mockTimeEntry);
    });

    it('should clear all data', async () => {
      const mockTimeEntry: TimeEntry = {
        id: 'test-entry-1',
        date: '2025-01-15',
        startTime: '09:00',
        endTime: '10:00',
        duration: 1,
        client: 'Test Client',
        project: 'Test Project',
        description: 'Test work',
        category: 'client',
        status: 'pending',
        automated: false,
        billable: true
      };

      await db.addTimeEntry(mockTimeEntry);
      await db.clearAllData();
      
      const entries = await db.getAllTimeEntries();
      expect(entries).toHaveLength(0);
    });

    it('should get database statistics', async () => {
      const stats = await db.getStats();
      expect(stats).toHaveProperty('timeEntries');
      expect(stats).toHaveProperty('projects');
      expect(stats).toHaveProperty('clients');
      expect(stats).toHaveProperty('dbSize');
      expect(typeof stats.timeEntries).toBe('number');
      expect(typeof stats.dbSize).toBe('string');
    });
  });

  describe('Error Handling', () => {
    it('should handle getting non-existent time entry', async () => {
      const result = await db.getTimeEntry('non-existent');
      expect(result).toBeNull();
    });

    it('should handle updating non-existent time entry', async () => {
      await expect(db.updateTimeEntry('non-existent', { duration: 2 }))
        .rejects.toThrow('Time entry non-existent not found');
    });

    it('should handle getting non-existent project', async () => {
      const result = await db.getProject('non-existent');
      expect(result).toBeNull();
    });

    it('should handle getting non-existent client', async () => {
      const result = await db.getClient('non-existent');
      expect(result).toBeNull();
    });
  });
});