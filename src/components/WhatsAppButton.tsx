import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/498912345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 btn-gold px-5 py-3.5 rounded-full shadow-lg group"
      aria-label="WhatsApp Anfrage"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold whitespace-nowrap">Jetzt anfragen</span>
      <span className="absolute inset-0 rounded-full animate-ping bg-gold-300/20 -z-10" />
    </a>
  );
}
