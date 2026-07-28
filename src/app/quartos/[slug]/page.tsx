import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getAccommodationBySlug } from "@/data/rooms";
import RoomDetail from "@/components/RoomDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getAccommodationBySlug(slug);
  if (!room) return {};

  return {
    title: `${room.name} — Pousada Dona Maria`,
    description: room.shortDescription,
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getAccommodationBySlug(slug);

  if (!room || room.type !== "quarto") {
    notFound();
  }

  return <RoomDetail accommodation={room} />;
}
