import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const SHOWREEL_VIDEO = 'https://cdn.coverr.co/videos/coverr-a-concert-stage-with-smoke-and-lights-2611/1080p.mp4';

export default function Showreel() {
  const { ref, visible } = useReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Showreel</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Ein Blick reicht, um zu verstehen
          </h2>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden gold-border group cursor-pointer transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.9)',
          }}
          onClick={() => setPlaying(true)}
        >
          {/* Video or poster */}
          {!playing ? (
            <>
              <img
                src="https://images.pexels.com/photos/167514/pexels-photo-167514.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Showreel Preview"
                className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-900/40 group-hover:bg-ink-900/30 transition-colors duration-500" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full btn-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-ink-900 ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Light sweep on hover */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </>
          ) : (
            <video className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" autoPlay controls>
              <source src={SHOWREEL_VIDEO} type="video/mp4" />
            </video>
          )}

          {/* Close button when playing */}
          {playing && (
            <button
              onClick={(e) => { e.stopPropagation(); setPlaying(false); }}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink-900/80 gold-border flex items-center justify-center text-cream hover:text-gold-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <p className="text-center text-cream/40 text-sm mt-6">
          2:30 Min. — Ein Querschnitt durch Konzerte, Galas, Messen & Firmenevents
        </p>
      </div>
    </section>
  );
}
