import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Hong Kong & Macau Seafood Market Overview",
    metaDesc:
      "Hong Kong and Macau premium seafood market analysis. Sea urchin and salmon market size, demand drivers, restaurant industry insights, and sourcing trends for 2025–2026.",
    intro:
      "Hong Kong and Macau represent two of Asia's most sophisticated premium seafood markets. Understanding market dynamics helps buyers, restaurateurs, and sourcing professionals make strategic decisions.",
    marketStats: [
      {
        stat: "HK Restaurant Industry",
        value: "~15,000+",
        desc: "Licensed food premises in Hong Kong, with Japanese cuisine growing fastest in the fine dining segment",
      },
      {
        stat: "Macau Gaming & Hospitality",
        value: "42+",
        desc: "Major casino hotels in Macau, each operating multiple fine dining restaurants with premium seafood programs",
      },
      {
        stat: "Japanese Restaurant Growth",
        value: "~8–12%",
        desc: "Estimated annual growth in Japanese restaurant openings across HK and Macau in recent years, driven by omakase and izakaya formats",
      },
      {
        stat: "Salmon — Most Popular Sashimi",
        value: "#1",
        desc: "Salmon is the single most consumed sashimi fish in Hong Kong and Macau, accounting for a majority of Japanese restaurant raw fish sales",
      },
    ],
    sections: [
      {
        title: "Hong Kong Market",
        points: [
          "HK is Asia's most competitive fine dining market with Michelin-starred and omakase-format Japanese restaurants driving premium uni and salmon demand",
          "Wholesale buyers range from major restaurant groups to independent operators in Wan Chai, Tsim Sha Tsui, Central, and the New Territories",
          "Strong hotel sector demand: 5-star hotels consistently source the highest grade A and AA uni for buffets, room service, and à la carte menus",
          "Growing retail channel: premium food halls (City'super, Great, specialty Japanese supermarkets) create consumer pull-through demand",
          "Weekly air freight from Japan and Norway is the industry norm for top-tier operations",
        ],
      },
      {
        title: "Macau Market",
        points: [
          "Macau's casino resort model drives the highest per-venue consumption of premium seafood in Asia — each major resort operates 10–25 restaurants",
          "Macau demand for sea urchin is particularly strong given the high concentration of Japanese, fine dining, and VIP hospitality operations",
          "Supply chain complexity is higher in Macau — cross-border logistics from Hong Kong add 12–24 hours to delivery windows, making cold chain management critical",
          "Price sensitivity in Macau is lower for premium products due to the VIP hospitality model — quality consistently prioritized over cost",
          "Growing independent restaurant scene outside the casino corridor creates new B2B opportunities for smaller-volume buyers",
        ],
      },
      {
        title: "Key Demand Drivers",
        points: [
          "Omakase dining format growth: fixed multi-course menus typically feature 3–5 uni presentations, driving per-table uni consumption significantly higher than à la carte",
          "Health-conscious dining: salmon's Omega-3 profile and sea urchin's unique nutritional composition align with wellness trends",
          "Social media and food culture: visual impact of high-quality uni and salmon on platforms has accelerated demand from premium dining experiences",
          "Tourism recovery: both HK and Macau benefit from mainland China visitor spend in fine dining, with Japanese cuisine among top spending categories",
          "Corporate entertaining: premium Japanese seafood is a standard component of business entertainment in both markets",
        ],
      },
    ],
    competitiveLandscape: {
      title: "Supply Landscape",
      text: "The premium seafood supply market in HK and Macau is served by a combination of large trading companies, specialized Japanese seafood importers, and direct-source suppliers like Inari Global Food. Differentiation lies in: source authenticity (certified Hokkaido vs. undocumented origin), cold chain integrity, consistency of supply, and relationship-based service for restaurant clients.",
    },
    inariPosition: {
      title: "Inari Global Food's Market Position",
      points: [
        "Specialized focus: sea urchin and premium salmon only — deep expertise vs. general seafood traders",
        "Dual-market presence: dedicated delivery infrastructure covering both Hong Kong and Macau",
        "Direct sourcing relationships with Hokkaido certified producers and Norwegian certified farms",
        "Flexible supply: accommodates both small daily restaurant orders and large hotel weekly programs",
        "Trilingual service: Cantonese, English, and Mandarin — serving the full spectrum of HK and Macau buyers",
      ],
    },
  },
  "zh-HK": {
    title: "香港及澳門海鮮市場概覽",
    metaDesc:
      "香港及澳門優質海鮮市場分析。海膽及三文魚市場規模、需求驅動因素、餐飲業洞察及2025–2026年採購趨勢。",
    intro:
      "香港及澳門是亞洲最成熟的優質海鮮市場之一。了解市場動態有助買家、餐飲業者及採購專業人士作出策略性決策。",
    marketStats: [
      {
        stat: "香港餐飲業規模",
        value: "逾15,000間",
        desc: "香港持牌食肆數量，日式料理在高端餐飲市場增速最快",
      },
      {
        stat: "澳門博彩及酒店業",
        value: "逾42間",
        desc: "澳門主要賭場酒店數量，每間均設有多家高端餐廳，配備完善的優質海鮮採購計劃",
      },
      {
        stat: "日式餐廳增長",
        value: "約8–12%",
        desc: "近年港澳日式餐廳年增長率估計，受Omakase及居酒屋形式帶動",
      },
      {
        stat: "三文魚 — 最受歡迎刺身",
        value: "第1位",
        desc: "三文魚是香港及澳門消費量最大的刺身魚類，佔日式餐廳生魚銷售額的主要比例",
      },
    ],
    sections: [
      {
        title: "香港市場",
        points: [
          "香港是亞洲競爭最激烈的高端餐飲市場，米芝蓮及Omakase形式的日式餐廳帶動頂級海膽及三文魚需求",
          "批發買家涵蓋灣仔、尖沙咀、中環及新界的大型餐飲集團至獨立餐廳",
          "酒店業需求強勁：五星級酒店持續採購最高等級A及AA級海膽，用於自助餐、客房服務及單點菜單",
          "零售渠道增長：高端食品超市（City'super、Great、日式超市）創造消費者需求拉動效應",
          "每週從日本及挪威空運是頂級餐飲業的行業標準",
        ],
      },
      {
        title: "澳門市場",
        points: [
          "澳門的賭場度假村模式帶動亞洲每間場所優質海鮮消費量最高——主要度假村各設10–25家餐廳",
          "鑒於日式料理、高端餐飲及貴賓款待服務高度集中，澳門海膽需求尤為強勁",
          "澳門供應鏈複雜程度較高——從香港跨境物流增加12–24小時，對冷鏈管理要求更嚴",
          "貴賓款待模式使澳門市場對優質產品的價格敏感度較低，品質始終優先於成本",
          "賭場走廊以外的獨立餐廳場景增長，為較小訂量買家創造新的企業對企業商機",
        ],
      },
      {
        title: "主要需求驅動因素",
        points: [
          "Omakase餐飲形式增長：固定多道菜套餐通常包含3–5道海膽呈現，使每桌海膽消費量遠高於單點",
          "健康飲食趨勢：三文魚的Omega-3成分及海膽的獨特營養組成與健康飲食趨勢高度契合",
          "社交媒體及飲食文化：高品質海膽及三文魚的視覺呈現加速了優質餐飲體驗的需求",
          "旅遊業復甦：港澳均受惠於中國內地訪客高端餐飲消費，日式料理是消費最高的類別之一",
          "商務宴請：優質日式海鮮是兩地商務招待的標準選項",
        ],
      },
    ],
    competitiveLandscape: {
      title: "供應市場格局",
      text: "港澳優質海鮮供應市場由大型貿易公司、專業日式海鮮進口商及像稻荷環球食品般的直接採購供應商共同服務。差異化優勢在於：產地真實性（認證北海道與不明來源）、冷鏈完整性、供應一致性，以及以關係為基礎的餐廳客戶服務。",
    },
    inariPosition: {
      title: "稻荷環球食品的市場定位",
      points: [
        "專業聚焦：只經營海膽及優質三文魚——深度專業勝於一般海鮮貿易商",
        "雙市場覆蓋：同時服務香港及澳門的專用配送基礎設施",
        "與北海道認證生產商及挪威認證農場建立直接採購關係",
        "靈活供應：同時滿足小型餐廳每日訂購及大型酒店每週計劃",
        "三語服務：廣東話、英語及普通話——服務港澳所有類型買家",
      ],
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
    alternates: { canonical: `/${locale}/market/hk-macau-overview` },
  };
}

