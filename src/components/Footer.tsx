import { Instagram, Phone } from "lucide-react";
import { buildWhatsAppLink, GENERIC_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

const footerLinks = [
  { href: "/#quartos", label: "Quartos" },
  { href: "/camping", label: "Camping" },
  { href: "/#cachoeiras", label: "Cachoeiras" },
  { href: "/#localizacao", label: "Localização" },
];

const instagram = "https://www.instagram.com/pousadadonamariaoderci/";
const phoneDisplay = "(63) 98444-8039";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest py-16 px-margin-mobile border-t border-outline-variant mb-16 md:mb-0">
      <div className="max-w-container-max mx-auto flex flex-col items-center gap-8">
        <span className="font-display-lg text-headline-md tracking-[0.2em] text-primary">
          POUSADA DONA MARIA
        </span>
        <nav className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-6">
          <a
            href={buildWhatsAppLink(GENERIC_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-surface transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.02-9.84Zm0 18.06h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.27-4.4c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.28.86 5.84 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.71 8.24-8.26 8.24Zm4.52-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
            </svg>
          </a>
          <a
            href={`mailto:${instagram}`}
            aria-label="E-mail"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-surface transition-all"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.75} />
          </a>
          <a
            href={buildWhatsAppLink(GENERIC_WHATSAPP_MESSAGE)}
            aria-label="Telefone"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-surface transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} />
          </a>
        </div>
        <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-4 text-center">
          © {new Date().getFullYear()} Pousada Dona Maria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
