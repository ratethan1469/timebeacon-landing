import React from 'react';

const Consulting: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>For Professional Services Teams at B2B SaaS Companies</span>
          </div>
          
          <h1 className="hero-title">
            Stop Wasting 2.5 Hours Weekly on
            <span className="gradient-text"> Manual Timesheets</span>
          </h1>
          
          <p className="hero-subtitle">
            Professional Services consultants at companies like LogicGate and Pendo lose 30 minutes daily 
            jumping between Workday → Google Calendar → Gmail → Slack to reconstruct their day. 
            Timebeacon's AI eliminates manual time entry while giving managers real-time visibility 
            for staffing decisions and capacity planning.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2.5hrs</div>
              <div className="stat-label">Saved Per Week Per Person</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Late Timesheet Submissions</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Context-Rich Time Entries</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
              See Workday Integration Demo
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
            The Daily <span className="gradient-text">Time Tracking Nightmare</span>
          </h2>
          
          <div className="pain-points-grid">
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>30 Minutes Daily Wasted</h3>
              <p>
                <strong>Real Experience:</strong> Jumping between Workday → Google Calendar → Gmail → Slack 
                to reconstruct your day. "Wait, what was that 2-hour block on Tuesday again?"
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Vague, Useless Descriptions</h3>
              <p>
                <strong>Current Entries:</strong> "meeting," "emails," "follow-up" provide zero visibility 
                to managers. They have no idea if you're available for urgent client work.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12c0 1.2-.9 2.3-2 2.6V18a2 2 0 01-2 2H7a2 2 0 01-2-2v-3.4c-1.1-.3-2-1.4-2-2.6s.9-2.3 2-2.6V6a2 2 0 012-2h10a2 2 0 012 2v3.4c1.1.3 2 1.4 2 2.6z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Forgotten & Late Submissions</h3>
              <p>
                <strong>The Reality:</strong> You simply forget to track time or submit late, creating 
                administrative overhead and manager frustration with constant follow-ups.
              </p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Manager Blind Spots</h3>
              <p>
                <strong>Staffing Problems:</strong> "Can this consultant take on another project?" Managers 
                can't tell who has bandwidth without digging through vague timesheet entries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Built for <span className="gradient-text">B2B SaaS Professional Services</span>
          </h2>
          
          <div className="features-showcase">
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Automatic Workday Integration</h3>
                <p>
                  AI captures every activity from your calendar, email, and communication tools, then 
                  automatically populates Workday with rich, contextual time entries. No more manual 
                  reconstruction of your day.
                </p>
                <ul className="feature-benefits">
                  <li>Direct Workday API integration</li>
                  <li>Google Calendar automatic sync</li>
                  <li>Gmail client categorization</li>
                  <li>Slack project detection</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="workday-integration">
                  <div className="integration-header">Workday - Auto-Populated Today</div>
                  <div className="time-entries">
                    <div className="entry-item">
                      <div className="entry-time">9:00 AM - 10:30 AM</div>
                      <div className="entry-description">
                        <strong>Customer Implementation Call - Acme Corp</strong><br/>
                        Technical architecture review for Q1 rollout, discussed API integration requirements
                      </div>
                      <div className="entry-category">Client: Acme Corp • Project: Implementation</div>
                    </div>
                    <div className="entry-item">
                      <div className="entry-time">10:45 AM - 12:15 PM</div>
                      <div className="entry-description">
                        <strong>Product Research - Competitive Analysis</strong><br/>
                        Market research for TechFlow's new feature set, analyzed 5 competitor solutions
                      </div>
                      <div className="entry-category">Client: TechFlow • Project: Strategy</div>
                    </div>
                    <div className="entry-item">
                      <div className="entry-time">2:00 PM - 3:30 PM</div>
                      <div className="entry-description">
                        <strong>Internal Team Planning - Resource Allocation</strong><br/>
                        Sprint planning for development team, capacity planning for Q1
                      </div>
                      <div className="entry-category">Internal • Project: Team Management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item reverse">
              <div className="feature-content">
                <h3>Real-Time Manager Visibility</h3>
                <p>
                  Managers can instantly see who's available for urgent client requests, track project 
                  burn rates, and make data-driven staffing decisions without asking "who has bandwidth?"
                </p>
                <ul className="feature-benefits">
                  <li>Real-time capacity tracking</li>
                  <li>Project budget monitoring</li>
                  <li>Consultant availability dashboard</li>
                  <li>Utilization trend analysis</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="manager-dashboard">
                  <div className="dashboard-title">Team Capacity - Live View</div>
                  <div className="team-status">
                    <div className="consultant-status available">
                      <div className="consultant-info">
                        <div className="consultant-name">Sarah M.</div>
                        <div className="current-work">Light admin work - Available for technical projects</div>
                      </div>
                      <div className="availability-indicator">✅ Available</div>
                    </div>
                    <div className="consultant-status busy">
                      <div className="consultant-info">
                        <div className="consultant-name">Mike R.</div>
                        <div className="current-work">Deep in API troubleshooting - Acme Corp critical issue</div>
                      </div>
                      <div className="availability-indicator">🔥 Critical Work</div>
                    </div>
                    <div className="consultant-status moderate">
                      <div className="consultant-info">
                        <div className="consultant-name">Alex T.</div>
                        <div className="current-work">Client strategy session - Available after 3 PM</div>
                      </div>
                      <div className="availability-indicator">⏰ Available Later</div>
                    </div>
                  </div>
                  <div className="emergency-alert">
                    <div className="alert-icon">🚨</div>
                    <div className="alert-text">Client Y Critical Issue - Sarah M. available for immediate assignment</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Project Budget & Scope Management</h3>
                <p>
                  Track exactly how time is spent on each client project. See when implementations move 
                  from routine training to complex troubleshooting, identify scope creep early, and 
                  make informed decisions about resource allocation.
                </p>
                <ul className="feature-benefits">
                  <li>Project burn rate tracking</li>
                  <li>Scope creep detection</li>
                  <li>Work type categorization</li>
                  <li>Budget variance alerts</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="project-tracking">
                  <div className="project-header">Customer Z Implementation - 20 hours remaining</div>
                  <div className="project-breakdown">
                    <div className="work-category">
                      <div className="category-header">
                        <span className="category-name">Integration Troubleshooting</span>
                        <span className="category-hours">12 hours this week</span>
                      </div>
                      <div className="category-alert">⚠️ Above normal - potential scope creep</div>
                    </div>
                    <div className="work-category">
                      <div className="category-header">
                        <span className="category-name">User Training</span>
                        <span className="category-hours">3 hours this week</span>
                      </div>
                      <div className="category-status">✅ On track</div>
                    </div>
                    <div className="work-category">
                      <div className="category-header">
                        <span className="category-name">Documentation</span>
                        <span className="category-hours">2 hours this week</span>
                      </div>
                      <div className="category-status">✅ On track</div>
                    </div>
                  </div>
                  <div className="project-recommendation">
                    💡 Recommend flagging integration complexity for scope discussion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Use Cases */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Real <span className="gradient-text">Use Cases</span>
          </h2>
          
          <div className="use-cases">
            <div className="use-case-card">
              <div className="use-case-icon">🚨</div>
              <div className="use-case-content">
                <h3>Emergency Staffing</h3>
                <p>
                  <strong>The Scenario:</strong> "Client Y has a critical implementation issue."
                </p>
                <p>
                  <strong>Before:</strong> Slacking the whole team asking "who's available?"
                </p>
                <p>
                  <strong>With Timebeacon:</strong> Manager instantly sees that Sarah is in light administrative 
                  work while Mike is deep in complex API troubleshooting. Sarah gets assigned immediately.
                </p>
              </div>
            </div>
            
            <div className="use-case-card">
              <div className="use-case-icon">📊</div>
              <div className="use-case-content">
                <h3>Project Budget Management</h3>
                <p>
                  <strong>The Scenario:</strong> "Customer Z's implementation has 20 hours left."
                </p>
                <p>
                  <strong>Before:</strong> No visibility into how time is being spent until it's too late.
                </p>
                <p>
                  <strong>With Timebeacon:</strong> Shows the team spent this week troubleshooting integration 
                  issues vs. routine training, so manager flags potential scope creep early.
                </p>
              </div>
            </div>
            
            <div className="use-case-card">
              <div className="use-case-icon">👥</div>
              <div className="use-case-content">
                <h3>Capacity Planning</h3>
                <p>
                  <strong>The Scenario:</strong> "New enterprise deal needs a technical consultant for 3 months."
                </p>
                <p>
                  <strong>Before:</strong> Guesswork about who can handle complex technical work.
                </p>
                <p>
                  <strong>With Timebeacon:</strong> Utilization data shows exactly who can take on complex 
                  technical work vs. who's already at capacity with demanding clients.
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
            Value for <span className="gradient-text">25-Person PS Team</span>
          </h2>
          
          <div className="roi-breakdown">
            <div className="roi-section">
              <h3>Individual Consultant Benefits</h3>
              <div className="consultant-savings">
                <div className="saving-item">
                  <div className="saving-icon">⏰</div>
                  <div className="saving-content">
                    <div className="saving-title">Get back 2.5 hours per week</div>
                    <div className="saving-detail">30 min/day × 5 days saved on manual time entry</div>
                  </div>
                </div>
                <div className="saving-item">
                  <div className="saving-icon">📋</div>
                  <div className="saving-content">
                    <div className="saving-title">Never submit a late timesheet again</div>
                    <div className="saving-detail">Automatic real-time capture and Workday sync</div>
                  </div>
                </div>
                <div className="saving-item">
                  <div className="saving-icon">🏆</div>
                  <div className="saving-content">
                    <div className="saving-title">Get credit for all your hard work</div>
                    <div className="saving-detail">Rich context vs. vague "meeting" entries</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="roi-section">
              <h3>Manager Benefits</h3>
              <div className="manager-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Make real-time staffing decisions</div>
                    <div className="benefit-detail">Instant visibility into who's available for urgent work</div>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📈</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Track project burn rates automatically</div>
                    <div className="benefit-detail">See budget usage and scope creep in real-time</div>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🚫</div>
                  <div className="benefit-content">
                    <div className="benefit-title">Stop chasing down late timesheets</div>
                    <div className="benefit-detail">100% automatic submission and accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="team-roi">
            <h3>25-Person Team Annual Value</h3>
            <div className="roi-metrics">
              <div className="roi-metric">
                <div className="metric-number">62.5hrs</div>
                <div className="metric-label">Weekly Hours Saved</div>
                <div className="metric-calculation">25 people × 2.5 hrs/week</div>
              </div>
              <div className="roi-metric">
                <div className="metric-number">3,250hrs</div>
                <div className="metric-label">Annual Hours Reclaimed</div>
                <div className="metric-calculation">62.5 hrs/week × 52 weeks</div>
              </div>
              <div className="roi-metric">
                <div className="metric-number">$487K</div>
                <div className="metric-label">Annual Value</div>
                <div className="metric-calculation">3,250 hrs × $150/hr average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - COMMENTED OUT UNTIL WE HAVE REAL TESTIMONIALS */}
      {/* 
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            What B2B SaaS <span className="gradient-text">PS Teams Say</span>
          </h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "As someone who lived the Workday pain at LogicGate, I can't believe how much time 
                  this saves. No more jumping between calendar and email to remember what I did. 
                  My manager finally has real visibility into my workload instead of guessing."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">ER</div>
                <div className="author-info">
                  <div className="author-name">Ethan R.</div>
                  <div className="author-title">Senior Implementation Consultant</div>
                  <div className="author-company">B2B SaaS Company</div>
                </div>
              </div>
              <div className="testimonial-metrics">
                <div className="metric">
                  <span className="metric-value">2.5hrs</span>
                  <span className="metric-label">Saved Weekly</span>
                </div>
                <div className="metric">
                  <span className="metric-value">0</span>
                  <span className="metric-label">Late Submissions</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "The emergency staffing capability is game-changing. When clients have critical issues, 
                  I can instantly see who's available instead of interrupting everyone with Slack messages."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <div className="author-name">Jennifer S.</div>
                  <div className="author-title">VP of Professional Services</div>
                  <div className="author-company">Series C SaaS Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Founder Experience Section - REAL and AUTHENTIC */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Built by Someone Who <span className="gradient-text">Lived This Pain</span>
          </h2>
          
          <div className="founder-story">
            <div className="story-content">
              <blockquote>
                "After 5+ years as a Professional Services consultant at Series B, C, and D B2B SaaS companies, 
                I experienced firsthand the daily frustration of reconstructing my day for Workday submissions. 
                Jumping between calendar, email, and Slack to remember what I worked on was stealing 30 minutes 
                of my day, every day. I built Timebeacon to solve the exact problem I lived with for years."
              </blockquote>
              <div className="story-author">
                <div className="author-info">
                  <div className="author-name">Ethan Ratnowsky</div>
                  <div className="author-title">Founder & CEO</div>
                  <div className="author-experience">5+ Years B2B SaaS Professional Services</div>
                </div>
              </div>
            </div>
            
            <div className="pain-points-lived">
              <h3>The Pain I Lived Daily:</h3>
              <div className="lived-pain-grid">
                <div className="pain-item">
                  <div className="pain-bullet">•</div>
                  <div className="pain-text">30 minutes daily on timesheet reconstruction</div>
                </div>
                <div className="pain-item">
                  <div className="pain-bullet">•</div>
                  <div className="pain-text">Context switching between 4+ tools</div>
                </div>
                <div className="pain-item">
                  <div className="pain-bullet">•</div>
                  <div className="pain-text">Vague entries like "meeting" and "client work"</div>
                </div>
                <div className="pain-item">
                  <div className="pain-bullet">•</div>
                  <div className="pain-text">Manager follow-ups for late submissions</div>
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
            <h2>Ready to Eliminate Manual Time Tracking?</h2>
            <p>Join B2B SaaS Professional Services teams already saving 2.5 hours per person weekly with intelligent automation.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                See Workday Integration Demo
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • Workday integration included • Setup in under 15 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;