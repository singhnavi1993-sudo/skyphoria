import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "./MarketingSolution.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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


const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase:"linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3}
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
      breakpoint: 600,
      settings: { slidesToShow: 3}
    }
  ]
};



const MarketingSection = () => {
  return (
    <section className="marketing-container">
      <div className="marketing-content">
        {/* Left Column */}
        <div className="marketing-left">
          <h5 className="marketing-subtitle">Our Marketing Solutions</h5>
          <h1 className="marketing-title">
            Why Our Integrated Digital Marketing Gets Better Results
          </h1>
        </div>
        {/* Right Column */}
        <div className="marketing-right">
          <p className="marketing-description">
            Years in the industry have taught us that no single channel wins alone. SEO, paid ads, content, and social media all perform better when they’re working together. That’s why we offer integrated online marketing solutions so your message stays consistent, your brand stays visible, and your growth stays on track.
          </p>
          <Link to="/services" className="marketing-small-heading">Explore Our Full Range of Services</Link>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <h4 className="clients-title">Our Clients</h4>
        <Slider {...sliderSettings} className="clients-logos-slider">
          {clientLogos.map((logo, i) => (
            <div key={i} className="client-logo-slide">
              <img src={logo.src} alt={logo.alt} className="client-logo-img" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="clients-section-mobile">
        <h4 className="clients-title1">Our Clients</h4>
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
};

export default MarketingSection;
