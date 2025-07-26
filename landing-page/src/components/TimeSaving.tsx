import React from 'react';

const TimeSaving: React.FC = () => {
  return (
    <section className="time-saving">
      <div className="container">
        <div className="time-saving-header">
          <h2 className="section-title">
            The Problem: <span className="gradient-text">Manual Time Tracking is Broken</span>
          </h2>
          <p className="section-subtitle">
            Customer Success Managers waste 15-30 minutes daily entering time in Workday, Wrike, or Clockify. 
            Context switching between tools, vague descriptions, and revenue leakage from forgotten hours 
            costs your business thousands. Timebeacon eliminates this pain completely.
          </p>
        </div>
        
        <div className="time-saving-grid">
          <div className="time-saving-card">
            <div className="time-number">30 min</div>
            <div className="time-label">Daily Time Waste/employee</div>
            <div className="time-description">
              CSMs spend this much time daily manually entering time in Workday, Wrike, or Clockify. 
              That's 87 hours per year - worth $6,525 at $75/hour.
            </div>
          </div>
          
          <div className="time-saving-card">
            <div className="time-number">5-15%</div>
            <div className="time-label">Billing Recovery</div>
            <div className="time-description">
              Increase in captured billable hours through automated tracking. 
              No more forgotten meetings or lost time entries.
            </div>
          </div>
          
          <div className="time-saving-card">
            <div className="time-number">80%</div>
            <div className="time-label">Revenue Leakage Cut</div>
            <div className="time-description">
              Moving from manual to automated daily time entry eliminates forgotten hours 
              and retrospective inaccuracies that cost your business.
            </div>
          </div>
          
          <div className="time-saving-card">
            <div className="time-number">2,075%</div>
            <div className="time-label">Customer ROI</div>
            <div className="time-description">
              Timebeacon costs $300-480/user annually but saves $6,525 in time value, 
              plus recovered billable hours and billing accuracy.
            </div>
          </div>
        </div>
        
        <div className="time-saving-benefit">
          <div className="benefit-content">
            <h3>The Manager's Dream: Finally Know What Your Team Actually Does</h3>
            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-title">AI Work Summaries</div>
                <div className="benefit-desc">Get detailed, contextual summaries of each team member's daily activities</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-title">Real Visibility</div>
                <div className="benefit-desc">No more vague "meeting" entries - see actual project progress and client interactions</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-title">Data-Driven Decisions</div>
                <div className="benefit-desc">Make informed choices about resource allocation and capacity planning</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-title">Team Performance Insights</div>
                <div className="benefit-desc">Identify top performers, bottlenecks, and optimization opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSaving;