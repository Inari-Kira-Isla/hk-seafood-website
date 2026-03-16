import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Salmon Grading & Sashimi-Grade Standards — Hong Kong & Macau",
    metaDesc: "Understanding sashimi-grade salmon in Hong Kong and Macau. What does sashimi-grade mean, how is salmon graded, and what to look for when buying for raw consumption.",
    intro: "Sashimi-grade is not a formal certification in most markets — it is a standard determined by freshness, handling, parasite testing, and cold-chain integrity. Understanding what sashimi-grade means helps buyers evaluate their supplier and maintain food safety in their kitchen.",
    gradingTitle: "Salmon Quality Grades",
    grades: [
      {
        level: "Sashimi Grade",
        levelCn: "刺身級",
        badge: "Raw Consumption Safe",
        badgeCn: "可生食",
        color: "green",
        desc: "Meets the highest freshness and handling standards. Intended and safe for raw consumption. Parasite-tested at origin. Air-freighted for maximum freshness. This is what restaurants serving sashimi, nigiri, and crudo require.",
        descCn: "達到最高新鮮度及處理標準。適合且安全用於生食。在原產地進行寄生蟲測試。空運確保最大新鮮度。這是供應刺身、握壽司及意大利生魚片的餐廳所需的標準。",
        criteria: [
          "Parasite-free certification from harvest origin",
          "Unbroken cold chain (never exceeds 4°C from harvest to delivery)",
          "Air-freighted — never sea freight",
          "Minimum 5-day shelf life from delivery date",
          "Bright, vivid orange-pink color",
          "Firm, springy flesh",
          "Clean ocean scent — no off-odor",
          "Vacuum-sealed or modified atmosphere packaging",
        ],
        criteriaCn: [
          "原產地無寄生蟲認證",
          "完整冷鏈（從捕撈到交貨從不超過4°C）",
          "空運——從不使用海運",
          "從交貨日期起最少5天保質期",
          "鮮艷的橙粉色",
          "肉質緊實有彈性",
          "清新海洋氣息——無異味",
          "真空密封或改良氣氛包裝",
        ],
      },
      {
        level: "Premium Cooking Grade",
        levelCn: "頂級烹飪級",
        badge: "Heat Treatment Required",
        badgeCn: "需加熱處理",
        color: "blue",
        desc: "Excellent quality for all cooked preparations. Same trusted origins as sashimi grade, but may not meet the freshness threshold for raw service. Ideal for grilling, baking, smoking, and pan-searing applications.",
        descCn: "適合所有烹飪料理的優質產品。來自與刺身級相同的可信賴產地，但可能未達到生食服務的新鮮度門檻。非常適合燒烤、焗爐、煙熏及煎鍋料理。",
        criteria: [
          "Same sourcing origins as sashimi grade",
          "Good color and marbling",
          "Suitable for cooked service",
          "Must be thoroughly cooked before serving",
        ],
        criteriaCn: [
          "與刺身級相同的採購產地",
          "良好的色澤和油花",
          "適合烹飪服務",
          "上桌前必須充分烹熟",
        ],
      },
    ],
    inspectionTitle: "How to Inspect Salmon on Delivery",
    inspectionPoints: [
      {
        check: "Color",
        checkCn: "色澤",
        pass: "Bright, vivid orange-pink throughout. Consistent marbling.",
        passCn: "全程鮮艷橙粉色。油花均勻。",
        fail: "Browning at edges, pale or dull color, uneven or absent marbling.",
        failCn: "邊緣褐變，色澤蒼白或暗淡，油花不均勻或缺乏。",
      },
      {
        check: "Texture",
        checkCn: "質地",
        pass: "Firm and springy when pressed. Returns to shape.",
        passCn: "按壓時緊實有彈性。恢復形狀。",
        fail: "Mushy, soft, or separating along the grain lines.",
        failCn: "軟爛、鬆散或沿紋路分離。",
      },
      {
        check: "Smell",
        checkCn: "氣味",
        pass: "Fresh, clean ocean scent. Neutral to slightly sea-like.",
        passCn: "新鮮、清爽的海洋氣息。中性至輕微海味。",
        fail: "Sour, ammonia, or 'fishy' smell. Any off-odor is a rejection signal.",
        failCn: "酸味、氨味或「腥味」。任何異味都是拒收的信號。",
      },
      {
        check: "Temperature",
        checkCn: "溫度",
        pass: "2°C–4°C on delivery. Cold to the touch.",
        passCn: "送達時2°C至4°C。觸摸感覺冰冷。",
        fail: "Above 5°C on delivery — reject and document.",
        failCn: "送達時超過5°C——拒收並記錄。",
      },
      {
        check: "Packaging",
        checkCn: "包裝",
        pass: "Sealed, intact packaging. No torn vacuum seals.",
        passCn: "密封、完整的包裝。真空密封無破損。",
        fail: "Broken seal, damaged packaging, excessive liquid accumulation.",
        failCn: "密封破損、包裝損壞、液體過多積聚。",
      },
    ],
    faqTitle: "Grading FAQs",
    faqs: [
      {
        q: "What does sashimi-grade salmon mean in Hong Kong?",
        a: "Sashimi-grade salmon in Hong Kong means the fish meets the freshness, handling, and parasite-testing standards required for safe raw consumption. It has been air-freighted (not sea-shipped), maintained below 4°C throughout the supply chain, and certified parasite-free at origin. Inari Global Food supplies only sashimi-grade salmon to Hong Kong and Macau restaurants.",
      },
      {
        q: "How do I know if my salmon supplier is providing true sashimi-grade product?",
        a: "Ask for: (1) Country of origin certificate, (2) Harvest date documentation, (3) Parasite testing certification, (4) Cold chain records showing temperature maintained below 4°C, (5) Air-freight airway bill. Suppliers who cannot provide these should not be supplying raw-consumption salmon.",
      },
      {
        q: "How long does sashimi-grade salmon last after delivery?",
        a: "Sashimi-grade salmon should be used within 48 hours of delivery for raw service, assuming it is stored at 2°C–4°C and packaging is kept sealed until service. For cooked applications, shelf life extends to 3–4 days. Never hold sashimi-grade salmon beyond 48 hours for raw service.",
      },
      {
        q: "Is Norwegian salmon better than Scottish or Faroe Islands salmon for sashimi?",
        a: "All three are Atlantic Salmon of equal safety and freshness when properly handled. Norwegian salmon is the most available and price-competitive. Scottish Highland and Faroe Islands salmon command a slight premium for their flavor profile. For sashimi in Hong Kong and Macau restaurants, all three are appropriate.",
      },
    ],
  },
  "zh-HK": {
    title: "三文魚分級與刺身級標準 — 香港及澳門",
    metaDesc: "了解香港及澳門的刺身級三文魚。刺身級的定義、三文魚如何分級，以及購買生食三文魚時的注意事項。",
    intro: "在大多數市場，刺身級並非正式認證——而是由新鮮度、處理方式、寄生蟲測試及冷鏈完整性決定的標準。了解刺身級的含義，有助於買家評估供應商並在廚房中維持食品安全。",
    gradingTitle: "三文魚品質等級",
    grades: [
      {
        level: "Sashimi Grade",
        levelCn: "刺身級",
        badge: "Raw Consumption Safe",
        badgeCn: "可生食",
        color: "green",
        desc: "Meets highest freshness standards.",
        descCn: "達到最高新鮮度及處理標準。適合且安全用於生食。在原產地進行寄生蟲測試。空運確保最大新鮮度。這是供應刺身、握壽司及意大利生魚片的餐廳所需的標準。",
        criteria: [],
        criteriaCn: [
          "原產地無寄生蟲認證",
          "完整冷鏈（從捕撈到交貨從不超過4°C）",
          "空運——從不使用海運",
          "從交貨日期起最少5天保質期",
          "鮮艷的橙粉色",
          "肉質緊實有彈性",
          "清新海洋氣息——無異味",
          "真空密封或改良氣氛包裝",
        ],
      },
      {
        level: "Premium Cooking Grade",
        levelCn: "頂級烹飪級",
        badge: "Heat Treatment Required",
        badgeCn: "需加熱處理",
        color: "blue",
        desc: "For cooked applications.",
        descCn: "適合所有烹飪料理的優質產品。來自與刺身級相同的可信賴產地，但可能未達到生食服務的新鮮度門檻。非常適合燒烤、焗爐、煙熏及煎鍋料理。",
        criteria: [],
        criteriaCn: [
          "與刺身級相同的採購產地",
          "良好的色澤和油花",
          "適合烹飪服務",
          "上桌前必須充分烹熟",
        ],
      },
    ],
    inspectionTitle: "送貨時如何檢查三文魚",
    inspectionPoints: [
      {
        check: "Color",
        checkCn: "色澤",
        pass: "Bright orange-pink.",
        passCn: "全程鮮艷橙粉色。油花均勻。",
        fail: "Browning at edges.",
        failCn: "邊緣褐變，色澤蒼白或暗淡，油花不均勻或缺乏。",
      },
      {
        check: "Texture",
        checkCn: "質地",
        pass: "Firm and springy.",
        passCn: "按壓時緊實有彈性。恢復形狀。",
        fail: "Mushy or soft.",
        failCn: "軟爛、鬆散或沿紋路分離。",
      },
      {
        check: "Smell",
        checkCn: "氣味",
        pass: "Fresh ocean scent.",
        passCn: "新鮮、清爽的海洋氣息。",
        fail: "Any off-odor.",
        failCn: "酸味、氨味或「腥味」。任何異味都是拒收的信號。",
      },
      {
        check: "Temperature",
        checkCn: "溫度",
        pass: "2°C–4°C",
        passCn: "送達時2°C至4°C。",
        fail: "Above 5°C — reject.",
        failCn: "送達時超過5°C——拒收並記錄。",
      },
      {
        check: "Packaging",
        checkCn: "包裝",
        pass: "Sealed, intact.",
        passCn: "密封、完整的包裝。",
        fail: "Broken seal.",
        failCn: "密封破損、包裝損壞。",
      },
    ],
    faqTitle: "分級常見問題",
    faqs: [
      {
        q: "香港的刺身級三文魚是什麼意思？",
        a: "香港的刺身級三文魚意味著魚類達到安全生食所需的新鮮度、處理和寄生蟲測試標準。它以空運方式運輸（非海運），整個供應鏈溫度保持在4°C以下，並在原產地獲得無寄生蟲認證。稻荷環球食品僅向香港及澳門餐廳供應刺身級三文魚。",
      },
      {
        q: "如何確定我的三文魚供應商提供的是真正的刺身級產品？",
        a: "請要求：(1) 原產地證書，(2) 採收日期文件，(3) 寄生蟲測試認證，(4) 顯示溫度保持在4°C以下的冷鏈記錄，(5) 空運提單。無法提供這些文件的供應商不應供應生食三文魚。",
      },
      {
        q: "刺身級三文魚送達後能保存多久？",
        a: "假設存放在2°C至4°C且包裝在服務前保持密封，刺身級三文魚應在送達後48小時內用於生食服務。對於熟食應用，保質期延長至3至4天。生食服務的刺身級三文魚絕不超過48小時。",
      },
      {
        q: "挪威三文魚比蘇格蘭或法羅群島三文魚更適合刺身嗎？",
        a: "在妥善處理的情況下，三者均為安全性和新鮮度相同的大西洋三文魚。挪威三文魚供應量最大，價格最具競爭力。蘇格蘭高地及法羅群島三文魚因其風味特色而收取略微溢價。對於香港及澳門餐廳的刺身，三者均適合使用。",
      },
    ],
  },
};

