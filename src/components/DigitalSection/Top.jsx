import React from "react";
import "./Top.css";
import heroImg from "../../assets/home/people.webp"; // Adjust path as needed

const Top = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h4 className="about-subtitle">ABOUT US</h4>
        <h1 className="about-title">
          Digital Marketing Experts Who Make Growth Feel Less Complicated
        </h1>
      </div>
      <div className="about-image">
      <img src={heroImg} alt="Team" />
      </div>

    </section>
  );
};

export default Top;