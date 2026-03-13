import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin Varieties — Complete Guide",
    metaDesc:
      "Comprehensive guide to sea urchin varieties available in Hong Kong and Macau. Bafun Uni, Murasaki Uni, Canadian Red Uni — flavor profiles, seasons, and sourcing.",
    intro:
      "Not all sea urchin is equal. Understanding variety differences is key to selecting the right uni for your restaurant, hotel, or private dining needs. Inari Global Food sources and supplies the finest varieties to Hong Kong and Macau.",
    varieties: [
      {
        name: "Bafun Uni (馬糞海膽)",
        latin: "Strongylocentrotus intermedius",
        origin: "Hokkaido, Japan",
        season: "Peak: June – August",
        color: "Deep golden orange",
        flavor:
          "Intensely sweet, rich and creamy with deep umami. The most prized uni for premium omakase and fine dining.",
        texture: "Dense, buttery, holds shape well on nigiri",
        use: "Premium sashimi, sushi nigiri, uni donburi, uni pasta",
        notes:
          "Bafun (meaning 'horse dung' in Japanese — a reference to shape, not quality) is considered the pinnacle of uni. Supply is limited, especially for AA-grade. Inari Global Food maintains priority allocation from trusted Hokkaido suppliers.",
        availability: "Seasonal — highest quality June to August; limited supply year-round",
      },
      {
        name: "Murasaki Uni (紫海膽)",
        latin: "Anthocidaris crassispina / Heliocidaris crassispina",
        origin: "Various regions, Japan; also Korea, China coast",
        season: "Year-round with regional peaks",
        color: "Pale to medium yellow",
        flavor:
          "Delicate, clean briny taste with a light sweetness and gentle ocean finish. Less intense than Bafun.",
        texture: "Softer, more delicate",
        use: "Sashimi, fine dining presentations, appetizers",
        notes:
          "Murasaki Uni provides consistent supply throughout the year, making it the workhorse of Hong Kong and Macau's Japanese restaurant industry. Quality varies significantly by source — Inari Global Food selects only top-grade Murasaki.",
        availability: "Year-round",
      },
      {
        name: "Canadian Red Sea Urchin (加拿大紅海膽)",
        latin: "Mesocentrotus franciscanus",
        origin: "British Columbia, Canada",
        season: "Peak: October – May",
        color: "Pale golden yellow to cream",
        flavor:
          "Bold, robust flavor with a buttery, rich quality. Large lobes with pronounced umami. Milder brininess than Japanese varieties.",
        texture: "Large, firm lobes — excellent presentation value",
        use: "Sashimi, fusion cuisine, Western fine dining, chef's platters",
        notes:
          "Canadian Red Uni has grown in prestige in Hong Kong and Macau's restaurant scene. Its large lobe size and availability during Japanese uni off-season makes it a valuable complement. Top Canadian grades are served at leading omakase restaurants.",
        availability: "Peak October–May; aligns with Japanese off-season",
      },
      {
        name: "Maine Sea Urchin / Atlantic Uni",
        latin: "Strongylocentrotus droebachiensis",
        origin: "Maine, USA; Atlantic coast",
        season: "Peak: November – March",
        color: "Light golden yellow",
        flavor:
          "Mild, sweet, delicate — approachable flavor profile suited to guests new to uni",
        texture: "Smaller lobes, delicate",
        use: "Fine dining, fusion applications, introductory uni courses",
        notes:
          "Less common in Hong Kong and Macau but increasingly sought after. Contact us for seasonal availability.",
        availability: "Seasonal, limited availability in Hong Kong/Macau market",
      },
    ],
    comparisonTitle: "Variety Comparison at a Glance",
    comparisonNote:
      "Price and availability vary by season and market conditions. Contact Inari Global Food for current pricing.",
  },
  "zh-HK": {
    title: "海膽品種完全指南",
    metaDesc:
      "香港及澳門海膽品種完整介紹。馬糞海膽、紫海膽、加拿大紅海膽 — 風味特點、產季及採購資訊。",
    intro:
      "並非所有海膽都一樣。了解品種差異，是為您的餐廳、酒店或私人宴飲選擇合適海膽的關鍵。稻荷環球食品從全球頂級來源採購，向香港及澳門供應最優質的海膽品種。",
    varieties: [
      {
        name: "馬糞海膽（Bafun Uni）",
        latin: "Strongylocentrotus intermedius",
        origin: "日本北海道",
        season: "高峰期：6月至8月",
        color: "深金橙色",
        flavor:
          "味道極為香甜濃郁，帶有豐富的鮮味（Umami）。是Omakase及精緻料理中最珍貴的海膽品種。",
        texture: "質地緊密、帶牛油感，放在壽司上形狀保持良好",
        use: "頂級刺身、壽司手握、海膽丼、海膽意粉",
        notes:
          "馬糞海膽（日語意指馬糞，形容外形而非品質）被視為海膽中的極品。供應量有限，尤其AA級更為稀少。稻荷環球食品與北海道可靠供應商保持優先配額合作關係。",
        availability: "季節性供應 — 6至8月品質最佳；全年供應有限",
      },
      {
        name: "紫海膽（Murasaki Uni）",
        latin: "Anthocidaris crassispina / Heliocidaris crassispina",
        origin: "日本各地；亦産於韓國、中國沿岸",
        season: "全年供應，各地產季有所不同",
        color: "淺黃至中黃色",
        flavor:
          "味道清淡，帶淡淡鹹鮮及輕微甜味，海洋氣息清新。風味較馬糞海膽溫和。",
        texture: "質地較柔軟細膩",
        use: "刺身、精緻料理擺盤、前菜",
        notes:
          "紫海膽全年穩定供應，是香港及澳門日式餐廳行業的主力品種。品質因產地差異頗大，稻荷環球食品只選取頂級紫海膽。",
        availability: "全年供應",
      },
      {
        name: "加拿大紅海膽",
        latin: "Mesocentrotus franciscanus",
        origin: "加拿大英屬哥倫比亞",
        season: "高峰期：10月至翌年5月",
        color: "淡金黃至奶油色",
        flavor:
          "味道濃郁帶牛油感，鮮味明顯。膽黃顆粒大，海鹹味較日本品種溫和。",
        texture: "膽黃大而緊實，賣相極佳",
        use: "刺身、創意融合料理、西式精緻菜式、主廚拼盤",
        notes:
          "加拿大紅海膽在香港及澳門餐飲界的聲譽持續提升。其膽黃尺寸大、且在日本海膽淡季時供應充足，是極佳的補充品種。頂級加拿大海膽已見於多家頂尖Omakase餐廳。",
        availability: "高峰期10月至翌年5月，配合日本海膽淡季",
      },
      {
        name: "緬因州海膽（大西洋海膽）",
        latin: "Strongylocentrotus droebachiensis",
        origin: "美國緬因州；大西洋沿岸",
        season: "高峰期：11月至3月",
        color: "淡金黃色",
        flavor: "味道清淡香甜，風味溫和，適合初嘗海膽的食客",
        texture: "膽黃較小，質地細緻",
        use: "精緻料理、創意菜式、入門海膽體驗",
        notes:
          "在香港及澳門市場較少見，但需求日漸增長。請聯絡我們了解當季供應情況。",
        availability: "季節性，香港/澳門市場供應有限",
      },
    ],
    comparisonTitle: "品種一覽對比",
    comparisonNote:
      "價格及供應視乎季節及市場情況而定。請聯絡稻荷環球食品了解最新報價。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh-HK";
  const d = isZh ? content["zh-HK"] : content["en"];
  return {
    title: d.title + " | Inari Global Food",
    description: d.metaDesc,
    alternates: { canonical: `/${locale}/sea-urchin/varieties` },
  };
}

