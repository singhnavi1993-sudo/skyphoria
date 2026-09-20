// src/pages/MarketingSolutions.jsx
import './MarketingSolutions.css';
import heroImage from '../../assets/home/Market21.webp'; // Replace with your actual image path

export default function MarketingSolutions() {
  return (
    <section className="marketing-hero-bg">
      <div className="marketing-hero-container">
        <div className="marketing-hero-content">
          <p className="section-tagline">MARKETING SERVICES</p>
          <h1 className="marketing-hero-title">Every Channel. One Strategy. Maximum ROI.</h1>
          <p className="marketing-hero-desc">
            At Skyphoria Digital Marketing Agency, we combine bold creative thinking with disciplined paid media management. Every strategy we build is designed to get you the highest possible return — no fluff, no guesswork, just digital marketing services that work.
          </p>
          <a href="/contact" className="marketing-hero-btn">
            Claim Your Free Performance Audit &nbsp; <span className="arrow">&#8594;</span>
          </a>
        </div>
        <div className="marketing-hero-image-wrap">
          <img src={heroImage} alt="Marketing solutions showcase" className="marketing-hero-image" />
        </div>
      </div>
    </section>
  );
}
