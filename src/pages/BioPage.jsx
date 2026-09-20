import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BioPage.css';

// Import logos
import logoImg from '../assets/logos/logo.png';
import canvaLogo from '../assets/logos/Canva-Logo.webp';
import nordVpnLogo from '../assets/logos/Logo-NordVPN.png';
import surfsharkLogo from '../assets/logos/Surfshark_logo.svg.png';
import wixLogo from '../assets/logos/Wix.com_Logo.png';
import maxCashLogo from '../assets/logos/MaxCash_logo.webp';
import shopifyLogo from '../assets/logos/shopify.svg';
import tiktokLogo from '../assets/logos/tiktok.svg';
import googlePartnerLogo from '../assets/logos/google-partner.svg';
import metaPartnerLogo from '../assets/logos/meta-partner.svg';
import ikeaLogo from '../assets/home/ikea.webp';
import zudioLogo from '../assets/home/zudio.webp';

// Fix Leaflet default marker icons for React bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const clientsData = [
  { id: 1, name: 'Canva', logo: canvaLogo },
  { id: 2, name: 'NordVPN', logo: nordVpnLogo },
  { id: 3, name: 'Surfshark', logo: surfsharkLogo },
  { id: 4, name: 'Shopify', logo: shopifyLogo },
  { id: 5, name: 'Wix', logo: wixLogo },
  { id: 6, name: 'MaxCash', logo: maxCashLogo },
  { id: 7, name: 'IKEA', logo: ikeaLogo },
  { id: 8, name: 'Zudio', logo: zudioLogo },
  { id: 9, name: 'TikTok', logo: tiktokLogo },
  { id: 10, name: 'Google Partner', logo: googlePartnerLogo },
  { id: 11, name: 'Meta Partner', logo: metaPartnerLogo },
];

const workCategories = [
  {
    id: 1,
    title: 'SEO',
    slug: 'seo',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <polyline points="11 8 11 11 14 11"></polyline>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Social Media',
    slug: 'social-media-marketing',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Web Dev',
    slug: 'web-development',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Content Creation',
    slug: 'content-creation',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Performance Mkt',
    slug: 'performance-marketing',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: 6,
    title: 'PR & Outreach',
    slug: 'pr-and-link-building',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    )
  }
];

