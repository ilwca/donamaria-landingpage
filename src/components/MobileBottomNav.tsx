import { BedDouble, Compass, Tent, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, GENERIC_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

const items = [
  { href: "/#quartos", label: "Quartos", icon: BedDouble },
  { href: "/#cachoeiras", label: "Cachoeiras", icon: Compass },
  { href: "/camping", label: "Camping", icon: Tent },
];

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface border-t border-outline-variant flex justify-around items-center px-2 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2">
      {items.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="flex flex-col items-center justify-center gap-1 text-secondary px-3 py-1"
        >
          <Icon className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-label-sm text-label-sm">{label}</span>
        </a>
      ))}
      <a
        href={buildWhatsAppLink(GENERIC_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-primary text-surface rounded-full px-4 py-2"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
        <span className="font-label-sm text-label-sm">Reservar</span>
      </a>
    </nav>
  );
}
