import { useEffect } from 'react';
import TopBar from './components/TopBar';
import TrustStrip from './components/TrustStrip';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import TypeformSection from './components/TypeformSection';
import ProofSection from './components/ProofSection';
import WhatYouGet from './components/WhatYouGet';
import WhoSection from './components/WhoSection';
import AboutSection from './components/AboutSection';
import BottomCta from './components/BottomCta';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    const saved = sessionStorage.getItem('scrollPos');
    if (saved) {
      setTimeout(() => window.scrollTo(0, parseInt(saved, 10)), 0);
    } else {
      window.scrollTo(0, 0);
    }
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          sessionStorage.setItem('scrollPos', String(window.scrollY));
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <TrustStrip />
      <Hero />
      <VideoSection />
      <TypeformSection />
      <ProofSection />
      <WhatYouGet />
      <WhoSection />
      <AboutSection />
      <BottomCta />
      <Footer />
    </>
  );
}
