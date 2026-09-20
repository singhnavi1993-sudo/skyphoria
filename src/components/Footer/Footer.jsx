import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";
import googleCloudLogo from '../../assets/logos/google-cloud.svg';
import metaBusinessLogo from '../../assets/logos/meta-partner.svg';
import googlePartnerLogo from '../../assets/logos/google-partner.svg';
import shopifyLogo from '../../assets/logos/shopify.svg';

const Footer = () => (
  <footer className="footer-container">
    {/* Top Headline + Contact */}
    <div className="footer-top">
      <h2 className="footer-headline">
        See how we can help your business grow with digital marketing
      </h2>
      <div className="footer-contact">
        <p>Ready to speak with a marketing expert? Give us a ring</p>
        <a href="tel:+917889952980" className="footer-phone">+91 7889952980</a>
        <Link to="/contact" className="footer-cta">GET A FREE AUDIT <span className="arrow">→</span></Link>
      </div>
    </div>

    <div className="footer-divider" />

    {/* Partners and ROAS Section */}
    <div className="footer-partners-roas-container">
      <div className="partners-left">
        <div className="footer-partners-centered">
          <p className="partners-label">A PARTNER, NOT A VENDOR</p>
          <div className="partners-logos">
                <img src={googleCloudLogo} alt="Google Cloud" className="partner-logo" loading="lazy" />
                <img src={metaBusinessLogo} alt="Meta Business" className="partner-logo" loading="lazy" />
                <img src={googlePartnerLogo} alt="Google Partner" className="partner-logo" loading="lazy" />
                <img src={shopifyLogo} alt="Shopify" className="partner-logo" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="roas-right">
        <h3>6.7 <span>/ Average ROAS</span></h3>
        <p>across our 100+ Global Clients on SEO, PPC & Social</p>
      </div>
    </div>

    {/* Full lower panel with rounded edges */}
    <div className="footer-rounded-panel">
      {/* Solutions Section */}
        <h3 className="solutions-heading">SOLUTIONS</h3>
      <div className="footer-solutions">
        <div className="solution-column">
          <a href="/services/performance-marketing" className="footer-nav-link">Performance Marketing</a>
          <a href="/services/seo" className="footer-nav-link">Search Engine Optimization</a>
        </div>
        <div className="solution-column">
          <a href="/services/pr-and-link-building" className="footer-nav-link">Digital PR & Link Building</a>
          <a href="/services/web-development" className="footer-nav-link">Web Development</a>
        </div>
        <div className="solution-column">
          <a href="/services/social-media-marketing" className="footer-nav-link">Social Media Marketing</a>
          <a href="/services/content-creation" className="footer-nav-link">Content Marketing Services</a>
        </div>
      </div>

      {/* Footer Bottom with Nav, Dividers, Legal and Social */}
      <div className="footer-bottom">
        <div className="footer-divider-line" />
        <div className="footer-bottom-nav">
          <Link to="/about-us">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/success-stories">Success Stories</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-divider-line" />
        <div className="footer-bottom-details">
          <span>© 2025 Skyphoria. All rights reserved.</span>
          <span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link> <Link to="/privacy-policy">Privacy Policy</Link>
          </span>
          <span className="footer-bottom-social">
            <a href="https://www.instagram.com/skyphoriadigital/" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/skyphoria-digital/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
