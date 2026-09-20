import React from "react";
import "./WhyEffective.css";
import { formatNewlines } from '../../utils/formatText';

// Shared SVG icons used across all services
const icons = [
  // Magnifying glass
  <span className="icon-bubble" key="search">
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#7c61e8"/>
      <circle cx="15" cy="15" r="6" stroke="#fff" strokeWidth="2.2" />
      <line x1="19.3" y1="19.3" x2="23" y2="23" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  </span>,
  // Lightbulb
  <span className="icon-bubble" key="lightbulb">
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#7c61e8"/>
      <path d="M16 9.5a5 5 0 0 1 5 5c0 2.2-1.5 3.6-2.6 4.7-.9.8-1.4 1.8-1.4 2.8v1.1M16 25v-2.2"
            stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
      <ellipse cx="16" cy="14.5" rx="2.7" ry="2.6" fill="#fff" opacity="0.3"/>
    </svg>
  </span>,
  // User/group
  <span className="icon-bubble" key="user">
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#7c61e8"/>
      <ellipse cx="16" cy="14" rx="4" ry="3.5" stroke="#fff" strokeWidth="2.2"/>
      <path d="M9.5 23c0-3 4.5-4 6.5-4s6.5 1 6.5 4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  </span>,
];

const WhyEffective = ({ sectionTitle, items }) => (
  <section className="why-effective-section">
    <div className="why-effective-header">
      <div className="why-effective-overline">CREATING SUCCESS</div>
      <h2 className="why-effective-title">
        {formatNewlines(sectionTitle)}
      </h2>
    </div>
    <div className="why-effective-cards">
      {items.map((item, i) => (
        <div className="effective-card" key={i}>
          {icons[i % icons.length]}
          <div className="effective-card-head">{item.title}</div>
          <div className="effective-card-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyEffective;
