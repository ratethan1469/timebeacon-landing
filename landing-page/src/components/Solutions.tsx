import React from 'react';

const Solutions: React.FC = () => {
  return (
    <section className="solutions">
      <div className="container">
        <div className="solutions-header">
          <h2 className="section-title">
            Built for Every Team in Your 
            <span className="gradient-text"> Professional Services Organization</span>
          </h2>
        </div>
        
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-header">
              <div className="solution-icon">
                <span className="icon">💼</span>
              </div>
              <div className="solution-title">
                <h3>Professional Services</h3>
                <p>Maximize billable utilization and project profitability</p>
              </div>
            </div>
            <div className="solution-content">
              <div className="solution-stats">
                <div className="stat">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">More Billable Hours Captured</span>
                </div>
                <div className="stat">
                  <span className="stat-number">25%</span>
                  <span className="stat-label">Increase in Team Utilization</span>
                </div>
              </div>
              <ul className="solution-features">
                <li>Automated client meeting tracking</li>
                <li>Project profitability analysis</li>
                <li>Resource allocation optimization</li>
                <li>Client billing automation</li>
              </ul>
              <a href="/solutions/professional-services" className="solution-link">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="solution-card">
            <div className="solution-header">
              <div className="solution-icon">
                <span className="icon">🎯</span>
              </div>
              <div className="solution-title">
                <h3>Customer Success</h3>
                <p>Optimize account management and renewal strategies</p>
              </div>
            </div>
            <div className="solution-content">
              <div className="solution-stats">
                <div className="stat">
                  <span className="stat-number">30%</span>
                  <span className="stat-label">Better Account Coverage</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15%</span>
                  <span className="stat-label">Higher Renewal Rates</span>
                </div>
              </div>
              <ul className="solution-features">
                <li>Customer interaction tracking</li>
                <li>Account health monitoring</li>
                <li>Renewal pipeline management</li>
                <li>Success metrics reporting</li>
              </ul>
              <a href="/solutions/customer-success" className="solution-link">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="solution-card">
            <div className="solution-header">
              <div className="solution-icon">
                <span className="icon">⚙️</span>
              </div>
              <div className="solution-title">
                <h3>Implementation Teams</h3>
                <p>Streamline onboarding and reduce time-to-value</p>
              </div>
            </div>
            <div className="solution-content">
              <div className="solution-stats">
                <div className="stat">
                  <span className="stat-number">45%</span>
                  <span className="stat-label">Faster Implementations</span>
                </div>
                <div className="stat">
                  <span className="stat-number">60%</span>
                  <span className="stat-label">Fewer Escalations</span>
                </div>
              </div>
              <ul className="solution-features">
                <li>Implementation milestone tracking</li>
                <li>Client onboarding automation</li>
                <li>Team capacity planning</li>
                <li>Risk identification alerts</li>
              </ul>
              <a href="/solutions/implementations" className="solution-link">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="solution-card featured">
            <div className="solution-header">
              <div className="solution-icon">
                <span className="icon">👨‍💼</span>
              </div>
              <div className="solution-title">
                <h3>Leadership & Operations</h3>
                <p>Get complete visibility into team performance and capacity</p>
              </div>
            </div>
            <div className="solution-content">
              <div className="solution-stats">
                <div className="stat">
                  <span className="stat-number">360°</span>
                  <span className="stat-label">Team Visibility</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Real-time</span>
                  <span className="stat-label">Performance Insights</span>
                </div>
              </div>
              <ul className="solution-features">
                <li>Executive dashboard & reporting</li>
                <li>Cross-team performance analytics</li>
                <li>Revenue forecasting & planning</li>
                <li>Strategic capacity management</li>
              </ul>
              <a href="/solutions/leadership" className="solution-link">
                Learn More →
              </a>
            </div>
          </div>
        </div>
        
        <div className="solutions-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Team's Productivity?</h3>
            <p>Join 500+ professional services teams who've increased their billable utilization by 35%</p>
            <div className="cta-actions">
              <a href="https://app.timebeacon.io/signup" className="btn-primary">
                Start Free Trial
              </a>
              <a href="/demo" className="btn-secondary">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;