// src/pages/AboutStrategySection.jsx
import './AboutStrategySection.css';
import teamImage from '../../assets/home/Market22.webp'; // Replace with your actual image path

export default function AboutStrategySection() {
  return (
    <section className="strategy-section-bg">
      <div className="strategy-section-container">
        <div className="strategy-section-image-wrap">
          <img src={teamImage} alt="Team at work" className="strategy-section-image" />
        </div>
        <div className="strategy-section-content">
          <h2 className="strategy-section-title">
            We’re In It for the Long Haul,<br />Not Just the Quick Win
          </h2>
          <p className="strategy-section-desc">
            At Skyphoria Digital, we don’t hand you a template and call it a day. Our team works alongside yours to understand your business, your goals, and your market. From brand visibility services that put you in front of the right audience to performance campaigns that convert that attention into revenue, we run marketing strategies that are built for efficiency, clarity, and real commercial growth.<br /><br />
            Every investment you make is purposeful. Every decision we make is backed by data. And we’ll always explain what we’re doing and why in plain language you can act on.
          </p>
          <a className="strategy-section-link" href="/about-us">
            MORE ABOUT SKYPHORIA DIGITAL MARKETING AGENCY
          </a>
        </div>     
        </div>
    </section>
  );
}
