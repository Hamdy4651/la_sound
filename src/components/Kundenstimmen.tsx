import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const TESTIMONIALS = [
  {
    quote: 'LA SOUND hat unsere Jahresgala auf ein Level gehoben, das unsere Gäste noch Wochen danach beschäftigt hat. Ton, Licht, Bühne — perfekt synchron.',
    author: 'Dr. Claudia Schneider',
    company: 'Schneider Pharma Group',
  },
  {
    quote: 'Die Professionalität beim Aufbau war beeindruckend. Pünktlich, sauber und jedes Detail durchdacht. Wir buchen LA SOUND ausschließlich.',
    author: 'Markus Thiel',
    company: 'Thiel Event Management',
  },
  {
    quote: '5000 Gäste, Open Air, nur 12 Stunden Aufbauzeit. LA SOUND hat das scheinbar Unmögliche möglich gemacht. Absolute Empfehlung.',
    author: 'Sandra Berger',
    company: 'Berlin Music Week',
  },
  {
    quote: 'Von der ersten Skizze bis zum letzten Kabel — wir haben uns zu 100% auf LA SOUND verlassen können. Unser Produktionspartner der Wahl.',
    author: 'Thomas Klein',
    company: 'Klein Kongresse GmbH',
  },
];

export default function Kundenstimmen() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-gold" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Kundenstimmen</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover rounded-sm p-6 md:p-8 transition-all duration-700"
              style={{
                transitionDelay: `${i * 150}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(60px)',
              }}
            >
              <Quote className="w-8 h-8 text-gold-300/30 mb-4" />
              <p className="text-cream/70 leading-relaxed text-sm md:text-base italic">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-gold-300 text-sm font-display font-semibold">
                  {t.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <div className="text-sm text-cream font-medium">{t.author}</div>
                  <div className="text-xs text-gold-300/60">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
