import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "The Restaurant Buyer's Checklist for Premium Salmon in Hong Kong & Macau",
    metaDesc: "10-point checklist for sourcing sashimi-grade premium salmon in Hong Kong and Macau. Quality markers, supplier evaluation, cold chain standards, and pricing benchmarks for F&B professionals.",
    published: "April 2026",
    category: "Buying Guide",
    intro: "Premium salmon sourcing in Hong Kong and Macau is straightforward when you know exactly what to check. F&B directors and restaurant buyers who rely on 'it looks fresh' or 'the price is right' consistently end up with inconsistent product, higher waste rates, and occasional guest complaints. This 10-point checklist cuts through ambiguity and gives you a structured framework to evaluate every delivery, qualify every supplier, and protect your margins.",
    sections: [
      {
        heading: "Why Salmon Sourcing Gets It Wrong in HK & Macau",
        body: "The Hong Kong and Macau market is awash with salmon marketed as 'sashimi-grade' that ranges from genuinely premium to borderline acceptable. The confusion stems from three structural issues:\n\n**No regulated grade standard**: Unlike some markets, HK/Macau has no enforced regulatory definition of 'sashimi-grade.' It's a marketing term. Any supplier can use it. The buyer's evaluation is the only quality gate.\n\n**Long cold-chain from origin**: Premium salmon destined for HK/Macau travels from Norway, Scotland, Chile, Canada, or Tasmania — often 18–36+ hours from harvest to plate. Every inefficiency in that cold chain compounds quality degradation.\n\n**Volume pressure**: Hotel F&B teams managing banquets for 500+ guests face relentless cost pressure. This incentivises compromising on quality standards that restaurant-scale buyers enforce more carefully.\n\nThe checklist below applies at every scale — whether you're ordering 5kg for a weekend service or 200kg for a banquet.",
      },
      {
        heading: "The 10-Point Salmon Buyer's Checklist",
        body: "**✅ Point 1 — Colour**\nWhat to look for: Vibrant, even coral-orange to deep pink. No grey patches, no white striping beyond natural fat lines, no browning at the edges.\nRed flags: Dull brown-grey tones, uneven colouring across the fillet, bloodshot patches near the bone line.\nNote: Farmed Atlantic salmon (the market standard in HK/Macau) runs coral-orange. Wild Pacific varieties (King, Sockeye) run deeper red. Know what you ordered.\n\n**✅ Point 2 — Fat Marbling**\nWhat to look for: Even white fat lines running perpendicular to the muscle fibres. Fat should be creamy white, not yellow. Even distribution signals steady feed and healthy growth conditions.\nRed flags: Thick uneven fat deposits (overfeeding), yellow-tinged fat (age or oxidation), insufficient marbling (lean fish = dry texture = poor sashimi).\nNote: Atlantic salmon from Norway/Scotland has been bred for consistent fat marbling. This is a major reason it dominates the HK/Macau sashimi market.\n\n**✅ Point 3 — Flesh Firmness**\nWhat to look for: When pressed gently with a fingertip, flesh springs back immediately. Fillet holds shape when lifted. No separation between muscle segments (gaping).\nRed flags: Flesh that retains an indentation, doesn't spring back, or feels mushy. Any gaping between muscle segments indicates age or mishandling.\nNote: Gaping often develops from rough handling during filleting or from fish being stressed before harvest. A reliable supplier ensures proper handling protocols.\n\n**✅ Point 4 — Smell**\nWhat to look for: Clean, faintly oceanic aroma. Should smell like the sea — not fishy, not sour, not ammonia.\nRed flags: Any sour, ammonia, or sulphur notes. Even a mild 'off' smell indicates the fish is past its prime for raw service. The smell test is non-negotiable.\nNote: Well-handled fresh salmon at proper cold-chain temperature (0–2°C) has almost no smell. The more noticeable the smell, the older the product.\n\n**✅ Point 5 — Eyes (Whole Fish Only)**\nWhat to look for: Clear, bright, slightly convex eyes. No cloudiness, no sunken eyes.\nRed flags: Cloudy, sunken, or dried-out eyes. A reliable indicator of age in whole fish.\nNote: Most HK/Macau restaurants receive salmon as fillets. If you ever receive whole fish, the eyes give you an instant quality read before filleting.\n\n**✅ Point 6 — Temperature at Delivery**\nWhat to look for: Core temperature between 0°C and 2°C. Verify with a probe thermometer on every significant delivery.\nRed flags: Core temp above 4°C at delivery. This indicates cold chain failure somewhere between origin and your kitchen.\nNote: If the delivery temp is wrong, reject it — regardless of how good the fish looks. The bacterial load at 6°C+ grows exponentially and you cannot verify the full exposure timeline.\n\n**✅ Point 7 — Harvest Date Documentation**\nWhat to look for: Supplier provides the harvest/slaughter date with every delivery. Calculate days from harvest: sashimi-grade service ideally within 7 days for Atlantic salmon, 5 days for Pacific varieties.\nRed flags: Supplier unable or unwilling to provide harvest date. 'Best before' dates only — without a harvest date, you cannot calculate real freshness.\nNote: A trustworthy supplier always has harvest date documentation because it's part of their traceability obligations. If they can't provide it, walk away.\n\n**✅ Point 8 — Origin Certification**\nWhat to look for: Country of origin + farm/region clearly labelled. For premium product: ASC (Aquaculture Stewardship Council) certification, Norwegian Seafood Council registration, or GlobalG.A.P. certification.\nRed flags: Vague 'imported Atlantic salmon' with no country of origin. No certification documentation on request.\nNote: For Macau gaming resort operations specifically, origin documentation is non-negotiable for food safety audit compliance (see our Macau Gaming Compliance guide).\n\n**✅ Point 9 — Packaging and Presentation**\nWhat to look for: Vacuum-packed or modified atmosphere packaging (MAP). No excess liquid pooling in the package. Packaging intact — no air pockets, no tears.\nRed flags: Broken vacuum seal, excessive liquid (drip loss), or fish delivered in open trays with ice only. Open-tray icing is fine for same-day service fish, not for premium sashimi.\nNote: Premium suppliers use MAP packaging that extends shelf life without compromising freshness. If your supplier ships premium salmon in open trays with ice, ask why.\n\n**✅ Point 10 — Price Benchmarking**\nWhat to look for: Pricing that reflects current market rates. Norwegian Atlantic (farmed, sashimi-grade) wholesale in HK/Macau: approximately HK$85–130/kg depending on cut and volume. Scottish, Tasmanian, and premium 'fjord trout' variants command 10–25% premium.\nRed flags: Pricing significantly below market (quality will follow). Pricing 40%+ above market without a clear origin/certification justification.\nNote: Prices move with Norwegian Krone exchange rates and air freight costs. A reliable supplier will explain pricing changes proactively rather than quietly adjusting invoices.",
      },
      {
        heading: "Supplier Evaluation Framework",
        body: "Beyond the delivery-by-delivery checklist, evaluate your salmon supplier on these criteria quarterly:\n\n**Responsiveness**: Can they accommodate urgent orders with 24–48 hours notice? Premium HK/Macau restaurant operations sometimes need to scale volume up or down based on reservation patterns.\n\n**Consistency**: Track your rejection rate. For premium sashimi-grade salmon, your target rejection rate should be under 3%. If you're rejecting 5–10% of deliveries, switch suppliers.\n\n**Transparency**: Will they let you visit their facilities or connect you with their origin farms? The best suppliers are proud of their supply chain and welcome scrutiny.\n\n**Flexibility of cuts**: Can they provide specific cuts your kitchen needs — pin-boned, skin-on/off, specific fillet thickness? A generic wholesaler says 'this is what we have.' A premium partner accommodates your spec.\n\n**Market intelligence**: Does your supplier proactively share relevant information — seasonal price moves, supply disruptions, new varieties available? This kind of intelligence helps you plan menus and purchasing more effectively.\n\n**Problem resolution**: What happened the last time a delivery was substandard? Did they replace immediately and without argument? That's the standard you should expect.",
      },
      {
        heading: "Cut Guide: Matching the Right Salmon to the Right Application",
        body: "Different applications require different cuts. Buying the wrong cut wastes money:\n\n**Sashimi / Sushi**: Skin-off, pin-boned fillet. Cut from the centre of the fillet (the 'J-cut' or 'D-cut') for most even thickness and highest portion yield. Avoid tail sections for sashimi — too thin and inconsistent.\n\n**Aburi (torched) nigiri**: Belly (harasu) sections. Higher fat content creates excellent caramelisation. Belly sections are often underpriced relative to their suitability for this application.\n\n**Carpaccio / crudo**: Paper-thin slices require firm flesh. Request the firmest, freshest possible — within 5 days of harvest. Side fillets work better than belly for consistent slicing.\n\n**Salmon donburi / poke**: Any sashimi-grade cut works — use centre cuts for premium service, blended trim and belly for value applications.\n\n**Smoked salmon (in-house)**: Belly sections and tail cuts are acceptable starting material — smoking compensates for thickness variation. Source from the same quality tier as your sashimi salmon; the provenance story carries through.\n\n**Banquet / cooked applications**: For hot preparations (gravlax, baked, poached), A-grade rather than AA-grade is appropriate and represents better value. Reserve sashimi-grade for raw applications.",
      },
      {
        heading: "Volume Purchasing Strategy for Hotel F&B Operations",
        body: "Hotels and large F&B operations face a different purchasing challenge than à la carte restaurants: volume, consistency, and cost control across multiple outlets simultaneously.\n\n**Weekly Standing Orders**: Negotiate weekly standing orders with volume commitments in exchange for price stability. A standing order of 30–50kg/week gives you negotiating leverage to lock in pricing for 4–8 weeks.\n\n**Dual Supplier Strategy**: Maintain two qualified suppliers — primary (80% of volume) and backup (20%). Run your backup monthly to keep them current on your standards. When your primary has supply issues, the backup transition is seamless.\n\n**Grade Tiering by Outlet**: Not every outlet needs the highest-grade salmon. Your pool bar or café can use A-grade for cooked applications at 20–30% cost savings. Reserve AA-grade (sashimi-grade) for your flagship restaurant and sushi bar.\n\n**Yield Tracking**: Calculate your fillet yield percentage after portioning. Target: 85–92% yield from a skin-off, pin-boned fillet. If you're consistently getting 78–80%, your portioner needs calibration or your supplier is delivering inconsistent fillet sizes.\n\n**Monthly Supplier Review**: Meet with your primary supplier monthly. Review: rejection rate, average delivery temperature, yield performance, and upcoming seasonal pricing changes. This meeting pays for itself.",
      },
      {
        heading: "HK & Macau Regulatory Requirements",
        body: "Salmon imported into Hong Kong and Macau must comply with:\n\n**Hong Kong Centre for Food Safety (CFS) Requirements**:\n- Importer must be registered with CFS Food Business Registry\n- Salmon must originate from approved countries/regions\n- Country of origin documentation required at import\n- Chilled raw fish must be maintained at ≤4°C during transport and storage\n\n**Macau Food Safety Requirements (ASAE)**:\n- All seafood must be accompanied by health certificates from country of origin\n- Temperature log documentation for chilled products\n- Business license (牌照) to sell seafood in catering operations\n- For gaming resort operations: additional internal HACCP documentation required\n\n**For your supplier checklist**:\n- Confirm they are an HKSAR-registered importer\n- Request health certificates with each large delivery\n- Keep temperature log records for 3+ months (CFS inspection standard)\n- Ensure your kitchen's receiving temperature logs are maintained\n\nNon-compliance risks include fines, temporary closure orders, and — for Macau gaming licensees — potential licence implications.",
      },
      {
        heading: "2026 Salmon Sourcing Outlook for HK & Macau",
        body: "**Norwegian Atlantic Salmon**: Remains the dominant variety in HK/Macau. Norwegian production is recovering after 2024's ISA (Infectious Salmon Anaemia) outbreaks in selected farms. Quality is solid; pricing has stabilised after elevated 2024 rates. Recommended as core sourcing.\n\n**Scottish Atlantic**: Commands a 15–20% premium over Norwegian. Demand for provenance stories continues to grow among HK's Michelin segment. Worth maintaining access for premium menu positioning.\n\n**Tasmanian Atlantic**: Growing in popularity among HK's high-end segment for its clean Pacific waters story. Air freight from Australia adds cost; evaluate against menu pricing.\n\n**Chilean Atlantic**: Most cost-effective option for cooked applications. Not typically positioned for raw sashimi in premium HK/Macau contexts. Strong for hotel banquet cooked preparations.\n\n**King Salmon (Chinook)**: New Zealand King (Ōra King) maintains premium positioning. Limited availability in HK/Macau; works as a special feature rather than core menu item. Pricing HK$180–250/kg+.\n\n**Overall forecast**: Pricing stability expected through Q2 2026. Watch for Norwegian Krone volatility and air freight cost changes through Q3–Q4. Buyers who lock in Q2 volume deals will be better positioned for the year-end price spike.",
      },
    ],
    conclusion: "Salmon sourcing consistency is a discipline, not luck. Restaurants and hotels that systematically apply this checklist — at delivery, quarterly with suppliers, and monthly on pricing — run tighter operations, serve better product, and build supplier relationships that weather supply disruptions. The checklist above takes 10 minutes per delivery. The quality it protects is worth far more.",
    ctaTitle: "Looking for a Reliable Premium Salmon Supplier in Hong Kong or Macau?",
    cta: "Contact Inari Global Food to discuss your salmon sourcing requirements. We work with restaurants and hotels across Hong Kong and Macau, supplying verified, documented sashimi-grade salmon with full cold-chain traceability.",
  },
  "zh-HK": {
    title: "港澳餐廳採購人員優質三文魚採購清單",
    metaDesc: "香港及澳門採購刺身級優質三文魚的10點清單。品質標準、供應商評估、冷鏈標準及餐飲專業人員定價基準。",
    published: "2026年4月",
    category: "採購指南",
    intro: "當您確切知道需要檢查什麼時，香港和澳門的優質三文魚採購就變得簡單明了。依靠「看起來很新鮮」或「價格合適」的餐飲總監和餐廳採購人員，往往會遇到品質不穩定、廢料率偏高以及偶發的客訴問題。這份10點清單消除了模糊性，為您提供結構化框架，以評估每次交付、審核每位供應商，並保護您的利潤。",
    sections: [
      {
        heading: "為何港澳三文魚採購常常出錯",
        body: "香港和澳門市場充斥著以「刺身級」推銷的三文魚，品質從真正優質到勉強可接受不等。這種混亂源於三個結構性問題：\n\n**缺乏規範等級標準**：與某些市場不同，港澳對「刺身級」沒有強制執行的監管定義。這只是一個營銷術語。任何供應商都可以使用它。買家的評估是唯一的品質關卡。\n\n**從產地開始的漫長冷鏈**：前往港澳的優質三文魚來自挪威、蘇格蘭、智利、加拿大或塔斯馬尼亞——從收穫到上桌往往需要18–36個小時以上。冷鏈中的每一個低效環節都會加速品質降低。\n\n**數量壓力**：管理500+人宴會的酒店餐飲團隊面臨無情的成本壓力。這促使妥協於品質標準，而餐廳規模的買家通常執行得更為嚴格。\n\n以下清單適用於各種規模——無論您是為週末服務訂購5公斤，還是為宴會訂購200公斤。",
      },
      {
        heading: "三文魚採購人員10點清單",
        body: "**✅ 第1點 — 色澤**\n尋找：鮮豔、均勻的珊瑚橙至深粉紅色。無灰色斑塊，除天然脂肪線外無白色條紋，邊緣無褐變。\n紅旗警示：暗淡的棕灰色調、魚柳上不均勻的色澤、骨線附近的血絲斑點。\n注意：養殖大西洋三文魚（港澳市場標準）呈珊瑚橙色。野生太平洋品種（帝王鮭、紅鮭）呈更深的紅色。了解您訂購的是哪種。\n\n**✅ 第2點 — 油花紋理**\n尋找：與肌肉纖維垂直分佈的均勻白色脂肪線。脂肪應呈奶油白色，而非黃色。均勻分佈表明穩定的飼料和健康的生長條件。\n紅旗警示：厚重不均的脂肪沉積（過度餵食）、黃色脂肪（老化或氧化）、油花不足（瘦魚=口感乾燥=刺身品質差）。\n注意：來自挪威/蘇格蘭的大西洋三文魚經過選育，具有穩定的油花紋理。這是其主導港澳刺身市場的主要原因之一。\n\n**✅ 第3點 — 肉質緊實度**\n尋找：用指尖輕壓時，魚肉立即彈回。舉起魚柳時保持形狀。肌肉段之間無分離（裂縫）。\n紅旗警示：保留指印的魚肉、不彈回或感覺軟爛。肌肉段之間的任何裂縫都表明產品老化或處理不當。\n注意：裂縫通常在剔片過程中粗暴處理或收穫前魚受到壓迫時產生。可靠的供應商確保適當的處理程序。\n\n**✅ 第4點 — 氣味**\n尋找：清爽、淡淡的海洋氣息。應聞起來像大海——不腥、不酸、無氨味。\n紅旗警示：任何酸味、氨味或硫磺氣味。即使是輕微的「異味」也表明魚已超過生食服務的最佳狀態。氣味測試不可妥協。\n注意：在適當冷鏈溫度（0–2°C）下處理良好的新鮮三文魚幾乎沒有氣味。氣味越明顯，產品越老。\n\n**✅ 第5點 — 眼睛（僅適用於整魚）**\n尋找：清澈、明亮、略微凸出的眼睛。無混濁，眼睛無凹陷。\n紅旗警示：混濁、凹陷或乾燥的眼睛。整魚老化的可靠指標。\n注意：港澳大多數餐廳接收的是魚柳。如果您曾接收整魚，眼睛在剔片前即可給您即時品質判斷。\n\n**✅ 第6點 — 交付時的溫度**\n尋找：核心溫度在0°C至2°C之間。每次重要交付時用探針溫度計驗證。\n紅旗警示：交付時核心溫度超過4°C。這表明從產地到您廚房的某處出現冷鏈中斷。\n注意：如果交付溫度不對，拒收——無論魚看起來多麼好。在6°C+時細菌負荷呈指數增長，您無法驗證完整的暴露時間線。\n\n**✅ 第7點 — 收穫日期文件**\n尋找：供應商每次交付時提供收穫/宰殺日期。計算從收穫起的天數：大西洋三文魚的刺身級服務理想上在7天內，太平洋品種在5天內。\n紅旗警示：供應商無法或不願提供收穫日期。僅有「最佳食用日期」——沒有收穫日期，您無法計算真實新鮮度。\n注意：值得信賴的供應商始終擁有收穫日期文件，因為這是其可追溯性義務的一部分。如果他們無法提供，請另尋合作。\n\n**✅ 第8點 — 產地認證**\n尋找：原產國及農場/地區清晰標示。對於優質產品：ASC（水產養殖管理委員會）認證、挪威海產局登記，或GlobalG.A.P.認證。\n紅旗警示：模糊的「進口大西洋三文魚」而無原產國。應要求提供認證文件。\n注意：特別對於澳門博彩度假村的運營，原產地文件對食品安全審計合規是不可或缺的（請參閱我們的澳門博彩業合規指南）。\n\n**✅ 第9點 — 包裝和外觀**\n尋找：真空包裝或氣調包裝（MAP）。包裝內無多餘液體積聚。包裝完整——無氣泡、無破損。\n紅旗警示：真空密封破損、液體過多（滴液損失），或魚僅以開放托盤加冰交付。開放托盤加冰適合當日服務的魚，不適合優質刺身。\n注意：優質供應商使用MAP包裝，在不影響新鮮度的情況下延長保質期。如果您的供應商以開放托盤加冰運送優質三文魚，請詢問原因。\n\n**✅ 第10點 — 價格基準**\n尋找：反映當前市場價格的定價。港澳挪威大西洋（養殖、刺身級）批發：根據切割和數量約港幣85–130元/公斤。蘇格蘭、塔斯馬尼亞和優質「峽灣鱒魚」品種高出10–25%。\n紅旗警示：明顯低於市場的定價（品質也會相應低下）。在沒有明確產地/認證理由的情況下，定價高出市場40%+。\n注意：價格隨挪威克朗匯率和空運成本波動。可靠的供應商會主動解釋定價變化，而不是悄悄調整發票。",
      },
      {
        heading: "供應商評估框架",
        body: "除了逐次交付清單外，每季度按以下標準評估您的三文魚供應商：\n\n**響應速度**：他們能在24–48小時通知內應對緊急訂單嗎？港澳高端餐廳運營有時需要根據訂座情況調整數量。\n\n**一致性**：追蹤您的拒收率。對於優質刺身級三文魚，目標拒收率應低於3%。如果您拒收5–10%的交付，請更換供應商。\n\n**透明度**：他們是否允許您參觀其設施或與其原產地農場聯繫？最優秀的供應商為其供應鏈感到自豪，並歡迎審查。\n\n**切割靈活性**：他們能否提供您廚房所需的特定切割——去骨、帶皮/去皮、特定魚柳厚度？普通批發商說「這就是我們有的。」優質合作夥伴會根據您的規格做出調整。\n\n**市場情報**：您的供應商是否主動分享相關信息——季節性價格走勢、供應中斷、新品種上市？這類情報幫助您更有效地規劃菜單和採購。\n\n**問題解決**：上次交付不達標時發生了什麼？他們是否立即且毫無爭議地更換？這是您應該期望的標準。",
      },
      {
        heading: "切割指南：為正確的應用匹配正確的三文魚",
        body: "不同的應用需要不同的切割方式。購買錯誤的切割會浪費金錢：\n\n**刺身/壽司**：去皮、去骨魚柳。從魚柳中央切割（「J切」或「D切」）以獲得最均勻的厚度和最高的份量產出。刺身避免使用尾部——太薄且不一致。\n\n**炙燒（Aburi）壽司**：腹部（haracut）部位。較高的脂肪含量產生優異的焦糖化效果。腹部部位相對其在此應用中的適用性往往定價偏低。\n\n**三文魚薄切/義式生魚片**：紙薄切片需要緊實的魚肉。要求盡可能緊實、新鮮——收穫後5天內。側面魚柳比腹部更適合一致切片。\n\n**三文魚丼/夏威夷海鮮拌飯**：任何刺身級切割均可——優質服務用中央切割，平價應用用混合邊角料和腹部。\n\n**煙燻三文魚（自製）**：腹部和尾部切割是可接受的起始材料——煙燻補償了厚度變化。從與刺身三文魚相同的品質層次採購；產地故事貫穿始終。\n\n**宴會/熟食應用**：對於熱食（鹽漬三文魚、烤制、水煮），A級而非AA級更為適合，且性價比更高。將刺身級保留用於生食應用。",
      },
      {
        heading: "酒店餐飲業的大量採購策略",
        body: "酒店和大型餐飲業與點菜餐廳面臨不同的採購挑戰：在多個餐廳同時進行數量、一致性和成本控制。\n\n**每週固定訂單**：以數量承諾換取價格穩定性，談判每週固定訂單。每週30–50公斤的固定訂單為您提供談判槓桿，以鎖定4–8週的定價。\n\n**雙供應商策略**：維持兩家合格供應商——主要供應商（80%數量）和備用供應商（20%）。每月使用您的備用供應商，使其保持對您標準的了解。當主要供應商出現供應問題時，備用轉換是無縫的。\n\n**按部門分級**：並非每個部門都需要最高等級的三文魚。您的泳池吧或咖啡廳可以使用A級進行熟食應用，節省20–30%的成本。將AA級（刺身級）保留給您的旗艦餐廳和壽司吧。\n\n**產出追蹤**：計算分切後的魚柳產出百分比。目標：去皮去骨魚柳的產出率為85–92%。如果您持續獲得78–80%，您的分切師需要校準，或者您的供應商交付的魚柳尺寸不一致。\n\n**每月供應商審查**：每月與主要供應商會面。審查：拒收率、平均交付溫度、產出表現和即將到來的季節性定價變化。這個會議物有所值。",
      },
      {
        heading: "港澳法規要求",
        body: "進口到香港和澳門的三文魚必須符合：\n\n**香港食物安全中心（CFS）要求**：\n- 進口商必須在CFS食物業登記冊註冊\n- 三文魚必須來自批准的國家/地區\n- 進口時需要原產國文件\n- 冷藏生魚在運輸和儲存期間必須保持在≤4°C\n\n**澳門食品安全要求（ASAE）**：\n- 所有海鮮必須附有原產國的衛生證書\n- 冷藏產品的溫度記錄文件\n- 在餐飲業務中銷售海鮮的營業執照（牌照）\n- 對於博彩度假村的運營：需要額外的內部HACCP文件\n\n**供應商清單**：\n- 確認他們是香港特區的註冊進口商\n- 每次大量交付時索取衛生證書\n- 保存3個月以上的溫度記錄（CFS檢查標準）\n- 確保維護您廚房的接收溫度記錄\n\n不合規的風險包括罰款、臨時關閉令——以及對於澳門博彩牌照持有人的潛在牌照影響。",
      },
      {
        heading: "2026年港澳三文魚採購展望",
        body: "**挪威大西洋三文魚**：仍是港澳主導品種。挪威產量正在從2024年部分農場的ISA（傳染性三文魚貧血症）疫情中恢復。品質穩固；定價在2024年偏高後趨於穩定。建議作為核心採購。\n\n**蘇格蘭大西洋**：比挪威高出15–20%的溢價。在港澳米芝蓮細分市場中，對產地故事的需求持續增長。值得保持獲取渠道以進行高端菜單定位。\n\n**塔斯馬尼亞大西洋**：在港澳高端細分市場越來越受歡迎，憑藉其清潔太平洋水域的故事。從澳大利亞的空運增加了成本；根據菜單定價評估。\n\n**智利大西洋**：熟食應用最具成本效益的選擇。在港澳高端背景下通常不定位於生食刺身。適用於酒店宴會熟食準備。\n\n**帝王鮭（奇努克鮭）**：新西蘭帝王鮭（Ōra King）保持高端定位。在港澳供應有限；作為特色菜而非核心菜單項目效果更好。定價港幣180–250元/公斤以上。\n\n**整體預測**：2026年第二季度預計定價穩定。關注第三至四季度的挪威克朗波動和空運成本變化。鎖定第二季度數量協議的買家將在年末價格上漲中處於更有利地位。",
      },
    ],
    conclusion: "三文魚採購的一致性是一種紀律，而非運氣。系統性地應用這份清單的餐廳和酒店——在交付時、每季度與供應商、每月在定價上——運營更緊密，提供更好的產品，並建立能夠抵禦供應中斷的供應商關係。以上清單每次交付花費10分鐘。它所保護的品質遠不止於此。",
    ctaTitle: "正在尋找香港或澳門可靠的優質三文魚供應商？",
    cta: "聯繫稻荷環球食品，討論您的三文魚採購需求。我們與香港和澳門的餐廳和酒店合作，提供具有完整冷鏈可追溯性的經過驗證、有文件記錄的刺身級三文魚。",
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
