import React from 'react';

const CustomerStories: React.FC = () => {
  return (
    <section className="customer-stories">
      <div className="container">
        <div className="customer-stories-header">
          <h2 className="customer-stories-title">Transforming Professional Services Worldwide</h2>
          <p className="customer-stories-subtitle">
            Timebeacon's AI-powered time tracking platform helps professional services teams 
            maximize billable hours and optimize team utilization. By providing teams with 
            automatic time capture, intelligent project categorization, and real-time insights, Timebeacon 
            enables businesses to deliver exceptional client services—driving revenue growth, 
            reducing administrative overhead, and improving team productivity.
          </p>
        </div>
        
        {/* COMMENTED OUT UNTIL WE HAVE REAL CUSTOMER STORIES
        <div className="customer-stories-grid">
          <div className="customer-story-card">
            <div className="customer-logo">
              <div className="logo-placeholder">TechFlow Solutions</div>
            </div>
            <div className="customer-story">
              The leading software consultancy increased team utilization by 40% and captured $2.3M 
              in additional revenue within 6 months.
            </div>
            <div className="customer-link">
              <a href="/customers/techflow">Read TechFlow's story →</a>
            </div>
          </div>
          
          <div className="customer-story-card">
            <div className="customer-logo">
              <div className="logo-placeholder">Innovate Partners</div>
            </div>
            <div className="customer-story">
              The management consulting firm reduced timesheet admin by 95% and improved project 
              profitability tracking across 200+ consultants.
            </div>
            <div className="customer-link">
              <a href="/customers/innovate-partners">Read Innovate's story →</a>
            </div>
          </div>
          
          <div className="customer-story-card">
            <div className="customer-logo">
              <div className="logo-placeholder">ServicePro</div>
            </div>
            <div className="customer-story">
              The professional services company automated time tracking for 500+ employees, 
              saving 2,000 hours weekly in administrative tasks.
            </div>
            <div className="customer-link">
              <a href="/customers/servicepro">Read ServicePro's story →</a>
            </div>
          </div>
          
          <div className="customer-story-card">
            <div className="customer-logo">
              <div className="logo-placeholder">CloudScale</div>
            </div>
            <div className="customer-story">
              The implementation specialists increased project visibility by 300% and reduced 
              client billing disputes to zero with automated time capture.
            </div>
            <div className="customer-link">
              <a href="/customers/cloudscale">Read CloudScale's story →</a>
            </div>
          </div>
          
          <div className="customer-story-card">
            <div className="customer-logo">
              <div className="logo-placeholder">GrowthTech</div>
            </div>
            <div className="customer-story">
              The customer success team improved account coverage by 250% and increased renewal 
              rates by 35% with intelligent time allocation insights.
            </div>
            <div className="customer-link">
              <a href="/customers/growthtech">Read GrowthTech's story →</a>
            </div>
          </div>
          
          <div className="customer-story-card">
            <div className="customer-logo">
              <div className="logo-placeholder">SecureConsult</div>
            </div>
            <div className="customer-story">
              The cybersecurity consultancy achieved SOC 2 compliance for time tracking while 
              increasing billable hour capture by 45% across global teams.
            </div>
            <div className="customer-link">
              <a href="/customers/secureconsult">Read SecureConsult's story →</a>
            </div>
          </div>
        </div>
        */}
        
        <div className="customer-stories-cta">
          <a href="/customers" className="explore-stories-link">
            Explore all customer stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;