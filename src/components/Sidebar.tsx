import React from 'react';
import { NavigationItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  activeItem: NavigationItem;
  onItemClick: (item: NavigationItem) => void;
}

const navigationItems = [
  { id: 'dashboard' as NavigationItem, label: 'Dashboard', icon: '📊' },
  { id: 'calendar' as NavigationItem, label: 'Calendar', icon: '📅' },
  { id: 'reports' as NavigationItem, label: 'Reports', icon: '📈' },
  { id: 'ai-insights' as NavigationItem, label: 'AI Insights', icon: '🤖' },
  { id: 'privacy' as NavigationItem, label: 'Privacy & Data', icon: '🛡️' },
  { id: 'integrations' as NavigationItem, label: 'Integrations', icon: '🔗' },
  { id: 'settings' as NavigationItem, label: 'Settings', icon: '⚙️' }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const { theme, setTheme } = useTheme();
  
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
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">⚡</div>
          <div>
            <h1 className="sidebar-title">TimeBeacon</h1>
            <p className="sidebar-subtitle">AI-Powered Privacy-First</p>
          </div>
        </div>
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
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </a>
        ))}
        
        <div className="nav-footer">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Current theme: ${theme}`}
          >
            <span className="nav-icon">{getThemeIcon()}</span>
            <span className="theme-label">
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};