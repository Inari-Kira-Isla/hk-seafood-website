import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin Sourcing Origins — Hokkaido, Norway, Canada",
    metaDesc: "Where does premium sea urchin come from? Complete sourcing guide covering Hokkaido Japan, Canadian British Columbia, and Maine USA. Production methods, certifications, and why origin matters.",
    intro: "The flavor, texture, and quality of sea urchin is fundamentally shaped by where it comes from. Ocean temperature, salinity, food source, and harvesting practices all affect the final product. Here is a complete guide to the world's premium sea urchin origins — and why Inari Global Food sources from each.",
    origins: [
      {
        name: "Hokkaido, Japan",
        nameZh: "日本北海道",
        flag: "🇯🇵",
        species: "Bafun Uni (Strongylocentrotus intermedius) and Murasaki Uni (Strongylocentrotus nudus)",
        environment: "Cold, nutrient-rich Sea of Japan and Sea of Okhotsk. Water temperatures 5–12°C. Kelp forests provide natural food source.",
        flavor: "Bafun: intensely sweet, rich, creamy with complex umami depth. Murasaki: lighter, clean ocean finish, delicate brininess.",
        season: "Bafun peak: June–August. Murasaki: year-round.",
        grading: "Strict Japanese grading system: AA (omakase exclusive), A (restaurant premium), B (culinary).",
        certification: "Licensed fishing areas, government-regulated harvest quotas, mandatory freshness testing.",
        why: "Hokkaido is the global benchmark for uni quality. The cold water, kelp-rich diet, and careful handling produce the world's most prized roe. No serious omakase program operates without Hokkaido uni on the menu.",
      },
      {
        name: "British Columbia, Canada",
        nameZh: "加拿大不列顛哥倫比亞省",
        flag: "🇨🇦",
        species: "Red Sea Urchin (Mesocentrotus franciscanus) — largest species in the world.",
        environment: "Pacific Northwest cold ocean. Rocky coastlines, giant kelp forests. Sustainable wild harvest.",
        flavor: "Large, bold lobes with buttery, rich flavor. Slightly sweeter than Japanese uni with more pronounced ocean character.",
        season: "Peak October–May — perfectly aligned with Hokkaido off-season.",
        grading: "A Grade: large, intact lobes suitable for premium sashimi. B Grade: culinary.",
        certification: "DFO (Department of Fisheries and Oceans) regulated. Sustainability certified. Annual quota management.",
        why: "Canadian Red Sea Urchin fills the supply gap during Hokkaido's off-season, enabling year-round premium uni menus. The large lobe size makes for impressive presentation. Growing recognition among Hong Kong and Macau chefs.",
      },
      {
        name: "Maine, USA",
        nameZh: "美國緬因州",
        flag: "🇺🇸",
        species: "Atlantic Sea Urchin / Green Urchin (Strongylocentrotus droebachiensis)",
        environment: "North Atlantic cold water. Rocky coastal habitat. Wild harvest.",
        flavor: "Lighter flavor profile, delicate sweetness, clean finish. Smaller lobe size than Pacific varieties.",
        season: "Peak October–March.",
        grading: "A and B grades. Suitable for seasonal applications.",
        certification: "NOAA regulated, state fishery management.",
        why: "Seasonal Maine uni provides an East Coast Atlantic character that creates interesting contrast on menus alongside Pacific varieties.",
      },
    ],
    coldChainTitle: "Sourcing to Delivery: Our Cold Chain",
    coldChainSteps: [
      { step: "1", label: "Harvest", desc: "Licensed harvesters in certified areas. Dive-harvested by hand for minimal damage." },
      { step: "2", label: "Packing", desc: "Packed in wooden trays with kelp at harvest location. Refrigerated to 2°C within hours." },
      { step: "3", label: "Export Facility", desc: "Freshness testing, grading, and export inspection. Certificate of origin issued." },
      { step: "4", label: "Air Freight", desc: "Temperature-controlled air cargo. No sea freight — air only ensures maximum freshness." },
      { step: "5", label: "HK Clearance", desc: "Refrigerated customs clearance. Our team inspects every shipment before release." },
      { step: "6", label: "Delivery", desc: "Refrigerated delivery vehicles. Delivered to your kitchen within 24–48 hours of landing." },
    ],
    faqTitle: "Sourcing FAQs",
    faqs: [
      {
        q: "Where does Inari Global Food source its sea urchin?",
        a: "Inari Global Food sources sea urchin primarily from Hokkaido, Japan (Bafun and Murasaki Uni) and British Columbia, Canada (Red Sea Urchin). All products are sashimi-grade, air-freighted, and delivered to Hong Kong and Macau restaurants within 24–48 hours of landing.",
      },
      {
        q: "Is Hokkaido uni available year-round in Hong Kong?",
        a: "Hokkaido Bafun Uni has a peak season of June–August. Outside this window, we supply Murasaki Uni from Japan year-round and Canadian Red Sea Urchin (October–May) to maintain continuous premium supply.",
      },
      {
        q: "What certifications does Inari Global Food's sea urchin carry?",
        a: "Our Hokkaido products carry Japanese government export certification with harvest area documentation. Canadian Red Uni is DFO-certified with annual quota compliance. All products come with country of origin certificates and meet Hong Kong food safety import requirements.",
      },
    ],
  },
  "zh-HK": {
    title: "海膽產地指南 — 北海道、加拿大、緬因州",
    metaDesc: "頂級海膽從哪裡來？完整產地指南，涵蓋日本北海道、加拿大不列顛哥倫比亞省及美國緬因州。生產方式、認證及產地重要性。",
    intro: "海膽的風味、質地和品質從根本上取決於其產地。海水溫度、鹽度、食物來源及捕撈方式都會影響最終產品。以下是世界頂級海膽產地的完整指南，以及稻荷環球食品選擇各產地的原因。",
    origins: [
      {
        name: "日本北海道",
        nameZh: "日本北海道",
        flag: "🇯🇵",
        species: "馬糞海膽（Strongylocentrotus intermedius）及紫海膽（Strongylocentrotus nudus）",
        environment: "寒冷、富含營養的日本海及鄂霍次克海。水溫5至12°C。昆布林提供天然食物來源。",
        flavor: "馬糞海膽：強烈甜美、濃郁細膩，帶有複雜的鮮味深度。紫海膽：較清淡，海洋氣息清新，鹹鮮細緻。",
        season: "馬糞海膽旺季：六月至八月。紫海膽：全年供應。",
        grading: "嚴格的日本分級制度：AA（Omakase 專用）、A（餐廳頂級）、B（烹飪用）。",
        certification: "持牌漁區、政府監管捕撈配額、強制新鮮度測試。",
        why: "北海道是海膽品質的全球標準。寒冷海水、富含昆布的飲食和精心處理造就了世界上最珍貴的膽黃。沒有任何認真的 Omakase 菜單不使用北海道海膽。",
      },
      {
        name: "加拿大不列顛哥倫比亞省",
        nameZh: "加拿大不列顛哥倫比亞省",
        flag: "🇨🇦",
        species: "紅海膽（Mesocentrotus franciscanus）——世界上體型最大的海膽品種。",
        environment: "太平洋西北寒冷海域。岩石海岸線，巨型昆布林。可持續野生捕撈。",
        flavor: "膽黃大而飽滿，帶有奶油般濃郁的風味。比日本海膽略甜，海洋特徵更為明顯。",
        season: "旺季十月至五月——與北海道淡季完美銜接。",
        grading: "A 等級：大而完整的膽黃，適合頂級刺身。B 等級：烹飪用。",
        certification: "漁業及海洋部（DFO）監管，獲可持續認證，年度配額管理。",
        why: "加拿大紅海膽填補了北海道淡季的供應缺口，實現全年頂級海膽菜單。大號膽黃帶來出色的擺盤視覺效果。在香港及澳門廚師中日益獲得認可。",
      },
      {
        name: "美國緬因州",
        nameZh: "美國緬因州",
        flag: "🇺🇸",
        species: "大西洋海膽/綠海膽（Strongylocentrotus droebachiensis）",
        environment: "北大西洋寒冷海域。岩石沿海棲息地。野生捕撈。",
        flavor: "口味較清淡，甜度細膩，餘韻清爽。膽黃體積比太平洋品種小。",
        season: "旺季十月至三月。",
        grading: "A 及 B 等級。適合季節性應用。",
        certification: "美國國家海洋漁業局（NOAA）監管，州漁業管理。",
        why: "季節性緬因海膽提供東海岸大西洋風味特色，與太平洋品種相比能在菜單上創造有趣的對比。",
      },
    ],
    coldChainTitle: "從採購到交貨：我們的冷鏈",
    coldChainSteps: [
      { step: "1", label: "捕撈", desc: "持牌捕撈者在認證區域作業。人工潛水捕撈，損傷最小。" },
      { step: "2", label: "包裝", desc: "在捕撈地點用木盤和昆布包裝。數小時內冷藏至2°C。" },
      { step: "3", label: "出口設施", desc: "新鮮度測試、分級及出口檢驗。簽發原產地證書。" },
      { step: "4", label: "空運", desc: "溫控空運貨艙。僅使用空運（非海運）——確保最大新鮮度。" },
      { step: "5", label: "香港清關", desc: "冷藏海關清關。我們的團隊在放行前檢查每批貨物。" },
      { step: "6", label: "送貨", desc: "冷藏送貨車輛。抵港後24至48小時內送達您的廚房。" },
    ],
    faqTitle: "採購常見問題",
    faqs: [
      {
        q: "稻荷環球食品的海膽從哪裡採購？",
        a: "稻荷環球食品主要從日本北海道（馬糞海膽及紫海膽）和加拿大不列顛哥倫比亞省（紅海膽）採購海膽。所有產品均為刺身級，以空運方式運送，在抵達香港及澳門後24至48小時內送達餐廳。",
      },
      {
        q: "北海道海膽是否在香港全年供應？",
        a: "北海道馬糞海膽的旺季為六月至八月。旺季以外，我們全年供應日本紫海膽，以及十月至五月的加拿大紅海膽，確保持續的頂級供應。",
      },
      {
        q: "稻荷環球食品的海膽有哪些認證？",
        a: "我們的北海道產品持有日本政府出口認證，附帶捕撈區域文件。加拿大紅海膽獲 DFO 認證，符合年度配額合規要求。所有產品均附原產地證書，符合香港食品安全進口要求。",
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return { title: c.title, description: c.metaDesc };
}

export default async function SeaUrchinSourcingPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{c.intro}</p>
          </div>
        </section>

        {/* Origins */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {c.origins.map((origin) => (
              <div key={origin.name} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 flex items-center gap-3">
                  <span className="text-3xl">{origin.flag}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{origin.name}</h2>
                    <p className="text-gray-500 text-sm">{origin.species}</p>
                  </div>
                </div>
                <div className="px-6 py-6 grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">
                        {locale === "en" ? "Environment" : "海洋環境"}
                      </div>
                      <p className="text-gray-700 text-sm">{origin.environment}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">
                        {locale === "en" ? "Flavor Profile" : "風味特色"}
                      </div>
                      <p className="text-gray-700 text-sm">{origin.flavor}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">
                        {locale === "en" ? "Season" : "供應季節"}
                      </div>
                      <p className="text-gray-700 text-sm">{origin.season}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">
                        {locale === "en" ? "Grading" : "分級"}
                      </div>
                      <p className="text-gray-700 text-sm">{origin.grading}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">
                        {locale === "en" ? "Certifications" : "認證"}
                      </div>
                      <p className="text-gray-700 text-sm">{origin.certification}</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="text-xs font-bold uppercase text-amber-700 mb-1">
                        {locale === "en" ? "Why We Source Here" : "為什麼選擇此產地"}
                      </div>
                      <p className="text-gray-700 text-sm">{origin.why}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cold Chain */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.coldChainTitle}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {c.coldChainSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.label}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.faqTitle}</h2>
            <div className="space-y-6">
              {c.faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