export default async function SeaUrchinVarietiesPage({ params }: Props) {
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
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-slate-400 mb-4">
              <a href={`/${locale}/sea-urchin`} className="hover:text-white">
                {isZh ? "海膽" : "Sea Urchin"}
              </a>
              {" / "}
              <span className="text-white">{isZh ? "品種指南" : "Varieties"}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{d.title}</h1>
            <p className="text-lg text-slate-300 max-w-3xl">{d.intro}</p>
          </div>
        </section>

        {/* Variety Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {d.varieties.map((v, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-amber-50 px-8 py-5 border-b border-amber-100">
                  <h2 className="text-2xl font-bold text-slate-800">{v.name}</h2>
                  <p className="text-sm text-slate-500 italic mt-1">{v.latin}</p>
                </div>
                <div className="px-8 py-6 grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "產地" : "Origin"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.origin}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "產季" : "Season"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.season}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "色澤" : "Color"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.color}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "質感" : "Texture"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.texture}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "風味" : "Flavor"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.flavor}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "適合用途" : "Best Uses"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.use}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        {isZh ? "供應情況" : "Availability"}
                      </span>
                      <p className="text-slate-700 mt-1">{v.availability}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{v.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isZh
                ? "需要為您的餐廳或酒店選擇合適的海膽品種？"
                : "Need help selecting the right uni for your restaurant or hotel?"}
            </h2>
            <p className="text-slate-300 mb-6">
              {isZh
                ? "我們的專家團隊可根據您的菜單、預算及服務定位，提供專業採購建議。"
                : "Our expert team provides tailored sourcing advice based on your menu, budget, and dining positioning."}
            </p>
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
