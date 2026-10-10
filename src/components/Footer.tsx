import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-700 border-t border-gold-300/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-sm gold-border flex items-center justify-center">
                <span className="display-heading text-lg gold-text">L</span>
              </div>
              <div>
                <div className="display-heading text-lg text-cream">LA SOUND</div>
                <div className="text-xs text-cream/40 tracking-wider uppercase">Event Production & Live Entertainment</div>
              </div>
            </div>
            <p className="text-sm text-cream/40 leading-relaxed">
              Technische Eventproduktion für Konzerte, Shows, Festivals und Live-Entertainment. Sound, Licht, Screens und Produktionsmanagement aus einer Hand.
            </p>
            <p className="mt-4 text-xs text-gold-300/60 tracking-wider uppercase">EVENT PRODUCTION • LIVE ENTERTAINMENT</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm text-cream font-medium mb-4 tracking-wider uppercase">Leistungen</h4>
            <ul className="space-y-2">
              {['Tontechnik', 'Lichttechnik', 'Bühnenbau', 'LED & Videotechnik', 'Full-Service Pakete'].map((s) => (
                <li key={s}>
                  <a href="#leistungen" className="text-sm text-cream/40 hover:text-gold-300 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm text-cream font-medium mb-4 tracking-wider uppercase">Unternehmen</h4>
            <ul className="space-y-2">
              {[
                { label: 'Über uns', href: '#ueber-uns' },
                { label: 'Referenzen', href: '#referenzen' },
                { label: 'Team', href: '#team' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-cream/40 hover:text-gold-300 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm text-cream font-medium mb-4 tracking-wider uppercase">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream/40">
                <MapPin className="w-4 h-4 text-gold-300/60 mt-0.5 flex-shrink-0" />
                <span>Gewerbestraße 12, 80939 München</span>
              </li>
              <li>
                <a href="tel:+498912345678" className="flex items-center gap-2 text-sm text-cream/40 hover:text-gold-300 transition-colors">
                  <Phone className="w-4 h-4 text-gold-300/60 flex-shrink-0" />
                  +49 89 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@lasound.de" className="flex items-center gap-2 text-sm text-cream/40 hover:text-gold-300 transition-colors">
                  <Mail className="w-4 h-4 text-gold-300/60 flex-shrink-0" />
                  info@lasound.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gold-300/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} LA SOUND. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {['Impressum', 'Datenschutz', 'AGB'].map((link) => (
              <a key={link} href="#" className="text-xs text-cream/30 hover:text-gold-300 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
