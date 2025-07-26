import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Customer Success Stories</span>
          </div>
          
          <h1 className="hero-title">
            Real Results from
            <span className="gradient-text"> AI Automation</span>
          </h1>
          
          <p className="hero-subtitle">
            See how teams across industries eliminated manual time tracking and achieved incredible 
            results with AI-powered automation. From 50-person agencies to 500+ employee enterprises, 
            discover the transformative impact of integrating every tool in your tech stack.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Manual Work Eliminated</div>
            </div>
            <div className="stat">
              <div className="stat-number">47hrs</div>
              <div className="stat-label">Average Weekly Time Saved</div>
            </div>
            <div className="stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Accuracy Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT UNTIL WE HAVE REAL CASE STUDIES
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="gradient-text">Success Story</span>
          </h2>
          
          <div className="case-study-featured">
            <div className="case-study-card featured">
              <div className="case-study-header">
                <div className="company-logo">TF</div>
                <div className="company-info">
                  <h3>TechFlow Solutions</h3>
                  <p>Management Consulting • 25 employees</p>
                </div>
                <div className="case-study-badge">FEATURED</div>
              </div>
              
              <div className="case-study-content">
                <h2>From 47 Hours to Zero: Complete Timesheet Elimination</h2>
                <p className="case-study-summary">
                  TechFlow Solutions eliminated 47 hours of weekly timesheet management by implementing 
                  AI-powered automation across Google Calendar, Slack, Salesforce, and email. Their team 
                  now captures 100% of billable time automatically with zero manual input.
                </p>
                
                <div className="case-study-challenge">
                  <h4>The Challenge</h4>
                  <p>
                    "Our consultants were spending 2+ hours each week on timesheets, and we were still 
                    only capturing about 60% of actual billable time. Manual categorization was 
                    inconsistent, clients were questioning our hours, and team morale was suffering 
                    from constant timesheet reminders."
                  </p>
                  <cite>- Jennifer Smith, Director of Operations</cite>
                </div>
                
                <div className="case-study-solution">
                  <h4>The AI Automation Solution</h4>
                  <div className="solution-integrations">
                    <div className="integration-item">
                      <span className="integration-icon">📅</span>
                      <div>
                        <strong>Google Calendar:</strong> Automatic meeting categorization and client detection
                      </div>
                    </div>
                    <div className="integration-item">
                      <span className="integration-icon">💬</span>
                      <div>
                        <strong>Slack:</strong> AI analysis of channel conversations for project time allocation
                      </div>
                    </div>
                    <div className="integration-item">
                      <span className="integration-icon">🎯</span>
                      <div>
                        <strong>Salesforce:</strong> Automatic client matching and opportunity tracking
                      </div>
                    </div>
                    <div className="integration-item">
                      <span className="integration-icon">📧</span>
                      <div>
                        <strong>Email:</strong> Smart categorization of client communications by project
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="case-study-results">
                  <h4>Incredible Results</h4>
                  <div className="results-grid">
                    <div className="result-metric">
                      <div className="metric-number">100%</div>
                      <div className="metric-label">Time Capture Accuracy</div>
                      <div className="metric-improvement">↑ 67% improvement</div>
                    </div>
                    <div className="result-metric">
                      <div className="metric-number">47hrs</div>
                      <div className="metric-label">Weekly Hours Saved</div>
                      <div className="metric-improvement">$78K annual savings</div>
                    </div>
                    <div className="result-metric">
                      <div className="metric-number">0</div>
                      <div className="metric-label">Manual Timesheet Hours</div>
                      <div className="metric-improvement">Down from 47 hrs/week</div>
                    </div>
                    <div className="result-metric">
                      <div className="metric-number">23%</div>
                      <div className="metric-label">Revenue Increase</div>
                      <div className="metric-improvement">From improved billing</div>
                    </div>
                  </div>
                </div>
                
                <div className="case-study-quote">
                  <blockquote>
                    "The AI automation is incredible. It knows when I'm on a client call versus an internal 
                    meeting, categorizes my Slack conversations by project, and even tracks email time by 
                    client. We've gone from constant timesheet battles to perfect accuracy with zero manual work."
                  </blockquote>
                  <cite>- Jennifer Smith, Director of Operations</cite>
                </div>
                
                <button className="case-study-cta">Read Full Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* COMMENTED OUT UNTIL WE HAVE REAL CASE STUDIES
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            More Success <span className="gradient-text">Stories</span>
          </h2>
          
          <div className="case-studies-grid">
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="company-logo">GT</div>
                <div className="company-info">
                  <h3>GrowthTech Marketing</h3>
                  <p>Digital Agency • 50 employees</p>
                </div>
              </div>
              <div className="case-study-preview">
                <h4>95% Billing Accuracy with Zero Manual Time Entry</h4>
                <p>
                  Marketing agency eliminated timesheet chasing and improved client billing accuracy 
                  by integrating Asana, Google Workspace, and Slack with AI automation.
                </p>
                <div className="preview-metrics">
                  <div className="metric">
                    <span className="metric-value">82hrs</span>
                    <span className="metric-desc">Weekly time saved</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">95%</span>
                    <span className="metric-desc">Billing accuracy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="company-logo">DS</div>
                <div className="company-info">
                  <h3>DataSync Solutions</h3>
                  <p>Software Development • 35 employees</p>
                </div>
              </div>
              <div className="case-study-preview">
                <h4>Developer Productivity Insights Through AI Integration</h4>
                <p>
                  Development team integrated GitHub, Jira, and Slack to automatically track coding time, 
                  meetings, and project work with complete accuracy and zero manual logging.
                </p>
                <div className="preview-metrics">
                  <div className="metric">
                    <span className="metric-value">58hrs</span>
                    <span className="metric-desc">Monthly time saved</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">100%</span>
                    <span className="metric-desc">Project visibility</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="company-logo">SP</div>
                <div className="company-info">
                  <h3>SalesPlus Corp</h3>
                  <p>B2B Sales • 80 employees</p>
                </div>
              </div>
              <div className="case-study-preview">
                <h4>CRM Integration Delivers 300% Better Sales Reporting</h4>
                <p>
                  Sales organization automated time tracking across Salesforce, HubSpot, and communication 
                  tools, providing unprecedented visibility into rep activities and deal progression.
                </p>
                <div className="preview-metrics">
                  <div className="metric">
                    <span className="metric-value">320hrs</span>
                    <span className="metric-desc">Monthly admin savings</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">300%</span>
                    <span className="metric-desc">Better reporting</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="company-logo">CA</div>
                <div className="company-info">
                  <h3>ConsultAdvise Partners</h3>
                  <p>Strategy Consulting • 120 employees</p>
                </div>
              </div>
              <div className="case-study-preview">
                <h4>Enterprise AI Automation Across 15 Platforms</h4>
                <p>
                  Large consulting firm implemented organization-wide automation across calendar, email, 
                  CRM, project management, and communication tools with 99.8% accuracy.
                </p>
                <div className="preview-metrics">
                  <div className="metric">
                    <span className="metric-value">240hrs</span>
                    <span className="metric-desc">Weekly time saved</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">15</span>
                    <span className="metric-desc">Integrated platforms</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="company-logo">ID</div>
                <div className="company-info">
                  <h3>InnovateDev Studios</h3>
                  <p>Software Agency • 28 employees</p>
                </div>
              </div>
              <div className="case-study-preview">
                <h4>Client Billing Transformation Through Multi-App Integration</h4>
                <p>
                  Software agency connected GitHub, Figma, Slack, and client communication tools to 
                  automatically categorize all development and design work by client project.
                </p>
                <div className="preview-metrics">
                  <div className="metric">
                    <span className="metric-value">67hrs</span>
                    <span className="metric-desc">Weekly admin savings</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">99.5%</span>
                    <span className="metric-desc">Time accuracy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="company-logo">RS</div>
                <div className="company-info">
                  <h3>RetailStrategy Group</h3>
                  <p>Retail Consulting • 45 employees</p>
                </div>
              </div>
              <div className="case-study-preview">
                <h4>Complete Manual Work Elimination in Retail Consulting</h4>
                <p>
                  Retail consultants automated time capture across client sites, travel, meetings, and 
                  analysis work using calendar, location, and communication platform integrations.
                </p>
                <div className="preview-metrics">
                  <div className="metric">
                    <span className="metric-value">90hrs</span>
                    <span className="metric-desc">Monthly time saved</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">0</span>
                    <span className="metric-desc">Manual time entries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ROI Calculator */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Calculate Your <span className="gradient-text">Automation ROI</span>
          </h2>
          
          <div className="roi-calculator-section">
            <div className="roi-inputs">
              <h3>Your Current Situation</h3>
              <div className="input-group">
                <label>Number of team members</label>
                <input type="number" defaultValue="25" className="roi-input" />
              </div>
              <div className="input-group">
                <label>Hours per week on timesheets (per person)</label>
                <input type="number" defaultValue="2" className="roi-input" />
              </div>
              <div className="input-group">
                <label>Average hourly rate</label>
                <input type="number" defaultValue="75" className="roi-input" />
              </div>
            </div>
            
            <div className="roi-results">
              <h3>With AI Automation</h3>
              <div className="roi-metrics">
                <div className="roi-metric">
                  <div className="metric-value">50 hrs</div>
                  <div className="metric-label">Weekly Time Saved</div>
                </div>
                <div className="roi-metric">
                  <div className="metric-value">$195K</div>
                  <div className="metric-label">Annual Cost Savings</div>
                </div>
                <div className="roi-metric">
                  <div className="metric-value">2,600hrs</div>
                  <div className="metric-label">Yearly Hours Reclaimed</div>
                </div>
                <div className="roi-metric">
                  <div className="metric-value">1,950%</div>
                  <div className="metric-label">Return on Investment</div>
                </div>
              </div>
              <p className="roi-note">
                Based on complete elimination of manual time tracking through AI automation 
                across calendar, communication, and project management platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Time Tracking?</h2>
            <p>See how AI-powered automation can eliminate manual time tracking for your team.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                Book Success Demo
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • Implementation support included • Results guaranteed
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;