import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

const blogSlugs = [
  "sea-urchin-guide-2026",
  "salmon-sourcing-guide-hk-macau",
  "salmon-sourcing-guide-comprehensive",
  "japanese-uni-varieties-guide",
  "salmon-origin-comparison",
  "sea-urchin-quality-standards",
  "sustainable-seafood-sourcing",
  "hk-seafood-market-trends-2026",
  "michelin-omakase-sourcing",
  "hotel-banquet-scaling",
  "macau-gaming-compliance",
  "fine-dining-differentiation",
  "cold-chain-logistics",
  "food-safety-compliance-guide",
  "premium-seafood-economics",
  "supplier-relationships-handbook",
  "seasonal-planning-calendar",
  "sourcing-strategy-decoded",
  "uni-season-guide-2026",
  "salmon-buyers-checklist",
];

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
    ...blogSlugs.map((slug) => `/blog/${slug}`),
  ];

  const highPriority = ["", "/faq", "/sea-urchin", "/salmon", "/sea-urchin/wholesale"];
  const isBlogPage = (page: string) => page === "/blog" || page.startsWith("/blog/");

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date("2026-04-27"),
      changeFrequency: (highPriority.includes(page) || isBlogPage(page) ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: highPriority.includes(page) ? 1.0 : isBlogPage(page) ? 0.9 : 0.8,
    }))
  );
}
