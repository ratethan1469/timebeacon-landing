import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">
            Everything Your Team Needs to 
            <span className="gradient-text"> Maximize Billable Hours</span>
          </h2>
          <p className="section-subtitle">
            AI-powered automation meets enterprise-grade security to deliver the most accurate 
            time tracking solution for high-growth professional services teams.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card primary">
            <div className="feature-content">
              <h3 className="feature-title">AI Meeting Detection</h3>
              <p className="feature-description">
                Automatically captures and categorizes meetings from your calendar, 
                Zoom, Teams, and Slack with 99.2% accuracy. No manual entry required.
              </p>
              <ul className="feature-list">
                <li>Real-time calendar integration</li>
                <li>Smart client/project mapping</li>
                <li>Automatic billable hour detection</li>
                <li>Meeting transcription & summarization</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Real-Time Analytics</h3>
              <p className="feature-description">
                Get instant insights into team utilization, project profitability, 
                and resource allocation with customizable dashboards.
              </p>
              <ul className="feature-list">
                <li>Live utilization tracking</li>
                <li>Revenue forecasting</li>
                <li>Capacity planning alerts</li>
                <li>Custom reporting suite</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Seamless Integrations</h3>
              <p className="feature-description">
                Connect with your existing tech stack including CRM, PSA, 
                and project management tools for unified workflow automation.
              </p>
              <ul className="feature-list">
                <li>Salesforce & HubSpot sync</li>
                <li>Slack & Teams integration</li>
                <li>QuickBooks & NetSuite export</li>
                <li>API & webhook support</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">
                SOC 2 Type II certified with advanced encryption, SSO, 
                and granular permissions for enterprise peace of mind.
              </p>
              <ul className="feature-list">
                <li>SOC 2 Type II compliance</li>
                <li>SAML/SSO integration</li>
                <li>Role-based access controls</li>
                <li>GDPR & CCPA compliant</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Smart Automation</h3>
              <p className="feature-description">
                Intelligent workflow automation that learns from your team's patterns 
                to suggest optimizations and eliminate manual tasks.
              </p>
              <ul className="feature-list">
                <li>Predictive time allocation</li>
                <li>Automated timesheet generation</li>
                <li>Smart project categorization</li>
                <li>Workflow optimization insights</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-content">
              <h3 className="feature-title">Mobile Excellence</h3>
              <p className="feature-description">
                Native mobile apps with offline capabilities ensure your team 
                can track time anywhere, anytime with perfect synchronization.
              </p>
              <ul className="feature-list">
                <li>iOS & Android apps</li>
                <li>Offline time tracking</li>
                <li>GPS location tracking</li>
                <li>Push notifications</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Interactive Elements */}
        <div className="features-interactive">
          <div className="floating-metric metric-1">
            <div className="metric-number">+40%</div>
            <div className="metric-label">Billable Hours</div>
          </div>
          
          <div className="floating-metric metric-2">
            <div className="metric-number">99.2%</div>
            <div className="metric-label">Accuracy</div>
          </div>
          
          <div className="floating-metric metric-3">
            <div className="metric-number">10mins</div>
            <div className="metric-label">Setup Time</div>
          </div>
          
          <div className="pulse-ring ring-1"></div>
          <div className="pulse-ring ring-2"></div>
          <div className="pulse-ring ring-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;