import React from 'react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>About Timebeacon</span>
          </div>
          
          <h1 className="hero-title">
            Hey, I'm <span className="gradient-text">Ethan!</span>
          </h1>
          
          <p className="hero-subtitle">
            I've spent the last 5+ years in the B2B SaaS world, working as an Implementation Manager and Professional Services Consultant.
            <br /><br />
            I've been deep in the trenches with customer-facing teams. I've seen the pain. I know the pain. Time tracking is manual. It's gruesome. It's inefficient. And honestly? It's way too easy to forget.
            <br /><br />
            That's why I started Timebeacon — a lightweight tool that automatically tracks time across tools like Zoom, Gong, Slack, and Google Calendar. No timers, no spreadsheets. Just clarity on where your time is going so you can focus on the work that actually matters.
            <br /><br />
            I'm based in NYC. I like language learning, making dinner from scratch, and building things that solve real problems.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">Teams Using Timebeacon</div>
            </div>
            <div className="stat">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Hours Saved Weekly</div>
            </div>
            <div className="stat">
              <div className="stat-number">$12M+</div>
              <div className="stat-label">Revenue Recovered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Mission</span>
          </h2>
          
          <div className="mission-content">
            <div className="mission-text">
              <h3>Born from Real B2B SaaS Pain</h3>
              <p>
                After 5+ years in the B2B SaaS world at Series B, C, and D companies, our founder Ethan 
                experienced the daily frustration of manual time tracking firsthand. Late submissions, 
                manager follow-ups, and lost billable hours were constants across every company.
              </p>
              
              <p>
                Timebeacon was built to solve this universal problem. We automatically capture every minute 
                of work, categorize activities with AI precision, and eliminate timesheet submission delays 
                forever. Our vision is a world where time tracking is completely invisible - where managers 
                never chase submissions and teams focus on delivering value, not filling out forms.
              </p>
              
              <div className="mission-values">
                <div className="value-item">
                  <div className="pain-icon-clean">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h4>Accuracy First</h4>
                    <p>99.9% accurate time categorization through advanced AI</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="pain-icon-clean">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h4>Zero Friction</h4>
                    <p>Complete automation means zero manual time entry</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="pain-icon-clean">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h4>Privacy Protected</h4>
                    <p>Enterprise-grade security with SOC 2 compliance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mission-visual">
              <div className="impact-stats">
                <div className="impact-header">Real Impact on Teams</div>
                <div className="impact-metrics">
                  <div className="impact-metric">
                    <div className="metric-number">95%</div>
                    <div className="metric-desc">Reduction in timesheet submission delays</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-number">35%</div>
                    <div className="metric-desc">Increase in billable hour capture</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-number">10hrs</div>
                    <div className="metric-desc">Saved per team member weekly</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-number">Zero</div>
                    <div className="metric-desc">Manager time spent chasing submissions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">ER</div>
              <div className="member-info">
                <h3>Ethan Ratnowsky</h3>
                <p className="member-title">Founder & CEO</p>
                <p className="member-bio">
                  With 5+ years at Series B, C, and D B2B SaaS companies, Ethan experienced firsthand the 
                  frustration of manual time tracking and late timesheet submissions. Passionate about 
                  using AI to eliminate this universal pain point.
                </p>
                <p className="member-fun-fact">
                  Once spent 3 hours on a Sunday manually categorizing time entries instead of watching football
                </p>
                <div className="member-background">
                  <span>B2B SaaS Veteran</span>
                  <span>5+ Years Experience</span>
                  <span>Series B-D</span>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-photo">KN</div>
              <div className="member-info">
                <h3>Kenji Nakamura</h3>
                <p className="member-title">Co-Founder & CTO</p>
                <p className="member-bio">
                  Previously led AI engineering at a Series C SaaS company. Expert in machine learning 
                  and integration architecture. Believes AI should eliminate busy work, not create more of it.
                </p>
                <p className="member-fun-fact">
                  Fun fact: Tests new AI models while speedrunning classic Nintendo games for "focus"
                </p>
                <div className="member-background">
                  <span>ML Engineering</span>
                  <span>Tokyo Tech</span>
                  <span>10+ Years B2B</span>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-photo">HS</div>
              <div className="member-info">
                <h3>Hiroshi Sato</h3>
                <p className="member-title">VP of Product</p>
                <p className="member-bio">
                  Former product manager at enterprise software companies. Obsessed with building 
                  tools that Professional Services teams actually want to use every day.
                </p>
                <p className="member-fun-fact">
                  Fun fact: Reads user feedback emails during his morning coffee - considers it better than the news
                </p>
                <div className="member-background">
                  <span>Enterprise SaaS</span>
                  <span>8+ Years Product</span>
                  <span>Customer-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Values</span>
          </h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="pain-icon-clean">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0L12 19l2.5 2.5c1.5 1.5 3.5 1.5 5 0s1.5-3.5 0-5L17 14l2.5-2.5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0L12 9 9.5 6.5c-1.5-1.5-3.5-1.5-5 0s-1.5 3.5 0 5L7 14l-2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Customer Obsession</h3>
              <p>
                Every feature we build starts with a real customer problem. We measure success 
                by how much time we save our users, not by vanity metrics.
              </p>
            </div>
            
            <div className="value-card">
              <div className="pain-icon-clean">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Innovative Automation</h3>
              <p>
                We believe AI should handle repetitive tasks so humans can focus on creative, 
                strategic work. We're constantly pushing the boundaries of what's possible.
              </p>
            </div>
            
            <div className="value-card">
              <div className="pain-icon-clean">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Trust & Security</h3>
              <p>
                We handle sensitive time and productivity data. Security and privacy aren't 
                afterthoughts - they're built into everything we do from day one.
              </p>
            </div>
            
            <div className="value-card">
              <div className="pain-icon-clean">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Transparent Impact</h3>
              <p>
                We provide clear metrics on time saved, revenue recovered, and productivity gained. 
                Our ROI is measurable and our customers love sharing their success stories.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Mission?</h2>
            <p>Help us eliminate manual time tracking forever. See why 1,000+ teams trust Timebeacon.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                Book a Demo
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • No credit card required • Join the automation revolution
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;