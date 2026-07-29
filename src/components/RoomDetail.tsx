import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Users } from "lucide-react";
import type { Accommodation } from "@/data/rooms";
import { accommodations } from "@/data/rooms";
import ImagePlaceholder from "./ImagePlaceholder";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function RoomDetail({ accommodation }: { accommodation: Accommodation }) {
  const others = accommodations.filter((a) => a.slug !== accommodation.slug).slice(0, 3);
  const [mainImage, detailImage1, detailImage2] = accommodation.images;

  return (
    <div className="pb-24 md:pb-0">
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8">
        <Link
          href="/#quartos"
          className="inline-flex items-center gap-2 font-label-lg text-label-lg text-secondary hover:text-primary uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Todas as acomodações
        </Link>
      </section>

      <Reveal as="section" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl overflow-hidden">
          <div className="md:col-span-2 h-[320px] md:h-[460px] relative">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={accommodation.name}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                priority
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder label={accommodation.name} />
            )}
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4 h-[460px]">
            <div className="relative">
              {detailImage1 ? (
                <Image
                  src={detailImage1}
                  alt={`${accommodation.name} — detalhe 1`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              ) : (
                <ImagePlaceholder label={`${accommodation.name} — detalhe 1`} />
              )}
            </div>
            <div className="relative">
              {detailImage2 ? (
                <Image
                  src={detailImage2}
                  alt={`${accommodation.name} — detalhe 2`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              ) : (
                <ImagePlaceholder label={`${accommodation.name} — detalhe 2`} />
              )}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">
              {accommodation.type === "camping" ? "Camping" : "Quarto"}
            </p>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              {accommodation.name}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {accommodation.longDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 text-on-surface-variant">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-label-lg text-label-lg">{accommodation.capacity}</span>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-4">
              O que tem por aqui
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accommodation.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit border border-outline-variant rounded-xl p-8 bg-surface-container-low space-y-6">
          {accommodation.priceFrom && (
            <p className="font-headline-sm text-headline-sm text-primary">{accommodation.priceFrom}</p>
          )}
          <p className="font-body-md text-body-md text-on-surface-variant">
            Fale direto com a Dona Maria pelo WhatsApp para confirmar datas e valores.
          </p>
          <WhatsAppButton message={accommodation.whatsappMessage} className="w-full">
            Reservar pelo WhatsApp
          </WhatsAppButton>
        </aside>
      </Reveal>

      {others.length > 0 && (
        <Reveal as="section" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <h2 className="font-headline-md text-headline-md text-primary mb-8">Outras acomodações</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={item.type === "camping" ? "/camping" : `/quartos/${item.slug}`}
                className="group relative overflow-hidden rounded-xl border border-outline-variant h-[240px] block"
              >
                {item.images[0] ? (
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <ImagePlaceholder label={item.name} className="transition-transform duration-700 group-hover:scale-105" />
                )}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-primary/90 to-transparent text-surface">
                  <h3 className="font-headline-sm text-headline-sm">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      )}

      {/* CTA fixo no mobile — evita perder a conversão ao rolar a página */}
      <div className="md:hidden fixed bottom-16 left-0 w-full px-4 pb-2 z-40">
        <WhatsAppButton message={accommodation.whatsappMessage} className="w-full shadow-lg">
          Reservar
        </WhatsAppButton>
      </div>
    </div>
  );
}
