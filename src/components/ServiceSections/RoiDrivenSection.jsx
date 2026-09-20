import React from 'react';
import './RoiDrivenSection.css';

const RoiDrivenSection = ({ title, description, features }) => (
  <section className="roi-driven-section">
    <div className="roi-left">
      <h2 className="roi-title">{title}</h2>
      <p className="roi-desc">{description}</p>
    </div>
    <div className="roi-divider"></div>
    <div className="roi-right">
      <ul className="roi-features">
        {features.map((item, idx) => (
          <li key={idx}>
            <span className="roi-check">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RoiDrivenSection;
