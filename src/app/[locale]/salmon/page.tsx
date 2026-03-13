import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Salmon Guide",
    metaDesc: "Complete guide to premium salmon (三文魚) in Hong Kong and Macau. Varieties, quality standards, sourcing origins, and market insights.",
    intro: "Salmon is the most popular sashimi fish in Hong Kong and Macau. As the region's leading supplier, we deliver sashimi-grade and premium cooking salmon from the world's finest sources.",
    varietiesTitle: "Salmon Varieties",
    varieties: [
      {
        name: "Atlantic Salmon (大西洋三文魚)",
        origin: "Norway, Scotland, Faroe Islands",
        character: "Mild, buttery flavor with consistent marbling and tender texture",
        use: "Sashimi, sushi, grilling, smoking, pan-searing",
        supply: "Year-round, air-freighted 2–3 times weekly",
      },
      {
        name: "King Salmon / Chinook (帝王三文魚)",
        origin: "New Zealand, Alaska, British Columbia",
        character: "Highest oil content of all salmon species, rich and buttery",
        use: "Premium sashimi, high-end omakase, fine dining",
        supply: "Seasonal availability — inquire for current stock",
      },
      {
        name: "Sockeye Salmon (紅三文魚)",
        origin: "Alaska, British Columbia",
        character: "Deep red flesh, firm texture, robust and distinctive flavor",
        use: "Grilling, smoking, visual presentation dishes",
        supply: "Seasonal: May–September peak",
      },
    ],
    qualityTitle: "Quality Standards",
    qualities: [
      { level: "Sashimi-Grade", desc: "Meets the strictest freshness, handling, and temperature chain requirements. Safe and intended for raw consumption. Every shipment is tested and certified." },
      { level: "Premium Cooking-Grade", desc: "Excellent quality for all cooked preparations — grilling, baking, smoking, and pan-searing. Sourced from the same trusted origins." },
    ],
    supplyTitle: "Our Supply Chain",
    supplyPoints: [
      "Direct partnerships with certified farms and fisheries",
      "Air-freight delivery ensuring 24–48 hour farm-to-Hong Kong transit",
      "Temperature-controlled logistics from origin to delivery",
      "Quality inspection at every stage of the supply chain",
      "Flexible ordering: whole fish, fillets, portions, and custom cuts",
    ],
    marketTitle: "Salmon in Hong Kong & Macau",
    marketText: "Hong Kong and Macau consume significant volumes of premium salmon annually, driven by the popularity of Japanese cuisine, growing health consciousness, and the versatility of salmon in both raw and cooked applications. The market demands consistent quality, reliable supply, and competitive pricing — exactly what we deliver.",
  },
  "zh-HK": {
    title: "三文魚指南",
    metaDesc: "香港及澳門優質三文魚完全指南。品種、品質標準、採購來源及市場洞察。",
    intro: "三文魚是香港及澳門最受歡迎的刺身魚類。作為區內領先供應商，我們從全球頂級來源供應刺身級及優質烹調級三文魚。",
    varietiesTitle: "三文魚品種",
    varieties: [
      {
        name: "大西洋三文魚（Atlantic Salmon）",
        origin: "挪威、蘇格蘭、法羅群島",
        character: "溫和、奶油般風味，油花均勻，質地嫩滑",
        use: "刺身、壽司、燒烤、煙燻、煎煮",
        supply: "全年供應，每週空運2–3次",
      },
      {
        name: "帝王三文魚 / Chinook（King Salmon）",
        origin: "新西蘭、阿拉斯加、卑詩省",
        character: "所有三文魚品種中油脂含量最高，濃郁奶油風味",
        use: "頂級刺身、高級Omakase、精緻餐飲",
        supply: "季節性供應——請查詢現貨",
      },
      {
        name: "紅三文魚（Sockeye Salmon）",
        origin: "阿拉斯加、卑詩省",
        character: "深紅色肉質、質地緊實、風味獨特濃郁",
        use: "燒烤、煙燻、擺盤展示",
        supply: "季節性供應：5月至9月高峰期",
      },
    ],
    qualityTitle: "品質標準",
    qualities: [
      { level: "刺身級", desc: "符合最嚴格的新鮮度、處理及溫度鏈要求。安全且適合生食。每批貨物均經過檢測認證。" },
      { level: "優質烹調級", desc: "適合所有烹調方式——燒烤、焗爐、煙燻及煎煮。來自同等可信賴的產地。" },
    ],
    supplyTitle: "我們的供應鏈",
    supplyPoints: [
      "與認證農場及漁場直接合作",
      "空運送達，確保農場至香港24–48小時內",
      "從產地到送達全程溫控物流",
      "供應鏈每個環節均有品質檢查",
      "靈活訂購：整條魚、魚柳、切片及自訂切割",
    ],
    marketTitle: "香港及澳門三文魚市場",
    marketText: "香港及澳門每年消耗大量優質三文魚，受日本料理流行、健康意識提升以及三文魚在生食和熟食中的多樣性所驅動。市場要求穩定品質、可靠供應及具競爭力的定價——這正是我們所提供的。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale];
  return { title: c.title, description: c.metaDesc };
}

export default async function SalmonPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDesc,
    author: { "@type": "Organization", name: locale === "zh-HK" ? "海膽三文魚" : "Uni & Salmon" },
    about: [
      { "@type": "Thing", name: "Salmon", alternateName: ["三文魚", "サーモン"] },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-rose-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-lg text-gray-600">{c.intro}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">{c.varietiesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.varieties.map((v) => (
                <div key={v.name} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.name}</h3>
                  <dl className="space-y-2 text-sm">
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "產地" : "Origin"}</dt><dd className="text-gray-700">{v.origin}</dd></div>
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "特點" : "Character"}</dt><dd className="text-gray-700">{v.character}</dd></div>
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "用途" : "Best for"}</dt><dd className="text-gray-700">{v.use}</dd></div>
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "供應" : "Supply"}</dt><dd className="text-gray-700">{v.supply}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{c.qualityTitle}</h2>
            <div className="space-y-4">
              {c.qualities.map((q) => (
                <div key={q.level} className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-1">{q.level}</h3>
                  <p className="text-gray-600">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.supplyTitle}</h2>
            <ul className="space-y-3">
              {c.supplyPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-rose-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.marketTitle}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{c.marketText}</p>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
