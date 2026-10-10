import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  { num: '01', title: 'Beratung', desc: 'Wir hören zu, verstehen Ihre Vision und definieren gemeinsam die technischen Anforderungen Ihrer Veranstaltung.' },
  { num: '02', title: 'Konzept & Planung', desc: 'Lichtplan, Sound-Design, Rigging-Skizzen und ein detaillierter Ablaufplan — alles wird vorab präzise durchdacht.' },
  { num: '03', title: 'Aufbau', desc: 'Unser Team baut sicher und effizient auf. Jedes Kabel, jeder Scheinwerfer, jede Truss sitzt exakt nach Plan.' },
  { num: '04', title: 'Show-Betrieb', desc: 'Während der Show steuern wir Ton, Licht und Video in Echtzeit. Sie genießen Ihr Event — wir kümmern uns um den Rest.' },
  { num: '05', title: 'Abbau', desc: 'Schnell, sauber, professionell. Wir bauen ab, dokumentieren und übergeben die Location im Originalzustand.' },
];

export default function Ablauf() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Decorative beams */}
      <div className="light-beam light-beam-gold" style={{ left: '50%', top: '0', transform: 'rotate(-5deg)', animation: 'beam-sweep 12s ease-in-out infinite' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Ablauf</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Von der Idee bis zum letzten Kabel
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-300/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                } transition-all duration-800`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(60px)',
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Number dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-gold-300 animate-pulse-glow" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 1 ? 'md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <div className="display-heading text-5xl md:text-7xl gold-text opacity-40 mb-3">
                    {step.num}
                  </div>
                  <h3 className="display-heading text-xl md:text-2xl text-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-cream/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
