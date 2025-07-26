import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Simple, Transparent Pricing</span>
          </div>
          
          <h1 className="hero-title">
            Choose the Right Plan for
            <span className="gradient-text"> Your Team</span>
          </h1>
          
          <p className="hero-subtitle">
            No hidden fees. No setup costs. No long-term contracts. Start with our 14-day free trial 
            and see why 1,000+ teams trust Timebeacon to automate their time tracking. Cancel anytime.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">14 Days</div>
              <div className="stat-label">Free Trial</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Setup Fees</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="container">
          <div className="billing-toggle">
            <span className={`toggle-option ${!isAnnual ? 'active' : ''}`}>Monthly</span>
            <div className="toggle-switch" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`toggle-slider ${isAnnual ? 'annual' : 'monthly'}`}></div>
            </div>
            <span className={`toggle-option ${isAnnual ? 'active' : ''}`}>
              Annual
              <span className="discount-badge">Save 20%</span>
            </span>
          </div>

          <div className="plans-grid">
            {/* Starter Plan */}
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">Starter</h3>
                <p className="plan-description">Perfect for small teams getting started</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '10' : '12'}</span>
                  <span className="period">per user/month</span>
                </div>
                {isAnnual && <div className="savings">Save $24 per user annually</div>}
              </div>
              
              <div className="plan-features">
                <h4>Everything you need to start:</h4>
                <ul>
                  <li>✓ Automatic time tracking</li>
                  <li>✓ Calendar & email integration</li>
                  <li>✓ Basic reporting</li>
                  <li>✓ Up to 5 integrations</li>
                  <li>✓ Mobile app</li>
                  <li>✓ Email support</li>
                  <li>✓ 14-day free trial</li>
                </ul>
              </div>
              
              <button className="plan-cta btn-secondary-large">Start Free Trial</button>
            </div>

            {/* Professional Plan - Most Popular */}
            <div className="plan-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Professional</h3>
                <p className="plan-description">For growing teams who need advanced features</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '20' : '25'}</span>
                  <span className="period">per user/month</span>
                </div>
                {isAnnual && <div className="savings">Save $60 per user annually</div>}
              </div>
              
              <div className="plan-features">
                <h4>Everything in Starter, plus:</h4>
                <ul>
                  <li>✓ AI-powered activity categorization</li>
                  <li>✓ Advanced reporting & analytics</li>
                  <li>✓ Project & client tracking</li>
                  <li>✓ Unlimited integrations</li>
                  <li>✓ Team management tools</li>
                  <li>✓ Custom fields & tags</li>
                  <li>✓ Priority support</li>
                  <li>✓ SSO integration</li>
                </ul>
              </div>
              
              <button className="plan-cta btn-primary-large">Start Free Trial</button>
            </div>

            {/* Enterprise Plan */}
            <div className="plan-card">
              <div className="plan-header">
                <h3 className="plan-name">Enterprise</h3>
                <p className="plan-description">For large organizations with complex needs</p>
                <div className="plan-price">
                  <span className="amount">Custom</span>
                  <span className="period">pricing</span>
                </div>
                <div className="contact-note">Contact us for a tailored quote</div>
              </div>
              
              <div className="plan-features">
                <h4>Everything in Professional, plus:</h4>
                <ul>
                  <li>✓ Advanced security & compliance</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Dedicated customer success</li>
                  <li>✓ Advanced user permissions</li>
                  <li>✓ Custom reporting</li>
                  <li>✓ API access</li>
                  <li>✓ 99.9% SLA guarantee</li>
                  <li>✓ On-premise deployment option</li>
                </ul>
              </div>
              
              <button className="plan-cta btn-secondary-large">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="container">
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the free trial work?</h3>
              <p>Start with a 14-day free trial of our Professional plan. No credit card required. All features included. Cancel anytime during the trial period.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I change plans anytime?</h3>
              <p>Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.</p>
            </div>
            
            <div className="faq-item">
              <h3>What integrations are included?</h3>
              <p>We support 50+ integrations including Google Calendar, Slack, Zoom, Salesforce, Asana, and more. Starter plan includes 5 integrations, Professional includes unlimited.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is there a setup fee?</h3>
              <p>No setup fees, ever. We include onboarding support for all plans and dedicated implementation for Enterprise customers.</p>
            </div>
            
            <div className="faq-item">
              <h3>How secure is my data?</h3>
              <p>We're SOC 2 Type II certified with enterprise-grade security. Your data is encrypted in transit and at rest, with regular security audits.</p>
            </div>
            
            <div className="faq-item">
              <h3>What if I need more than 50 integrations?</h3>
              <p>Our Enterprise plan includes custom integrations built specifically for your tech stack. Contact our sales team to discuss your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Save 10+ Hours Per Week?</h2>
            <p>Join 1,000+ teams already automating their time tracking with Timebeacon. Start your free trial today.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://calendly.com/timebeacon-demo', '_blank')}>
                Book a Demo
              </button>
            </div>
            
            <p className="cta-note">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;