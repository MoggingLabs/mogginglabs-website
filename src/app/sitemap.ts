import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { segments } from "@/content/segments";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/apply`, changeFrequency: "monthly", priority: 0.9 },
    ...segments.map((s) => ({
      url: `${SITE_URL}/for/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
