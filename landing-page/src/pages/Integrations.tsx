import React from 'react';

const Integrations: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
            <div className="hero-badge">
              <span>Integrations & Automation</span>
            </div>
            
            <h1 className="hero-title">
              Connect Everything.
              <span className="gradient-text"> Automate Everything.</span>
            </h1>
            
            <p className="hero-subtitle">
              Born from 5+ years of B2B SaaS timesheet frustration, Timebeacon automatically captures 
              activity from all your favorite tools and platforms. No manual time entry. No late submissions. 
              No managers chasing timesheets. No switching between apps. Just seamless, intelligent time 
              tracking that works with your existing workflow.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Native Integrations</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Automated Capture</div>
              </div>
              <div className="stat">
                <div className="stat-number">30s</div>
                <div className="stat-label">Setup Time</div>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                View All Integrations
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://www.loom.com/share/timebeacon-demo', '_blank')}>
                Watch Demo
              </button>
            </div>
          
          <div className="solution-visual">
            <div className="integrations-showcase">
              <div className="integration-hub">
                <div className="hub-center">
                  <div className="timebeacon-logo">⚡ Timebeacon</div>
                </div>
                <div className="integration-connections">
                  <div className="connection-line top-left"></div>
                  <div className="connection-line top-right"></div>
                  <div className="connection-line bottom-left"></div>
                  <div className="connection-line bottom-right"></div>
                  <div className="integration-item top-left">📅 Calendar</div>
                  <div className="integration-item top-right">💬 Slack</div>
                  <div className="integration-item bottom-left">📧 Email</div>
                  <div className="integration-item bottom-right">📹 Zoom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar & Meeting Tools */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Calendar & <span className="gradient-text">Meeting Platforms</span>
          </h2>
          
          <div className="integrations-grid">
            <div className="integration-card featured">
              <div className="integration-icon">📅</div>
              <div className="integration-content">
                <h3>Google Calendar</h3>
                <p>Automatically track meetings, detect meeting types, and capture context from calendar descriptions and attendees.</p>
                <div className="integration-features">
                  <span className="feature-tag">Meeting Detection</span>
                  <span className="feature-tag">Auto-Categorization</span>
                  <span className="feature-tag">Real-time Sync</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card featured">
              <div className="integration-icon">📹</div>
              <div className="integration-content">
                <h3>Zoom</h3>
                <p>Track video calls, webinars, and screen shares with automatic meeting type detection and participant insights.</p>
                <div className="integration-features">
                  <span className="feature-tag">Call Recording Sync</span>
                  <span className="feature-tag">Participant Tracking</span>
                  <span className="feature-tag">Meeting Analytics</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🎥</div>
              <div className="integration-content">
                <h3>Microsoft Teams</h3>
                <p>Seamlessly capture Teams meetings, calls, and collaboration sessions with full context. No more "Teams meeting" entries - get detailed insights.</p>
                <div className="integration-features">
                  <span className="feature-tag">Chat Integration</span>
                  <span className="feature-tag">Screen Share Detection</span>
                  <span className="feature-tag">Meeting Outcomes</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">📱</div>
              <div className="integration-content">
                <h3>Outlook Calendar</h3>
                <p>Native Outlook integration for enterprise environments with Exchange support. Eliminates timesheet submission delays and manager follow-ups.</p>
                <div className="integration-features">
                  <span className="feature-tag">Exchange Sync</span>
                  <span className="feature-tag">Auto-Categorization</span>
                  <span className="feature-tag">Client Matching</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🔗</div>
              <div className="integration-content">
                <h3>Google Meet</h3>
                <p>Track Google Meet sessions with automatic participant and duration detection. No more manual meeting logs or late timesheet submissions.</p>
                <div className="integration-features">
                  <span className="feature-tag">Participant Insights</span>
                  <span className="feature-tag">Recording Integration</span>
                  <span className="feature-tag">Calendar Sync</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">📞</div>
              <div className="integration-content">
                <h3>WebEx</h3>
                <p>Enterprise-grade WebEx integration for large organizations and secure environments. Automatic capture means zero submission delays.</p>
                <div className="integration-features">
                  <span className="feature-tag">Enterprise Security</span>
                  <span className="feature-tag">Webinar Tracking</span>
                  <span className="feature-tag">Admin Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Collaboration */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Communication & <span className="gradient-text">Collaboration Tools</span>
          </h2>
          
          <div className="integrations-grid">
            <div className="integration-card featured">
              <div className="integration-icon">💬</div>
              <div className="integration-content">
                <h3>Slack</h3>
                <p>Capture time spent in channels, DMs, and calls with AI-powered context analysis of conversations and project mentions.</p>
                <div className="integration-features">
                  <span className="feature-tag">Channel Analytics</span>
                  <span className="feature-tag">Project Detection</span>
                  <span className="feature-tag">Client Mentions</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card featured">
              <div className="integration-icon">📧</div>
              <div className="integration-content">
                <h3>Gmail & Email</h3>
                <p>Smart email tracking that categorizes emails by client, project, and type with automatic time allocation.</p>
                <div className="integration-features">
                  <span className="feature-tag">Client Matching</span>
                  <span className="feature-tag">Smart Categorization</span>
                  <span className="feature-tag">Thread Analysis</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">💼</div>
              <div className="integration-content">
                <h3>Microsoft Teams Chat</h3>
                <p>Track Teams conversations, file sharing, and collaborative work sessions. Managers never need to chase for activity details again.</p>
                <div className="integration-features">
                  <span className="feature-tag">File Tracking</span>
                  <span className="feature-tag">Project Mentions</span>
                  <span className="feature-tag">Time Allocation</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🎯</div>
              <div className="integration-content">
                <h3>Discord</h3>
                <p>For teams using Discord for communication and project coordination. Captures community engagement and project discussions automatically.</p>
                <div className="integration-features">
                  <span className="feature-tag">Voice Channels</span>
                  <span className="feature-tag">Thread Analysis</span>
                  <span className="feature-tag">Community Metrics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management & Productivity */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Project Management & <span className="gradient-text">Productivity</span>
          </h2>
          
          <div className="integrations-grid">
            <div className="integration-card featured">
              <div className="integration-icon">🔄</div>
              <div className="integration-content">
                <h3>Asana</h3>
                <p>Automatically track time on tasks, projects, and milestones with intelligent project-to-client mapping.</p>
                <div className="integration-features">
                  <span className="feature-tag">Task Tracking</span>
                  <span className="feature-tag">Project Mapping</span>
                  <span className="feature-tag">Progress Analytics</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card featured">
              <div className="integration-icon">📋</div>
              <div className="integration-content">
                <h3>Monday.com</h3>
                <p>Seamless integration with Monday boards, tracking work across multiple projects and clients.</p>
                <div className="integration-features">
                  <span className="feature-tag">Board Sync</span>
                  <span className="feature-tag">Status Updates</span>
                  <span className="feature-tag">Time Allocation</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">📊</div>
              <div className="integration-content">
                <h3>Jira</h3>
                <p>Track development work, bug fixes, and sprint activities with automatic ticket categorization.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🎯</div>
              <div className="integration-content">
                <h3>Trello</h3>
                <p>Monitor card activities, board updates, and collaborative work on Trello boards.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">📝</div>
              <div className="integration-content">
                <h3>Notion</h3>
                <p>Track document creation, editing, and collaboration within Notion workspaces.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🔷</div>
              <div className="integration-content">
                <h3>ClickUp</h3>
                <p>Comprehensive ClickUp integration for task management and project tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM & Sales Tools */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            CRM & <span className="gradient-text">Sales Platforms</span>
          </h2>
          
          <div className="integrations-grid">
            <div className="integration-card featured">
              <div className="integration-icon">🎯</div>
              <div className="integration-content">
                <h3>Salesforce</h3>
                <p>Track client interactions, deal management, and sales activities with automatic opportunity linking.</p>
                <div className="integration-features">
                  <span className="feature-tag">Contact Matching</span>
                  <span className="feature-tag">Deal Tracking</span>
                  <span className="feature-tag">Activity Sync</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card featured">
              <div className="integration-icon">🔶</div>
              <div className="integration-content">
                <h3>HubSpot</h3>
                <p>Seamless HubSpot integration tracking leads, contacts, and sales pipeline activities.</p>
                <div className="integration-features">
                  <span className="feature-tag">Lead Tracking</span>
                  <span className="feature-tag">Pipeline Sync</span>
                  <span className="feature-tag">Contact Insights</span>
                </div>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">💎</div>
              <div className="integration-content">
                <h3>Pipedrive</h3>
                <p>Track sales activities and client interactions within Pipedrive's sales pipeline.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🎪</div>
              <div className="integration-content">
                <h3>Zoho CRM</h3>
                <p>Complete Zoho ecosystem integration for comprehensive business activity tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development & Design Tools */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Development & <span className="gradient-text">Design Tools</span>
          </h2>
          
          <div className="integrations-grid">
            <div className="integration-card">
              <div className="integration-icon">💻</div>
              <div className="integration-content">
                <h3>GitHub</h3>
                <p>Track code commits, pull requests, and development activities across repositories.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🦊</div>
              <div className="integration-content">
                <h3>GitLab</h3>
                <p>Monitor development workflows, merge requests, and DevOps activities.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🎨</div>
              <div className="integration-content">
                <h3>Figma</h3>
                <p>Track design work, prototyping, and collaborative design sessions.</p>
              </div>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">🔵</div>
              <div className="integration-content">
                <h3>Azure DevOps</h3>
                <p>Enterprise development tracking with full Azure DevOps integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integrations CTA */}
      <section className="pricing">
        <div className="container">
          <div className="custom-integrations-hero">
            <div className="custom-content">
              <h2 className="section-title">
                Don't See Your Tool? <span className="gradient-text">We've Got You Covered</span>
              </h2>
              
              <p className="custom-description">
                Our integration library includes 50+ platforms and is constantly growing. If you don't see 
                a tool you need, chances are we already support it or can set it up for you in under 48 hours.
              </p>
              
              <div className="custom-features">
                <div className="custom-feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h4>Rapid Custom Setup</h4>
                    <p>Most integrations configured within 48 hours</p>
                  </div>
                </div>
                
                <div className="custom-feature-item">
                  <div className="feature-icon">🔐</div>
                  <div className="feature-content">
                    <h4>Enterprise Security</h4>
                    <p>SOC 2 compliant with enterprise-grade security</p>
                  </div>
                </div>
                
                <div className="custom-feature-item">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-content">
                    <h4>Perfect Accuracy</h4>
                    <p>Our AI ensures 99.9% accurate time categorization</p>
                  </div>
                </div>
              </div>
              
              <div className="custom-actions">
                <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-integrations', '_blank')}>
                  Request Integration
                </button>
                <button className="btn-secondary-large" onClick={() => window.open('mailto:integrations@timebeacon.io', '_blank')}>
                  Contact Integrations Team
                </button>
              </div>
            </div>
            
            <div className="custom-visual">
              <div className="api-showcase">
                <div className="api-header">
                  <div className="api-title">🔌 Universal API</div>
                </div>
                <div className="api-connections">
                  <div className="api-item">
                    <span className="api-status connected">✓</span>
                    <span className="api-name">Your Custom Tool</span>
                  </div>
                  <div className="api-item">
                    <span className="api-status connected">✓</span>
                    <span className="api-name">Internal Systems</span>
                  </div>
                  <div className="api-item">
                    <span className="api-status connected">✓</span>
                    <span className="api-name">Legacy Software</span>
                  </div>
                  <div className="api-item">
                    <span className="api-status pending">⏳</span>
                    <span className="api-name">Webhook Integration</span>
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
            <h2>Ready to Automate Your Time Tracking?</h2>
            <p>Join 1,000+ teams already saving 10+ hours per week with automated time capture.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                See All Integrations
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • All integrations included • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrations;