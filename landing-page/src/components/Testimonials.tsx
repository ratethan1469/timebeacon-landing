import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">
            Trusted by Leading Customer-Facing Teams
          </h2>
          <p className="section-subtitle">
            See how Professional Services, Customer Success, and Implementation teams are transforming their productivity with Timebeacon
          </p>
        </div>
        
        {/* COMMENTED OUT UNTIL WE HAVE REAL TESTIMONIALS
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">5.0 out of 5 stars</div>
              <blockquote>
                "Timebeacon transformed our professional services team. We went from 65% to 89% utilization 
                in just 3 months. The AI automation is incredible - it captures every billable minute without 
                any manual work from our consultants."
              </blockquote>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div className="author-info">
                <div className="author-name">Jennifer Smith</div>
                <div className="author-title">VP of Professional Services</div>
                <div className="author-company">TechFlow Solutions</div>
              </div>
            </div>
            <div className="testimonial-metrics">
              <div className="metric">
                <span className="metric-value">24%</span>
                <span className="metric-label">Utilization Increase</span>
              </div>
              <div className="metric">
                <span className="metric-value">$2.3M</span>
                <span className="metric-label">Additional Revenue</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">5.0 out of 5 stars</div>
              <blockquote>
                "Finally, a time tracking solution that doesn't feel like a burden. Our Customer Success team 
                loves how it automatically categorizes client interactions and provides actionable insights 
                for account management."
              </blockquote>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">MJ</div>
              <div className="author-info">
                <div className="author-name">Michael Johnson</div>
                <div className="author-title">Director of Customer Success</div>
                <div className="author-company">GrowthTech</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">5.0 out of 5 stars</div>
              <blockquote>
                "The implementation insights alone have saved us hundreds of hours. We can now predict 
                project risks early and allocate resources more effectively. Our client satisfaction 
                scores have never been higher."
              </blockquote>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">SL</div>
              <div className="author-info">
                <div className="author-name">Sarah Lee</div>
                <div className="author-title">Implementation Manager</div>
                <div className="author-company">CloudScale</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
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
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">5.0 out of 5 stars</div>
              <blockquote>
                "The ROI was immediate. Within the first month, we recovered the cost of Timebeacon 
                just from the additional billable hours we captured. The team adoption was seamless 
                because it requires zero manual input."
              </blockquote>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">AL</div>
              <div className="author-info">
                <div className="author-name">Amanda Liu</div>
                <div className="author-title">Chief Revenue Officer</div>
                <div className="author-company">Innovate Partners</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">5.0 out of 5 stars</div>
              <blockquote>
                "Security was our biggest concern, but Timebeacon exceeded all our enterprise requirements. 
                SOC 2 compliance, SSO integration, and granular permissions gave us complete peace of mind 
                while delivering incredible value."
              </blockquote>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">DK</div>
              <div className="author-info">
                <div className="author-name">David Kim</div>
                <div className="author-title">CISO</div>
                <div className="author-company">SecureConsult</div>
              </div>
            </div>
          </div>
        </div>
        */}
        
        {/* COMMENTED OUT UNTIL WE HAVE REAL STATS
        <div className="testimonials-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">35%</div>
              <div className="stat-label">Avg. Utilization Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6 months</div>
              <div className="stat-label">Avg. Payback Period</div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Testimonials;