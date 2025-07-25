import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">TimeBeacon</span>
          </div>
          
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <div className="nav-dropdown">
              <span className="nav-item">Solutions</span>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>By Team</h4>
                  <a href="/solutions/professional-services">Professional Services</a>
                  <a href="/solutions/customer-success">Customer Success</a>
                  <a href="/solutions/implementations">Implementation Teams</a>
                  <a href="/solutions/consulting">Consulting</a>
                </div>
                <div className="dropdown-section">
                  <h4>By Use Case</h4>
                  <a href="/solutions/time-tracking">Time Tracking</a>
                  <a href="/solutions/resource-planning">Resource Planning</a>
                  <a href="/solutions/project-management">Project Management</a>
                  <a href="/solutions/utilization">Utilization Optimization</a>
                </div>
              </div>
            </div>
            
            <div className="nav-dropdown">
              <span className="nav-item">Resources</span>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>Learn</h4>
                  <a href="/resources/guides">Implementation Guides</a>
                  <a href="/resources/blog">Blog</a>
                  <a href="/resources/webinars">Webinars</a>
                  <a href="/resources/case-studies">Case Studies</a>
                </div>
                <div className="dropdown-section">
                  <h4>Support</h4>
                  <a href="/resources/documentation">Documentation</a>
                  <a href="/resources/help">Help Center</a>
                  <a href="/resources/community">Community</a>
                </div>
              </div>
            </div>
            
            <a href="/pricing" className="nav-item">Pricing</a>
            <a href="/testimonials" className="nav-item">Customers</a>
          </div>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <a href="https://app.timebeacon.io/login" className="btn-secondary">Sign In</a>
            <a href="https://app.timebeacon.io/signup" className="btn-primary">Start Free Trial</a>
          </div>
          
          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;