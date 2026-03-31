import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Hong Kong Seafood Market Trends 2026: Premium Ingredients Driving Dining Excellence",
    metaDesc: "2026 seafood market trends in Hong Kong and Macau: omakase boom, sustainability demands, premium sourcing challenges. Data-driven analysis for restaurant buyers and F&B directors.",
    published: "March 2026",
    category: "Market Analysis",
    intro: "Hong Kong's premium seafood market is experiencing unprecedented growth. Driven by the explosive expansion of omakase dining, rising consumer wealth, and the recovery of Macau's casino F&B operations, restaurants and hotels are increasingly competing for access to premium ingredients. This comprehensive analysis examines 2026 market trends, supply chain challenges, and strategic opportunities for restaurant buyers, F&B directors, and importers sourcing seafood in Hong Kong and Macau.",
    sections: [
      {
        heading: "Market Size and Growth: The Numbers Behind Hong Kong Seafood Demand",
        body: "Hong Kong's premium seafood market has grown 18-22% annually over the past three years, outpacing general food service growth at 5-7%. The fine dining segment (restaurants with average check >$200 HKD per person) is the primary driver:\n\n• Fine dining restaurants: ~450 establishments (2025), growing 12% annually\n• Michelin-starred venues: 65 restaurants (2026), up from 41 in 2019\n• Omakase-specific concepts: ~80 dedicated omakase restaurants in Hong Kong, up from 15 in 2018\n• Casino resort F&B programs: Macau's 34 casinos operating 600+ restaurants and bars\n\nMacau's recovery has been swift: pre-COVID F&B spending has been exceeded, with premium seafood now central to differentiation among competing casino properties. The average 5-star hotel in Hong Kong now allocates 25-30% of ingredient spend to premium seafood, up from 18% in 2019.",
      },
      {
        heading: "Key Trend #1: The Omakase Boom and Specialty Sushi Dining",
        body: "Omakase dining has transitioned from niche luxury to mainstream fine dining. This shift fundamentally changes seafood sourcing dynamics:\n\n**What's driving it:**\n• Instagram-worthy dining experiences appeal to affluent millennials\n• Japanese training and certification has become a status symbol\n• Omakase allows restaurants to achieve 40-60% higher per-seat revenue vs. traditional sushi\n• Shorter supply chains (chef selection vs. pre-set menus) appeal to quality-conscious operators\n\n**Sourcing implications:**\n• Premium uni (AA/AAA grade Hokkaido Bafun) demand has increased 35% year-over-year\n• Chef-direct relationships with Japanese suppliers are now competitive requirements\n• High-quality salmon (Norwegian and Scottish) has become as important as tuna\n• Seasonal supply is now a feature, not a bug — restaurants actively market seasonal uni availability\n\n**Market segments:**\n• Ultra-premium omakase ($300-500+ HKD per person): 25 concepts, fully booked months in advance\n• Premium omakase ($150-250 HKD): 45 concepts, 70%+ occupancy\n• Accessible sushi + omakase counter: 110 concepts, driving volume\n\nThe competitive advantage goes to suppliers who can guarantee consistent AA-grade uni supply and work with chefs on seasonal strategy.",
      },
      {
        heading: "Key Trend #2: Sustainability and Transparency Demands",
        body: "Sustainability has moved from a marketing talking point to a purchasing requirement, especially among luxury hotels and Michelin-starred restaurants.\n\n**Buyer demand drivers:**\n• Michelin Guide now explicitly factors sustainability into star allocations\n• Corporate ESG commitments (hotel chains, F&B groups) require verified sustainable sourcing\n• Affluent consumers increasingly ask about sourcing; Instagram demand for supply chain transparency\n• Regulatory pressures: CITES, seafood traceability regulations in EU (increasingly applied to imports)\n\n**Market response:**\n• 60% of Michelin-starred restaurants in Hong Kong now require sustainability certifications (ASC, MSC)\n• Hotels are adopting scorecards for supplier sustainability performance\n• Premium prices for certified sustainable seafood: +15-25% vs. uncertified equivalents\n• Hokkaido sea urchin traceability programs have become a competitive differentiator\n\n**Sourcing advantage:**\n• Suppliers with direct relationships to certified producers can command premium pricing\n• Transparency (harvest date, processing location, certifications) is now expected, not optional\n• Carbon footprint tracking is increasingly required by luxury properties",
      },
      {
        heading: "Key Trend #3: Supply Chain Challenges and Premium Pricing",
        body: "Global seafood supply is tightening, and Hong Kong importers feel the pressure acutely:\n\n**Supply constraints:**\n• Hokkaido sea urchin yields have declined 25-30% due to ocean temperature changes and sea star predation\n• Norwegian salmon farming capacity is constrained by regulatory limits on sea lice and environmental concerns\n• Air freight capacity to Asia remains 15-20% below pre-COVID levels\n• Skilled cold-chain logistics professionals are scarce and expensive\n\n**Pricing impact:**\n• Premium uni (AA-grade Hokkaido): +35-40% price increase vs. 2021\n• Wild salmon: +20-25% increase, seasonal availability narrowing\n• Air-freight logistics costs: +40-50% since 2019\n\n**Buyer implications:**\n• Spot purchasing (buying without forward contracts) is increasingly expensive\n• Buyers with advance commitment strategies secure better pricing\n• Direct relationships with producers are worth 10-15% in cost savings vs. multi-tier importers\n• Menu engineering (using seasonal products effectively) is now a financial necessity",
      },
      {
        heading: "Key Trend #4: The Rise of Alternative Premium Sourcing",
        body: "As Japanese and Norwegian supply tightens, alternative sources are gaining credibility:\n\n**Canadian sea urchin (red urchin from British Columbia):**\n• Quality parity with Hokkaido for many applications\n• 25-35% cost advantage vs. Hokkaido AA-grade\n• Peak season (Oct-May) fills the Hokkaido off-season gap perfectly\n• MSC certification appeals to sustainability-focused buyers\n\n**Scottish and Faroese salmon:**\n• Gaining recognition among Hong Kong chefs as equal to Norwegian\n• Omega-3 and taste profiles vary with origin, creating menu differentiation opportunities\n• Cost-competitive with Norwegian, better availability in certain seasons\n\n**Maine sea urchin and other US sources:**\n• Entry-level premium uni for mid-tier restaurants\n• Shorter supply chains than traditional Japanese sources\n• Growing recognition among younger chefs\n\n**Market shift:**\n• Buyers comfortable with product education are accessing 20-30% cost savings\n• Multi-origin sourcing strategies are becoming industry best practice\n• Chefs are leveraging geographic diversity for menu storytelling",
      },
      {
        heading: "Consumer Behavior Shifts: What Hong Kong Diners Actually Want",
        body: "Beyond omakase, broader dining behavior is reshaping seafood demand:\n\n**Health and nutrition consciousness:**\n• Omega-3 content is now a purchase factor for affluent consumers\n• Requests for nutritional information and sourcing details are up 45% in past two years\n• Sustainably-sourced and wild-caught command premium pricing among affluent diners\n\n**Experience and storytelling:**\n• Diners expect to know where their seafood came from\n• Chefs who can tell stories about suppliers gain competitive advantage\n• Seasonal menus and product scarcity are now marketing advantages\n\n**Dietary preferences:**\n• Premium seafood caters to keto and paleo trends among affluent consumers\n• Plant-based dining growth has NOT dented premium seafood demand\n• Sashimi and raw preparations remain high-margin, high-demand offerings",
      },
      {
        heading: "2026 Market Forecast: Opportunities and Challenges",
        body: "**Expected market size:** $320-350M HKD in premium seafood (fine dining, hotels, specialty retail)\n\n**Growth drivers through end of 2026:**\n• Macau F&B recovery continuing (+15-20% through Q4 2026)\n• New Michelin-starred restaurant openings (estimated 8-12)\n• Omakase expansion into secondary neighborhoods (more accessible price points)\n• Hotel F&B differentiation acceleration (post-pandemic, hotels investing heavily in F&B to compete with online distribution)\n\n**Headwinds:**\n• Hokkaido supply constraints persist (yield unlikely to recover to 2018 levels)\n• Air freight costs unlikely to decrease significantly\n• Chinese regulatory uncertainty on seafood imports (occasional policy shifts)\n• Potential economic slowdown impacting luxury dining volumes\n\n**2026 Predictions:**\n• Premium seafood prices rise 8-12% average across categories\n• Canadian and Scottish alternatives capture 15-20% of premium uni and salmon market share\n• Sustainability certifications become table-stakes for restaurants with ESG commitments\n• Direct-import models grow faster (8-15% annually) vs. traditional distributor channels",
      },
      {
        heading: "Strategic Opportunities for Restaurant Buyers and Importers",
        body: "**1. Build Direct Supplier Relationships**\nSkip multi-tier importers where possible. Direct relationships with Hokkaido producers, Canadian fisheries, and Norwegian farms yield 10-15% cost advantages and better quality control. Minimum commitment: 500kg/month or equivalent seasonal variations.\n\n**2. Diversify Sourcing Geography**\nRelying solely on Japan/Norway is increasingly risky. Develop backup suppliers in Canada, Scotland, and Maine. This strategy improves negotiating power and hedges against supply shocks.\n\n**3. Invest in Cold-Chain Capability**\nRestaurants with in-house quality control (temperature monitoring, taste evaluation, rapid spoilage detection) can command fresher product and detect issues before service. Consider HACCP certification for credibility.\n\n**4. Educate Staff and Customers**\nChefs and waitstaff trained on origin, seasonality, and sourcing stories drive higher per-item pricing. \"Canadian red urchin, sustainable MSC-certified\" commands better margins than \"premium urchin.\"\n\n**5. Embrace Seasonality**\nInstead of fighting seasonal constraints, build seasonal menus that celebrate them. \"Peak Hokkaido Bafun season\" becomes a marketing hook. This also improves margins (seasonal peaks = higher prices).\n\n**6. Establish Advance Commitment Contracts**\nNegotiate 6-12 month advance commitments with suppliers. Guaranteed volume locks in pricing and allocation in tight markets.\n\n**7. Monitor Industry Trends**\nRegularly scan Hokkaido harvest reports, Canadian fishery yields, and ocean temperature data. These leading indicators predict pricing 3-6 months out.",
      },
    ],
    conclusion: "Hong Kong's seafood market in 2026 is dynamic, competitive, and opportunity-rich. The omakase boom, sustainability demands, and supply constraints create structural advantages for buyers who build strong supplier relationships, diversify sourcing, and invest in quality control. The most sophisticated restaurants are already competing on sourcing expertise as much as culinary skill — and that trend will accelerate.",
    ctaTitle: "Ready to Optimize Your Seafood Sourcing Strategy?",
    cta: "Inari Global Food partners with Hong Kong and Macau restaurants, hotels, and importers on direct sourcing from certified producers. Let's discuss how to reduce costs, secure supply, and build competitive advantage through better sourcing.",
  },
  "zh-HK": {
    title: "香港海鮮市場趨勢 2026：優質食材驅動餐飲卓越",
    metaDesc: "2026香港澳門海鮮市場趨勢：Omakase 飆升、可持續性需求、高端採購挑戰。數據驅動分析，為餐廳採購員和餐飲總監而作。",
    published: "2026年3月",
    category: "市場分析",
    intro: "香港的高端海鮮市場正經歷前所未有的增長。由 Omakase 餐飲的爆炸式擴張、消費者財富增長，以及澳門賭場餐飲業務復甦所驅動，餐廳和酒店正愈來愈多地競爭以獲取優質食材。本分析為在香港和澳門採購海鮮的餐廳採購員、餐飲總監和進口商提供綜合 2026 年市場趨勢、供應鏈挑戰和戰略機會。",
    sections: [
      {
        heading: "市場規模與增長：香港海鮮需求背後的數據",
        body: "香港的高端海鮮市場在過去三年中每年增長 18-22%，遠超過食品服務業整體增長 5-7% 的速度。高端餐飲市場（人均消費 >200 港幣的餐廳）是主要驅動力：\n\n• 高端餐廳：約 450 家（2025 年），年增長 12%\n• 米其林星級餐廳：65 家（2026 年），較 2019 年的 41 家增加\n• 專業 Omakase 餐廳：香港約 80 家，較 2018 年的 15 家增加\n• 賭場度假村食品飲料計劃：澳門 34 家賭場運營 600 多家餐廳和酒吧\n\n澳門復甦迅速：疫前食飲消費已被超越，優質海鮮現已成為競爭性賭場物業差異化的核心。香港五星級酒店平均現在將 25-30% 的食材預算用於優質海鮮，較 2019 年的 18% 上升。",
      },
      {
        heading: "關鍵趨勢 #1：Omakase 飆升與專業壽司餐飲",
        body: "Omakase 餐飲已從利基奢侈品轉變為主流高端餐飲。此轉變從根本上改變了海鮮採購動態：\n\n**驅動因素：**\n• Instagram 適配的用餐體驗吸引富裕千禧一代\n• 日本培訓和認證已成為身份象徵\n• Omakase 允許餐廳相較於傳統壽司達到 40-60% 更高的人均收入\n• 更短的供應鏈（廚師精選與預設菜單）吸引品質意識強的經營者\n\n**採購影響：**\n• 優質海膽（AA/AAA 級北海道馬糞海膽）需求年增長 35%\n• 廚師與日本供應商的直接關係已成為競爭性要求\n• 高質量三文魚（挪威和蘇格蘭）與金槍魚同樣重要\n• 季節性供應現已成為特色，而非缺陷——餐廳積極行銷季節性海膽供應\n\n**市場細分：**\n• 超高端 Omakase（300-500+ 港幣/人）：25 個概念，提前數月預訂滿座\n• 優質 Omakase（150-250 港幣）：45 個概念，70% 以上入住率\n• 可及壽司 + Omakase 櫃檯：110 個概念，推動成交量\n\n競爭優勢歸於能保證持續 AA 級海膽供應並與廚師合作進行季節規劃的供應商。",
      },
      {
        heading: "關鍵趨勢 #2：可持續性與透明度需求",
        body: "可持續性已從市場行銷談話要點轉變為採購要求，尤其是在豪華酒店和米其林星級餐廳中。\n\n**買家需求驅動因素：**\n• 米其林指南現明確將可持續性納入星級評分\n• 企業ESG承諾（酒店連鎖、食飲集團）要求經驗證的可持續採購\n• 富裕消費者越來越多地詢問採購情況；Instagram 對供應鏈透明度的需求\n• 監管壓力：瀕危野生動植物種國際貿易公約、海鮮可追溯性法規（日益適用於進口）\n\n**市場反應：**\n• 60% 的香港米其林星級餐廳現需要可持續性認證（ASC、MSC）\n• 酒店採用供應商可持續性績效計分卡\n• 認證可持續海鮮的溢價：相較於未認證的 +15-25%\n• 北海道海膽可追溯性計劃已成為競爭差異化\n\n**採購優勢：**\n• 與認證生產商有直接關係的供應商可命令溢價\n• 透明度（採收日期、加工地點、認證）現已預期且非選項\n• 碳足跡追蹤日益成為豪華物業的要求",
      },
      {
        heading: "關鍵趨勢 #3：供應鏈挑戰與高端定價",
        body: "全球海鮮供應緊張，香港進口商明顯感受壓力：\n\n**供應約束：**\n• 由於海洋溫度變化和海星掠食，北海道海膽產量下降 25-30%\n• 挪威三文魚養殖能力受海蝨和環境關切的監管限制所制約\n• 亞洲空運能力仍比疫前水平低 15-20%\n• 熟練的冷鏈物流專業人員稀缺且昂貴\n\n**定價影響：**\n• 優質海膽（AA 級北海道）：相較於 2021 年 +35-40% 的價格上漲\n• 野生三文魚：+20-25% 的漲幅，季節性供應縮小\n• 空運物流成本：自 2019 年以來 +40-50%\n\n**買家影響：**\n• 現貨採購（不轉售合同的採購）日益昂貴\n• 提前承諾策略的買家可確保更優定價\n• 與生產商的直接關係相較於多層進口商值 10-15% 的成本節省\n• 菜單工程（有效使用季節性產品）現為財務必要性",
      },
      {
        heading: "關鍵趨勢 #4：替代高端採購的崛起",
        body: "由於日本和挪威供應緊張，替代源正獲得信譽：\n\n**加拿大海膽（不列顛哥倫比亞紅海膽）：**\n• 對許多應用來說與北海道質量對等\n• 相較於北海道 AA 級有 25-35% 的成本優勢\n• 旺季（10 月至 5 月）完美填補北海道淡季間隙\n• MSC 認證吸引可持續性重點的買家\n\n**蘇格蘭和法羅三文魚：**\n• 在香港廚師中作為與挪威同等的地位而獲得認可\n• Omega-3 和味覺檔案隨產地而異，創造菜單差異化機會\n• 與挪威成本競爭，在某些季節供應更好\n\n**緬因海膽和其他美國源：**\n• 中端餐廳的入門級優質海膽\n• 供應鏈比傳統日本源更短\n• 年輕廚師中認識度不斷增長\n\n**市場轉變：**\n• 接受產品教育的買家可獲得 20-30% 的成本節省\n• 多源採購策略正成為行業最佳實踐\n• 廚師正利用地理多樣性進行菜單敘事",
      },
      {
        heading: "消費者行為轉變：香港食客實際想要什麼",
        body: "除了 Omakase，更廣泛的飲食行為正在重塑海鮮需求：\n\n**健康與營養意識：**\n• Omega-3 含量現為富裕消費者的採購因素\n• 對營養資訊和採購細節的請求增加 45%\n• 可持續採購和野生捕撈對富裕食客命令溢價\n\n**體驗與敘事：**\n• 食客期望了解他們的海鮮來自何處\n• 能講述供應商故事的廚師獲得競爭優勢\n• 季節性菜單和產品稀缺性現為市場優勢\n\n**飲食偏好：**\n• 優質海鮮迎合富裕消費者的生酮和舊石器時代飲食趨勢\n• 植物性飲食增長未損害優質海鮮需求\n• 生魚片和生製備仍是高利潤、高需求的供應",
      },
      {
        heading: "2026 年市場預測：機會與挑戰",
        body: "**預期市場規模：** 3.2-3.5 億港幣高端海鮮（高端餐飲、酒店、專業零售）\n\n**通過 2026 年底的增長驅動因素：**\n• 澳門食飲復甦繼續（+15-20% 到第四季度 2026）\n• 新米其林星級餐廳開業（估計 8-12 家）\n• Omakase 擴展至次要社區（更易於獲得的價格點）\n• 酒店食飲差異化加速（疫後，酒店大力投資食飲以與在線分銷競爭）\n\n**阻力：**\n• 北海道供應約束持續（產量不太可能恢復至 2018 年水平）\n• 空運成本不太可能顯著下降\n• 中國海鮮進口監管不確定性（偶發政策轉變）\n• 潛在經濟放緩影響奢侈餐飲成交量\n\n**2026 年預測：**\n• 優質海鮮價格平均上漲 8-12%\n• 加拿大和蘇格蘭替代品在優質海膽和三文魚市場佔有 15-20% 市場佔有率\n• 可持續性認證對具有ESG承諾的餐廳成為基本條件\n• 直接進口模式增長速度（8-15% 年度增長）超過傳統分銷渠道",
      },
      {
        heading: "對餐廳採購員和進口商的戰略機會",
        body: "**1. 建立直接供應商關係**\n儘可能避開多層進口商。與北海道生產商、加拿大漁業和挪威農場的直接關係可產生 10-15% 的成本優勢和更好的品質控制。最低承諾：500kg/月或相當的季節性變化。\n\n**2. 使採購地理多樣化**\n僅依賴日本/挪威風險日益增加。在加拿大、蘇格蘭和緬因開發備用供應商。此策略改善談判權力並對沖供應衝擊。\n\n**3. 投資冷鏈能力**\n具有內部品質控制（溫度監控、味覺評估、快速腐爛檢測）的餐廳可命令更新鮮產品並在服務前發現問題。考慮 HACCP 認證以增強信譽。\n\n**4. 教育員工和客戶**\n在產地、季節性和採購故事上受過訓練的廚師和服務員提高每件商品定價。\"加拿大紅海膽，可持續 MSC 認證\" 比 \"優質海膽\" 命令更好的利潤。\n\n**5. 擁抱季節性**\n與其對抗季節性約束，建立慶祝季節性的季節性菜單。\"北海道馬糞海膽旺季\" 成為市場行銷的掛鉤。這也改善利潤（季節性高峰 = 更高的價格）。\n\n**6. 建立提前承諾合同**\n與供應商談判 6-12 個月的提前承諾。有保證的成交量在緊張市場中鎖定定價和配額。\n\n**7. 監控行業趨勢**\n定期掃描北海道收穫報告、加拿大漁業產量和海洋溫度數據。這些領先指標預測 3-6 個月的定價。",
      },
    ],
    conclusion: "香港 2026 年的海鮮市場充滿活力、競爭激烈且機會豐富。Omakase 飆升、可持續性需求和供應約束為建立強大供應商關係、使採購地理多樣化並投資於品質控制的買家創造了結構性優勢。最精明的餐廳正在像競爭烹飪技能一樣競爭採購專業知識——該趨勢將加速。",
    ctaTitle: "準備好優化您的海鮮採購策略了嗎？",
    cta: "稻荷環球食品與香港和澳門的餐廳、酒店和進口商合作，從認證生產商進行直接採購。讓我們討論如何通過更好的採購來降低成本、確保供應並建立競爭優勢。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return {
    title: c.title,
    description: c.metaDesc,
    openGraph: { title: c.title, description: c.metaDesc, type: "article" },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
                {c.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-gray-600">{c.published}</p>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">{c.intro}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {c.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{c.conclusion}</p>
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{c.ctaTitle}</h3>
            <p className="text-gray-700 mb-4">{c.cta}</p>
            <a
              href={`/${locale}/contact`}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {locale === "en" ? "Get in Touch" : "聯繫我們"}
            </a>
          </div>
        </article>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
