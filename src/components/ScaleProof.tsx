import { Zap, Calendar, Volume2, Monitor, Users } from 'lucide-react';
import { useReveal, useCountUp } from '@/hooks/useReveal';

const STATS = [
  { icon: Calendar, value: 500, suffix: '+', label: 'Events realisiert', sub: 'seit 2017 deutschlandweit' },
  { icon: Zap, value: 8, suffix: ' Jahre', label: 'Erfahrung', sub: 'Event Production & Live Entertainment' },
  { icon: Volume2, value: 120, suffix: ' kW', label: 'PA-Leistung', sub: 'L-Acoustics & d&b audiotechnik' },
  { icon: Monitor, value: 600, suffix: ' m²', label: 'LED-Fläche', sub: 'Absen & ROE Panels' },
  { icon: Users, value: 45, suffix: '', label: 'Techniker & Ingenieure', sub: 'fester Stamm & Freelance-Pool' },
];

function StatCard({ stat, index, visible }: { stat: typeof STATS[0]; index: number; visible: boolean }) {
  const count = useCountUp(stat.value, 2000, visible);
  const Icon = stat.icon;

  return (
    <div
      className="glass-card glass-card-hover rounded-sm p-6 md:p-8 flex flex-col items-center text-center transition-all duration-700"
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)',
      }}
    >
      <Icon className="w-8 h-8 text-gold-300 mb-4" strokeWidth={1.2} />
      <div className="display-heading text-3xl md:text-5xl lg:text-6xl gold-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm md:text-base text-cream font-medium mt-2">{stat.label}</div>
      <div className="text-xs text-cream/40 mt-1">{stat.sub}</div>
    </div>
  );
}

export default function ScaleProof() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-700 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-gold" />

      {/* Decorative equalizer bars */}
      <div className="absolute right-8 bottom-8 hidden md:flex items-end gap-1.5 h-32 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="eq-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${1 + (i % 3) * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Skala & Beweis</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream max-w-3xl mx-auto">
            Zahlen, die für sich sprechen
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
