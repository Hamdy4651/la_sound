import { Volume2, Lightbulb, Building2, MonitorPlay } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  {
    icon: Volume2,
    title: 'Tontechnik',
    desc: 'PA-Anlagen, Monitor-Rigging, Funkstrecken & digitales Mixing — kristallklarer Sound für jede Größe.',
    items: ['L-Acoustics & d&b Line Arrays', 'DiGiCo & Yamaha Konsole', 'Shure & Sennheiser Funk'],
    image: 'https://images.pexels.com/photos/30807699/pexels-photo-30807699.jpeg?auto=compress&cs=tinysrgb&w=1200',
    glow: 'glow-magenta',
    color: 'beam-magenta',
  },
  {
    icon: Lightbulb,
    title: 'Lichttechnik',
    desc: 'Moving Heads, LED-Wandlungen, Laser & DMX-Programmierung — Licht, das Emotionen dirigiert.',
    items: ['Robe & Martin Moving Heads', 'grandMA3 Programmierung', 'High-End Laser-Systeme'],
    image: 'https://images.pexels.com/photos/9271247/pexels-photo-9271247.jpeg?auto=compress&cs=tinysrgb&w=1200',
    glow: 'glow-violet',
    color: 'beam-violet',
  },
  {
    icon: Building2,
    title: 'Bühnenbau',
    desc: 'Modulare Bühnen, Truss-Rigging, Dächer & Dekoration — sichere Konstruktion mit TÜV-Zertifikat.',
    items: ['Layher & Prolyft Truss', 'Bühnendächer bis 12m Spannweite', 'Individuelle Deko-Konzepte'],
    image: 'https://images.pexels.com/photos/12787862/pexels-photo-12787862.jpeg?auto=compress&cs=tinysrgb&w=1200',
    glow: 'glow-gold',
    color: 'gold-300',
  },
  {
    icon: MonitorPlay,
    title: 'LED-Wände & Videotechnik',
    desc: 'HD-LED-Screens, Projection, Kameras & Livestream — jedes Detail perfekt ins Bild gesetzt.',
    items: ['Absen & ROE LED-Panels', '4K Livestream-Produktion', 'Multi-Camera Setup'],
    image: 'https://images.pexels.com/photos/37668809/pexels-photo-37668809.jpeg?auto=compress&cs=tinysrgb&w=1200',
    glow: 'glow-cyan',
    color: 'beam-cyan',
  },
];

function ServiceCard({ service, index, visible }: { service: typeof SERVICES[0]; index: number; visible: boolean }) {
  const { ref, visible: cardVisible } = useReveal({ threshold: 0.2 });
  const Icon = service.icon;
  const show = visible || cardVisible;

  return (
    <div
      ref={ref}
      className={`glass-card glass-card-hover rounded-sm overflow-hidden group cursor-pointer transition-all duration-700 ${service.glow}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.9)',
      }}
    >
      {/* Image */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

        {/* Icon badge */}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-sm bg-ink-900/80 gold-border flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-6 h-6 text-gold-300" strokeWidth={1.2} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="display-heading text-xl md:text-2xl text-cream mb-3 group-hover:gold-text transition-all">
          {service.title}
        </h3>
        <p className="text-sm text-cream/50 leading-relaxed mb-5">{service.desc}</p>
        <ul className="space-y-2">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-cream/40">
              <span className="w-1 h-1 rounded-full bg-gold-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Leistungen() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Leistungen</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream max-w-3xl mx-auto">
            Technik, die Ihr Event zum Erlebnis macht
          </h2>
          <p className="mt-6 text-cream/40 max-w-2xl mx-auto">
            Vier Disziplinen, ein Team. Wir liefern jedes Element einer
            unvergesslichen Show aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
