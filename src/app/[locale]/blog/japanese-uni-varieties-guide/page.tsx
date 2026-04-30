import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Japanese Sea Urchin Varieties Compared: Bafun, Murasaki, and Ezo for HK Buyers",
    metaDesc: "Complete comparison of Japanese sea urchin varieties for Hong Kong and Macau restaurant buyers. Bafun vs Murasaki vs Ezo uni — flavour profiles, sourcing seasons, grades, and pricing guide.",
    published: "April 2026",
    category: "Product Mastery",
    intro: "Not all Japanese sea urchin is the same — and the difference between a Hokkaido Bafun AA at peak season and a mid-grade Murasaki at the wrong time of year is not subtle. For restaurant buyers and F&B directors in Hong Kong and Macau sourcing premium uni, understanding variety distinctions is foundational knowledge that directly affects menu quality, pricing strategy, and supplier negotiations.",
    sections: [
      {
        heading: "The Three Major Japanese Uni Varieties",
        body: "Japan exports three primary sea urchin species to Hong Kong and Macau's premium dining market. Each has a distinct flavour profile, seasonal window, and best-use application.\n\n**1. Bafun Uni (馬糞海膽) — Hemicentrotus pulcherrimus**\nThe gold standard. Named for its resemblance to horse dung (an unfortunate name for a sublime product), Bafun uni is the variety featured in Michelin kitchens and omakase menus across HK and Macau. The roe is a deep golden-orange, intensely sweet with layered umami, and firm enough to hold its shape on sushi rice or as a standalone plating element.\n\nProduction is concentrated in Northern Hokkaido, with the finest product coming from Rishiri and Rebun Islands. Peak season runs June through August, when cold Pacific waters and abundant kelp produce roe at maximum fat content and sweetness.\n\n**2. Murasaki Uni (紫海膽) — Anthocidaris crassispina**\nThe supporting player that earns its place. Murasaki translates to 'purple' — the spines are deep purple-black, making identification immediate. The roe is lighter in colour (pale to medium yellow), smaller in lobe size, and milder in flavour than Bafun. Sweetness is present but restrained; the finish is cleaner and less lingering.\n\nMurasaki shares Hokkaido's production calendar, with a similar June–August peak. It is often positioned as a value alternative to Bafun — priced 25–35% lower — but skilled chefs use it deliberately for its different flavour register, particularly in applications where Bafun's intensity would overpower.\n\n**3. Ezo Bafun Uni (蝦夷馬糞海膽) — Strongylocentrotus intermedius**\nThe premium northern variety. Ezo (蝦夷) refers to ancient Hokkaido in Japanese, but in seafood trade, it specifically denotes Strongylocentrotus intermedius — a larger, colder-water Bafun found in Northern Hokkaido and the islands beyond. Ezo Bafun produces the largest, most intensely flavoured roe of any Japanese variety.\n\nRishiri Island Ezo Bafun is considered by many industry insiders to be the finest uni in the world. Supply is extremely limited — small artisanal fisheries, short season, and significant export allocation to Japanese domestic top restaurants before overseas buyers. When available in HK/Macau, pricing is at the top of the market.",
      },
      {
        heading: "Flavour Profiles: A Practical Comparison",
        body: "Understanding flavour helps buyers match variety to application — and avoid misrepresenting product on menus.\n\n**Bafun Uni Flavour Map**\n- Sweetness: ★★★★★ (intense, primary)\n- Umami: ★★★★★ (deep, oceanic, long finish)\n- Creaminess: ★★★★ (fat content drives texture)\n- Bitterness: ★☆ (minimal in peak season; increases off-season)\n- Aftertaste: Long, lingering oceanic sweetness\n- Temperature note: Best served at 10–12°C; warming destroys the delicate fat structure\n\n**Murasaki Uni Flavour Map**\n- Sweetness: ★★★ (present, lighter than Bafun)\n- Umami: ★★★ (clean, not aggressive)\n- Creaminess: ★★★ (lighter mouthfeel)\n- Bitterness: ★★ (slightly more perceptible than Bafun)\n- Aftertaste: Short to medium, clean\n- Temperature note: Slightly more forgiving at room temperature than Bafun\n\n**Ezo Bafun Uni Flavour Map**\n- Sweetness: ★★★★★ (deepest of all varieties)\n- Umami: ★★★★★ (maximum intensity, mineral notes)\n- Creaminess: ★★★★★ (highest fat content; almost buttery)\n- Bitterness: ★☆ (virtually zero at peak season)\n- Aftertaste: Very long; complex minerality that develops on the palate\n- Temperature note: Most sensitive to temperature — serve immediately at 8–10°C\n\n**Practical implication**: In a tasting menu context, Bafun works as a hero ingredient in multiple courses. Murasaki is better deployed in applications where uni is a supporting flavour (pasta sauce, compound butter, emulsions). Ezo Bafun is best served with minimal intervention — a squeeze of lemon, a touch of soy, or absolutely nothing.",
      },
      {
        heading: "Grading System: What AA, A, and B Actually Mean",
        body: "Japan uses an industry-standard grading system that applies to all varieties, but buyers must understand that grades are variety-specific — an AA Murasaki is not equivalent to an AA Bafun.\n\n**Grade AA (最高等級)**\n- Colour: Most vivid, saturated golden-orange (Bafun) or pale gold (Murasaki)\n- Lobes: Intact, well-defined, no visible breakage\n- Size: Full-size lobes filling the tray\n- Freshness: Harvest within 48 hours typical; supplied with alum (明礬) in smaller quantities\n- Use: Sashimi presentation, sushi rice, standalone plating\n- HK/Macau pricing: HK$900–1,400 (Bafun AA); HK$600–900 (Murasaki AA)\n\n**Grade A (一等)**\n- Colour: Good colour, slightly less saturated than AA\n- Lobes: Mostly intact; some minor fragmentation acceptable\n- Size: Full to slightly variable\n- Use: Composed dishes, pasta, sauces, rice dishes where full lobe integrity isn't critical\n- HK/Macau pricing: HK$650–900 (Bafun A); HK$450–650 (Murasaki A)\n\n**Grade B (二等)**\n- Colour: Acceptable but inconsistent within tray\n- Lobes: Fragmented; broken pieces common\n- Use: Sauces, emulsions, cooked applications only\n- HK/Macau pricing: HK$400–600 (Bafun B); HK$300–420 (Murasaki B)\n\n**Alum (明礬) vs. Non-Alum (無添加)**\nTraditionally, uni is treated with alum (potassium alum) to firm the lobes and extend shelf life. Non-alum uni (無添加) is increasingly available and preferred by fine dining buyers — it has a shorter shelf life (24–48h vs 3–5 days) but a purer, less astringent flavour. Non-alum commands a significant premium and should always be specified when ordering for top-tier service.",
      },
      {
        heading: "Sourcing Seasons and Production Regions",
        body: "Geography determines quality. Northern Hokkaido's cold, nutrient-dense waters produce fundamentally superior uni to southern regions — but availability windows differ.\n\n**Northern Hokkaido (北海道北部)** — Best for Bafun and Ezo Bafun\nPeak: June–August (Bafun AA peak)\nKey areas: Rishiri Island, Rebun Island, Wakkanai coast\nNotes: These areas produce the highest-grade Bafun. Cold Pacific currents and dense kelp forest lead to slower growth and higher roe quality. Supply is intentionally limited by fishing quota.\n\n**Southern Hokkaido (北海道南部)** — Bafun and Murasaki\nPeak: August–October (later than Northern)\nKey areas: Erimo Peninsula, Hidaka coast\nNotes: Good quality, slightly lower price point than Northern Hokkaido. A reliable September–October supply bridge when Northern season is winding down.\n\n**Aomori and Iwate (青森・岩手)** — Murasaki and some Bafun\nPeak: May–July\nNotes: Pacific coast production. Good-value Murasaki from this region is commonly available in HK/Macau trade at competitive pricing. Less prestigious than Hokkaido but still solid quality for restaurant applications.\n\n**Kyushu (九州)** — Murasaki dominant\nPeak: Spring (March–May)\nNotes: Warmer water, shorter season, milder flavour. Less common in HK premium trade but available from some importers as budget option.\n\n**For HK/Macau buyers**, the practical decision tree is:\n1. Is this a hero ingredient (omakase, premium sashimi)? → Northern Hokkaido Bafun AA only\n2. Is this a supporting ingredient (cooked applications, supporting courses)? → Murasaki A or B from any reliable Hokkaido source\n3. Is this the most premium possible offer (special event, VIP table)? → Inquire specifically for Rishiri or Rebun Island Ezo Bafun",
      },
      {
        heading: "Reading a Supplier Tray: Inspection Checklist",
        body: "When a delivery arrives, inspect before signing. A 90-second inspection prevents expensive returns and menu failures.\n\n**Colour Check (30 seconds)**\n✅ Bafun AA: Deep golden-orange, vivid, consistent across tray\n✅ Murasaki: Pale to medium yellow, consistent (lighter is normal for this variety)\n❌ Any brown, grey, or greenish tones → oxidation or post-spawn product → reject\n❌ Colour dramatically inconsistent within one tray → grade mixing → reject or negotiate\n\n**Lobe Integrity (20 seconds)**\n✅ Lobes hold their shape when tray is gently tilted\n✅ Defined edges, not melting or blurring into each other\n❌ Collapsed, spread flat, or watery → improper temperature or old stock → reject\n❌ More than 20% broken for an 'A' or higher grade claim → reject or renegotiate grade\n\n**Smell Test (10 seconds)**\n✅ Clean, oceanic, sweet marine smell — similar to fresh sea breeze\n✅ Very mild briney note acceptable\n❌ Any ammonia → bacterial spoilage → reject\n❌ Sulphur or rotten egg → reject\n❌ Overly fishy → past peak freshness → reject\n\n**Documentation Check (30 seconds)**\nRequest from every delivery:\n- Origin certificate (prefecture and specific region if AA grade)\n- Harvest date (not pack date — harvest date)\n- Grade certification from processor\n- Cold-chain log showing temperature during transit\n- Alum/non-alum labelling\n\nA reliable supplier provides these without being asked. If a supplier resists documentation requests, reconsider the relationship.",
      },
      {
        heading: "Pricing Reference: HK & Macau Market Rates (2026)",
        body: "Pricing fluctuates with season and exchange rates. The following ranges represent April 2026 wholesale reference pricing for the HK/Macau market. Peak season (June–August) prices for Bafun will be 20–40% higher than off-season.\n\n**Bafun Uni — Hokkaido**\nAA Non-Alum (無添加): HK$1,100–1,500 per tray (250g)\nAA Standard: HK$900–1,200 per tray\nA Grade: HK$650–900 per tray\nB Grade: HK$450–650 per tray\n\n**Ezo Bafun — Rishiri/Rebun (when available)**\nAA Non-Alum: HK$1,400–1,900+ per tray (limited supply, negotiated)\n\n**Murasaki Uni — Hokkaido**\nAA: HK$600–850 per tray\nA Grade: HK$450–600 per tray\nB Grade: HK$300–420 per tray\n\n**Murasaki Uni — Aomori/Iwate**\nAA: HK$500–700 per tray\nA Grade: HK$380–520 per tray\n\n**Pricing tips for buyers:**\n- Volume commitments unlock better pricing. Agreeing to 10+ trays per week typically yields 8–12% discount from spot pricing.\n- Forward contracts for peak season (June–August) signed in April–May lock in supply and often current pricing, protecting against in-season demand spikes.\n- Ask your supplier to separate alum and non-alum options — mixing them on a menu without disclosure is a quality and credibility risk.\n- Price per gram is more reliable than price per tray when comparing suppliers, as net roe weight varies by tray format (100g, 250g, 500g).",
      },
    ],
    conclusion: "Bafun, Murasaki, and Ezo Bafun are not interchangeable — and treating them as such is a sourcing mistake that shows up on the plate. The best restaurant buyers in HK and Macau work with suppliers who understand variety distinctions, can specify by region and grade, and provide documentation. That relationship pays dividends every service.",
    ctaTitle: "Source Premium Japanese Uni for Your HK or Macau Restaurant",
    cta: "Inari Global Food supplies Michelin-starred restaurants and hotel F&B operations across Hong Kong and Macau with grade-certified Hokkaido uni — Bafun, Murasaki, and Ezo Bafun. Contact us to discuss variety specifications, seasonal sourcing windows, and volume pricing.",
  },
  "zh-HK": {
    title: "日本海膽品種比較：馬糞海膽、紫海膽與蝦夷馬糞海膽港澳採購指南",
    metaDesc: "香港及澳門餐廳採購商的日本海膽品種完整比較指南。馬糞海膽vs紫海膽vs蝦夷馬糞海膽——風味特點、採購季節、等級及定價參考。",
    published: "2026年4月",
    category: "產品專業知識",
    intro: "日本海膽並非全都相同——高峰季節的北海道AA級馬糞海膽，與錯季的中等紫海膽之間的差距並不微妙。對於在香港和澳門採購頂級海膽的餐廳買家和餐飲總監而言，了解品種差異是直接影響菜單品質、定價策略和供應商談判的基礎知識。",
    sections: [
      {
        heading: "三大主要日本海膽品種",
        body: "日本向香港和澳門高端餐飲市場出口三種主要海膽品種。每種品種擁有獨特的風味特點、季節窗口和最佳應用場景。\n\n**1. 馬糞海膽 — Hemicentrotus pulcherrimus**\n黃金標準。因外形酷似馬糞而得名（對於如此上乘的食材而言是個不幸的名字），馬糞海膽是港澳米芝蓮廚房和Omakase菜單中的主角品種。膽黃呈深金橙色，甜味濃郁、層次豐富，回味悠長，質地緊實，足以在壽司飯上或作為獨立擺盤元素保持形狀。\n\n生產主要集中在北海道北部，其中利尻島和禮文島出產最優質的產品。高峰季節為六月至八月，此時寒冷的太平洋海水和豐富的海帶使膽黃脂肪含量和甜度達到最高值。\n\n**2. 紫海膽 — Anthocidaris crassispina**\n稱職的配角。紫海膽（Murasaki意為「紫色」）的棘刺呈深紫黑色，易於辨識。膽黃顏色較淺（淡黃至中黃色），葉片較小，風味比馬糞海膽更溫和。甜味雖存在但較為收斂；餘味更清爽短暫。\n\n紫海膽與馬糞海膽共享北海道的生產日曆，高峰期同樣為六月至八月。通常被定位為馬糞海膽的性價比替代品——定價低25–35%——但有經驗的廚師會有意識地使用它獨特的風味特點，特別是在馬糞海膽的濃度可能過於強勁的場合。\n\n**3. 蝦夷馬糞海膽 — Strongylocentrotus intermedius**\n頂級北方品種。「蝦夷」（Ezo）在日語中是對古代北海道的稱謂，但在海鮮貿易中，它特指Strongylocentrotus intermedius——一種體型更大、生長於更寒冷海域的馬糞海膽，分布於北海道北部及其北部島嶼。蝦夷馬糞海膽在所有日本品種中產出最大、風味最濃郁的膽黃。\n\n利尻島蝦夷馬糞海膽被業界許多人士認為是世界上最精緻的海膽。供應量極為有限——小型手工漁業、短暫的季節，且大量出口配額優先分配給日本國內頂級餐廳，然後才輪到海外買家。在港澳市場出現時，定價處於市場頂端。",
      },
      {
        heading: "風味特點：實用比較",
        body: "了解風味有助於採購商將品種與應用場景相匹配——並避免在菜單上錯誤描述產品。\n\n**馬糞海膽風味圖**\n- 甜度：★★★★★（濃郁，主導風味）\n- 鮮味：★★★★★（深邃，海洋感，餘味悠長）\n- 奶油感：★★★★（脂肪含量決定質地）\n- 苦澀感：★☆（高峰季節極低；淡季增加）\n- 餘味：悠長、縈繞的海洋甜味\n- 溫度建議：最佳享用溫度10–12°C；溫度過高會破壞精緻的脂肪結構\n\n**紫海膽風味圖**\n- 甜度：★★★（有甜味，比馬糞海膽輕盈）\n- 鮮味：★★★（清爽，不過於強烈）\n- 奶油感：★★★（口感更為輕盈）\n- 苦澀感：★★（比馬糞海膽略明顯）\n- 餘味：短至中等，清爽\n- 溫度建議：比馬糞海膽略能承受室溫\n\n**蝦夷馬糞海膽風味圖**\n- 甜度：★★★★★（所有品種中最深邃）\n- 鮮味：★★★★★（最高強度，帶有礦物質氣息）\n- 奶油感：★★★★★（最高脂肪含量；近乎奶油質感）\n- 苦澀感：★☆（高峰季節幾乎為零）\n- 餘味：非常悠長；在口腔中發展出複雜的礦物質感\n- 溫度建議：對溫度最敏感——立即在8–10°C享用\n\n**實際應用**：在品鑒菜單中，馬糞海膽適合在多道菜式中作為主角食材。紫海膽更適合部署在海膽作為輔助風味的場合（意麵醬、複合黃油、乳化醬汁）。蝦夷馬糞海膽最適合以最少的處理方式呈現——一擠檸檬汁、少許醬油，或什麼都不加。",
      },
      {
        heading: "等級制度：AA、A和B的實際含義",
        body: "日本使用行業標準等級制度，適用於所有品種，但採購商必須了解等級是品種特定的——AA級紫海膽並不等同於AA級馬糞海膽。\n\n**AA級（最高等級）**\n- 色澤：最鮮豔、飽和的金橙色（馬糞海膽）或淡金色（紫海膽）\n- 膽黃：完整、輪廓清晰，無明顯破損\n- 尺寸：充滿托盤的全尺寸膽黃\n- 新鮮度：通常採收後48小時內；少量添加明礬（食品級）\n- 用途：刺身擺盤、壽司飯、獨立呈現\n- 港澳定價：港幣900–1,400元（馬糞AA）；港幣600–900元（紫海膽AA）\n\n**A級（一等）**\n- 色澤：色澤良好，略不如AA飽和\n- 膽黃：大多完整；少量碎片可接受\n- 尺寸：全尺寸至略有差異\n- 用途：組合菜式、意麵、醬汁、米飯菜式，全膽黃完整性非關鍵時\n- 港澳定價：港幣650–900元（馬糞A）；港幣450–650元（紫海膽A）\n\n**B級（二等）**\n- 色澤：可接受但托盤內不一致\n- 膽黃：碎片化；常見破碎片段\n- 用途：僅限醬汁、乳化醬、熟食應用\n- 港澳定價：港幣400–600元（馬糞B）；港幣300–420元（紫海膽B）\n\n**明礬（明礬）vs 無添加**\n傳統上，海膽以明礬（硫酸鉀鋁）處理以使膽黃更緊實並延長保質期。無添加（無添加明礬）海膽日益受到高端餐飲採購商的青睞——保質期較短（24–48小時對比3–5天），但風味更純正，澀味更少。無添加產品售價大幅溢價，訂購頂級服務時應始終指明。",
      },
      {
        heading: "採購季節與產區",
        body: "地理位置決定品質。北海道北部寒冷、營養豐富的海域產出的海膽從根本上優於南部地區——但供應窗口有所不同。\n\n**北海道北部** — 最佳馬糞海膽和蝦夷馬糞海膽產區\n高峰期：六月至八月（馬糞AA高峰期）\n主要產區：利尻島、禮文島、稚內海岸\n備注：這些地區產出最高等級的馬糞海膽。寒冷的太平洋洋流和濃密的海帶林導致生長速度更慢、膽黃品質更高。供應量受漁業配額的刻意限制。\n\n**北海道南部** — 馬糞海膽和紫海膽\n高峰期：八月至十月（比北部晚）\n主要產區：襟裳岬、日高海岸\n備注：品質良好，價格略低於北海道北部。北部季節收尾時可靠的九月至十月供應橋梁。\n\n**青森・岩手** — 紫海膽為主，部分馬糞海膽\n高峰期：五月至七月\n備注：太平洋沿岸生產。來自此地區的高性價比紫海膽在港澳貿易中常以有競爭力的定價供應。不如北海道聲望高，但對餐廳應用而言品質仍屬上乘。\n\n**九州** — 以紫海膽為主\n高峰期：春季（三月至五月）\n備注：水溫較高，季節較短，風味較淡。在港澳高端貿易中不太常見，但部分進口商提供作為預算選項。\n\n**港澳採購商的實際決策樹**：\n1. 這是主角食材（Omakase、頂級刺身）嗎？→ 僅限北海道北部馬糞海膽AA\n2. 這是輔助食材（熟食應用、配套菜式）嗎？→ 來自可靠北海道產地的紫海膽A或B\n3. 這是最頂級的選擇（特別活動、VIP餐桌）嗎？→ 專門詢問利尻島或禮文島蝦夷馬糞海膽",
      },
      {
        heading: "解讀供應商托盤：驗貨清單",
        body: "收到貨品時，簽收前先進行檢查。90秒的檢查可以防止昂貴的退貨和菜單失誤。\n\n**色澤檢查（30秒）**\n✅ 馬糞海膽AA：深金橙色，鮮豔，托盤內色澤一致\n✅ 紫海膽：淡至中黃色，一致（此品種顏色較淺屬正常）\n❌ 任何棕色、灰色或綠色色調 → 氧化或產卵後產品 → 拒收\n❌ 同一托盤內色澤差異顯著 → 等級混合 → 拒收或協商\n\n**膽黃完整性（20秒）**\n✅ 輕微傾斜托盤時膽黃保持形狀\n✅ 輪廓清晰，沒有與其他膽黃融合或模糊\n❌ 塌陷、攤平或水分過多 → 溫度不當或舊庫存 → 拒收\n❌ AA或更高等級宣稱中超過20%破損 → 拒收或重新協商等級\n\n**氣味測試（10秒）**\n✅ 清爽、海洋感、甜美的海鮮氣味——類似新鮮海風\n✅ 非常輕微的海水氣息可以接受\n❌ 任何氨味 → 細菌腐敗 → 拒收\n❌ 硫磺味或臭雞蛋味 → 拒收\n❌ 過於腥味 → 超過新鮮高峰 → 拒收\n\n**文件核查（30秒）**\n每次交付時索取：\n- 原產地證書（AA級需指明縣份和具體地區）\n- 採收日期（不是包裝日期——是採收日期）\n- 加工商出具的等級認證\n- 運輸期間的溫度冷鏈記錄\n- 明礬/無添加標示\n\n可靠的供應商無需詢問即會主動提供這些文件。如果供應商抗拒文件要求，請重新考慮合作關係。",
      },
      {
        heading: "定價參考：2026年港澳市場行情",
        body: "定價隨季節和匯率波動。以下區間為港澳市場2026年4月批發參考定價。高峰季節（六月至八月）馬糞海膽價格將比淡季高出20–40%。\n\n**馬糞海膽 — 北海道**\nAA無添加：每盒（250克）港幣1,100–1,500元\nAA標準：每盒港幣900–1,200元\nA級：每盒港幣650–900元\nB級：每盒港幣450–650元\n\n**蝦夷馬糞海膽 — 利尻/禮文（有供應時）**\nAA無添加：每盒港幣1,400–1,900元以上（供應有限，需協商）\n\n**紫海膽 — 北海道**\nAA：每盒港幣600–850元\nA級：每盒港幣450–600元\nB級：每盒港幣300–420元\n\n**紫海膽 — 青森/岩手**\nAA：每盒港幣500–700元\nA級：每盒港幣380–520元\n\n**採購商定價建議：**\n- 量大折扣。同意每週採購10盒以上通常可獲得低於現貨定價8–12%的折扣。\n- 四月至五月簽訂的高峰季節（六月至八月）提前合約，可鎖定供應，通常也能鎖定現行定價，防範旺季需求飆升。\n- 要求供應商分開明礬和無添加選項——在菜單上不作說明地混用是品質和信譽風險。\n- 與其比較每盒價格，不如比較每克價格，因為淨膽黃重量因托盤規格（100克、250克、500克）而異。",
      },
    ],
    conclusion: "馬糞海膽、紫海膽和蝦夷馬糞海膽並不可以互換——將它們一視同仁是在菜單上會顯露出來的採購錯誤。港澳最優秀的餐廳採購商與了解品種差異、能按地區和等級指定產品、並提供文件記錄的供應商合作。這種關係在每一次服務中都有所回報。",
    ctaTitle: "為您的港澳餐廳採購頂級日本海膽",
    cta: "稻荷環球食品為香港和澳門的米芝蓮星級餐廳及酒店餐飲業務提供等級認證的北海道海膽——馬糞海膽、紫海膽和蝦夷馬糞海膽。聯繫我們，討論品種規格、季節採購窗口和批量定價。",
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
