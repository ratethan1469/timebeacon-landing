import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Trusted by 500+ Professional Services Teams</span>
          </div>
          
          <h1 className="hero-title">
            The AI-Powered Time Tracking Platform for 
            <span className="gradient-text"> High-Growth B2B Teams</span>
          </h1>
          
          <p className="hero-subtitle">
            Automatically capture billable hours, optimize resource allocation, and boost team utilization by 35% 
            with intelligent time tracking that integrates seamlessly into your existing workflow.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">35%</span>
              <span className="stat-label">Higher Utilization</span>
            </div>
            <div className="stat">
              <span className="stat-number">10hrs</span>
              <span className="stat-label">Saved Weekly</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.2%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="https://app.timebeacon.io/signup" className="btn-primary-large">
              Start Free 14-Day Trial
            </a>
            <button className="btn-secondary-large">
              Watch 2-Min Demo
            </button>
          </div>
          
          <div className="hero-trust">
            <span className="trust-text">No credit card required • Setup in under 5 minutes</span>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-nav">
                  <span className="nav-dot active"></span>
                  <span className="nav-dot"></span>
                  <span className="nav-dot"></span>
                </div>
                <div className="preview-title">TimeBeacon Dashboard</div>
              </div>
              <div className="preview-content">
                <div className="preview-sidebar">
                  <div className="sidebar-item active">
                    <span>Dashboard</span>
                  </div>
                  <div className="sidebar-item">
                    <span>Time Tracking</span>
                  </div>
                  <div className="sidebar-item">
                    <span>Analytics</span>
                  </div>
                  <div className="sidebar-item">
                    <span>Team</span>
                  </div>
                </div>
                <div className="preview-main">
                  <div className="metrics-row">
                    <div className="metric-card">
                      <div className="metric-value">87%</div>
                      <div className="metric-label">Utilization</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">42.5h</div>
                      <div className="metric-label">This Week</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">$12.4K</div>
                      <div className="metric-label">Revenue</div>
                    </div>
                  </div>
                  <div className="chart-placeholder">
                    <div className="chart-bars">
                      <div className="bar" style={{height: '60%'}}></div>
                      <div className="bar" style={{height: '80%'}}></div>
                      <div className="bar" style={{height: '45%'}}></div>
                      <div className="bar" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="floating-cards">
            <div className="floating-card automation">
              <div className="card-content">
                <div className="card-title">Auto-Detected Meeting</div>
                <div className="card-subtitle">Client Strategy Session</div>
                <div className="card-time">2.5 hours • Billable</div>
              </div>
            </div>
            
            <div className="floating-card insight">
              <div className="card-content">
                <div className="card-title">Utilization Alert</div>
                <div className="card-subtitle">Team capacity at 95%</div>
                <div className="card-action">View recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;