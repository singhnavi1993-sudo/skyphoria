import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { formatNewlines } from '../../utils/formatText';
import "./WhatYouGet.css";

const WhatYouGet = ({ sectionTitle, sectionDesc, cards }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="paid-box-section">
      <div className="ps-section-header">
        <div className="ps-section-overline">WHAT YOU GET</div>
        <h1 className="ps-section-title">
          {formatNewlines(sectionTitle)}
        </h1>
        <p className="ps-section-desc">{sectionDesc}</p>
      </div>

      <div className="paid-box-main">
        {/* Sidebar with inline mobile panels */}
        <div className="paid-sidebar">
          {cards.map((card, i) => (
            <React.Fragment key={i}>
              <div
                className={`paid-sidebar-item${active === i ? " paid-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span>{`${i + 1}. ${card.title}`}</span>

                {/* Desktop arrow */}
                {active === i && (
                  <span className="paid-arrow">
                    <i>&#8594;</i>
                  </span>
                )}
              </div>

              {/* Inline panel for mobile */}
              {active === i && (
                <div className="paid-rightpanel paid-rightpanel-inline">
                  <div className="paid-title">{card.title}</div>
                  <div className="paid-desc">{card.desc}</div>
                  <Link to="/contact" className="paid-cta-btn">
                    {card.buttonText || "GET A FREE AUDIT"} <span className="paid-cta-arrow">&#8594;</span>
                  </Link>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop-only right panel */}
        <div className="paid-rightpanel paid-rightpanel-desktop">
          <div className="paid-title">{cards[active].title}</div>
          <div className="paid-desc">{cards[active].desc}</div>
          <Link to='/contact' className="paid-cta-btn">
            {cards[active].buttonText || "GET A FREE AUDIT"} <span className="paid-cta-arrow">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
