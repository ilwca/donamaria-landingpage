import type { Metadata } from "next";
import { camping } from "@/data/rooms";
import RoomDetail from "@/components/RoomDetail";

export const metadata: Metadata = {
  title: "Camping — Pousada Dona Maria",
  description: camping.shortDescription,
};

export default function CampingPage() {
  return <RoomDetail accommodation={camping} />;
}
