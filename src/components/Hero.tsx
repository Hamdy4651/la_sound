import { useEffect, useRef, useState } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';

const HERO_VIDEO = 'https://cdn.coverr.co/videos/coverr-a-concert-stage-with-smoke-and-lights-2611/1080p.mp4';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showReel, setShowReel] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const text = el.textContent || '';
    el.textContent = '';
    const words = text.split(' ');

    words.forEach((word, wi) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';
      wordSpan.style.verticalAlign = 'top';

      [...word].forEach((char, ci) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char-reveal';
        charSpan.textContent = char;
        charSpan.style.transitionDelay = `${(wi * 5 + ci) * 40}ms`;
        wordSpan.appendChild(charSpan);
      });

      el.appendChild(wordSpan);

      if (wi < words.length - 1) {
        const space = document.createTextNode(' ');
        el.appendChild(space);
      }
    });

    const chars = el.querySelectorAll('.char-reveal');
    const t = setTimeout(() => {
      chars.forEach((c) => c.classList.add('in'));
    }, 200);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      hero.style.setProperty('--mx', `${x * 100}%`);
      hero.style.setProperty('--my', `${y * 100}%`);
    };

    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMove);
    return () => hero?.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        ['--mx' as string]: '50%',
        ['--my' as string]: '50%',
      }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/photos/7081160/pexels-photo-7081160.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink-900/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />

      {/* Light beams */}
      <div className="light-beam light-beam-magenta" style={{ left: '15%', top: '-10%', transform: 'rotate(15deg)', animation: 'beam-sweep 8s ease-in-out infinite' }} />
      <div className="light-beam light-beam-violet" style={{ left: '55%', top: '-10%', transform: 'rotate(-8deg)', animation: 'beam-sweep 10s ease-in-out infinite 1s' }} />
      <div className="light-beam light-beam-cyan" style={{ left: '75%', top: '-10%', transform: 'rotate(20deg)', animation: 'beam-sweep 12s ease-in-out infinite 2s' }} />

      {/* Spotlight following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle 600px at var(--mx) var(--my), rgba(212, 175, 55, 0.08), transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div
          className="flex items-center gap-3 mb-8 opacity-0"
          style={{ animation: 'fadeIn 1s ease 0.3s forwards' }}
        >
          <span className="h-px w-12 bg-gold-300/50" />
          <span className="section-label">LA SOUND — EVENT PRODUCTION</span>
          <span className="h-px w-12 bg-gold-300/50" />
        </div>

        <h1
          ref={titleRef}
          className="display-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-6 max-w-4xl"
          style={{ perspective: '800px' }}
        >
          Wir machen aus Events Erlebnisse.
        </h1>

        <p
          className="text-base md:text-lg text-cream/60 max-w-2xl mb-10 leading-relaxed opacity-0"
          style={{ animation: 'fadeIn 1s ease 1.2s forwards' }}
        >
          Sound. Licht. Screens. Production. Alles aus einer Hand — für unvergessliche
          Live-Momente und Events auf höchstem Niveau.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 opacity-0"
          style={{ animation: 'fadeIn 1s ease 1.6s forwards' }}
        >
          <a
            href="#kontakt"
            className="btn-gold magnetic px-8 py-4 rounded-sm text-base flex items-center gap-2 group"
          >
            <span>Angebot anfordern</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => setShowReel(true)}
            className="btn-ghost px-8 py-4 rounded-sm text-base flex items-center gap-3 group"
          >
            <Play className="w-5 h-5 text-gold-300 transition-transform group-hover:scale-110" />
            <span>Showreel ansehen</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-cream/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-300/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gold-300 scroll-dot" />
        </div>
        <ChevronDown className="w-4 h-4 text-gold-300/40" />
      </div>

      {/* Showreel modal */}
      {showReel && (
        <div
          className="fixed inset-0 z-50 bg-ink-900/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowReel(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden gold-border" onClick={(e) => e.stopPropagation()}>
            <video className="w-full h-full object-cover" autoPlay controls>
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <button
              onClick={() => setShowReel(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink-900/80 gold-border flex items-center justify-center text-cream hover:text-gold-300 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
