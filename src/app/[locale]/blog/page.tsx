import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Industry Insights",
    metaDesc: "Latest news and insights on the sea urchin and salmon industry in Hong Kong and Macau. Market trends, sourcing updates, and expert analysis.",
    intro: "Stay informed with the latest trends, market insights, and expert analysis from Hong Kong and Macau's sea urchin and salmon industry.",
    comingSoon: "New articles coming soon. Check back for industry updates, seasonal guides, and market analysis.",
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
    metaDesc: "香港及澳門海膽及三文魚行業最新消息及洞察。市場趨勢、採購更新及專家分析。",
    intro: "緊貼香港及澳門海膽及三文魚行業的最新趨勢、市場洞察及專家分析。",
    comingSoon: "新文章即將推出。請密切留意行業動態、季節指南及市場分析。",
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-lg p-10">
              <p className="text-gray-500 text-lg">{c.comingSoon}</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
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
