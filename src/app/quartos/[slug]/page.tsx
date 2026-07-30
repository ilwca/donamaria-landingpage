import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getAccommodationBySlug } from "@/data/rooms";
import RoomDetail from "@/components/RoomDetail";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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

  const url = `${SITE_URL}/quartos/${room.slug}`;
  const title = `${room.name} em Campo Alegre, Paranã (TO)`;
  const image = room.images[0];

  return {
    title,
    description: room.shortDescription,
    keywords: [room.name, "hospedagem Campo Alegre Paranã", "pousada Tocantins"],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} — ${SITE_NAME}`,
      description: room.shortDescription,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description: room.shortDescription,
      images: image ? [image] : undefined,
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getAccommodationBySlug(slug);

  if (!room || room.type !== "quarto") {
    notFound();
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Quartos", item: `${SITE_URL}/#quartos` },
      {
        "@type": "ListItem",
        position: 3,
        name: room.name,
        item: `${SITE_URL}/quartos/${room.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <RoomDetail accommodation={room} />
    </>
  );
}
