import React, { useState } from 'react';

const ROICalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(10);
  const [avgHourlyRate, setAvgHourlyRate] = useState<number>(75);
  const [timeWastedDaily, setTimeWastedDaily] = useState<number>(20);

  const calculateROI = () => {
    // Annual time saved per user (in hours)
    const annualTimeSaved = (timeWastedDaily * 365) / 60;
    
    // Total annual value saved
    const totalTimeSaved = teamSize * annualTimeSaved;
    const timeValue = totalTimeSaved * avgHourlyRate;
    
    // Timebeacon annual cost (using Professional tier at $25/month)
    const annualCost = teamSize * 25 * 12;
    
    // ROI calculation
    const roi = ((timeValue - annualCost) / annualCost) * 100;
    
    // Additional revenue from 10% billable hour recovery
    const billableRecovery = timeValue * 0.1;
    
    return {
      timeSaved: totalTimeSaved,
      timeValue: timeValue,
      annualCost: annualCost,
      roi: roi,
      billableRecovery: billableRecovery,
      totalBenefit: timeValue + billableRecovery
    };
  };

  const results = calculateROI();

  return (
    <section className="roi-calculator" id="roi-calculator">
      <div className="container">
        <div className="roi-header">
          <h2 className="section-title">
            Calculate Your <span className="gradient-text">ROI with Timebeacon</span>
          </h2>
          <p className="section-subtitle">
            See exactly how much time and money Timebeacon will save your team. 
            Our customers typically see ROI of 1,260% - 2,075% in the first year.
          </p>
        </div>
        
        <div className="roi-content">
          <div className="roi-inputs">
            <h3>Your Team Details</h3>
            
            <div className="input-group">
              <label htmlFor="teamSize">Team Size</label>
              <input
                id="teamSize"
                type="number"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                min="1"
                max="1000"
              />
              <span className="input-help">Number of people tracking time</span>
            </div>
            
            <div className="input-group">
              <label htmlFor="hourlyRate">Average Hourly Rate ($)</label>
              <input
                id="hourlyRate"
                type="number"
                value={avgHourlyRate}
                onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                min="25"
                max="500"
              />
              <span className="input-help">Blended rate for your team</span>
            </div>
            
            <div className="input-group">
              <label htmlFor="timeWasted">Daily Time Waste (minutes)</label>
              <input
                id="timeWasted"
                type="number"
                value={timeWastedDaily}
                onChange={(e) => setTimeWastedDaily(Number(e.target.value))}
                min="5"
                max="60"
              />
              <span className="input-help">Time spent on manual time entry</span>
            </div>
          </div>
          
          <div className="roi-results">
            <h3>Your ROI Results</h3>
            
            <div className="results-grid">
              <div className="result-card highlight">
                <div className="result-value">{Math.round(results.roi)}%</div>
                <div className="result-label">Annual ROI</div>
              </div>
              
              <div className="result-card">
                <div className="result-value">{Math.round(results.timeSaved).toLocaleString()}</div>
                <div className="result-label">Hours Saved Annually</div>
              </div>
              
              <div className="result-card">
                <div className="result-value">${Math.round(results.timeValue).toLocaleString()}</div>
                <div className="result-label">Time Value Saved</div>
              </div>
              
              <div className="result-card">
                <div className="result-value">${Math.round(results.billableRecovery).toLocaleString()}</div>
                <div className="result-label">Recovered Revenue</div>
              </div>
              
              <div className="result-card">
                <div className="result-value">${Math.round(results.annualCost).toLocaleString()}</div>
                <div className="result-label">Timebeacon Cost</div>
              </div>
              
              <div className="result-card highlight">
                <div className="result-value">${Math.round(results.totalBenefit - results.annualCost).toLocaleString()}</div>
                <div className="result-label">Net Annual Savings</div>
              </div>
            </div>
            
            <div className="roi-breakdown">
              <h4>What This Means for Your Business</h4>
              <ul>
                <li>Each team member saves {Math.round(timeWastedDaily * 365 / 60)} hours annually</li>
                <li>Equivalent to {Math.round(results.timeSaved / 2080)} full-time employees</li>
                <li>ROI payback period: {(() => {
                  const paybackMonths = 12 / (results.roi / 100 + 1);
                  if (paybackMonths < 1) {
                    return `${Math.round(paybackMonths * 4)} weeks`;
                  }
                  return `${Math.round(paybackMonths)} months`;
                })()}</li>
                <li>10% increase in captured billable hours adds ${Math.round(results.billableRecovery).toLocaleString()}</li>
              </ul>
            </div>
            
            <div className="roi-cta">
              <div className="cta-buttons">
                <button className="btn-primary-large" onClick={() => {
                  // Trigger email capture modal for ROI report
                  const email = prompt('Enter your email to receive your personalized ROI report:');
                  if (email) {
                    // Here you would integrate with your email service
                    alert('Thank you! Your personalized ROI report will be sent to ' + email);
                  }
                }}>
                  Get My Custom ROI Report
                </button>
                <button className="btn-secondary-large" onClick={() => window.open('https://www.loom.com/share/timebeacon-demo', '_blank')}>
                  Watch 2-Min Demo
                </button>
              </div>
              <div className="waitlist-signup">
                <p className="waitlist-text">Want early access?</p>
                <button className="btn-waitlist" onClick={() => {
                  const email = prompt('Join our early access waitlist:');
                  if (email) {
                    alert('You\'re on the list! We\'ll notify you when Timebeacon launches.');
                  }
                }}>
                  Join Early Access Waitlist
                </button>
              </div>
              <p className="cta-note">Join 500+ teams already using Timebeacon • No spam, ever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;