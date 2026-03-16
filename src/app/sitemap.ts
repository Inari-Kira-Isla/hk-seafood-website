import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/sea-urchin",
    "/sea-urchin/varieties",
    "/sea-urchin/grading",
    "/sea-urchin/storage",
    "/sea-urchin/season",
    "/sea-urchin/sourcing",
    "/sea-urchin/wholesale",
    "/salmon",
    "/salmon/varieties",
    "/salmon/grading",
    "/salmon/storage",
    "/market/hk-macau-overview",
    "/blog",
    "/blog/sea-urchin-guide-2026",
    "/blog/salmon-sourcing-guide-hk-macau",
  ];

  const highPriority = ["", "/faq", "/sea-urchin", "/salmon", "/sea-urchin/wholesale"];
  const blogPages = ["/blog", "/blog/sea-urchin-guide-2026", "/blog/salmon-sourcing-guide-hk-macau"];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: (highPriority.includes(page) ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: highPriority.includes(page) ? 1.0 : blogPages.includes(page) ? 0.9 : 0.8,
    }))
  );
}
