import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin Grading Standards",
    metaDesc:
      "How sea urchin (uni) is graded in Japan and international markets. AA, A, B grade standards, what to look for, and how Inari Global Food selects quality for Hong Kong and Macau.",
    intro:
      "Sea urchin grading determines price, presentation, and suitability for different culinary applications. Understanding the grading system helps chefs and buyers make informed purchasing decisions.",
    grades: [
      {
        grade: "AA Grade",
        label: "Finest Available",
        color: "text-amber-600",
        bgColor: "bg-amber-50 border-amber-200",
        criteria: [
          "Perfect deep golden or orange color throughout all lobes",
          "Firm, well-defined lobes that hold shape completely",
          "Zero blemishes, browning, or discoloration",
          "Minimal to no liquid — dry appearance",
          "Clean, pure ocean sweetness — zero bitterness",
          "Harvested and processed within 24 hours",
        ],
        use: "Omakase sushi counters, premium nigiri, prestige uni tasting courses, hotel fine dining",
        rarity:
          "AA Grade represents approximately 10–15% of any given harvest. Supply is tightly controlled and prices reflect scarcity. Inari Global Food maintains priority access from certified Hokkaido producers.",
        priceNote: "Premium pricing — contact us for current rates",
      },
      {
        grade: "A Grade",
        label: "Restaurant Excellence",
        color: "text-slate-700",
        bgColor: "bg-slate-50 border-slate-200",
        criteria: [
          "Excellent golden or orange color with minor natural variation",
          "Lobes are intact and firm with minimal softening",
          "Trace imperfections acceptable — no significant browning",
          "Slight moisture acceptable",
          "Clean flavor with strong sweetness and umami",
          "Typically harvested 24–48 hours prior",
        ],
        use: "High-end sushi restaurants, Japanese fine dining, hotel buffets and à la carte menus",
        rarity:
          "A Grade is the most common premium grade, making it the industry standard for top Hong Kong and Macau Japanese restaurants. Reliable quality at realistic commercial volumes.",
        priceNote: "Standard wholesale pricing available",
      },
      {
        grade: "B Grade",
        label: "Culinary Grade",
        color: "text-slate-500",
        bgColor: "bg-white border-slate-200",
        criteria: [
          "Color may vary — acceptable browning at edges",
          "Lobes may be broken or irregular",
          "Flavor remains good — suitable for cooked applications",
          "More moisture present",
          "Slight bitterness may be present — masked by cooking",
        ],
        use: "Uni pasta, uni butter, uni sauces, cooked uni dishes, processed products",
        rarity:
          "B Grade is used extensively in cooking where visual presentation is less critical. Provides excellent flavor value in pasta sauces, compound butters, and cooked preparations popular in Macau's fusion and Western-style restaurants.",
        priceNote: "Competitive cooking-grade pricing",
      },
    ],
    gradingFactors: {
      title: "Key Grading Factors",
      factors: [
        {
          name: "Color",
          desc: "Golden to deep orange is desirable. Pale yellow may indicate younger harvest; brown or dark edges indicate oxidation or age.",
        },
        {
          name: "Lobe Integrity",
          desc: "Intact, distinct lobes that hold their shape signal freshness and careful handling. Broken or collapsed lobes indicate rough handling or age.",
        },
        {
          name: "Aroma",
          desc: "Fresh uni smells of clean ocean with a sweet undertone. Any ammonia, sulfur, or sour smell indicates quality issues.",
        },
        {
          name: "Moisture Level",
          desc: "Premium grades have minimal free liquid. Excessive moisture indicates cell breakdown and shorter remaining shelf life.",
        },
        {
          name: "Taste Profile",
          desc: "Sweet, creamy umami with a clean ocean finish is ideal. Bitterness indicates stress during harvest or age; excess brininess may signal incorrect handling.",
        },
        {
          name: "Harvest Freshness",
          desc: "Time from harvest to consumption is critical. Inari Global Food tracks harvest dates and prioritizes freshness in all shipments to Hong Kong and Macau.",
        },
      ],
    },
    japanStandard: {
      title: "Japanese Market Standards vs. Hong Kong/Macau",
      text: "Japan uses a combination of visual, size, and origin-based grading. The AA/A/B system used in Hong Kong and Macau is an adapted market standard. Hokkaido certified uni carries additional premium — the 'Rebun Island' and 'Rishiri' designations command the highest premiums globally. Inari Global Food works directly with certified Hokkaido growers to ensure authentic grading.",
    },
  },
  "zh-HK": {
    title: "海膽品質等級標準",
    metaDesc:
      "海膽在日本及國際市場的品質等級劃分方法。AA、A、B級標準說明，以及稻荷環球食品如何為香港及澳門採購篩選優質海膽。",
    intro:
      "海膽的等級決定了價格、賣相及適用的烹調場合。了解等級制度，有助廚師及採購人員作出更明智的決定。",
    grades: [
      {
        grade: "AA 級",
        label: "頂級精選",
        color: "text-amber-600",
        bgColor: "bg-amber-50 border-amber-200",
        criteria: [
          "全部膽黃呈完美深金色或橙色",
          "膽黃緊實、形狀分明，完全保持原形",
          "零瑕疵、無褐變或變色",
          "幾乎無液體 — 外觀乾爽",
          "清純海洋甜味 — 完全無苦澀",
          "採收及處理在24小時內完成",
        ],
        use: "Omakase壽司吧、頂級手握壽司、高端海膽品鑑、酒店精緻料理",
        rarity:
          "AA級約佔每批收成的10–15%。供應受嚴格控制，價格反映其稀缺性。稻荷環球食品與認證北海道生產商保持優先供應關係。",
        priceNote: "頂級定價 — 請聯絡我們了解最新報價",
      },
      {
        grade: "A 級",
        label: "餐廳首選",
        color: "text-slate-700",
        bgColor: "bg-slate-50 border-slate-200",
        criteria: [
          "金黃或橙色色澤良好，有輕微天然差異",
          "膽黃完整緊實，輕微軟化可接受",
          "輕微瑕疵可接受 — 無明顯褐變",
          "輕微水分可接受",
          "風味清純，甜味及鮮味突出",
          "通常採收後24–48小時內",
        ],
        use: "高端壽司餐廳、日式精緻料理、酒店自助餐及單點菜單",
        rarity:
          "A級是最常見的優質等級，為香港及澳門頂級日式餐廳的行業標準，在合理商業用量下提供可靠品質。",
        priceNote: "標準批發定價可查詢",
      },
      {
        grade: "B 級",
        label: "烹調用級",
        color: "text-slate-500",
        bgColor: "bg-white border-slate-200",
        criteria: [
          "顏色可有所不同 — 邊緣輕微褐變可接受",
          "膽黃可能破碎或形狀不規則",
          "味道仍然良好 — 適合烹調用途",
          "水分較多",
          "輕微苦澀味可能存在 — 烹調後可掩蓋",
        ],
        use: "海膽意粉、海膽牛油、海膽醬汁、熟食海膽菜式、加工產品",
        rarity:
          "B級廣泛用於賣相要求較低的烹調場合，在意粉醬汁、複合牛油及熟食料理中提供出色風味，深受澳門融合菜及西式餐廳歡迎。",
        priceNote: "具競爭力的烹調級定價",
      },
    ],
    gradingFactors: {
      title: "主要品質評定因素",
      factors: [
        {
          name: "顏色",
          desc: "深金橙色為佳。淺黃色可能表示採收較早；邊緣褐色或深色表示氧化或存放過久。",
        },
        {
          name: "膽黃完整性",
          desc: "完整、形狀分明的膽黃表示新鮮及妥善處理。破碎或塌陷表示處理粗糙或存放過久。",
        },
        {
          name: "氣味",
          desc: "新鮮海膽帶清純海洋氣息及甜味。任何氨氣、硫磺或酸味均表示品質有問題。",
        },
        {
          name: "水分含量",
          desc: "優質等級的自由液體極少。過多水分表示細胞已分解，剩餘保質期較短。",
        },
        {
          name: "口味特點",
          desc: "理想口味為香甜、奶油感十足的鮮味，配合清純海洋餘韻。苦澀表示採收時有壓力或存放過久；過鹹可能表示處理不當。",
        },
        {
          name: "採收新鮮度",
          desc: "從採收到食用的時間至關重要。稻荷環球食品追蹤採收日期，所有運往香港及澳門的貨物均以新鮮度為優先。",
        },
      ],
    },
    japanStandard: {
      title: "日本市場標準與香港/澳門的對比",
      text: "日本採用視覺、尺寸及產地綜合評定方式。香港及澳門使用的AA/A/B制度是市場改良標準。北海道認證海膽享有額外溢價，「禮文島」及「利尻」產地的海膽在全球享有最高溢價。稻荷環球食品直接與認證北海道農場合作，確保品級真實可靠。",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh-HK";
  const d = isZh ? content["zh-HK"] : content["en"];
  return {
    title: d.title + " | Inari Global Food",
    description: d.metaDesc,
    alternates: { canonical: `/${locale}/sea-urchin/grading` },
  };
}

export default async function SeaUrchinGradingPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const isZh = locale === "zh-HK";
  const d = isZh ? content["zh-HK"] : content["en"];

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-slate-400 mb-4">
              <a href={`/${locale}/sea-urchin`} className="hover:text-white">
                {isZh ? "海膽" : "Sea Urchin"}
              </a>
              {" / "}
              <span className="text-white">{isZh ? "品質等級" : "Grading"}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{d.title}</h1>
            <p className="text-lg text-slate-300 max-w-3xl">{d.intro}</p>
          </div>
        </section>

        {/* Grade Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {d.grades.map((g, i) => (
              <div key={i} className={`border-2 rounded-2xl overflow-hidden ${g.bgColor}`}>
                <div className="px-8 py-5 border-b border-current border-opacity-20">
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl font-black ${g.color}`}>{g.grade}</span>
                    <span className="text-slate-500 text-lg">{g.label}</span>
                  </div>
                </div>
                <div className="px-8 py-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      {isZh ? "評定標準" : "Grading Criteria"}
                    </h3>
                    <ul className="space-y-2">
                      {g.criteria.map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                          <span className="text-amber-500 mt-0.5">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        {isZh ? "適用場合" : "Best For"}
                      </h3>
                      <p className="text-slate-700 text-sm">{g.use}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        {isZh ? "供應說明" : "Supply Notes"}
                      </h3>
                      <p className="text-slate-600 text-sm">{g.rarity}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <p className="text-slate-500 text-sm italic">{g.priceNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grading Factors */}
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
              {d.gradingFactors.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.gradingFactors.factors.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-amber-700 mb-2">{f.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Japan Standard */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-amber-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              {d.japanStandard.title}
            </h2>
            <p className="text-slate-600 leading-relaxed">{d.japanStandard.text}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isZh ? "查詢現貨及批發報價" : "Enquire About Current Stock & Wholesale Pricing"}
            </h2>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {isZh ? "聯絡我們" : "Contact Us"}
            </a>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
