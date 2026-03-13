import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin (Uni) Guide",
    metaDesc: "Complete guide to sea urchin (uni / 海膽) in Hong Kong and Macau. Varieties, grading, sourcing, and quality standards from the industry experts.",
    intro: "Sea urchin, or uni (雲丹), is one of the most prized delicacies in East Asian cuisine. As Hong Kong and Macau's leading uni supplier, we provide comprehensive knowledge and premium products.",
    varietiesTitle: "Sea Urchin Varieties",
    varieties: [
      {
        name: "Bafun Uni (馬糞海膽)",
        origin: "Hokkaido, Japan",
        season: "Peak: June–August",
        flavor: "Rich, creamy, intensely sweet with deep umami",
        use: "Premium sashimi, sushi nigiri, uni donburi",
      },
      {
        name: "Murasaki Uni (紫海膽)",
        origin: "Various regions, Japan",
        season: "Year-round with seasonal peaks",
        flavor: "Delicate, light brininess, clean ocean finish",
        use: "Sashimi, fine dining preparations",
      },
      {
        name: "Canadian Red Sea Urchin",
        origin: "British Columbia, Canada",
        season: "Peak: October–May",
        flavor: "Large lobes, bold flavor, buttery texture",
        use: "Sashimi, fusion cuisine, Western fine dining",
      },
    ],
    gradingTitle: "Quality Grading",
    grades: [
      { grade: "AA Grade", desc: "Perfect golden color, firm texture, no blemishes. The finest available — reserved for top omakase." },
      { grade: "A Grade", desc: "Excellent quality with minor variations. Ideal for high-end sushi restaurants and premium dining." },
      { grade: "B Grade", desc: "Good quality, suitable for cooking, pasta, and processed uni products." },
    ],
    storageTitle: "Storage & Handling",
    storageTips: [
      "Keep at 0–2°C at all times",
      "Consume within 2–3 days of delivery",
      "Never freeze fresh uni — texture degrades significantly",
      "Store in original wooden tray, covered",
      "Avoid direct contact with ice or water",
    ],
    marketTitle: "Sea Urchin in Hong Kong & Macau",
    marketText: "The Hong Kong and Macau market is one of Asia's most important for premium uni. With a thriving Japanese restaurant scene, high-end hotel dining, and growing consumer interest in premium seafood, demand for quality sea urchin continues to rise. We supply the full spectrum — from premium Japanese Bafun for top omakase to accessible varieties for retail.",
  },
  "zh-HK": {
    title: "海膽（Uni）指南",
    metaDesc: "香港及澳門海膽（uni / 海膽）完全指南。品種、分級、採購及品質標準，來自行業專家。",
    intro: "海膽，又稱雲丹（uni），是東亞料理中最珍貴的美食之一。作為香港及澳門領先的海膽供應商，我們提供全面的知識及優質產品。",
    varietiesTitle: "海膽品種",
    varieties: [
      {
        name: "馬糞海膽（Bafun Uni）",
        origin: "日本北海道",
        season: "旺季：6月至8月",
        flavor: "濃郁、細滑、極度甘甜，帶深層鮮味",
        use: "頂級刺身、壽司、海膽丼",
      },
      {
        name: "紫海膽（Murasaki Uni）",
        origin: "日本各地",
        season: "全年供應，有季節性高峰",
        flavor: "清雅、微鹹、乾淨的海洋風味",
        use: "刺身、高級料理",
      },
      {
        name: "加拿大紅海膽",
        origin: "加拿大卑詩省",
        season: "旺季：10月至5月",
        flavor: "大瓣、風味濃郁、奶油質感",
        use: "刺身、創意料理、西式高級餐廳",
      },
    ],
    gradingTitle: "品質分級",
    grades: [
      { grade: "AA級", desc: "完美金黃色澤、質地緊實、無瑕疵。最頂級品質——專供頂級Omakase。" },
      { grade: "A級", desc: "優秀品質，輕微差異。適合高級壽司店及頂級餐飲。" },
      { grade: "B級", desc: "良好品質，適合烹調、意粉及加工海膽產品。" },
    ],
    storageTitle: "保存及處理",
    storageTips: [
      "全程保持0–2°C",
      "送達後2–3日內食用",
      "切勿冷凍新鮮海膽——口感會大幅下降",
      "存放在原裝木盒中，加蓋保存",
      "避免直接接觸冰塊或水",
    ],
    marketTitle: "香港及澳門海膽市場",
    marketText: "香港及澳門是亞洲最重要的優質海膽市場之一。隨著日本料理餐廳蓬勃發展、高級酒店餐飲以及消費者對優質海鮮的興趣日增，優質海膽的需求持續上升。我們供應全系列產品——從頂級日本馬糞海膽到適合零售的各類品種。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale];
  return { title: c.title, description: c.metaDesc };
}

export default async function SeaUrchinPage({ params }: Props) {
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
      { "@type": "Thing", name: "Sea urchin", alternateName: ["海膽", "uni", "雲丹"] },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
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
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "季節" : "Season"}</dt><dd className="text-gray-700">{v.season}</dd></div>
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "風味" : "Flavor"}</dt><dd className="text-gray-700">{v.flavor}</dd></div>
                    <div><dt className="font-medium text-gray-500">{locale === "zh-HK" ? "用途" : "Best for"}</dt><dd className="text-gray-700">{v.use}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{c.gradingTitle}</h2>
            <div className="space-y-4">
              {c.grades.map((g) => (
                <div key={g.grade} className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-1">{g.grade}</h3>
                  <p className="text-gray-600">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.storageTitle}</h2>
            <ul className="space-y-3">
              {c.storageTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-amber-50 py-16 px-4">
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
