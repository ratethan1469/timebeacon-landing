import React from 'react';

const Customers: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Customer Stories</span>
          </div>
          
          <h1 className="hero-title">
            Teams Eliminating Manual Work with
            <span className="gradient-text"> AI Automation</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover how teams across industries are eliminating manual time tracking 
            through AI-powered automation. From small startups to large enterprises, 
            see the results achieved by integrating every tool in their tech stack.
          </p>
          
          {/* COMMENTED OUT UNTIL WE HAVE REAL CUSTOMER DATA
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">Teams Using AI Automation</div>
            </div>
            <div className="stat">
              <div className="stat-number">47hrs</div>
              <div className="stat-label">Average Weekly Time Saved</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Accuracy Improvement</div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* COMMENTED OUT UNTIL WE HAVE REAL CUSTOMER LOGOS
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Trusted by Leading <span className="gradient-text">Organizations</span>
          </h2>
          
          <div className="customer-logos">
            <div className="logo-row">
              <div className="customer-logo">TechFlow Solutions</div>
              <div className="customer-logo">GrowthTech Marketing</div>
              <div className="customer-logo">DataSync Solutions</div>
              <div className="customer-logo">ConsultAdvise Partners</div>
            </div>
            <div className="logo-row">
              <div className="customer-logo">SalesPlus Corp</div>
              <div className="customer-logo">InnovateDev Studios</div>
              <div className="customer-logo">RetailStrategy Group</div>
              <div className="customer-logo">CloudFirst Technologies</div>
            </div>
            <div className="logo-row">
              <div className="customer-logo">FinanceForward LLC</div>
              <div className="customer-logo">MediaMotion Agency</div>
              <div className="customer-logo">BuildTech Construction</div>
              <div className="customer-logo">HealthSync Partners</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* COMMENTED OUT UNTIL WE HAVE REAL TESTIMONIALS
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="gradient-text">Success Stories</span>
          </h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "We eliminated 47 hours of weekly timesheet management by integrating Google Calendar, 
                  Slack, Salesforce, and email with AI automation. Our team now captures 100% of billable 
                  time automatically. The AI even categorizes which client and project each activity relates to."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <div className="author-name">Jennifer Smith</div>
                  <div className="author-title">Director of Operations</div>
                  <div className="author-company">TechFlow Solutions</div>
                </div>
              </div>
              <div className="testimonial-metrics">
                <div className="metric">
                  <span className="metric-value">47hrs</span>
                  <span className="metric-label">Weekly Time Saved</span>
                </div>
                <div className="metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Accuracy Achieved</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "The AI integration across our development tools is incredible. GitHub commits, Jira 
                  tickets, Slack discussions - everything gets categorized automatically by project and 
                  client. We've never had such accurate project time tracking."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <div className="author-name">Mike Rodriguez</div>
                  <div className="author-title">Engineering Manager</div>
                  <div className="author-company">DataSync Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "Our marketing team was spending 3+ hours weekly on timesheets. Now AI automatically 
                  captures time from Asana tasks, client calls, and campaign work. We've recovered 
                  thousands of previously unbilled hours."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SC</div>
                <div className="author-info">
                  <div className="author-name">Sarah Chen</div>
                  <div className="author-title">Marketing Director</div>
                  <div className="author-company">GrowthTech Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* COMMENTED OUT UNTIL WE HAVE REAL CUSTOMER CASE STUDIES
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Success Stories by <span className="gradient-text">Industry</span>
          </h2>
          
          <div className="industry-testimonials">
            <div className="industry-section">
              <h3>Professional Services & Consulting</h3>
              <div className="industry-stories">
                <div className="story-card">
                  <div className="story-content">
                    <h4>ConsultAdvise Partners</h4>
                    <p>
                      "120-person consulting firm eliminated 240 hours of weekly timesheet work through 
                      calendar, email, and CRM automation. AI categorizes every client interaction automatically."
                    </p>
                    <div className="story-results">
                      <span>240hrs saved weekly</span>
                      <span>99.8% accuracy</span>
                      <span>15 platforms integrated</span>
                    </div>
                  </div>
                  <div className="story-author">
                    <span className="author-name">Robert Wilson</span>
                    <span className="author-title">VP of Operations</span>
                  </div>
                </div>
                
                <div className="story-card">
                  <div className="story-content">
                    <h4>RetailStrategy Group</h4>
                    <p>
                      "Our retail consultants travel constantly. AI automation tracks client site visits, 
                      travel time, and analysis work automatically across multiple time zones and locations."
                    </p>
                    <div className="story-results">
                      <span>90hrs monthly savings</span>
                      <span>Zero manual entries</span>
                      <span>Multi-location tracking</span>
                    </div>
                  </div>
                  <div className="story-author">
                    <span className="author-name">Lisa Thompson</span>
                    <span className="author-title">Managing Partner</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="industry-section">
              <h3>Software Development & Technology</h3>
              <div className="industry-stories">
                <div className="story-card">
                  <div className="story-content">
                    <h4>InnovateDev Studios</h4>
                    <p>
                      "AI integration with GitHub, Figma, and client communication tools automatically 
                      categorizes all development and design work by client project. Perfect billing accuracy."
                    </p>
                    <div className="story-results">
                      <span>67hrs weekly savings</span>
                      <span>99.5% accuracy</span>
                      <span>Client billing automation</span>
                    </div>
                  </div>
                  <div className="story-author">
                    <span className="author-name">Alex Kumar</span>
                    <span className="author-title">Technical Director</span>
                  </div>
                </div>
                
                <div className="story-card">
                  <div className="story-content">
                    <h4>CloudFirst Technologies</h4>
                    <p>
                      "Development team integrations across Jira, GitHub, Slack, and client tools provide 
                      unprecedented visibility into project progress and developer productivity."
                    </p>
                    <div className="story-results">
                      <span>85hrs monthly savings</span>
                      <span>100% project visibility</span>
                      <span>Developer insights</span>
                    </div>
                  </div>
                  <div className="story-author">
                    <span className="author-name">David Park</span>
                    <span className="author-title">Engineering Lead</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="industry-section">
              <h3>Sales & Marketing</h3>
              <div className="industry-stories">
                <div className="story-card">
                  <div className="story-content">
                    <h4>SalesPlus Corp</h4>
                    <p>
                      "Salesforce and HubSpot integrations with AI provide complete visibility into rep 
                      activities, call quality, and deal progression. No more manual activity logging."
                    </p>
                    <div className="story-results">
                      <span>320hrs monthly savings</span>
                      <span>300% better reporting</span>
                      <span>Automated CRM sync</span>
                    </div>
                  </div>
                  <div className="story-author">
                    <span className="author-name">Maria Garcia</span>
                    <span className="author-title">VP of Sales</span>
                  </div>
                </div>
                
                <div className="story-card">
                  <div className="story-content">
                    <h4>MediaMotion Agency</h4>
                    <p>
                      "Creative agency workflow automation across design tools, client communication, and 
                      project management provides accurate billing for all creative and strategy work."
                    </p>
                    <div className="story-results">
                      <span>156hrs monthly savings</span>
                      <span>Creative work tracking</span>
                      <span>Multi-client automation</span>
                    </div>
                  </div>
                  <div className="story-author">
                    <span className="author-name">James Foster</span>
                    <span className="author-title">Creative Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* COMMENTED OUT UNTIL WE HAVE REAL ROI DATA
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            Measurable <span className="gradient-text">ROI Impact</span>
          </h2>
          
          <div className="roi-testimonials">
            <div className="roi-testimonial">
              <div className="roi-quote">
                <blockquote>
                  "The ROI is incredible. We save $78K annually just in eliminated timesheet management, 
                  plus we've recovered $200K+ in previously unbilled hours through accurate automatic capture."
                </blockquote>
                <cite>Jennifer Smith, TechFlow Solutions</cite>
              </div>
              <div className="roi-metrics">
                <div className="roi-metric">
                  <div className="metric-number">$278K</div>
                  <div className="metric-label">Annual Value</div>
                </div>
                <div className="roi-metric">
                  <div className="metric-number">1,950%</div>
                  <div className="metric-label">ROI</div>
                </div>
              </div>
            </div>
            
            <div className="roi-testimonial">
              <div className="roi-quote">
                <blockquote>
                  "We recovered 23% more billable hours through AI automation. The accuracy and automatic 
                  categorization means we're billing for work we used to miss completely."
                </blockquote>
                <cite>Sarah Chen, GrowthTech Marketing</cite>
              </div>
              <div className="roi-metrics">
                <div className="roi-metric">
                  <div className="metric-number">23%</div>
                  <div className="metric-label">Revenue Increase</div>
                </div>
                <div className="roi-metric">
                  <div className="metric-number">$850K</div>
                  <div className="metric-label">Recovered Revenue</div>
                </div>
              </div>
            </div>
            
            <div className="roi-testimonial">
              <div className="roi-quote">
                <blockquote>
                  "Our team productivity increased 35% because they're focused on client work instead of 
                  administrative tasks. AI handles all the tracking automatically."
                </blockquote>
                <cite>Robert Wilson, ConsultAdvise Partners</cite>
              </div>
              <div className="roi-metrics">
                <div className="roi-metric">
                  <div className="metric-number">35%</div>
                  <div className="metric-label">Productivity Gain</div>
                </div>
                <div className="roi-metric">
                  <div className="metric-number">240hrs</div>
                  <div className="metric-label">Weekly Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* COMMENTED OUT UNTIL WE HAVE REAL CUSTOMER REVIEWS
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            What Customers <span className="gradient-text">Are Saying</span>
          </h2>
          
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="review-source">G2 Reviews</div>
              </div>
              <p>
                "Game-changing automation. The AI understands context better than we do sometimes. It knows 
                when I'm in a strategy session vs. an internal meeting and categorizes everything perfectly."
              </p>
              <div className="reviewer">
                <strong>Director of Operations</strong> • Professional Services
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="review-source">Capterra</div>
              </div>
              <p>
                "We integrated 12 different platforms and the AI manages it all seamlessly. Calendar, Slack, 
                GitHub, Salesforce - everything feeds into perfect time tracking automatically."
              </p>
              <div className="reviewer">
                <strong>Engineering Manager</strong> • Software Development
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="review-source">TrustPilot</div>
              </div>
              <p>
                "Implementation was incredibly smooth. Their team helped us integrate with our existing 
                workflow and the AI started providing accurate results within days."
              </p>
              <div className="reviewer">
                <strong>VP of Sales</strong> • B2B SaaS
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="review-source">Software Advice</div>
              </div>
              <p>
                "The automatic client categorization is phenomenal. AI recognizes clients from email 
                addresses, meeting attendees, and project mentions across all our tools."
              </p>
              <div className="reviewer">
                <strong>Creative Director</strong> • Marketing Agency
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="review-source">GetApp</div>
              </div>
              <p>
                "ROI was immediate. We stopped spending hours on timesheet admin and started capturing 
                time we didn't even realize we were missing."
              </p>
              <div className="reviewer">
                <strong>Managing Partner</strong> • Consulting Firm
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-header">
                <div className="stars">★★★★★</div>
                <div className="review-source">G2 Reviews</div>
              </div>
              <p>
                "Support team is incredible. They helped us set up custom integrations for our internal 
                tools and the automation works flawlessly."
              </p>
              <div className="reviewer">
                <strong>IT Director</strong> • Enterprise Services
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
            <h2>Transform Your Time Tracking with AI Automation</h2>
            <p>See how AI automation can eliminate manual time tracking and improve team productivity.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                See Customer Demo
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

export default Customers;