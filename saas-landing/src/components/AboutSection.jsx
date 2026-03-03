export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-label">Who's Behind This</div>
        <div className="about-photo-wrapper">
          <img src="/MarkoPhoto.png" alt="Marko Filipovic" className="about-photo" />
        </div>
        <h2>From street magic to automating systems for 3,000+ businesses – meet Marko Filipovic</h2>
        <p>I moved to the U.S. from Serbia with one goal: become a full-time magician. Instead, I discovered something I was even more obsessed with – building automated systems that make businesses money while they sleep.</p>
        <p>By 18, I'd scaled my first company past seven figures. Since then, I've worked with over 3,000businesses, coached 10,000+ entrepreneurs, and built BooSend.ai – a SaaS platform that's changing how businesses sell through Instagram DMs.</p>
        <p>Now I'm looking for the right partners. People who already have the audience and the expertise – but need someone who knows how to turn that into a software company. That's what I do.</p>
        <div className="press-logos">
          <span>Trusted by:</span>
          <span className="press-logo">NAS.IO</span>
          <span className="press-logo">VERIZON</span>
          <span className="press-logo">EXPEDIA</span>
          <span className="press-logo">ELEVENLABS</span>
          <span className="press-logo">META</span>
          <span className="press-logo">GOOGLE</span>
        </div>
      </div>
    </section>
  );
}
