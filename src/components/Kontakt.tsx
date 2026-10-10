import { useState, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';

const EVENT_TYPES = ['Konzert', 'Messe & Kongress', 'Firmenevent', 'Gala', 'Hochzeit', 'Andere'];
const SERVICE_OPTIONS = ['Tontechnik', 'Lichttechnik', 'Bühnenbau', 'LED & Videotechnik'];

export default function Kontakt() {
  const { ref, visible } = useReveal();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    guests: '',
    services: [] as string[],
    message: '',
  });

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const { error: dbError } = await supabase.from('contact_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        event_type: form.event_type,
        event_date: form.event_date || null,
        guests: form.guests ? parseInt(form.guests) : null,
        services: form.services.length > 0 ? form.services : null,
        message: form.message || null,
      });

      if (dbError) throw dbError;

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        event_date: '',
        guests: '',
        services: [],
        message: '',
      });
    } catch (err) {
      setError('Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="kontakt" className="relative py-20 md:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="light-beam light-beam-gold" style={{ left: '20%', top: '0', transform: 'rotate(-10deg)', animation: 'beam-sweep 10s ease-in-out infinite' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Kontakt</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Angebot anfordern
          </h2>
          <p className="mt-6 text-cream/40 max-w-2xl mx-auto">
            Erzählen Sie uns von Ihrem Event. Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div
            className="lg:col-span-3 glass-card rounded-sm p-6 md:p-8 transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(50px)',
            }}
          >
            {success ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-16 h-16 text-gold-300 mb-4" />
                <h3 className="display-heading text-2xl text-cream mb-2">Vielen Dank!</h3>
                <p className="text-cream/50 max-w-md">
                  Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 btn-ghost px-6 py-3 rounded-sm text-sm"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold-300 focus:outline-none transition-colors"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">E-Mail *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold-300 focus:outline-none transition-colors"
                      placeholder="max@firma.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold-300 focus:outline-none transition-colors"
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Eventtyp *</label>
                    <select
                      required
                      value={form.event_type}
                      onChange={(e) => setForm({ ...form, event_type: e.target.value })}
                      className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream focus:border-gold-300 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Datum</label>
                    <input
                      type="date"
                      value={form.event_date}
                      onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                      className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream focus:border-gold-300 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Gäste (ca.)</label>
                    <input
                      type="number"
                      min="1"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold-300 focus:outline-none transition-colors"
                      placeholder="500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Gewünschte Leistungen</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`px-4 py-2 text-xs rounded-sm transition-all duration-300 ${
                          form.services.includes(s)
                            ? 'btn-gold'
                            : 'gold-border text-cream/60 hover:text-gold-300'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-cream/50 mb-2 tracking-wide uppercase">Nachricht</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-ink-800 gold-border rounded-sm px-4 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold-300 focus:outline-none transition-colors resize-none"
                    placeholder="Erzählen Sie uns mehr über Ihr Event..."
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-3 text-sm text-red-400 bg-red-500/10 px-4 py-3 rounded-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full py-4 rounded-sm text-base flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-ink-900/30 border-t-ink-900 rounded-full animate-spin" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Angebot anfordern
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div
            className="lg:col-span-2 space-y-6 transition-all duration-1000"
            style={{
              transitionDelay: '200ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(50px)',
            }}
          >
            <div className="glass-card rounded-sm p-6">
              <MapPin className="w-6 h-6 text-gold-300 mb-3" strokeWidth={1.2} />
              <h3 className="text-sm text-cream font-medium mb-1">Adresse</h3>
              <p className="text-sm text-cream/50 leading-relaxed">
                LA SOUND<br />
        Gewerbestraße 12<br />
        80939 München, Deutschland
              </p>
            </div>

            <div className="glass-card rounded-sm p-6">
              <Phone className="w-6 h-6 text-gold-300 mb-3" strokeWidth={1.2} />
              <h3 className="text-sm text-cream font-medium mb-1">Telefon</h3>
              <a href="tel:+498912345678" className="text-sm text-cream/50 hover:text-gold-300 transition-colors">
                +49 89 1234 5678
              </a>
            </div>

            <div className="glass-card rounded-sm p-6">
              <Mail className="w-6 h-6 text-gold-300 mb-3" strokeWidth={1.2} />
              <h3 className="text-sm text-cream font-medium mb-1">E-Mail</h3>
              <a href="mailto:info@lasound.de" className="text-sm text-cream/50 hover:text-gold-300 transition-colors">
                info@lasound.de
              </a>
            </div>

            <a
              href="https://wa.me/498912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-sm p-6 flex items-center gap-4 group"
            >
              <MessageCircle className="w-6 h-6 text-gold-300 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <div>
                <h3 className="text-sm text-cream font-medium">WhatsApp</h3>
                <p className="text-sm text-cream/50">Schnelle Anfragen direkt per Chat</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
