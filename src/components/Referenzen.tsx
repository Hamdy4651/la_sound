import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const CATEGORIES = ['Alle', 'Konzerte', 'Messen & Kongresse', 'Firmenevents', 'Galas', 'Hochzeiten'] as const;

const PROJECTS = [
  { title: 'Berlin Music Week — Hauptbühne', cat: 'Konzerte', image: 'https://images.pexels.com/photos/167514/pexels-photo-167514.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Sommernacht Open Air — Hamburg', cat: 'Konzerte', image: 'https://images.pexels.com/photos/3661650/pexels-photo-3661650.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'IFA Berlin — Messestand Premium', cat: 'Messen & Kongresse', image: 'https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Tech Conference — Frankfurt', cat: 'Messen & Kongresse', image: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'BMW Firmenfeier — München', cat: 'Firmenevents', image: 'https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Jahresempfang — Stuttgart', cat: 'Firmenevents', image: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Goldene Gala — Düsseldorf', cat: 'Galas', image: 'https://images.pexels.com/photos/35042461/pexels-photo-35042461.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Award Night — Köln', cat: 'Galas', image: 'https://images.pexels.com/photos/14646741/pexels-photo-14646741.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Schlosshochzeit — Bayern', cat: 'Hochzeiten', image: 'https://images.pexels.com/photos/14148087/pexels-photo-14148087.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Traumhafte Hochzeitslocation', cat: 'Hochzeiten', image: 'https://images.pexels.com/photos/12688989/pexels-photo-12688989.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Clubtour — Arena Tour', cat: 'Konzerte', image: 'https://images.pexels.com/photos/5405838/pexels-photo-5405838.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Industrie-Messe — Hannover', cat: 'Messen & Kongresse', image: 'https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Referenzen() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState<string>('Alle');

  const filtered = active === 'Alle' ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Referenzen</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Events, die wir inszeniert haben
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs md:text-sm rounded-sm transition-all duration-300 ${
                active === cat
                  ? 'btn-gold'
                  : 'gold-border text-cream/60 hover:text-gold-300 hover:border-gold-300/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="project-card relative rounded-2xl overflow-hidden gold-border group cursor-pointer transition-all duration-700"
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: 1,
                transform: 'translateY(0) scale(1)',
              }}
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 glass-card px-3 py-1 text-xs tracking-wider uppercase text-gold-300">
                  {project.cat}
                </div>

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="display-heading text-lg text-cream">{project.title}</h3>
                </div>

                {/* Light sweep */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
