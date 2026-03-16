import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Salmon Varieties — Atlantic, King, Sockeye for Hong Kong & Macau",
    metaDesc: "Complete guide to salmon varieties available in Hong Kong and Macau. Atlantic Salmon, King Salmon (Chinook), and Sockeye Salmon — flavor profiles, origins, quality, and when to buy.",
    intro: "Choosing the right salmon variety depends on your menu concept, price point, and service style. Here is everything you need to know about the three premium salmon varieties Inari Global Food supplies to Hong Kong and Macau's restaurants and hotels.",
    varieties: [
      {
        name: "Atlantic Salmon",
        nameCn: "大西洋三文魚",
        origin: "Norway, Scotland, Faroe Islands",
        originCn: "挪威、蘇格蘭、法羅群島",
        color: "Bright orange-pink with consistent fat marbling",
        colorCn: "亮橙粉色，脂肪紋路均勻",
        flavor: "Mild, buttery, consistently rich. Approachable flavor that works universally — raw, grilled, or smoked.",
        flavorCn: "清淡、奶油般、持續豐富。口味溫和，適合各種料理方式——生食、燒烤或煙熏。",
        texture: "Medium-firm, moist. Holds well for sashimi and easily portions for nigiri.",
        textureCn: "中等緊實，多汁。適合刺身，易於分切握壽司。",
        season: "Year-round. Air-freighted 2–3 times per week.",
        seasonCn: "全年供應。每週空運2至3次。",
        use: ["Sashimi", "Nigiri", "Tataki", "Grilling", "Hotel buffets", "All-purpose"],
        useCn: ["刺身", "握壽司", "Tataki", "燒烤", "酒店自助餐", "全用途"],
        ideal: "The default premium salmon for any restaurant serving sashimi. Consistent quality, year-round availability, competitive pricing.",
        idealCn: "任何供應刺身的餐廳的默認頂級三文魚。品質穩定，全年供應，價格具競爭力。",
        badge: "Most Popular",
        badgeCn: "最受歡迎",
        badgeColor: "blue",
      },
      {
        name: "King Salmon / Chinook",
        nameCn: "帝王三文魚 / 奇努克三文魚",
        origin: "New Zealand, Alaska, British Columbia",
        originCn: "新西蘭、阿拉斯加、不列顛哥倫比亞省",
        color: "Deep orange-red, intensely marbled with white fat lines",
        colorCn: "深橙紅色，白色脂肪紋路密集",
        flavor: "Richest flavor of all salmon species. Deeply buttery, complex, intensely satisfying. The 'wagyu of salmon.'",
        flavorCn: "所有三文魚品種中風味最濃郁。深度奶油感，層次複雜，令人滿足。「三文魚中的和牛」。",
        texture: "Softer than Atlantic, extremely high fat content. Melts on the palate.",
        textureCn: "比大西洋三文魚更柔軟，脂肪含量極高。入口即化。",
        season: "Seasonal — inquire for current availability.",
        seasonCn: "季節性供應——請查詢當前庫存。",
        use: ["Premium omakase", "High-end nigiri", "Chef's tasting menus", "Seasonal specials"],
        useCn: ["高端 Omakase", "頂級握壽司", "主廚品嚐菜單", "季節性特色菜"],
        ideal: "For omakase programs and fine dining menus that command premium pricing. Guests familiar with uni and premium seafood will recognize and appreciate the difference.",
        idealCn: "適用於收取溢價的 Omakase 及精緻餐飲菜單。熟悉海膽及高端海鮮的食客將能認識並欣賞其差異。",
        badge: "Premium",
        badgeCn: "頂級",
        badgeColor: "amber",
      },
      {
        name: "Sockeye Salmon",
        nameCn: "紅三文魚 / 紅眼三文魚",
        origin: "Alaska, British Columbia",
        originCn: "阿拉斯加、不列顛哥倫比亞省",
        color: "Deep red flesh — the most visually striking salmon",
        colorCn: "深紅色肉質——視覺效果最突出的三文魚",
        flavor: "Stronger, more assertive flavor than Atlantic. Clean ocean character with firm, robust taste.",
        flavorCn: "比大西洋三文魚風味更濃郁強烈。清爽的海洋特色，口感扎實。",
        texture: "Firm, lean. Lower fat than Atlantic or King. Holds well when cooked.",
        textureCn: "緊實、精瘦。脂肪含量低於大西洋或帝王三文魚。烹熟後形狀保持良好。",
        season: "Peak May–September. Alaska wild-caught.",
        seasonCn: "旺季五月至九月。阿拉斯加野生捕撈。",
        use: ["Visual presentations", "Sashimi platters", "Grilling", "Smoking", "Tataki"],
        useCn: ["視覺呈現", "刺身拼盤", "燒烤", "煙熏", "Tataki"],
        ideal: "Where bold color and presentation impact matter. Excellent for sashimi platters where the deep red creates visual contrast alongside lighter-colored fish.",
        idealCn: "適合重視鮮艷色彩和視覺衝擊的場合。非常適合刺身拼盤，深紅色與較淺色魚類形成視覺對比。",
        badge: "Seasonal",
        badgeCn: "季節性",
        badgeColor: "red",
      },
    ],
    comparisonTitle: "Quick Comparison",
    compHeaders: ["", "Atlantic", "King (Chinook)", "Sockeye"],
    compHeaders_zh: ["", "大西洋三文魚", "帝王三文魚", "紅三文魚"],
    compRows: [
      ["Flavor", "Mild, buttery", "Rich, complex", "Bold, robust"],
      ["Fat content", "High", "Highest", "Moderate"],
      ["Availability", "Year-round", "Seasonal", "May–Sep"],
      ["Price point", "$$", "$$$$", "$$$"],
      ["Best use", "All-purpose sashimi", "Premium omakase", "Visual presentations"],
    ],
    compRows_zh: [
      ["風味", "清淡，奶油感", "濃郁，層次複雜", "強烈，扎實"],
      ["脂肪含量", "高", "最高", "中等"],
      ["供應", "全年", "季節性", "五月至九月"],
      ["價格", "$$", "$$$$", "$$$"],
      ["最佳用途", "全用途刺身", "頂級 Omakase", "視覺呈現"],
    ],
    faqTitle: "Salmon Variety FAQs",
    faqs: [
      {
        q: "Which salmon is best for sashimi in Hong Kong?",
        a: "Atlantic Salmon from Norway is the most widely used for sashimi in Hong Kong — it offers consistent quality, bright color, and mild flavor that works for all customer palates. For premium omakase applications, King Salmon (Chinook) offers unmatched richness. Both are available from Inari Global Food.",
      },
      {
        q: "What is the difference between Norwegian salmon and Scottish salmon?",
        a: "Both are Atlantic Salmon (Salmo salar) farmed in cold North Atlantic waters. Norwegian salmon is the highest volume and most price-competitive. Scottish salmon from the Highlands is prized for its slightly more complex flavor from the fast-flowing cold rivers used in farming. Both are sashimi-grade. Faroe Islands salmon is similarly premium.",
      },
      {
        q: "Is King Salmon available year-round in Hong Kong?",
        a: "King Salmon (Chinook) is seasonal. New Zealand King Salmon is available for a significant portion of the year; Alaskan wild King Salmon has a shorter window. Contact Inari Global Food to check current availability.",
      },
    ],
  },
  "zh-HK": {
    title: "三文魚品種指南 — 大西洋、帝王、紅三文魚（港澳）",
    metaDesc: "香港及澳門三文魚品種完整指南。大西洋三文魚、帝王三文魚（奇努克）及紅三文魚——風味特色、產地、品質及購買時機。",
    intro: "選擇合適的三文魚品種取決於您的菜單理念、價格定位及服務風格。以下是稻荷環球食品供應香港及澳門餐廳及酒店的三種頂級三文魚品種的完整資訊。",
    varieties: [
      {
        name: "Atlantic Salmon",
        nameCn: "大西洋三文魚",
        origin: "Norway, Scotland, Faroe Islands",
        originCn: "挪威、蘇格蘭、法羅群島",
        color: "Bright orange-pink with consistent fat marbling",
        colorCn: "亮橙粉色，脂肪紋路均勻",
        flavor: "Mild, buttery, consistently rich.",
        flavorCn: "清淡、奶油般、持續豐富。口味溫和，適合各種料理方式——生食、燒烤或煙熏。",
        texture: "Medium-firm, moist.",
        textureCn: "中等緊實，多汁。適合刺身，易於分切握壽司。",
        season: "Year-round.",
        seasonCn: "全年供應。每週空運2至3次。",
        use: ["Sashimi", "Nigiri", "Tataki", "Grilling", "Hotel buffets", "All-purpose"],
        useCn: ["刺身", "握壽司", "Tataki", "燒烤", "酒店自助餐", "全用途"],
        ideal: "The default premium salmon for any restaurant.",
        idealCn: "任何供應刺身的餐廳的默認頂級三文魚。品質穩定，全年供應，價格具競爭力。",
        badge: "Most Popular",
        badgeCn: "最受歡迎",
        badgeColor: "blue",
      },
      {
        name: "King Salmon / Chinook",
        nameCn: "帝王三文魚 / 奇努克三文魚",
        origin: "New Zealand, Alaska, British Columbia",
        originCn: "新西蘭、阿拉斯加、不列顛哥倫比亞省",
        color: "Deep orange-red, intensely marbled",
        colorCn: "深橙紅色，白色脂肪紋路密集",
        flavor: "Richest of all salmon. Deeply buttery, complex.",
        flavorCn: "所有三文魚品種中風味最濃郁。深度奶油感，層次複雜，令人滿足。「三文魚中的和牛」。",
        texture: "Extremely high fat, melts on palate.",
        textureCn: "比大西洋三文魚更柔軟，脂肪含量極高。入口即化。",
        season: "Seasonal.",
        seasonCn: "季節性供應——請查詢當前庫存。",
        use: ["Premium omakase", "High-end nigiri", "Chef's tasting menus"],
        useCn: ["高端 Omakase", "頂級握壽司", "主廚品嚐菜單", "季節性特色菜"],
        ideal: "For omakase programs commanding premium pricing.",
        idealCn: "適用於收取溢價的 Omakase 及精緻餐飲菜單。",
        badge: "Premium",
        badgeCn: "頂級",
        badgeColor: "amber",
      },
      {
        name: "Sockeye Salmon",
        nameCn: "紅三文魚",
        origin: "Alaska, British Columbia",
        originCn: "阿拉斯加、不列顛哥倫比亞省",
        color: "Deep red — most visually striking",
        colorCn: "深紅色肉質——視覺效果最突出的三文魚",
        flavor: "Stronger, more assertive than Atlantic.",
        flavorCn: "比大西洋三文魚風味更濃郁強烈。清爽的海洋特色，口感扎實。",
        texture: "Firm, lean.",
        textureCn: "緊實、精瘦。脂肪含量低於大西洋或帝王三文魚。",
        season: "Peak May–September.",
        seasonCn: "旺季五月至九月。阿拉斯加野生捕撈。",
        use: ["Visual presentations", "Sashimi platters", "Grilling", "Smoking"],
        useCn: ["視覺呈現", "刺身拼盤", "燒烤", "煙熏", "Tataki"],
        ideal: "Where bold color and visual impact matter.",
        idealCn: "適合重視鮮艷色彩和視覺衝擊的場合。",
        badge: "Seasonal",
        badgeCn: "季節性",
        badgeColor: "red",
      },
    ],
    comparisonTitle: "快速比較",
    compHeaders: ["", "Atlantic", "King (Chinook)", "Sockeye"],
    compHeaders_zh: ["", "大西洋三文魚", "帝王三文魚", "紅三文魚"],
    compRows: [
      ["Flavor", "Mild, buttery", "Rich, complex", "Bold, robust"],
      ["Fat content", "High", "Highest", "Moderate"],
      ["Availability", "Year-round", "Seasonal", "May–Sep"],
      ["Price point", "$$", "$$$$", "$$$"],
      ["Best use", "All-purpose sashimi", "Premium omakase", "Visual presentations"],
    ],
    compRows_zh: [
      ["風味", "清淡，奶油感", "濃郁，層次複雜", "強烈，扎實"],
      ["脂肪含量", "高", "最高", "中等"],
      ["供應", "全年", "季節性", "五月至九月"],
      ["價格", "$$", "$$$$", "$$$"],
      ["最佳用途", "全用途刺身", "頂級 Omakase", "視覺呈現"],
    ],
    faqTitle: "三文魚品種常見問題",
    faqs: [
      {
        q: "香港哪種三文魚最適合製作刺身？",
        a: "來自挪威的大西洋三文魚是香港最廣泛用於刺身的品種——品質穩定，色澤鮮艷，清淡口味適合所有食客。對於高端 Omakase 應用，帝王三文魚（奇努克）提供無與倫比的濃郁感。兩者均可從稻荷環球食品獲取。",
      },
      {
        q: "挪威三文魚和蘇格蘭三文魚有什麼區別？",
        a: "兩者均為大西洋三文魚（Salmo salar），在寒冷的北大西洋海域養殖。挪威三文魚供應量最大，價格最具競爭力。來自高地的蘇格蘭三文魚因使用快速流動的冷水養殖而風味略為複雜。兩者均為刺身級。法羅群島三文魚同樣屬於頂級品質。",
      },
      {
        q: "帝王三文魚在香港是否全年供應？",
        a: "帝王三文魚（奇努克）為季節性供應。新西蘭帝王三文魚在相當長的時間內有供應；阿拉斯加野生帝王三文魚的供應窗口較短。請聯繫稻荷環球食品查詢當前庫存。",
      },
    ],
  },
};

