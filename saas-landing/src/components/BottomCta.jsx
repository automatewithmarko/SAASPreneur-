export default function BottomCta() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('apply');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="bottom-cta">
      <h2>Your Audience Deserves a Product.<br />Let's Build It.</h2>
      <p>Stop leaving money on the table. Apply now before spots are filled.</p>
      <button className="cta-btn" onClick={handleClick}>Apply Now →</button>
    </section>
  );
}
