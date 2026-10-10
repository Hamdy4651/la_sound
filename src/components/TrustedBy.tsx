const CLIENTS = [
  'SAP Arena', 'Mercedes-Benz Arena', 'Messe Frankfurt', 'Allianz Arena',
  'BMW Welt', 'Hyatt Regency', 'RTL Live', 'Deutsche Bank Park',
  'Elbphilharmonie', 'Berlin Music Week', 'CeBIT', 'IFA Berlin',
  'Veltins Arena', 'KölnArena', 'Olympiahalle München',
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 md:py-24 bg-ink-900 border-y border-gold-300/10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p className="section-label mb-4">Vertrauen & Partnerschaft</p>
        <h2 className="display-heading text-2xl md:text-4xl text-cream">
          Vertrauen von führenden Unternehmen & Veranstaltern
        </h2>
        <p className="mt-4 text-cream/40 text-sm md:text-base">
          Technikpartner bei Events mit über 250.000 Gästen jährlich
        </p>
      </div>

      <div className="marquee-container py-6">
        <div className="marquee-track">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span
              key={i}
              className="mx-8 md:mx-12 text-lg md:text-2xl font-display font-medium text-cream/30 hover:text-gold-300 transition-colors duration-500 cursor-default whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee-container py-6">
        <div className="marquee-track-reverse">
          {[...CLIENTS.slice().reverse(), ...CLIENTS.slice().reverse()].map((client, i) => (
            <span
              key={i}
              className="mx-8 md:mx-12 text-lg md:text-2xl font-display font-medium text-cream/30 hover:text-gold-300 transition-colors duration-500 cursor-default whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
