import React from "react";
import "./AboutStorySection.css";
import aboutImg from "../../assets/home/people2.webp"; // update the path as needed

export default function AboutStorySection() {
  return (
    <section className="about-story-section">
      <div className="about-story-text">
        <p>
          At Skyphoria Digital, we build marketing strategies that actually connect with people. We use smart content, social media, SEO, and performance marketing to grow your brand online, and we do it in a way that’s transparent, jargon-free, and focused on results you can see.
        </p>
        <p>
          We started Skyphoria because we saw too many businesses investing in digital marketing and walking away confused by reports they couldn’t read and results they couldn’t measure. We wanted to change that. Our job is to make growth feel straightforward, not overwhelming.
        </p>
      </div>
      <div className="about-story-image">
        <img src={aboutImg} alt="Our Team Working" />
      </div>
    </section>
  );
}
