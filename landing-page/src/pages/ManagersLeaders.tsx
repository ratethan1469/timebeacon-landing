import React from 'react';

const ManagersLeaders: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>For Managers & Leaders</span>
          </div>
          
          <h1 className="hero-title">
            Finally See What Your 
            <span className="gradient-text"> Team Actually Does</span>
          </h1>
          
          <p className="hero-subtitle">
            Stop managing in the dark with vague "meeting" and "admin" time entries. Timebeacon's AI 
            gives you detailed, contextual insights into team activities, project progress, and resource 
            utilization - so you can make data-driven decisions about your team's success.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Team Activity Visibility</span>
            </div>
            <div className="stat">
              <span className="stat-number">3x</span>
              <span className="stat-label">Better Resource Planning</span>
            </div>
            <div className="stat">
              <span className="stat-number">45%</span>
              <span className="stat-label">Faster Decision Making</span>
            </div>
          </div>
          
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
            The Manager's <span className="gradient-text">Visibility Problem</span>
          </h2>
          
          <div className="pain-points-grid">
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>No Real Visibility</h3>
              <p>Time entries like "meeting" and "admin work" give you zero insight into what your team actually accomplished.</p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Reactive Management</h3>
              <p>You only discover project issues, bottlenecks, and resource conflicts during weekly status meetings.</p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Guesswork Planning</h3>
              <p>Resource allocation and capacity planning are based on gut feeling rather than actual data.</p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Unbalanced Workloads</h3>
              <p>Some team members are overloaded while others have capacity, but you can't see it until it's too late.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Management Intelligence <span className="gradient-text">You've Never Had</span>
          </h2>
          
          <div className="features-showcase">
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>AI-Powered Work Summaries</h3>
                <p>
                  Get detailed, contextual summaries of each team member's daily activities. See exactly 
                  what projects they worked on, which clients they spoke with, and what progress was made.
                </p>
                <div className="feature-benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Detailed activity breakdowns</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Project progress tracking</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Client interaction summaries</div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="benefit-text">Goal completion status</div>
                  </div>
                </div>
              </div>
              <div className="feature-visual">
                <div className="work-summary">
                  <div className="summary-header">Team Member - Today's Summary</div>
                  <div className="summary-activities">
                    <div className="activity-block">
                      <div className="activity-title">Client Strategy Session (2.5h)</div>
                      <div className="activity-details">
                        Discussed Q4 digital transformation roadmap, identified 3 key blockers, 
                        next steps scheduled for Thursday.
                      </div>
                    </div>
                    <div className="activity-block">
                      <div className="activity-title">Market Research - Client Project (1.8h)</div>
                      <div className="activity-details">
                        Completed competitive analysis, gathered pricing data from 5 competitors, 
                        insights ready for client presentation.
                      </div>
                    </div>
                    <div className="activity-block">
                      <div className="activity-title">Team Planning Meeting (45min)</div>
                      <div className="activity-details">
                        Resource allocation for next sprint, team member taking lead on integration project.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item reverse">
              <div className="feature-content">
                <h3>Real-Time Team Health Monitoring</h3>
                <p>
                  Instantly spot when team members are overloaded, underutilized, or blocked. 
                  Get proactive alerts about project risks and capacity issues before they become problems.
                </p>
                <ul className="feature-benefits">
                  <li>Workload balance monitoring</li>
                  <li>Burnout risk detection</li>
                  <li>Capacity optimization alerts</li>
                  <li>Project bottleneck identification</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="team-health">
                  <div className="health-header">Team Health Alerts</div>
                  <div className="health-items">
                    <div className="health-alert warning">
                      <div className="alert-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="alert-content">
                        <div className="alert-title">Mike R. - Overloaded</div>
                        <div className="alert-desc">Working 52 hours this week, 3 high-priority projects</div>
                        <div className="alert-action">Suggest redistribution</div>
                      </div>
                    </div>
                    <div className="health-alert opportunity">
                      <div className="alert-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="7,7 17,7 17,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="alert-content">
                        <div className="alert-title">Alex T. - Available Capacity</div>
                        <div className="alert-desc">Currently at 76% utilization, can take on more work</div>
                        <div className="alert-action">Assign new project</div>
                      </div>
                    </div>
                    <div className="health-alert critical">
                      <div className="alert-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="alert-content">
                        <div className="alert-title">Client Project - Behind</div>
                        <div className="alert-desc">Milestone missed, deadline at risk, needs attention</div>
                        <div className="alert-action">Schedule review</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Intelligent Performance Analytics</h3>
                <p>
                  Understand which team members excel at different types of work, identify skill gaps, 
                  and make data-driven decisions about promotions, hiring, and team development.
                </p>
                <ul className="feature-benefits">
                  <li>Individual performance insights</li>
                  <li>Skill specialization analysis</li>
                  <li>Productivity pattern recognition</li>
                  <li>Development opportunity identification</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="performance-analytics">
                  <div className="analytics-header">Team Performance Matrix</div>
                  <div className="performance-grid">
                    <div className="perf-card high">
                      <div className="perf-header">
                        <span className="member-name">Sarah M.</span>
                        <span className="perf-score">A+</span>
                      </div>
                      <div className="perf-metrics">
                        <div className="metric">Client Work: 94%</div>
                        <div className="metric">Efficiency: High</div>
                        <div className="metric">Specialty: Strategy</div>
                      </div>
                      <div className="perf-trend">↗ Trending up</div>
                    </div>
                    <div className="perf-card good">
                      <div className="perf-header">
                        <span className="member-name">Mike R.</span>
                        <span className="perf-score">B+</span>
                      </div>
                      <div className="perf-metrics">
                        <div className="metric">Client Work: 87%</div>
                        <div className="metric">Efficiency: Good</div>
                        <div className="metric">Specialty: Implementation</div>
                      </div>
                      <div className="perf-trend">→ Stable</div>
                    </div>
                    <div className="perf-card developing">
                      <div className="perf-header">
                        <span className="member-name">Alex T.</span>
                        <span className="perf-score">B</span>
                      </div>
                      <div className="perf-metrics">
                        <div className="metric">Client Work: 76%</div>
                        <div className="metric">Efficiency: Developing</div>
                        <div className="metric">Specialty: Analysis</div>
                      </div>
                      <div className="perf-trend">↗ Growth potential</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Management ROI <span className="gradient-text">Calculator</span>
          </h2>
          
          <div className="roi-example">
            <div className="roi-scenario">
              <h3>Typical Management Team</h3>
              <div className="scenario-details">
                <div className="detail-item">
                  <span className="detail-label">Team Size:</span>
                  <span className="detail-value">15 direct reports</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Manager Salary:</span>
                  <span className="detail-value">$120K/year</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Planning Time:</span>
                  <span className="detail-value">8 hours/week</span>
                </div>
              </div>
            </div>
            
            <div className="roi-results">
              <div className="roi-metric">
                <div className="roi-number">$156K</div>
                <div className="roi-label">Management Time Saved</div>
              </div>
              <div className="roi-metric">
                <div className="roi-number">$420K</div>
                <div className="roi-label">Team Productivity Gains</div>
              </div>
              <div className="roi-metric">
                <div className="roi-number">1,920%</div>
                <div className="roi-label">Return on Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT UNTIL WE HAVE REAL TESTIMONIALS
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            What Leaders <span className="gradient-text">Are Saying</span>
          </h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "For the first time, I actually know what my team is working on. The AI summaries 
                  show detailed activity breakdowns instead of vague 'meeting' entries. This visibility 
                  has revolutionized how I manage resources and plan projects."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">RW</div>
                <div className="author-info">
                  <div className="author-name">Robert Wilson</div>
                  <div className="author-title">VP of Operations</div>
                  <div className="author-company">ServicePro</div>
                </div>
              </div>
              <div className="testimonial-metrics">
                <div className="metric">
                  <span className="metric-value">300%</span>
                  <span className="metric-label">Better Planning</span>
                </div>
                <div className="metric">
                  <span className="metric-value">45%</span>
                  <span className="metric-label">Faster Decisions</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "Timebeacon transformed how I lead my team. I can proactively identify bottlenecks, 
                  balance workloads, and prevent burnout before it happens. My team is more productive 
                  and happier than ever."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <div className="author-name">Jennifer Smith</div>
                  <div className="author-title">Director of Consulting</div>
                  <div className="author-company">TechFlow Solutions</div>
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
            <h2>Ready to Finally See What Your Team Actually Does?</h2>
            <p>Transform your team management with AI-powered visibility and intelligent insights.</p>
            
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

export default ManagersLeaders;