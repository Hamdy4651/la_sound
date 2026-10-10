import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const FAQS = [
  {
    q: 'In welchem Radius setzt LA SOUND Events um?',
    a: 'Wir sind deutschlandweit tätig — von Hamburg bis München, von Köln bis Berlin. Bei internationalen Projekten arbeiten wir mit unserem Partnernetzwerk zusammen. An- und Abreise sind im Angebot transparent ausgewiesen.',
  },
  {
    q: 'Wie schnell kann LA SOUND eine Veranstaltung aufbauen?',
    a: 'Je nach Eventgröße planen wir Aufbauzeiten von 4 Stunden (kleere Firmenevents) bis zu 3 Tagen (Großkonzerte mit Truss-Rigging). In dringenden Fällen bietet unser Express-Service einen Aufbau innerhalb von 24 Stunden nach Auftragsbestätigung.',
  },
  {
    q: 'Sind LA SOUND und das Equipment versichert?',
    a: 'Ja. Wir verfügen über eine Veranstaltungshaftpflichtversicherung bis 10 Mio. €, eine Produkthaftpflichtversicherung und eine Maschinenversicherung. Alle unsere Techniker sind berufsgenossenschaftlich versichert. Zertifikate senden wir auf Anfrage gerne zu.',
  },
  {
    q: 'Bietet LA SOUND auch Betreuung und Technik-Hotline während des Events?',
    a: 'Absolut. Während der gesamten Veranstaltung ist mindestens ein Techniker vor Ort. Zusätzlich bieten wir eine 24/7-Hotline für Notfälle. Bei Großevents besetzen wir das Technik-Team durchgehend mit Schichten.',
  },
  {
    q: 'Wie früh sollten wir LA SOUND buchen?',
    a: 'Für optimale Verfügbarkeit empfehlen wir eine Buchung 3–6 Monate vor dem Event. Kurzfristige Anfragen realisieren wir jedoch whenever möglich — besonders im Bereich Firmenevents und Konferenzen.',
  },
  {
    q: 'Können wir einzelne Services buchen oder nur das Gesamtpaket?',
    a: 'Beides ist möglich. Sie können nur Tontechnik, nur Licht oder nur LED-Video buchen — oder den Full-Service aus einer Hand. Gerne stellen wir Ihnen ein individuelles Paket zusammen, das genau zu Ihrem Event und Budget passt.',
  },
];

function FaqItem({ faq, index, visible }: { faq: typeof FAQS[0]; index: number; visible: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass-card rounded-sm overflow-hidden transition-all duration-700"
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
      >
        <span className="text-sm md:text-base text-cream font-medium">{faq.q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-gold-300 text-ink-900' : 'gold-border text-gold-300'}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div className={`faq-answer px-6 ${open ? 'open pb-5' : ''}`}>
        <p className="text-sm text-cream/50 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-cream overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold-500 mb-4">FAQ</p>
          <h2 className="display-heading text-3xl md:text-5xl text-ink-900">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-6 text-ink-900/50 max-w-2xl mx-auto">
            Antworten auf die Fragen, die uns am häufigsten erreicht werden.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
