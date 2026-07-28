import { waterfalls } from "@/data/waterfalls";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

export default function WaterfallsSection() {
  return (
    <section id="cachoeiras" className="py-section-gap px-margin-mobile max-w-container-max mx-auto scroll-mt-14">
      <Reveal as="div" className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">A Magia das Águas</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Descubra as cachoeiras que cercam nosso distrito — o destino favorito de quem
          busca renovar as energias no interior do Tocantins.
        </p>
        <div className="w-24 h-px bg-tertiary-container mx-auto mt-8" />
      </Reveal>

      <Reveal as="div" className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {waterfalls.map((fall) => (
          <div key={fall.name} className="group flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-xl border border-outline-variant">
              <ImagePlaceholder label={fall.name} className="transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{fall.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{fall.description}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
