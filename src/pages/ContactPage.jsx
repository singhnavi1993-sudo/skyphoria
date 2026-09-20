import React, { useState } from "react";
import "./ContactPage.css";
import googleMapsLogo from "../assets/logos/Google_Maps_icon_(2020).svg.png";

const INITIAL_STATE = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const ContactPage = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://admin.skyphoriadigital.com/wp-json/dhaagahaus/v1/form-submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Submission failed!");
      setSuccess(true);
      setFormData(INITIAL_STATE);
    } catch (err) {
      setError(err.message || "Error! Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="contactpage-root">
        <div className="contact-left">
          <h4 className="contact-label">CONTACT</h4>
          <h1 className="contact-title">
            We’re here to help
            <br />
            you grow
          </h1>
          <p className="contact-description">
            Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and explore how our digital marketing team can contribute to your success.
          </p>
          <div className="contact-info-card">
            <div>
              <div className="contact-info-label">Phone number:</div>
              <div className="contact-info-value"><a href="tel:+917889952980" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7889952980</a></div>
            </div>
            <div>
              <div className="contact-info-label">Email address:</div>
              <div className="contact-info-value">info@skyphoriadigital.com</div>
            </div>
          </div>
          <div className="contact-address-row">
            <div className="map-icon">
              <img
                src=  {googleMapsLogo}
                alt="Google Maps Logo"
                width="30"
                height="40"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="address-content">
              <div className="address-text">
                IInd Floor, Khullar Market, Sec.3 Extention <br /> Trikuta Nagar,Jammu. 180020.
              </div>
              <a
                href="https://maps.app.goo.gl/DCVUbMQiZxVhgsDG8"
                className="map-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ON MAP
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form-card">
            <span className="contact-star-effect">✦</span>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="What can we help you with?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "GET IN TOUCH →"}
              </button>
              {success && (
                <div className="contact-success-msg">
                  Thanks! We'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="contact-error-msg">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* New Section: Divider, Location Title, Address, Map */}
      <div className="location-section">
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
        <h2 className="location-title">Location</h2>
        <div className="location-address">
          IInd Floor, Khullar Market, Sec.3 Extention, Trikuta Nagar,Jammu. 180020.
        </div>
        <div className="location-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.826570147737!2d74.87180227613436!3d32.69559498814186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e85140d0ddf41%3A0x1768355fe4d25de!2sSkyphoria%20Digital%20Private%20Limited!5e1!3m2!1sen!2sin!4v1780655190779!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "24px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
