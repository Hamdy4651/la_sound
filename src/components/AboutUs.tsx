import { useReveal } from '@/hooks/useReveal';

export default function AboutUs() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Decorative beam */}
      <div className="light-beam light-beam-gold" style={{ left: '80%', top: '0', transform: 'rotate(-15deg)', animation: 'beam-sweep 10s ease-in-out infinite' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div
            className="relative transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden gold-border">
              <img
                src="https://images.pexels.com/photos/2167382/pexels-photo-2167382.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="LA SOUND bei einer Live-Show"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 glass-card rounded-sm p-6 text-center">
              <div className="display-heading text-3xl md:text-4xl gold-text">2017</div>
              <div className="text-xs text-cream/50 mt-1 tracking-wider uppercase">Gegründet</div>
            </div>
          </div>

          {/* Text side */}
          <div
            className="transition-all duration-1000"
            style={{
              transitionDelay: '200ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(60px)',
            }}
          >
            <p className="section-label mb-4">Über uns</p>
            <h2 className="display-heading text-3xl md:text-5xl text-cream mb-8">
              Hinter jeder großen Show steht ein starkes Team
            </h2>
            <div className="space-y-5 text-cream/60 leading-relaxed text-base">
              <p>
                LA SOUND ist Ihr Full-Service-Partner für Event Production & Live Entertainment.
                Wir verbinden präzise Technik mit kreativer Produktion — für Konzerte,
                Festivals, Corporate Events und Shows, die im Gedächtnis bleiben.
              </p>
              <p>
                Mit einem starken Netzwerk aus erfahrenen Technikern, Kreativen und
                Produktionspartnern bringen wir die richtigen Menschen und Ressourcen
                für jedes Format zusammen — vom ersten Konzept bis zum letzten Ton.
              </p>
              <p>
                Über 45 feste Techniker, Tontechniker und Ingenieure sowie ein
                großes Freelance-Netzwerk garantieren: Ihre Veranstaltung ist in
                besten Händen — von der ersten Beratung bis zum letzten Kabel.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {['TÜV-zertifiziert', 'VDI-konform', 'DGQ geprüft', 'Versichert bis 10 Mio. €'].map((badge) => (
                <span key={badge} className="px-4 py-2 text-xs tracking-wide gold-border rounded-sm text-cream/60">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