export default function BioPage() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const clientsSliderRef = useRef(null);
  const workSliderRef = useRef(null);

  const coords = [32.69560904963914, 74.87433818209335];
  const googleMapsUrl = `https://www.google.com/maps?q=${coords[0]},${coords[1]}`;

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      if (mapContainerRef.current._leaflet_id) {
        mapContainerRef.current._leaflet_id = null;
      }
      try {
        // Initialize Leaflet Map
        const map = L.map(mapContainerRef.current, {
          center: coords,
          zoom: 15,
          zoomControl: false,
          attributionControl: false,
          scrollWheelZoom: false,
          dragging: true,
        });

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);

        // Custom DivIcon for red pin + "SEE YOUR LOCATION" pill badge above
        const customMarkerIcon = L.divIcon({
          className: 'custom-map-marker-container',
          html: `
            <div class="map-pin-badge-wrapper">
              <div class="see-location-badge">
                <svg class="badge-pin-icon" viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>SEE YOUR LOCATION</span>
              </div>
              <div class="map-red-pushpin">
                <div class="pushpin-head"></div>
                <div class="pushpin-stem"></div>
              </div>
            </div>
          `,
          iconSize: [160, 65],
          iconAnchor: [80, 60],
        });

        L.marker(coords, { icon: customMarkerIcon }).addTo(map);
        mapInstanceRef.current = map;
      } catch (err) {
        console.error("Leaflet map initialization caught:", err);
      }
    }

    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          // Ignore cleanup error
        }
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Section 1 Client Slider Settings: Responsive full width slider (4 on laptop, 3 on tablet, 2 on mobile)
  const clientSliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  // Section 2 Work Slider Settings: Centered 3/5 circle slider
  const workSliderSettings = {
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 }
      }
    ]
  };

  return (
    <div className="bio-page-container full-page-mode">
      {/* 1. SEO & Indexing: noindex, nofollow */}
      <Helmet>
        <title>SKYPHORIA DIGITAL PVT LTD. | Link in Bio</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="google-extended" content="noindex, nofollow, none" />
        <meta name="GoogleOther" content="noindex, nofollow, none" />
        <meta name="GPTBot" content="noindex, nofollow, none" />
        <meta name="ChatGPT-User" content="noindex, nofollow, none" />
        <meta name="ClaudeBot" content="noindex, nofollow, none" />
        <meta name="Claude-Web" content="noindex, nofollow, none" />
        <meta name="PerplexityBot" content="noindex, nofollow, none" />
        <meta name="CCBot" content="noindex, nofollow, none" />
        <meta name="Bytespider" content="noindex, nofollow, none" />
      </Helmet>

      {/* 2. Top Interactive Map Header (Full Width) */}
      <div className="bio-map-header">
        <div ref={mapContainerRef} className="leaflet-map-wrapper"></div>
        {/* Arched SVG curved overlay at bottom of map */}
        <div className="map-arch-curve">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* 3. Profile/Logo Badge overlapping the arch */}
        <div className="bio-logo-badge">
          <div className="logo-badge-inner">
            <img src={logoImg} alt="SKYPHORIA Digital" className="logo-badge-img" />
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="bio-content-body">
        {/* 4. Main Header & Bio Text */}
        <div className="bio-header-info">
          <h1 className="bio-company-title">SKYPHORIA DIGITAL PVT LTD.</h1>
          <p className="bio-description">
            We build strategic digital solutions that strengthen brands and accelerate growth. From creative communication to social media, every initiative is driven by purpose.
          </p>
        </div>

        {/* 5. Social Icon Bar */}
        <div className="bio-social-bar">
          <a href="https://www.facebook.com/skyphoriadigital" target="_blank" rel="noopener noreferrer" className="social-bar-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
          </a>
          <a href="https://wa.me/917487433818" target="_blank" rel="noopener noreferrer" className="social-bar-icon" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 2.019.538 3.911 1.473 5.55L2 22l4.605-1.428C8.196 21.492 10.043 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.777 0-3.447-.487-4.887-1.332l-.35-.205-2.735.848.868-2.651-.226-.358C3.784 14.82 3.2 13.468 3.2 12 3.2 7.147 7.147 3.2 12 3.2c4.853 0 8.8 3.947 8.8 8.8 0 4.853-3.947 8.8-8.8 8.8z"/>
            </svg>
          </a>
          <a href="https://skyphoriadigital.com" target="_blank" rel="noopener noreferrer" className="social-bar-icon" aria-label="Website">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/skyphoriadigital" target="_blank" rel="noopener noreferrer" className="social-bar-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/skyphoria-digital/" target="_blank" rel="noopener noreferrer" className="social-bar-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        </div>

        {/* 6. Action Buttons Section */}
        <div className="bio-action-section">
          <h2 className="bio-action-headline">Lets Connect &amp; Work together!</h2>

          <div className="bio-buttons-grid">
            {/* Row 1: Instagram, LinkedIn, WhatsApp */}
            <div className="buttons-row row-three">
              <a href="https://www.instagram.com/skyphoriadigital" target="_blank" rel="noopener noreferrer" className="bio-btn">
                <span className="btn-icon-wrapper instagram-wrapper">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <span>INSTAGRAM</span>
              </a>

              <a href="https://www.linkedin.com/company/skyphoria-digital/" target="_blank" rel="noopener noreferrer" className="bio-btn">
                <span className="btn-icon-wrapper linkedin-wrapper">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </span>
                <span>LINKEDIN</span>
              </a>

              <a href="https://wa.me/917487433818" target="_blank" rel="noopener noreferrer" className="bio-btn">
                <span className="btn-icon-wrapper whatsapp-wrapper">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.019.538 3.911 1.473 5.55L2 22l4.605-1.428C8.196 21.492 10.043 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.777 0-3.447-.487-4.887-1.332l-.35-.205-2.735.848.868-2.651-.226-.358C3.784 14.82 3.2 13.468 3.2 12 3.2 7.147 7.147 3.2 12 3.2c4.853 0 8.8 3.947 8.8 8.8 0 4.853-3.947 8.8-8.8 8.8z"/>
                  </svg>
                </span>
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Row 2: Facebook, Website */}
            <div className="buttons-row row-two">
              <a href="https://www.facebook.com/skyphoriadigital" target="_blank" rel="noopener noreferrer" className="bio-btn">
                <span className="btn-icon-wrapper facebook-wrapper">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </span>
                <span>FACEBOOK</span>
              </a>

              <a href="https://skyphoriadigital.com" target="_blank" rel="noopener noreferrer" className="bio-btn">
                <span className="btn-icon-wrapper website-wrapper">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </span>
                <span>WEBSITE</span>
              </a>
            </div>

            {/* Row 3: Location Pin button */}
            <div className="buttons-row row-one">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bio-btn bio-btn-location">
                <span className="btn-icon-wrapper location-wrapper">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <span>LOCATION: VISIT US TODAY</span>
              </a>
            </div>
          </div>
        </div>

        {/* 7. Section 1: "Clients we have worked with" */}
        <div className="bio-section clients-section">
          <div className="section-header-row">
            <button className="slider-arrow left" onClick={() => clientsSliderRef.current?.slickPrev()} aria-label="Previous Clients">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <h3 className="section-title white-text">Clients we have worked with</h3>
            <button className="slider-arrow right" onClick={() => clientsSliderRef.current?.slickNext()} aria-label="Next Clients">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="clients-slider-wrapper">
            <Slider ref={clientsSliderRef} {...clientSliderSettings}>
              {clientsData.map((client) => (
                <div key={client.id} className="client-slide-item">
                  <div className="client-logo-card">
                    <img src={client.logo} alt={client.name} className="client-logo-img" />
                  </div>
                  <span className="client-subtext">Check out our work</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* 8. Section 2: "Check out our work" */}
        <div className="bio-section work-section">
          <h3 className="section-title purple-text center-title">Check out our work</h3>

          <div className="work-slider-row-container">
            <button className="slider-arrow left purple-arrow" onClick={() => workSliderRef.current?.slickPrev()} aria-label="Previous Work">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.8">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="work-slider-wrapper">
              <Slider ref={workSliderRef} {...workSliderSettings}>
                {workCategories.map((item) => (
                  <div key={item.id} className="work-story-slide">
                    <Link to={`/services/${item.slug}`} className="work-story-link">
                      <div className="story-circle">
                        {item.icon}
                      </div>
                      <span className="story-label">{item.title}</span>
                      <span className="story-subtext">Check out our work</span>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>

            <button className="slider-arrow right purple-arrow" onClick={() => workSliderRef.current?.slickNext()} aria-label="Next Work">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.8">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
