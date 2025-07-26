import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Get in Touch</span>
          </div>
          
          <h1 className="hero-title">
            Let's Talk About Eliminating
            <span className="gradient-text"> Manual Time Tracking</span>
          </h1>
          
          <p className="hero-subtitle">
            Ready to save 10+ hours per week and eliminate late timesheet submissions? 
            Founded by someone who lived through 5+ years of B2B SaaS timesheet pain, 
            we're here to help you get started with Timebeacon. No more chasing submissions, 
            no more lost billable hours.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">&lt;2min</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Setup Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="container">
          <div className="contact-grid">
            {/* Schedule Demo */}
            <div className="contact-card featured">
              <div className="contact-icon">📅</div>
              <h3>Schedule a Live Demo</h3>
              <p>
                See Timebeacon in action with a personalized demo. We'll show you exactly 
                how to eliminate timesheet submission delays for your team.
              </p>
              <div className="contact-benefits">
                <span className="benefit-tag">Custom ROI Analysis</span>
                <span className="benefit-tag">Integration Planning</span>
                <span className="benefit-tag">Q&A Session</span>
              </div>
              <button className="contact-cta btn-primary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                Book Your Demo
              </button>
              <p className="contact-note">30-minute session • No commitment required</p>
            </div>

            {/* Sales Inquiry */}
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>Talk to Sales</h3>
              <p>
                Ready to implement Timebeacon for your team? Our sales team will help you 
                choose the right plan and ensure smooth onboarding.
              </p>
              <div className="contact-benefits">
                <span className="benefit-tag">Custom Pricing</span>
                <span className="benefit-tag">Implementation Support</span>
                <span className="benefit-tag">Training Included</span>
              </div>
              <button className="contact-cta btn-secondary-large" onClick={() => window.open('mailto:sales@timebeacon.io', '_blank')}>
                Contact Sales
              </button>
              <p className="contact-note">Enterprise solutions available</p>
            </div>

            {/* Support */}
            <div className="contact-card">
              <div className="contact-icon">🛠️</div>
              <h3>Get Support</h3>
              <p>
                Need help with your existing Timebeacon account? Our support team is 
                here to help you maximize your time tracking automation.
              </p>
              <div className="contact-benefits">
                <span className="benefit-tag">24/7 Available</span>
                <span className="benefit-tag">Live Chat</span>
                <span className="benefit-tag">Knowledge Base</span>
              </div>
              <button className="contact-cta btn-secondary-large" onClick={() => window.open('mailto:support@timebeacon.io', '_blank')}>
                Get Help
              </button>
              <p className="contact-note">Average response time: 2 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-header">
              <h2 className="section-title">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p>
                Have a specific question about Timebeacon? Want to discuss a custom integration? 
                Drop us a line and we'll get back to you within 2 hours.
              </p>
            </div>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="teamSize">Team Size</label>
                <select id="teamSize" name="teamSize" required>
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="201-500">201-500 people</option>
                  <option value="500+">500+ people</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">What can we help you with?</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a topic</option>
                  <option value="demo">Schedule a Demo</option>
                  <option value="pricing">Pricing & Plans</option>
                  <option value="integrations">Custom Integrations</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about your time tracking challenges and how we can help eliminate manual submissions..."></textarea>
              </div>
              
              <div className="form-group checkbox-group">
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">
                  Send me updates about new features and time tracking best practices
                </label>
              </div>
              
              <button type="submit" className="form-submit btn-primary-large">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="office-info">
        <div className="container">
          <div className="office-grid">
            <div className="office-card">
              <h3>San Francisco HQ</h3>
              <div className="office-details">
                <p>📍 123 Market Street, Suite 500<br />San Francisco, CA 94105</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ hello@timebeacon.io</p>
              </div>
            </div>
            
            <div className="office-card">
              <h3>New York Office</h3>
              <div className="office-details">
                <p>📍 456 Broadway, Floor 15<br />New York, NY 10013</p>
                <p>📞 +1 (555) 234-5678</p>
                <p>✉️ east@timebeacon.io</p>
              </div>
            </div>
            
            <div className="office-card">
              <h3>Remote-First Culture</h3>
              <div className="office-details">
                <p>🌍 Team members across 15+ countries</p>
                <p>⏰ 24/7 support coverage</p>
                <p>🤝 Virtual-first meetings and collaboration</p>
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
            <p>Join 1,000+ teams who never worry about late timesheet submissions again.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                Book a Demo
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

export default Contact;