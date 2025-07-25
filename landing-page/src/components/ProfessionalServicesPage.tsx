import React from 'react';

const ProfessionalServicesPage: React.FC = () => {
  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="container">
          <div className="solution-hero-content">
            <div className="hero-badge">
              <span>Professional Services Teams</span>
            </div>
            
            <h1 className="solution-title">
              Maximize Billable Hours and 
              <span className="gradient-text"> Project Profitability</span>
            </h1>
            
            <p className="solution-subtitle">
              AI-powered time tracking designed specifically for professional services teams. 
              Capture every billable minute, optimize resource allocation, and increase team 
              utilization by 40% with zero manual effort.
            </p>
            
            <div className="solution-stats">
              <div className="stat">
                <span className="stat-number">40%</span>
                <span className="stat-label">More Billable Hours Captured</span>
              </div>
              <div className="stat">
                <span className="stat-number">25%</span>
                <span className="stat-label">Increase in Team Utilization</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2.3M</span>
                <span className="stat-label">Additional Annual Revenue</span>
              </div>
            </div>
            
            <div className="solution-actions">
              <a href="https://app.timebeacon.io/signup" className="btn-primary-large">
                Start Free Trial
              </a>
              <a href="/demo" className="btn-secondary-large">
                Schedule Demo
              </a>
            </div>
          </div>
          
          <div className="solution-visual">
            <div className="ps-dashboard">
              <div className="dashboard-header">
                <h3>Professional Services Dashboard</h3>
              </div>
              <div className="dashboard-metrics">
                <div className="metric-card">
                  <div className="metric-value">87%</div>
                  <div className="metric-label">Team Utilization</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">156.5h</div>
                  <div className="metric-label">Billable This Week</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">$45.2K</div>
                  <div className="metric-label">Revenue This Month</div>
                </div>
              </div>
              <div className="project-list">
                <div className="project-item">
                  <div className="project-client">Acme Corp</div>
                  <div className="project-hours">24.5h</div>
                  <div className="project-status billable">Billable</div>
                </div>
                <div className="project-item">
                  <div className="project-client">TechFlow Inc</div>
                  <div className="project-hours">18.2h</div>
                  <div className="project-status billable">Billable</div>
                </div>
                <div className="project-item">
                  <div className="project-client">StartupXYZ</div>
                  <div className="project-hours">12.8h</div>
                  <div className="project-status non-billable">Non-billable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="solution-features">
        <div className="container">
          <h2 className="section-title">Built for Professional Services Teams</h2>
          
          <div className="ps-features-grid">
            <div className="ps-feature-card">
              <h3>Automated Client Meeting Tracking</h3>
              <p>Automatically capture and categorize client meetings from your calendar, Zoom, Teams, and Slack. No manual timers or entry required.</p>
              <ul>
                <li>Real-time calendar integration</li>
                <li>Smart client/project mapping</li>
                <li>Automatic billable hour detection</li>
                <li>Meeting transcription & notes</li>
              </ul>
            </div>
            
            <div className="ps-feature-card">
              <h3>Project Profitability Analysis</h3>
              <p>Get real-time insights into project margins, resource allocation, and profitability to make data-driven decisions.</p>
              <ul>
                <li>Live project P&L tracking</li>
                <li>Resource cost analysis</li>
                <li>Budget vs. actual reporting</li>
                <li>Margin optimization alerts</li>
              </ul>
            </div>
            
            <div className="ps-feature-card">
              <h3>Resource Allocation Optimization</h3>
              <p>Optimize team utilization with AI-powered insights into capacity, workload distribution, and skill matching.</p>
              <ul>
                <li>Team capacity planning</li>
                <li>Skill-based resource matching</li>
                <li>Workload balancing alerts</li>
                <li>Predictive staffing recommendations</li>
              </ul>
            </div>
            
            <div className="ps-feature-card">
              <h3>Client Billing Automation</h3>
              <p>Generate accurate, detailed invoices automatically with integrated billing workflows and client approval processes.</p>
              <ul>
                <li>Automated invoice generation</li>
                <li>Client approval workflows</li>
                <li>Custom billing rates</li>
                <li>Payment tracking integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="solution-testimonial">
        <div className="container">
          <div className="testimonial-content">
            <blockquote>
              "TimeBeacon transformed our professional services practice. We went from 65% to 89% 
              utilization in just 3 months. The AI automation is incredible - it captures every 
              billable minute without any manual work from our consultants."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div className="author-info">
                <div className="author-name">Jennifer Smith</div>
                <div className="author-title">VP of Professional Services</div>
                <div className="author-company">TechFlow Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="solution-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Maximize Your Team's Billable Hours?</h2>
            <p>Join 200+ professional services teams who've increased their utilization by 40%</p>
            <div className="cta-actions">
              <a href="https://app.timebeacon.io/signup" className="btn-primary-large">
                Start Free 14-Day Trial
              </a>
              <a href="/demo" className="btn-secondary-large">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalServicesPage;