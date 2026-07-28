"use client";

import { useState, type FormEvent } from "react";
import { Calendar, Users } from "lucide-react";
import { accommodations } from "@/data/rooms";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import Reveal from "./Reveal";

const guestOptions = ["1 pessoa", "2 pessoas", "Família (3+)"];

export default function BookingCtaSection() {
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState(guestOptions[1]);
  const [accommodationSlug, setAccommodationSlug] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const accommodation = accommodations.find((a) => a.slug === accommodationSlug);

    const lines = ["Olá! Gostaria de verificar disponibilidade na Pousada Dona Maria."];
    if (checkIn) {
      const formatted = new Date(`${checkIn}T00:00:00`).toLocaleDateString("pt-BR");
      lines.push(`Data prevista de check-in: ${formatted}.`);
    }
    lines.push(`Número de hóspedes: ${guests}.`);
    if (accommodation) {
      lines.push(`Interesse: ${accommodation.name}.`);
    }

    window.open(buildWhatsAppLink(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="reservar" className="py-section-gap px-margin-mobile scroll-mt-14">
      <Reveal
        as="div"
        className="max-w-4xl mx-auto bg-surface-container-high rounded-2xl p-8 md:p-16 text-center border border-outline-variant shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
          Pronto para desconectar?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Conte pra gente quando pretende chegar e falamos com você pelo WhatsApp
          para confirmar a disponibilidade.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="check-in" className="font-label-sm text-label-sm text-secondary px-1 uppercase tracking-wider">
              Check-in
            </label>
            <div className="relative">
              <input
                id="check-in"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg p-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
              <Calendar className="absolute right-4 top-4 w-5 h-5 text-outline pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="guests" className="font-label-sm text-label-sm text-secondary px-1 uppercase tracking-wider">
              Hóspedes
            </label>
            <div className="relative">
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg p-4 appearance-none focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              >
                {guestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <Users className="absolute right-4 top-4 w-5 h-5 text-outline pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="accommodation" className="font-label-sm text-label-sm text-secondary px-1 uppercase tracking-wider">
              Acomodação
            </label>
            <select
              id="accommodation"
              value={accommodationSlug}
              onChange={(e) => setAccommodationSlug(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-lg p-4 appearance-none focus:ring-1 focus:ring-primary focus:border-primary outline-none"
            >
              <option value="">Sem preferência</option>
              {accommodations.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="bg-primary text-surface py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary-container transition-all shadow-md"
            >
              Verificar Disponibilidade
            </button>
          </div>
        </form>
        <p className="mt-8 font-label-sm text-label-sm text-secondary italic">
          * Você será direcionado ao WhatsApp da pousada para confirmar sua reserva.
        </p>
      </Reveal>
    </section>
  );
}
