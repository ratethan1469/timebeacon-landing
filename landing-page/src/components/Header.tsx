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
          <a href="/" className="nav-logo">
            <div className="logo-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Tower Base */}
                <path d="M12 28 L24 28 L22 32 L14 32 Z" fill="url(#logoGradient)" />
                
                {/* Main Tower */}
                <rect x="15" y="8" width="6" height="20" rx="1" fill="url(#logoGradient)" />
                
                {/* Beacon House */}
                <rect x="13" y="12" width="10" height="8" rx="2" fill="url(#logoGradient)" />
                
                {/* Light Beam - Animated */}
                <path d="M18 4 L10 12 L18 12 Z" fill="url(#beamGradient)" opacity="0.8" filter="url(#glow)" />
                <path d="M18 4 L26 12 L18 12 Z" fill="url(#beamGradient)" opacity="0.8" filter="url(#glow)" />
                
                {/* Central Light */}
                <circle cx="18" cy="16" r="3" fill="#fbbf24" filter="url(#glow)" />
                <circle cx="18" cy="16" r="1.5" fill="white" />
                
                {/* Tower Details */}
                <rect x="16" y="22" width="4" height="2" fill="white" opacity="0.3" />
                <rect x="16" y="25" width="4" height="1" fill="white" opacity="0.3" />
                
                {/* Top Light */}
                <circle cx="18" cy="6" r="2" fill="#fbbf24" filter="url(#glow)" />
                <circle cx="18" cy="6" r="1" fill="white" />
              </svg>
            </div>
            <span className="logo-text">Timebeacon</span>
          </a>
          
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <div className="nav-dropdown">
              <span className="nav-item">Solutions</span>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>By Team</h4>
                  <a href="/solutions/consulting">Consulting</a>
                  <a href="/solutions/customer-success">Customer Success</a>
                  <a href="/solutions/implementations">Implementation Teams</a>
                  <a href="/solutions/managers-leaders">Managers & Leaders</a>
                </div>
                <div className="dropdown-section">
                  <h4>Platform & Integrations</h4>
                  <a href="/integrations">All Integrations</a>
                  <a href="/solutions/time-tracking">Time Tracking</a>
                  <a href="/solutions/resource-planning">Resource Planning</a>
                  <a href="/solutions/project-management">Project Management</a>
                </div>
              </div>
            </div>
            
            <div className="nav-dropdown">
              <span className="nav-item">Resources</span>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>Learn</h4>
                  <a href="/resources/implementation-guides">Implementation Guides</a>
                  <a href="/resources/blog">Blog</a>
                  <a href="/resources/webinars">Webinars</a>
                  <a href="/resources/case-studies">Case Studies</a>
                </div>
                <div className="dropdown-section">
                  <h4>Support</h4>
                  <a href="/resources/documentation">Documentation</a>
                  <a href="/resources/help-center">Help Center</a>
                  <a href="/customers">Customer Stories</a>
                </div>
              </div>
            </div>
            
            <a href="/pricing" className="nav-item">Pricing</a>
            <a href="/about" className="nav-item">About</a>
            <a href="/contact" className="nav-item">Contact</a>
          </div>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <button 
              className="btn-secondary"
              onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}
            >
              Book Live Demo
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