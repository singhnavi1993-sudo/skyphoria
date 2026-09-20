import React from "react";
import "./SuccessHero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "../../assets/home/Stats3.webp"; // Actual image path
import Adobe from "../../assets/logos/adobe-logo.png";
import AllianceVirtualOffices from "../../assets/logos/alliance-virtual-offices-logo-t.png";
import CanvaLogo from "../../assets/logos/Canva-Logo.webp";
import Cyberghostvpn from "../../assets/home/crop.png";
import Eldrado from "../../assets/home/images.png";
import Expressvpn from "../../assets/home/Invoice DOM OCT 19-1-1_page.png";
import Goproxy from "../../assets/logos/logo-1024x255.png";
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
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 3 }
    }
  ]
};



const SuccessHero = () => (
  <section className="success-hero">
    <div className="success-hero__row">
      <div className="success-hero__content">
        <span className="success-hero__subtitle">SUCCESS STORIES</span>
        <h1 className="success-hero__title">
          See What Our Clients Have Actually Achieved
        </h1>
        <p className="success-hero__desc">
          At Skyphoria Digital, we handle the technical heavy lifting so your team can stay focused on what matters most — converting. Our performance marketing services consistently bring in more qualified leads and meaningful revenue growth for the brands we work with.
        </p>
      </div>
      <div className="success-hero__imagewrap">
        <img src={heroImage} alt="Success Story" />
      </div>
    </div>
      {/* Clients Section */}
      <div className="clients-section">
        <Slider {...sliderSettings} className="clients-logos-slider">
          {clientLogos.map((logo, i) => (
            <div key={i} className="client-logo-slide">
              <img src={logo.src} alt={logo.alt} className="client-logo-img" />
            </div>
          ))}
        </Slider>
      </div>
        {/* Curved Divider */}
    <div className="success-hero__divider">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 
            H520 
            C600 30 640 10 720 10 
            C800 10 840 30 920 30 
            H1440"
          stroke="#0e1111"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
      {/* Paragraph Section Below Divider */}
    <div className="success-hero__paragraph">
      <p>
        Whether you need SEO services for business growth, PPC, web design, or social media marketing services, we've got you covered. Browse our case studies below to see how our data-driven marketing strategies have helped brands across industries grow organic traffic, win new customers, and build lasting online visibility.
      </p>
    </div>
  </section>

);

export default SuccessHero;


