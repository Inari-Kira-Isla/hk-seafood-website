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
      {
        slug: "michelin-omakase-sourcing",
        category: "Case Study",
        date: "April 2026",
        title: "Premium Omakase Sourcing for Michelin-Starred Restaurants in Hong Kong & Macau",
        summary: "Discover premium sea urchin and seafood sourcing strategies for Michelin-starred omakase restaurants. Direct supplier relationships, consistency standards, and seasonal menu planning.",
      },
      {
        slug: "hotel-banquet-scaling",
        category: "Case Study",
        date: "April 2026",
        title: "Hotel Banquet Scaling: Achieving 8% Margin Improvement Through Premium Seafood Partnerships",
        summary: "Learn how 4-5 star hotels improve F&B margins by 8% through strategic seafood partnerships and volume buying strategies for wedding and corporate events.",
      },
      {
        slug: "macau-gaming-compliance",
        category: "Compliance Guide",
        date: "April 2026",
        title: "Macau Gaming Compliance: Verified Seafood Sourcing Eliminates Licensing Risk",
        summary: "Complete guide to Macau food safety compliance and verified seafood sourcing for gaming resorts. Avoid licensing violations and ensure regulatory compliance.",
      },
      {
        slug: "fine-dining-differentiation",
        category: "Strategy",
        date: "April 2026",
        title: "Fine Dining Differentiation: How Seafood Sourcing Becomes Your Competitive Advantage",
        summary: "Discover how fine dining restaurants in Hong Kong & Macau use premium seafood sourcing to build brand differentiation and customer loyalty.",
      },
      {
        slug: "sourcing-strategy-decoded",
        category: "Guide",
        date: "April 2026",
        title: "Sourcing Strategy Decoded: From Farm to Fine Dining Table",
        summary: "Demystify seafood sourcing: learn how restaurants and hotels build direct supplier relationships, maintain quality standards, and develop transparent supply chains.",
      },
      {
        slug: "food-safety-compliance-guide",
        category: "Compliance",
        date: "April 2026",
        title: "Food Safety & Compliance Guide: Hong Kong and Macau Seafood Regulations",
        summary: "Complete guide to seafood compliance requirements for Hong Kong & Macau restaurants, hotels and operators. Import regulations, certifications, and best practices.",
      },
      {
        slug: "uni-season-guide-2026",
        category: "Seasonal Guide",
        date: "April 2026",
        title: "Hong Kong Uni Season 2026: When to Buy and What to Expect",
        summary: "Month-by-month sea urchin sourcing calendar for Hong Kong and Macau. Seasonal peaks, variety rotations, and pricing benchmarks for Hokkaido, Canadian, and California uni.",
      },
      {
        slug: "salmon-buyers-checklist",
        category: "Buying Guide",
        date: "April 2026",
        title: "The Restaurant Buyer's Checklist for Premium Salmon in Hong Kong & Macau",
        summary: "10-point checklist for sourcing sashimi-grade salmon in HK & Macau. Quality markers, supplier evaluation, cold chain standards, yield tracking, and 2026 pricing benchmarks.",
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
      {
        slug: "michelin-omakase-sourcing",
        category: "個案研究",
        date: "2026年4月",
        title: "米芝蓮Omakase餐廳的頂級海膽採購策略",
        summary: "為米芝蓮級別的Omakase餐廳尋找頂級海膽和海鮮採購策略。直接供應商關係、品質標準和季節菜單規劃。",
      },
      {
        slug: "hotel-banquet-scaling",
        category: "個案研究",
        date: "2026年4月",
        title: "酒店宴會擴展：通過優質海鮮夥伴關係實現8%利潤提升",
        summary: "了解4-5星級酒店如何通過戰略海鮮夥伴關係和大宗購買策略為婚禮和公司活動改善F&B利潤。",
      },
      {
        slug: "macau-gaming-compliance",
        category: "合規指南",
        date: "2026年4月",
        title: "澳門博彩業合規：經過驗證的海鮮採購消除牌照風險",
        summary: "澳門食品安全合規和經過驗證的海鮮採購完整指南，適用於博彩度假村。避免牌照違規和確保監管合規。",
      },
      {
        slug: "fine-dining-differentiation",
        category: "策略",
        date: "2026年4月",
        title: "米芝蓮級食材採購策略：如何透過優質海鮮建立競爭優勢",
        summary: "發現香港及澳門頂級食府如何透過優質海鮮採購打造品牌優勢。食材卓越背後的策略及市場定位。",
      },
      {
        slug: "sourcing-strategy-decoded",
        category: "指南",
        date: "2026年4月",
        title: "採購策略解碼：從農場到優質食府的餐桌",
        summary: "揭開海鮮採購的神秘面紗：學習食府和酒店如何建立直接供應商關係、維持品質標準，以及在香港和澳門建立透明供應鏈。",
      },
      {
        slug: "food-safety-compliance-guide",
        category: "合規",
        date: "2026年4月",
        title: "食物安全及合規指南：香港及澳門海鮮法規",
        summary: "香港及澳門食府、酒店及營運人員的海鮮合規要求完整指南。進口法規、認證及最佳實踐。",
      },
      {
        slug: "uni-season-guide-2026",
        category: "季節指南",
        date: "2026年4月",
        title: "香港澳門海膽季節指南 2026：最佳採購時機與產品預期",
        summary: "香港及澳門海膽逐月採購日曆。北海道、加拿大及加州品種的季節高峰、輪換時機及2026年定價基準。",
      },
      {
        slug: "salmon-buyers-checklist",
        category: "採購指南",
        date: "2026年4月",
        title: "港澳餐廳採購人員優質三文魚採購清單",
        summary: "香港及澳門採購刺身級三文魚的10點清單。品質標準、供應商評估、冷鏈規範、產出追蹤及2026年定價基準。",
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
