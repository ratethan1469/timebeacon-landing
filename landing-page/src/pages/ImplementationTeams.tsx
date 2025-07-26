import React from 'react';

const ImplementationTeams: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>For Implementation Teams at B2B SaaS Companies</span>
          </div>
          
          <h1 className="hero-title">
            Stop Losing Track of
            <span className="gradient-text"> Client Implementation Hours</span>
          </h1>
          
          <p className="hero-subtitle">
            Implementation specialists at B2B SaaS companies spend hours weekly reconstructing time spent 
            on client onboarding, technical setup, training sessions, and troubleshooting. Timebeacon's AI 
            automatically captures every implementation activity, giving managers real-time project visibility 
            and eliminating manual timesheet reconstruction.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2hrs</div>
              <div className="stat-label">Daily Admin Time Saved</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Implementation Activity Capture</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Missing Project Hours</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
              See Implementation Demo
            </button>
            <button className="btn-secondary-large" onClick={() => window.open('https://www.loom.com/share/timebeacon-demo', '_blank')}>
              Watch 2-Min Overview
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            The Implementation <span className="gradient-text">Time Tracking Crisis</span>
          </h2>
          
          <div className="pain-points-grid">
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Daily Reconstruction Nightmare</h3>
              <p>
                <strong>The Reality:</strong> "Wait, how much time did I spend on the TechFlow integration setup vs. 
                user training yesterday?" Jumping between calendar, email, Slack, and project tools to piece together your day.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Vague Implementation Entries</h3>
              <p>
                <strong>Current Problem:</strong> Time entries like "client work," "training," "setup" provide zero visibility 
                into what implementation phase is consuming the most resources or where bottlenecks occur.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Scope Creep Goes Unnoticed</h3>
              <p>
                <strong>Manager Blind Spot:</strong> "Is this client's implementation taking longer than normal?" 
                Without detailed time tracking, scope creep isn't visible until projects are over budget.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Resource Planning Guesswork</h3>
              <p>
                <strong>Staffing Challenge:</strong> "Who's available for the urgent DataSync implementation?" 
                Managers can't see who's deep in complex technical work vs. routine training sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Built for <span className="gradient-text">B2B SaaS Implementation Excellence</span>
          </h2>
          
          <div className="features-showcase">
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Automatic Implementation Phase Detection</h3>
                <p>
                  AI automatically categorizes time by implementation phase, client, and activity type. 
                  Know exactly how much time is spent on onboarding vs. technical configuration vs. 
                  user training for each client project.
                </p>
                <div className="feature-benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Implementation phase auto-detection</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Client project categorization</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Technical vs. training time breakdown</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Integration complexity tracking</div>
                  </div>
                </div>
              </div>
              <div className="feature-visual">
                <div className="implementation-tracker">
                  <div className="tracker-header">Today's Implementation Work - Auto-Categorized</div>
                  <div className="activity-breakdown">
                    <div className="activity-item complex">
                      <div className="activity-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="activity-details">
                        <div className="activity-title">API Integration Setup - Client A</div>
                        <div className="activity-meta">Technical Configuration • 3.2 hrs • Complex</div>
                        <div className="activity-context">Custom webhook configuration, authentication troubleshooting</div>
                      </div>
                      <div className="complexity-indicator">High Complexity</div>
                    </div>
                    <div className="activity-item routine">
                      <div className="activity-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="activity-details">
                        <div className="activity-title">User Training Session - Client B</div>
                        <div className="activity-meta">Client Training • 1.5 hrs • Standard</div>
                        <div className="activity-context">Dashboard walkthrough, feature demonstration for 8 users</div>
                      </div>
                      <div className="complexity-indicator">Standard</div>
                    </div>
                    <div className="activity-item planning">
                      <div className="activity-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="activity-details">
                        <div className="activity-title">Implementation Planning - Client C</div>
                        <div className="activity-meta">Project Planning • 45 min • Discovery</div>
                        <div className="activity-context">Requirements gathering, timeline discussion with client stakeholders</div>
                      </div>
                      <div className="complexity-indicator">Discovery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item reverse">
              <div className="feature-content">
                <h3>Real-Time Project Health Monitoring</h3>
                <p>
                  Get instant visibility into which implementations are on track, which are hitting 
                  technical roadblocks, and which clients need additional attention. Make proactive 
                  decisions before projects go off track.
                </p>
                <ul className="feature-benefits">
                  <li>Project timeline tracking</li>
                  <li>Complexity bottleneck detection</li>
                  <li>Client communication frequency</li>
                  <li>Resource allocation alerts</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="project-health-dashboard">
                  <div className="dashboard-title">Implementation Projects - Live Status</div>
                  <div className="project-grid">
                    <div className="project-card on-track">
                      <div className="project-header">
                        <span className="project-name">Client B Implementation</span>
                        <span className="project-progress">78%</span>
                      </div>
                      <div className="project-details">
                        <div className="detail-item">Phase: User Training</div>
                        <div className="detail-item">Timeline: On Track</div>
                        <div className="detail-item">Complexity: Standard</div>
                      </div>
                      <div className="project-status">✓ On Track</div>
                    </div>
                    <div className="project-card at-risk">
                      <div className="project-header">
                        <span className="project-name">Client A Implementation</span>
                        <span className="project-progress">45%</span>
                      </div>
                      <div className="project-details">
                        <div className="detail-item">Phase: Technical Setup</div>
                        <div className="detail-item">Timeline: 2 weeks behind</div>
                        <div className="detail-item">Complexity: High</div>
                      </div>
                      <div className="project-status">! Needs Attention</div>
                    </div>
                    <div className="project-card planning">
                      <div className="project-header">
                        <span className="project-name">Client C Implementation</span>
                        <span className="project-progress">12%</span>
                      </div>
                      <div className="project-details">
                        <div className="detail-item">Phase: Discovery</div>
                        <div className="detail-item">Timeline: Just Started</div>
                        <div className="detail-item">Complexity: Medium</div>
                      </div>
                      <div className="project-status">• Discovery Phase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Implementation Team Capacity Management</h3>
                <p>
                  See which implementation specialists are available for new urgent projects, who's 
                  handling complex technical work, and who can take on additional training sessions. 
                  Make smart staffing decisions based on real workload data.
                </p>
                <ul className="feature-benefits">
                  <li>Specialist availability tracking</li>
                  <li>Skill-based project matching</li>
                  <li>Workload balancing alerts</li>
                  <li>Expertise utilization optimization</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="team-capacity-dashboard">
                  <div className="capacity-header">Implementation Team - Real-Time Capacity</div>
                  <div className="specialist-grid">
                    <div className="specialist-card technical-expert">
                      <div className="specialist-info">
                        <div className="specialist-name">Sarah M.</div>
                        <div className="specialist-role">Technical Implementation Lead</div>
                      </div>
                      <div className="current-work">
                        <div className="work-item">• Client A API Integration (Complex)</div>
                        <div className="work-item">■ 90% capacity this week</div>
                      </div>
                      <div className="availability-status">Available for urgent technical work only</div>
                    </div>
                    <div className="specialist-card training-focused">
                      <div className="specialist-info">
                        <div className="specialist-name">Mike R.</div>
                        <div className="specialist-role">Training & Onboarding Specialist</div>
                      </div>
                      <div className="current-work">
                        <div className="work-item">• Client B User Training Sessions</div>
                        <div className="work-item">■ 65% capacity this week</div>
                      </div>
                      <div className="availability-status">✓ Available for new training projects</div>
                    </div>
                    <div className="specialist-card full-stack">
                      <div className="specialist-info">
                        <div className="specialist-name">Alex T.</div>
                        <div className="specialist-role">Implementation Consultant</div>
                      </div>
                      <div className="current-work">
                        <div className="work-item">• Client C Discovery & Planning</div>
                        <div className="work-item">■ 45% capacity this week</div>
                      </div>
                      <div className="availability-status">! Available for urgent project expansion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Scenarios */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Real Implementation <span className="gradient-text">Scenarios</span>
          </h2>
          
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="scenario-content">
                <h3>Emergency Technical Implementation</h3>
                <p>
                  <strong>The Situation:</strong> "Client needs urgent API integration for their product launch next week."
                </p>
                <p>
                  <strong>Before:</strong> "Who's available? How complex is this? Do we have the right expertise?"
                </p>
                <p>
                  <strong>With Timebeacon:</strong> Manager instantly sees team member availability, expertise levels, and capacity 
                  to make smart staffing decisions for urgent technical implementations.
                </p>
              </div>
            </div>
            
            <div className="scenario-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="scenario-content">
                <h3>Implementation Scope Management</h3>
                <p>
                  <strong>The Situation:</strong> "This client's implementation seems to be taking longer than usual."
                </p>
                <p>
                  <strong>Before:</strong> Discover scope creep during weekly status meetings, too late to address.
                </p>
                <p>
                  <strong>With Timebeacon:</strong> AI detects that 60% of time is spent on "custom integration work" vs. 
                  the planned 20%, flagging potential scope creep for immediate discussion with the client.
                </p>
              </div>
            </div>
            
            <div className="scenario-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="scenario-content">
                <h3>Implementation Pattern Learning</h3>
                <p>
                  <strong>The Situation:</strong> "We want to optimize our implementation process for faster client success."
                </p>
                <p>
                  <strong>Before:</strong> Rely on gut feeling about what works best for different client types.
                </p>
                <p>
                  <strong>With Timebeacon:</strong> Data shows that clients who receive technical training in week 2 
                  (vs. week 4) have 40% faster go-lives and higher satisfaction scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            Value for <span className="gradient-text">15-Person Implementation Team</span>
          </h2>
          
          <div className="roi-breakdown">
            <div className="roi-section">
              <h3>Individual Implementation Specialist Benefits</h3>
              <div className="specialist-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Get back 2 hours daily</div>
                    <div className="benefit-detail">No more reconstructing time across projects and phases</div>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Get credit for complex technical work</div>
                    <div className="benefit-detail">Rich context vs. vague "client work" entries</div>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Focus on client success, not timesheets</div>
                    <div className="benefit-detail">Automatic capture means zero manual logging</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="roi-section">
              <h3>Implementation Manager Benefits</h3>
              <div className="manager-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Smart resource allocation</div>
                    <div className="benefit-detail">Match complex projects with right expertise instantly</div>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Early scope creep detection</div>
                    <div className="benefit-detail">Identify project risks before they impact timelines</div>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Implementation process optimization</div>
                    <div className="benefit-detail">Data-driven insights for faster client success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="team-roi">
            <h3>15-Person Implementation Team Annual Value</h3>
            <div className="roi-metrics">
              <div className="roi-metric">
                <div className="metric-number">30hrs</div>
                <div className="metric-label">Weekly Hours Saved</div>
                <div className="metric-calculation">15 people × 2 hrs/day × 5 days ÷ 5</div>
              </div>
              <div className="roi-metric">
                <div className="metric-number">1,560hrs</div>
                <div className="metric-label">Annual Hours Reclaimed</div>
                <div className="metric-calculation">30 hrs/week × 52 weeks</div>
              </div>
              <div className="roi-metric">
                <div className="metric-number">$234K</div>
                <div className="metric-label">Annual Value</div>
                <div className="metric-calculation">1,560 hrs × $150/hr average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT UNTIL WE HAVE REAL TESTIMONIALS
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            What Implementation <span className="gradient-text">Teams Say</span>
          </h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "As someone who's implemented dozens of B2B SaaS products, the time reconstruction pain was real. 
                  Now I focus on client success instead of remembering whether that 3-hour block was technical setup 
                  or user training. My manager finally understands my actual workload."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SL</div>
                <div className="author-info">
                  <div className="author-name">Sarah L.</div>
                  <div className="author-title">Senior Implementation Specialist</div>
                  <div className="author-company">B2B SaaS Company</div>
                </div>
              </div>
              <div className="testimonial-metrics">
                <div className="metric">
                  <span className="metric-value">2hrs</span>
                  <span className="metric-label">Daily Time Saved</span>
                </div>
                <div className="metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Activity Capture</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "The project health visibility is incredible. I can see when implementations are hitting 
                  technical complexity roadblocks vs. routine delays. My team gets the right support at the right time."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MW</div>
                <div className="author-info">
                  <div className="author-name">Mike W.</div>
                  <div className="author-title">Implementation Manager</div>
                  <div className="author-company">Series B SaaS Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Implementation Process?</h2>
            <p>Transform your implementation process with intelligent activity tracking and team capacity management.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                See Implementation Demo
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • Implementation team setup included • Results in 48 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImplementationTeams;