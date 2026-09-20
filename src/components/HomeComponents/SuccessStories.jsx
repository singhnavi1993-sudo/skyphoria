import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SuccessStories.css";
import { Link } from 'react-router-dom';
// Brand logos - UNCHANGED
import Adobe from "../../assets/logos/adobe-logo.png";
import AllianceVirtualOffices from "../../assets/logos/alliance-virtual-offices-logo-t.png";
import CanvaLogo from "../../assets/logos/Canva-Logo.webp";
import Cyberghostvpn from "../../assets/home/crop.png";
import Eldrado from "../../assets/home/images.png";
import Expressvpn from "../../assets/home/Invoice DOM OCT 19-1-1_page.png";
import Goproxy from "../../assets/home/NobleHorizon.webp";
import Invideo from "../../assets/logos/Logo-NordVPN.png";
import Maxcash from "../../assets/logos/MaxCash_logo.webp";
import Nordvpn from "../../assets/icons/social-logo.webp";
import Surfshark from "../../assets/logos/Surfshark_logo.svg.png";
import Toolshero from "../../assets/logos/toolshero-logo-big-2020-e1608653392912.png";
import TradingViewLogo from "../../assets/logos/tradingviewlogo-freelogovectors.net_.png";
import Wi from "../../assets/logos/Wix.com_Logo.png";

const clientLogos = [
  { src: Adobe, alt: "Adobe" },
  { src: AllianceVirtualOffices, alt: "Alliance Virtual Offices" },
  { src: CanvaLogo, alt: "Canva" },
  { src: Cyberghostvpn, alt: "CyberGhostVPN" },
  { src: Eldrado, alt: "Eldrado" },
  { src: Expressvpn, alt: "ExpressVPN" },
  { src: Goproxy, alt: "GoProxy" },
  { src: Invideo, alt: "InVideo" },
  { src: Maxcash, alt: "MaxCash" },
  { src: Nordvpn, alt: "NordVPN" },
  { src: Surfshark, alt: "Surfshark" },
  { src: Toolshero, alt: "ToolsHero" },
  { src: TradingViewLogo, alt: "TradingView" },
  { src: Wi, alt: "Wi" },
];

// Your actual WordPress API endpoint
const API_URL = "https://admin.skyphoriadigital.com/wp-json/wp/v2/success-stories?per_page=4&_embed";

const sliderSettingsLogos = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase:"linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2 }
    }
  ]
};

const sliderSettingsLogosMobile = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase:"linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2 }
    }
  ]
};

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1025,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const sliderSettingsmobile = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const tabletSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerMode: false,
  variableWidth: false,
  arrows: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

