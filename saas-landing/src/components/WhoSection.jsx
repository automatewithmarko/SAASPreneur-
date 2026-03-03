const ArrowIcon = ({ color }) => (
  <svg style={{ width: 14, height: 14, stroke: color, fill: 'none', strokeWidth: 2 }} viewBox="0 0 24 24">
    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
  </svg>
);

export default function WhoSection() {
  const forItems = [
    'You already have an audience (social media, email list, community) and want to monetize it with software',
    "You're a coach, agency owner, or content creator making money but want recurring SaaS revenue",
    'You have domain expertise in a niche but no idea how to build software',
    "You're ready to invest time and resources into building something real",
  ];

  const notItems = [
    'You have no audience, no business, and no niche expertise yet',
    "You're looking for a get-rich-quick scheme or a passive income hack",
    "You aren't willing to put in the work on marketing and selling your product",
    'You just want another course to collect – this is a real business partnership',
  ];

  return (
    <section className="who-section">
      <div className="who-grid">
        <div className="who-card for-card">
          <h3>
            <svg style={{ width: 15, height: 15, stroke: 'var(--accent)', fill: 'none', strokeWidth: 2.5 }} viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            This is for you if
          </h3>
          {forItems.map((text, i) => (
            <div className="who-item" key={i}>
              <span className="wi-icon"><ArrowIcon color="var(--accent)" /></span>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="who-card not-card">
          <h3>
            <svg style={{ width: 15, height: 15, stroke: 'var(--danger)', fill: 'none', strokeWidth: 2.5 }} viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            This is not for you if
          </h3>
          {notItems.map((text, i) => (
            <div className="who-item" key={i}>
              <span className="wi-icon"><ArrowIcon color="var(--danger)" /></span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
