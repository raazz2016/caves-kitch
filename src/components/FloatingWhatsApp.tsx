import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phoneNumber = '17408935017'; // Remove + and spaces
  const message = encodeURIComponent("Hi! I'd like to reserve a table at Cave's Kitchen. Please assist me.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg shadow-black/30 transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-cave-charcoal text-cave-cream text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-cave-gold/20">
        Chat with us
      </span>
    </a>
  );
}
