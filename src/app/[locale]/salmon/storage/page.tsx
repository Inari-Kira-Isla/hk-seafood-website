import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Salmon Storage & Handling Guide",
    metaDesc:
      "Professional salmon storage and handling for Hong Kong and Macau restaurants. Sashimi-grade salmon temperature requirements, shelf life, portioning and service best practices.",
    intro:
      "Sashimi-grade salmon demands rigorous cold chain management from delivery to plate. These are the professional standards Inari Global Food uses — and recommends to all restaurant and hotel clients.",
    rules: [
      {
        icon: "🌡️",
        title: "Temperature: Below 4°C at All Times",
        detail:
          "Fresh sashimi-grade salmon must be kept below 4°C from delivery to service. Ideally 0–2°C. Every degree above 4°C accelerates bacterial growth and reduces safe service life. Use a dedicated fish refrigerator section if available.",
      },
      {
        icon: "⏱️",
        title: "Sashimi Use: Within 2 Days of Delivery",
        detail:
          "For raw sashimi service, use salmon within 2 days of delivery. Day 1 is optimal for nigiri and sashimi. Day 2 is acceptable for sashimi and marinated preparations. Day 3 and beyond: cooked applications only.",
      },
      {
        icon: "🧊",
        title: "Freezing: Permitted for Some Applications",
        detail:
          "Unlike uni, salmon can be frozen. For sashimi use after freezing, follow FDA -20°C for 7 days or -35°C for 15 hours protocols to eliminate parasites. Always thaw in refrigerator (24 hours, never at room temperature). Frozen-thawed salmon should not be re-frozen.",
      },
      {
        icon: "💨",
        title: "Vacuum Seal or Tight Wrap",
        detail:
          "Expose salmon to as little air as possible. Vacuum-sealed fish lasts longer and maintains color better. If vacuum sealing is not available, wrap tightly in film and store in an airtight container. Change wrapping daily.",
      },
      {
        icon: "🔪",
        title: "Cut to Order — Never Pre-Slice Too Far Ahead",
        detail:
          "Pre-sliced sashimi has much shorter shelf life than whole fillets. Cut portions only during service preparation — maximum 30 minutes before service. Pre-cut portions should be served immediately or stored covered in the refrigerator for no more than 2 hours.",
      },
      {
        icon: "🐟",
        title: "Whole Fish and Fillet Handling",
        detail:
          "If receiving whole fish: gut and scale immediately upon delivery if not already done. Rinse with cold water, dry thoroughly, and store packed with ice in a dedicated container. Fillet portions should be portioned the morning of service when possible.",
      },
    ],
    shelfLife: {
      title: "Shelf Life by Application",
      rows: [
        { type: "Whole fish (ungutted)", life: "Same day — process immediately" },
        { type: "Whole fillet, vacuum-sealed", life: "3–5 days at 0–2°C" },
        { type: "Whole fillet, wrapped", life: "2–3 days at 0–2°C" },
        { type: "Portioned sashimi blocks", life: "1–2 days at 0–2°C" },
        { type: "Pre-sliced sashimi", life: "Same service period (max 2 hours)" },
        { type: "Frozen fillet (0°C or below)", life: "Up to 3 months" },
        { type: "Frozen-thawed, for cooking", life: "1–2 days — do not re-freeze" },
      ],
    },
    qualityCheck: {
      title: "Quality Check on Delivery",
      checks: [
        "Color: Bright orange-pink with clean white fat marbling. No brown or grey patches.",
        "Smell: Fresh ocean scent, no ammonia, sour, or off-odor.",
        "Texture: Firm flesh that springs back when pressed. Soft or mushy texture indicates age.",
        "Eyes (whole fish): Clear and bright, not sunken or cloudy.",
        "Temperature: Verify delivery temperature — ideally below 4°C. Reject if above 8°C.",
        "Packaging: Check for intact vacuum seal or no excessive liquid in packaging.",
      ],
    },
  },
  "zh-HK": {
    title: "三文魚保存與處理指南",
    metaDesc:
      "香港及澳門餐廳的專業三文魚保存及處理規範。刺身級三文魚溫度要求、保質期、切件及服務最佳操作。",
    intro:
      "刺身級三文魚要求從送達到上菜的全程嚴格冷鏈管理。以下是稻荷環球食品使用並建議所有餐廳及酒店客戶採用的專業標準。",
    rules: [
      {
        icon: "🌡️",
        title: "溫度：全程保持4°C以下",
        detail:
          "新鮮刺身級三文魚從送達到服務須全程保持在4°C以下，理想為0–2°C。超過4°C每升高一度都會加速細菌繁殖，縮短安全服務時限。如有條件，請使用專用魚類冷藏區。",
      },
      {
        icon: "⏱️",
        title: "刺身用途：送達後2天內使用",
        detail:
          "生食刺身用途，三文魚應在送達後2天內使用。第1天最適合用於手握壽司及刺身。第2天可用於刺身及醃製料理。第3天及以後：只適合熟食用途。",
      },
      {
        icon: "🧊",
        title: "冷凍：部分用途可接受",
        detail:
          "與海膽不同，三文魚可以冷凍。若需冷凍後用於刺身，須按照FDA標準在-20°C冷凍7天或-35°C冷凍15小時以消滅寄生蟲。解凍時須在冰箱中進行（24小時），切勿在室溫解凍。已解凍的三文魚不可再次冷凍。",
      },
      {
        icon: "💨",
        title: "真空密封或緊密包裝",
        detail:
          "盡量減少三文魚接觸空氣的時間。真空密封的魚保質期更長，色澤保持更佳。如無真空密封設備，請用保鮮膜緊密包裹並存放於密封容器中，每天更換包裝。",
      },
      {
        icon: "🔪",
        title: "即切即用——切勿過早預切",
        detail:
          "預先切好的刺身保質期遠短於整條魚柳。只在服務備餐時才切件，最多提前30分鐘。已切好的魚片應立即上桌，或蓋好冷藏不超過2小時。",
      },
      {
        icon: "🐟",
        title: "整條魚及魚柳的處理",
        detail:
          "收到整條魚時：如未處理，應在送達後立即去內臟及去鱗。用冷水沖洗，徹底擦乾，加冰存放於專用容器中。魚柳建議在服務當天早上才分切。",
      },
    ],
    shelfLife: {
      title: "不同用途的保質期",
      rows: [
        { type: "整條魚（未去內臟）", life: "當天 — 立即處理" },
        { type: "整條魚柳，真空密封", life: "0–2°C下3–5天" },
        { type: "整條魚柳，保鮮膜包裝", life: "0–2°C下2–3天" },
        { type: "分切刺身塊", life: "0–2°C下1–2天" },
        { type: "預切刺身片", life: "當次服務期間（最多2小時）" },
        { type: "冷凍魚柳（0°C以下）", life: "最多3個月" },
        { type: "已解凍，用於熟食", life: "1–2天 — 不可再次冷凍" },
      ],
    },
    qualityCheck: {
      title: "收貨品質檢查",
      checks: [
        "顏色：亮橙粉色配清晰白色脂肪紋理。無褐色或灰色區域。",
        "氣味：清新海洋氣息，無氨氣、酸味或異味。",
        "質感：魚肉緊實，按壓後彈回。柔軟或軟爛的質感表示不新鮮。",
        "眼睛（整條魚）：清澈明亮，無下陷或混濁。",
        "溫度：確認送達溫度，理想為4°C以下。超過8°C應拒收。",
        "包裝：檢查真空密封是否完整，或包裝中有無過多積液。",
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
    alternates: { canonical: `/${locale}/salmon/storage` },
  };
}

export default async function SalmonStoragePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const isZh = locale === "zh-HK";
  const d = isZh ? content["zh-HK"] : content["en"];

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-slate-400 mb-4">
              <a href={`/${locale}/salmon`} className="hover:text-white">
                {isZh ? "三文魚" : "Salmon"}
              </a>
              {" / "}
              <span className="text-white">{isZh ? "保存指南" : "Storage Guide"}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{d.title}</h1>
            <p className="text-lg text-slate-300 max-w-3xl">{d.intro}</p>
          </div>
        </section>

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

        <section className="bg-slate-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{d.shelfLife.title}</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-5 py-3 font-semibold">
                      {isZh ? "用途/形式" : "Type / Application"}
                    </th>
                    <th className="text-left px-5 py-3 font-semibold">
                      {isZh ? "保質期" : "Shelf Life"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d.shelfLife.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 text-slate-700">{row.type}</td>
                      <td className="px-5 py-3 font-semibold text-red-700">{row.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{d.qualityCheck.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {d.qualityCheck.checks.map((c, i) => (
                <div key={i} className="flex items-start gap-3 bg-green-50 rounded-lg p-4 border border-green-100">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <p className="text-slate-700 text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isZh ? "安排定期三文魚供應" : "Set Up Regular Salmon Supply"}
            </h2>
            <a href={`/${locale}/contact`} className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              {isZh ? "聯絡我們" : "Contact Us"}
            </a>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
