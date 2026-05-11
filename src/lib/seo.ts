import { locales, type Locale } from "@/i18n/config";

export function alternatesFor(locale: Locale, path: string = "") {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  const suffix = trimmed ? `/${trimmed}` : "";

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${baseUrl}/${l}${suffix}`;
  }

  return {
    canonical: `${baseUrl}/${locale}${suffix}`,
    languages,
  };
}
