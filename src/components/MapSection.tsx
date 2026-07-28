import { MapPin, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

// Coordenadas placeholder (Palmas, TO) até termos o endereço real da pousada.
// Trocar via NEXT_PUBLIC_MAPS_LAT / NEXT_PUBLIC_MAPS_LNG / NEXT_PUBLIC_MAPS_ADDRESS.
const lat = process.env.NEXT_PUBLIC_MAPS_LAT || "-10.1689";
const lng = process.env.NEXT_PUBLIC_MAPS_LNG || "-48.3317";
const address =
  process.env.NEXT_PUBLIC_MAPS_ADDRESS ||
  "Endereço a confirmar — distrito no interior do Tocantins";

export default function MapSection() {
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=13&output=embed`;

  return (
    <section id="localizacao" className="py-section-gap px-margin-mobile max-w-container-max mx-auto scroll-mt-14">
      <Reveal as="div" className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Onde Estamos</h2>
        <div className="w-24 h-px bg-tertiary-container mx-auto" />
      </Reveal>

      <Reveal
        as="div"
        className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch rounded-xl overflow-hidden border border-outline-variant"
      >
        <div className="md:col-span-2 h-[320px] md:h-[420px] bg-surface-container">
          <iframe
            title="Localização da Pousada Dona Maria"
            src={embedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-8 flex flex-col justify-center gap-4 bg-surface-container-low">
          <MapPin className="w-8 h-8 text-primary" strokeWidth={1.75} />
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Pousada Dona Maria
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{address}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary uppercase tracking-widest border-b border-primary/50 pb-1 w-fit hover:border-primary"
          >
            Abrir no Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