const badgeColors: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800",
  amber: "bg-amber-100 text-amber-800",
  red: "bg-red-100 text-red-800",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return { title: c.title, description: c.metaDesc };
}

export default async function SalmonVarietiesPage({ params }: Props) {
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

        {/* Varieties */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {c.varieties.map((v) => (
              <div key={v.nameCn} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{v.nameCn}</h2>
                    <p className="text-gray-500 text-sm">{v.name} — {v.originCn}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColors[v.badgeColor]}`}>
                    {isZh ? v.badgeCn : v.badge}
                  </span>
                </div>
                <div className="px-6 py-6 grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">{isZh ? "風味" : "Flavor"}</div>
                      <p className="text-gray-700 text-sm">{isZh ? v.flavorCn : v.flavor}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">{isZh ? "質地" : "Texture"}</div>
                      <p className="text-gray-700 text-sm">{isZh ? v.textureCn : v.texture}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">{isZh ? "色澤" : "Color"}</div>
                      <p className="text-gray-700 text-sm">{isZh ? v.colorCn : v.color}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">{isZh ? "供應季節" : "Season"}</div>
                      <p className="text-gray-700 text-sm">{isZh ? v.seasonCn : v.season}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-400 mb-1">{isZh ? "適用場合" : "Best Uses"}</div>
                      <div className="flex flex-wrap gap-1">
                        {(isZh ? v.useCn : v.use).map((u) => (
                          <span key={u} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">{u}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-xs font-bold uppercase text-blue-700 mb-1">{isZh ? "最適合" : "Ideal For"}</div>
                      <p className="text-gray-700 text-xs">{isZh ? v.idealCn : v.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.comparisonTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr>
                    {(isZh ? c.compHeaders_zh : c.compHeaders).map((h, i) => (
                      <th key={i} className="py-3 px-4 bg-gray-800 text-white text-sm font-semibold text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(isZh ? c.compRows_zh : c.compRows).map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, j) => (
                        <td key={j} className={`py-3 px-4 text-sm ${j === 0 ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
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
