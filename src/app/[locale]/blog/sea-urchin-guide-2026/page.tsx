import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "The Complete Sea Urchin (Uni) Buyer's Guide 2026",
    metaDesc: "Everything you need to know about buying premium sea urchin (uni) in 2026. Varieties, grading, seasonal availability, storage, and how to source directly for Hong Kong and Macau restaurants.",
    published: "March 2026",
    category: "Sourcing Guide",
    intro: "Sea urchin — known as uni in Japanese — has become one of the most sought-after delicacies in Hong Kong and Macau's fine dining scene. Whether you run an omakase counter, a Japanese restaurant, or a 5-star hotel, understanding how to buy, grade, and store uni is essential to delivering a consistently excellent guest experience.",
    sections: [
      {
        heading: "What Makes Sea Urchin Special",
        body: "Uni is the edible gonads (roe) of the sea urchin. When fresh and properly graded, it has a rich, creamy texture with a complex flavor that balances sweetness, brininess, and the subtle taste of the ocean. The flavor profile varies significantly between species, origin, and season — which is why sourcing knowledge matters so much. Poor-quality or old uni is bitter and mushy, and can damage your restaurant's reputation. Top-quality uni elevates any dish it touches.",
      },
      {
        heading: "Sea Urchin Varieties: Which Is Best for Your Menu?",
        body: "Bafun Uni (馬糞海膽) from Hokkaido, Japan is the gold standard for omakase. Small, golden lobes with an intensely sweet, rich flavor — available in AA and A grade. Peak season is June through August.\n\nMurasaki Uni (紫海膽) from Japan offers a lighter, more delicate flavor with clean ocean finish. Available year-round, making it the reliable workhorse for daily service.\n\nCanadian Red Sea Urchin (加拿大紅海膽) from British Columbia features large, bold lobes with a buttery flavor profile. Peak season October through May aligns perfectly with the Hokkaido off-season, enabling year-round premium supply.\n\nMaine Atlantic Uni from the US East Coast provides a seasonal alternative with its own distinct flavor character.",
      },
      {
        heading: "Understanding Sea Urchin Grading: AA, A, and B",
        body: "AA Grade is omakase-only: the finest lobes, vivid golden-orange color, firm yet creamy texture, zero bitterness, minimal liquid. Only a fraction of any harvest qualifies. Priced accordingly.\n\nA Grade suits restaurant excellence — consistent quality, beautiful presentation, appropriate for premium nigiri, sashimi platters, and featured dishes.\n\nB Grade is for culinary applications: sauces, pasta, risotto, dressings. The flavor is good but the appearance or texture may not meet raw presentation standards.\n\nWhen evaluating uni, examine color (bright golden-orange), firmness (holds shape, not mushy), aroma (fresh ocean, no ammonia), and liquid content (minimal is best).",
      },
      {
        heading: "Seasonality and Supply Planning",
        body: "Hokkaido Bafun Uni peaks June–August: this is the most celebrated uni season, when the finest AA-grade product is available in limited quantities. Restaurants should plan menus and reserve allocations in advance.\n\nYear-round supply strategy: source Murasaki Uni from Japan for consistent daily service, supplement with Canadian Red (Oct–May) for premium variety, and reserve Hokkaido Bafun for seasonal features and omakase.\n\nFor Macau casino resorts and Hong Kong fine dining hotels, we recommend establishing a standing monthly order with flexible top-up to manage seasonal peaks without stockouts.",
      },
      {
        heading: "Professional Storage for Maximum Shelf Life",
        body: "Sea urchin is highly perishable. Proper storage is non-negotiable:\n\n• Temperature: 2°C–4°C (never frozen unless purchasing processed product)\n• Orientation: store trays flat, never stacked or tilted\n• Avoid pressure: do not place anything on top of uni trays\n• Use within 2–3 days of delivery for raw service\n• Keep packaging sealed until service\n• Drain excess liquid carefully before plating\n\nRejection protocol: if uni arrives with ammonia smell, excessive liquid, or collapsed lobes — reject the delivery. We offer 48-hour replacement guarantee for any quality issues.",
      },
      {
        heading: "How to Source Sea Urchin for Hong Kong and Macau Restaurants",
        body: "Sourcing premium uni in Hong Kong and Macau requires a supplier with direct relationships at origin. Key questions to ask any supplier:\n\n1. What is the harvest date? (Freshness chain is critical)\n2. What cold-chain method was used for transport?\n3. Can you provide grading certificates?\n4. What is your rejection and replacement policy?\n\nInari Global Food sources directly from certified Hokkaido producers and Norwegian salmon farms, with air-freight delivery ensuring 24–48 hour farm-to-Hong Kong transit. We serve omakase restaurants, 5-star hotels, and casino resort dining programs across both markets.",
      },
      {
        heading: "2026 Market Outlook",
        body: "Demand for premium uni in Hong Kong continues to grow, driven by the expansion of omakase dining concepts and Japanese fine dining. Macau casino resorts are increasingly differentiating their F&B offerings with exclusive seafood programming.\n\nHokkaido Bafun supply remains constrained due to ocean temperature changes affecting yield. Buyers who establish direct supplier relationships and seasonal purchasing commitments will maintain supply consistency while spot buyers face premium pricing and availability gaps.\n\nCanadian Red Sea Urchin is gaining recognition among Hong Kong and Macau chefs as a high-quality alternative with favorable off-season timing and strong value relative to Hokkaido AA grade.",
      },
    ],
    conclusion: "The sea urchin market in Hong Kong and Macau rewards buyers who understand the product deeply. Partner with a specialized supplier, establish a grading protocol for your kitchen, and match variety selection to your menu concept and price point. The result: consistently excellent uni service that keeps guests returning.",
    ctaTitle: "Ready to Source Premium Uni?",
    cta: "Contact Inari Global Food for wholesale pricing, grading samples, and delivery information for Hong Kong and Macau.",
  },
  "zh-HK": {
    title: "海膽（Uni）完全採購指南 2026",
    metaDesc: "2026年採購優質海膽（海膽/Uni）的完整指南。品種、分級、季節供應、保存方法，以及香港和澳門餐廳直接採購的方法。",
    published: "2026年3月",
    category: "採購指南",
    intro: "海膽——日文稱為 Uni——已成為香港及澳門高端餐飲界最受追捧的美食之一。無論您經營的是 Omakase 餐廳、日式料理或五星酒店，了解如何採購、分級和保存海膽，對於持續提供卓越賓客體驗至關重要。",
    sections: [
      {
        heading: "海膽的珍貴之處",
        body: "海膽是海膽的可食用性腺（卵黃）。新鮮且分級適當的海膽質地豐富細膩，味道複雜，兼具甜味、海鹹味和微妙的海洋氣息。不同品種、產地及季節的海膽味道差異顯著——這正是採購知識如此重要的原因。品質欠佳或不新鮮的海膽帶有苦澀感且質地軟爛，會損害餐廳聲譽。頂級海膽則能提升所有菜餚的層次。",
      },
      {
        heading: "海膽品種：哪種最適合您的菜單？",
        body: "來自日本北海道的馬糞海膽（Bafun Uni）是 Omakase 的黃金標準。小型金黃色膽黃，味道濃郁甜美——提供 AA 和 A 等級。旺季為六月至八月。\n\n來自日本的紫海膽（Murasaki Uni）口味較清淡細膩，帶有清爽的海洋餘韻。全年供應，是日常服務的可靠選擇。\n\n來自加拿大不列顛哥倫比亞省的加拿大紅海膽（Canadian Red Sea Urchin）膽黃大而飽滿，奶油般的濃郁風味。旺季為十月至五月，與北海道海膽的淡季完美銜接，實現全年優質供應。\n\n來自美國東海岸的緬因海膽提供季節性替代選擇，風味獨特。",
      },
      {
        heading: "海膽分級解析：AA、A 及 B 級",
        body: "AA 級為 Omakase 專用：最優質的膽黃，色澤金橙鮮艷，質地緊實細膩，零苦味，液體最少。僅佔每批收穫的少部分。價格相應較高。\n\nA 級適合餐廳卓越呈現——品質一致，外觀精美，適用於優質握壽司、刺身拼盤及特色菜式。\n\nB 級適合烹飪應用：醬汁、意大利麵、燴飯、沙律醬。風味良好，但外觀或質地可能未達生食標準。\n\n評估海膽時，請觀察色澤（金橙色鮮艷）、緊實度（保持形狀，不軟爛）、氣味（新鮮海洋氣息，無氨味）及液體含量（越少越好）。",
      },
      {
        heading: "季節性與供應規劃",
        body: "北海道馬糞海膽旺季為六月至八月：這是最受推崇的海膽季節，供應數量有限的頂級 AA 級產品。餐廳應提前規劃菜單並預留配額。\n\n全年供應策略：採購日本紫海膽用於穩定日常服務，補充加拿大紅海膽（十月至五月）提供優質多元選擇，並保留北海道馬糞海膽用於季節性特色菜及 Omakase。\n\n對於澳門賭場度假村及香港高端酒店，我們建議建立固定月度訂購計劃，並設有彈性補貨機制，以應對季節性高峰而不斷貨。",
      },
      {
        heading: "專業保存以延長保質期",
        body: "海膽極易腐壞，妥善保存不可妥協：\n\n• 溫度：2°C–4°C（除非購買加工產品，否則切勿冷凍）\n• 存放方向：托盤平放，切勿疊放或傾斜\n• 避免壓力：切勿在海膽托盤上放置任何物品\n• 送達後2至3天內使用（用於生食服務）\n• 服務前保持包裝密封\n• 擺盤前小心瀝乾多餘液體\n\n退貨準則：如海膽送達時帶有氨味、液體過多或膽黃塌陷，請拒絕收貨。我們為任何品質問題提供48小時替換保證。",
      },
      {
        heading: "香港及澳門餐廳如何採購海膽",
        body: "在香港及澳門採購優質海膽，需要與供應商建立直接的原產地關係。向任何供應商詢問的關鍵問題：\n\n1. 採收日期是什麼？（新鮮度鏈至關重要）\n2. 運輸採用什麼冷鏈方式？\n3. 是否能提供分級證書？\n4. 退貨和替換政策是什麼？\n\n稻荷環球食品直接從北海道認證生產商和挪威三文魚養殖場採購，空運確保24至48小時從產地到香港的運輸時間。我們為兩個市場的 Omakase 餐廳、五星酒店及賭場度假村餐飲項目服務。",
      },
      {
        heading: "2026年市場展望",
        body: "受 Omakase 餐飲概念擴張及日式高端餐飲帶動，香港對優質海膽的需求持續增長。澳門賭場度假村正越來越多地通過獨家海鮮項目差異化其餐飲服務。\n\n受海洋溫度變化影響，北海道馬糞海膽供應持續緊張。建立直接供應商關係並作出季節性採購承諾的買家，將維持穩定供應；而即期採購的買家則面臨溢價和供應缺口。\n\n加拿大紅海膽正獲得香港及澳門廚師的認可，其淡季時機優越，相對於北海道 AA 級具有良好的性價比。",
      },
    ],
    conclusion: "香港及澳門的海膽市場獎勵那些深入了解產品的買家。與專業供應商合作，為廚房建立分級協議，並根據菜單理念和價格點選擇合適品種。結果：持續卓越的海膽服務，讓賓客不斷回頭。",
    ctaTitle: "準備好採購優質海膽了嗎？",
    cta: "聯繫稻荷環球食品，獲取香港及澳門的批發報價、分級樣品及送貨資訊。",
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

export default async function SeaUrchinGuide2026Page({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDesc,
    datePublished: "2026-03-01",
    dateModified: "2026-03-13",
    author: { "@type": "Organization", name: "Inari Global Food" },
    publisher: {
      "@type": "Organization",
      name: "Inari Global Food",
      url: "https://inari-global.com",
    },
    about: [
      { "@type": "Thing", name: "Sea Urchin" },
      { "@type": "Thing", name: "Uni" },
      { "@type": "Place", name: "Hong Kong" },
      { "@type": "Place", name: "Macau" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                {c.category}
              </span>
              <span className="text-gray-500 text-sm">{c.published}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {c.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">{c.intro}</p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {c.sections.map((section, i) => (
              <div key={i} className="border-b border-gray-100 pb-10 last:border-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Conclusion */}
            <div className="bg-amber-50 rounded-xl p-8">
              <p className="text-gray-800 leading-relaxed italic">{c.conclusion}</p>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">{c.ctaTitle}</h3>
              <p className="text-gray-300 mb-6">{c.cta}</p>
              <a
                href={`/${locale}/contact`}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {locale === "en" ? "Contact Us" : "聯絡我們"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
