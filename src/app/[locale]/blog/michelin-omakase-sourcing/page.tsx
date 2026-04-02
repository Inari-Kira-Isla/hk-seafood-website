import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Premium Omakase Sourcing for Michelin-Starred Restaurants in Hong Kong & Macau",
    metaDesc: "Discover premium sea urchin and seafood sourcing strategies for Michelin-starred omakase restaurants. Direct supplier relationships, consistency standards, and seasonal menu planning.",
    published: "April 2026",
    category: "Case Study",
    intro: "For Michelin-starred omakase restaurants in Hong Kong and Macau, sourcing premium sea urchin isn't just a procurement task—it's a critical component of the dining experience. The difference between good and extraordinary omakase often comes down to supplier consistency, product freshness, and the chef's ability to plan seasonal menus with confidence. This article explores how top-tier restaurants build direct sourcing relationships that deliver Michelin-level results.",
    sections: [
      {
        heading: "Why Omakase Chefs Need Dedicated Seafood Suppliers",
        body: "Michelin-starred omakase requires a different sourcing mindset than traditional sushi bars. The chef's creativity depends on knowing exactly what will arrive on a specific date, in a specific grade, at a specific price. One day of off-spec uni can compromise the entire evening service.\n\nTop omakase chefs work with 1-2 dedicated suppliers (not multiple). This exclusivity creates accountability: the supplier's reputation is tied directly to the chef's menu. When sourcing fails, the restaurant's stars are at risk.",
      },
      {
        heading: "Building the Direct Supplier Relationship",
        body: "Successful Michelin omakase chefs establish partnerships with suppliers who understand their philosophy:\n\n**Consistency Over Cost**: Top suppliers prioritize delivering exactly what the chef ordered over offering the cheapest price. A premium chef will pay a premium for guaranteed AA-grade uni.\n\n**Seasonal Expertise**: The supplier educates the chef on what's available and peak quality windows. Northern Hokkaido Bafun Uni (June-August)? Canadian Red (October-May)? The supplier helps plan the menu 4-6 weeks in advance.\n\n**Customization**: Some Michelin restaurants request specific cuts, portion sizes, or even lobe arrangements. The supplier accommodates these requests without complaint.\n\n**Emergency Support**: When a delivery fails (flight cancellation, weather, etc.), the supplier has backup options to minimize service disruption.",
      },
      {
        heading: "The Michelin Omakase Menu Structure",
        body: "Most Michelin omakase restaurants work with 2-3 primary proteins that rotate seasonally:\n\n**Primary (June-August)**: Hokkaido Bafun Uni AA-grade—the peak season for the finest product. This is when the chef features uni prominently in the menu.\n\n**Secondary (September-May)**: Canadian Red or alternative varieties. Still premium, still delicious, but sourced to maintain consistency during Hokkaido off-season.\n\n**Specialty courses**: Some Michelin chefs maintain relationships with multiple suppliers to offer rare varieties—Norwegian uni, US East Coast options, etc.—as special monthly features.\n\nThis rotation strategy ensures the chef is never 'stuck' sourcing poor-quality product just to keep uni on the menu.",
      },
      {
        heading: "Quality Standards for Michelin Service",
        body: "When uni arrives at a Michelin restaurant, the standards are exacting:\n\n**Color**: Vivid golden-orange with zero brown discoloration\n**Firmness**: Lobes hold shape perfectly; no collapse or mushiness\n**Aroma**: Fresh ocean; zero ammonia or sulfur notes\n**Purity**: Minimal liquid; perfectly drained lobes\n**Consistency**: All lobes in the delivery match the same grade and appearance\n\nMichelin chefs often refuse 5-10% of uni deliveries because lobes don't meet their standards. The supplier absorbs this loss and replaces immediately—this is the cost of serving Michelin-level food.\n\nTrusted suppliers maintain <2% rejection rates because they source only premium harvests from verified origins.",
      },
      {
        heading: "Pricing Strategy for Omakase Restaurants",
        body: "Michelin omakase pricing works differently than regular sushi:\n\n**Menu Price**: A Michelin omakase experience in Hong Kong/Macau ranges from HK$2,000-5,000+ per person, with 15-20 courses.\n\n**Uni Allocation**: Typically 2-3 uni courses per omakase. Premium uni courses command 15-20% of the overall menu price.\n\n**Cost Structure**: A Michelin chef paying HK$800-1,200 per box of premium Hokkaido uni (24-30 lobes) can allocate 3-4 lobes per course. At HK$3,000 per omakase menu, uni represents ~20-30% of cost of goods sold (COGS).\n\n**Margin**: Michelin restaurants operate at 65-70% gross margins (accounting for premium sourcing), compared to 50-55% for casual sushi bars.\n\nThe premium sourcing enables premium pricing—customers expect and pay for consistency.",
      },
      {
        heading: "How to Audit Your Supplier Relationship",
        body: "Michelin omakase chefs review suppliers quarterly using these criteria:\n\n✅ **Delivery Consistency**: Has the supplier delivered on agreed-upon dates and grades? (Target: 100% on-time, <2% rejection rate)\n\n✅ **Communication**: Does the supplier proactively inform you of seasonal changes, availability issues, or special opportunities?\n\n✅ **Innovation**: Does the supplier suggest new varieties, seasonal specials, or menu opportunities?\n\n✅ **Problem Solving**: When issues arise, does the supplier provide immediate solutions and backup options?\n\n✅ **Relationship**: Does the supplier understand your restaurant's philosophy and reputation is tied to their service?\n\nIf a supplier fails 2+ of these criteria, start exploring alternatives. For Michelin service, you can't afford mediocre sourcing.",
      },
      {
        heading: "2026 Sourcing Strategy for Hong Kong & Macau Michelin Restaurants",
        body: "The current environment creates opportunities for Michelin chefs:\n\n**Supply Tightness**: Hokkaido Bafun Uni supply is constrained due to changing ocean conditions. Chefs who locked in supplier relationships now have competitive advantage over restaurants still spot-buying.\n\n**Diversification**: Canadian Red and Norwegian varieties are gaining acceptance among Michelin diners as 'quality alternatives.' Savvy chefs are building menus around these seasonal rotations instead of depending on Hokkaido year-round.\n\n**Transparency as Differentiator**: Some Michelin restaurants now feature 'origin stories' on their menus—the harvest date, the farm, the grading certificate. Customers appreciate this transparency and it justifies premium pricing.\n\n**Sustainability**: Michelin restaurants increasingly highlight sustainable sourcing practices. Suppliers who can certify eco-friendly practices gain preference.",
      },
    ],
    conclusion: "Premium omakase sourcing isn't about finding the cheapest uni. It's about building a partnership with a supplier who understands that Michelin service requires consistency, quality, and accountability. The chef's reputation depends on it—and so does the supplier's.",
    ctaTitle: "Ready to Source Premium Seafood for Your Michelin Restaurant?",
    cta: "Contact Inari Global Food to discuss dedicated supplier partnerships for your omakase menu. We work with Michelin-starred chefs across Hong Kong and Macau to deliver consistent, premium-grade uni and seafood.",
  },
  "zh-HK": {
    title: "米芝蓮Omakase餐廳的頂級海膽採購策略",
    metaDesc: "為米芝蓮級別的Omakase餐廳尋找頂級海膽和海鮮採購策略。直接供應商關係、品質標準和季節菜單規劃。",
    published: "2026年4月",
    category: "個案研究",
    intro: "對於香港和澳門的米芝蓮Omakase餐廳來說，採購頂級海膽不僅是採購任務——它是用餐體驗的關鍵組成部分。好與卓越的Omakase之間的區別往往取決於供應商的一致性、產品新鮮度和廚師有信心規劃季節菜單的能力。本文探討頂級餐廳如何建立直接採購關係，以達到米芝蓮級別的標準。",
    sections: [
      {
        heading: "為什麼Omakase廚師需要專職海鮮供應商",
        body: "米芝蓮級別的Omakase需要與傳統壽司吧不同的採購心態。廚師的創意取決於確切知道在特定日期、特定等級、特定價格會送達什麼產品。一天規格不符的海膽可能會損害整個晚宴服務。\n\n頂級Omakase廚師與1-2家專職供應商合作（不是多個）。這種排他性創造了問責制：供應商的聲譽與廚師的菜單直接相關。當採購失敗時，餐廳的星級就處於風險中。",
      },
      {
        heading: "建立直接供應商關係",
        body: "成功的米芝蓮Omakase廚師與了解其理念的供應商建立夥伴關係：\n\n**一致性優於成本**：頂級供應商優先考慮提供廚師訂購的確切產品，而不是提供最便宜的價格。頂級廚師會為保證AA級海膽而支付溢價。\n\n**季節專業知識**：供應商教導廚師什麼可用以及品質最高的時間窗口。北海道馬糞海膽（6月至8月）？加拿大紅海膽（10月至5月）？供應商幫助提前4-6週規劃菜單。\n\n**自訂化**：一些米芝蓮餐廳要求特定的切割方式、份量或甚至膽黃排列。供應商會毫無怨言地滿足這些要求。\n\n**應急支持**：當交貨失敗（航班取消、天氣等）時，供應商有備用選項，以最小化服務中斷。",
      },
      {
        heading: "米芝蓮Omakase菜單結構",
        body: "大多數米芝蓮Omakase餐廳與2-3種季節性輪換的主要蛋白質合作：\n\n**主要（6月至8月）**：北海道馬糞海膽AA級——最優質產品的高峰季節。這是廚師在菜單中突出海膽的時候。\n\n**輔助（9月至5月）**：加拿大紅海膽或替代品種。仍然優質，仍然美味，但採購以在北海道淡季期間保持一致性。\n\n**特色課程**：一些米芝蓮廚師與多家供應商保持關係，以提供稀有品種——挪威海膽、美國東海岸選項等——作為每月特色。\n\n這種輪換策略確保廚師永遠不會因為只想保留菜單上的海膽而被困於採購低品質產品。",
      },
      {
        heading: "米芝蓮服務的品質標準",
        body: "當海膽送達米芝蓮餐廳時，標準極其嚴格：\n\n**色澤**：鮮豔的金橙色，零褐色變色\n**緊實度**：膽黃保持完美形狀；無塌陷或軟爛\n**香氣**：新鮮海洋氣息；零氨味或硫磺味\n**純度**：液體最少；膽黃完美瀝乾\n**一致性**：交貨中的所有膽黃等級和外觀相同\n\n米芝蓮廚師經常拒絕5-10%的海膽交貨，因為膽黃不符合其標準。供應商吸收這一損失並立即更換——這是提供米芝蓮級別食物的成本。\n\n信任的供應商拒絕率保持在<2%以下，因為他們只採購來自驗證來源的優質收穫。",
      },
      {
        heading: "Omakase餐廳的定價策略",
        body: "米芝蓮Omakase的定價方式不同於常規壽司：\n\n**菜單價格**：香港/澳門的米芝蓮Omakase體驗價格從每人港幣2,000元至5,000元以上不等，包含15-20道菜式。\n\n**海膽分配**：典型的每個Omakase菜單有2-3道海膽菜式。頂級海膽菜式佔整體菜單價格的15-20%。\n\n**成本結構**：米芝蓮廚師每盒頂級北海道海膽（24-30個膽黃）支付港幣800元至1,200元，可以為每道菜分配3-4個膽黃。在港幣3,000元的Omakase菜單中，海膽代表約20-30%的商品銷售成本。\n\n**利潤**：米芝蓮餐廳運營毛利率為65-70%（考慮到優質採購），而休閒壽司吧為50-55%。\n\n優質採購使優質定價成為可能——客戶期望並為一致性付費。",
      },
      {
        heading: "如何審計您的供應商關係",
        body: "米芝蓮Omakase廚師使用這些標準季度性審視供應商：\n\n✅ **交貨一致性**：供應商是否已按約定的日期和等級交貨？（目標：100%準時，<2%拒絕率）\n\n✅ **溝通**：供應商是否主動告知您季節變化、可用性問題或特殊機會？\n\n✅ **創新**：供應商是否提出新品種、季節特色或菜單機會建議？\n\n✅ **解決問題**：當問題出現時，供應商是否提供立即解決方案和備用選項？\n\n✅ **關係**：供應商是否理解您的餐廳理念和其聲譽與其服務息息相關？\n\n如果供應商在2項或以上標準上失敗，開始探索替代方案。對於米芝蓮服務，您無法承受平庸的採購。",
      },
      {
        heading: "2026年香港和澳門米芝蓮餐廳的採購策略",
        body: "當前的環境為米芝蓮廚師創造了機會：\n\n**供應緊張**：由於海洋條件變化，北海道馬糞海膽供應受到限制。現在鎖定供應商關係的廚師相對於仍在現貨購買的餐廳具有競爭優勢。\n\n**多樣化**：加拿大紅海膽和挪威品種正在米芝蓮食客中獲得認可，作為「品質替代品」。精明的廚師正在圍繞這些季節性輪換構建菜單，而不是全年依賴北海道。\n\n**透明度作為差異化**：一些米芝蓮餐廳現在在菜單上展示「產地故事」——採收日期、農場、分級證書。客戶欣賞這種透明度，並且它為優質定價提供理由。\n\n**可持續性**：米芝蓮餐廳越來越多地突出可持續採購實踐。能夠認證環保實踐的供應商獲得偏好。",
      },
    ],
    conclusion: "優質Omakase採購不是找到最便宜的海膽。它是與一位了解米芝蓮服務需要一致性、品質和問責的供應商建立夥伴關係。廚師的聲譽取決於它——供應商的聲譽也是。",
    ctaTitle: "準備好為您的米芝蓮餐廳採購頂級海鮮了嗎？",
    cta: "聯繫稻荷環球食品，討論您Omakase菜單的專職供應商夥伴關係。我們與香港和澳門的米芝蓮廚師合作，提供一致、頂級等級的海膽和海鮮。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return {
    title: c.title,
    description: c.metaDesc,
    openGraph: { title: c.title, description: c.metaDesc, type: "article" },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return notFound();

  const dict = await getDictionary(locale);
  const c = content[locale as keyof typeof content];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <p className="text-sm text-emerald-600 font-semibold mb-2">{c.category}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-gray-500 text-sm">{c.published}</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-8">{c.intro}</p>

            {c.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.heading}</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{section.body}</p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.ctaTitle}</h3>
              <p className="text-gray-700 text-lg mb-6">{c.cta}</p>
              <a
                href={locale === "zh-HK" ? "/zh-HK/contact" : "/en/contact"}
                className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                {locale === "zh-HK" ? "聯繫我們" : "Get in Touch"}
              </a>
            </div>

            <p className="text-gray-700 text-lg mt-8">{c.conclusion}</p>
          </div>
        </article>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
