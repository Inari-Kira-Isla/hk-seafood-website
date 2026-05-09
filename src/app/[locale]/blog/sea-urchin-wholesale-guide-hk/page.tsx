import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin Wholesale Guide for Hong Kong Restaurants 2026",
    metaDesc: "Complete guide to buying sea urchin wholesale in Hong Kong. Pricing tiers, minimum orders, supplier evaluation, contract terms, and cost-savings analysis for restaurants and hotels.",
    published: "May 2026",
    category: "Buying Guide",
    intro: "Wholesale sea urchin buying in Hong Kong is a fundamentally different game from retail or distributor purchasing. Done right, it can cut your per-kg cost by 30–45% while giving you access to fresher product and stronger quality guarantees. Done wrong, it exposes you to supply inconsistency, quality failures, and import paperwork you weren't expecting. This guide walks through everything a Hong Kong restaurant buyer needs to know: pricing tiers, minimum orders, supplier evaluation, contract structure, and how to build a wholesale relationship that holds up through peak seasons.",
    sections: [
      {
        heading: "Wholesale vs. Distributor: Understanding the Cost Structure",
        body: "Most Hong Kong restaurants buy sea urchin through local distributors or wet-market suppliers. It's convenient — they handle import, customs clearance, cold-chain, and delivery — but that convenience has a price.\n\n**Typical cost breakdown (per kg, sashimi-grade uni):**\n\n| Channel | Landed Cost | Your Price | Markup |\n|---|---|---|---|\n| Direct wholesale | $90–120 HKD | $90–120 HKD | 0% |\n| Importer/broker | $90–120 HKD | $130–160 HKD | 25–40% |\n| Local distributor | $90–120 HKD | $170–220 HKD | 50–80% |\n| Wet market | $90–120 HKD | $200–280 HKD | 80–130% |\n\n**The math for a restaurant buying 10 kg/week:**\n• Distributor: $2,000 HKD/week → $104,000/year\n• Direct wholesale: $1,200 HKD/week → $62,400/year\n• Annual saving: **$41,600 HKD**\n\nThe trade-off: direct wholesale requires more planning (lead times, minimum orders, import documentation), but for restaurants ordering consistently above 8–10 kg/week, the economics are compelling.\n\n**When to stay with a distributor:**\n• Volume under 5 kg/week (wholesale minimums may not work)\n• No capacity for import paperwork\n• Highly variable demand (banquet-driven, not consistent)\n• Testing a new menu item before committing to volume",
      },
      {
        heading: "2026 Wholesale Pricing: What to Expect",
        body: "Hong Kong wholesale uni pricing varies significantly by origin, season, and grade. These are 2026 benchmark ranges based on direct-import pricing:\n\n**Hokkaido Bafun (Japanese sea urchin, peak quality)**\n• AA-grade: HKD $160–220/kg (June–August peak: $200–260)\n• A-grade: HKD $100–140/kg\n• Minimum order: typically 5–10 kg per delivery\n• Freshness guarantee: 48 hours post-harvest\n\n**Hokkaido Murasaki (Japanese sea urchin, volume variety)**\n• A-grade: HKD $70–100/kg\n• B-grade: HKD $40–60/kg\n• Minimum order: 10 kg per delivery\n• Wider availability, more consistent supply\n\n**Canadian Red Sea Urchin (British Columbia)**\n• AA-grade: HKD $110–150/kg\n• A-grade: HKD $75–105/kg\n• Minimum order: 5–10 kg per delivery\n• Peak quality: October–May (fills the Hokkaido winter gap perfectly)\n• MSC certified: meets ESG requirements\n\n**California Red Sea Urchin (Santa Barbara)**\n• AA-grade: HKD $120–160/kg\n• A-grade: HKD $80–110/kg\n• Minimum order: 5 kg per delivery\n• Best: December–April\n\n**Price modifiers to understand:**\n• Airfreight surcharge: $15–25/kg depending on origin and route\n• Minimum viable order: under 5 kg, airfreight cost makes wholesale uneconomical\n• Peak holiday premium: CNY, Christmas, and summer Hokkaido season add 20–35%\n• Currency fluctuation: JPY/HKD and CAD/HKD rates affect JPY and CAD-denominated product\n\n**Negotiation reality:** Suppliers discount for volume commitments. A restaurant committing to 15 kg/week vs. one ordering ad hoc can negotiate 8–12% lower base pricing plus better delivery priority during peak season.",
      },
      {
        heading: "Minimum Order Quantities: What's Actually Required",
        body: "Minimum order requirements (MOQ) are driven by logistics economics, not supplier preference. Understanding them helps you structure orders efficiently.\n\n**Typical MOQs by supply structure:**\n\n**Direct from Japanese producers (via agent):**\n• Minimum: 10–20 kg per shipment\n• Frequency: weekly or bi-weekly\n• Lead time: 5–7 days from order to Hong Kong delivery\n• Best for: restaurants doing 15+ kg/week\n\n**Hong Kong-based specialist importers:**\n• Minimum: 5 kg per delivery\n• Frequency: twice-weekly or weekly\n• Lead time: 2–3 days\n• Best for: restaurants doing 5–15 kg/week\n\n**Consolidated wholesale (buying alongside other restaurants):**\n• Minimum: 2–3 kg per delivery\n• Frequency: twice-weekly\n• Slightly higher per-kg cost than direct import, but accessible\n• Best for: smaller restaurants that need flexibility\n\n**Practical thresholds for Hong Kong restaurants:**\n\n| Weekly Volume | Recommended Channel | Expected Saving vs. Retail |\n|---|---|---|\n| Under 3 kg | Wet market / distributor | N/A |\n| 3–7 kg | Consolidated wholesale | 20–30% |\n| 7–15 kg | Specialist importer | 30–40% |\n| 15+ kg | Direct producer (via agent) | 35–45% |\n\n**Combining orders:** Some restaurants form informal buying groups with nearby restaurants to collectively meet higher MOQs. This is common in the Wan Chai and Causeway Bay dining clusters — practical and legal, just requires coordination.",
      },
      {
        heading: "Supplier Evaluation: 7 Questions to Ask Before Committing",
        body: "Not every supplier that claims to offer 'wholesale' pricing delivers genuine value. Ask these seven questions before signing any agreement:\n\n**1. Can you provide harvest certificates for each shipment?**\nEvery shipment should include a document showing: harvest date, producer name/license number, harvest location, and species. Japanese shipments should have Hokkaido Prefecture traceability documentation. Canadian shipments should show BC fishery license number. If they can't provide this, walk away.\n\n**2. What is your cold-chain protocol?**\nThe answer should include: harvest-to-packing temperature (2–4°C), icing standard during transport, and time-from-packing to delivery. Any gap in this chain degrades quality. Ask to see temperature logs from a recent shipment.\n\n**3. What is your rejection and replacement policy?**\nA credible wholesale supplier will offer credit or replacement within 24–48 hours if product doesn't meet the agreed grade. Vague answers like \"we'll see\" are a red flag. Get the policy in writing.\n\n**4. Can I visit your facility or meet your producer?**\nFor high-volume relationships, reputable suppliers welcome this. Even a video call with the producer demonstrates transparency. A supplier who deflects this question is hiding something about their supply chain.\n\n**5. How do you handle peak-season allocation?**\nHokkaido uni is constrained in June–August. Ask how they prioritise customers when supply is tight. Suppliers who commit volume to you in writing before the season are vastly preferable to those who say \"we'll try our best.\"\n\n**6. What are your standard contract terms?**\nLook for: grade specification (not vague 'premium' language), pricing structure (fixed base + seasonal adjustment), delivery frequency, minimum order, and termination notice. 30-day notice termination is standard.\n\n**7. Who else do you supply in Hong Kong?**\nA supplier who serves other reputable restaurants (even if they don't name them directly) demonstrates market validation. A supplier with no verifiable references is a risk.",
      },
      {
        heading: "Structuring Your Wholesale Contract",
        body: "Verbal agreements don't protect you when a shipment arrives wrong at 7am on a Friday before a fully-booked service. A written contract, even a simple one, creates accountability.\n\n**Essential contract elements:**\n\n**Grade specification**\nNever accept 'premium' or 'high quality.' Specify the Japanese grading standard: AA, A, or B, and define the proportion of each acceptable in a delivery (e.g., 'minimum 90% AA-grade lobes per tray, maximum 10% A-grade acceptable').\n\n**Pricing structure**\nFixed base price per kg, plus documented seasonal adjustment mechanism. Example: 'Base price HKD $140/kg, adjusted quarterly by mutual agreement based on market conditions. Maximum quarterly change: 15%.'\n\n**Delivery schedule**\nSpecify days, time windows, and delivery method (direct to kitchen, lobby pickup, etc.). Include what happens if they miss a delivery window — compensation or priority next-delivery is reasonable.\n\n**Freshness guarantee**\nSpecify maximum harvest-to-delivery time: '48 hours for AA-grade, 96 hours for A-grade.' Any delivery exceeding this should trigger rejection rights.\n\n**Rejection protocol**\nDefine clearly: (1) how to reject a delivery (written notice within 2 hours of receipt), (2) evidence required (photos), and (3) resolution timeline (replacement within 24 hours or credit note within 48 hours).\n\n**Minimum order commitment**\nProtects the supplier's logistics economics. Typical: weekly minimum of 8–10 kg. Include a force majeure clause for slow periods (seasonal menu change, renovation, etc.).\n\n**Term and notice period**\nInitial term of 3–6 months is common, with 30-day rolling renewal. 30-day written notice to terminate.\n\n**A simple starting point:** Before you have a lawyer draft a full contract, a clear email chain establishing the above terms — with acknowledgement from both sides — creates a useful paper trail and often suffices for smaller relationships.",
      },
      {
        heading: "Building Your Wholesale Supply Schedule",
        body: "Consistency is the primary advantage of wholesale over ad-hoc buying. Here's how to build a schedule that works:\n\n**Step 1: Calculate your actual weekly volume**\nTrack your uni usage for 4 consecutive weeks. Include wastage (typically 8–12% for prep loss). This is your baseline volume.\n\n**Step 2: Build in safety stock**\nAdd 15–20% above your baseline for: unexpected rush bookings, special events, or quality rejections that reduce usable product.\n\n**Step 3: Set your delivery schedule**\nFor most Hong Kong restaurants:\n• 2 deliveries/week (e.g., Monday + Thursday) is the sweet spot\n• Avoids refrigerator stress from single large weekly deliveries\n• Allows you to adjust volume based on weekend performance\n• Keeps product fresh (never >3–4 days in your refrigerator)\n\n**Step 4: Plan around your busiest periods**\n• Pre-order for Chinese New Year 6–8 weeks in advance\n• Book Hokkaido allocation for June–August by March\n• For Macau-based restaurants: pre-order for major gaming events and Chinese public holidays\n\n**Step 5: Establish a communication rhythm**\n• Weekly: confirm order volume for the coming week by Wednesday\n• Monthly: review grade performance, pricing, and delivery consistency\n• Quarterly: renegotiate pricing, plan seasonal menu changes\n\n**Practical reorder trigger:** Set a simple rule — when your refrigerator stock drops to 2-day supply, trigger reorder. This prevents emergency purchases at retail prices and keeps your supplier relationship predictable.",
      },
      {
        heading: "Import Documentation: What You Actually Need to Handle",
        body: "For restaurants buying through a Hong Kong importer or specialist wholesaler, import documentation is handled for you. For restaurants buying directly from Japanese or Canadian producers, you or your freight agent handles it. Here's what's involved:\n\n**Key documents for Japanese sea urchin import:**\n• Commercial invoice (supplier-generated)\n• Packing list\n• Certificate of origin (Japanese export certificate)\n• Health/phytosanitary certificate from Japanese authority\n• Airway bill (from freight forwarder)\n• CITES is not required for sea urchin\n\n**Hong Kong customs:**\n• Sea urchin has zero import duty in Hong Kong under the Free Trade framework\n• Food import registration: importer must be registered with the Centre for Food Safety (CFS)\n• If buying directly, you may need to register as a food importer — a straightforward process\n\n**Canadian sea urchin import:**\n• Similar documentation: invoice, packing list, health certificate from Canadian Food Inspection Agency (CFIA)\n• MSC Chain of Custody documentation if MSC-certified product is specified\n• Airway bill and freight forwarder handling\n\n**Practical advice for first-time direct importers:**\nPartner with a Hong Kong freight forwarder experienced in live/chilled seafood. The cost (typically $1,500–3,000 HKD per shipment for admin + brokerage) is justified by avoiding customs delays that destroy freshness. Names of reputable seafood freight specialists are available through your producer's export agent — they typically work together regularly.\n\n**Simpler alternative:** Buy through a specialist HK importer for your first 3–6 months to learn the market, then evaluate direct import once you understand volume patterns.",
      },
      {
        heading: "Common Wholesale Mistakes and How to Avoid Them",
        body: "**Mistake #1: Ordering by price, not by grade**\nThe cheapest per-kg price is meaningless if the grade doesn't match your menu. Always specify grade in writing, then compare prices within the same grade tier.\n\n**Mistake #2: Not tracking yield**\nWholesale uni arrives by gross weight. After trimming damaged lobes, removing excess liquid, and portioning, your usable yield is typically 82–90% of gross weight. Factor this into your cost-per-portion calculation.\n\n**Mistake #3: Missing seasonal allocation windows**\nHokkaido Bafun in June–August is constrained. Suppliers allocate their supply weeks in advance. If you haven't confirmed your June order by April, you will get what's left — which is often lower-grade product at peak-season prices.\n\n**Mistake #4: Single-supplier dependency**\nEven the best suppliers face disruptions: weather events affecting harvests, import delays, cold-chain failures. Maintain a relationship with at least one backup supplier. This doesn't require splitting your volume — a backup supplier on standby is enough.\n\n**Mistake #5: Accepting deliveries without inspection**\nEvery delivery should be inspected before the driver leaves. Check: color, aroma, liquid level, and harvest date. A rejection made at delivery is clean. A rejection made 2 hours later creates a dispute.\n\n**Mistake #6: Not negotiating on delivery timing**\nUnless you negotiate otherwise, deliveries arrive when convenient for the supplier. For kitchen operations, morning deliveries (before 9am) are ideal. Negotiate your window upfront — most suppliers can accommodate this.\n\n**Mistake #7: Treating the relationship as purely transactional**\nYour best supplier relationships are partnerships, not vendor contracts. Communicate feedback regularly. Let them know when quality is excellent. Pre-book allocation before they offer it to others. This earns you preferential treatment during constrained seasons.",
      },
    ],
    conclusion: "Wholesale sea urchin buying in Hong Kong rewards preparation and relationship-building over short-term price hunting. Restaurants that establish direct supplier relationships, plan seasonal allocation in advance, and maintain clear quality standards consistently outperform those chasing the cheapest available product. The savings are real — $40,000+ HKD per year for a 10 kg/week buyer — but the real value is consistent access to quality product when you need it most: peak season, peak service, when your guests are counting on it.",
    ctaTitle: "Start Your Wholesale Relationship with Inari Global Food",
    cta: "We supply sashimi-grade sea urchin and salmon directly to Hong Kong and Macau restaurants, with flexible minimum orders starting from 5 kg per delivery. Contact us to discuss your volume, preferred origin, and delivery schedule — and we'll put together a wholesale pricing proposal within 24 hours.",
  },
  "zh-HK": {
    title: "香港餐廳海膽批發採購完全指南 2026",
    metaDesc: "香港海膽批發採購完整指南。定價層級、最低訂量、供應商評估、合約條款及餐廳成本節省分析。",
    published: "2026年5月",
    category: "採購指南",
    intro: "香港海膽批發採購與零售或經銷商採購是截然不同的方式。做得好，可將每公斤成本降低 30–45%，同時獲得更新鮮的產品和更強的質量保證。做得不好，則會面臨供應不穩定、質量問題和意外的進口文件要求。本指南涵蓋香港餐廳採購商需要了解的一切：定價層級、最低訂量、供應商評估、合約結構，以及如何在旺季仍維持穩定的批發關係。",
    sections: [
      {
        heading: "批發與經銷商：了解成本結構",
        body: "大多數香港餐廳通過本地經銷商或濕市場供應商購買海膽。這很方便——他們處理進口、清關、冷鏈和配送——但這種便利是有代價的。\n\n**典型成本分解（每公斤，刺身級海膽）：**\n\n| 渠道 | 到港成本 | 您的價格 | 加成 |\n|---|---|---|---|\n| 直接批發 | $90–120 HKD | $90–120 HKD | 0% |\n| 進口商/中間商 | $90–120 HKD | $130–160 HKD | 25–40% |\n| 本地經銷商 | $90–120 HKD | $170–220 HKD | 50–80% |\n| 濕市場 | $90–120 HKD | $200–280 HKD | 80–130% |\n\n**每週採購 10 公斤餐廳的計算：**\n• 經銷商：$2,000 HKD/週 → $104,000/年\n• 直接批發：$1,200 HKD/週 → $62,400/年\n• 年度節省：**$41,600 HKD**\n\n代價是：直接批發需要更多規劃（交貨期、最低訂量、進口文件），但對於每週穩定訂購 8–10 公斤以上的餐廳，經濟效益非常顯著。\n\n**何時繼續使用經銷商：**\n• 每週採購量低於 5 公斤（批發最低訂量可能不適用）\n• 沒有處理進口文件的能力\n• 需求高度可變（宴會驅動，不穩定）\n• 在承諾大量訂購前測試新菜品",
      },
      {
        heading: "2026年批發定價：預期是什麼",
        body: "香港批發海膽定價因產地、季節和等級而有顯著差異。以下是基於直接進口定價的 2026 年基準範圍：\n\n**北海道馬糞海膽（頂級品質）**\n• AA 級：HKD $160–220/公斤（6–8 月旺季：$200–260）\n• A 級：HKD $100–140/公斤\n• 最低訂量：通常每次送貨 5–10 公斤\n• 新鮮度保證：採收後 48 小時內\n\n**北海道紫海膽（大量供應品種）**\n• A 級：HKD $70–100/公斤\n• B 級：HKD $40–60/公斤\n• 最低訂量：每次送貨 10 公斤\n• 供應更廣泛、更穩定\n\n**加拿大紅海膽（不列顛哥倫比亞）**\n• AA 級：HKD $110–150/公斤\n• A 級：HKD $75–105/公斤\n• 最低訂量：每次送貨 5–10 公斤\n• 旺季品質：10 月至 5 月（完美填補北海道冬季缺口）\n• MSC 認證：符合 ESG 要求\n\n**加州紅海膽（聖巴巴拉）**\n• AA 級：HKD $120–160/公斤\n• A 級：HKD $80–110/公斤\n• 最低訂量：每次送貨 5 公斤\n• 最佳時機：12 月至 4 月\n\n**需要了解的價格調節因素：**\n• 空運附加費：根據產地和航線每公斤 $15–25\n• 最低可行訂單：低於 5 公斤時，空運成本使批發採購不划算\n• 節假日溢價：農曆新年、聖誕節和北海道夏季旺季加價 20–35%\n• 匯率波動：日元/港幣和加元/港幣匯率影響以日元和加元計價的產品\n\n**談判現實：** 供應商對承諾訂量的買家提供折扣。每週承諾 15 公斤的餐廳相比臨時訂購者可談判低 8–12% 的基本定價，以及在旺季更優先的交貨權。",
      },
      {
        heading: "最低訂量：實際要求是什麼",
        body: "最低訂量要求由物流經濟學驅動，而非供應商偏好。了解這些要求有助於您有效構建訂單。\n\n**不同供應結構的典型最低訂量：**\n\n**直接從日本生產商（通過代理商）：**\n• 最低量：每批貨 10–20 公斤\n• 頻率：每週或每兩週\n• 交貨期：從訂購到香港交貨 5–7 天\n• 最適合：每週採購 15+ 公斤的餐廳\n\n**香港本地專業進口商：**\n• 最低量：每次送貨 5 公斤\n• 頻率：每週兩次或每週一次\n• 交貨期：2–3 天\n• 最適合：每週採購 5–15 公斤的餐廳\n\n**合併批發（與其他餐廳共同採購）：**\n• 最低量：每次送貨 2–3 公斤\n• 頻率：每週兩次\n• 每公斤成本略高於直接進口，但靈活性更強\n• 最適合：需要靈活性的小型餐廳\n\n**香港餐廳的實際門檻：**\n\n| 每週採購量 | 推薦渠道 | 相比零售的預期節省 |\n|---|---|---|\n| 低於 3 公斤 | 濕市場/經銷商 | 不適用 |\n| 3–7 公斤 | 合併批發 | 20–30% |\n| 7–15 公斤 | 專業進口商 | 30–40% |\n| 15+ 公斤 | 直接生產商（通過代理商） | 35–45% |\n\n**合併訂單：** 一些餐廳與附近餐廳組成非正式採購小組，共同達到更高的最低訂量。這在灣仔和銅鑼灣餐飲群中很常見——實用且合法，只需協調。",
      },
      {
        heading: "供應商評估：承諾前必問的7個問題",
        body: "並非每個聲稱提供「批發」定價的供應商都能真正帶來價值。在簽署任何協議前，先問這七個問題：\n\n**1. 每批貨能否提供採收證書？**\n每批貨都應包含文件，顯示：採收日期、生產商名稱/執照號碼、採收地點和物種。日本貨物應有北海道縣可追蹤性文件。加拿大貨物應顯示不列顛哥倫比亞漁業執照號碼。如果他們無法提供，請走開。\n\n**2. 你們的冷鏈協議是什麼？**\n答案應包括：採收到包裝的溫度（2–4°C）、運輸中的冰塊標準，以及從包裝到送貨的時間。冷鏈任何環節的中斷都會降低質量。要求查看最近一批貨的溫度記錄。\n\n**3. 你們的拒收和替換政策是什麼？**\n可信的批發供應商在產品不符合約定等級的情況下，會在 24–48 小時內提供信貸或替換。「我們會看情況」等含糊回答是危險信號。請以書面形式獲取政策。\n\n**4. 我能否參觀你們的設施或見你們的生產商？**\n對於大批量關係，信譽良好的供應商歡迎這樣做。即使是與生產商的視頻通話也能展示透明度。回避這個問題的供應商在供應鏈方面隱瞞了某些事情。\n\n**5. 旺季配額如何處理？**\n北海道海膽在 6–8 月供應有限。詢問他們在供應緊張時如何優先安排客戶。以書面形式在旺季前為您承諾量的供應商遠優於說「我們會盡量」的供應商。\n\n**6. 你們的標準合約條款是什麼？**\n注意：等級規範（不是含糊的「高級」語言）、定價結構（固定基價 + 季節性調整）、送貨頻率、最低訂量和終止通知。30 天通知終止是標準。\n\n**7. 你們在香港還供應哪些客戶？**\n服務其他知名餐廳的供應商（即使他們不直接說出名字）展示了市場驗證。沒有可驗證參考的供應商是風險。",
      },
      {
        heading: "構建批發合約",
        body: "口頭協議在周五早上 7 時一批貨到貨不對勁、服務滿座時無法保護您。一份書面合約，即使是簡單的，也能建立問責機制。\n\n**合約必要元素：**\n\n**等級規範**\n永遠不要接受「高級」或「高品質」。指定日本分級標準：AA、A 或 B，並定義每次送貨中可接受的比例（例如，「每托盤最低 90% AA 級膽黃，最多接受 10% A 級」）。\n\n**定價結構**\n每公斤固定基價，加上有記錄的季節性調整機制。例：「基本價格 HKD $140/公斤，根據市場情況每季度雙方協議調整。每季度最大調整幅度：15%。」\n\n**送貨計劃**\n指定日期、時間窗口和送貨方式（直接送廚房、大堂取貨等）。包括他們錯過送貨窗口時的處理方式——賠償或優先下次送貨是合理的。\n\n**新鮮度保證**\n指定最長採收到送貨時間：「AA 級 48 小時，A 級 96 小時。」超出此時限的任何送貨都應觸發拒收權利。\n\n**拒收程序**\n清楚定義：(1) 如何拒收送貨（收貨後 2 小時內書面通知），(2) 所需證明（照片），及 (3) 解決時間表（24 小時內替換或 48 小時內信貸通知）。\n\n**最低訂量承諾**\n保護供應商的物流經濟學。典型：每週最低 8–10 公斤。包括淡季的不可抗力條款（菜單季節性變更、裝修等）。\n\n**期限和通知期**\n初始期限通常為 3–6 個月，滾動續期。30 天書面通知終止。\n\n**簡單的起點：** 在請律師起草完整合約之前，建立上述條款的清晰電子郵件鏈——雙方確認——創建了有用的文件記錄，對於較小的關係通常已足夠。",
      },
      {
        heading: "建立批發供應計劃",
        body: "一致性是批發相對於臨時採購的主要優勢。以下是如何建立有效計劃：\n\n**第 1 步：計算您的實際每週採購量**\n連續追蹤 4 週的海膽用量。包括損耗（通常處理損耗率為 8–12%）。這是您的基準量。\n\n**第 2 步：建立安全庫存**\n在基準量上增加 15–20%，用於：意外的緊急預訂、特殊活動或質量拒收導致可用產品減少。\n\n**第 3 步：設定送貨計劃**\n對大多數香港餐廳：\n• 每週 2 次送貨（如週一 + 週四）是最佳選擇\n• 避免每週單次大量送貨給冷藏帶來的壓力\n• 允許根據週末表現調整量\n• 保持產品新鮮（冰箱中從不超過 3–4 天）\n\n**第 4 步：圍繞最繁忙時期規劃**\n• 農曆新年提前 6–8 週預訂\n• 3 月前預訂 6–8 月的北海道配額\n• 澳門餐廳：針對大型博彩活動和中國公共假期提前預訂\n\n**第 5 步：建立溝通節奏**\n• 每週：週三前確認下週訂量\n• 每月：審查等級表現、定價和送貨一致性\n• 每季度：重新談判定價，規劃季節菜單變更\n\n**實用補貨觸發器：** 設置簡單規則——當冰箱庫存降至 2 天供應時，觸發補貨。這防止了以零售價緊急採購，並使您的供應商關係可預測。",
      },
      {
        heading: "常見批發錯誤及如何避免",
        body: "**錯誤 #1：按價格而非等級訂購**\n最低的每公斤價格毫無意義，如果等級與您的菜單不符。始終以書面形式指定等級，然後在同一等級層次內比較價格。\n\n**錯誤 #2：不追蹤產出率**\n批發海膽按毛重到貨。在修剪損壞的膽黃、去除多餘液體和分份後，您的可用產出通常是毛重的 82–90%。將此納入每份成本計算。\n\n**錯誤 #3：錯過季節性配額窗口**\n北海道馬糞海膽在 6–8 月供應有限。供應商提前數週分配供應。如果您在 4 月前還沒確認 6 月訂單，您將獲得剩餘的——通常是旺季價格的低等級產品。\n\n**錯誤 #4：單一供應商依賴**\n即使是最好的供應商也面臨中斷：影響採收的天氣事件、進口延誤、冷鏈故障。與至少一個備用供應商保持關係。這不需要分割您的量——備用供應商隨時待命就足夠了。\n\n**錯誤 #5：不在驗收時檢查送貨**\n每次送貨都應在司機離開前檢查。檢查：顏色、氣味、液體量和採收日期。在送貨時拒收是乾淨的。2 小時後拒收會產生糾紛。\n\n**錯誤 #6：不談判送貨時間**\n除非您另有談判，否則送貨在對供應商方便時到達。對廚房運作，早上送貨（早上 9 點前）是理想的。提前談判您的窗口——大多數供應商可以配合。\n\n**錯誤 #7：將關係視為純粹交易**\n您最好的供應商關係是合作夥伴關係，而不是供應商合約。定期溝通反饋。當質量出色時告知他們。在他們向他人提供之前預訂配額。這為您在緊張季節贏得優先待遇。",
      },
    ],
    conclusion: "香港海膽批發採購是對準備工作和關係建立的回報，而非短期價格追逐。建立直接供應商關係、提前規劃季節配額和維持清晰質量標準的餐廳，始終優於追逐最便宜可用產品的餐廳。節省是真實的——每週 10 公斤買家每年可節省超過 $40,000 港幣——但真正的價值是在最需要時穩定獲得優質產品：旺季、高峰服務時，客人對此期待時。",
    ctaTitle: "開始與稻荷環球食品的批發合作",
    cta: "我們直接向香港及澳門餐廳供應刺身級海膽和三文魚，每次最低送貨量靈活，從 5 公斤起。聯繫我們討論您的採購量、偏好產地和送貨計劃——我們將在 24 小時內提供批發定價方案。",
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
