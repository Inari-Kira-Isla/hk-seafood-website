import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Macau Seafood Sourcing Guide 2026: Sea Urchin & Salmon for Casinos, Hotels and Restaurants",
    metaDesc: "Practical sourcing guide for Macau restaurant, hotel and casino F&B operators. Sea urchin and salmon procurement, HK-Macau logistics, regulatory considerations, event volume planning, and supplier selection.",
    published: "May 2026",
    category: "Macau Guide",
    intro: "Macau's F&B economy looks like Hong Kong's but operates on different rhythms. Casino resorts drive predictable bulk demand. Junket events create overnight spikes. Cantonese fine dining sits alongside Japanese omakase, and both demand the same imported-seafood reliability. For a Macau restaurant, hotel banquet team, or casino F&B director sourcing premium sea urchin and salmon in 2026, the practical realities are different enough from Hong Kong that they justify their own playbook. This guide covers what genuinely matters: cross-border logistics from Hong Kong, regulatory checkpoints, event-volume planning, supplier evaluation, and the cost structure most Macau buyers don't see until they switch sourcing channels.",
    sections: [
      {
        heading: "Macau's Premium Seafood Demand: Who's Buying, and Why It Matters",
        body: "Macau's premium seafood demand is concentrated in five buyer categories, each with different volume patterns and quality requirements:\n\n**Integrated resort F&B (the volume tier)**\n• Casino resorts on the Cotai Strip operate 8–20 restaurants per property\n• Aggregate uni demand: 30–80 kg/week per property at peak operations\n• Aggregate salmon demand: 200–500 kg/week per property\n• Procurement is typically centralised through a single F&B director or purchasing team\n• Suppliers compete on contract pricing, consistency, and compliance documentation — not transactional price\n\n**Michelin and aspirational fine dining**\n• Concentrated in Cotai resorts and select properties on the Macau peninsula\n• Uni demand: 3–8 kg/week per restaurant, often peak-season concentrated\n• Salmon demand: 8–20 kg/week per restaurant\n• Sourcing typically emphasizes grade, traceability, and origin transparency\n• Chefs often have direct relationships with suppliers, bypassing centralized purchasing\n\n**Hotel banquet operations (wedding + corporate)**\n• Major hotels run 50–200 wedding banquets per year at 10–30 tables each\n• Salmon and uni often feature in cold appetiser courses\n• Demand is event-driven: a single weekend can require 80+ kg of salmon\n• Lead times: 4–8 weeks from booking to event delivery\n\n**Cantonese fine dining (independent + group operators)**\n• Less uni-heavy than Japanese restaurants but consistent salmon demand for sashimi platters\n• Demand: 15–40 kg salmon/week\n• Price sensitivity higher than casino F&B but quality demands remain elevated\n• Many operate centralized supply across multiple locations\n\n**Specialty retail (premium supermarkets, gift hampers)**\n• Smaller volumes but high gift-giving seasonality (CNY, Mid-Autumn, Golden Week)\n• Often source through HK-based importers rather than direct\n\n**Why this matters for sourcing:** The buyer type defines what you should optimise for. Casino F&B optimizes for documentation, consistency, and supplier financial stability. Michelin chefs optimize for grade and traceability. Wedding operations optimize for delivery reliability and lead-time accommodation. A supplier that excels at one may not be the best fit for another.",
      },
      {
        heading: "HK-Macau Logistics: The Practical Cross-Border Reality",
        body: "Most premium seafood entering Macau passes through Hong Kong first. Direct air freight to Macau International Airport exists but is limited; the HK → Macau ferry and bridge routes handle the vast majority of premium seafood movement.\n\n**Three primary logistics paths to Macau:**\n\n**Path 1: HK importer → Macau distribution (most common)**\n• Product flies into Hong Kong, clears HK customs, then crosses to Macau via Hong Kong-Zhuhai-Macau Bridge (HZMB) or Cotai ferry\n• Cold-chain handoff happens at the bridge or terminal\n• Typical added time: 4–8 hours from HK importer warehouse to Macau delivery\n• Typical added cost: HKD $8–15/kg for cross-border handling\n• Best for: buyers below 30 kg/week or those wanting flexibility\n\n**Path 2: Direct import to Macau via HK port + bonded transfer**\n• Product clears as Macau-bound at HK port, transfers under bonded movement to Macau\n• Reduces double-handling but requires Macau-side import registration\n• Typical timing: same-day HK arrival to Macau delivery is achievable\n• Best for: large casino F&B operations with weekly direct-import volumes\n\n**Path 3: Direct air freight to Macau International Airport**\n• Limited carrier options and capacity\n• Higher per-kg freight cost (typically +25–40% over HK route)\n• Useful for: emergency replenishment or single-event shipments where HK ferry timing doesn't work\n• Rarely the right choice for sustained operations\n\n**Cold-chain critical points (every Macau buyer should ask):**\n• What is the temperature range during the HK → Macau bridge crossing?\n• Where does the product sit between HK warehouse and Macau delivery, and for how long?\n• Is there a refrigerated truck on the Macau side, or is it ambient transfer?\n• What is the contingency if HZMB traffic delays a delivery by 2+ hours?\n\n**Practical timing for Macau restaurants:**\n• Order cutoff for next-day delivery: typically 14:00–16:00 HK time the day before\n• Standard delivery window: 09:00–12:00 Macau time\n• Same-day emergency delivery is possible from some HK suppliers but adds 30–50% premium",
      },
      {
        heading: "Regulatory Reality: Macau Food Safety & Import Considerations",
        body: "Macau's food safety regime is regulated primarily by the Instituto para os Assuntos Municipais (IAM, formerly IACM). Premium seafood entering Macau must comply with their import and labelling requirements.\n\n**Key regulatory checkpoints:**\n\n**Importer registration**\nAny entity importing seafood commercially into Macau must be registered with IAM. Most casino resorts and major hotels use registered importers as intermediaries rather than registering themselves. For smaller restaurants, working with a registered HK or Macau importer is the standard path.\n\n**Documentation required for entry**\n• Health/phytosanitary certificate from origin country authority (Japan, Canada, Norway, etc.)\n• Commercial invoice + packing list\n• Certificate of origin\n• For salmon: country-specific export documentation (Norwegian, Scottish, Canadian export forms)\n• Cold-chain temperature records may be requested for high-value or high-risk shipments\n\n**Macau-specific traceability expectations**\nFor casino F&B operations especially, IAM and DSEDT (gaming-related regulatory oversight) expect documented chain-of-custody from origin to plate. This is more stringent than Hong Kong's general food safety regime. Suppliers serving Macau casinos should be able to produce:\n• Full traceability documentation per batch\n• Lot-level harvest certificates\n• Cold-chain logs for the full shipping journey\n• Test results for any required safety panels (heavy metals, bacterial counts) on request\n\n**Labelling**\nProducts sold in retail or hospitality must include bilingual (Chinese + Portuguese, often plus English) labelling for: product name, origin country, net weight, harvest/processing date, and storage requirements. For B2B kitchen use, packaging requirements are less strict but origin and harvest date documentation is still expected.\n\n**Practical compliance shortcut:** Work with a HK importer that has Macau supply experience. They handle the documentation flow and ensure each shipment carries the right paperwork. Trying to self-manage Macau-side compliance from a single restaurant rarely pays off versus paying a small markup to a specialist.",
      },
      {
        heading: "Event-Driven Volume Planning: How Macau's Calendar Reshapes Sourcing",
        body: "Macau's premium seafood demand peaks around predictable events. Understanding the calendar lets you secure allocation before competitors and avoid emergency premium pricing.\n\n**Major demand-spike events:**\n\n**Chinese New Year (Jan–Feb)**\n• Wedding banquets cluster in late January and February\n• Casino F&B runs special menus emphasizing premium ingredients\n• Sea urchin and salmon demand jumps 60–120% versus baseline\n• Pre-book allocation by November of the prior year\n\n**Mid-Autumn Festival (Sep–Oct)**\n• Reunion banquets and corporate dinners increase\n• Less uni demand than CNY but elevated salmon and other sashimi\n• 30–50% demand increase\n• Pre-book by July\n\n**Golden Week (Oct 1–7)**\n• Mainland Chinese tourism peak\n• Casino F&B and high-end restaurants operate at capacity\n• Pre-book by August\n\n**Major casino events and junket tournaments**\n• Less publicly scheduled but predictable for property F&B teams\n• Some properties host 3–6 large-volume events per year\n• Event-specific allocation should be confirmed 4–6 weeks in advance\n• Suppliers value advance notice — last-minute orders strain their allocation\n\n**Wedding season (Mar–May, Oct–Dec)**\n• Steady week-over-week demand, lower per-event volume than CNY but higher frequency\n• Banquet operations should maintain rolling 60-day forecasts with suppliers\n\n**Hokkaido uni season (Jun–Aug)**\n• Premium Japanese uni constrained globally — Macau competes with HK, Tokyo, Singapore\n• Allocate by March; book final volume by April\n• Properties with no advance booking will get B-grade or off-season product at peak prices\n\n**Practical planning rhythm for Macau buyers:**\n• Quarterly: review the next 4 quarters of expected events with your supplier\n• Monthly: confirm volume for the coming month, adjust for any new bookings\n• Weekly: order normal operations volume\n• Event-specific: pre-confirm 4–8 weeks ahead with explicit volume guarantees in writing",
      },
      {
        heading: "Pricing Reality: How Macau Compares to Hong Kong",
        body: "Macau buyers often assume seafood pricing should be similar to Hong Kong's. The reality is slightly more nuanced.\n\n**Baseline pricing parity**\nFor large casino F&B operations with direct supplier relationships, Macau pricing typically matches HK landed cost within 3–5%. The volume justifies dedicated logistics, and suppliers compete aggressively for these accounts.\n\n**Mid-tier (HK importer → Macau distribution)**\nMost restaurants and hotels purchasing 5–50 kg/week of uni or 20–200 kg/week of salmon will see HK landed cost + HKD $10–18/kg cross-border markup. This is the typical structure and is generally fair given the added handling.\n\n**Small-volume (under 5 kg/week of uni)**\nSmaller restaurants face higher per-kg pricing due to logistics economics. Cross-border handling has a minimum cost regardless of volume. Below 5 kg uni or 20 kg salmon per week, the per-kg premium versus HK comparable can be 20–40% higher. Solutions:\n• Combine orders with neighbouring restaurants (group buying is workable in Cotai)\n• Bi-weekly larger orders instead of weekly smaller ones (if cold storage allows)\n• Consider a HK-importer partnership where their Macau presence covers multiple accounts\n\n**Seasonal premiums**\nMacau peak-season premiums (CNY, Mid-Autumn) typically run 5–10 percentage points above HK peak premiums, reflecting both higher demand and constrained logistics during holiday periods. Pre-booking allocation eliminates most of this premium.\n\n**Example: 2026 sea urchin pricing in Macau (mid-tier buyer)**\n• Hokkaido Bafun AA: HKD $180–235/kg (vs. HK direct $160–220/kg)\n• Hokkaido Murasaki A: HKD $90–115/kg (vs. HK direct $70–100/kg)\n• Canadian Red Sea Urchin AA: HKD $125–165/kg (vs. HK direct $110–150/kg)\n\n**Example: 2026 salmon pricing in Macau (mid-tier buyer)**\n• Norwegian sashimi-grade Atlantic salmon: HKD $115–155/kg (vs. HK $100–140/kg)\n• Scottish premium Atlantic salmon: HKD $145–195/kg (vs. HK $130–180/kg)\n• Wild Sockeye (frozen, sashimi acceptable): HKD $165–215/kg (vs. HK $150–200/kg)\n\n**The savings opportunity:** Macau restaurants buying through traditional local distributor channels often pay 40–70% above the mid-tier benchmarks above. Switching to a HK importer with Macau supply experience typically saves 15–25% with no quality compromise.",
      },
      {
        heading: "Supplier Selection: What Macau Operators Should Specifically Evaluate",
        body: "The generic supplier-evaluation criteria apply (grade documentation, cold-chain protocol, rejection policy, peak-season allocation). For Macau operations, three additional criteria deserve weight:\n\n**1. Cross-border logistics experience**\nA supplier handling 5+ Macau accounts has solved the bridge/ferry timing problems, knows which logistics partners are reliable, and has contingency plans for HZMB delays. A supplier delivering to Macau for the first time will encounter avoidable issues. Ask: how many Macau accounts do you serve? What's your average HK-to-Macau delivery time? Have you had any cold-chain incidents in the last 12 months, and how were they handled?\n\n**2. Macau-side documentation fluency**\nIAM documentation requirements differ from HK. A supplier who has navigated these requirements 100+ times will produce paperwork that clears smoothly. A supplier learning on your shipment may cause customs delays. Ask: who handles the import-side paperwork on your end? Do you have a Macau-registered freight partner, or do you use a third-party customs broker?\n\n**3. Casino/banquet event response capability**\nMacau's event-driven volume spikes test supplier capacity. A supplier that can scale 3–5x for a single event without quality compromise is rare and valuable. Ask: what's the largest single-event order you've supplied in the last 12 months? How much lead time did you need? What did you guarantee in writing?\n\n**Red flags specific to Macau sourcing:**\n• Supplier won't commit to a specific delivery window — vague \"morning delivery\" is not enough\n• No documented contingency for HZMB closure (typhoon, customs issues)\n• Pricing changes between quote and invoice without prior notice\n• Cannot produce IAM-aligned paperwork on request\n• No back-up cold storage option in Macau if delivery is delayed",
      },
      {
        heading: "Practical Starting Playbook for Macau Buyers Switching Channels",
        body: "**For a Macau restaurant moving from a local distributor to HK importer:**\n\n**Week 1–2: Audit current state**\n• Compile 4 weeks of purchase data: volume by product, prices paid, supplier(s) used\n• Document quality issues and rejection rates from the last 3 months\n• Note any compliance/documentation gaps the kitchen has worked around\n\n**Week 3: Source 2–3 candidate HK suppliers**\n• Confirm Macau supply experience\n• Request sample paperwork (harvest certificate, cold-chain log, IAM-aligned import docs)\n• Get quoted pricing on your standard product mix at your typical weekly volume\n• Confirm minimum order quantity and delivery schedule fits your operation\n\n**Week 4: Run a 2-week parallel trial**\n• Order 30–50% of your normal volume through the new supplier alongside your existing source\n• Compare: arrived grade vs. specified, cold-chain temperature on arrival, paperwork completeness, delivery timing reliability\n• Track yield (usable weight after trimming) — this often surfaces grading differences\n\n**Week 5–6: Decide and transition**\n• If trial results are positive, transition 100% of one product category first (e.g., uni only)\n• Keep your prior supplier in standby for 30–60 days as backup\n• Renegotiate with prior supplier on remaining product line — competitive pressure often improves their terms\n\n**Week 7+: Build the long-term relationship**\n• Establish quarterly review cadence\n• Pre-book your next peak season allocation\n• Set up monthly invoicing reconciliation\n• Provide feedback on quality — the relationship improves both ways with explicit communication\n\n**One thing not to skip:** Confirm in writing what happens if HZMB closes for typhoon or other reason. Macau has experienced multi-day bridge/ferry disruptions in recent years; your supplier should have a documented plan that doesn't leave you scrambling.",
      },
    ],
    conclusion: "Macau premium seafood sourcing rewards operators who treat it as a distinct market rather than an extension of Hong Kong. The cross-border logistics, regulatory documentation, and event-volume rhythms have their own grammar. Restaurants, hotels, and casino F&B teams that develop direct relationships with HK-based suppliers experienced in Macau supply consistently outperform those defaulting to local distributors — typically saving 15–25% while improving quality consistency and documentation. The market is small enough that supplier reputations are well-known to operators who ask; ask before you commit, and ask the operators around you who they trust before you trust a sales pitch.",
    ctaTitle: "Premium Seafood for Macau Operations — Inari Global Food",
    cta: "We supply sashimi-grade sea urchin and salmon to Macau casino F&B teams, hotel banquet operations, and fine dining restaurants — with cross-border logistics experience, IAM-aligned documentation, and event-volume scaling capability. Contact us to discuss your weekly volume, event calendar, and preferred origins, and we'll put together a Macau sourcing proposal within 24 hours.",
  },
  "zh-HK": {
    title: "澳門海鮮採購完全指南 2026：賭場、酒店及餐廳的海膽與三文魚採購",
    metaDesc: "澳門餐廳、酒店及賭場餐飲運營商的實用採購指南。海膽和三文魚採購、港澳物流、合規考量、活動量規劃及供應商選擇。",
    published: "2026年5月",
    category: "澳門指南",
    intro: "澳門的餐飲經濟看似類似香港，但運作節奏不同。綜合度假村帶動可預測的大量需求。博彩貴賓會活動造成短期內的需求高峰。粵式高級餐飲與日式 Omakase 並存，兩者都對進口海鮮的可靠性有同等要求。對於 2026 年在澳門採購優質海膽和三文魚的餐廳、酒店宴會團隊或賭場餐飲總監而言，實際情況與香港差異顯著，足以需要一本獨立的採購指南。本指南涵蓋真正重要的內容：來自香港的跨境物流、監管要點、活動量規劃、供應商評估，以及大多數澳門買家在轉換採購渠道前看不到的成本結構。",
    sections: [
      {
        heading: "澳門高端海鮮需求：誰在採購，為什麼這很重要",
        body: "澳門的高端海鮮需求集中在五類買家，各有不同的採購量模式和質量要求：\n\n**綜合度假村餐飲（大量級別）**\n• 路氹城的賭場度假村每處物業經營 8–20 家餐廳\n• 海膽總需求：旺季每處物業每週 30–80 公斤\n• 三文魚總需求：每處物業每週 200–500 公斤\n• 採購通常通過單一餐飲總監或採購團隊集中管理\n• 供應商在合約定價、一致性和合規文件方面競爭——而非交易性價格\n\n**米其林及進取型高級餐飲**\n• 集中在路氹城度假村及澳門半島精選物業\n• 海膽需求：每餐廳每週 3–8 公斤，常集中於旺季\n• 三文魚需求：每餐廳每週 8–20 公斤\n• 採購通常重視等級、可追溯性和產地透明度\n• 廚師常與供應商建立直接關係，繞過集中採購\n\n**酒店宴會運營（婚禮 + 企業）**\n• 主要酒店每年舉辦 50–200 場婚禮宴會，每場 10–30 圍\n• 三文魚和海膽常出現在前菜冷盤\n• 需求由活動驅動：單個週末可能需要 80+ 公斤三文魚\n• 交付期：從預訂到活動交付 4–8 週\n\n**粵式高級餐飲（獨立 + 集團運營商）**\n• 海膽用量低於日式餐廳，但三文魚刺身拼盤需求穩定\n• 需求：每週 15–40 公斤三文魚\n• 價格敏感度高於賭場餐飲，但質量要求仍保持較高\n• 許多運營商跨多個地點集中供應\n\n**特色零售（高端超市、禮品禮盒）**\n• 量較小但節日禮品季節性強（農曆新年、中秋節、黃金週）\n• 常通過港資進口商而非直接採購\n\n**為什麼這對採購重要：** 買家類型決定您應該優化的方向。賭場餐飲優化文件、一致性和供應商財務穩定性。米其林廚師優化等級和可追溯性。婚宴運營優化交付可靠性和交期靈活度。某個供應商在一種類型表現出色，未必適合另一類。",
      },
      {
        heading: "港澳物流：實際的跨境現實",
        body: "進入澳門的大多數高端海鮮先經香港。直接空運至澳門國際機場存在但有限；港珠澳大橋和氹仔渡輪路線處理大部分高端海鮮流動。\n\n**到澳門的三條主要物流路徑：**\n\n**路徑 1：港資進口商 → 澳門分銷（最常見）**\n• 產品空運至香港，清關後通過港珠澳大橋（HZMB）或氹仔渡輪過境澳門\n• 冷鏈交接在大橋或碼頭進行\n• 典型額外時間：從港資進口商倉庫到澳門交付 4–8 小時\n• 典型額外成本：跨境處理每公斤 HKD $8–15\n• 最適合：每週採購量低於 30 公斤或需靈活性的買家\n\n**路徑 2：通過香港港口直接進口至澳門 + 保稅轉運**\n• 產品在香港港口清關為澳門目的地，以保稅運輸轉至澳門\n• 減少雙重處理但需澳門方進口登記\n• 典型時間：當日香港到貨可實現澳門交付\n• 最適合：每週直接進口量大的賭場餐飲運營\n\n**路徑 3：直接空運至澳門國際機場**\n• 承運商選擇及容量有限\n• 每公斤運費更高（通常比香港路線高 +25–40%）\n• 適用於：緊急補貨或香港渡輪時間不合適的單一活動運輸\n• 對於持續運營，很少是正確選擇\n\n**冷鏈關鍵點（每個澳門買家應該詢問）：**\n• 港珠澳大橋過境期間的溫度範圍是多少？\n• 產品在香港倉庫和澳門交付之間停留在哪裡，停留多久？\n• 澳門方有冷藏卡車，還是常溫轉運？\n• 港珠澳大橋交通延遲 2+ 小時的應急方案是什麼？\n\n**澳門餐廳的實用時間表：**\n• 次日交付的訂單截止時間：通常前一天香港時間 14:00–16:00\n• 標準交付窗口：澳門時間 09:00–12:00\n• 部分香港供應商可提供當日緊急交付，但加價 30–50%",
      },
      {
        heading: "監管現實：澳門食品安全與進口考慮",
        body: "澳門食品安全主要由市政署（IAM，前身為民政總署）監管。進入澳門的高端海鮮必須符合其進口和標籤要求。\n\n**主要監管要點：**\n\n**進口商登記**\n任何商業進口海鮮進入澳門的實體必須在 IAM 登記。大多數賭場度假村和主要酒店使用已登記的進口商作為中介，而非自行登記。對於較小的餐廳，與港澳已登記的進口商合作是標準途徑。\n\n**入境所需文件**\n• 來自原產國當局的健康/植物檢疫證書（日本、加拿大、挪威等）\n• 商業發票 + 裝箱單\n• 產地證明書\n• 三文魚：國別出口文件（挪威、蘇格蘭、加拿大出口表格）\n• 高價值或高風險貨物可能要求冷鏈溫度記錄\n\n**澳門特定的可追溯性要求**\n特別是對賭場餐飲運營，IAM 和 DSEDT（博彩相關監管監督）期望從原產地到上菜的全程監管鏈文件。這比香港的一般食品安全制度更嚴格。服務澳門賭場的供應商應能提供：\n• 每批的完整可追溯性文件\n• 批次級採收證書\n• 完整運輸旅程的冷鏈日誌\n• 應要求提供所需安全項目的測試結果（重金屬、細菌計數）\n\n**標籤要求**\n零售或酒店銷售的產品必須包含雙語（中文 + 葡萄牙文，常加英文）標籤：產品名稱、產地、淨重、採收/加工日期及儲存要求。對於 B2B 廚房使用，包裝要求較寬鬆，但產地和採收日期文件仍是預期的。\n\n**實用合規捷徑：** 與具有澳門供應經驗的港資進口商合作。他們處理文件流程，確保每批貨物攜帶正確的文件。從單一餐廳自行管理澳門方合規工作很少能比支付專業人士小幅加價更划算。",
      },
      {
        heading: "活動驅動的量規劃：澳門的日曆如何重塑採購",
        body: "澳門的高端海鮮需求圍繞可預測的活動達到高峰。理解日曆讓您能在競爭對手之前確保配額，並避免緊急溢價。\n\n**主要需求高峰活動：**\n\n**農曆新年（1–2 月）**\n• 婚宴集中在 1 月下旬和 2 月\n• 賭場餐飲推出強調高級食材的特別菜單\n• 海膽和三文魚需求相比基線增加 60–120%\n• 前一年 11 月前預訂配額\n\n**中秋節（9–10 月）**\n• 團圓宴會和企業晚宴增加\n• 海膽需求低於農曆新年，但三文魚和其他刺身需求升高\n• 30–50% 需求增長\n• 7 月前預訂\n\n**黃金週（10 月 1–7 日）**\n• 內地遊客高峰\n• 賭場餐飲和高端餐廳滿負荷運營\n• 8 月前預訂\n\n**主要賭場活動和貴賓會錦標賽**\n• 公開排期較少但物業餐飲團隊可預測\n• 部分物業每年舉辦 3–6 場大量活動\n• 活動配額應提前 4–6 週確認\n• 供應商重視提前通知——臨時訂單給其配額帶來壓力\n\n**婚禮季（3–5 月，10–12 月）**\n• 每週需求穩定，單場活動量低於農曆新年但頻率更高\n• 宴會運營應與供應商保持滾動 60 天預測\n\n**北海道海膽季（6–8 月）**\n• 全球高端日本海膽供應緊張——澳門與香港、東京、新加坡競爭\n• 3 月分配；4 月前最終確定量\n• 沒有提前預訂的物業將以旺季價格獲得 B 級或淡季產品\n\n**澳門買家的實用規劃節奏：**\n• 每季度：與供應商檢視未來 4 季度的預期活動\n• 每月：確認下個月的量，根據新預訂調整\n• 每週：訂購正常運營量\n• 活動特定：提前 4–8 週預先確認，以書面形式明確量保證",
      },
      {
        heading: "定價現實：澳門與香港的比較",
        body: "澳門買家常假設海鮮定價應與香港相似。實際情況稍微微妙。\n\n**基線定價平價**\n對於擁有直接供應商關係的大型賭場餐飲運營，澳門定價通常與香港到岸成本相差 3–5% 之內。量足以證明專用物流的合理性，供應商為這些客戶積極競爭。\n\n**中間層（港資進口商 → 澳門分銷）**\n大多數每週採購 5–50 公斤海膽或 20–200 公斤三文魚的餐廳和酒店將看到香港到岸成本 + 跨境加價 HKD $10–18/公斤。這是典型結構，考慮到額外處理通常是公平的。\n\n**小量（每週海膽低於 5 公斤）**\n較小餐廳因物流經濟學面臨更高的每公斤定價。跨境處理無論量多少都有最低成本。每週低於 5 公斤海膽或 20 公斤三文魚時，每公斤相比香港可比較的溢價可達 20–40%。解決方案：\n• 與鄰近餐廳合併訂單（路氹的群體採購可行）\n• 雙週較大訂單代替每週較小訂單（如冷藏允許）\n• 考慮與港資進口商合作，其澳門業務覆蓋多個客戶\n\n**季節性溢價**\n澳門旺季溢價（農曆新年、中秋）通常比香港旺季溢價高 5–10 個百分點，反映需求增加和節假日期間物流受限。預訂配額可消除大部分溢價。\n\n**例子：2026 年澳門海膽定價（中間層買家）**\n• 北海道馬糞 AA 級：HKD $180–235/公斤（vs. 香港直接 $160–220/公斤）\n• 北海道紫海膽 A 級：HKD $90–115/公斤（vs. 香港直接 $70–100/公斤）\n• 加拿大紅海膽 AA 級：HKD $125–165/公斤（vs. 香港直接 $110–150/公斤）\n\n**例子：2026 年澳門三文魚定價（中間層買家）**\n• 挪威刺身級大西洋三文魚：HKD $115–155/公斤（vs. 香港 $100–140/公斤）\n• 蘇格蘭優質大西洋三文魚：HKD $145–195/公斤（vs. 香港 $130–180/公斤）\n• 野生紅鮭（冷凍，刺身可接受）：HKD $165–215/公斤（vs. 香港 $150–200/公斤）\n\n**節省機會：** 通過傳統本地分銷渠道採購的澳門餐廳通常比上述中間層基準高 40–70%。轉換到具有澳門供應經驗的港資進口商通常可節省 15–25%，且無質量妥協。",
      },
      {
        heading: "供應商選擇：澳門運營商應特別評估什麼",
        body: "通用供應商評估標準（等級文件、冷鏈協議、拒收政策、旺季配額）適用。對於澳門運營，三項額外標準值得重視：\n\n**1. 跨境物流經驗**\n處理 5+ 澳門客戶的供應商已解決大橋/渡輪時間問題，了解哪些物流合作夥伴可靠，並對港珠澳大橋延誤有應急計劃。首次向澳門交付的供應商會遇到可避免的問題。詢問：您服務多少個澳門客戶？您的港澳平均交付時間是多少？過去 12 個月有任何冷鏈事件嗎，如何處理？\n\n**2. 澳門方文件流程熟練度**\nIAM 文件要求不同於香港。處理過 100+ 次這些要求的供應商會產生順利清關的文件。在您的貨物上學習的供應商可能導致清關延誤。詢問：您方面誰處理進口方文件？您是否有澳門登記的貨運合作夥伴，還是使用第三方報關行？\n\n**3. 賭場/宴會活動響應能力**\n澳門的活動驅動量高峰測試供應商容量。能在不犧牲質量的情況下將容量擴大 3–5 倍以應對單個活動的供應商稀少且寶貴。詢問：過去 12 個月您供應的最大單一活動訂單是多少？需要多少交付期？書面保證了什麼？\n\n**澳門採購特有的危險信號：**\n• 供應商不承諾具體交付窗口——含糊的「上午交付」不夠\n• 對港珠澳大橋封閉（颱風、海關問題）無記錄的應急計劃\n• 報價與發票之間定價變動，無事先通知\n• 應要求無法產生 IAM 對齊的文件\n• 如交付延誤，澳門無備用冷藏儲存選項",
      },
      {
        heading: "澳門買家轉換渠道的實用入門指南",
        body: "**對於從本地經銷商轉移到港資進口商的澳門餐廳：**\n\n**第 1–2 週：審計當前狀態**\n• 編譯 4 週的採購數據：按產品的量、支付的價格、使用的供應商\n• 記錄過去 3 個月的質量問題和拒收率\n• 注意廚房已繞過的合規/文件差距\n\n**第 3 週：尋找 2–3 個候選港資供應商**\n• 確認澳門供應經驗\n• 索取樣本文件（採收證書、冷鏈日誌、IAM 對齊的進口文件）\n• 獲取您標準產品組合在典型每週量下的報價\n• 確認最低訂量和交付計劃適合您的運營\n\n**第 4 週：運行 2 週並行試驗**\n• 通過新供應商訂購正常量的 30–50%，與現有來源並行\n• 比較：到貨等級 vs. 規定、到貨冷鏈溫度、文件完整性、交付時間可靠性\n• 追蹤產出率（修整後的可用重量）——這常揭示分級差異\n\n**第 5–6 週：決定和過渡**\n• 如試驗結果積極，先過渡一個產品類別 100%（例如僅海膽）\n• 將前供應商保留為備用 30–60 天\n• 與前供應商重新談判剩餘產品線——競爭壓力常改善其條款\n\n**第 7 週及之後：建立長期關係**\n• 建立季度檢視節奏\n• 預訂下一個旺季配額\n• 設置每月發票對賬\n• 提供質量反饋——明確溝通使雙方關係改善\n\n**不可跳過的一項：** 書面確認港珠澳大橋因颱風或其他原因封閉時的處理。澳門近年來經歷過多日大橋/渡輪中斷；您的供應商應有不會讓您手忙腳亂的記錄計劃。",
      },
    ],
    conclusion: "澳門高端海鮮採購獎勵將其視為獨立市場而非香港延伸的運營商。跨境物流、監管文件和活動量節奏有其自己的語法。與具有澳門供應經驗的港資供應商建立直接關係的餐廳、酒店和賭場餐飲團隊，始終優於默認本地經銷商的——通常節省 15–25%，同時改善質量一致性和文件。市場足夠小，供應商聲譽對詢問的運營商眾所周知；在承諾之前詢問，並詢問您周圍的運營商他們信任誰，然後再相信銷售說辭。",
    ctaTitle: "澳門運營商的高端海鮮——稻荷環球食品",
    cta: "我們向澳門賭場餐飲團隊、酒店宴會運營和高級餐廳供應刺身級海膽和三文魚——具備跨境物流經驗、IAM 對齊文件及活動量擴展能力。聯繫我們討論您的每週量、活動日曆和偏好產地，我們將在 24 小時內提供澳門採購方案。",
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