const badgeColors: Record<string, string> = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return { title: c.title, description: c.metaDesc };
}

export default async function SalmonGradingPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];
  const isZh = locale === "zh-HK";

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

        {/* Grade Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.gradingTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.grades.map((grade) => (
                <div key={grade.levelCn} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{grade.levelCn}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColors[grade.color]}`}>
                      {isZh ? grade.badgeCn : grade.badge}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-gray-700 text-sm mb-4">{isZh ? grade.descCn : grade.desc}</p>
                    <ul className="space-y-1">
                      {(isZh ? grade.criteriaCn : grade.criteria).map((c, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-green-500">✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.inspectionTitle}</h2>
            <div className="space-y-4">
              {c.inspectionPoints.map((point) => (
                <div key={point.checkCn} className="bg-white rounded-xl overflow-hidden">
                  <div className="px-6 py-3 bg-gray-800 text-white font-bold text-sm">
                    {isZh ? point.checkCn : point.check}
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="px-6 py-4 border-r border-gray-100">
                      <div className="text-xs font-bold text-green-600 uppercase mb-1">
                        {isZh ? "通過" : "✓ Pass"}
                      </div>
                      <p className="text-gray-700 text-sm">{isZh ? point.passCn : point.pass}</p>
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-xs font-bold text-red-500 uppercase mb-1">
                        {isZh ? "拒收" : "✗ Reject"}
                      </div>
                      <p className="text-gray-700 text-sm">{isZh ? point.failCn : point.fail}</p>
                    </div>
                  </div>
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
