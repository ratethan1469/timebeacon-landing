import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-section brand">
              <div className="footer-logo">
                <span className="logo-text">TimeBeacon</span>
              </div>
              <p className="footer-description">
                The AI-powered time tracking platform trusted by 500+ professional services teams 
                to maximize billable hours and optimize team utilization.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/company/timebeacon" className="social-link">
                  <span className="social-icon">LinkedIn</span>
                </a>
                <a href="https://twitter.com/timebeacon" className="social-link">
                  <span className="social-icon">Twitter</span>
                </a>
                <a href="https://github.com/timebeacon" className="social-link">
                  <span className="social-icon">GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><a href="/features">Features</a></li>
                <li><a href="/integrations">Integrations</a></li>
                <li><a href="/security">Security</a></li>
                <li><a href="/mobile">Mobile Apps</a></li>
                <li><a href="/api">API Docs</a></li>
                <li><a href="/changelog">Changelog</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Solutions</h4>
              <ul className="footer-links">
                <li><a href="/solutions/professional-services">Professional Services</a></li>
                <li><a href="/solutions/customer-success">Customer Success</a></li>
                <li><a href="/solutions/implementations">Implementation Teams</a></li>
                <li><a href="/solutions/consulting">Consulting</a></li>
                <li><a href="/solutions/agencies">Agencies</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                <li><a href="/resources/blog">Blog</a></li>
                <li><a href="/resources/guides">Implementation Guides</a></li>
                <li><a href="/resources/case-studies">Case Studies</a></li>
                <li><a href="/resources/webinars">Webinars</a></li>
                <li><a href="/resources/templates">Templates</a></li>
                <li><a href="/resources/roi-calculator">ROI Calculator</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/press">Press</a></li>
                <li><a href="/partners">Partners</a></li>
                <li><a href="/investors">Investors</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li><a href="/help">Help Center</a></li>
                <li><a href="/contact-support">Contact Support</a></li>
                <li><a href="/status">System Status</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/training">Training</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h4>Stay Updated</h4>
              <p>Get the latest product updates, industry insights, and best practices delivered to your inbox.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/security">Security</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/gdpr">GDPR</a>
            </div>
            <div className="copyright">
              © 2024 TimeBeacon. All rights reserved.
            </div>
          </div>
          
          <div className="footer-certifications">
            <div className="cert-badge">
              <span className="cert-text">SOC 2 Type II</span>
            </div>
            <div className="cert-badge">
              <span className="cert-text">GDPR Compliant</span>
            </div>
            <div className="cert-badge">
              <span className="cert-text">99.8% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;