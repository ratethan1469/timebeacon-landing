import React from 'react';

const ImplementationGuides: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Implementation Guides</span>
          </div>
          
          <h1 className="hero-title">
            Get Up and Running in
            <span className="gradient-text"> Under 30 Minutes</span>
          </h1>
          
          <p className="hero-subtitle">
            Step-by-step implementation guides to help your team start capturing time automatically. 
            From initial setup to advanced configurations, we've got you covered with proven playbooks 
            from 1,000+ successful implementations.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">15 min</div>
              <div className="stat-label">Average Setup Time</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Implementation Support</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => window.open('https://docs.timebeacon.io/quickstart', '_blank')}>
              Start Quick Setup
            </button>
            <button className="btn-secondary-large" onClick={() => window.open('https://calendly.com/timebeacon-implementation', '_blank')}>
              Book Implementation Call
            </button>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Quick Start <span className="gradient-text">Guides</span>
          </h2>
          
          <div className="guides-grid">
            <div className="guide-card featured">
              <div className="guide-icon">🚀</div>
              <div className="guide-content">
                <h3>5-Minute Quick Start</h3>
                <p>Get your team tracking time automatically in just 5 minutes. Perfect for teams who want to see immediate results.</p>
                <div className="guide-meta">
                  <span className="duration">5 min read</span>
                  <span className="difficulty">Beginner</span>
                </div>
                <button className="guide-cta">Start Guide</button>
              </div>
            </div>
            
            <div className="guide-card">
              <div className="guide-icon">📅</div>
              <div className="guide-content">
                <h3>Calendar Integration Setup</h3>
                <p>Connect Google Calendar, Outlook, and other calendar platforms for automatic meeting time capture.</p>
                <div className="guide-meta">
                  <span className="duration">10 min read</span>
                  <span className="difficulty">Beginner</span>
                </div>
                <button className="guide-cta">Start Guide</button>
              </div>
            </div>
            
            <div className="guide-card">
              <div className="guide-icon">💬</div>
              <div className="guide-content">
                <h3>Communication Tools Setup</h3>
                <p>Integrate Slack, Teams, and email platforms to capture all communication-based work automatically.</p>
                <div className="guide-meta">
                  <span className="duration">15 min read</span>
                  <span className="difficulty">Intermediate</span>
                </div>
                <button className="guide-cta">Start Guide</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Implementation */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Advanced <span className="gradient-text">Implementation</span>
          </h2>
          
          <div className="advanced-guides">
            <div className="advanced-guide-item">
              <div className="guide-content">
                <h3>Enterprise SSO & Security Setup</h3>
                <p>
                  Complete guide for enterprise customers implementing SSO, custom security policies, 
                  and advanced user management across large organizations.
                </p>
                <ul className="guide-checklist">
                  <li>SAML 2.0 and OIDC configuration</li>
                  <li>Custom user provisioning workflows</li>
                  <li>Advanced security policy setup</li>
                  <li>Multi-tenant organization management</li>
                </ul>
                <div className="guide-actions">
                  <button className="btn-primary">View Guide</button>
                  <span className="guide-duration">45 min read</span>
                </div>
              </div>
              <div className="guide-visual">
                <div className="implementation-flow">
                  <div className="flow-step">
                    <div className="step-number">1</div>
                    <div className="step-title">SSO Configuration</div>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="step-number">2</div>
                    <div className="step-title">User Provisioning</div>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="step-number">3</div>
                    <div className="step-title">Security Policies</div>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="step-number">4</div>
                    <div className="step-title">Go Live</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="advanced-guide-item reverse">
              <div className="guide-content">
                <h3>Custom Integration Development</h3>
                <p>
                  Build custom integrations for proprietary tools and internal systems. Includes API documentation, 
                  webhook setup, and best practices for maintaining data accuracy.
                </p>
                <ul className="guide-checklist">
                  <li>REST API integration patterns</li>
                  <li>Webhook configuration and security</li>
                  <li>Custom data mapping strategies</li>
                  <li>Testing and validation frameworks</li>
                </ul>
                <div className="guide-actions">
                  <button className="btn-primary">View Guide</button>
                  <span className="guide-duration">60 min read</span>
                </div>
              </div>
              <div className="guide-visual">
                <div className="api-integration">
                  <div className="api-header">Custom Integration Setup</div>
                  <div className="api-endpoints">
                    <div className="endpoint">POST /api/v1/time-entries</div>
                    <div className="endpoint">GET /api/v1/integrations</div>
                    <div className="endpoint">PUT /api/v1/webhooks</div>
                    <div className="endpoint">GET /api/v1/activity-data</div>
                  </div>
                  <div className="api-status">
                    <span className="status-indicator">✓ API Key Configured</span>
                    <span className="status-indicator">✓ Webhooks Active</span>
                    <span className="status-indicator">⏳ Testing Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Guides */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Industry-Specific <span className="gradient-text">Playbooks</span>
          </h2>
          
          <div className="industry-guides">
            <div className="industry-guide">
              <div className="industry-icon">🏢</div>
              <h3>Professional Services</h3>
              <p>Specialized setup for consulting firms, agencies, and service providers with client billing requirements.</p>
              <div className="guide-features">
                <span>Client categorization</span>
                <span>Billable hour tracking</span>
                <span>Project code mapping</span>
              </div>
              <button className="industry-cta">View Playbook</button>
            </div>
            
            <div className="industry-guide">
              <div className="industry-icon">💻</div>
              <h3>Software Development</h3>
              <p>Implementation guide for dev teams including GitHub, Jira, and development workflow integrations.</p>
              <div className="guide-features">
                <span>Repository tracking</span>
                <span>Sprint integration</span>
                <span>Code review time</span>
              </div>
              <button className="industry-cta">View Playbook</button>
            </div>
            
            <div className="industry-guide">
              <div className="industry-icon">📈</div>
              <h3>Sales & Marketing</h3>
              <p>CRM integration setup for sales teams tracking prospect interactions and marketing campaign work.</p>
              <div className="guide-features">
                <span>CRM synchronization</span>
                <span>Campaign tracking</span>
                <span>Lead interaction logs</span>
              </div>
              <button className="industry-cta">View Playbook</button>
            </div>
            
            <div className="industry-guide">
              <div className="industry-icon">🎓</div>
              <h3>Education & Training</h3>
              <p>Setup guide for educational institutions and training organizations with LMS integrations.</p>
              <div className="guide-features">
                <span>LMS integration</span>
                <span>Student interaction tracking</span>
                <span>Course development time</span>
              </div>
              <button className="industry-cta">View Playbook</button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            Need Help? <span className="gradient-text">We're Here for You</span>
          </h2>
          
          <div className="support-options">
            <div className="support-card">
              <div className="support-icon">📞</div>
              <h3>Live Implementation Support</h3>
              <p>Book a 30-minute call with our implementation specialists. They'll walk through your specific setup and answer any questions.</p>
              <button className="support-cta">Book Support Call</button>
            </div>
            
            <div className="support-card">
              <div className="support-icon">💬</div>
              <h3>Live Chat Help</h3>
              <p>Get instant help from our support team during business hours. Average response time under 2 minutes.</p>
              <button className="support-cta">Start Live Chat</button>
            </div>
            
            <div className="support-card">
              <div className="support-icon">📚</div>
              <h3>Documentation Hub</h3>
              <p>Browse our comprehensive documentation with step-by-step guides, API references, and troubleshooting tips.</p>
              <button className="support-cta">View Documentation</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Choose your implementation path and start capturing time automatically in minutes, not days.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://docs.timebeacon.io/quickstart', '_blank')}>
                Start Quick Setup
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://calendly.com/timebeacon-implementation', '_blank')}>
                Book Implementation Call
              </button>
            </div>
            
            <p className="cta-note">
              Average setup time: 15 minutes • 98% success rate • 24/7 support included
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImplementationGuides;