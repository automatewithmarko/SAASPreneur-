import { useEffect, useRef } from 'react';

export default function WhatYouGet() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll('.benefit-row');
    if (!rows) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    rows.forEach((row, i) => {
      row.style.transitionDelay = `${i * 150}ms`;
      observer.observe(row);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="what-you-get" ref={sectionRef}>
      <div className="section-label">The Partnership</div>
      <h2>What You're Getting When You're Accepted</h2>

      <div className="benefit-row">
        <div className="benefit-icon">
          <svg className="icon-svg" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        </div>
        <div className="benefit-text">
          <h3>Your SaaS – Built From Scratch</h3>
          <p>I bring the development team, the tech stack, and the architecture. We identify the right SaaS product for your niche and audience, then build it from the ground up. You don't touch a line of code.</p>
        </div>
      </div>

      <div className="benefit-row">
        <div className="benefit-icon">
          <svg className="icon-svg" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
        </div>
        <div className="benefit-text">
          <h3>A Proven Launch Strategy</h3>
          <p>I've launched BooSend to thousands of users and built sales engines for 3,000+ companies. You'll get the exact playbook – the landing pages, the funnels, the email sequences, the DM automations – all done with you.</p>
        </div>
      </div>

      <div className="benefit-row">
        <div className="benefit-icon">
          <svg className="icon-svg" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
        </div>
        <div className="benefit-text">
          <h3>Scale Past $10K/Mo Together</h3>
          <p>We don't stop at launch. Using AI-powered automations, paid media, and your existing audience, we scale your SaaS to consistent, recurring revenue – past $10K/month and beyond.</p>
        </div>
      </div>

      <div className="benefit-row highlight">
        <div className="benefit-icon">
          <svg className="icon-svg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        </div>
        <div className="benefit-text">
          <h3>A True Partnership – Not a Course</h3>
          <p>This isn't a program where I hand you videos and wish you luck. I'm your partner. I have skin in the game. We build this together, we win together.</p>
        </div>
      </div>
    </section>
  );
}
