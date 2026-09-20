import React, { useState } from 'react';
import './WhatWeDoSection.css';

const cards = [
  {
    title: 'Search Engine Optimization',
    description:
      'Our SEO services focus on driving sustainable organic traffic. Through technical SEO audits, link building, and local search optimization, we help improve your search engine rankings and drive high-intent conversions.',
    objectives: [
      'Keyword and competitor research',
      'On-page SEO optimization, including titles, meta descriptions, content, and headings',
      'Technical SEO improvements, such as site speed, crawlability, and structured data',
      'Strategic link building to improve domain authority',
      'Local SEO optimization to help you rank in location-based searches',
    ],
    stat: '56%',
    statDesc:
      'Of all website traffic worldwide comes from organic search',
    learnMoreLink: '/services/seo',
  },
  {
    title: (
    <>
      Performance<br />Marketing
    </>
  ),
    description:
      'As a performance marketing agency, our primary focus is on ROI-driven digital marketing. We combine data analytics, strategic planning, and execution to create conversion-focused campaigns. Our performance marketing services focus on lead generation and customer acquisition by leveraging platforms like Google Ads and Meta Ads, along with continuous campaign optimization.',
    objectives: [
      'Paid search and display advertising, including Google Ads and Bing Ads management',
      'Data-driven social media paid campaigns',
      'Affiliate and influencer marketing to expand reach',
      'Conversion rate optimization (CRO) to improve landing page performance',
      'Retargeting and remarketing strategies to increase customer acquisition',
    ],
    stat: '82%',
    statDesc:
      'Of clicks on Search Ads are more likely to buy, making for better leads',
    learnMoreLink: '/services/performance-marketing',
  },
  {
    title: "Content Marketing",
    description:
      'From SEO-optimized blogs to engaging social media content, we deliver strategic content marketing services designed to elevate your brand visibility and drive measurable results. Our team blends creativity with innovative marketing strategies to ensure every piece of content supports organic traffic growth, audience engagement, and conversions.',
    objectives: [
      'SEO focused blog writing services',
      'Professional video production and editing that attracts engagement',
      'Social media content creation and platform-specific creatives',
      'Email marketing campaigns that support growth',
      'Infographics and visual content for impactful brand storytelling',
    ],
    stat: '70%',
    statDesc:
      'Of people prefer learning about a brand through articles rather than advertisements',
    learnMoreLink: '/services/content-creation',
  },
  {
        title: (
    <>
      Social Media<br />Marketing
    </>
  ),
    description:
      'Our social media marketing services are built to combine data-driven strategy, creative content planning, and paid social media advertising to boost brand awareness, increase audience engagement, and drive measurable business growth.',
    objectives: [
      'Platform strategy and channel selection based on your business goals',
      'In-depth audience research and advanced targeting strategies',
      'Content creation, content calendar planning, and scheduling',
      'Paid social media campaigns across Facebook, Instagram, LinkedIn, and TikTok',
      'Community management and engagement rate optimization',
    ],
    stat: '54%',
    statDesc:
      'Of social media users research products on social platforms before making a purchase',
    learnMoreLink: '/services/social-media-marketing'
  },
];

function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="wwd-section">
      <div className="wwd-head">
        <div>
          <div className="wwd-overline">WHAT WE DO</div>
          <h2 className="wwd-title">
            Digital Marketing Services Built
            <br />
            For Real Outcomes
          </h2>
        </div>

        <div className="wwd-rightdesc">
          <div>
            At Skyphoria Digital, we help brands attract the right audience, convert visitors into customers, and grow revenue without the guesswork. From SEO and paid ads to content and social media, we build strategies around your goals, not templates.
          </div>
          <a href="/services" className="wwd-link">
            VIEW OUR SERVICES
          </a>
        </div>
      </div>

      <div className="wwd-main-card">
        {/* LEFT SIDEBAR WITH INLINE MOBILE PANELS */}
        <div className="wwd-leftpanel">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div
                className={`wwd-item${activeIndex === index ? ' wwd-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{card.title}</span>

                {/* Desktop arrow (kept same behavior) */}
                {activeIndex === index && (
                  <span className="wwd-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                )}
              </div>

              {/* INLINE MOBILE RIGHT PANEL */}
              {activeIndex === index && (
                <div className="wwd-mobile-panel">
                  <div className="wwd-detailstitle">{card.description}</div>

                  <ul className="wwd-objectives-list">
                    {card.objectives.map((obj, i) => (
                      <li key={i}>
                        <span className="tick-circle">
                          <svg
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            fill="none"
                          >
                            <circle cx="12" cy="12" r="12" fill="#7b6aff" />
                            <path
                              d="M7 12.5l3 3 6-6"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {obj}
                      </li>
                    ))}
                  </ul>

                  <div className="wwd-stats">
                    <div className="wwd-stats-circle">{card.stat}</div>
                    <div className="wwd-stats-caption">{card.statDesc}</div>
                  </div>

                  <a href={card.learnMoreLink || "#"} className="wwd-learnlink" target="_blank" rel="noopener noreferrer">
                    LEARN MORE
                  </a>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* DESKTOP RIGHT PANEL (unchanged) */}
        <div className="wwd-rightpanel wwd-desktop-panel">
          <div className="wwd-details">
            <div className="wwd-detailstitle">
              {cards[activeIndex].description}
            </div>

            <ul className="wwd-objectives-list">
              {cards[activeIndex].objectives.map((obj, i) => (
                <li key={i}>
                  <span className="tick-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#7b6aff" />
                      <path
                        d="M7 12.5l3 3 6-6"
                        stroke="#fff"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {obj}
                </li>
              ))}
            </ul>

            <a href={cards[activeIndex].learnMoreLink || "#"} className="wwd-learnlink" target="_blank" rel="noopener noreferrer">
              LEARN MORE
            </a>
          </div>

          <div className="wwd-stats">
            <div className="wwd-stats-circle">{cards[activeIndex].stat}</div>
            <div className="wwd-stats-caption">
              {cards[activeIndex].statDesc}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
