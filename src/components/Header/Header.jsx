import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/logos/logo.png';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [forceCloseDropdown, setForceCloseDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Do not hide header on mobile (width ≤ 600px)
      if (window.innerWidth <= 600) {
        setHidden(false);
        return;
      }

      if (window.scrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset header state whenever route changes
  useEffect(() => {
    setNavActive(false);
    setSubmenuOpen(null);
    
    // Force dropdown to close by temporarily disabling pointer events
    setForceCloseDropdown(true);
    
    // Re-enable after navigation completes and hover states have cleared
    const timer = setTimeout(() => {
      setForceCloseDropdown(false);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleLinkClick = (e) => {
    // Trigger force close immediately on link click
    setForceCloseDropdown(true);
    
    // Force blur to remove hover state
    if (e.currentTarget) {
      e.currentTarget.blur();
    }
  };

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen(submenuOpen === menu ? null : menu);
  };

  return (
    <>
      <header className={`header-container ${hidden ? "header-hidden" : ""}`}>
        <Link to="/" className="header-logo" aria-label="Home">
          <div className="logo-circle">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </div>
          <span className="logo-text">SKYPHORIA</span>
        </Link>

        {/* Hamburger menu with animation */}
        <button
          className={`hamburger-menu ${navActive ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
          aria-expanded={navActive}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {navActive && (
          <nav className="mobile-nav-menu">
            <div className="mobile-nav-item">
              <button onClick={() => toggleSubmenu("services")} className="mobile-nav-button">
                SERVICES
                <span className={`dropdown-arrow ${submenuOpen === "services" ? "open" : ""}`}></span>
              </button>
              {submenuOpen === "services" && (
                <div className="mobile-submenu">
                  <Link to="/services/social-media-marketing" onClick={() => setNavActive(false)}>Social Media Marketing</Link>
                  <Link to="/services/seo" onClick={() => setNavActive(false)}>Search Engine Optimization</Link>
                  <Link to="/services/web-development" onClick={() => setNavActive(false)}>Web Development</Link>
                  <Link to="/services/pr-and-link-building" onClick={() => setNavActive(false)}>PR & Link Building Services</Link>
                  <Link to="/services/content-creation" onClick={() => setNavActive(false)}>Content Creation</Link>
                  <Link to="/services/performance-marketing" onClick={() => setNavActive(false)}>Performance Marketing</Link>
                </div>
              )}
            </div>

            <div className="mobile-nav-item">
              <button className="mobile-nav-button" onClick={() => toggleSubmenu("whoWeAre")}>
                WHO WE ARE
                <span className={`dropdown-arrow ${submenuOpen === "whoWeAre" ? "open" : ""}`}></span>
              </button>
              {submenuOpen === "whoWeAre" && (
                <div className="mobile-submenu">
                  <Link to="/about-us" onClick={() => setNavActive(false)}>About Us</Link>
                  <Link to="/blog" onClick={() => setNavActive(false)}>Blog</Link>
                </div>
              )}
            </div>

            <div className="mobile-nav-item">
              <button className="mobile-nav-button" onClick={() => toggleSubmenu("work")}>
                WORK
                <span className={`dropdown-arrow ${submenuOpen === "work" ? "open" : ""}`}></span>
              </button>
              {submenuOpen === "work" && (
                <div className="mobile-submenu">
                  <Link to="/success-stories" onClick={() => setNavActive(false)}>Success Stories</Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setNavActive(false)}>CONTACT</Link>
          </nav>
        )}

        {/*Header For Desktop*/}
        <nav className={`header-nav ${navActive ? "active" : ""} ${forceCloseDropdown ? "force-close-dropdowns" : ""}`}>
          <div className="nav-item">
            <Link to="/services" className="nav-link" onClick={handleLinkClick}>
              SERVICES
            </Link>
            <div className="dropdown-menu marketing-dropdown">
              <div className="dropdown-columns">
                <div className="dropdown-col">
                  <Link
                    to="/services/pr-and-link-building"
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    <span className="icon">
                      <i className="fas fa-search"></i>
                    </span>
                    PR & Link Building Services
                  </Link>
                  <Link 
                    to="/services/seo"
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    <span className="icon">
                      <i className="fas fa-bullseye"></i>
                    </span>
                    Search Engine Optimization
                  </Link>
                  <Link
                    to="/services/web-development"
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    <span className="icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                    Web Development
                  </Link>
                </div>
                <div className="divider"></div>
                <div className="dropdown-col">
                  <Link 
                    to="/services/social-media-marketing"
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    <span className="icon">
                      <i className="fas fa-comments"></i>
                    </span>
                    Social Media Marketing
                  </Link>
                  <Link
                    to="/services/content-creation"
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    <span className="icon">
                      <i className="fas fa-user-friends"></i>
                    </span>
                    Content Creation
                  </Link>
                  <Link
                    to="/services/performance-marketing"
                    className="dropdown-link"
                    onClick={handleLinkClick}
                  >
                    <span className="icon">
                      <i className="fas fa-chart-line"></i>
                    </span>
                    Performance Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>
              WHO WE ARE
            </Link>
            <div className="dropdown-menu">
              <Link 
                to="/about-us"
                className="dropdown-link"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="dropdown-link"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/success-stories" className="nav-link" onClick={handleLinkClick}>
              WORK
            </Link>
            <div className="dropdown-menu">
              <Link 
                to="/success-stories"
                className="dropdown-link"
                onClick={handleLinkClick}
              >
                Success Stories
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
              CONTACT
            </Link>
          </div>
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="cta-btn">
            FREE AUDIT <span className="arrow">→</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;