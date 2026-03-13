export const locales = ["en", "zh-HK"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-HK";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
