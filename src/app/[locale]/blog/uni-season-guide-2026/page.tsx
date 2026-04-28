import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Hong Kong Uni Season 2026: When to Buy and What to Expect",
    metaDesc: "Complete guide to sea urchin (uni) seasonal availability in Hong Kong and Macau for 2026. Month-by-month sourcing calendar for Hokkaido, Canadian, and California varieties.",
    published: "April 2026",
    category: "Seasonal Guide",
    intro: "Sourcing premium uni in Hong Kong and Macau is never a year-round constant. What's extraordinary in July can be mediocre in February. Understanding seasonal peaks, variety rotations, and supply dynamics is the difference between building a menu around exceptional product — and settling for whatever arrives. This guide gives restaurant buyers and F&B directors a practical month-by-month sourcing roadmap for 2026.",
    sections: [
      {
        heading: "Why Uni Seasonality Matters for HK & Macau Buyers",
        body: "Unlike most proteins, sea urchin quality fluctuates dramatically by season. Uni roe swells and sweetens as the animal prepares to spawn — after spawning, the roe depletes and bitterness increases sharply. Buying at the wrong time means paying premium prices for inferior product.\n\nIn Hong Kong and Macau's high-end dining market, three factors make seasonality especially critical:\n\n**Menu Credibility**: Michelin-starred and fine dining restaurants cannot serve off-season, watery uni without damaging their reputation. Chefs who understand seasonality build menus that are always serving peak product.\n\n**Pricing Volatility**: Premium uni prices swing 30–50% between peak and off-peak seasons. Buyers who understand the calendar can forward-contract during low-demand windows and protect their COGS.\n\n**Import Lead Times**: HK/Macau restaurants are 1–3 flight days from most major uni origins (Japan, Canada, US). Understanding when production peaks allows buyers to plan ahead and avoid air freight shortfalls.",
      },
      {
        heading: "Month-by-Month Uni Availability Calendar 2026",
        body: "**January — Transition Month**\nAvailability: Canadian Red (British Columbia) ★★★★ | Chilean ★★★ | Hokkaido sparse\nNotes: Strong Canadian Red season continues. Chilean uni from Patagonia entering peak quality. Hokkaido Bafun supply limited — prices elevated for available stock. Best buy: Canadian Red for value-quality balance.\n\n**February — Canadian Peak**\nAvailability: Canadian Red ★★★★★ | Chilean ★★★★ | US East Coast opening\nNotes: BC Canadian Red reaches peak creaminess. Chilean Loxechinus production increases. Japanese import volumes low — Lunar New Year logistics disruptions. Plan inventory carefully around CNY week.\n\n**March — Spring Transition**\nAvailability: Canadian Red ★★★★ | Hokkaido early season ★★ | US East Coast ★★★\nNotes: Early Hokkaido Bafun begins appearing — quality inconsistent, prices speculative. US East Coast (Maine/New England) enters production. Recommend caution on early Hokkaido; wait for June confirmation.\n\n**April — Mixed Market**\nAvailability: Canadian Red ★★★ (late season) | Hokkaido ★★★ | California ★★★\nNotes: Canadian Red softening as season winds down. California Red and Purple uni entering peak. Hokkaido Murasaki (purple) begins alongside Bafun. Good month to diversify sourcing across origins.\n\n**May — California & Hokkaido Rising**\nAvailability: California ★★★★ | Hokkaido Murasaki ★★★★ | Hokkaido Bafun ★★★\nNotes: California Red Uni reaches peak richness — excellent value alternative to Hokkaido. Northern Hokkaido Bafun season building momentum. Ideal time to lock in Hokkaido supplier agreements for June–August peak.\n\n**June — Hokkaido Peak Begins** ⭐ BEST MONTH\nAvailability: Hokkaido Bafun AA ★★★★★ | Hokkaido Murasaki ★★★★★ | California ★★★★\nNotes: Northern Hokkaido Bafun enters prime season. Golden-orange colour, intense sweetness, firm lobes. AA-grade supply reliable. This is when Michelin chefs feature uni prominently. Forward contracts recommended — volume buyers secure allocations now.\n\n**July — Peak Season** ⭐ BEST MONTH\nAvailability: Hokkaido Bafun AA ★★★★★ | Hokkaido Murasaki ★★★★★ | Rishiri Bafun ★★★★★\nNotes: Absolute peak for Northern Hokkaido. Supply plentiful across grades. Rishiri Island Bafun (considered by many the finest variety in the world) available in small quantities — premium pricing. Plan summer menu around uni as hero ingredient.\n\n**August — Late Peak**\nAvailability: Hokkaido Bafun ★★★★ | Southern Hokkaido opening ★★★ | Rishiri ★★★★\nNotes: Northern Hokkaido Bafun beginning to wind down. Southern Hokkaido (Erimo) enters production — slightly different flavour profile, still excellent. Watch for quality inconsistency in late August as some harvests rush to market before season ends.\n\n**September — Autumn Transition**\nAvailability: Southern Hokkaido ★★★★ | Canadian new season ★★ | Chilean returning ★★★\nNotes: Hokkaido focus shifts south. Canadian Red new season begins with early-season product (lower fat content, builds through October). Chilean Patagonia production increasing. Good rotation month — diversify sourcing to manage cost.\n\n**October — Canadian New Season**\nAvailability: Canadian Red new season ★★★★ | Chilean ★★★★ | Hokkaido limited ★★\nNotes: Canadian Red new season hits full quality — reliable, consistent, excellent value for HK/Macau market. Chilean winter harvest strong. Hokkaido supply diminishing significantly. Begin transitioning menu to Canadian/Chilean focus.\n\n**November — Canadian & Chilean Strong**\nAvailability: Canadian Red ★★★★★ | Chilean ★★★★★ | Norwegian ★★★\nNotes: Peak value season for non-Japanese varieties. Norwegian Strongylocentrotus droebachiensis available for adventurous menus. Canadian Red pricing most competitive of year. Excellent time for volume purchasing and stock building.\n\n**December — Year-End Demand Spike**\nAvailability: Canadian Red ★★★★ | Chilean ★★★★ | Japanese New Year stock arriving ★★★\nNotes: Festive season demand spikes pricing across all varieties. Book December supply in October/November. Japanese Bafun begins reappearing for New Year restaurant promotions — limited supply, premium pricing. Plan holiday menus around Canadian/Chilean value and Japanese as a premium feature.",
      },
      {
        heading: "Variety Profiles: What to Know Before You Buy",
        body: "**Hokkaido Bafun Uni (馬糞海膽)**\nOrigin: Northern Hokkaido, Japan | Peak: June–August\nFlavour: Intensely sweet, oceanic, rich umami. The benchmark for fine dining.\nAppearance: Deep golden-orange; firm, well-defined lobes\nGrade: AA (most vivid colour, firmest lobes) → A → B\nBest use: Omakase courses, sashimi, premium donburi\nHK/Macau pricing: HK$900–1,400 per tray (AA-grade, peak season)\n\n**Hokkaido Murasaki Uni (紫海膽)**\nOrigin: Hokkaido, Japan | Peak: May–August\nFlavour: Milder than Bafun; subtly sweet with a cleaner finish\nAppearance: Pale yellow to light orange; slightly smaller lobes\nBest use: Supporting courses where Bafun is the hero; pasta; sauces\nHK/Macau pricing: HK$600–900 per tray\n\n**Canadian Red Uni**\nOrigin: British Columbia, Canada | Peak: October–March\nFlavour: Creamy, sweet, slightly briny; excellent balance\nAppearance: Golden-orange; large lobes, slightly softer than Hokkaido\nBest use: Year-round restaurant menus, high-volume operations, hotel banquets\nHK/Macau pricing: HK$400–650 per tray — best value variety\n\n**California Red Uni**\nOrigin: Santa Barbara, California, USA | Peak: April–July\nFlavour: Rich, buttery, intensely sweet — rivals Hokkaido in peak season\nAppearance: Bright orange; plump lobes\nBest use: Premium menu positioning as 'California uni' feature\nHK/Macau pricing: HK$550–800 per tray\n\n**Chilean Uni (Loxechinus albus)**\nOrigin: Patagonia, Chile | Peak: January–May, September–December\nFlavour: Mild, clean; less intense than Japanese; good textural quality\nAppearance: Pale yellow-orange\nBest use: Cost-effective menu option; cooked applications; sauces\nHK/Macau pricing: HK$300–450 per tray",
      },
      {
        heading: "Building a Year-Round Uni Menu Strategy",
        body: "Top HK/Macau restaurants don't simply react to what's available — they design menus around known seasonal rotations 6–8 weeks in advance.\n\n**The Three-Tier Approach:**\n\nTier 1 — Hero (June–August): Feature Hokkaido Bafun AA prominently. Justify premium menu pricing. Market the variety and origin on the menu.\n\nTier 2 — Core (September–May): Build Canadian Red or California into core courses. Consistent quality at 40–50% lower cost than Hokkaido peak pricing. Doesn't compromise the experience.\n\nTier 3 — Specialty (Year-round): Maintain access to one premium 'special' variety for chef's omakase courses or limited features — Rishiri Bafun, Norwegian, or California in peak. Keeps the menu dynamic and gives regular guests something new.\n\n**Forward Contracting:**\nWork with your supplier to agree on volume and pricing 4–6 weeks ahead of seasonal transitions. This locks in supply and removes price volatility from your COGS planning. For July–August peak, contracts made in May perform significantly better than spot-buying in July.",
      },
      {
        heading: "Red Flags: Signs of Off-Season or Poor-Quality Uni",
        body: "When evaluating a delivery — regardless of season — watch for these quality failure indicators:\n\n❌ **Brownish or grey colouration** — oxidation from age or improper storage. Reject immediately.\n\n❌ **Watery, collapsed lobes** — post-spawn product or improper temperature management. Indicates the animal has already reproduced and roe quality has depleted.\n\n❌ **Ammonia or sulphur smell** — bacterial spoilage. Dangerous to serve.\n\n❌ **Excessive liquid in tray** — sign of old stock or thawed-refrozen product.\n\n❌ **Inconsistent lobe sizes in a 'premium' delivery** — indicates grade mixing. You're paying AA price for mixed grade.\n\n❌ **Supplier unable to confirm harvest date** — always ask for harvest date. If they can't provide it, reconsider the relationship.\n\nA reliable supplier will provide: country of origin, harvest date, grade certification, and cold-chain documentation with each delivery.",
      },
      {
        heading: "2026 Market Outlook: What's Driving Prices in HK & Macau",
        body: "Several factors are shaping HK/Macau uni pricing through 2026:\n\n**Hokkaido Supply Constraints**: Climate shifts are affecting Northern Hokkaido kelp forests — the primary food source for Bafun uni. Harvests from premium areas (Rishiri, Rebun Island) have been inconsistent. Buyers should expect Hokkaido AA pricing to remain elevated through 2026 peak season and lock in supplier relationships early.\n\n**Canadian Supply Strength**: BC waters have been favourable and Canadian Red availability is robust. This creates a strong value opportunity for restaurants looking to maintain uni menus without the peak Hokkaido cost.\n\n**Air Freight Cost Normalisation**: Post-pandemic air freight routes between Japan/Canada and HK have stabilised, reducing the logistics premium seen in 2022–2024. Landed cost advantages are improving.\n\n**Demand Recovery**: HK/Macau's premium dining sector is recovering strongly. Michelin restaurant reservations and hotel F&B spend are tracking above 2024 levels. Competition among buyers for premium product will keep Hokkaido peak prices firm.\n\n**Recommendation**: For restaurants planning June–August menus, begin supplier outreach now (April–May). For hotel banquet operations, Canadian Red forward contracts offer the best cost predictability.",
      },
    ],
    conclusion: "Uni seasonality isn't a complexity to manage — it's an opportunity to exploit. Restaurants that align their menus with seasonal peaks serve better product, tell better sourcing stories, and manage food costs more efficiently. The calendar above gives you the map; a reliable supplier gives you the execution.",
    ctaTitle: "Ready to Plan Your 2026 Uni Sourcing Strategy?",
    cta: "Contact Inari Global Food to discuss seasonal sourcing contracts for your restaurant or hotel. We supply Michelin-starred restaurants across Hong Kong and Macau with verified, grade-certified uni from Hokkaido, Canada, and California.",
  },
  "zh-HK": {
    title: "香港澳門海膽季節指南 2026：最佳採購時機與產品預期",
    metaDesc: "2026年香港及澳門海膽季節性供應完整指南。北海道、加拿大及加州品種的逐月採購日曆，助您把握最佳採購時機。",
    published: "2026年4月",
    category: "季節指南",
    intro: "在香港和澳門採購優質海膽從不是一年四季如一的事。七月份的卓越產品，到二月份可能變得平庸。了解季節高峰、品種輪換和供應動態，是讓您的菜單始終圍繞優質食材打造——而非只能接受任何送來的產品——的關鍵所在。本指南為餐廳採購人員和餐飲總監提供2026年實用的逐月採購路線圖。",
    sections: [
      {
        heading: "為何海膽季節性對港澳採購商至關重要",
        body: "與大多數蛋白質不同，海膽品質隨季節波動極為顯著。海膽膽黃在動物準備產卵時會膨脹變甜——產卵後，膽黃迅速減少，苦澀感大幅增加。在錯誤時機採購意味著以優質價格購入劣質產品。\n\n在香港和澳門的高端餐飲市場，三個因素使季節性尤為關鍵：\n\n**菜單信譽**：米芝蓮星級和高端餐廳無法提供淡季、水分過多的海膽而不損害聲譽。了解季節性的廚師能打造始終提供高峰產品的菜單。\n\n**價格波動**：優質海膽價格在高峰期和淡季之間波動30–50%。了解採購日曆的買家可以在低需求期間提前合約，保護食材成本率。\n\n**進口前置時間**：港澳餐廳距離大多數主要海膽產地（日本、加拿大、美國）有1–3個飛行日。了解生產高峰讓買家能提前規劃，避免空運短缺。",
      },
      {
        heading: "2026年逐月海膽供應日曆",
        body: "**一月 — 過渡月**\n供應：加拿大紅海膽（不列顛哥倫比亞省）★★★★ | 智利 ★★★ | 北海道稀少\n備注：強勁的加拿大紅海膽季節持續。巴塔哥尼亞智利海膽進入高峰品質期。北海道馬糞海膽供應有限——現有庫存價格偏高。最佳採購：加拿大紅海膽，性價比最優。\n\n**二月 — 加拿大高峰期**\n供應：加拿大紅海膽 ★★★★★ | 智利 ★★★★ | 美國東岸開始\n備注：不列顛哥倫比亞省加拿大紅海膽達到高峰奶油感。智利Loxechinus產量增加。日本進口量低——農曆新年物流中斷。農曆新年週期間需謹慎規劃庫存。\n\n**三月 — 春季過渡**\n供應：加拿大紅海膽 ★★★★ | 北海道初季 ★★ | 美國東岸 ★★★\n備注：早期北海道馬糞海膽開始出現——品質不穩定，價格投機性高。美國東岸（緬因州/新英格蘭）進入生產期。建議謹慎對待早期北海道產品；等待六月份的品質確認。\n\n**四月 — 混合市場**\n供應：加拿大紅海膽 ★★★（季末）| 北海道 ★★★ | 加州 ★★★\n備注：加拿大紅海膽隨季節結束而品質略降。加州紅海膽和紫海膽進入高峰期。北海道紫海膽（Murasaki）與馬糞海膽同步開始。適合在多個產地之間分散採購的月份。\n\n**五月 — 加州及北海道上升期**\n供應：加州 ★★★★ | 北海道紫海膽 ★★★★ | 北海道馬糞海膽 ★★★\n備注：加州紅海膽達到高峰豐富度——是北海道的絕佳替代品，性價比優異。北海道北部馬糞海膽季節建立勢頭。最佳鎖定六月至八月高峰期北海道供應商協議的時機。\n\n**六月 — 北海道高峰開始** ⭐ 最佳月份\n供應：北海道馬糞海膽AA ★★★★★ | 北海道紫海膽 ★★★★★ | 加州 ★★★★\n備注：北海道北部馬糞海膽進入黃金季節。金橙色澤，濃郁甜美，膽黃緊實。AA級供應穩定。這是米芝蓮廚師在菜單中突出海膽的時機。建議提前合約——大量採購者現在確保配額。\n\n**七月 — 高峰季節** ⭐ 最佳月份\n供應：北海道馬糞海膽AA ★★★★★ | 北海道紫海膽 ★★★★★ | 利尻馬糞海膽 ★★★★★\n備注：北海道北部絕對高峰期。各等級供應充足。利尻島馬糞海膽（被許多人認為是世界上最精緻的品種）以少量供應——頂級定價。圍繞海膽作為主角食材規劃夏季菜單。\n\n**八月 — 季末高峰**\n供應：北海道馬糞海膽 ★★★★ | 南北海道開始 ★★★ | 利尻 ★★★★\n備注：北海道北部馬糞海膽開始收尾。南北海道（襟裳）進入生產期——風味略有不同，仍然優質。八月底注意品質不穩定，部分收穫在季末趕進市場。\n\n**九月 — 秋季過渡**\n供應：南北海道 ★★★★ | 加拿大新季 ★★ | 智利回歸 ★★★\n備注：北海道重心南移。加拿大紅海膽新季以初季產品開始（脂肪含量較低，十月後逐漸提升）。智利巴塔哥尼亞產量增加。適合輪換採購的月份——分散採購管理成本。\n\n**十月 — 加拿大新季**\n供應：加拿大紅海膽新季 ★★★★ | 智利 ★★★★ | 北海道有限 ★★\n備注：加拿大紅海膽新季達到完整品質——可靠、穩定、港澳市場性價比優異。智利冬季收穫強勁。北海道供應大幅減少。開始將菜單過渡至加拿大/智利焦點。\n\n**十一月 — 加拿大及智利旺盛**\n供應：加拿大紅海膽 ★★★★★ | 智利 ★★★★★ | 挪威 ★★★\n備注：非日本品種的高峰性價比季節。挪威海膽（Strongylocentrotus droebachiensis）適合有冒險精神的菜單。加拿大紅海膽全年定價最具競爭力。大量採購和建立庫存的最佳時機。\n\n**十二月 — 年末需求高峰**\n供應：加拿大紅海膽 ★★★★ | 智利 ★★★★ | 日本新年庫存到達 ★★★\n備注：節日季需求推高所有品種定價。十月/十一月提前預訂十二月供應。日本馬糞海膽開始為新年餐廳促銷重新出現——供應有限，頂級定價。節日菜單圍繞加拿大/智利性價比規劃，以日本品種作為優質亮點。",
      },
      {
        heading: "品種概覽：採購前需了解的知識",
        body: "**北海道馬糞海膽**\n產地：日本北海道北部 | 高峰期：六月至八月\n風味：濃郁甜美、海洋感、豐富鮮味。高端餐飲的基準。\n外觀：深金橙色；緊實、輪廓清晰的膽黃\n等級：AA（色澤最鮮豔，膽黃最緊實）→ A → B\n最佳用途：Omakase菜式、刺身、優質丼飯\n港澳定價：每盒港幣900–1,400元（AA級，高峰季節）\n\n**北海道紫海膽**\n產地：日本北海道 | 高峰期：五月至八月\n風味：比馬糞海膽更溫和；微甜，回味更清爽\n外觀：淡黃至淡橙色；膽黃略小\n最佳用途：以馬糞海膽為主角時的輔助菜式；意麵；醬汁\n港澳定價：每盒港幣600–900元\n\n**加拿大紅海膽**\n產地：加拿大不列顛哥倫比亞省 | 高峰期：十月至三月\n風味：奶油感、甜美、略帶海水味；絕佳平衡\n外觀：金橙色；膽黃較大，比北海道略軟\n最佳用途：全年餐廳菜單、大量運營、酒店宴會\n港澳定價：每盒港幣400–650元——最佳性價比品種\n\n**加州紅海膽**\n產地：美國加利福尼亞州聖塔芭芭拉 | 高峰期：四月至七月\n風味：豐富、奶油感、濃郁甜美——高峰季節可媲美北海道\n外觀：亮橙色；飽滿膽黃\n最佳用途：作為「加州海膽」特色菜的高端菜單定位\n港澳定價：每盒港幣550–800元\n\n**智利海膽（Loxechinus albus）**\n產地：智利巴塔哥尼亞 | 高峰期：一月至五月，九月至十二月\n風味：溫和、清爽；不如日本品種濃烈；良好質地\n外觀：淡黃橙色\n最佳用途：經濟實惠的菜單選項；熟食應用；醬汁\n港澳定價：每盒港幣300–450元",
      },
      {
        heading: "打造全年海膽菜單策略",
        body: "香港澳門頂級餐廳不僅僅被動接受現有供應——他們提前6–8週圍繞已知的季節輪換設計菜單。\n\n**三層次策略：**\n\n第一層 — 主角（六月至八月）：突出展示北海道馬糞海膽AA級。合理化優質菜單定價。在菜單上標明品種和產地。\n\n第二層 — 核心（九月至五月）：將加拿大紅海膽或加州海膽融入核心菜式。比北海道高峰定價低40–50%的穩定品質。不影響用餐體驗。\n\n第三層 — 特色（全年）：保持獲取一種優質「特供」品種的渠道，用於廚師Omakase菜式或限量特色——利尻馬糞海膽、挪威海膽，或高峰期的加州海膽。保持菜單活力，為回頭客提供新體驗。\n\n**提前合約：**\n與供應商協商在季節過渡前4–6週確定數量和價格。這鎖定了供應，消除了食材成本規劃中的價格波動。對於七月至八月高峰期，五月簽訂的合約表現明顯優於七月現貨採購。",
      },
      {
        heading: "警示：淡季或低品質海膽的跡象",
        body: "評估交付產品時——無論季節如何——注意以下品質失敗指標：\n\n❌ **棕色或灰色色澤** — 氧化所致，表明產品老化或儲存不當。立即拒收。\n\n❌ **水分過多、塌陷的膽黃** — 產卵後的產品或溫度管理不當。表明動物已完成繁殖，膽黃品質已耗盡。\n\n❌ **氨味或硫磺味** — 細菌腐敗。提供有安全風險。\n\n❌ **托盤中液體過多** — 庫存老舊或解凍再冷凍產品的跡象。\n\n❌ **「優質」交付中膽黃大小不一** — 表明等級混合。您以AA級價格購買了混合等級產品。\n\n❌ **供應商無法確認收穫日期** — 始終詢問收穫日期。如果他們無法提供，請重新考慮合作關係。\n\n可靠的供應商每次交付時都會提供：原產國、收穫日期、等級認證和冷鏈文件。",
      },
      {
        heading: "2026年市場展望：港澳價格驅動因素",
        body: "多個因素影響著2026年港澳海膽定價：\n\n**北海道供應限制**：氣候變化影響了北海道北部的海帶森林——馬糞海膽的主要食物來源。頂級產區（利尻、禮文島）的收穫一直不穩定。採購商應預期北海道AA級定價在2026年高峰季節保持偏高，並及早鎖定供應商關係。\n\n**加拿大供應充足**：不列顛哥倫比亞省水域狀況良好，加拿大紅海膽供應充裕。這為希望在不增加北海道高峰成本的情況下維持海膽菜單的餐廳創造了強大的性價比機會。\n\n**空運成本正常化**：疫情後日本/加拿大至香港的航空貨運路線已穩定，降低了2022–2024年間出現的物流溢價。到岸成本優勢正在改善。\n\n**需求復甦**：港澳高端餐飲業正強勁復甦。米芝蓮餐廳訂座率和酒店餐飲消費均高於2024年水平。買家對優質產品的競爭將使北海道高峰期價格保持堅挺。\n\n**建議**：計劃六月至八月菜單的餐廳，現在（四月至五月）開始聯繫供應商。酒店宴會業務，加拿大紅海膽提前合約提供最佳成本可預測性。",
      },
    ],
    conclusion: "海膽季節性不是需要管理的複雜性——而是需要把握的機遇。將菜單與季節高峰對齊的餐廳能提供更好的產品、講述更好的採購故事，並更有效地管理食材成本。以上日曆為您提供地圖；可靠的供應商為您提供執行力。",
    ctaTitle: "準備好規劃您的2026年海膽採購策略了嗎？",
    cta: "聯繫稻荷環球食品，討論您餐廳或酒店的季節採購合約。我們為香港和澳門的米芝蓮星級餐廳提供來自北海道、加拿大和加州的驗證、等級認證海膽。",
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
  if (!isValidLocale(locale)) return notFound();

  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <p className="text-sm text-emerald-600 font-semibold mb-2">{c.category}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-gray-500 text-sm">{c.published}</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-8">{c.intro}</p>

            {c.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.heading}</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{section.body}</p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.ctaTitle}</h3>
              <p className="text-gray-700 text-lg mb-6">{c.cta}</p>
              <a
                href={locale === "zh-HK" ? "/zh-HK/contact" : "/en/contact"}
                className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                {locale === "zh-HK" ? "聯繫我們" : "Get in Touch"}
              </a>
            </div>

            <p className="text-gray-700 text-lg mt-8">{c.conclusion}</p>
          </div>
        </article>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
