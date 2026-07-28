"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { GENERIC_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

const navLinks = [
  { href: "/#quartos", label: "Quartos" },
  { href: "/camping", label: "Camping" },
  { href: "/#cachoeiras", label: "Cachoeiras" },
  { href: "/#localizacao", label: "Localização" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-outline-variant transition-all duration-300 ${
        scrolled ? "bg-surface/95 shadow-sm py-1" : "bg-surface/90 py-2"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-14 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-primary"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link
            href="/"
            className="font-display-lg text-headline-sm tracking-widest text-primary"
          >
            DONA MARIA
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-lg text-label-lg text-secondary uppercase transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <WhatsAppButton
            message={GENERIC_WHATSAPP_MESSAGE}
            className="!px-5 !py-2.5 hidden sm:inline-flex"
          >
            Reservar
          </WhatsAppButton>
          <WhatsAppButton
            message={GENERIC_WHATSAPP_MESSAGE}
            className="!px-3 !py-2.5 sm:hidden"
            showIcon
          >
            <span className="sr-only">Reservar pelo WhatsApp</span>
          </WhatsAppButton>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-margin-mobile pb-4 bg-surface/95 border-t border-outline-variant">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-label-lg text-label-lg text-on-surface-variant uppercase py-3 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
