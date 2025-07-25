import React from 'react';

const TimeSaving: React.FC = () => {
  return (
    <section className="time-saving">
      <div className="container">
        <div className="time-saving-header">
          <h2 className="section-title">
            Save <span className="gradient-text">10 Hours Per Week</span> with Intelligent Automation
          </h2>
          <p className="section-subtitle">
            Stop wasting time on manual timesheets. TimeBeacon's AI captures every billable minute 
            automatically, so your team can focus on what matters most - delivering value to clients.
          </p>
        </div>
        
        <div className="time-saving-grid">
          <div className="time-saving-card">
            <div className="time-number">10 hours</div>
            <div className="time-label">Saved Per Week</div>
            <div className="time-description">
              No more manual timesheets, timer tracking, or end-of-day time entry. Our AI captures 
              everything automatically from your calendar and meeting tools.
            </div>
          </div>
          
          <div className="time-saving-card">
            <div className="time-number">3 minutes</div>
            <div className="time-label">Setup Time</div>
            <div className="time-description">
              Connect your calendar, and you're done. TimeBeacon starts tracking immediately with 
              zero configuration or training required from your team.
            </div>
          </div>
          
          <div className="time-saving-card">
            <div className="time-number">99.2%</div>
            <div className="time-label">Accuracy Rate</div>
            <div className="time-description">
              Our AI is more accurate than manual entry. Smart algorithms detect meeting types, 
              assign correct billing codes, and categorize work automatically.
            </div>
          </div>
          
          <div className="time-saving-card">
            <div className="time-number">Zero</div>
            <div className="time-label">Manual Entry</div>
            <div className="time-description">
              Completely hands-off time tracking. Your team never needs to start timers, log hours, 
              or remember what they worked on. It all happens seamlessly in the background.
            </div>
          </div>
        </div>
        
        <div className="time-saving-benefit">
          <div className="benefit-content">
            <h3>What Your Team Can Do with 10 Extra Hours Per Week</h3>
            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-title">Focus on High-Value Work</div>
                <div className="benefit-desc">Spend more time on strategic initiatives and client deliverables</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-title">Improve Work-Life Balance</div>
                <div className="benefit-desc">No more staying late to fill out timesheets or catch up on admin</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-title">Increase Client Satisfaction</div>
                <div className="benefit-desc">More time for client interaction and project quality</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-title">Drive Revenue Growth</div>
                <div className="benefit-desc">Capture more billable hours and take on additional projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSaving;