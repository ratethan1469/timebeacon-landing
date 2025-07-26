import React from 'react';

const Blog: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Timebeacon Blog</span>
          </div>
          
          <h1 className="hero-title">
            The Future of
            <span className="gradient-text"> Time Tracking</span>
          </h1>
          
          <p className="hero-subtitle">
            Insights, best practices, and industry trends from the team building the next generation 
            of automated time tracking. Learn from real customer stories, implementation guides, 
            and productivity research.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Articles Published</div>
            </div>
            <div className="stat">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat">
              <div className="stat-number">Weekly</div>
              <div className="stat-label">New Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          
          <div className="blog-featured">
            <article className="blog-post featured">
              <div className="post-image">
                <div className="post-category">Customer Story</div>
              </div>
              <div className="post-content">
                <h3>How TechFlow Solutions Eliminated 47 Hours of Weekly Timesheet Management</h3>
                <p>
                  Director Jennifer Smith shares how their 25-person consulting team went from spending 
                  2+ hours per person weekly on timesheets to completely automated time capture in just 30 days.
                </p>
                <div className="post-meta">
                  <span className="post-author">By Ethan Ratnowsky</span>
                  <span className="post-date">December 15, 2024</span>
                  <span className="post-time">8 min read</span>
                </div>
                <button className="post-cta">Read Full Story</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Latest <span className="gradient-text">Posts</span>
          </h2>
          
          <div className="blog-grid">
            <article className="blog-post">
              <div className="post-image">
                <div className="post-category">Best Practices</div>
              </div>
              <div className="post-content">
                <h3>The Hidden Cost of Manual Time Tracking: $156K Per Manager</h3>
                <p>Our analysis of 500+ companies reveals the true cost of manual timesheet management on productivity and team satisfaction.</p>
                <div className="post-meta">
                  <span className="post-date">December 12, 2024</span>
                  <span className="post-time">6 min read</span>
                </div>
              </div>
            </article>
            
            <article className="blog-post">
              <div className="post-image">
                <div className="post-category">Integration Guide</div>
              </div>
              <div className="post-content">
                <h3>Slack Integration Deep Dive: Capturing Context, Not Just Time</h3>
                <p>Learn how our AI analyzes Slack conversations to automatically categorize time by project, client, and work type.</p>
                <div className="post-meta">
                  <span className="post-date">December 10, 2024</span>
                  <span className="post-time">12 min read</span>
                </div>
              </div>
            </article>
            
            <article className="blog-post">
              <div className="post-image">
                <div className="post-category">Industry Analysis</div>
              </div>
              <div className="post-content">
                <h3>Why 73% of Professional Services Firms Are Moving to Automated Time Tracking</h3>
                <p>Industry research showing the shift from manual timesheets to AI-powered automatic time capture across consulting and agencies.</p>
                <div className="post-meta">
                  <span className="post-date">December 8, 2024</span>
                  <span className="post-time">10 min read</span>
                </div>
              </div>
            </article>
            
            <article className="blog-post">
              <div className="post-image">
                <div className="post-category">Product Update</div>
              </div>
              <div className="post-content">
                <h3>Introducing Smart Meeting Detection: Beyond Calendar Sync</h3>
                <p>Our latest AI update can now differentiate between client calls, internal meetings, and focus work automatically.</p>
                <div className="post-meta">
                  <span className="post-date">December 5, 2024</span>
                  <span className="post-time">5 min read</span>
                </div>
              </div>
            </article>
            
            <article className="blog-post">
              <div className="post-image">
                <div className="post-category">Customer Story</div>
              </div>
              <div className="post-content">
                <h3>From 40% to 95% Timesheet Accuracy: GrowthTech's Transformation</h3>
                <p>How a 50-person marketing agency improved billing accuracy and eliminated timesheet chasing with automated time capture.</p>
                <div className="post-meta">
                  <span className="post-date">December 3, 2024</span>
                  <span className="post-time">7 min read</span>
                </div>
              </div>
            </article>
            
            <article className="blog-post">
              <div className="post-image">
                <div className="post-category">Leadership</div>
              </div>
              <div className="post-content">
                <h3>The Manager's Guide to Team Productivity Insights</h3>
                <p>How to use automated time data to identify bottlenecks, balance workloads, and improve team performance without micromanaging.</p>
                <div className="post-meta">
                  <span className="post-date">November 28, 2024</span>
                  <span className="post-time">9 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          
          <div className="category-grid">
            <div className="category-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Customer Stories</h3>
              <p>Real implementation stories and results from our customers across different industries.</p>
              <div className="category-count">12 articles</div>
            </div>
            
            <div className="category-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Best Practices</h3>
              <p>Proven strategies for time tracking, team management, and productivity optimization.</p>
              <div className="category-count">18 articles</div>
            </div>
            
            <div className="category-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Integration Guides</h3>
              <p>Deep dives into specific integrations, setup tutorials, and advanced configuration tips.</p>
              <div className="category-count">15 articles</div>
            </div>
            
            <div className="category-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Industry Analysis</h3>
              <p>Market research, industry trends, and data-driven insights about the future of work.</p>
              <div className="category-count">8 articles</div>
            </div>
            
            <div className="category-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Product Updates</h3>
              <p>New feature announcements, product roadmap updates, and behind-the-scenes development insights.</p>
              <div className="category-count">10 articles</div>
            </div>
            
            <div className="category-card">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Leadership</h3>
              <p>Management strategies, team building insights, and leadership perspectives on productivity tools.</p>
              <div className="category-count">7 articles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="customer-stories">
        <div className="container">
          <div className="newsletter-signup">
            <div className="newsletter-content">
              <h2 className="section-title">
                Never Miss an <span className="gradient-text">Update</span>
              </h2>
              <p>
                Get the latest insights on automated time tracking, productivity trends, and customer success 
                stories delivered to your inbox every Tuesday.
              </p>
              <div className="newsletter-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Weekly newsletter</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Exclusive insights</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Industry reports</span>
                </div>
              </div>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                <button className="newsletter-cta">Subscribe</button>
              </div>
              <p className="newsletter-note">Join 2,500+ subscribers. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="roi-calculator">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Automated Time Tracking?</h2>
            <p>See why thousands of teams have eliminated manual timesheets with Timebeacon's AI-powered automation.</p>
            
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

export default Blog;