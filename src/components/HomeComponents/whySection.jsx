import React from "react";
import "./whySection.css"

// Font Awesome CDN line for index.html or layout:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />


function DriveRevenueSection() {
  return (
    <section className="drive-revenue-section">
        <div className="drive-revenue-overline">WHY SKYPHORIA</div>
    <h2 className="drive-revenue-title">
      How Our Digital Marketing Services<br />
      Help Brands Generate Revenue
    </h2>
    <div className="drive-revenue-row">
        <div className="drive-revenue-col">
        <div className="drive-revenue-icon">
            <i className="fas fa-chart-bar"></i>
        </div>
        <h3>WELCOME NEW VISITORS</h3>
        <p>Interest starts with getting your message in front of the people who are ready to buy. That’s why we use data-driven marketing strategies to spread the word about your brand across platforms. This helps attract new visitors to your website while keeping your unique goals and revenue growth in focus.</p>
        </div>
        <div className="drive-revenue-col">
        <div className="drive-revenue-icon">
            <i className="fas fa-bullhorn"></i>
        </div>
        <h3>ENCOURAGE REAL ACTION</h3>
        <p>Good marketing is more than getting attention; it’s about helping people see why your services matter. We run creative ad campaigns and performance marketing initiatives that guide users toward meaningful next steps, like signing up, making a purchase, or sharing with friends. Every campaign is built with conversion rate optimization services and measurable ROI in mind.</p>
        </div>
        <div className="drive-revenue-col">
        <div className="drive-revenue-icon">
            <i className="fas fa-lightbulb"></i>
        </div>
        <h3>UNDERSTAND WHAT WORKS</h3>
        <p>Marketing can feel confusing. It doesn’t have to. Through marketing analytics, campaign tracking, and performance reporting, we check your results and identify what’s driving growth and what needs improvement. Our data-driven updates use simple language so you always understand how your SEO, paid campaigns, and digital marketing efforts are performing.</p>
        </div>
        <div className="drive-revenue-col">
        <div className="drive-revenue-icon">
            <i className="fas fa-sync-alt"></i>
        </div>
        <h3>BUILD A LASTING IMPRESSION</h3>
        <p>A memorable brand brings people back. Through strategic brand positioning, content marketing, and social media engagement, we help you shape a style and tone that sets you apart. Our approach ensures your message stays consistent, recognizable, and impactful every time your audience connects with your brand online.</p>
        </div>
  </div>
</section>
);
}

export default DriveRevenueSection;
