// SkyphoriaAboutSection.jsx

import './AboutSection.css';
import DOMPurify from "dompurify";

const highlights = [
  {
    title: "50+ Campaigns",
    description: "50+ Successful Campaigns Delivered",
  },
  {
    title: "90% Satisfaction",
    description: "90%+ Client Satisfaction Rate",
  },
  {
    title: "5+ Industries",
    description: "Brands Across 5+ Industries Served",
  },
];

export default function AboutSection() {
  return (
    <section className="skyphoria-about-section">
      <div className="skyphoria-about-container">
        <div className="skyphoria-about-left">
          <span className="skyphoria-about-label">ABOUT SKYPHORIA DIGITAL</span>
          <h2 className="skyphoria-about-headline">
            Result-Driven Digital Marketing That Connects and Converts
          </h2>
        </div>
        <div className="skyphoria-about-right">
          <p className="skyphoria-about-desc">
            At Skyphoria, our digital marketing experts combine technology and data to create customized marketing strategies that drive growth and visibility. From 50+ successful campaigns to a 90% client satisfaction rate, every strategy we create is built on results, not buzzwords.
          </p>
          <a className="skyphoria-about-btn" href="/about-us">MORE ABOUT OUR APPROACH</a>
        </div>
      </div>

    <div className="timeline-grid-container">
    <div className="timeline-grid">
        {/* Timeline Dots Row */}
        {highlights.map((_, idx) => (
        <div className="timeline-grid-dot-cell" key={idx}>
            <span className="timeline-dot"></span>
            {idx < highlights.length - 1 && <span className="timeline-grid-line"></span>}
        </div>
        ))}
        {/* Timeline Text Row */}
        {highlights.map((item) => (
        <div className="timeline-grid-card-cell" key={item.title}>
            <div className="timeline-highlight" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }} >
            </div>
        </div>
        ))}
    </div>
    </div>
          {/* Mobile Timeline */}
      <div className="timeline-mobile-container">
        {highlights.map((item, idx) => (
          <div className="timeline-mobile-item" key={idx}>
            <div className="timeline-mobile-dotline">
              <span className="timeline-dot"></span>
              {idx < highlights.length && (<span className="timeline-mobile-dashed"></span>)}
            </div>
            <div className="timeline-mobile-content">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

