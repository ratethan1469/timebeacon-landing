import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="social-proof-content">
          <p className="social-proof-text">
            Trusted by leading Professional Services and Customer Success teams at:
          </p>
          <div className="customer-logos">
            <div className="logo-item">
              <div className="logo-placeholder">Salesforce</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">HubSpot</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">Zendesk</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">Atlassian</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">ServiceNow</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">Workday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;