export default async function MarketOverviewPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const isZh = locale === "zh-HK";
  const d = isZh ? content["zh-HK"] : content["en"];

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-600 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{d.title}</h1>
            <p className="text-lg text-slate-300 max-w-3xl">{d.intro}</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.marketStats.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-black text-amber-600 mb-2">{s.value}</div>
                <div className="text-sm font-semibold text-slate-700 mb-2">{s.stat}</div>
                <div className="text-xs text-slate-500">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Sections */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {d.sections.map((sec, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-slate-800 mb-5 pb-3 border-b-2 border-amber-500">
                  {sec.title}
                </h2>
                <ul className="space-y-3">
                  {sec.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600">
                      <span className="text-amber-500 mt-1 flex-shrink-0">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Supply Landscape + Inari Position */}
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-4">{d.competitiveLandscape.title}</h2>
              <p className="text-slate-600 leading-relaxed">{d.competitiveLandscape.text}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-4">{d.inariPosition.title}</h2>
              <ul className="space-y-3">
                {d.inariPosition.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-amber-500 mt-1">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isZh ? "了解稻荷環球食品的供應方案" : "Learn About Inari Global Food Supply Programs"}
            </h2>
            <a href={`/${locale}/contact`} className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              {isZh ? "聯絡我們" : "Contact Us"}
            </a>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
