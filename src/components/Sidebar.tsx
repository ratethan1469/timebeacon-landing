import React, { useState } from 'react';
import { NavigationItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  activeItem: NavigationItem;
  onItemClick: (item: NavigationItem) => void;
}

const navigationItems = [
  { id: 'dashboard' as NavigationItem, label: 'Dashboard', icon: '📊' },
  { id: 'reports' as NavigationItem, label: 'Reports', icon: '📈' },
  { id: 'ai-insights' as NavigationItem, label: 'AI Insights', icon: '🤖' },
  { id: 'privacy' as NavigationItem, label: 'Privacy & Data', icon: '🛡️' },
  { id: 'integrations' as NavigationItem, label: 'Integrations', icon: '🔗' },
  { id: 'settings' as NavigationItem, label: 'Settings', icon: '⚙️' }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const { theme, setTheme } = useTheme();
  const { logout, user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };
  
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      case 'system': return '💻';
      default: return '☀️';
    }
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">⚡</div>
          {!isCollapsed && (
            <div>
              <h1 className="sidebar-title">TimeBeacon</h1>
              <p className="sidebar-subtitle">AI-Powered Privacy-First</p>
            </div>
          )}
        </div>
        <button 
          className="collapse-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>
      <nav className="nav-menu">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.id);
            }}
            title={isCollapsed ? item.label : ''}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
          </a>
        ))}
        
        <div className="nav-footer">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={isCollapsed ? `Theme: ${theme}` : `Current theme: ${theme}`}
          >
            <span className="nav-icon">{getThemeIcon()}</span>
            {!isCollapsed && (
              <span className="theme-label">
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </span>
            )}
          </button>
          
          {!isCollapsed && user && (
            <div className="user-info">
              <div className="user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
          )}
          
          <button 
            className="logout-button"
            onClick={logout}
            title={isCollapsed ? 'Logout' : 'Sign out'}
          >
            <span className="nav-icon">🚪</span>
            {!isCollapsed && <span className="logout-label">Sign Out</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};