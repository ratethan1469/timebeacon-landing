import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            Simple, Transparent Pricing
            <span className="gradient-text"> That Scales With You</span>
          </h2>
          <p className="section-subtitle">
            Start free, scale as you grow. No hidden fees, no complex contracts.
          </p>
          
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
        </div>
        
        <div className="pricing-grid">
          <div className="pricing-card starter">
            <div className="card-header">
              <h3 className="plan-name">Starter</h3>
              <p className="plan-description">Perfect for small teams getting started</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '19' : '24'}</span>
                <span className="period">per user/month</span>
              </div>
              {isAnnual && <div className="savings">Save $60 per user annually</div>}
            </div>
            
            <div className="card-content">
              <ul className="features-list">
                <li><span className="check">✓</span> Up to 10 team members</li>
                <li><span className="check">✓</span> Basic time tracking</li>
                <li><span className="check">✓</span> Calendar integration</li>
                <li><span className="check">✓</span> Mobile apps</li>
                <li><span className="check">✓</span> Basic reporting</li>
                <li><span className="check">✓</span> Email support</li>
                <li><span className="check">✓</span> 14-day free trial</li>
              </ul>
              
              <a href="https://app.timebeacon.io/signup?plan=starter" className="btn-secondary-full">
                Start Free Trial
              </a>
            </div>
          </div>
          
          <div className="pricing-card professional popular">
            <div className="popular-badge">Most Popular</div>
            <div className="card-header">
              <h3 className="plan-name">Professional</h3>
              <p className="plan-description">For growing professional services teams</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '39' : '49'}</span>
                <span className="period">per user/month</span>
              </div>
              {isAnnual && <div className="savings">Save $120 per user annually</div>}
            </div>
            
            <div className="card-content">
              <ul className="features-list">
                <li><span className="check">✓</span> Up to 100 team members</li>
                <li><span className="check">✓</span> AI-powered automation</li>
                <li><span className="check">✓</span> Advanced analytics</li>
                <li><span className="check">✓</span> Client billing integration</li>
                <li><span className="check">✓</span> Custom reporting</li>
                <li><span className="check">✓</span> SSO integration</li>
                <li><span className="check">✓</span> Priority support</li>
                <li><span className="check">✓</span> API access</li>
              </ul>
              
              <a href="https://app.timebeacon.io/signup?plan=professional" className="btn-primary-full">
                Start Free Trial
              </a>
            </div>
          </div>
          
          <div className="pricing-card enterprise">
            <div className="card-header">
              <h3 className="plan-name">Enterprise</h3>
              <p className="plan-description">For large organizations with advanced needs</p>
              <div className="plan-price">
                <span className="amount">Custom</span>
                <span className="period">pricing</span>
              </div>
              <div className="contact-note">Contact us for a tailored quote</div>
            </div>
            
            <div className="card-content">
              <ul className="features-list">
                <li><span className="check">✓</span> Unlimited team members</li>
                <li><span className="check">✓</span> Advanced AI & automation</li>
                <li><span className="check">✓</span> White-label options</li>
                <li><span className="check">✓</span> Custom integrations</li>
                <li><span className="check">✓</span> Dedicated success manager</li>
                <li><span className="check">✓</span> SLA guarantees</li>
                <li><span className="check">✓</span> 24/7 premium support</li>
                <li><span className="check">✓</span> On-premise deployment</li>
              </ul>
              
              <a href="/contact-sales" className="btn-secondary-full">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
        
        <div className="pricing-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>Yes! We offer a 14-day free trial with full access to all features. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h4>Can I change plans anytime?</h4>
              <p>Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, ACH transfers, and can accommodate purchase orders for Enterprise customers.</p>
            </div>
            <div className="faq-item">
              <h4>Is my data secure?</h4>
              <p>Yes. We're SOC 2 Type II certified with enterprise-grade security, encryption, and compliance standards.</p>
            </div>
          </div>
        </div>
        
        <div className="pricing-guarantee">
          <div className="guarantee-content">
            <div className="guarantee-badge">
              <span className="badge-icon">🛡️</span>
            </div>
            <div className="guarantee-text">
              <h4>30-Day Money-Back Guarantee</h4>
              <p>Not satisfied? Get a full refund within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;