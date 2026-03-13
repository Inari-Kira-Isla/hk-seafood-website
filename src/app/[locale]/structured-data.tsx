import type { Locale } from "@/i18n/config";

type StructuredDataProps = {
  locale: Locale;
};

export function OrganizationJsonLd({ locale }: StructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: locale === "zh-HK" ? "海膽三文魚" : "Uni & Salmon",
    description:
      locale === "zh-HK"
        ? "香港及澳門領先的優質海膽及三文魚供應商。新鮮來自日本、加拿大及全球優質產地。"
        : "Hong Kong and Macau's leading supplier of premium sea urchin (uni) and salmon. Fresh from Japan, Canada, and worldwide sources.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://example.com",
    areaServed: [
      {
        "@type": "City",
        name: "Hong Kong",
        sameAs: "https://www.wikidata.org/wiki/Q8646",
      },
      {
        "@type": "City",
        name: "Macau",
        sameAs: "https://www.wikidata.org/wiki/Q14773",
      },
    ],
    knowsAbout: [
      "Sea urchin",
      "Uni",
      "海膽",
      "Salmon",
      "三文魚",
      "Seafood wholesale",
      "Seafood import",
      "Japanese uni",
      "Sashimi-grade salmon",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: locale === "zh-HK" ? "優質海膽" : "Premium Sea Urchin",
          category: "Seafood",
          description:
            locale === "zh-HK"
              ? "來自日本、加拿大等地的頂級海膽，適用於刺身及壽司"
              : "Premium uni sourced from Japan, Canada, and more. Ideal for sashimi and sushi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: locale === "zh-HK" ? "優質三文魚" : "Premium Salmon",
          category: "Seafood",
          description:
            locale === "zh-HK"
              ? "刺身級三文魚，新鮮空運到港，品質保證"
              : "Sashimi-grade salmon, air-freighted fresh with guaranteed quality.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd({ locale }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "zh-HK" ? "海膽三文魚" : "Uni & Salmon",
    url: baseUrl,
    inLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Chinese (Traditional, Hong Kong)", alternateName: "zh-HK" },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ locale }: StructuredDataProps) {
  const faqs =
    locale === "zh-HK"
      ? [
          {
            question: "香港邊度買到新鮮海膽？",
            answer:
              "我們提供來自日本、加拿大等地的新鮮海膽，直送香港及澳門。批發及零售均有供應。",
          },
          {
            question: "三文魚有咩等級？",
            answer:
              "三文魚主要分為刺身級及烹調級。我們專營刺身級三文魚，適合生食及高級料理。",
          },
          {
            question: "你哋供應邊啲種類嘅海膽？",
            answer:
              "我們供應多種海膽，包括日本馬糞海膽、紫海膽、加拿大紅海膽等，按季節及產地供應。",
          },
        ]
      : [
          {
            question: "Where can I buy fresh sea urchin in Hong Kong?",
            answer:
              "We supply fresh sea urchin (uni) sourced from Japan, Canada, and more, delivered directly to Hong Kong and Macau. Available wholesale and retail.",
          },
          {
            question: "What grades of salmon do you offer?",
            answer:
              "Salmon is primarily graded as sashimi-grade and cooking-grade. We specialize in sashimi-grade salmon suitable for raw consumption and fine dining.",
          },
          {
            question: "What varieties of sea urchin do you supply?",
            answer:
              "We supply various types of uni including Japanese Bafun uni, Murasaki uni, Canadian red sea urchin, and more, depending on season and origin.",
          },
        ];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
