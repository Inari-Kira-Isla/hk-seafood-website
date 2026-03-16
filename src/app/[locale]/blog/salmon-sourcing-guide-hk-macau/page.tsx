import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Salmon Sourcing Guide for Hong Kong and Macau Restaurants 2026",
    metaDesc: "Complete guide to sourcing sashimi-grade salmon in Hong Kong and Macau. Atlantic, King, and Sockeye salmon varieties, quality standards, cold-chain requirements, and wholesale supplier selection.",
    published: "March 2026",
    category: "Sourcing Guide",
    intro: "Salmon is the most consumed sashimi fish in Hong Kong and Macau. For restaurants, hotels, and casino resort dining programs, maintaining consistent sashimi-grade salmon supply is a daily operational priority — and getting it right requires understanding varieties, quality grades, cold-chain standards, and reliable wholesale sourcing.",
    sections: [
      {
        heading: "Why Salmon Sourcing Quality Matters in Hong Kong and Macau",
        body: "In Hong Kong and Macau's highly competitive restaurant market, salmon quality is a baseline expectation — not a differentiator. Diners at Japanese restaurants, omakase counters, hotel buffets, and casino resort restaurants expect sashimi-grade salmon that is consistently fresh, properly marbled, and correctly handled.\n\nA single poor delivery can result in food safety incidents, complaints, and reputational damage. That's why professional salmon sourcing requires a supplier with verified cold-chain protocols, consistent quality grading, and reliable delivery frequency.",
      },
      {
        heading: "Salmon Varieties: Choosing the Right Species for Your Menu",
        body: "Atlantic Salmon (大西洋三文魚) from Norway, Scotland, and the Faroe Islands is the most popular sashimi fish in Hong Kong and Macau. It offers mild, buttery flavor with consistent fat marbling, year-round availability, and predictable quality. Air-freighted 2–3 times weekly for maximum freshness. The default choice for most restaurants.\n\nKing Salmon / Chinook (帝王三文魚) from New Zealand, Alaska, and British Columbia is the premium omakase option. The highest oil content of any salmon species creates an unmatched richness and buttery mouthfeel. Suitable for restaurants that feature premium seasonal menus and guests who pay for the finest quality.\n\nSockeye Salmon (紅三文魚) from Alaska and British Columbia offers a deep red flesh, firm texture, and robust flavor that stands out visually on any platter. Peak season May through September. Used for presentations where bold color and distinctive taste are desired.",
      },
      {
        heading: "Sashimi-Grade Standards: What to Require from Your Supplier",
        body: "Not all salmon is sashimi-grade. The designation requires:\n\n• Parasite testing and certification at origin\n• Unbroken cold chain from harvest to delivery (never above 4°C)\n• Air-freight transport (not sea freight) for maximum freshness\n• Minimum 5 days remaining shelf life from delivery date\n• Packaging integrity — vacuum-sealed or modified atmosphere\n• Freshness indicators: bright orange-pink color, firm flesh, no browning at edges, no off-odor\n\nAsk any potential supplier to provide documentation for these standards. Suppliers who cannot provide certification should not be supplying sashimi product.",
      },
      {
        heading: "Cold Chain Requirements: Temperature from Farm to Plate",
        body: "Salmon quality degrades rapidly outside the proper temperature window. Professional cold-chain requirements:\n\n• Harvest to packing: maintained below 2°C\n• Air-freight transport: in cooled cargo holds\n• HK/Macau customs clearance: maintained on refrigerated carts\n• Delivery vehicle: refrigerated (2°C–4°C throughout)\n• Restaurant receipt: inspect temperature at delivery (reject if above 5°C)\n• Kitchen storage: dedicated 2°C–4°C refrigerator, not mixed with cooked items\n• Service prep: work small batches at a time, return unsused portions immediately\n\nFor Macau deliveries, the additional border crossing from Hong Kong adds transit time. Ensure your supplier accounts for this with appropriate buffer.",
      },
      {
        heading: "Ordering Frequency and Inventory Management",
        body: "For restaurants serving salmon sashimi daily:\n\n• Order 3–4 times per week minimum to maintain maximum freshness\n• Never hold salmon for more than 48 hours after delivery for raw service\n• Build a 2-day safety stock at minimum to cover missed deliveries\n• Plan seasonal volume increases: festive seasons and summer months see 30–50% higher demand\n\nFor Macau casino resorts and large hotel banquet operations, weekly standing orders with fixed volume and flexible top-up orders provide the best balance of supply security and freshness rotation.",
      },
      {
        heading: "Pricing Factors for Salmon in Hong Kong and Macau",
        body: "Salmon wholesale pricing in Hong Kong and Macau is influenced by:\n\n• Species: King Salmon commands 3–5x the price of Atlantic Salmon\n• Origin: Norwegian Atlantic Salmon is benchmark priced; Faroe Islands and Scottish command slight premium\n• Delivery frequency: air-freight 3x weekly vs. less frequent affects freshness and cost\n• Cut: whole fish vs. fillets vs. portions — ask about custom cut availability\n• Volume: regular standing orders typically receive better pricing than spot purchases\n\nBuying decisions should balance cost against the quality risk of cheaper, less fresh product — a food safety incident costs far more than the premium for verified sashimi-grade.",
      },
      {
        heading: "Selecting a Wholesale Salmon Supplier for HK/Macau",
        body: "Criteria for evaluating a salmon wholesale supplier:\n\n1. Specialization: suppliers who focus exclusively on premium seafood maintain stricter quality standards than general seafood distributors\n2. Origin transparency: can they name the specific farm, region, and harvest date?\n3. Delivery frequency: how many times per week? Can they deliver on short notice?\n4. Macau delivery capability: can they handle the cross-border logistics?\n5. Minimum order: does it align with your volume?\n6. Rejection policy: what happens if a delivery doesn't meet standards?\n7. Communication: do they proactively notify you about quality issues, supply constraints, or seasonal changes?\n\nInari Global Food specializes exclusively in premium sea urchin and salmon for Hong Kong and Macau's restaurant and hotel market. We air-freight Atlantic Salmon 2–3 times weekly from Norway and the Faroe Islands, offer King Salmon and Sockeye by advance order, and deliver to both Hong Kong and Macau.",
      },
    ],
    conclusion: "For Hong Kong and Macau restaurants, salmon sourcing is an operational decision with direct impact on food safety, guest experience, and kitchen costs. The right supplier delivers consistency, transparency, and reliability — every delivery, every week.",
    ctaTitle: "Looking for a Reliable Salmon Supplier?",
    cta: "Contact Inari Global Food for wholesale salmon pricing, delivery schedules, and quality standards for Hong Kong and Macau.",
  },
  "zh-HK": {
    title: "香港及澳門餐廳三文魚採購指南 2026",
    metaDesc: "香港及澳門刺身級三文魚採購完整指南。大西洋、帝王及紅三文魚品種、品質標準、冷鏈要求及批發供應商選擇。",
    published: "2026年3月",
    category: "採購指南",
    intro: "三文魚是香港及澳門消費量最高的刺身魚類。對於餐廳、酒店及賭場度假村餐飲項目而言，維持穩定的刺身級三文魚供應是日常營運的首要任務——做好這一點需要了解品種、品質等級、冷鏈標準及可靠的批發採購。",
    sections: [
      {
        heading: "為什麼三文魚採購質量在香港及澳門至關重要",
        body: "在香港及澳門競爭激烈的餐飲市場中，三文魚品質是基本期望——而非差異化因素。在日式餐廳、Omakase 餐廳、酒店自助餐廳及賭場度假村餐廳用餐的食客，期望的是持續新鮮、油花均勻、處理得當的刺身級三文魚。\n\n一次差劣的送貨可能導致食品安全事故、投訴及聲譽損害。因此，專業的三文魚採購需要具備經驗證冷鏈規程、一致品質分級及可靠交貨頻率的供應商。",
      },
      {
        heading: "三文魚品種：為您的菜單選擇合適的品種",
        body: "來自挪威、蘇格蘭及法羅群島的大西洋三文魚（大西洋三文魚）是香港及澳門最受歡迎的刺身魚類。它提供清淡奶油般的風味，油花均勻，全年供應，品質穩定。每週空運2至3次，確保最大新鮮度。是大多數餐廳的默認選擇。\n\n來自新西蘭、阿拉斯加及不列顛哥倫比亞省的帝王三文魚（帝王三文魚）是高端 Omakase 的頂級選擇。所有三文魚品種中最高的油脂含量，創造出無與倫比的豐富奶油口感。適合提供高端季節性菜單、客人願意為最優品質付費的餐廳。\n\n來自阿拉斯加及不列顛哥倫比亞省的紅三文魚（紅三文魚）提供深紅色肉質、緊實質地及濃郁風味，在任何拼盤上都視覺突出。旺季為五月至九月。適用於需要鮮艷色彩和獨特口味的擺盤展示。",
      },
      {
        heading: "刺身級標準：對供應商的要求",
        body: "並非所有三文魚都達到刺身級。這一認定需要：\n\n• 在原產地進行寄生蟲測試和認證\n• 從收穫到交貨保持完整冷鏈（永不超過4°C）\n• 空運（非海運）以確保最大新鮮度\n• 從交貨日期起最少5天剩餘保質期\n• 包裝完整性——真空密封或改良氣氛包裝\n• 新鮮度指標：亮橙粉色、肉質緊實、邊緣無褐變、無異味\n\n請要求任何潛在供應商提供這些標準的文件。無法提供認證的供應商不應供應刺身產品。",
      },
      {
        heading: "冷鏈要求：從農場到餐桌的溫度控制",
        body: "三文魚品質在適當溫度範圍外迅速下降。專業冷鏈要求：\n\n• 收穫至包裝：保持在2°C以下\n• 空運：在冷藏貨艙中\n• 香港/澳門海關清關：在冷藏推車上保持\n• 送貨車輛：全程冷藏（2°C–4°C）\n• 餐廳收貨：送達時檢查溫度（超過5°C則拒收）\n• 廚房儲存：專用2°C–4°C冰箱，不與熟食混放\n• 備餐：每次取少量，未用部分立即放回\n\n對於澳門送貨，從香港額外的過境時間需額外考慮。確保您的供應商對此有適當的緩衝安排。",
      },
      {
        heading: "訂購頻率及存貨管理",
        body: "對於每日提供三文魚刺身的餐廳：\n\n• 每週至少訂購3至4次以保持最大新鮮度\n• 用於生食服務的三文魚送達後不超過48小時\n• 建立最少2天的安全庫存以應對送貨延誤\n• 規劃季節性需求增加：節慶季節及夏季需求增加30至50%\n\n對於澳門賭場度假村及大型酒店宴會業務，固定量的每週長期訂單加上彈性補充訂單，能最好地平衡供應安全性和新鮮度週轉。",
      },
      {
        heading: "香港及澳門三文魚定價因素",
        body: "香港及澳門三文魚批發定價受以下因素影響：\n\n• 品種：帝王三文魚的價格是大西洋三文魚的3至5倍\n• 原產地：挪威大西洋三文魚為基準定價；法羅群島及蘇格蘭略有溢價\n• 交貨頻率：每週空運3次與頻率較低影響新鮮度和成本\n• 切割方式：整魚、魚排、魚塊——了解是否提供定制切割\n• 數量：定期長期訂單通常比即期採購獲得更好的定價\n\n採購決策應平衡成本與較便宜、不夠新鮮產品的品質風險——食品安全事故的代價遠高於經驗證刺身級產品的溢價。",
      },
      {
        heading: "為香港/澳門選擇三文魚批發供應商",
        body: "評估三文魚批發供應商的標準：\n\n1. 專業化：專注於高端海鮮的供應商比一般海鮮分銷商保持更嚴格的品質標準\n2. 原產地透明度：他們能否說明具體農場、產區和收穫日期？\n3. 交貨頻率：每週幾次？是否可以短時間通知送貨？\n4. 澳門送貨能力：他們能否處理跨境物流？\n5. 最低訂購量：是否符合您的需求量？\n6. 退貨政策：如果送貨不達標怎麼辦？\n7. 溝通：他們是否主動通知您品質問題、供應限制或季節性變化？\n\n稻荷環球食品專門為香港及澳門的餐廳及酒店市場提供優質海膽及三文魚。我們每週2至3次從挪威及法羅群島空運大西洋三文魚，提前預訂可獲取帝王三文魚及紅三文魚，並為香港及澳門兩地提供送貨服務。",
      },
    ],
    conclusion: "對於香港及澳門的餐廳而言，三文魚採購是直接影響食品安全、賓客體驗及廚房成本的營運決策。合適的供應商能提供一致性、透明度及可靠性——每次送貨，每一週。",
    ctaTitle: "尋找可靠的三文魚供應商？",
    cta: "聯繫稻荷環球食品，獲取香港及澳門的三文魚批發報價、送貨時間表及品質標準。",
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

export default async function SalmonSourcingGuidePage({ params }: Props) {
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
      { "@type": "Thing", name: "Salmon" },
      { "@type": "Thing", name: "Sashimi" },
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
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
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
            <div className="bg-blue-50 rounded-xl p-8">
              <p className="text-gray-800 leading-relaxed italic">{c.conclusion}</p>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">{c.ctaTitle}</h3>
              <p className="text-gray-300 mb-6">{c.cta}</p>
              <a
                href={`/${locale}/contact`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
