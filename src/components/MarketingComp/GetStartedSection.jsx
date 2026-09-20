// src/pages/GetStartedSection.jsx
import './GetStartedSection.css';
import rocketImage from '../../assets/home/Getty1.webp'; // Replace with your actual rocket image path

export default function GetStartedSection() {
  return (
    <section className="get-started-section-bg">
      <div className="get-started-content">
        <div className="get-started-partner">
        </div>
        <h2 className="get-started-title">
          Ready to Talk About What’s<br />Holding Your Growth Back?
        </h2>
        <a href="/contact" className="get-started-btn">
          REQUEST A FREE PROPOSAL &nbsp;<span className="arrow">&#8594;</span>
        </a>
        <img src={rocketImage} alt="Rocket" className="get-started-rocket" />
      </div>
    </section>
  );
}
