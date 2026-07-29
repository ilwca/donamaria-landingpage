import { ChevronDown } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import HeroBackground from "./HeroBackground";

const HERO_MESSAGE =
  "Olá! Gostaria de reservar uma estadia na Pousada Dona Maria.";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-primary">
      <HeroBackground />
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl py-32">
        <p className="font-label-lg text-label-lg text-tertiary-fixed uppercase tracking-[0.3em] mb-6">
          Interior do Tocantins
        </p>
        <h1 className="font-display-lg text-headline-lg md:text-display-lg text-surface mb-6 leading-tight">
          Sinta o aconchego da nossa terra.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary-container mb-10 max-w-2xl mx-auto">
          Hospitalidade, tempero de casa e as cachoeiras mais bonitas da
          região — bem-vindo à Pousada Dona Maria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton message={HERO_MESSAGE} variant="primary" className="bg-surface !text-primary hover:!bg-surface-container-low">
            Reservar Agora
          </WhatsAppButton>
          <a
            href="#historia"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-surface text-surface font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface/10 transition-all"
          >
            Conheça a Pousada
          </a>
        </div>
      </div>
      <a
        href="#quartos"
        aria-label="Rolar para conhecer os quartos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-surface"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
