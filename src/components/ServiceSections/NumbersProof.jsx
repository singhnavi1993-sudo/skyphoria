import "./NumbersProof.css";
import { formatNewlines } from '../../utils/formatText';

// Shared stat bar icon (identical across all services)
const StatIcon = () => (
  <span className="numbers-icon">
    <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
      <circle cx="21" cy="21" r="21" fill="#f3f0fd"/>
      <g transform="translate(11 11)">
        <rect x="2.5" y="11" width="4" height="8" rx="1.3" fill="#7c61e8"/>
        <rect x="9" y="4.5" width="4" height="14.5" rx="1.3" fill="#7c61e8"/>
        <rect x="15.3" y="0" width="4" height="19" rx="1.3" fill="#7c61e8"/>
      </g>
    </svg>
  </span>
);

const NumbersProof = ({ sectionTitle, stats }) => (
  <section className="numbers-proof-section">
    <div className="numbers-proof-header">
      <div className="numbers-proof-overline">THE PROOF IS IN THE NUMBERS</div>
      <h2 className="numbers-proof-title">
        {formatNewlines(sectionTitle)}
      </h2>
    </div>
    <div className="numbers-proof-row">
      {stats.map((item, i) => (
        <div className="numbers-proof-card" key={i}>
          <div className="numbers-stats-top">
            <div className="numbers-stat-value">{item.value}</div>
            <StatIcon />
          </div>
          <div className="numbers-stat-desc">{item.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default NumbersProof;
