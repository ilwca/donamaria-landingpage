import { rooms, camping } from "@/data/rooms";
import RoomCard from "./RoomCard";
import Reveal from "./Reveal";

const spanClass: Record<string, string> = {
  large: "md:col-span-8",
  medium: "md:col-span-4",
  small: "md:col-span-4",
};

export default function RoomsGrid() {
  return (
    <section id="quartos" className="py-section-gap px-margin-mobile max-w-container-max mx-auto scroll-mt-14">
      <Reveal as="div" className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Nossas Acomodações
        </h2>
        <div className="w-24 h-px bg-tertiary-container mx-auto" />
      </Reveal>

      <Reveal as="div" className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {rooms.map((room) => (
          <RoomCard
            key={room.slug}
            accommodation={room}
            className={spanClass[room.gridSpan]}
            heightClassName={room.gridSpan === "large" ? "h-[420px] md:h-[500px]" : "h-[320px] md:h-[400px]"}
          />
        ))}
      </Reveal>

      <Reveal as="div" className="mt-gutter">
        <RoomCard
          accommodation={camping}
          heightClassName="h-[320px] md:h-[380px]"
        />
      </Reveal>
    </section>
  );
}
