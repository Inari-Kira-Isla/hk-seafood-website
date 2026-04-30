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
      {
        slug: "japanese-uni-varieties-guide",
        category: "Product Mastery",
        date: "April 2026",
        title: "Japanese Sea Urchin Varieties Compared: Bafun, Murasaki, and Ezo for HK Buyers",
        summary: "Complete comparison of Hokkaido Bafun, Murasaki, and Ezo Bafun uni for HK and Macau restaurant buyers. Flavour profiles, grading, seasonal windows, pricing, and a delivery inspection checklist.",
      },
      {
        slug: "salmon-origin-comparison",
        category: "Sourcing Guide",
        date: "April 2026",
        title: "Norwegian vs Scottish vs Tasmanian Salmon: A Sourcing Guide for HK & Macau Restaurants",
        summary: "Compare Norwegian, Scottish, Chilean, and Tasmanian salmon for HK/Macau restaurant sourcing. Fat content, flavour profiles, sustainability credentials, pricing matrix, and a practical decision framework.",
      },
      {
        slug: "hk-seafood-market-trends-2026",
        category: "Market Analysis",
        date: "March 2026",
        title: "Hong Kong Seafood Market Trends 2026: Premium Ingredients Driving Dining Excellence",
        summary: "2026 seafood market trends in Hong Kong and Macau: omakase boom, sustainability demands, premium sourcing shifts, and what they mean for restaurant buyers.",
      },
      {
        slug: "sea-urchin-quality-standards",
        category: "Product Mastery",
        date: "March 2026",
        title: "The Complete Sea Urchin Quality Standards & Grading Masterclass",
        summary: "Professional guide to uni grading: AA/A/B standards, visual inspection, certification, testing methods, and how to reject substandard product with confidence.",
      },
      {
        slug: "salmon-sourcing-guide-comprehensive",
        category: "Sourcing Guide",
        date: "March 2026",
        title: "The Complete Salmon Sourcing Guide for Hong Kong & Macau: Quality, Sustainability & Year-Round Supply",
        summary: "Comprehensive guide to sourcing premium salmon in Hong Kong and Macau. Farmed vs. wild, seasonal availability, cost optimization, and building reliable supply relationships.",
      },
      {
        slug: "seasonal-planning-calendar",
        category: "Planning & Strategy",
        date: "March 2026",
        title: "Seasonal Seafood Planning Calendar: Annual Sourcing & Supply Strategy",
        summary: "Complete seasonal calendar for sea urchin and salmon sourcing in Hong Kong and Macau. Peak seasons, supply gaps, pricing cycles, and how to plan menus 6–8 weeks ahead.",
      },
      {
        slug: "cold-chain-logistics",
        category: "Operations",
        date: "March 2026",
        title: "Cold Chain Logistics: The Hidden Infrastructure Keeping Seafood Fresh",
        summary: "Technical guide to maintaining unbroken cold chains for sashimi-grade seafood in Hong Kong and Macau. Equipment, protocols, temperature standards, and supplier accountability.",
      },
      {
        slug: "premium-seafood-economics",
        category: "Business Strategy",
        date: "March 2026",
        title: "Premium Seafood Economics: Building Margin and Justifying Price in Hong Kong and Macau",
        summary: "Strategic guide to seafood pricing, margin optimization, cost structure analysis, and communicating value to guests — for restaurants and hotels in HK & Macau.",
      },
      {
        slug: "supplier-relationships-handbook",
        category: "Sourcing & Partnerships",
        date: "March 2026",
        title: "Building Winning Supplier Relationships: The Restaurant Buyer's Handbook",
        summary: "Strategic guide to negotiating with seafood suppliers, structuring contracts, managing quality, and building long-term partnerships that support your restaurant's growth.",
      },
      {
        slug: "sustainable-seafood-sourcing",
        category: "Sustainability",
        date: "March 2026",
        title: "Sustainable Seafood Sourcing: Balancing Quality, Ethics & Profitability in Hong Kong",
        summary: "How to source sea urchin and salmon sustainably without compromising quality. MSC/ASC certifications, ethical supply chains, and meeting luxury restaurant ESG requirements.",
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
      {
        slug: "japanese-uni-varieties-guide",
        category: "產品專業知識",
        date: "2026年4月",
        title: "日本海膽品種比較：馬糞海膽、紫海膽與蝦夷馬糞海膽港澳採購指南",
        summary: "港澳餐廳採購商的北海道馬糞海膽、紫海膽和蝦夷馬糞海膽完整比較。風味特點、等級制度、季節窗口、定價及驗貨清單。",
      },
      {
        slug: "salmon-origin-comparison",
        category: "採購指南",
        date: "2026年4月",
        title: "挪威vs蘇格蘭vs塔斯馬尼亞三文魚：港澳餐廳採購指南",
        summary: "比較挪威、蘇格蘭、智利及塔斯馬尼亞三文魚用於港澳餐廳採購。脂肪含量、風味特點、可持續性認證、定價矩陣及實用決策框架。",
      },
      {
        slug: "hk-seafood-market-trends-2026",
        category: "市場分析",
        date: "2026年3月",
        title: "香港海鮮市場趨勢 2026：優質食材驅動餐飲卓越",
        summary: "2026香港澳門海鮮市場趨勢：Omakase飆升、可持續性需求、高端採購轉移，以及對餐廳採購人員的影響。",
      },
      {
        slug: "sea-urchin-quality-standards",
        category: "產品精通",
        date: "2026年3月",
        title: "海膽質量標準與分級完全指南",
        summary: "專業海膽（Uni）分級指南：AA/A/B標準、目視檢查、認證、測試方法，以及如何自信地拒絕不達標產品。",
      },
      {
        slug: "salmon-sourcing-guide-comprehensive",
        category: "採購指南",
        date: "2026年3月",
        title: "香港及澳門三文魚採購完整指南：品質、可持續性與全年供應",
        summary: "香港和澳門高級三文魚採購綜合指南。養殖與野生、季節性供應、成本優化和建立可靠供應關係。",
      },
      {
        slug: "seasonal-planning-calendar",
        category: "規劃和戰略",
        date: "2026年3月",
        title: "季節性海鮮規劃日曆：年度採購和供應策略",
        summary: "香港澳門海膽和三文魚採購的完整季節日曆。高峰季節、供應缺口、定價週期，以及如何提前6–8週規劃菜單。",
      },
      {
        slug: "cold-chain-logistics",
        category: "營運和物流",
        date: "2026年3月",
        title: "冷鏈物流：保持海鮮新鮮的隱藏基礎設施",
        summary: "在香港澳門保持刺身級海鮮完整冷鏈的技術指南。設備、規程、溫度標準和供應商問責制。",
      },
      {
        slug: "premium-seafood-economics",
        category: "商業戰略",
        date: "2026年3月",
        title: "高級海鮮經濟學：在香港澳門打造利潤並合理化價格",
        summary: "香港澳門餐廳海鮮定價、利潤優化、成本結構分析和向客人傳達價值的戰略指南。",
      },
      {
        slug: "supplier-relationships-handbook",
        category: "採購與合作夥伴",
        date: "2026年3月",
        title: "打造制勝供應商關係：餐廳採購方手冊",
        summary: "與海產供應商談判、結構化合同、管理品質、建立支持餐廳增長的長期合作夥伴關係的戰略指南。",
      },
      {
        slug: "sustainable-seafood-sourcing",
        category: "採購與可持續發展",
        date: "2026年3月",
        title: "可持續海產採購：在香港及澳門平衡品質、道德與盈利",
        summary: "如何以可持續方式採購海膽和三文魚，無須犧牲品質。MSC/ASC認證、道德供應鏈及符合米芝蓮星級餐廳ESG要求的方案。",
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
