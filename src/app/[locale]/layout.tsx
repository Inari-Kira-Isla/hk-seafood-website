import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OrganizationJsonLd, WebSiteJsonLd, FAQJsonLd } from "./structured-data";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

  const verificationGoogle = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const verificationBing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.title}`,
    },
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        "zh-HK": `${baseUrl}/zh-HK`,
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      locale: locale === "zh-HK" ? "zh_HK" : "en_US",
      type: "website",
      siteName: locale === "zh-HK" ? "優質海膽及三文魚" : "Premium Sea Urchin & Salmon",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...(verificationGoogle || verificationBing
      ? {
          verification: {
            ...(verificationGoogle ? { google: verificationGoogle } : {}),
            other: verificationBing
              ? { "msvalidate.01": [verificationBing] }
              : {},
          },
        }
      : {}),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <html lang={locale === "zh-HK" ? "zh-Hant-HK" : "en"}>
      <body className="antialiased">
        <OrganizationJsonLd locale={locale} />
        <WebSiteJsonLd locale={locale} />
        <FAQJsonLd locale={locale} />
        {children}
      </body>
    </html>
  );
}
