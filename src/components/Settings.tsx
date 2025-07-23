import React, { useState } from 'react';
import { Settings as SettingsType, Project } from '../types';
import { MultiSelect } from './MultiSelect';
import { projectTemplates, ProjectTemplate } from '../data/projectTemplates';

interface SettingsProps {
  settings: SettingsType;
  projects: Project[];
  onUpdateSettings: (settings: SettingsType) => void;
  onAddProject: (project: Omit<Project, 'id' | 'createdAt'>) => Project;
  onUpdateProject: (id: string, updates: Partial<Project>) => void;
  onDeleteProject: (id: string) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  settings,
  projects,
  onUpdateSettings,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
}) => {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState({
    name: '',
    client: '',
    description: '',
    rate: 0,
    color: '#3b82f6',
    active: true,
    billable: true,
    clientId: '',
    category: 'implementation' as Project['category'],
    status: 'planning' as Project['status'],
    startDate: new Date().toISOString().split('T')[0]
  });

  const handleSettingsChange = (updates: Partial<SettingsType>) => {
    onUpdateSettings({ ...settings, ...updates });
  };

  // Ensure emailNotifications is always defined with defaults
  const safeEmailNotifications = settings.emailNotifications || {
    enabled: false,
    dailyReviewTime: '17:30',
    approvalReminders: true,
    weeklyDigest: true,
    email: ''
  };

  // Ensure defaultProjects is an array
  const safeDefaultProjects = Array.isArray(settings.defaultProjects) ? settings.defaultProjects : [];

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      onUpdateProject(editingProject.id, projectForm);
      setEditingProject(null);
    } else {
      onAddProject(projectForm);
    }
    setProjectForm({
      name: '',
      client: '',
      description: '',
      rate: 0,
      color: '#3b82f6',
      active: true,
      billable: true,
      clientId: '',
      category: 'implementation',
      status: 'planning',
      startDate: new Date().toISOString().split('T')[0]
    });
    setShowProjectForm(false);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm({
      name: project.name,
      client: project.client,
      description: project.description || '',
      rate: project.rate || 0,
      color: project.color,
      active: project.active,
      billable: project.billable || true,
      clientId: project.clientId || '',
      category: project.category || 'implementation',
      status: project.status || 'planning',
      startDate: project.startDate || new Date().toISOString().split('T')[0]
    });
    setShowProjectForm(true);
  };

  const handleUseTemplate = (template: ProjectTemplate) => {
    setProjectForm({
      name: template.name,
      client: template.client,
      description: template.description,
      rate: template.estimatedRate,
      color: template.color,
      active: true,
      billable: true,
      clientId: '',
      category: template.category,
      status: 'planning',
      startDate: new Date().toISOString().split('T')[0]
    });
    setShowTemplates(false);
    setShowProjectForm(true);
  };

  const exportToCSV = () => {
    // This would implement CSV export functionality
    alert('CSV export feature would be implemented here');
  };

  const exportToPDF = () => {
    // This would implement PDF export functionality
    alert('PDF export feature would be implemented here');
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Settings</h1>
        <p className="dashboard-subtitle">Configure your TimeBeacon preferences</p>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {/* Profile Settings */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">Profile Settings</h2>
          </div>
          <div style={{ padding: '24px' }}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={settings.profile?.name || ''}
                  onChange={(e) => handleSettingsChange({ 
                    profile: { ...settings.profile, name: e.target.value }
                  })}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={settings.profile?.email || ''}
                  onChange={(e) => handleSettingsChange({ 
                    profile: { ...settings.profile, email: e.target.value }
                  })}
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  value={settings.profile?.company || ''}
                  onChange={(e) => handleSettingsChange({ 
                    profile: { ...settings.profile, company: e.target.value }
                  })}
                  className="form-input"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  value={settings.profile?.jobTitle || ''}
                  onChange={(e) => handleSettingsChange({ 
                    profile: { ...settings.profile, jobTitle: e.target.value }
                  })}
                  className="form-input"
                  placeholder="Enter your job title"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={settings.profile?.phone || ''}
                onChange={(e) => handleSettingsChange({ 
                  profile: { ...settings.profile, phone: e.target.value }
                })}
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* General Settings */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">General Settings</h2>
          </div>
          <div style={{ padding: '24px' }}>
            <div className="form-row">
              <div className="form-group">
                <label>Default Projects</label>
                <MultiSelect
                  options={projects.filter(p => p.active).map(project => ({
                    value: project.name,
                    label: project.name
                  }))}
                  selectedValues={safeDefaultProjects}
                  onChange={(values) => handleSettingsChange({ defaultProjects: values })}
                  placeholder="Select default projects..."
                  className="form-input"
                />
                <small style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                  Projects that will be pre-selected when creating new time entries
                </small>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Timezone</label>
                <select
                  value={settings.workingHours.timezone}
                  onChange={(e) => handleSettingsChange({ 
                    workingHours: { ...settings.workingHours, timezone: e.target.value }
                  })}
                  className="form-input"
                >
                  <option value="America/New_York">Eastern Time</option>
                  <option value="America/Chicago">Central Time</option>
                  <option value="America/Denver">Mountain Time</option>
                  <option value="America/Los_Angeles">Pacific Time</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
              <div className="form-group">
                {/* Empty space for layout balance */}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Work Start Time</label>
                <input
                  type="time"
                  value={settings.workingHours.start}
                  onChange={(e) => handleSettingsChange({ 
                    workingHours: { ...settings.workingHours, start: e.target.value }
                  })}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Work End Time</label>
                <input
                  type="time"
                  value={settings.workingHours.end}
                  onChange={(e) => handleSettingsChange({ 
                    workingHours: { ...settings.workingHours, end: e.target.value }
                  })}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <input 
                  type="checkbox" 
                  checked={settings.notifications}
                  onChange={(e) => handleSettingsChange({ notifications: e.target.checked })}
                />
                <span>Enable browser notifications</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={settings.autoBreaks}
                  onChange={(e) => handleSettingsChange({ autoBreaks: e.target.checked })}
                />
                <span>Enable automatic break detection</span>
              </label>
            </div>
          </div>
        </div>

        {/* Email Notifications */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">Email Notifications</h2>
          </div>
          <div style={{ padding: '24px' }}>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <input 
                  type="checkbox" 
                  checked={safeEmailNotifications.enabled}
                  onChange={(e) => handleSettingsChange({ 
                    emailNotifications: { 
                      ...safeEmailNotifications, 
                      enabled: e.target.checked 
                    }
                  })}
                />
                <span>Enable email notifications</span>
              </label>
            </div>

            {safeEmailNotifications.enabled && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={safeEmailNotifications.email}
                      onChange={(e) => handleSettingsChange({ 
                        emailNotifications: { 
                          ...safeEmailNotifications, 
                          email: e.target.value 
                        }
                      })}
                      className="form-input"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Daily Review Time</label>
                    <input
                      type="time"
                      value={safeEmailNotifications.dailyReviewTime}
                      onChange={(e) => handleSettingsChange({ 
                        emailNotifications: { 
                          ...safeEmailNotifications, 
                          dailyReviewTime: e.target.value 
                        }
                      })}
                      className="form-input"
                    />
                    <small style={{ color: 'var(--gray-600)', fontSize: '12px' }}>
                      When to send daily timesheet review reminders
                    </small>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <input 
                      type="checkbox" 
                      checked={safeEmailNotifications.approvalReminders}
                      onChange={(e) => handleSettingsChange({ 
                        emailNotifications: { 
                          ...safeEmailNotifications, 
                          approvalReminders: e.target.checked 
                        }
                      })}
                    />
                    <span>Send approval reminders</span>
                  </label>
                  <small style={{ color: 'var(--gray-600)', fontSize: '12px', marginLeft: '28px' }}>
                    Get notified about pending time entries awaiting approval
                  </small>
                  
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', marginBottom: '12px' }}>
                    <input 
                      type="checkbox" 
                      checked={safeEmailNotifications.weeklyDigest}
                      onChange={(e) => handleSettingsChange({ 
                        emailNotifications: { 
                          ...safeEmailNotifications, 
                          weeklyDigest: e.target.checked 
                        }
                      })}
                    />
                    <span>Weekly utilization digest</span>
                  </label>
                  <small style={{ color: 'var(--gray-600)', fontSize: '12px', marginLeft: '28px' }}>
                    Weekly summary of hours logged and utilization rate progress
                  </small>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Project Management */}
        <div className="content-card">
          <div className="card-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="card-title">Project Management</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowTemplates(!showTemplates)}
                >
                  📋 Templates
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowProjectForm(true)}
                >
                  ➕ Add Project
                </button>
              </div>
            </div>
          </div>
          <div style={{ padding: '24px' }}>
            {showTemplates && (
              <div style={{ 
                marginBottom: '24px', 
                padding: '20px', 
                backgroundColor: 'var(--surface-hover)', 
                borderRadius: '8px' 
              }}>
                <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
                  Project Templates
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '12px' 
                }}>
                  {projectTemplates.map((template) => (
                    <div 
                      key={template.id}
                      style={{ 
                        padding: '16px', 
                        backgroundColor: 'var(--surface)', 
                        borderRadius: '6px',
                        border: '1px solid var(--border)',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      className="template-card"
                      onClick={() => handleUseTemplate(template)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div 
                          style={{ 
                            width: '12px', 
                            height: '12px', 
                            borderRadius: '50%', 
                            backgroundColor: template.color 
                          }}
                        />
                        <h4 style={{ fontSize: '14px', fontWeight: '600', margin: 0 }}>
                          {template.name}
                        </h4>
                        <span style={{ 
                          fontSize: '12px', 
                          color: 'var(--text-tertiary)',
                          backgroundColor: 'var(--surface-hover)',
                          padding: '2px 6px',
                          borderRadius: '4px'
                        }}>
                          {template.category}
                        </span>
                      </div>
                      <p style={{ 
                        fontSize: '12px', 
                        color: 'var(--text-secondary)', 
                        margin: '0 0 8px 0',
                        lineHeight: '1.4'
                      }}>
                        {template.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-primary)' }}>
                          ${template.estimatedRate}/hr
                        </span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          {template.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag}
                              style={{ 
                                fontSize: '10px', 
                                backgroundColor: 'var(--brand-primary-light)',
                                color: 'var(--brand-primary)',
                                padding: '2px 4px',
                                borderRadius: '3px'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {showProjectForm && (
              <div style={{ 
                marginBottom: '24px', 
                padding: '20px', 
                backgroundColor: 'var(--gray-50)', 
                borderRadius: '8px' 
              }}>
                <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h3>
                <form onSubmit={handleProjectSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input
                        type="text"
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Client</label>
                      <input
                        type="text"
                        value={projectForm.client}
                        onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                        className="form-input"
                        placeholder="e.g., Acme Corp - CRM Implementation"
                        required
                      />
                      <small style={{ color: 'var(--text-tertiary)', fontSize: '12px' }}>
                        Format: Customer Name - Project Type
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Color</label>
                      <input
                        type="color"
                        value={projectForm.color}
                        onChange={(e) => setProjectForm({ ...projectForm, color: e.target.value })}
                        className="form-input"
                        style={{ height: '44px' }}
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Hourly Rate ($)</label>
                      <input
                        type="number"
                        value={projectForm.rate}
                        onChange={(e) => setProjectForm({ ...projectForm, rate: parseFloat(e.target.value) || 0 })}
                        className="form-input"
                        min="0"
                        step="0.01"
                        placeholder="150.00"
                      />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        value={projectForm.category}
                        onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as Project['category'] })}
                        className="form-input"
                      >
                        <option value="implementation">Implementation</option>
                        <option value="ongoing-support">Ongoing Support</option>
                        <option value="training">Training</option>
                        <option value="consulting">Consulting</option>
                        <option value="escalation">Escalation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Status</label>
                      <select
                        value={projectForm.status}
                        onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value as Project['status'] })}
                        className="form-input"
                      >
                        <option value="planning">Planning</option>
                        <option value="active">Active</option>
                        <option value="on-hold">On Hold</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Start Date</label>
                      <input
                        type="date"
                        value={projectForm.startDate}
                        onChange={(e) => setProjectForm({ ...projectForm, startDate: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                      className="form-input"
                      rows={3}
                      placeholder="Brief description of the project scope and objectives"
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input 
                        type="checkbox" 
                        checked={projectForm.active}
                        onChange={(e) => setProjectForm({ ...projectForm, active: e.target.checked })}
                      />
                      <span>Active Project</span>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      {editingProject ? 'Update Project' : 'Add Project'}
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => {
                        setShowProjectForm(false);
                        setEditingProject(null);
                        setProjectForm({
                          name: '',
                          client: '',
                          description: '',
                          rate: 0,
                          color: '#3b82f6',
                          active: true,
                          billable: true,
                          clientId: '',
                          category: 'implementation',
                          status: 'planning',
                          startDate: new Date().toISOString().split('T')[0]
                        });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
                All Projects ({projects.length})
              </h3>
              {projects.length === 0 ? (
                <p style={{ color: 'var(--gray-500)', textAlign: 'center', padding: '24px' }}>
                  No projects yet. Create your first project to get started!
                </p>
              ) : (
                <div style={{ display: 'grid', gap: '12px' }}>
                  {projects.map(project => (
                    <div key={project.id} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px',
                      backgroundColor: 'white',
                      border: '1px solid var(--gray-200)',
                      borderRadius: '8px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: project.color
                        }} />
                        <div>
                          <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                            {project.name}
                            {!project.active && (
                              <span style={{ 
                                marginLeft: '8px', 
                                fontSize: '12px', 
                                color: 'var(--gray-500)' 
                              }}>
                                (Inactive)
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '14px', color: 'var(--gray-600)' }}>
                            {project.description}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          className="btn btn-secondary"
                          style={{ padding: '6px 12px', fontSize: '12px' }}
                          onClick={() => handleEditProject(project)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          style={{ padding: '6px 12px', fontSize: '12px' }}
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete "${project.name}"?`)) {
                              onDeleteProject(project.id);
                            }
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Export & Integration */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">Export & Integration</h2>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <button 
                className="btn btn-secondary"
                style={{ 
                  padding: '20px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={exportToCSV}
              >
                <div style={{ fontSize: '32px' }}>📊</div>
                <div style={{ fontWeight: '600' }}>Export to CSV</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>
                  Download all time entries
                </div>
              </button>
              
              <button 
                className="btn btn-secondary"
                style={{ 
                  padding: '20px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={exportToPDF}
              >
                <div style={{ fontSize: '32px' }}>📄</div>
                <div style={{ fontWeight: '600' }}>Generate PDF Report</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>
                  Detailed timesheet report
                </div>
              </button>
              
              <button 
                className="btn btn-secondary"
                style={{ 
                  padding: '20px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={() => alert('Integration features would be implemented here')}
              >
                <div style={{ fontSize: '32px' }}>🔗</div>
                <div style={{ fontWeight: '600' }}>Integrations</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>
                  Connect to external tools
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};