import React from 'react';

const Webinars: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Live Webinars & Training</span>
          </div>
          
          <h1 className="hero-title">
            Master AI-Powered
            <span className="gradient-text"> Time Automation</span>
          </h1>
          
          <p className="hero-subtitle">
            Join our live training sessions to learn how to completely eliminate manual time tracking. 
            See real implementations, advanced AI configurations, and automation workflows that save 
            teams 10+ hours per week by integrating with every tool in your tech stack.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2x</div>
              <div className="stat-label">Weekly Sessions</div>
            </div>
            <div className="stat">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Manual Work Eliminated</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-webinar', '_blank')}>
              Register for Next Session
            </button>
            <button className="btn-secondary-large" onClick={() => window.open('https://timebeacon.io/webinars/recordings', '_blank')}>
              Watch Past Sessions
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Upcoming <span className="gradient-text">Training Sessions</span>
          </h2>
          
          <div className="webinar-upcoming">
            <div className="webinar-card featured">
              <div className="webinar-badge">NEXT SESSION</div>
              <div className="webinar-content">
                <h3>Zero Manual Time Entry: Complete AI Automation Setup</h3>
                <p>
                  Live demonstration of setting up 100% automated time capture across Google Calendar, 
                  Slack, Zoom, Salesforce, and 15+ other platforms. Watch as we eliminate all manual 
                  timesheet work for a real consulting team in under 30 minutes.
                </p>
                <div className="webinar-details">
                  <div className="detail">
                    <span className="detail-icon">📅</span>
                    <span>Thursday, December 19, 2024</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">⏰</span>
                    <span>2:00 PM EST (45 minutes)</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">👥</span>
                    <span>Limited to 100 attendees</span>
                  </div>
                </div>
                <div className="webinar-agenda">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    <li>✓ AI-powered activity categorization across all apps</li>
                    <li>✓ Complete elimination of manual time logging</li>
                    <li>✓ Advanced integration setup for 20+ platforms</li>
                    <li>✓ Real-time automation troubleshooting</li>
                  </ul>
                </div>
                <button className="webinar-cta">Reserve Your Spot (Free)</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Series */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Complete Automation <span className="gradient-text">Training Series</span>
          </h2>
          
          <div className="webinar-series">
            <div className="series-card">
              <div className="series-number">01</div>
              <div className="series-content">
                <h3>Foundations: Eliminating Manual Time Entry Forever</h3>
                <p>
                  Learn the core principles of AI-powered time automation. We'll show you how to set up 
                  automatic capture from calendar, email, and communication platforms, eliminating 100% 
                  of manual timesheet work.
                </p>
                <div className="series-meta">
                  <span className="duration">45 minutes</span>
                  <span className="level">Beginner</span>
                  <span className="frequency">Weekly</span>
                </div>
                <div className="series-features">
                  <span>Calendar automation</span>
                  <span>Email integration</span>
                  <span>Meeting detection</span>
                  <span>AI categorization</span>
                </div>
              </div>
            </div>
            
            <div className="series-card">
              <div className="series-number">02</div>
              <div className="series-content">
                <h3>Advanced Integrations: Connect Every Tool in Your Stack</h3>
                <p>
                  Deep dive into integrating Slack, Teams, Zoom, Salesforce, Asana, Jira, and 30+ other 
                  platforms. See how AI automatically captures context and eliminates the need for any 
                  manual categorization or time logging.
                </p>
                <div className="series-meta">
                  <span className="duration">60 minutes</span>
                  <span className="level">Intermediate</span>
                  <span className="frequency">Bi-weekly</span>
                </div>
                <div className="series-features">
                  <span>Multi-platform setup</span>
                  <span>Custom integrations</span>
                  <span>Workflow automation</span>
                  <span>Data synchronization</span>
                </div>
              </div>
            </div>
            
            <div className="series-card">
              <div className="series-number">03</div>
              <div className="series-content">
                <h3>Enterprise Automation: Scaling AI Across Large Teams</h3>
                <p>
                  Enterprise-focused session covering SSO integration, custom security policies, bulk user 
                  provisioning, and automated compliance reporting. Perfect for IT leaders implementing 
                  organization-wide time automation.
                </p>
                <div className="series-meta">
                  <span className="duration">75 minutes</span>
                  <span className="level">Advanced</span>
                  <span className="frequency">Monthly</span>
                </div>
                <div className="series-features">
                  <span>SSO & security</span>
                  <span>Bulk provisioning</span>
                  <span>Compliance automation</span>
                  <span>Custom reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Sessions */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Industry-Specific <span className="gradient-text">Automation Workshops</span>
          </h2>
          
          <div className="industry-webinars">
            <div className="industry-webinar">
              <div className="industry-icon">🏢</div>
              <div className="webinar-content">
                <h3>Professional Services: Eliminate Billable Hour Tracking</h3>
                <p>
                  See how consulting firms and agencies use AI to automatically capture and categorize all 
                  client work across meetings, emails, project management tools, and communication platforms. 
                  Zero manual timesheet entries, 100% billing accuracy.
                </p>
                <div className="webinar-highlights">
                  <span>Client auto-categorization</span>
                  <span>Project code automation</span>
                  <span>Billable hour detection</span>
                  <span>Invoice integration</span>
                </div>
                <div className="webinar-schedule">Next: Dec 21, 3:00 PM EST</div>
                <button className="industry-cta">Register Free</button>
              </div>
            </div>
            
            <div className="industry-webinar">
              <div className="industry-icon">💻</div>
              <div className="webinar-content">
                <h3>Software Teams: Automate Development Time Tracking</h3>
                <p>
                  Live demo of integrating GitHub, Jira, Slack, and development tools for automatic code, 
                  meeting, and project time capture. See how dev teams eliminate manual logging while 
                  maintaining accurate project reporting.
                </p>
                <div className="webinar-highlights">
                  <span>Code commit tracking</span>
                  <span>Sprint automation</span>
                  <span>PR review time</span>
                  <span>Meeting categorization</span>
                </div>
                <div className="webinar-schedule">Next: Dec 26, 2:00 PM EST</div>
                <button className="industry-cta">Register Free</button>
              </div>
            </div>
            
            <div className="industry-webinar">
              <div className="industry-icon">📈</div>
              <div className="webinar-content">
                <h3>Sales & Marketing: CRM Integration Mastery</h3>
                <p>
                  Complete automation setup for sales teams using Salesforce, HubSpot, and marketing 
                  platforms. Watch AI automatically track prospect interactions, campaign work, and 
                  client communications without any manual input.
                </p>
                <div className="webinar-highlights">
                  <span>CRM synchronization</span>
                  <span>Lead interaction tracking</span>
                  <span>Campaign time allocation</span>
                  <span>Pipeline activity capture</span>
                </div>
                <div className="webinar-schedule">Next: Jan 2, 1:00 PM EST</div>
                <button className="industry-cta">Register Free</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Library */}
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            On-Demand <span className="gradient-text">Automation Library</span>
          </h2>
          
          <div className="ondemand-grid">
            <div className="ondemand-card">
              <div className="video-thumbnail">
                <div className="play-button">▶</div>
                <div className="video-duration">28 min</div>
              </div>
              <div className="video-content">
                <h3>Complete Slack Integration: From Setup to AI Automation</h3>
                <p>
                  Step-by-step walkthrough of Slack integration including channel categorization, 
                  project detection, and automatic time allocation based on conversation context.
                </p>
                <div className="video-stats">
                  <span>2,340 views</span>
                  <span>95% found helpful</span>
                </div>
              </div>
            </div>
            
            <div className="ondemand-card">
              <div className="video-thumbnail">
                <div className="play-button">▶</div>
                <div className="video-duration">35 min</div>
              </div>
              <div className="video-content">
                <h3>Google Calendar + AI: Never Log Meeting Time Again</h3>
                <p>
                  Advanced calendar automation showing meeting type detection, attendee analysis, 
                  and automatic client/project categorization for all calendar entries.
                </p>
                <div className="video-stats">
                  <span>1,890 views</span>
                  <span>97% found helpful</span>
                </div>
              </div>
            </div>
            
            <div className="ondemand-card">
              <div className="video-thumbnail">
                <div className="play-button">▶</div>
                <div className="video-duration">42 min</div>
              </div>
              <div className="video-content">
                <h3>Salesforce Integration: Automatic Client Time Tracking</h3>
                <p>
                  Complete CRM integration demonstration including contact matching, opportunity 
                  tracking, and automated time allocation for all customer interactions.
                </p>
                <div className="video-stats">
                  <span>1,650 views</span>
                  <span>94% found helpful</span>
                </div>
              </div>
            </div>
            
            <div className="ondemand-card">
              <div className="video-thumbnail">
                <div className="play-button">▶</div>
                <div className="video-duration">31 min</div>
              </div>
              <div className="video-content">
                <h3>Multi-Platform Automation: Connecting Your Entire Tech Stack</h3>
                <p>
                  Watch as we integrate 12 different platforms in one session, showing how AI 
                  coordinates data across tools to eliminate all manual time entry.
                </p>
                <div className="video-stats">
                  <span>3,120 views</span>
                  <span>98% found helpful</span>
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
            <h2>Ready to Eliminate Manual Time Tracking Forever?</h2>
            <p>Join our next live session and see how AI-powered automation can eliminate all manual timesheet work in under 30 minutes.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-webinar', '_blank')}>
                Register for Live Session
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
            </div>
            
            <p className="cta-note">
              Free webinars • Live Q&A included • Recording provided to all attendees
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinars;