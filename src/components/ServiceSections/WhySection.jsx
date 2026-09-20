import React from "react";
import "./WhySection.css";
import { formatNewlines } from '../../utils/formatText';

const WhySection = ({
  sectionTitle,
  teamImage,
  contentTitle,
  contentText,
  proTitle,
  proDesc,
  statCardImage,
}) => (
  <section>
    {/* Section 1: Centered heading, image+text row */}
    <div className="paid-search-section">
      <div className="paid-search-header">
        <div className="paid-search-logo">SKYPHORIA</div>
        <h2 className="paid-search-title">
          {formatNewlines(sectionTitle)}
        </h2>
      </div>
      <div className="paid-search-content">
        <div className="paid-search-image-wrap">
          <img src={teamImage} alt="Team working together" loading="lazy" />
        </div>
        <div className="paid-search-text">
          <h3>{contentTitle}</h3>
          {contentText.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
    {/* Section 2: Left text, right card/graphic */}
    <div className="paid-pro-section">
      <div className="paid-pro-left">
        <h3 className="paid-pro-title">{proTitle}</h3>
        <p className="paid-pro-desc">{proDesc}</p>
      </div>
      <div className="paid-pro-right">
        <img src={statCardImage} className="paid-pro-card" alt="Stat Card" loading="lazy" />
      </div>
    </div>
  </section>
);

export default WhySection;
