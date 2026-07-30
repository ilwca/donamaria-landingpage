import type { MetadataRoute } from "next";
import { rooms } from "@/data/rooms";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const roomEntries: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${SITE_URL}/quartos/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/camping`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...roomEntries,
  ];
}
