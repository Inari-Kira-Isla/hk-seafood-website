import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const months = {
  en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  "zh-HK": ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
};

const content = {
  en: {
    title: "Sea Urchin Season Calendar — When to Buy Uni in Hong Kong & Macau",
    metaDesc: "Complete seasonal guide for sea urchin in Hong Kong and Macau. When is Hokkaido uni at peak? When is Canadian uni best? Monthly availability calendar for restaurants and buyers.",
    intro: "Sea urchin availability and quality vary significantly by species and season. Understanding the seasonal calendar helps restaurants plan menus, secure allocations during peak periods, and maintain quality year-round.",
    calendarTitle: "Monthly Availability Calendar",
    calendar: [
      {
        species: "Hokkaido Bafun Uni (北海道馬糞海膽)",
        origin: "Japan",
        months: [false, false, false, false, false, true, true, true, false, false, false, false],
        peak: "June – August",
        note: "The most prized uni season. Limited supply, high demand. Reserve early.",
        quality: "AA/A Grade available",
      },
      {
        species: "Murasaki Uni (紫海膽)",
        origin: "Japan",
        months: [true, true, true, true, true, true, true, true, true, true, true, true],
        peak: "Year-round",
        note: "Consistent quality throughout the year. The reliable choice for daily service.",
        quality: "A/B Grade",
      },
      {
        species: "Canadian Red Sea Urchin (加拿大紅海膽)",
        origin: "British Columbia, Canada",
        months: [true, true, true, true, true, false, false, false, false, true, true, true],
        peak: "October – May",
        note: "Aligns with Hokkaido off-season. Large lobes, bold buttery flavor.",
        quality: "A Grade",
      },
      {
        species: "Maine Atlantic Uni",
        origin: "Maine, USA",
        months: [true, true, true, false, false, false, false, false, false, true, true, true],
        peak: "October – March",
        note: "Seasonal Atlantic alternative. Light flavor, suitable for creative menu applications.",
        quality: "A/B Grade",
      },
    ],
    strategyTitle: "Year-Round Menu Planning Strategy",
    strategy: [
      {
        period: "June – August",
        label: "Hokkaido Bafun Peak Season",
        recommendation: "Feature Hokkaido AA Bafun on omakase and seasonal menus. Accept premium pricing — guests pay for this. Pre-order allocations by April/May.",
        color: "amber",
      },
      {
        period: "September – November",
        label: "Transition Period",
        recommendation: "Shift from Hokkaido Bafun to Canadian Red (arriving October). Murasaki provides continuity. A good time to feature creative uni preparations.",
        color: "green",
      },
      {
        period: "December – February",
        label: "Canadian Red + Murasaki Season",
        recommendation: "Canadian Red is at excellent quality. Murasaki for value-tier offerings. Festive season demand is high — increase standing orders.",
        color: "blue",
      },
      {
        period: "March – May",
        label: "Spring Build-Up",
        recommendation: "Murasaki as primary source. Canadian Red winding down. Begin securing Hokkaido summer allocation commitments with your supplier.",
        color: "purple",
      },
    ],
    orderingTitle: "Seasonal Ordering Guidelines",
    orderingTips: [
      "For Hokkaido Bafun (Jun–Aug): contact your supplier in April to reserve allocation — supply is limited and allocated to committed buyers first.",
      "For year-round operations: maintain a standing Murasaki order to ensure baseline supply is never disrupted.",
      "For Macau casino resorts: the high volume and F&B calendar requirements mean 2–4 week advance planning is strongly recommended.",
      "Canadian Red (Oct–May) is ideal for hotel banquet and large-volume applications where cost management matters.",
    ],
    faqTitle: "Seasonal FAQs",
    faqs: [
      {
        q: "When is the best time to buy sea urchin in Hong Kong?",
        a: "The highest quality sea urchin in Hong Kong is available June–August, when Hokkaido Bafun Uni (馬糞海膽) is at peak season. For year-round availability, Murasaki Uni from Japan and Canadian Red Sea Urchin (October–May) maintain consistent supply.",
      },
      {
        q: "When is Hokkaido uni available in Hong Kong?",
        a: "Hokkaido Bafun Uni peaks from June to August. Limited quantities of A-grade Hokkaido uni may be available from May and September, but the premium AA-grade product is concentrated in the June–August window.",
      },
      {
        q: "What sea urchin is available in Hong Kong in winter?",
        a: "During winter (November–March), Canadian Red Sea Urchin from British Columbia is at peak quality and availability. Murasaki Uni from Japan is available year-round. Both are suitable for restaurant and hotel service.",
      },
      {
        q: "Can I get sashimi-grade uni in Hong Kong year-round?",
        a: "Yes. Inari Global Food maintains year-round supply through a combination of Murasaki Uni (year-round), Canadian Red Sea Urchin (October–May), and Hokkaido Bafun (June–August). There is no gap in sashimi-grade availability.",
      },
    ],
  },
  "zh-HK": {
    title: "海膽季節日曆 — 香港及澳門最佳購買時機",
    metaDesc: "香港及澳門海膽完整季節指南。北海道海膽何時最好？加拿大海膽最佳時機？適合餐廳及買家的月度供應日曆。",
    intro: "海膽的供應和品質因品種和季節而有顯著差異。了解季節日曆有助於餐廳規劃菜單、在旺季前確保配額，並全年維持品質。",
    calendarTitle: "月度供應日曆",
    calendar: [
      {
        species: "北海道馬糞海膽（Bafun Uni）",
        origin: "日本",
        months: [false, false, false, false, false, true, true, true, false, false, false, false],
        peak: "六月至八月",
        note: "最珍貴的海膽季節。供應有限，需求旺盛。請提早預訂。",
        quality: "提供 AA/A 等級",
      },
      {
        species: "紫海膽（Murasaki Uni）",
        origin: "日本",
        months: [true, true, true, true, true, true, true, true, true, true, true, true],
        peak: "全年供應",
        note: "全年品質穩定。是日常服務的可靠選擇。",
        quality: "A/B 等級",
      },
      {
        species: "加拿大紅海膽",
        origin: "加拿大不列顛哥倫比亞省",
        months: [true, true, true, true, true, false, false, false, false, true, true, true],
        peak: "十月至五月",
        note: "與北海道淡季完美銜接。膽黃大而飽滿，奶油風味濃郁。",
        quality: "A 等級",
      },
      {
        species: "緬因大西洋海膽",
        origin: "美國緬因州",
        months: [true, true, true, false, false, false, false, false, false, true, true, true],
        peak: "十月至三月",
        note: "季節性大西洋替代選擇。口味清淡，適合創意菜單應用。",
        quality: "A/B 等級",
      },
    ],
    strategyTitle: "全年菜單規劃策略",
    strategy: [
      {
        period: "六月至八月",
        label: "北海道馬糞海膽旺季",
        recommendation: "在 Omakase 和季節性菜單上推薦北海道 AA 級馬糞海膽。接受溢價定價——賓客為此買單。請於四月/五月前預訂配額。",
        color: "amber",
      },
      {
        period: "九月至十一月",
        label: "過渡期",
        recommendation: "從北海道馬糞轉向加拿大紅海膽（十月到貨）。紫海膽提供持續供應。適合推出創意海膽料理。",
        color: "green",
      },
      {
        period: "十二月至二月",
        label: "加拿大紅海膽 + 紫海膽季節",
        recommendation: "加拿大紅海膽品質上乘。紫海膽提供經濟型選擇。節慶季節需求旺盛——增加長期訂購量。",
        color: "blue",
      },
      {
        period: "三月至五月",
        label: "春季備貨期",
        recommendation: "以紫海膽為主要來源。加拿大紅海膽供應漸少。開始向供應商確認北海道夏季配額承諾。",
        color: "purple",
      },
    ],
    orderingTitle: "季節性訂購指南",
    orderingTips: [
      "北海道馬糞海膽（六月至八月）：請於四月聯繫供應商預留配額——供應有限，優先分配給承諾買家。",
      "全年營業：維持固定的紫海膽訂單，確保基本供應不中斷。",
      "澳門賭場度假村：鑒於用量大及餐飲日程要求，強烈建議提前2至4週規劃。",
      "加拿大紅海膽（十月至五月）非常適合酒店宴會及大批量用途，在成本管理方面具優勢。",
    ],
    faqTitle: "季節性常見問題",
    faqs: [
      {
        q: "香港何時是購買海膽的最佳時機？",
        a: "香港品質最高的海膽在六月至八月供應，即北海道馬糞海膽（馬糞海膽）的旺季。全年供應方面，日本紫海膽及加拿大紅海膽（十月至五月）維持穩定供應。",
      },
      {
        q: "北海道海膽何時在香港供應？",
        a: "北海道馬糞海膽的旺季為六月至八月。五月和九月可能有少量A級北海道海膽，但頂級AA級產品集中在六月至八月期間。",
      },
      {
        q: "香港冬季有什麼海膽供應？",
        a: "冬季（十一月至三月），來自不列顛哥倫比亞省的加拿大紅海膽品質及供應量達到高峰。日本紫海膽全年供應。兩者均適合餐廳及酒店使用。",
      },
      {
        q: "香港是否全年都能買到刺身級海膽？",
        a: "是的。稻荷環球食品通過組合供應——紫海膽（全年）、加拿大紅海膽（十月至五月）及北海道馬糞（六月至八月）——全年維持刺身級供應，中間無供應缺口。",
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

const colorMap: Record<string, string> = {
  amber: "bg-amber-50 border-amber-200 text-amber-800",
  green: "bg-green-50 border-green-200 text-green-800",
  blue: "bg-blue-50 border-blue-200 text-blue-800",
  purple: "bg-purple-50 border-purple-200 text-purple-800",
};

export default async function SeaUrchinSeasonPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];
  const monthLabels = months[locale as keyof typeof months];

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
        <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{c.intro}</p>
          </div>
        </section>

        {/* Monthly Calendar */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.calendarTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 bg-gray-50 text-sm font-semibold text-gray-600 min-w-[200px]">
                      {locale === "en" ? "Species / Origin" : "品種 / 產地"}
                    </th>
                    {monthLabels.map((m) => (
                      <th key={m} className="py-3 px-2 bg-gray-50 text-xs font-semibold text-gray-500 text-center w-12">
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.calendar.map((row) => (
                    <tr key={row.species} className="border-b border-gray-100">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900 text-sm">{row.species}</div>
                        <div className="text-gray-500 text-xs">{row.origin}</div>
                        <div className="text-gray-400 text-xs mt-1">{row.quality}</div>
                      </td>
                      {row.months.map((available, i) => (
                        <td key={i} className="py-4 px-2 text-center">
                          <div
                            className={`w-7 h-7 rounded-full mx-auto ${
                              available
                                ? "bg-amber-400"
                                : "bg-gray-100"
                            }`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-400" />
                  <span>{locale === "en" ? "Available" : "供應中"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-100 border border-gray-200" />
                  <span>{locale === "en" ? "Off season" : "淡季"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Year-round Strategy */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.strategyTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.strategy.map((s) => (
                <div
                  key={s.period}
                  className={`border rounded-xl p-6 ${colorMap[s.color] || "bg-gray-50 border-gray-200"}`}
                >
                  <div className="text-xs font-bold uppercase tracking-wide mb-1 opacity-70">
                    {s.period}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{s.label}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{s.recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Tips */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.orderingTitle}</h2>
            <ul className="space-y-3">
              {c.orderingTips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-amber-500 font-bold flex-shrink-0">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.faqTitle}</h2>
            <div className="space-y-6">
              {c.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
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
