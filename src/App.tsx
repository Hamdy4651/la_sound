import { useEffect } from 'react';
import Lenis from 'lenis';
import CursorGlow from '@/components/CursorGlow';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import ScaleProof from '@/components/ScaleProof';
import Leistungen from '@/components/Leistungen';
import AboutUs from '@/components/AboutUs';
import Showreel from '@/components/Showreel';
import TechnikPartner from '@/components/TechnikPartner';
import Ablauf from '@/components/Ablauf';
import BeforeAfter from '@/components/BeforeAfter';
import Referenzen from '@/components/Referenzen';
import Team from '@/components/Team';
import Kundenstimmen from '@/components/Kundenstimmen';
import FAQ from '@/components/FAQ';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LoadingScreen from '@/components/LoadingScreen';

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-ink-900">
      <LoadingScreen />
      <CursorGlow />
      <Hero />
      <TrustedBy />
      <ScaleProof />
      <div id="leistungen">
        <Leistungen />
      </div>
      <div id="ueber-uns">
        <AboutUs />
      </div>
      <Showreel />
      <TechnikPartner />
      <Ablauf />
      <BeforeAfter />
      <div id="referenzen">
        <Referenzen />
      </div>
      <div id="team">
        <Team />
      </div>
      <Kundenstimmen />
      <div id="faq">
        <FAQ />
      </div>
      <Kontakt />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
