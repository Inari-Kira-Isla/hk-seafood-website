import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Industry Insights",
    metaDesc: "Latest guides and insights on sea urchin and salmon sourcing in Hong Kong and Macau. Grading, storage, seasonal availability, and market analysis.",
    intro: "Expert guides and market insights for Hong Kong and Macau's sea urchin and salmon industry.",
    articlesTitle: "Latest Articles",
    articles: [
      {
        slug: "sea-urchin-guide-2026",
        category: "Sourcing Guide",
        date: "March 2026",
        title: "The Complete Sea Urchin (Uni) Buyer's Guide 2026",
        summary: "Everything you need to know about sourcing premium uni: varieties, grading (AA/A/B), seasonal availability, storage, and how to build a reliable supply chain for Hong Kong and Macau restaurants.",
      },
      {
        slug: "salmon-sourcing-guide-hk-macau",
        category: "Sourcing Guide",
        date: "March 2026",
        title: "Salmon Sourcing Guide for Hong Kong and Macau Restaurants 2026",
        summary: "How to source sashimi-grade Atlantic, King, and Sockeye salmon for restaurant and hotel operations in Hong Kong and Macau — quality standards, cold-chain requirements, ordering frequency, and supplier selection.",
      },
    ],
    topics: "Topics We Cover",
    topicsList: [
      "Seasonal availability and pricing trends",
      "Sea urchin sourcing and grading updates",
      "Salmon market analysis for Hong Kong & Macau",
      "Sustainable seafood practices",
      "Chef and restaurant spotlights",
      "Food safety and quality standards",
    ],
  },
  "zh-HK": {
    title: "行業資訊",
    metaDesc: "香港及澳門海膽及三文魚採購最新指南及洞察。分級、保存、季節性供應及市場分析。",
    intro: "香港及澳門海膽及三文魚行業的專業指南及市場洞察。",
    articlesTitle: "最新文章",
    articles: [
      {
        slug: "sea-urchin-guide-2026",
        category: "採購指南",
        date: "2026年3月",
        title: "海膽（Uni）完全採購指南 2026",
        summary: "採購優質海膽的完整資訊：品種、分級（AA/A/B）、季節性供應、保存方法，以及如何為香港及澳門餐廳建立可靠的供應鏈。",
      },
      {
        slug: "salmon-sourcing-guide-hk-macau",
        category: "採購指南",
        date: "2026年3月",
        title: "香港及澳門餐廳三文魚採購指南 2026",
        summary: "如何為香港及澳門的餐廳及酒店業務採購刺身級大西洋三文魚、帝王三文魚及紅三文魚——品質標準、冷鏈要求、訂購頻率及供應商選擇。",
      },
    ],
    topics: "涵蓋主題",
    topicsList: [
      "季節性供應及價格趨勢",
      "海膽採購及分級最新消息",
      "香港及澳門三文魚市場分析",
      "可持續海鮮措施",
      "主廚及餐廳專題",
      "食品安全及品質標準",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale];
  return { title: c.title, description: c.metaDesc };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-lg text-gray-600">{c.intro}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.articlesTitle}</h2>
            <div className="space-y-6">
              {c.articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/${locale}/blog/${article.slug}`}
                  className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600">{article.summary}</p>
                  <span className="mt-4 inline-block text-amber-600 font-medium text-sm">
                    {locale === "en" ? "Read article →" : "閱讀文章 →"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.topics}</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {c.topicsList.map((t) => (
                <li key={t} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
