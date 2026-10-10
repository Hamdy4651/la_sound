import { useReveal } from '@/hooks/useReveal';

const TEAM = [
  { name: 'Marcus Wendler', role: 'Geschäftsführer & Cheftontechniker', image: 'https://images.pexels.com/photos/35964821/pexels-photo-35964821.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Stefan Köhler', role: 'Leitung Lichttechnik', image: 'https://images.pexels.com/photos/30033734/pexels-photo-30033734.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Julia Hartmann', role: 'Projektleitung & Event-Management', image: 'https://images.pexels.com/photos/27015641/pexels-photo-27015641.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Andreas Vogt', role: 'Leitung Videotechnik & LED', image: 'https://images.pexels.com/photos/30910157/pexels-photo-30910157.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Lisa Neumann', role: 'Technische Planung & Rigging', image: 'https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Tobias Riedel', role: 'Show-Operator & DMX-Programmierer', image: 'https://images.pexels.com/photos/28387101/pexels-photo-28387101.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function Team() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Team</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Die Menschen hinter der Technik
          </h2>
          <p className="mt-6 text-cream/40 max-w-2xl mx-auto">
            Über 45 feste Mitarbeiter und ein Netzwerk von mehr als 100
            freien Technikern stehen bereit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="group transition-all duration-700"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden gold-border">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-300/0 to-gold-300/0 group-hover:from-gold-300/10 transition-all duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="display-heading text-sm md:text-base text-cream">{member.name}</h3>
                  <p className="text-xs text-gold-300/70 mt-1">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