export default function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(data => {
        setStories(Array.isArray(data) ? data : []);
        setError(false);
      })
      .catch(() => {
        setStories([]);
        setError(true);
      });
  }, []);

  // Helper to safely access ACF fields with your new field names
  function getField(field, story) {
    if (story && story.acf && Object.prototype.hasOwnProperty.call(story.acf, field)) {
      return story.acf[field];
    }
    return "";
  }

  // Helper for tags/categories (array of strings)
  function getTags(story) {
    const value = getField('tags', story);
    if (Array.isArray(value)) return value;
    if (typeof value === "string" && value) {
      // Split comma-separated string into array and trim spaces
      return value.split(',').map(tag => tag.trim());
    }
    return [];
  }

  return (
    <section className="skyphoria-success-section">
      <div className="success-main-row">
        <div className="success-header">
          <span className="success-label">SUCCESS STORIES</span>
          <h2 className="success-title">
            Real Campaigns With Measurable Results
          </h2>
          <p style={{color: "#333a4d", marginBottom: "10px"}}>From engagement to conversions, here's what we've delivered for our clients.</p>
          <Link to="/success-stories" className="success-viewall">
            Explore Our Work
          </Link>
        </div>
        <div className="success-stories-carousel">
          {error ? (
            <div style={{ padding: "16px", color: "#a33" }}>
              Could not load success stories. Please try again later.
            </div>
          ) : (
            <>
              {/* DESKTOP SLIDER - FULLY CLICKABLE */}
              <div className="desktop-slider">
                <Slider {...sliderSettings}>
                  {stories.map((story, idx) => {
                    const image = story?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 'https://via.placeholder.com/700x400?text=No+Image';
                    const brand = story?.title?.rendered || "Unknown";
                    const metric = getField("percentage", story);
                    const result = getField("desc", story);
                    const tags = getTags(story);

                    return (
                      <Link 
                        key={story.id || idx} 
                        to={`/success-story/${story.id}`}
                        className="story-link-wrapper"
                      >
                        <div className="story-card">
                          <div
                            className="story-image"
                            style={{ backgroundImage: `url(${image})` }}
                          >
                            <span className="story-brand">{brand}</span>
                            <div className="story-overlay">
                              <span className="story-metric">{metric}</span>
                              <span className="story-result">{result}</span>
                              <div className="story-divider"></div>
                              <div className="story-categories">
                                {tags.map((tag, i) => (
                                  <span className="story-cat" key={i}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </Slider>
              </div>

              {/* MOBILE SLIDER - FULLY CLICKABLE */}
              <div className="mobile-slider">
                <Slider {...sliderSettingsmobile}>
                  {stories.map((story, idx) => {
                    const image = story?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 'https://via.placeholder.com/700x400?text=No+Image';
                    const brand = story?.title?.rendered || "Unknown";
                    const metric = getField("percentage", story);
                    const result = getField("desc", story);
                    const tags = getTags(story);

                    return (
                      <Link 
                        key={story.id || idx} 
                        to={`/success-story/${story.id}`}
                        className="story-link-wrapper"
                      >
                        <div className="story-card">
                          <div
                            className="story-image"
                            style={{ backgroundImage: `url(${image})` }}
                          >
                            <span className="story-brand">{brand}</span>
                            <div className="story-overlay">
                              <span className="story-metric">{metric}</span>
                              <span className="story-result">{result}</span>
                              <div className="story-divider"></div>
                              <div className="story-categories">
                                {tags.map((tag, i) => (
                                  <span className="story-cat" key={i}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </Slider>
              </div>

              {/* TABLET SLIDER - FULLY CLICKABLE */}
              <div className="tablet-slider">
                <Slider {...tabletSettings}>
                  {stories.map((story, idx) => {
                    const image = story?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 'https://via.placeholder.com/700x400?text=No+Image';
                    const brand = story?.title?.rendered || "Unknown";
                    const metric = getField("percentage", story);
                    const result = getField("desc", story);
                    const tags = getTags(story);

                    return (
                      <Link 
                        key={story.id || idx} 
                        to={`/success-story/${story.id}`}
                        className="story-link-wrapper"
                      >
                        <div className="story-card">
                          <div
                            className="story-image"
                            style={{ backgroundImage: `url(${image})` }}
                          >
                            <span className="story-brand">{brand}</span>
                            <div className="story-overlay">
                              <span className="story-metric">{metric}</span>
                              <span className="story-result">{result}</span>
                              <div className="story-divider"></div>
                              <div className="story-categories">
                                {tags.map((tag, i) => (
                                  <span className="story-cat" key={i}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </Slider>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* BRANDS STRIP - UNCHANGED */}
      <div className="brands-strip">
        <div className="brands-title">The best brands choose Skyphoria</div>
        <Slider {...sliderSettingsLogos} className="clients-logos-slider">
          {clientLogos.map((logo, i) => (
            <div key={i} className="client-logo-slide">
              <img src={logo.src} alt={logo.alt} className="client-logo-img" />
            </div>
          ))}
        </Slider>
        <Slider {...sliderSettingsLogosMobile} className="clients-logos-sliderMobile">
          {clientLogos.map((logo, i) => (
            <div key={i} className="client-logo-slideMobile">
              <img src={logo.src} alt={logo.alt} className="client-logo-imgMobile" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
  