import React from "react";
import "./ValueSection.css";
// Import your icons, or use <img src="..."/> or a library like react-icons.

export default function ValuesSection() {
  const values = [
    {
      icon: "💡", // Replace with your icon/img
      title: "Creativity",
      text: "Our team comes from a mix of technical, creative, and strategic backgrounds, and that’s intentional. Different perspectives make for better campaigns. We treat imagination as a core business tool, not a nice-to-have. Every performance marketing project we take on gets a fresh set of eyes and a genuinely original approach."
    },
    {
      icon: "🎯",
      title: "Integrity",
      text: "We say what we mean and do what we say. No vague reports, no inflated numbers, no hiding behind industry jargon. Our digital marketing services are built on complete transparency because long-term partnerships only work when there’s real trust on both sides."
    },
    {
      icon: "🚀",
      title: "Impact",
      text: "As an ROI-driven performance marketing agency, we’re not here to run campaigns that just look good on paper. We’re here to bring in leads, grow your revenue, and expand your business in ways you can actually feel. Our lead generation services are designed to connect with real people and deliver outcomes that show up in your bottom line."
    },
    {
      icon: "🧑‍💼",
      title: "Collaboration",
      text: "The best work happens when everyone’s pulling in the same direction. Our team operates as one unit: strategists, creatives, analysts, and developers all aligned around your goals. That’s how we build ROI-driven digital marketing campaigns that hold together from start to finish."
    }
  ];

  return (
    <section className="values-section">
      <h2 className="values-section-title">Our Core Principles</h2>
      <div className="values-cards">
        {values.map((item, idx) => (
          <div className="value-card" key={idx}>
            <div className="value-icon">{item.icon}</div>
            <div className="value-title">{item.title}</div>
            <div className="value-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
