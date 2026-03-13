import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/sea-urchin", "/salmon", "/blog", "/contact"];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" as const : "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );
}
