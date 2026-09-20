import React, { useState , useEffect  } from "react";
import "./HeroSection.css";
import googleCloudLogo from '../../assets/logos/google-cloud.svg';
import metaBusinessLogo from '../../assets/logos/meta-partner.svg';
import googlePartnerLogo from '../../assets/logos/google-partner.svg';
import shopifyLogo from '../../assets/logos/shopify.svg';
/*import heroCard1 from '../assets/icons/1.svg';
import heroCard2 from '../assets/icons/2.svg';
import heroCard3 from '../assets/icons/3.svg';*/

const formFields = [
  { label: "Email", name: "email", type: "email", placeholder: "Email" },
  { label: "Name", name: "name", type: "text", placeholder: "Name" },
  { label: "Number", name: "number", type: "tel", placeholder: "Number" },
  { label: "Website", name: "website", type: "url", placeholder: "Website" }
];


export default function HeroForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ email: "", name: "", number: "", website: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [heroCards, setHeroCards] = useState([]);

    // Fetch hero cards from WordPress REST API
  useEffect(() => {
    fetch('https://admin.skyphoriadigital.com/wp-json/wp/v2/hero_card?per_page=3&_embed')
      .then(res => res.json())
      .then(data => {
        const cards = data.map(item => {
          const image = item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
          const altText = item.alt_text || '';
          return { id: item.id, title: item.title.rendered, image, altText };
        });
        setHeroCards(cards);
      })
      .catch(console.error);
  }, []);

  const handleChange = e => {
    setForm({ ...form, [formFields[step].name]: e.target.value });
  };

  const handleNext = () => {
    if (!form[formFields[step].name]) return alert(`Please enter ${formFields[step].label}`);
    if (step < formFields.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => step > 0 && setStep(step - 1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://admin.skyphoriadigital.com/wp-json/dhaagahaus/v1/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }

      setSuccess(true);
      setForm({ email: "", name: "", number: "", website: "" });
      setStep(0);
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
    setLoading(false);
  };

    useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
        setStep(0);
        setForm({ email: "", name: "", number: "", website: "" });
      }, 1500); // Show success message for 3 seconds then reset form
    }
    return () => clearTimeout(timer);
  }, [success]);


  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
             Digital Marketing That Converts
          </h1>
          <p>
            <span className="line-break-afters">Is your business hard to find online? At Skyphoria Digital, we change that!</span>
            <span className="line-break-afters">We put your brand in front of the audience that's already looking for what you do,</span>
            and turn that attention into real revenue.
          </p>

    <form className="hero-multistep-form" onSubmit={e => e.preventDefault()}>
      <div className="form-progress-bar">
        <div className="form-progress" style={{ width: `${(step + (success ? 1 : 0)) * 25}%` }} />
      </div>

      {success ? (
        <span className="success-message">
          <span style={{ color: "green", fontWeight: 650 }}>&#10003;</span>
          Your submission was successful.
        </span>
      ) : (
        <div className="form-steps-container">
          <input
            className="hero-form-input"
            type={formFields[step].type}
            placeholder={formFields[step].placeholder}
            value={form[formFields[step].name]}
            onChange={handleChange}
            required
            autoFocus
            disabled={loading}
          />
          <div className="form-btn-group">
            {step > 0 && (
              <button
                type="button"
                className="form-btn prev-btn"
                onClick={handlePrev}
                disabled={loading}
              >
                PREVIOUS
              </button>
            )}
            <button
              type="button"
              className="form-btn next-btn"
              onClick={handleNext}
              disabled={loading}
            >
              NEXT
            </button>
          </div>
        </div>
      )}
    </form>
        </div>  
        <div className="hero-cards">
          {heroCards.map((card, index) => (
            <div
              className={
                index === 0
                  ? 'card left-card'
                  : index === 1
                  ? 'card middle-card'
                  : 'card right-card'
              }
              key={card.id}
            >
              <img src={card.image} alt={card.altText || card.title} className="hero-image-card" />
            </div>
          ))}
        </div>
      </div>  

    <div className="partners-bar">
      <span className="partner-tagline">
        A PARTNER, NOT<br />A VENDOR
      </span>
        <div className="partners-logos">
          <img src={googleCloudLogo} alt="Google Cloud"/>
          <img src={metaBusinessLogo} alt="Meta Business"/>
          <img src={googlePartnerLogo} alt="Google Partner"/>
          <img src={shopifyLogo} alt="Shopify"/>
        </div>
      </div>
    </section>
  );
};

