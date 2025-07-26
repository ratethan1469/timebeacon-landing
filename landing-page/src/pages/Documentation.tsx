import React from 'react';

const Documentation: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Developer Documentation</span>
          </div>
          
          <h1 className="hero-title">
            Complete AI Automation
            <span className="gradient-text"> Documentation</span>
          </h1>
          
          <p className="hero-subtitle">
            Comprehensive guides, API references, and integration tutorials to implement AI-powered 
            time automation across your entire tech stack. From basic setup to advanced custom 
            integrations that eliminate all manual time tracking.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Integration Guides</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Supported Platforms</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">API Uptime</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => window.open('https://docs.timebeacon.io/quickstart', '_blank')}>
              Quick Start Guide
            </button>
            <button className="btn-secondary-large" onClick={() => window.open('https://docs.timebeacon.io/api', '_blank')}>
              API Reference
            </button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Documentation <span className="gradient-text">Navigation</span>
          </h2>
          
          <div className="docs-nav-grid">
            <div className="doc-nav-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0L12 19l2.5 2.5c1.5 1.5 3.5 1.5 5 0s1.5-3.5 0-5L17 14l2.5-2.5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0L12 9 9.5 6.5c-1.5-1.5-3.5-1.5-5 0s-1.5 3.5 0 5L7 14l-2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="nav-content">
                <h3>Getting Started</h3>
                <p>Quick setup guides to eliminate manual time tracking in under 15 minutes</p>
                <ul className="nav-links">
                  <li><a href="#quick-start">5-Minute Quick Start</a></li>
                  <li><a href="#installation">Installation Guide</a></li>
                  <li><a href="#first-integration">First Integration Setup</a></li>
                  <li><a href="#ai-configuration">AI Configuration</a></li>
                </ul>
              </div>
            </div>
            
            <div className="doc-nav-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="nav-content">
                <h3>Platform Integrations</h3>
                <p>Complete automation setup for all major business applications</p>
                <ul className="nav-links">
                  <li><a href="#calendar-sync">Calendar & Meeting Platforms</a></li>
                  <li><a href="#communication">Communication Tools</a></li>
                  <li><a href="#project-mgmt">Project Management</a></li>
                  <li><a href="#crm-integration">CRM & Sales Platforms</a></li>
                </ul>
              </div>
            </div>
            
            <div className="doc-nav-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="nav-content">
                <h3>AI & Automation</h3>
                <p>Advanced AI configuration for intelligent time categorization</p>
                <ul className="nav-links">
                  <li><a href="#ai-training">AI Training & Setup</a></li>
                  <li><a href="#custom-categories">Custom Categories</a></li>
                  <li><a href="#automation-rules">Automation Rules</a></li>
                  <li><a href="#accuracy-tuning">Accuracy Tuning</a></li>
                </ul>
              </div>
            </div>
            
            <div className="doc-nav-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="nav-content">
                <h3>API & Development</h3>
                <p>REST API, webhooks, and custom integration development</p>
                <ul className="nav-links">
                  <li><a href="#api-reference">API Reference</a></li>
                  <li><a href="#webhooks">Webhook Configuration</a></li>
                  <li><a href="#custom-integrations">Custom Integrations</a></li>
                  <li><a href="#sdk-libraries">SDK Libraries</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Popular <span className="gradient-text">Integration Guides</span>
          </h2>
          
          <div className="integration-docs">
            <div className="integration-doc-item">
              <div className="doc-header">
                <div className="pain-icon-clean">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="integration-info">
                  <h3>Google Calendar + AI Automation</h3>
                  <p>Complete setup for automatic meeting categorization and client detection</p>
                </div>
                <div className="doc-meta">
                  <span className="difficulty">Beginner</span>
                  <span className="time">15 min</span>
                </div>
              </div>
              <div className="doc-content">
                <div className="doc-preview">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    <li>✓ Connect Google Calendar with OAuth 2.0</li>
                    <li>✓ Configure AI meeting type detection</li>
                    <li>✓ Set up automatic client categorization</li>
                    <li>✓ Enable real-time sync and notifications</li>
                  </ul>
                </div>
                <div className="doc-code-preview">
                  <div className="code-header">Configuration Example</div>
                  <pre className="code-block">
{`{
  "calendar_integration": {
    "provider": "google",
    "auto_categorize": true,
    "ai_detection": {
      "meeting_types": true,
      "client_matching": true,
      "project_inference": true
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="integration-doc-item">
              <div className="doc-header">
                <div className="integration-logo">💬</div>
                <div className="integration-info">
                  <h3>Slack AI Integration & Context Analysis</h3>
                  <p>Advanced setup for automatic project detection from conversations</p>
                </div>
                <div className="doc-meta">
                  <span className="difficulty">Intermediate</span>
                  <span className="time">25 min</span>
                </div>
              </div>
              <div className="doc-content">
                <div className="doc-preview">
                  <h4>Advanced Features:</h4>
                  <ul>
                    <li>✓ AI-powered conversation analysis</li>
                    <li>✓ Project keyword detection</li>
                    <li>✓ Client mention categorization</li>
                    <li>✓ Channel-based time allocation</li>
                  </ul>
                </div>
                <div className="doc-code-preview">
                  <div className="code-header">Webhook Setup</div>
                  <pre className="code-block">
{`curl -X POST "https://api.timebeacon.io/v1/integrations/slack" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "webhook_url": "https://hooks.slack.com/...",
    "ai_analysis": true,
    "project_detection": true
  }'`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="integration-doc-item">
              <div className="doc-header">
                <div className="integration-logo">🎯</div>
                <div className="integration-info">
                  <h3>Salesforce CRM Complete Automation</h3>
                  <p>Enterprise-grade CRM integration with automatic client matching</p>
                </div>
                <div className="doc-meta">
                  <span className="difficulty">Advanced</span>
                  <span className="time">45 min</span>
                </div>
              </div>
              <div className="doc-content">
                <div className="doc-preview">
                  <h4>Enterprise Features:</h4>
                  <ul>
                    <li>✓ Salesforce OAuth & security compliance</li>
                    <li>✓ Contact and opportunity matching</li>
                    <li>✓ Custom field mapping</li>
                    <li>✓ Bi-directional data synchronization</li>
                  </ul>
                </div>
                <div className="doc-code-preview">
                  <div className="code-header">API Configuration</div>
                  <pre className="code-block">
{`const salesforceConfig = {
  client_id: process.env.SALESFORCE_CLIENT_ID,
  client_secret: process.env.SALESFORCE_CLIENT_SECRET,
  sandbox: false,
  ai_matching: {
    contacts: true,
    opportunities: true,
    custom_objects: ["Project__c"]
  }
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference Preview */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            API <span className="gradient-text">Reference</span>
          </h2>
          
          <div className="api-reference">
            <div className="api-endpoints">
              <h3>Core Endpoints</h3>
              <div className="endpoint-list">
                <div className="endpoint-item">
                  <div className="endpoint-method post">POST</div>
                  <div className="endpoint-path">/api/v1/time-entries</div>
                  <div className="endpoint-desc">Create automated time entry</div>
                </div>
                <div className="endpoint-item">
                  <div className="endpoint-method get">GET</div>
                  <div className="endpoint-path">/api/v1/integrations</div>
                  <div className="endpoint-desc">List active integrations</div>
                </div>
                <div className="endpoint-item">
                  <div className="endpoint-method put">PUT</div>
                  <div className="endpoint-path">/api/v1/ai-rules</div>
                  <div className="endpoint-desc">Update AI categorization rules</div>
                </div>
                <div className="endpoint-item">
                  <div className="endpoint-method post">POST</div>
                  <div className="endpoint-path">/api/v1/webhooks</div>
                  <div className="endpoint-desc">Configure integration webhooks</div>
                </div>
              </div>
            </div>
            
            <div className="api-example">
              <h3>Example: Create Time Entry</h3>
              <div className="code-example">
                <div className="code-tabs">
                  <button className="tab active">cURL</button>
                  <button className="tab">JavaScript</button>
                  <button className="tab">Python</button>
                </div>
                <pre className="code-block">
{`curl -X POST "https://api.timebeacon.io/v1/time-entries" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "activity_type": "meeting",
    "duration": 3600,
    "description": "Client strategy session",
    "ai_categorize": true,
    "source_integration": "google_calendar",
    "metadata": {
      "attendees": ["client@company.com"],
      "calendar_event_id": "abc123"
    }
  }'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting & Support */}
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            Support & <span className="gradient-text">Troubleshooting</span>
          </h2>
          
          <div className="support-docs">
            <div className="support-section">
              <h3>Common Integration Issues</h3>
              <div className="faq-items">
                <div className="faq-item">
                  <h4>Why isn't my calendar sync working?</h4>
                  <p>
                    Most calendar sync issues are related to OAuth permissions. Ensure you've granted 
                    "read calendar events" and "read calendar metadata" permissions. Check our 
                    <a href="#calendar-troubleshooting">Calendar Troubleshooting Guide</a> for detailed steps.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h4>AI categorization seems inaccurate - how to improve?</h4>
                  <p>
                    AI accuracy improves with more data. Initial setup requires 1-2 weeks of training data. 
                    Use our <a href="#ai-training">AI Training Dashboard</a> to review and correct 
                    categorizations to improve future accuracy.
                  </p>
                </div>
                
                <div className="faq-item">
                  <h4>Custom integration not receiving webhooks?</h4>
                  <p>
                    Verify your webhook endpoint is HTTPS and returns a 200 status code. Check our 
                    <a href="#webhook-debugging">Webhook Debugging Tools</a> to test your endpoint 
                    and review delivery logs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="support-channels">
              <h3>Get Help</h3>
              <div className="channel-options">
                <div className="channel-option">
                  <div className="channel-icon">💬</div>
                  <div className="channel-info">
                    <h4>Developer Chat</h4>
                    <p>Real-time help from our integration specialists</p>
                    <button className="channel-cta">Start Chat</button>
                  </div>
                </div>
                
                <div className="channel-option">
                  <div className="channel-icon">📧</div>
                  <div className="channel-info">
                    <h4>Email Support</h4>
                    <p>Technical support with code examples</p>
                    <button className="channel-cta">Email Us</button>
                  </div>
                </div>
                
                <div className="channel-option">
                  <div className="channel-icon">🎥</div>
                  <div className="channel-info">
                    <h4>Screen Share Session</h4>
                    <p>One-on-one integration assistance</p>
                    <button className="channel-cta">Book Session</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your AI Automation?</h2>
            <p>Start with our quick setup guide or dive deep into custom integrations. Full documentation and developer support included.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://docs.timebeacon.io/quickstart', '_blank')}>
                Start Quick Setup
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://docs.timebeacon.io/api', '_blank')}>
                Explore API
              </button>
            </div>
            
            <p className="cta-note">
              Complete documentation • Live developer support • 99.9% API uptime
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Documentation;