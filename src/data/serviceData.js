// Service page data — all content for 6 services in one place.
// Each service object maps to a URL slug and contains
// all section-specific text, images, and data.

// Hero images
import seo1 from '../assets/services/seo1.webp';
import sm1 from '../assets/services/sm1.webp';
import wd1 from '../assets/services/wd1.webp';
import cc1 from '../assets/services/cc1.webp';
import pm1 from '../assets/services/pm1.webp';
import pr1 from '../assets/services/pr1.webp';

// WhySection images (team + stat card)
import seo2 from '../assets/services/seo2.webp';
import seo3 from '../assets/services/seo3.webp';
import sm2 from '../assets/services/sm2.webp';
import sm3 from '../assets/services/sm3.webp';
import wd2 from '../assets/services/wd2.webp';
import wd3 from '../assets/services/wd3.webp';
import cc2 from '../assets/services/cc2.webp';
import cc3 from '../assets/services/cc3.webp';
import pm2 from '../assets/services/pm2.webp';
import pm3 from '../assets/services/pm3.webp';
import pr2 from '../assets/services/pr2.webp';
import pr3 from '../assets/services/pr3.webp';

const services = [
  // ─────────────────────────────────────────────
  // 1. SEARCH ENGINE OPTIMIZATION
  // ─────────────────────────────────────────────
  {
    slug: 'seo',
    metaTitle: 'SEO Services That Turn Organic Traffic Into Revenue',
    metaDescription: 'Looking for SEO services that actually deliver? Skyphoria combines technical audits, on-page optimization, link building, and local SEO for long-term organic growth.',
    hero: {
      subtitle: 'MARKETING SERVICES',
      title: 'Search Engine Optimization Services',
      description:
        "Your competitors are ranking. Your potential customers are searching. If your website isn't showing up, you're leaving real revenue on the table. At Skyphoria Digital, our SEO services are built to close that gap — through strategy, technical precision, and content that search engines and real people both value.",
      heroImage: seo1,
    },
    roi: {
      title: 'SEO That Puts Your Brand in Front of the Right People',
      description:
        "We don't chase shortcuts or promise overnight results. Our SEO agency approach is rooted in understanding your audience, your market, and what it genuinely takes to earn your place at the top. Here's what our SEO services cover:",
      features: [
        'Keyword and competitor research',
        'On-page SEO optimization, including titles, meta descriptions, content, and headings',
        'Technical SEO services, including site speed, crawlability, and structured data',
        'Link building and authority strategies',
        'Local SEO services for location-based search visibility',
      ],
    },
    whySection: {
      sectionTitle: 'How We Drive Organic \nTraffic Growth',
      teamImage: seo2,
      contentTitle: 'Turning Rankings Into Real Conversions',
      contentText:
        "Getting to page one is only half the job. We optimize for search intent at every stage, making sure the traffic we bring in is the kind that actually converts. From page structure and internal linking to content relevance and user experience, every decision is made with your bottom line in mind.",
      proTitle: 'Experienced SEO Professionals at Your Service',
      proDesc:
        "At Skyphoria Digital, our team has worked across local and global campaigns, B2B and B2C markets, and competitive industries where vague tactics don't cut it. We bring strategic depth and hands-on execution together, so your site doesn't just rank — it performs.",
      statCardImage: seo3,
    },
    whatYouGet: {
      sectionTitle: 'Comprehensive SEO Services \nfrom Skyphoria',
      sectionDesc:
        "Every business we work with gets a full-service SEO engagement, not a checklist. Here's what's included:",
      cards: [
        {
          title: 'SEO Audit and Strategy',
          desc: 'We start by examining your website from the ground up — crawlability, content gaps, backlink profile, and competitive landscape. What we find shapes a clear, prioritised roadmap tailored to your goals and your market.',
          buttonText: 'GET A FREE SEO AUDIT',
        },
        {
          title: 'On-Page SEO Optimization',
          desc: 'We refine the elements that search engines weigh most heavily: title tags, meta descriptions, heading structure, image alt text, internal linking, and keyword placement. Every page is built to signal relevance clearly and rank for the right searches.',
          buttonText: "LET'S OPTIMISE YOUR PAGES",
        },
        {
          title: 'Technical SEO Services',
          desc: 'We dig into the infrastructure of your site — fixing crawl errors, improving page speed, implementing structured data, ensuring mobile responsiveness, and resolving duplicate content issues. A technically sound website is the foundation on which everything else is built.',
          buttonText: "FIX WHAT'S HOLDING YOUR SITE BACK",
        },
        {
          title: 'Local SEO Services and Link Building',
          desc: 'For businesses targeting specific locations, we optimise your Google Business Profile, local citations, and geo-targeted content to help you rank where it matters most. Alongside that, we build high-quality backlinks through editorial outreach and partnerships that strengthen your domain authority over time.',
          buttonText: 'GROW YOUR LOCAL PRESENCE',
        },
      ],
    },
    whyEffective: {
      sectionTitle: "Why Skyphoria's SEO Services \nWork",
      items: [
        {
          title: 'Intent-Led Keyword Strategy',
          desc: "We don't just find keywords with high search volume. We identify the terms your most valuable customers are actually using, and build content and optimisation strategies around what they need at each stage of the buying journey.",
        },
        {
          title: 'Data-Driven Marketing Strategies',
          desc: "Every recommendation we make is backed by analytics. Every result we deliver is reported clearly, with plain-language summaries that tell you exactly what's working, what's improving, and where we're headed next.",
        },
        {
          title: 'Long-Term Traffic Growth',
          desc: "SEO compounds over time. The authority we build, the content we optimise, and the links we earn continue to deliver returns well beyond the initial investment, making it one of the highest-value digital marketing services available.",
        },
      ],
    },
    numbersProof: {
      sectionTitle: 'What Strong SEO Can Do \nfor Your Brand',
      stats: [
        {
          value: '53%',
          text: "of all website traffic comes from organic search, making SEO the single biggest driver of online visibility for most businesses.",
        },
        {
          value: '75%',
          text: "of users never scroll past the first page of search results, which means ranking on page one isn't a vanity metric — it's where real customers find you.",
        },
        {
          value: '60%',
          text: "of marketers say SEO content writing and organic search generate better long-term ROI than paid advertising, making it one of the most cost-efficient investments in digital marketing.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 2. SOCIAL MEDIA MARKETING
  // ─────────────────────────────────────────────
  {
    slug: 'social-media-marketing',
    metaTitle: 'Social Media Marketing Services That Go Beyond the Feed',
    metaDescription: "More than just posting, Skyphoria's social media marketing services combine strategy, creative content, paid ads, and community management to drive real growth.",
    hero: {
      subtitle: 'MARKETING SERVICES',
      title: 'Social Media Marketing Services',
      description:
        "Most businesses post consistently and still see little to show for it. At Skyphoria Digital, we provide social media marketing services that go beyond content calendars and follower counts. We build strategies rooted in audience research, platform intelligence, and creative execution that turn your social presence into a genuine business growth channel.",
      heroImage: sm1,
    },
    roi: {
      title: 'Social Media Marketing That Builds Brands and Drives Results',
      description:
        "We take a data-led, creatively driven approach to every platform we manage. Every post, campaign, and interaction is purposeful, designed to grow your audience, deepen engagement, and move people closer to a conversion. Here's what our social media management services cover:",
      features: [
        'Platform strategy and channel selection',
        'Audience research and advanced targeting',
        'Content creation and scheduling',
        'Paid social media advertising across Facebook, Instagram, LinkedIn, and TikTok',
        'Community management and engagement',
      ],
    },
    whySection: {
      sectionTitle: 'How We Maximise Your Social \nMedia Impact',
      teamImage: sm2,
      contentTitle: 'Creative Content That Sparks Real Engagement',
      contentText:
        "Effective social media is about creating content that resonates, not just content that fills a feed. We develop platform-specific creatives, captions, and campaigns that reflect your brand voice, capture attention, and generate the kind of engagement that builds lasting audience relationships.",
      proTitle: 'Certified Social Media Marketing Experts at Your Service',
      proDesc:
        "Our team combines platform expertise, market research, and analytics to build campaigns that consistently perform. From acting as your Instagram marketing agency to managing LinkedIn thought leadership and TikTok campaigns, we know what works on each platform and how to make it work for your brand specifically.",
      statCardImage: sm3,
    },
    whatYouGet: {
      sectionTitle: 'Our Comprehensive Social Media \nMarketing Services',
      sectionDesc:
        "Partnering with Skyphoria means access to end-to-end social media marketing services, covering strategy, creative execution, paid advertising, and community management.",
      cards: [
        {
          title: 'Social Media Strategy and Channel Planning',
          desc: 'We develop a platform-specific roadmap that defines your content themes, posting cadence, and engagement approach across every channel. Every strategic decision is tied to your business objectives, ensuring consistency and direction across all platforms.',
          buttonText: 'BUILD YOUR SOCIAL STRATEGY',
        },
        {
          title: 'Content Creation and Design',
          desc: 'We craft content that embodies your brand voice across every format, from static graphics and carousels to reels, stories, and short-form video. Every piece is designed to capture attention, communicate clearly, and drive meaningful engagement.',
          buttonText: 'START CREATING CONTENT WITH US',
        },
        {
          title: 'Paid Social Media Advertising',
          desc: 'We plan, launch, and manage paid social media advertising campaigns across Facebook, Instagram, LinkedIn, and TikTok. Through precise audience targeting, creative testing, and continuous bid optimisation, we make sure your ad spend reaches the right people and delivers measurable returns.',
          buttonText: 'LAUNCH YOUR PAID SOCIAL CAMPAIGNS',
        },
        {
          title: 'Community Management and Engagement',
          desc: 'We monitor and actively engage with your audience on your behalf, responding to comments, addressing queries, and nurturing the conversations that build brand trust. A well-managed community is one of the most valuable long-term assets a brand can build on social media.',
          buttonText: 'LET US MANAGE YOUR COMMUNITY',
        },
      ],
    },
    whyEffective: {
      sectionTitle: "Why Skyphoria's Social Media \nMarketing Services Work",
      items: [
        {
          title: 'Tailored Strategies for Every Platform',
          desc: "We don't apply the same approach across every channel. Each platform has its own audience behaviour, content formats, and algorithm logic, and we build strategies that account for all of it, so your brand shows up in the right way on every platform it's present on.",
        },
        {
          title: 'Experienced Social Media Management Team',
          desc: "Our team brings years of experience managing social media for brands across industries. Every campaign we run is backed by analytics, informed by trends, and built around what actually drives results on each platform, not what looks good in a deck.",
        },
        {
          title: 'Performance-Driven Strategies for Sustainable Growth',
          desc: "We measure everything that matters: reach, engagement, follower growth, and conversions. That data shapes every decision we make, from content adjustments to campaign optimisations, so your social media presence keeps improving over time.",
        },
      ],
    },
    numbersProof: {
      sectionTitle: 'What Strong Social Media \nMarketing Can Do for Your Brand',
      stats: [
        {
          value: '73%',
          text: "of marketers report that social media marketing has significantly increased their brand awareness, making it one of the most effective channels for building visibility at scale.",
        },
        {
          value: '54%',
          text: "of social media users research products on platforms before making a purchase decision, which means your social presence plays a direct role in your customers' buying journey.",
        },
        {
          value: '65%',
          text: "of customers are more likely to buy from brands they follow and actively engage with on social media, underlining the commercial value of a well-managed, consistent social presence.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 3. WEB DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: 'web-development',
    metaTitle: 'Web Development Services Built for Performance and Conversions',
    metaDescription: 'Get custom web development services from Skyphoria, covering e-commerce, CMS integration, and SEO readiness, all designed to perform in search and convert.',
    hero: {
      subtitle: 'MARKETING SERVICES',
      title: 'Web Development Services',
      description:
        "A website is your most powerful marketing asset. At Skyphoria Digital, we build fast, scalable, and beautifully designed websites that reflect your brand, serve your audience, and convert visitors into customers, regardless of your industry or business size.",
      heroImage: wd1,
    },
    roi: {
      title: 'Custom Website Design and Development for Every Business',
      description:
        "We take a user-first approach to every project we take on. Whether you're launching a new website or rebuilding an existing one, our web development process is built around your goals, your audience, and the outcomes you want to drive. Here's what our services cover:",
      features: [
        'Custom website design and development',
        'Responsive and mobile-friendly interfaces',
        'E-commerce and web application development',
        'CMS-based website management, including WordPress and Shopify',
        'Website performance and SEO readiness',
      ],
    },
    whySection: {
      sectionTitle: 'How We Build High-Impact \nWebsites',
      teamImage: wd2,
      contentTitle: 'User-Centric Design That Guides Action',
      contentText:
        "Every page we build is designed with the user's journey in mind. We combine modern design principles with intuitive navigation, clear calls to action, and a visual identity that reflects your brand. The result is a website that doesn't just look good but actively works to meet your business goals.",
      proTitle: 'Built for Performance, Built to Scale',
      proDesc:
        "A slow or unreliable website loses visitors before they even see what you offer. Our development team implements performance optimisation strategies, clean code architecture, and responsive design to ensure your website runs seamlessly across all devices and scales as your business grows.",
      statCardImage: wd3,
    },
    whatYouGet: {
      sectionTitle: 'Comprehensive Web Development \nServices from Skyphoria',
      sectionDesc:
        "Skyphoria provides end-to-end web development services designed to meet your business objectives. From initial concept to final launch, we handle every stage of the process.",
      cards: [
        {
          title: 'Custom Website Development',
          desc: "We design and develop websites tailored to your brand, your audience, and your business goals. Every project gets a unique design and a development approach built around functionality, performance, and long-term reliability.",
          buttonText: 'START YOUR WEB PROJECT',
        },
        {
          title: 'E-Commerce Development',
          desc: "We build conversion-focused e-commerce platforms that are visually compelling, easy to manage, and engineered to sell. From product pages to secure checkout flows and payment gateway integration, we handle the full build.",
          buttonText: 'BUILD YOUR ONLINE STORE',
        },
        {
          title: 'CMS Integration and Management',
          desc: "We set up and customise content management systems, including WordPress, Shopify, and custom CMS solutions, giving you full control over your website content without needing a developer for every update.",
          buttonText: 'GET CMS SET UP',
        },
        {
          title: 'Website Performance and SEO Readiness',
          desc: "We optimise every website we build for speed, mobile responsiveness, and search engine visibility. From Core Web Vitals to structured data and clean URL architecture, your site is built to rank and retain the visitors it earns.",
          buttonText: 'OPTIMISE YOUR WEBSITE',
        },
      ],
    },
    whyEffective: {
      sectionTitle: "Why Skyphoria's Web \nDevelopment Services Deliver",
      items: [
        {
          title: 'Tailored Solutions for Every Business',
          desc: "No two businesses are the same, and neither are the websites we build. Every project is approached with a fresh perspective, shaped by your brand identity, your audience's expectations, and the specific outcomes you need your website to achieve.",
        },
        {
          title: 'An Experienced, Full-Stack Development Team',
          desc: "Our developers bring expertise across front-end and back-end technologies, ensuring every website we deliver is secure, scalable, and built to last. From dynamic websites to complex web applications, we have the technical depth to handle it all.",
        },
        {
          title: 'Design, Performance, and Results in One Package',
          desc: "We don't treat design, development, and optimisation as separate concerns. Every website we build is considered as a whole, so the final product looks great, loads fast, ranks well, and drives the actions that matter most to your business.",
        },
      ],
    },
    numbersProof: {
      sectionTitle: 'Why a Well-Built Website \nMakes All the Difference',
      stats: [
        {
          value: '88%',
          text: "of users are unlikely to return to a website after a poor experience, making intuitive design and reliable performance non-negotiable for any business with an online presence.",
        },
        {
          value: '75%',
          text: "of users judge a company's credibility based on its website design, which means your website is often the single most important first impression your brand makes.",
        },
        {
          value: '67%',
          text: "of users prefer browsing and purchasing on mobile-optimised websites, reinforcing why responsive, adaptive web development is a baseline requirement, not an optional upgrade.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 4. CONTENT CREATION
  // ─────────────────────────────────────────────
  {
    slug: 'content-creation',
    metaTitle: 'Content Marketing Services Built to Rank and Convert',
    metaDescription: 'Done-for-you content marketing services from Skyphoria, covering SEO blogs, email campaigns, whitepapers, and long-form content built around your audience and goals.',
    hero: {
      subtitle: 'MARKETING SERVICES',
      title: 'Content Marketing Services',
      description:
        "Content is the foundation of every successful digital marketing strategy. At Skyphoria Digital, our content marketing services are built to do more than fill a blog or tick a content calendar. We create purposeful, research-backed content that builds authority, attracts the right audience, and drives measurable business growth.",
      heroImage: cc1,
    },
    roi: {
      title: 'Content Marketing That Informs, Engages, and Converts',
      description:
        "We approach content marketing as a long-term growth strategy, not a one-off deliverable. Every piece of content we produce is rooted in audience research, aligned with your brand voice, and optimised for the channels where your audience spends their time. Here's what our content marketing services cover:",
      features: [
        'Content strategy development and planning',
        'SEO content writing and blog management',
        'Email marketing and newsletter campaigns',
        'Whitepapers, case studies, and long-form content',
        'Content performance tracking and reporting',
      ],
    },
    whySection: {
      sectionTitle: 'How We Build Content \nThat Works',
      teamImage: cc2,
      contentTitle: 'Strategy Before Every Word We Write',
      contentText:
        "Great content starts with a clear strategy. Before we write a single word, we research your audience, map out their journey, and identify the topics, formats, and channels that will generate the most value. Every piece of content we produce serves a defined purpose within a broader plan.",
      proTitle: 'Content That Ranks, Resonates, and Converts',
      proDesc:
        "We combine content writing best practices with genuine storytelling to produce content that performs in search and connects with real readers. Whether it's a blog post, a whitepaper, or an email sequence, every piece is crafted to move your audience closer to a decision.",
      statCardImage: cc3,
    },
    whatYouGet: {
      sectionTitle: 'Comprehensive Content Marketing \nServices from Skyphoria',
      sectionDesc:
        "Skyphoria Digital provides end-to-end content marketing services that cover strategy, creation, distribution, and performance tracking. From the first brief to the final report, we manage every stage of the process.",
      cards: [
        {
          title: 'Content Strategy and Planning',
          desc: "We develop a comprehensive content strategy that maps your audience's needs to your business goals. This includes topic research, content calendars, channel planning, and a clear framework for measuring success, giving your content marketing a direction and a purpose from day one.",
          buttonText: 'BUILD YOUR CONTENT STRATEGY',
        },
        {
          title: 'SEO Content Writing and Blog Management',
          desc: "We research, write, and optimise blog content that ranks for the right keywords and answers the questions your audience is actively searching for. Every article is written to drive organic traffic growth, build topical authority, and keep your readers engaged from the first line to the last.",
          buttonText: 'START YOUR BLOG STRATEGY',
        },
        {
          title: 'Email Marketing and Newsletters',
          desc: "We craft email campaigns and newsletters that nurture your audience, communicate your value, and drive action. From welcome sequences to re-engagement campaigns, every email is written with a clear objective, a defined audience segment, and a compelling reason to click.",
          buttonText: 'LAUNCH YOUR EMAIL CAMPAIGNS',
        },
        {
          title: 'Whitepapers, Case Studies, and Long-Form Content',
          desc: "We produce in-depth content assets that establish your brand as a credible authority in your industry. Whether it's a research-backed whitepaper, a detailed case study, or a comprehensive guide, these assets build trust, support lead generation services, and give your audience a genuine reason to engage with your brand.",
          buttonText: 'CREATE YOUR CONTENT ASSETS',
        },
      ],
    },
    whyEffective: {
      sectionTitle: "Why Our Content Marketing \nServices Deliver",
      items: [
        {
          title: 'Research-Led, Audience-First Approach',
          desc: "Every content decision we make is backed by research. We study your audience's behaviour, identify the questions they're asking, and build content strategies that put your brand in the right place at the right time, with the right message.",
        },
        {
          title: 'SEO Content Writing That Drives Long-Term Visibility',
          desc: "We don't just write for readers; we write for search engines too. By integrating technical SEO principles into every piece of content we produce, we help your brand build lasting organic visibility that compounds over time and continues to deliver returns long after publication.",
        },
        {
          title: 'Measurable Results Through Data-Driven Marketing Strategies',
          desc: "We track content performance across every channel and use that data to continuously refine our approach. From organic traffic and time on page to email open rates and lead generation, every metric we monitor feeds back into a smarter, more effective content strategy.",
        },
      ],
    },
    numbersProof: {
      sectionTitle: 'What Effective Content Marketing \nCan Do for Your Brand',
      stats: [
        {
          value: '70%',
          text: "of consumers prefer learning about a brand through content marketing rather than traditional advertising, making it one of the most trusted and cost-effective ways to build brand awareness and credibility.",
        },
        {
          value: '60%',
          text: "of marketers say blog writing and long-form content generate their highest quality leads, reinforcing the value of investing in well-researched, strategically planned content.",
        },
        {
          value: '3x',
          text: "more leads are generated by content marketing compared to outbound marketing, at a fraction of the cost, making it one of the highest-return investments in any digital marketing services strategy.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 5. PERFORMANCE MARKETING
  // ─────────────────────────────────────────────
  {
    slug: 'performance-marketing',
    metaTitle: 'Performance Marketing Services Built Around Real ROI',
    metaDescription: "Put your ad spend to work with Skyphoria's performance marketing services, covering paid search, paid social, retargeting, and CRO for measurable results.",
    hero: {
      subtitle: 'MARKETING SERVICES',
      title: 'Performance Marketing Services',
      description:
        "Performance marketing is where strategy meets accountability. At Skyphoria Digital, we design performance marketing solutions that drive traffic, generate leads, and increase conversions across multiple digital channels, ensuring every marketing budget delivers measurable value.",
      heroImage: pm1,
    },
    roi: {
      title: 'Data-Driven Performance Marketing, Built Around Your Goals',
      description:
        "We don't run campaigns and hope for the best. At Skyphoria Digital, every performance marketing decision is backed by data, every channel is chosen for a reason, and every unit of your budget is accountable to a measurable outcome. Here's what our performance marketing services cover:",
      features: [
        'Paid search and display advertising',
        'Paid social media advertising across Facebook, Instagram, LinkedIn, and TikTok',
        'Affiliate and influencer marketing',
        'Conversion rate optimization to improve landing page performance',
        'Retargeting and remarketing strategies',
      ],
    },
    whySection: {
      sectionTitle: 'How We Run ROI-Driven \nDigital Marketing Campaigns',
      teamImage: pm2,
      contentTitle: 'Campaigns Built Around Measurable Outcomes',
      contentText:
        "Every campaign we build starts with a clear objective — leads, sales, sign-ups, or awareness — and every metric we track ties directly back to it. We monitor clicks, conversions, and cost per acquisition in real time, so your budget is always working as efficiently as possible.",
      proTitle: 'Multi-Channel Expertise, Continuous Optimization',
      proDesc:
        "Our team manages campaigns across Google Ads management, Meta, LinkedIn, and affiliate networks simultaneously. We analyse performance data as it comes in, adjusting bids, creatives, and targeting to keep your campaigns improving, not just running.",
      statCardImage: pm3,
    },
    whatYouGet: {
      sectionTitle: 'Comprehensive Performance Marketing \nServices from Skyphoria',
      sectionDesc:
        "Skyphoria offers end-to-end performance marketing strategies that cover every stage of the customer journey. From the first ad impression to the final conversion, we manage everything: strategy, execution, optimisation, and reporting.",
      cards: [
        {
          title: 'Paid Search & Display Campaigns',
          desc: "We build and manage highly targeted paid advertising services across Google Ads and Bing, crafting ad copy and targeting strategies that put your brand in front of high-intent audiences. Every campaign is continuously optimised for click-through rates and conversions.",
          buttonText: 'START YOUR PAID SEARCH CAMPAIGN',
        },
        {
          title: 'Paid Social Media Advertising',
          desc: "From awareness campaigns to direct response, we manage social media advertising across Facebook, Instagram, LinkedIn, and TikTok. Precise audience targeting, creative testing, and ongoing bid optimisation ensure your spend translates into real engagement and qualified leads.",
          buttonText: 'LAUNCH YOUR SOCIAL ADS',
        },
        {
          title: 'Affiliate & Influencer Marketing',
          desc: "We build performance-based partnerships with affiliates and influencers whose audiences genuinely align with your brand. Every partner is vetted for relevance and reach, so the traffic and attention you gain comes with real commercial intent behind it.",
          buttonText: 'EXPLORE PARTNERSHIP OPPORTUNITIES',
        },
        {
          title: 'Retargeting and Conversion Rate Optimization',
          desc: "We re-engage visitors who didn't convert the first time through smart retargeting campaigns, and we optimise the landing pages they arrive on to remove friction and drive action. The result is a lower cost per acquisition and a higher return on every campaign you run.",
          buttonText: 'IMPROVE YOUR CONVERSION RATE',
        },
      ],
    },
    whyEffective: {
      sectionTitle: "Why Skyphoria's Performance \nMarketing Services Deliver",
      items: [
        {
          title: 'Experienced Performance Marketing Agency Team',
          desc: "Our campaign managers have handled high-spend accounts across industries and platforms. They know how to read data quickly, avoid wasted spend, and identify the optimisations that actually move the needle.",
        },
        {
          title: 'Transparent Reporting, Clear Language',
          desc: "You'll always know what your campaigns are doing and why. We report on the metrics that matter — lead generation campaign performance, cost per acquisition, return on ad spend — in plain language, with no jargon and no hiding behind vanity numbers.",
        },
        {
          title: 'Data-Driven Marketing Strategies at Every Stage',
          desc: "From audience research and creative briefing to bid adjustments and post-campaign analysis, every decision we make is grounded in data. We don't make changes based on gut feel; we make them based on what the numbers tell us.",
        },
      ],
    },
    numbersProof: {
      sectionTitle: 'What ROI-Driven Performance \nMarketing Can Do for Your Brand',
      stats: [
        {
          value: '40%',
          text: "of businesses report a significant increase in lead generation within the first three months of launching structured performance marketing tactics.",
        },
        {
          value: '65%',
          text: "of marketers say performance marketing is the most measurable and accountable way to allocate their advertising budget, making it the preferred model for growth-focused brands.",
        },
        {
          value: '55%',
          text: "of conversions can be directly attributed to retargeting campaigns, underlining the value of reaching the right audience more than once.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 6. PR & LINK BUILDING
  // ─────────────────────────────────────────────
  {
    slug: 'pr-and-link-building',
    metaTitle: 'Digital PR & Link Building Services That Build Authority',
    metaDescription: "Get Skyphoria's digital PR and link-building services, built around media outreach, guest posting, and authority links that boost your search rankings.",
    hero: {
      subtitle: 'MARKETING SERVICES',
      title: 'Digital PR & Link Building Services',
      description:
        "Your brand's credibility online isn't just about what you say about yourself; it's about who else is saying it. At Skyphoria Digital, our digital PR and link-building services combine strategic outreach, media relationships, and content amplification to strengthen your online presence, improve your search engine rankings, and grow organic traffic that actually converts.",
      heroImage: pr1,
    },
    roi: {
      title: 'What Our Digital PR & Link Building Services Cover',
      description:
        "We take a targeted, relationship-led approach to building your brand's authority online. Every tactic we use is chosen to deliver real SEO impact and measurable brand visibility.",
      features: [
        'Digital PR and media outreach',
        'Guest posting and authority link building',
        'Influencer collaborations and partnerships',
        'Content amplification and syndication',
        'Reputation management',
      ],
    },
    whySection: {
      sectionTitle: "How We Build Your Brand's \nOnline Authority",
      teamImage: pr2,
      contentTitle: 'Strategic Digital PR Campaigns',
      contentText:
        "We develop digital PR campaigns built around one goal: getting your brand in front of the right people. That means crafting compelling stories, identifying the media outlets your audience actually reads, and building relationships with journalists and editors who cover your space. The result is genuine media coverage that increases brand visibility, earns high-quality backlinks, and signals authority to search engines.",
      proTitle: 'High-Quality Link Building',
      proDesc:
        "Not all backlinks are equal. We focus exclusively on earning links from authoritative, relevant websites through guest posts, editorial partnerships, and industry-specific placements. Every link we build is chosen to strengthen your domain authority, improve your performance, and drive qualified referral traffic to your site.",
      statCardImage: pr3,
    },
    whatYouGet: {
      sectionTitle: 'End-to-End Digital PR & SEO \nLink Building Services',
      sectionDesc:
        "Skyphoria offers end-to-end PR and link-building services to help your brand achieve both online authority and measurable SEO benefits. From the first outreach email to the final report, we manage everything. Here's what's included:",
      cards: [
        {
          title: 'Digital PR and Media Outreach',
          desc: "Our PR and Media outreach team crafts compelling press releases, develops targeted media campaigns, and pitches your stories to the publications that matter in your industry. We have established relationships with journalists and editors across sectors, which means your brand gets coverage on reputable websites and news portals, not just any site that will take a backlink.",
          buttonText: 'TALK TO OUR PR TEAM',
        },
        {
          title: 'Guest Posting & Authority Links',
          desc: "We identify high-quality websites in your niche, create content that meets their editorial standards, and manage the entire process from outreach to publication. Every guest post is written to add genuine value, which means the links we earn are the kind that search engines reward, and readers actually click.",
          buttonText: 'GET A LINK BUILDING STRATEGY',
        },
        {
          title: 'Influencer Partnerships',
          desc: "We connect your brand with influencers whose audiences genuinely overlap with yours. These partnerships go beyond a sponsored post; they generate credible mentions, expand your reach to engaged communities, and build the kind of brand trust that paid ads can't replicate.",
          buttonText: 'DISCUSS INFLUENCER PARTNERSHIPS',
        },
        {
          title: 'Reputation Management & Content Amplification',
          desc: "We monitor your brand's online presence and make sure your reputation stays consistent and positive across all platforms. At the same time, we amplify your best-performing content — distributing press releases, sharing thought leadership pieces, and syndicating material that reinforces your authority and improves search visibility over time.",
          buttonText: "LET'S TALK ABOUT YOUR BRAND",
        },
      ],
    },
    whyEffective: {
      sectionTitle: "Why Skyphoria's Digital PR \n& Link Building Gets Results",
      items: [
        {
          title: 'Authority and Credibility',
          desc: "Every link we build comes from sources that search engines already respect. Higher domain authority means better rankings, and better rankings mean more organic traffic growth for your business.",
        },
        {
          title: 'Experienced Outreach Specialists',
          desc: "Our specialists know how to identify the right opportunities, write pitches that get responses, and maintain the relationships that make great placements happen consistently.",
        },
        {
          title: 'Measurable Results and SEO Impact',
          desc: "Every campaign is tracked against the metrics that matter: backlinks earned, referral traffic, domain authority improvements, and search ranking changes. You always know exactly what your investment is delivering.",
        },
      ],
    },
    numbersProof: {
      sectionTitle: 'What Strong Digital PR & \nLink Building Can Do for Your Brand',
      stats: [
        {
          value: '50%',
          text: "of marketers report improved search engine rankings after adopting a strategic link-building approach.",
        },
        {
          value: '68%',
          text: "of businesses say digital PR campaigns have a direct positive impact on brand credibility and audience trust.",
        },
        {
          value: '40%',
          text: "of referral traffic to websites comes from high-authority links, making strategic link building one of the highest-ROI SEO services available.",
        },
      ],
    },
  },
];

/**
 * Look up a service by its URL slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export default services;
