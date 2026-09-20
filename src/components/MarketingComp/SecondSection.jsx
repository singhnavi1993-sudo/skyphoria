// SecondSection.jsx
import './SecondSection.css';
import SeoIconImg from '../../assets/services/searchengine.webp';
import cc from '../../assets/services/contentcreation.webp';
import sm from '../../assets/services/socialmedia.webp';
import prandlink from '../../assets/services/prandlinkbuid.webp';
import pm from '../../assets/services/permarket.webp';
import web from '../../assets/services/webdev.webp';


// You can substitute these with <FontAwesomeIcon /> or your preferred icon components.
const services = [
  {
    icon: prandlink,
    title: 'Digital PR & Backlinks',
    desc: 'We reach out to the right publications, blogs, and media platforms to get your brand featured where it matters. This builds your online authority steadily over time, improves your search rankings, and brings in qualified referral traffic that converts.',
    link: '/services/pr-and-link-building',
  },
  {
    icon: SeoIconImg,
    title: 'Technical SEO Services',
    desc: 'Our SEO services go beyond keywords. We dig into technical SEO, keyword intent, site architecture, and content strategy to make sure your brand shows up at the top when people are actively searching for what you offer.',
    link: '/services/seo',
  },
  {
    icon: pm,
    title: 'ROI-Driven Performance Marketing',
    desc: 'Every campaign we run is built around your ROI. Our performance marketing services use granular data to place your ads exactly where your most profitable customers are. As a full-service PPC agency, we manage campaigns on Google, Meta, LinkedIn, and beyond.',
    link: '/services/performance-marketing',
  },
  {
    icon: web,
    title: 'Custom Web Development',
    desc: 'Your website is your best salesperson. We build fast, scalable, beautifully designed websites that turn visitors into customers. From landing pages to full e-commerce builds, every project is engineered for conversion rate optimization and long-term growth.',
    link: '/services/web-development',
  },
  {
    icon: sm,
    title: 'Social Media Strategy',
    desc: 'We don’t just post and hope for the best. Our social media marketing services are rooted in audience research and analytical community management, turning passive scrollers into loyal customers through targeted content and social media advertising.',
    link: '/services/social-media-marketing',
  },
  {
    icon: cc,
    title: 'Content Marketing',
    desc: 'Great content builds trust, drives traffic, and positions your brand as the go-to expert in your space. Our team creates SEO-optimized blogs, videos, infographics, and platform-specific creatives, backed by content strategy services that speak directly to your audience and support lead generation.',
    link: '/services/content-creation',
  },
];

export default function SecondSection() {
  return (
    <section className="market-section-bg">
      <div className="market-section-container">
        <h2 className="market-section-title">
          Your Audience Defines Our Strategic Direction
        </h2>
        <p className="market-section-subtitle">
          We believe in data, not assumptions. We start by identifying who your customers are, where they spend time online, and what actually makes them convert. That intelligence drives every campaign we run and every rupee of your budget we spend.
        </p>
        <div className="market-grid">
          {services.map((service, idx) => (
            <div className="market-card" key={idx}>
              <div className="market-card-icon">
                <img src={service.icon} alt={service.title} className="service-icon" />
              </div>
              <h3 className="market-card-title">{service.title}</h3>
              <p className="market-card-desc">{service.desc}</p>
              <a className="market-card-link" href={service.link}>LEARN MORE</a>
            </div>
          ))}
        </div>
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
      </div>
    </section>
  );
}
