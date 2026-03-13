import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin Storage & Handling Guide",
    metaDesc:
      "Professional sea urchin (uni) storage and handling guide for restaurants and hotels in Hong Kong and Macau. Temperature, shelf life, and best practices.",
    intro:
      "Proper storage and handling is the difference between serving exceptional uni and wasting a premium product. Follow these professional guidelines used by Hong Kong and Macau's top restaurants.",
    rules: [
      {
        icon: "🌡️",
        title: "Temperature: 0–2°C Always",
        detail:
          "Fresh uni must be maintained at 0–2°C from delivery to service. Any temperature fluctuation above 4°C accelerates cellular breakdown and causes rapid quality loss. Use a dedicated refrigerator section — never store near frequently opened areas.",
      },
      {
        icon: "⏱️",
        title: "Consume Within 2–3 Days of Delivery",
        detail:
          "Even under ideal refrigeration, fresh uni has a maximum shelf life of 2–3 days post-delivery. Plan your orders to align with service schedules. For Omakase and à la carte menus, plan for daily or every-other-day delivery from Inari Global Food.",
      },
      {
        icon: "❄️",
        title: "Never Freeze Fresh Uni",
        detail:
          "Freezing destroys the delicate cell structure of uni lobes, resulting in a mushy, watery texture upon thawing that is unsuitable for sashimi or nigiri service. Only purpose-processed frozen uni (pasteurized) should be frozen — and only if explicitly designated as such.",
      },
      {
        icon: "📦",
        title: "Keep in Original Wooden Tray",
        detail:
          "Wooden trays (kijidai) absorb slight moisture and allow minimal airflow that helps maintain uni quality. Do not transfer to plastic containers — the tray is part of the preservation system. Cover lightly with film or the original lid.",
      },
      {
        icon: "💧",
        title: "No Direct Ice or Water Contact",
        detail:
          "Direct ice contact causes water absorption, diluting flavor and causing lobes to break down. If you need to cool quickly, place the tray above ice in a perforated container — never directly on ice or submerged.",
      },
      {
        icon: "🔒",
        title: "Seal and Minimize Air Exposure",
        detail:
          "Oxidation begins immediately upon exposure to air. Keep the tray covered at all times when not in service. Remove only what is needed for each service period.",
      },
    ],
    shelfLife: {
      title: "Shelf Life by Condition",
      rows: [
        { condition: "Ideal: 0–2°C, sealed tray, no disturbance", life: "2–3 days" },
        { condition: "Acceptable: 2–4°C, minimal opening", life: "1–2 days" },
        { condition: "Suboptimal: >4°C or frequent opening", life: "Same day only" },
        { condition: "Frozen (not recommended for fresh)", life: "Quality severely degraded" },
      ],
    },
    serviceNotes: {
      title: "Service Best Practices",
      tips: [
        "Remove uni from refrigerator maximum 5 minutes before plating",
        "Use non-metallic utensils (plastic or wooden spatulas) — metal can react with and off-flavor delicate uni",
        "Plate onto chilled dishes when possible to extend quality during service",
        "Taste a small piece from each new tray before service to confirm quality",
        "If any ammonia smell or excessive bitterness is detected, do not serve — contact your supplier",
        "For uni sauces and cooked applications: B-grade uni can be stored up to 3 days in airtight containers",
      ],
    },
    ordering: {
      title: "Ordering Tips for Hong Kong & Macau Restaurants",
      tips: [
        "Order 2–3 times weekly rather than one large weekly order to ensure freshness",
        "Coordinate delivery timing with your prep schedule — morning delivery aligns with lunch prep",
        "Inari Global Food offers flexible delivery slots to match your kitchen schedule",
        "For weekend omakase, order Thursday or Friday for Saturday service",
        "Keep a minimum buffer: never hold less than 1 day of stock going into a service period",
      ],
    },
  },
  "zh-HK": {
    title: "海膽保存與處理指南",
    metaDesc:
      "專業海膽保存及處理指南，適用於香港及澳門餐廳及酒店。溫度要求、保質期及最佳操作規範。",
    intro:
      "正確的保存和處理方式，是呈現頂級海膽與浪費優質食材之間的關鍵分別。以下是香港及澳門頂級餐廳所採用的專業指引。",
    rules: [
      {
        icon: "🌡️",
        title: "溫度：全程保持0–2°C",
        detail:
          "新鮮海膽由送達至上菜前須全程保持0–2°C。任何超過4°C的溫度波動都會加速細胞分解，導致品質迅速下降。請使用專用冰箱區域，避免存放在頻繁開關的位置附近。",
      },
      {
        icon: "⏱️",
        title: "送達後2–3天內食用",
        detail:
          "即使在理想冷藏條件下，新鮮海膽在送達後的保質期最多只有2–3天。請根據營業計劃調整訂購量。Omakase及單點菜單建議每天或隔天向稻荷環球食品訂貨。",
      },
      {
        icon: "❄️",
        title: "切勿冷凍新鮮海膽",
        detail:
          "冷凍會破壞海膽膽黃的精細細胞結構，解凍後質感變得軟爛、多水，不適合用於刺身或壽司服務。只有專門加工的冷凍海膽（巴氏殺菌處理）才應冷凍存放，且必須明確標示為冷凍產品。",
      },
      {
        icon: "📦",
        title: "保留於原裝木盒中存放",
        detail:
          "木製托盤（木地台）可吸收輕微水分，並允許適量通風，有助維持海膽品質。請勿移至塑料容器，木盒本身是保存系統的一部分。用保鮮膜或原裝蓋輕輕覆蓋即可。",
      },
      {
        icon: "💧",
        title: "避免直接接觸冰或水",
        detail:
          "直接接觸冰塊會導致海膽吸水，稀釋風味並使膽黃分解。如需快速冷卻，可將木盒放置在帶孔容器中的冰塊上方，切勿直接放在冰上或浸入水中。",
      },
      {
        icon: "🔒",
        title: "密封保存，減少接觸空氣",
        detail:
          "海膽一旦暴露在空氣中便立即開始氧化。非服務期間木盒應全程蓋好。每次只取出當次服務所需的份量。",
      },
    ],
    shelfLife: {
      title: "不同條件下的保質期",
      rows: [
        { condition: "理想：0–2°C，密封木盒，盡量不搬動", life: "2–3天" },
        { condition: "尚可：2–4°C，少量開箱次數", life: "1–2天" },
        { condition: "欠佳：超過4°C或頻繁開箱", life: "當天食用" },
        { condition: "冷凍（新鮮海膽不建議）", life: "品質嚴重下降" },
      ],
    },
    serviceNotes: {
      title: "服務最佳操作建議",
      tips: [
        "上菜前最多5分鐘從冰箱取出海膽",
        "使用非金屬工具（塑料或木製刮刀）——金屬可能與海膽發生反應影響味道",
        "盡可能使用冷卻過的餐具擺盤，延長服務期間的品質",
        "每批新木盒服務前，先品嘗一小片確認品質",
        "如發現任何氨氣味或過度苦澀，請勿上菜，並立即聯絡供應商",
        "用於醬汁及熟食的B級海膽：可在密封容器中存放最多3天",
      ],
    },
    ordering: {
      title: "香港及澳門餐廳訂購建議",
      tips: [
        "建議每週訂貨2–3次，而非一次大量訂購，以確保新鮮度",
        "配合廚房備餐時間安排送貨——早上送達配合午市備餐",
        "稻荷環球食品提供彈性送貨時段，配合您的廚房時間表",
        "週末Omakase建議週四或週五訂貨，以供週六服務",
        "保持最低庫存：每次服務前庫存不少於1天份量",
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
    alternates: { canonical: `/${locale}/sea-urchin/storage` },
  };
}

export default async function SeaUrchinStoragePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const isZh = locale === "zh-HK";
  const d = isZh ? content["zh-HK"] : content["en"];

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-slate-400 mb-4">
              <a href={`/${locale}/sea-urchin`} className="hover:text-white">
                {isZh ? "海膽" : "Sea Urchin"}
              </a>
              {" / "}
              <span className="text-white">{isZh ? "保存指南" : "Storage Guide"}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{d.title}</h1>
            <p className="text-lg text-slate-300 max-w-3xl">{d.intro}</p>
          </div>
        </section>

        {/* Core Rules */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {d.rules.map((r, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shelf Life Table */}
        <section className="bg-slate-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{d.shelfLife.title}</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-5 py-3 font-semibold">
                      {isZh ? "保存條件" : "Storage Condition"}
                    </th>
                    <th className="text-left px-5 py-3 font-semibold">
                      {isZh ? "保質期" : "Shelf Life"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d.shelfLife.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 text-slate-700">{row.condition}</td>
                      <td className="px-5 py-3 font-semibold text-amber-700">{row.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Tips */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-5">{d.serviceNotes.title}</h2>
              <ul className="space-y-3">
                {d.serviceNotes.tips.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="text-amber-500 font-bold mt-0.5">{i + 1}.</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-5">{d.ordering.title}</h2>
              <ul className="space-y-3">
                {d.ordering.tips.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="text-blue-500 font-bold mt-0.5">{i + 1}.</span>
                    <span>{t}</span>
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
              {isZh ? "安排定期送貨到您的餐廳" : "Set Up Regular Delivery to Your Restaurant"}
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
