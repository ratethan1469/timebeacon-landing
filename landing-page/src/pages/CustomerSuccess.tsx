import React from 'react';

const CustomerSuccess: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>For Customer Success Teams</span>
          </div>
          
          <h1 className="hero-title">
            Maximize Customer Success 
            <span className="gradient-text"> Team Impact</span>
          </h1>
          
          <p className="hero-subtitle">
            Stop wasting time on manual time tracking. Timebeacon automatically captures time spent 
            on customer calls, emails, meetings, and support work, eliminating 2+ hours of daily admin work.
          </p>
          
          {/* COMMENTED OUT UNTIL WE HAVE REAL CUSTOMER DATA
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">35%</div>
              <div className="stat-label">Higher Renewal Rates</div>
            </div>
            <div className="stat">
              <div className="stat-number">250%</div>
              <div className="stat-label">Improved Account Coverage</div>
            </div>
            <div className="stat">
              <div className="stat-number">10hrs</div>
              <div className="stat-label">Saved Per Week</div>
            </div>
          </div>
          */}
          
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
              Book a Demo
            </button>
            <button className="btn-secondary-large" onClick={() => window.open('https://www.loom.com/share/timebeacon-demo', '_blank')}>
              Watch 2-Min Demo
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            The CSM <span className="gradient-text">Time Tracking Challenge</span>
          </h2>
          
          <div className="pain-points-grid">
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Manual Time Entry Nightmare</h3>
              <p>
                <strong>The Reality:</strong> CSMs spend 30+ minutes daily reconstructing their time across customer calls, 
                emails, meetings, and support tickets instead of focusing on customer success.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Vague Time Entries</h3>
              <p>
                <strong>Current Entries:</strong> "meeting," "emails," "follow-up" provide zero detail 
                about which customers you worked with or what type of work was done.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Forgotten & Lost Time</h3>
              <p>
                <strong>The Problem:</strong> CSMs forget to log time spent on customer work, leading to 
                inaccurate time tracking and lost billable hours that should be captured.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Context Switching Nightmare</h3>
              <p>
                <strong>Daily Reality:</strong> Jumping between Calendar → Email → Slack → Support tickets 
                to reconstruct your day and manually enter time while trying to serve customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Built for <span className="gradient-text">Customer Success Time Tracking</span>
          </h2>
          
          <div className="features-showcase">
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Automatic Time Tracking for Customer Interactions</h3>
                <p>
                  AI automatically captures time spent on customer calls, support tickets, emails, 
                  and meetings. No more manual time entry - just accurate time tracking for all customer-facing work.
                </p>
                <div className="feature-benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Automatic call time tracking</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Email time categorization</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Support ticket time logging</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Meeting time capture</div>
                  </div>
                </div>
              </div>
              <div className="feature-visual">
                <div className="customer-interaction-tracker">
                  <div className="tracker-header">Today's Customer Activities - Auto-Captured</div>
                  <div className="interaction-list">
                    <div className="interaction-item critical">
                      <div className="interaction-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="interaction-details">
                        <div className="interaction-title">Escalation Call - Client A</div>
                        <div className="interaction-meta">Account Health Issue • 45 min • High Priority</div>
                        <div className="interaction-context">Integration issues causing downtime, customer needs immediate support</div>
                      </div>
                      <div className="health-indicator">At Risk</div>
                    </div>
                    <div className="interaction-item positive">
                      <div className="interaction-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="interaction-details">
                        <div className="interaction-title">Success Review - Client B</div>
                        <div className="interaction-meta">Quarterly Business Review • 60 min • Expansion Opportunity</div>
                        <div className="interaction-context">ROI discussion, interested in advanced features</div>
                      </div>
                      <div className="health-indicator">Healthy</div>
                    </div>
                    <div className="interaction-item">
                      <div className="interaction-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="interaction-details">
                        <div className="interaction-title">Product Training - Client C</div>
                        <div className="interaction-meta">Feature walkthrough • 30 min • Adoption</div>
                        <div className="interaction-context">New feature onboarding, user adoption tracking</div>
                      </div>
                      <div className="health-indicator">Stable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item reverse">
              <div className="feature-content">
                <h3>Time Reporting & Analytics</h3>
                <p>
                  Get clear reports on how time is spent across customer accounts and projects. 
                  See exactly where your team's time goes without any manual time tracking.
                </p>
                <div className="feature-benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Time reports by customer</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Daily time summaries</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Export time data</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">No manual time entry</div>
                  </div>
                </div>
              </div>
              <div className="feature-visual">
                <div className="account-health-dashboard">
                  <div className="dashboard-title">Account Health - Live Monitoring</div>
                  <div className="account-grid">
                    <div className="account-card healthy">
                      <div className="account-header">
                        <span className="account-name">Client B</span>
                        <span className="health-score">92</span>
                      </div>
                      <div className="account-signals">
                        <div className="signal positive">↗ Usage +45% this month</div>
                        <div className="signal positive">✓ Regular check-ins</div>
                        <div className="signal positive">→ Expansion interest</div>
                      </div>
                      <div className="account-action">Schedule expansion call</div>
                    </div>
                    <div className="account-card at-risk">
                      <div className="account-header">
                        <span className="account-name">Client A</span>
                        <span className="health-score">34</span>
                      </div>
                      <div className="account-signals">
                        <div className="signal negative">! Support tickets +200%</div>
                        <div className="signal negative">↓ Usage declining</div>
                        <div className="signal negative">× Frustrated communications</div>
                      </div>
                      <div className="account-action">Immediate intervention needed</div>
                    </div>
                    <div className="account-card stable">
                      <div className="account-header">
                        <span className="account-name">Client C</span>
                        <span className="health-score">78</span>
                      </div>
                      <div className="account-signals">
                        <div className="signal neutral">− Steady usage</div>
                        <div className="signal positive">✓ Training completed</div>
                        <div className="signal neutral">• Monthly check-ins</div>
                      </div>
                      <div className="account-action">Maintain current cadence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Intelligent Workload Balancing</h3>
                <p>
                  Help managers distribute accounts effectively based on actual CSM capacity and expertise. 
                  See which CSMs are handling high-touch escalations vs. routine success activities.
                </p>
                <ul className="feature-benefits">
                  <li>CSM capacity visualization</li>
                  <li>Account complexity scoring</li>
                  <li>Workload balancing recommendations</li>
                  <li>Expertise-based assignment</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="csm-workload-dashboard">
                  <div className="workload-header">CSM Team Capacity - Real-Time</div>
                  <div className="csm-grid">
                    <div className="csm-card overloaded">
                      <div className="csm-info">
                        <div className="csm-name">Sarah M.</div>
                        <div className="csm-accounts">28 accounts</div>
                      </div>
                      <div className="workload-details">
                        <div className="workload-item">! 3 critical escalations</div>
                        <div className="workload-item">• 12 calls this week</div>
                        <div className="workload-item">■ 95% capacity</div>
                      </div>
                      <div className="workload-recommendation">Redistribute 5 accounts</div>
                    </div>
                    <div className="csm-card balanced">
                      <div className="csm-info">
                        <div className="csm-name">Mike R.</div>
                        <div className="csm-accounts">22 accounts</div>
                      </div>
                      <div className="workload-details">
                        <div className="workload-item">✓ Healthy accounts</div>
                        <div className="workload-item">↗ Growth focus</div>
                        <div className="workload-item">■ 78% capacity</div>
                      </div>
                      <div className="workload-recommendation">Can take complex accounts</div>
                    </div>
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
            <h2>Ready to Transform Your Customer Success Impact?</h2>
            <p>Transform your customer success impact with Timebeacon's AI-powered activity tracking.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                Book Your Demo
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://www.loom.com/share/timebeacon-demo', '_blank')}>
                Watch Demo First
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerSuccess;