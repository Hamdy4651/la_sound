import { useReveal } from '@/hooks/useReveal';

const BRANDS = [
  { name: 'L-Acoustics', category: 'Sound' },
  { name: 'd&b audiotechnik', category: 'Sound' },
  { name: 'DiGiCo', category: 'Mixing' },
  { name: 'Yamaha Pro', category: 'Mixing' },
  { name: 'Robe', category: 'Lighting' },
  { name: 'Martin Pro', category: 'Lighting' },
  { name: 'MA Lighting', category: 'Control' },
  { name: 'Absen', category: 'LED' },
  { name: 'ROE Visual', category: 'LED' },
  { name: 'Shure', category: 'Wireless' },
  { name: 'Sennheiser', category: 'Wireless' },
  { name: 'Layher', category: 'Staging' },
];

export default function TechnikPartner() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Technik & Partner</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream max-w-3xl mx-auto">
            Nur Weltklasse-Technik ist gut genug
          </h2>
          <p className="mt-6 text-cream/40 max-w-2xl mx-auto">
            Wir setzen ausschließlich auf Equipment von Branchenführern. Denn
            die beste Planung verdient die beste Hardware.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {BRANDS.map((brand, i) => (
            <div
              key={brand.name}
              className="glass-card glass-card-hover rounded-sm p-5 md:p-6 text-center transition-all duration-600"
              style={{
                transitionDelay: `${i * 60}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              <div className="text-cream/40 group-hover:text-gold-300 text-sm md:text-base font-display font-semibold transition-colors">
                {brand.name}
              </div>
              <div className="text-xs text-gold-300/40 mt-1 tracking-wider uppercase">
                {brand.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
