import React from 'react';
import { Link } from 'react-router-dom';
import { formatNewlines } from '../../utils/formatText';
import './ServiceHero.css';

const ServiceHero = ({ subtitle, title, description, heroImage }) => (
  <section className="hero-screenshot-wrapper">
    <div className="hero-screenshot-content">
      <span className="hero-screenshot-subtitle">{subtitle}</span>
      <h1 className="hero-screenshot-title">{formatNewlines(title)}</h1>
      <p className="hero-screenshot-desc">{description}</p>
      <Link to="/contact" className="hero-screenshot-cta">
        GET A FREE AUDIT <span className="hero-arrow">→</span>
      </Link>
    </div>
    <div className="hero-screenshot-image">
      <img src={heroImage} alt={title.replace(/\n/g, ' ')} />
    </div>
  </section>
);

export default ServiceHero;
