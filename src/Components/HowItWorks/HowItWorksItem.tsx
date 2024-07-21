import React from 'react';

export type HowItWorksProps = {
  icon: string,
  title: string,
  text: string,
};

const HowItWorksItem: React.FC<HowItWorksProps> = ({ icon, title, text }) => (
  <div className="how-it-works-item">
    <div className="how-it-works-icon"><img src={icon} alt="Icon" /></div>
    <div className="how-it-works-text">
      <p className="how-it-works-description">{title}</p>
      <p className="how-it-works-subtext">{text}</p>
    </div>
  </div>
);

export default HowItWorksItem;
