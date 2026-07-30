import type { Metadata } from "next";
import { camping } from "@/data/rooms";
import RoomDetail from "@/components/RoomDetail";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const url = `${SITE_URL}/camping`;
const title = "Camping em Campo Alegre, Paranã (TO)";
const image = camping.images[0];

export const metadata: Metadata = {
  title,
  description: camping.shortDescription,
  keywords: ["camping Campo Alegre Paranã", "camping Tocantins", "camping perto de cachoeira"],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: `${title} — ${SITE_NAME}`,
    description: camping.shortDescription,
    images: image ? [image] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — ${SITE_NAME}`,
    description: camping.shortDescription,
    images: image ? [image] : undefined,
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Camping", item: url },
  ],
};

export default function CampingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <RoomDetail accommodation={camping} />
    </>
  );
}
