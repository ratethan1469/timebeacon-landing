import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero section-bg-primary">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Trusted by 500+ Customer-Facing Teams</span>
          </div>
          
          <h1 className="hero-title">
            The AI-Powered Time Tracking Platform for 
            <span className="gradient-text"> High-Growth B2B Teams</span>
          </h1>
          
          <p className="hero-subtitle">
            Set it and forget it. Timebeacon eliminates manual time entry through intelligent automation and seamless integrations, 
            saving your team 10+ hours per week while capturing every billable minute. Boost team utilization by 35% 
            with zero effort from your consultants.
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
            <a href="#roi-calculator" className="btn-primary-large">
              Get My ROI Report
            </a>
            <button className="btn-secondary-large" onClick={() => window.open('https://www.loom.com/share/timebeacon-demo', '_blank')}>
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
                <div className="preview-title">Timebeacon Dashboard</div>
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
          
          <div className="insight-cards">
            <div className="insight-card purple-card">
              <div className="insight-content">
                <div className="insight-value">Zero</div>
                <div className="insight-label">Manual Time Entry</div>
                <div className="insight-desc">Employees keep final approval</div>
              </div>
            </div>
            
            <div className="insight-card purple-card">
              <div className="insight-content">
                <div className="insight-value">10hrs</div>
                <div className="insight-label">Saved Per Employee</div>
                <div className="insight-desc">Per week on admin tasks</div>
              </div>
            </div>
            
            <div className="insight-card purple-card">
              <div className="insight-content">
                <div className="insight-value">More $</div>
                <div className="insight-label">Customer Focus Time</div>
                <div className="insight-desc">Increased billable hours</div>
              </div>
            </div>
            
            <div className="insight-card purple-card">
              <div className="insight-content">
                <div className="insight-value">100%</div>
                <div className="insight-label">Data Ownership</div>
                <div className="insight-desc">You control all your data</div>
              </div>
            </div>
            
            <div className="insight-card purple-card">
              <div className="insight-content">
                <div className="insight-value">Real-time</div>
                <div className="insight-label">Manager Insights</div>
                <div className="insight-desc">AI summaries show what teams actually do</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;