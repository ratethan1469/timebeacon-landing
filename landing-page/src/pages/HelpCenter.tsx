import React from 'react';

const HelpCenter: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Help & Support Center</span>
          </div>
          
          <h1 className="hero-title">
            Get Help with
            <span className="gradient-text"> AI Automation</span>
          </h1>
          
          <p className="hero-subtitle">
            Find answers, troubleshooting guides, and step-by-step tutorials to maximize your 
            AI-powered time automation. From basic setup questions to advanced integration 
            challenges, we've got the solutions you need.
          </p>
          
          <div className="hero-search">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search for help articles, integrations, or common issues..." 
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
            <div className="popular-searches">
              <span>Popular searches:</span>
              <a href="#calendar-setup">Calendar Setup</a>
              <a href="#slack-integration">Slack Integration</a>
              <a href="#ai-accuracy">AI Accuracy</a>
              <a href="#billing-questions">Billing</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Quick <span className="gradient-text">Help Categories</span>
          </h2>
          
          <div className="help-categories">
            <div className="help-category">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0L12 19l2.5 2.5c1.5 1.5 3.5 1.5 5 0s1.5-3.5 0-5L17 14l2.5-2.5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0L12 9 9.5 6.5c-1.5-1.5-3.5-1.5-5 0s-1.5 3.5 0 5L7 14l-2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="category-content">
                <h3>Getting Started</h3>
                <p>New to Timebeacon? Start here for setup guides and first steps to eliminate manual time tracking.</p>
                <div className="category-links">
                  <a href="#account-setup">Account Setup</a>
                  <a href="#first-integration">First Integration</a>
                  <a href="#ai-training">AI Training</a>
                  <a href="#team-onboarding">Team Onboarding</a>
                </div>
                <div className="article-count">12 articles</div>
              </div>
            </div>
            
            <div className="help-category">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="category-content">
                <h3>Platform Integrations</h3>
                <p>Connect and automate time capture from all your business applications with AI intelligence.</p>
                <div className="category-links">
                  <a href="#calendar-apps">Calendar Apps</a>
                  <a href="#communication-tools">Communication Tools</a>
                  <a href="#project-management">Project Management</a>
                  <a href="#crm-systems">CRM Systems</a>
                </div>
                <div className="article-count">28 articles</div>
              </div>
            </div>
            
            <div className="help-category">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="category-content">
                <h3>AI & Automation</h3>
                <p>Configure intelligent categorization, custom rules, and advanced automation workflows.</p>
                <div className="category-links">
                  <a href="#ai-configuration">AI Configuration</a>
                  <a href="#custom-categories">Custom Categories</a>
                  <a href="#automation-rules">Automation Rules</a>
                  <a href="#accuracy-improvement">Accuracy Improvement</a>
                </div>
                <div className="article-count">18 articles</div>
              </div>
            </div>
            
            <div className="help-category">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="category-content">
                <h3>Reporting & Analytics</h3>
                <p>Generate insights, export data, and create custom reports from your automated time data.</p>
                <div className="category-links">
                  <a href="#report-creation">Report Creation</a>
                  <a href="#data-export">Data Export</a>
                  <a href="#custom-dashboards">Custom Dashboards</a>
                  <a href="#team-analytics">Team Analytics</a>
                </div>
                <div className="article-count">15 articles</div>
              </div>
            </div>
            
            <div className="help-category">
              <div className="pain-icon-clean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="category-content">
                <h3>Team Management</h3>
                <p>User administration, permissions, billing management, and enterprise features.</p>
                <div className="category-links">
                  <a href="#user-management">User Management</a>
                  <a href="#permissions">Permissions</a>
                  <a href="#billing-admin">Billing Admin</a>
                  <a href="#sso-setup">SSO Setup</a>
                </div>
                <div className="article-count">22 articles</div>
              </div>
            </div>
            
            <div className="help-category">
              <div className="category-icon">🔧</div>
              <div className="category-content">
                <h3>Troubleshooting</h3>
                <p>Common issues, error messages, and solutions to keep your automation running smoothly.</p>
                <div className="category-links">
                  <a href="#sync-issues">Sync Issues</a>
                  <a href="#integration-errors">Integration Errors</a>
                  <a href="#data-accuracy">Data Accuracy</a>
                  <a href="#performance">Performance</a>
                </div>
                <div className="article-count">25 articles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">
            Most Popular <span className="gradient-text">Help Articles</span>
          </h2>
          
          <div className="featured-articles">
            <article className="help-article featured">
              <div className="article-badge">MOST VIEWED</div>
              <div className="article-content">
                <h3>Complete Google Calendar Integration: Eliminate Manual Meeting Logs</h3>
                <p>
                  Step-by-step guide to connect Google Calendar and configure AI to automatically categorize 
                  meetings by client, project, and type. Never log meeting time manually again.
                </p>
                <div className="article-meta">
                  <span className="article-category">Integration Guide</span>
                  <span className="article-time">8 min read</span>
                  <span className="article-views">12,450 views</span>
                </div>
                <div className="article-tags">
                  <span className="tag">Google Calendar</span>
                  <span className="tag">Meeting Automation</span>
                  <span className="tag">AI Setup</span>
                </div>
              </div>
            </article>
            
            <div className="articles-grid">
              <article className="help-article">
                <div className="article-content">
                  <h3>Why Isn't My AI Categorization Accurate?</h3>
                  <p>Common reasons for inaccurate time categorization and how to improve AI performance through training and rule configuration.</p>
                  <div className="article-meta">
                    <span className="article-category">Troubleshooting</span>
                    <span className="article-time">5 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="help-article">
                <div className="article-content">
                  <h3>Slack Integration: Capture Project Time from Conversations</h3>
                  <p>Advanced setup guide for Slack integration including channel categorization and AI-powered project detection from messages.</p>
                  <div className="article-meta">
                    <span className="article-category">Integration Guide</span>
                    <span className="article-time">12 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="help-article">
                <div className="article-content">
                  <h3>Setting Up Custom Time Categories and Rules</h3>
                  <p>How to create custom categories, set up automation rules, and configure AI to match your specific workflow and client structure.</p>
                  <div className="article-meta">
                    <span className="article-category">Configuration</span>
                    <span className="article-time">10 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="help-article">
                <div className="article-content">
                  <h3>Salesforce CRM Integration for Automatic Client Matching</h3>
                  <p>Enterprise guide to connecting Salesforce for automatic client identification and opportunity tracking across all activities.</p>
                  <div className="article-meta">
                    <span className="article-category">Enterprise Setup</span>
                    <span className="article-time">15 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="help-article">
                <div className="article-content">
                  <h3>Fixing Common Integration Sync Issues</h3>
                  <p>Troubleshooting guide for when your integrations stop syncing, including OAuth renewal and permission fixes.</p>
                  <div className="article-meta">
                    <span className="article-category">Troubleshooting</span>
                    <span className="article-time">7 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="help-article">
                <div className="article-content">
                  <h3>Team Onboarding: Rolling Out AI Automation Organization-Wide</h3>
                  <p>Best practices for implementing Timebeacon across your entire organization, including change management and training strategies.</p>
                  <div className="article-meta">
                    <span className="article-category">Team Management</span>
                    <span className="article-time">18 min read</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pain Points FAQ */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">
            Common <span className="gradient-text">Pain Points Solved</span>
          </h2>
          
          <div className="pain-points-faq">
            <div className="pain-point-section">
              <h3>Vague Time Descriptions</h3>
              <div className="pain-description">
                <p>
                  <strong>The Problem:</strong> Current time entries lack context ("meeting," "emails," "follow-up") 
                  providing zero visibility to managers about what work was actually accomplished.
                </p>
                <p>
                  <strong>AI Solution:</strong> Our AI analyzes meeting content, email topics, and project context 
                  to provide detailed, meaningful descriptions like "TechFlow Strategy Session - Q4 roadmap discussion" 
                  instead of just "meeting."
                </p>
              </div>
              <div className="solution-articles">
                <a href="#ai-descriptions" className="solution-link">How AI Creates Detailed Time Descriptions</a>
                <a href="#context-analysis" className="solution-link">Meeting Context Analysis Setup</a>
                <a href="#manager-visibility" className="solution-link">Manager Visibility Dashboard</a>
              </div>
            </div>
            
            <div className="pain-point-section">
              <h3>Revenue Leakage from Forgotten Hours</h3>
              <div className="pain-description">
                <p>
                  <strong>The Problem:</strong> Consultants forget to log hours in real time, leading to 
                  retrospective adjustments that are often inaccurate and result in lost billable revenue.
                </p>
                <p>
                  <strong>AI Solution:</strong> Automatic capture means zero forgotten hours. AI tracks every 
                  meeting, email, and project activity as it happens, ensuring 100% of billable time is captured 
                  and categorized correctly.
                </p>
              </div>
              <div className="solution-articles">
                <a href="#automatic-capture" className="solution-link">Real-Time Automatic Time Capture</a>
                <a href="#billable-tracking" className="solution-link">Billable Hour Detection Setup</a>
                <a href="#revenue-recovery" className="solution-link">Revenue Recovery Case Studies</a>
              </div>
            </div>
            
            <div className="pain-point-section">
              <h3>CSM Productivity Loss</h3>
              <div className="pain-description">
                <p>
                  <strong>The Problem:</strong> Customer Success Managers are pulled in many directions as 
                  business orchestrators, making time management and activity tracking extremely difficult 
                  with manual systems.
                </p>
                <p>
                  <strong>AI Solution:</strong> Automatic tracking across all communication channels, CRM 
                  activities, and customer touchpoints gives CSMs complete visibility without any manual 
                  logging effort, allowing them to focus on customer success.
                </p>
              </div>
              <div className="solution-articles">
                <a href="#csm-automation" className="solution-link">CSM-Specific Automation Setup</a>
                <a href="#customer-tracking" className="solution-link">Customer Interaction Tracking</a>
                <a href="#csm-productivity" className="solution-link">CSM Productivity Optimization</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="customer-stories">
        <div className="container">
          <h2 className="section-title">
            Still Need <span className="gradient-text">Help?</span>
          </h2>
          
          <div className="support-options">
            <div className="support-option">
              <div className="support-icon">💬</div>
              <div className="support-content">
                <h3>Live Chat Support</h3>
                <p>Get instant help from our AI automation specialists. Average response time under 2 minutes during business hours.</p>
                <div className="support-hours">Available: Mon-Fri 9AM-6PM EST</div>
                <button className="support-cta">Start Live Chat</button>
              </div>
            </div>
            
            <div className="support-option">
              <div className="support-icon">📧</div>
              <div className="support-content">
                <h3>Email Support</h3>
                <p>Send detailed questions with screenshots. Perfect for complex integration issues or account-specific questions.</p>
                <div className="support-hours">Response: Within 4 hours</div>
                <button className="support-cta">Email Support</button>
              </div>
            </div>
            
            <div className="support-option">
              <div className="support-icon">🎥</div>
              <div className="support-content">
                <h3>Screen Share Session</h3>
                <p>Book a 30-minute one-on-one session for personalized help with integrations, setup, or troubleshooting.</p>
                <div className="support-hours">Available: Same day booking</div>
                <button className="support-cta">Book Session</button>
              </div>
            </div>
            
            <div className="support-option">
              <div className="support-icon">📞</div>
              <div className="support-content">
                <h3>Phone Support</h3>
                <p>Enterprise customers can call our dedicated support line for urgent issues and critical integration problems.</p>
                <div className="support-hours">Enterprise only: 24/7</div>
                <button className="support-cta">Call Support</button>
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
            <p>Start your AI automation journey with our comprehensive help resources and expert support team.</p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={() => window.open('https://app.timebeacon.io/signup', '_blank')}>
                Start Free Trial
              </button>
              <button className="btn-secondary-large" onClick={() => window.open('https://support.timebeacon.io', '_blank')}>
                Browse All Articles
              </button>
            </div>
            
            <p className="cta-note">
              100+ help articles • Live support included • Implementation assistance available
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenter;