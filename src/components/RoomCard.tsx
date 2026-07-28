import Link from "next/link";
import type { Accommodation } from "@/data/rooms";
import ImagePlaceholder from "./ImagePlaceholder";

type Props = {
  accommodation: Accommodation;
  className?: string;
  heightClassName?: string;
};

export default function RoomCard({
  accommodation,
  className = "",
  heightClassName = "h-[400px]",
}: Props) {
  const href =
    accommodation.type === "camping" ? "/camping" : `/quartos/${accommodation.slug}`;

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container block ${heightClassName} ${className}`}
    >
      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
        <ImagePlaceholder label={accommodation.name} />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-primary/90 to-transparent text-surface">
        <h3 className="font-headline-sm text-headline-sm mb-2">{accommodation.name}</h3>
        <p className="font-body-md text-body-md opacity-90 mb-4 max-w-md">
          {accommodation.shortDescription}
        </p>
        <span className="font-label-lg text-label-lg border-b border-surface/50 pb-1">
          Ver Detalhes
        </span>
      </div>
    </Link>
  );
}
