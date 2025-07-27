import React from 'react';

const ProfessionalServices: React.FC = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="solution-hero-content">
            <div className="hero-badge">
              <span>For Professional Services Teams</span>
            </div>
            
            <h1 className="hero-title">
              Maximize Billable Hours for 
              <span className="gradient-text"> Professional Services</span>
            </h1>
            
            <p className="hero-subtitle">
              Stop losing revenue to manual timesheet chaos. Timebeacon automatically captures every 
              billable minute from client meetings, project work, and consulting activities, giving 
              your team 10+ hours back per week to focus on high-value client delivery.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">40%</div>
                <div className="stat-label">Increase in Billable Hours</div>
              </div>
              <div className="stat">
                <div className="stat-number">$2.3M</div>
                <div className="stat-label">Additional Revenue</div>
              </div>
              <div className="stat">
                <div className="stat-number">95%</div>
                <div className="stat-label">Reduction in Admin Time</div>
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
          
          <div className="solution-visual">
            <div className="ps-dashboard">
              <div className="dashboard-header">
                <h3>Professional Services Dashboard</h3>
              </div>
              <div className="dashboard-metrics">
                <div className="metric-card primary">
                  <div className="metric-value">127.5h</div>
                  <div className="metric-label">Billable This Month</div>
                  <div className="metric-trend">+12% vs last month</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">$38,250</div>
                  <div className="metric-label">Revenue Generated</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">89%</div>
                  <div className="metric-label">Team Utilization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            The Professional Services <span className="gradient-text">Time Tracking Problem</span>
          </h2>
          
          <div className="pain-points-grid">
            <div className="pain-point-card">
              <div className="pain-icon">⏰</div>
              <h3>Revenue Leakage</h3>
              <p>Consultants forget to log 15-20% of billable hours, leading to thousands in lost revenue per project.</p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon">📊</div>
              <h3>Inaccurate Project Costing</h3>
              <p>Without real-time data, you can't accurately price future projects or identify profitable work streams.</p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon">😤</div>
              <h3>Administrative Burden</h3>
              <p>Senior consultants waste 2-3 hours weekly on timesheet admin instead of high-value client work.</p>
            </div>
            
            <div className="pain-point-card">
              <div className="pain-icon">❓</div>
              <h3>No Visibility</h3>
              <p>Partners have no real-time insight into team utilization, project progress, or resource allocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Built Specifically for <span className="gradient-text">Professional Services</span>
          </h2>
          
          <div className="features-showcase">
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Automatic Client Meeting Detection</h3>
                <p>
                  AI instantly recognizes client meetings from calendar invites, email threads, and 
                  video calls. Automatically categorizes by client, project, and billing code with 
                  99.2% accuracy.
                </p>
                <ul className="feature-benefits">
                  <li>Calendar integration with all major platforms</li>
                  <li>Smart client/project mapping</li>
                  <li>Automatic billable hour detection</li>
                  <li>Meeting summary generation</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="meeting-detection-demo">
                  <div className="meeting-card">
                    <div className="meeting-header">
                      <span className="meeting-title">Strategy Session - TechFlow</span>
                      <span className="meeting-status">Auto-Detected</span>
                    </div>
                    <div className="meeting-details">
                      <div className="detail">Client: TechFlow Solutions</div>
                      <div className="detail">Project: Digital Transformation</div>
                      <div className="detail">Duration: 2.5 hours</div>
                      <div className="detail">Billable: Yes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item reverse">
              <div className="feature-content">
                <h3>Real-Time Utilization Tracking</h3>
                <p>
                  Get instant visibility into team capacity, project profitability, and resource 
                  allocation. Make data-driven decisions about hiring, pricing, and project staffing.
                </p>
                <ul className="feature-benefits">
                  <li>Live team utilization dashboard</li>
                  <li>Project profitability analysis</li>
                  <li>Capacity planning alerts</li>
                  <li>Revenue forecasting</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="utilization-chart">
                  <div className="chart-title">Team Utilization - This Week</div>
                  <div className="utilization-bars">
                    <div className="util-bar">
                      <span className="consultant-name">Sarah M.</span>
                      <div className="util-progress">
                        <div className="util-fill" style={{width: '92%'}}></div>
                        <span className="util-percent">92%</span>
                      </div>
                    </div>
                    <div className="util-bar">
                      <span className="consultant-name">Mike R.</span>
                      <div className="util-progress">
                        <div className="util-fill" style={{width: '87%'}}></div>
                        <span className="util-percent">87%</span>
                      </div>
                    </div>
                    <div className="util-bar">
                      <span className="consultant-name">Alex T.</span>
                      <div className="util-progress">
                        <div className="util-fill" style={{width: '78%'}}></div>
                        <span className="util-percent">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature-showcase-item">
              <div className="feature-content">
                <h3>Intelligent Project Analytics</h3>
                <p>
                  Understand which types of work are most profitable, identify scope creep early, 
                  and optimize resource allocation across multiple client engagements.
                </p>
                <ul className="feature-benefits">
                  <li>Project profitability analysis</li>
                  <li>Scope creep detection</li>
                  <li>Resource optimization insights</li>
                  <li>Client profitability ranking</li>
                </ul>
              </div>
              <div className="feature-visual">
                <div className="project-analytics">
                  <div className="project-card profitable">
                    <div className="project-name">Digital Transformation</div>
                    <div className="project-metrics">
                      <span className="metric">Margin: 45%</span>
                      <span className="metric">Utilization: 89%</span>
                    </div>
                    <div className="project-status">Highly Profitable</div>
                  </div>
                  <div className="project-card warning">
                    <div className="project-name">System Integration</div>
                    <div className="project-metrics">
                      <span className="metric">Margin: 12%</span>
                      <span className="metric">Over Budget: 23%</span>
                    </div>
                    <div className="project-status">Needs Attention</div>
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
          <h2 className="section-title" style={{color: 'black'}}>
            Professional Services <span style={{color: 'black'}}>ROI Calculator</span>
          </h2>
          
          <div className="roi-example">
            <div className="roi-scenario">
              <h3>Typical Professional Services Firm</h3>
              <div className="scenario-details">
                <div className="detail-item">
                  <span className="detail-label">Team Size:</span>
                  <span className="detail-value">25 consultants</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Average Rate:</span>
                  <span className="detail-value">$150/hour</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Time Waste:</span>
                  <span className="detail-value">30 min/day per person</span>
                </div>
              </div>
            </div>
            
            <div className="roi-results">
              <div className="roi-metric">
                <div className="roi-number">$487K</div>
                <div className="roi-label">Annual Time Value Saved</div>
              </div>
              <div className="roi-metric">
                <div className="roi-number">$97K</div>
                <div className="roi-label">Additional Billable Revenue</div>
              </div>
              <div className="roi-metric">
                <div className="roi-number">1,847%</div>
                <div className="roi-label">Return on Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            What Professional Services <span className="gradient-text">Leaders Say</span>
          </h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-content">
                <div className="stars">5.0 out of 5 stars</div>
                <blockquote>
                  "Timebeacon transformed our professional services practice. We went from 65% to 89% utilization 
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
                  "The ROI was immediate. Within the first month, we recovered the cost of Timebeacon 
                  just from the additional billable hours we captured. Our partners finally have real 
                  visibility into project profitability."
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AL</div>
                <div className="author-info">
                  <div className="author-name">Amanda Liu</div>
                  <div className="author-title">Managing Partner</div>
                  <div className="author-company">Innovate Partners</div>
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
            <h2>Ready to Transform Your Professional Services Practice?</h2>
            <p>Join 500+ professional services teams already maximizing their billable hours with Timebeacon.</p>
            
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
    </div>
  );
};

export default ProfessionalServices;