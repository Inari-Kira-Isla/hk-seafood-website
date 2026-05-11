import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Hong Kong Wedding Banquet Seafood Sourcing 2026: A Procurement Playbook for Hotels, Halls and Caterers",
    metaDesc: "Wedding banquet seafood sourcing for Hong Kong hotels, banquet halls and caterers. Volume planning per table, peak-season allocation, course-level seafood specs, cold-chain delivery scheduling, and supplier evaluation specific to wedding operations.",
    published: "May 2026",
    category: "Banquet Operations",
    intro: "Hong Kong runs one of the densest wedding banquet calendars in Asia. Auspicious-date weekends concentrate 40–80 banquets across hotels, Chinese restaurants, and dedicated halls in a single Saturday night. Sea urchin and salmon increasingly anchor the cold-appetiser course on premium menus, and the supply chain that supports them looks nothing like routine restaurant ordering. A single weekend can require 200+ kg of salmon and 40+ kg of uni across a property's events. Allocation is locked weeks ahead. Cold-chain windows are tight. And one missed delivery puts a couple's once-in-a-lifetime night at risk. This guide is a procurement playbook for the people who actually source for HK wedding banquets — banquet managers, F&B directors, catering operators, and wedding planners — covering volume math, seasonality, course-level specs, delivery scheduling, and the supplier criteria that matter when stakes are non-negotiable.",
    sections: [
      {
        heading: "The Hong Kong Wedding Banquet Landscape: Volume, Seasons, Course Role",
        body: "HK wedding banquets cluster around four venue types, each with distinct seafood demand patterns:\n\n**5-star hotel ballrooms (Cotai-equivalent of HK)**\n• Properties: Four Seasons, Mandarin Oriental, Peninsula, Ritz-Carlton, Rosewood, Conrad, Grand Hyatt, JW Marriott, Shangri-La\n• Typical event size: 20–50 tables (240–600 guests)\n• Seafood-heavy courses: cold appetiser platter, abalone+sea cucumber, lobster sashimi (premium), uni course (super-premium)\n• Per-event uni requirement: 0.8–2.5 kg (premium add-on); 4–8 kg (uni-feature menus)\n• Per-event salmon requirement: 8–25 kg sashimi-grade\n• Premium upsell rate: 60–80% of bookings include some seafood premium upgrade\n\n**4-star and boutique hotel banquet halls**\n• Properties: dozens across Kowloon, HK Island, NT\n• Typical event size: 15–35 tables\n• Seafood courses: standard 9-course Cantonese with cold platter, scallop, fish course\n• Premium upsell rate: 30–50%\n\n**Dedicated Chinese banquet restaurants and halls**\n• Properties: Heichinrou, Yat Tung Heen, Lung King Heen-style operations, plus banquet-specialised halls in Kowloon Bay, Tsuen Wan, Sha Tin\n• Typical event size: 10–40 tables\n• Often run multiple events per evening (afternoon + evening seatings on Saturdays)\n• Seafood approach: traditional Cantonese expectations dominate; uni still niche but salmon cold cuts increasingly common\n\n**Outside catering operators (yacht weddings, private estates, garden venues)**\n• Smaller per-event volumes but higher per-kg cost tolerance\n• Logistics complexity: temperature management at non-kitchen venues\n• Premium pricing but unforgiving margins if supplier fails\n\n**The seasonality you must plan around:**\n\n• **Peak wedding months**: October, November, December, March, April, May (Lunar calendar auspicious dates concentrate within these)\n• **Auspicious-date Saturdays**: 6–10 dates per year carry 2–3x normal weekend volume across the city\n• **Off-peak**: July, August (hot/typhoon season), February (post-CNY lull)\n• **Suppressed dates**: 7th lunar month (鬼月, ghost month — minimal weddings)\n\n**Why this matters for sourcing:** Auspicious-date Saturdays are the hardest moments in HK seafood supply. Every 5-star hotel needs premium-grade uni and salmon on the same day. Suppliers without pre-locked allocation will turn you down or substitute downward. The banquet operations that win on these dates booked their supply 12–16 weeks earlier.",
      },
      {
        heading: "Course-Level Specifications: Where Sea Urchin and Salmon Fit the 9-Course Banquet",
        body: "Standard HK Cantonese wedding menus run 8–10 courses. Sea urchin and salmon don't appear in every course — knowing exactly where they fit lets you size orders correctly.\n\n**Course 1: Cold Appetiser Platter (前菜拼盤)**\nMost common entry point for premium seafood. Standard composition: jellyfish, drunken chicken, marinated cucumber, century egg. Premium upgrades commonly add:\n• Salmon sashimi rosettes — 30–50g per table (8–12 guest table = ~3–4g per guest)\n• Smoked salmon canapés — 40–60g per table\n• Salmon tartare cups — 30–40g per table\n\nVolume math: 30 tables × 40g = 1.2 kg salmon for a single banquet just for this course\n\n**Course 2: Soup (羹/湯)**\nRarely uses sea urchin or salmon. Skip for sourcing purposes.\n\n**Course 3–4: Hot Seafood (海鮮類)**\nTypically lobster, abalone, scallop, garoupa. Salmon as a hot course is uncommon in traditional Cantonese banquets but appears in fusion menus.\n\n**Premium Add-On: Uni Feature (海膽特色菜)**\nIncreasingly common at 5-star properties as a 'special course' add-on charged at HKD $180–380 per guest:\n• Uni rice bowl mini (海膽飯) — 8–12g uni per guest = 100–150g per table\n• Uni & scallop sashimi pairing — 10–15g uni per guest = 120–180g per table\n• Uni custard (uni chawanmushi style) — 6–8g per guest = 80–100g per table\n\nVolume math: 30 tables × 130g uni = 3.9 kg for one banquet's uni course\n\n**Course 5–6: Poultry, Vegetable, Rice/Noodle**\nNo seafood typically.\n\n**Course 7: Fish Course (魚)**\nSteamed fish — usually grouper, leopard coral grouper, or seasonal whole fish. Not a salmon/uni course.\n\n**Course 8: Dessert (甜品)**\nNo seafood.\n\n**Practical sizing summary for a 30-table 5-star wedding with premium upsells:**\n\n| Item | Per table | 30 tables | Buffer (10%) | Order |\n|---|---|---|---|---|\n| Salmon sashimi (cold platter) | 40g | 1.2 kg | 0.12 kg | 1.4 kg |\n| Uni (feature course, if booked) | 130g | 3.9 kg | 0.4 kg | 4.3 kg |\n| Salmon (any hot/fusion course) | 80g | 2.4 kg | 0.24 kg | 2.7 kg |\n\n**Always order with 10–15% buffer.** Banquet kitchens can't substitute on event day. A single short shipment ruins the chef's mise en place and the couple's plated experience.",
      },
      {
        heading: "Volume Planning: From Booking Confirmation to Allocation Lock",
        body: "Wedding banquet sourcing happens on a different timeline than restaurant operations. The booking-to-event window is the planning horizon.\n\n**Standard HK wedding booking timeline:**\n\n• **12–18 months ahead**: Couple secures venue, signs deposit\n• **6–9 months ahead**: Menu tasting, course-level decisions confirmed\n• **3–4 months ahead**: Guest count locked, table count finalized, premium upsells confirmed\n• **8–12 weeks ahead**: F&B procurement should lock supplier allocation\n• **2–3 weeks ahead**: Final guest count tweaks (typically ±1–2 tables)\n• **Event week**: Delivery scheduling confirmed, contingency plans in place\n\n**The 8–12 week allocation window is non-negotiable for premium seafood.** This is when:\n• Hokkaido uni allocations are still flexible at the importer level\n• Salmon week-of-event spot pricing risk is low\n• Suppliers can confirm specific grades and origins\n\n**The forecasting calculation banquet F&B teams should run weekly:**\n\n```\nFor each event in the next 12 weeks:\n  Tables × per-table seafood spec = base requirement\n  + 10–15% buffer for spoilage/yield\n  = order quantity\n\nAggregate by week:\n  Week of [date]: total uni + total salmon required\n  Compare to supplier confirmed allocation\n  Flag gaps to procurement immediately\n```\n\n**Auspicious-date Saturday allocation: the special case**\n\nFor weekends carrying 5+ events at one property (or 30+ events across HK), normal allocation falls apart. Practical responses:\n\n• **Lock supplier allocation 16–20 weeks ahead** with written commitment letters specifying volume, grade, and price ceiling\n• **Diversify across 2 suppliers** for these dates, splitting volume 70/30 to maintain backup capacity\n• **Pre-pay or deposit** for confirmed allocation when supplier requests — this is normal practice for top accounts\n• **Specify substitute protocols in writing**: if Hokkaido AA Bafun is unavailable on event day, what is the acceptable substitution path?\n\n**The 'forgotten' upsell tracking problem**\n\nA frequent gap in HK banquet operations: a couple confirms a uni upsell at the 6-month tasting, but the procurement team only sees the final BEO (banquet event order) at 4 weeks. By then, allocation is locked and supplier may not have inventory for the additional volume. Fix this by:\n\n• Building a uni/salmon upsell tracker that captures upsells immediately at booking\n• Sending procurement a weekly \"new upsells\" digest\n• Pre-allocating headroom in supplier orders for late-confirmed upsells (5–10% additional volume held in reserve)",
      },
      {
        heading: "Cold-Chain Delivery Scheduling for Banquet Operations",
        body: "Banquet kitchens have narrow operational windows. Delivery timing is as important as product quality.\n\n**The Saturday-night banquet timeline (typical):**\n\n• **Friday morning–afternoon**: Mise en place begins for Saturday events\n• **Friday evening**: Cold appetisers prepped, sashimi-cut salmon stored\n• **Saturday morning**: Final mise en place, last delivery acceptable\n• **Saturday 16:00–18:00**: Setup and pre-banquet prep complete\n• **Saturday 18:30–22:30**: Banquet service\n\n**The implication for sourcing:** Salmon and uni for Saturday banquets should arrive Friday morning. This gives the kitchen 24–30 hours of controlled cold storage time before service — enough to allow inspection, rejection if needed, and re-supply if anything fails.\n\n**Delivery scheduling rules of thumb:**\n\n• **Saturday banquet**: deliver Friday 09:00–13:00\n• **Sunday banquet**: deliver Saturday 09:00–13:00 (or Friday with longer storage)\n• **Auspicious-date weekend (multiple events)**: stagger deliveries Thursday + Friday to spread cold-chain load and reduce rejection risk\n• **Mid-week banquet (corporate, smaller weddings)**: deliver day-before, before 12:00\n\n**Cold-chain checklist on receiving (banquet-specific):**\n\n• Temperature on arrival: ≤4°C for salmon, ≤2°C for uni\n• Visual inspection: salmon flesh colour, fat marbling, no blood pooling; uni colour vibrancy, no off-odour, no liquid in tray\n• Documentation: harvest date, supplier batch number, cold-chain log\n• Rejection protocol must be defined in writing in advance — banquet kitchens cannot make rejection decisions ad-hoc on event week\n\n**Backup delivery contingency:**\n\nFor major events (50+ tables, auspicious-date Saturdays), the procurement team should pre-arrange:\n\n• Secondary supplier confirmed available with same-day or next-morning emergency delivery capability\n• On-property cold storage with verified backup capacity (in case primary cooler fails)\n• Clear escalation chain: who decides to invoke contingency, and within what time window\n\n**The expensive lesson learned by HK hotels:** A supplier delivering Friday afternoon for Saturday-night banquet leaves no recovery window. If product fails inspection, there is no time to source replacement. Friday morning delivery is the standard for properties that have been burned once.",
      },
      {
        heading: "Cost Structure: Where Margin Lives in Banquet Seafood",
        body: "Banquet F&B operates on visible per-guest pricing. Understanding the cost structure helps you price upsells correctly and protect margin.\n\n**Per-guest cost breakdown for premium seafood courses:**\n\n**Salmon sashimi cold platter add-on (40g per guest)**\n• Salmon cost (sashimi-grade Norwegian/Scottish): HKD $5.50–8.00 per guest at 40g\n• Plate-up labour: HKD $2.00 per guest\n• Garnish + accoutrements: HKD $1.50 per guest\n• Total food cost: HKD $9–11.50 per guest\n• Typical menu add-on price: HKD $48–88 per guest\n• Gross margin: 78–87%\n\n**Uni feature course (130g per table = 12g per guest at 11-guest table)**\n• Uni cost (Hokkaido Murasaki A grade): HKD $1.10–1.40 per gram = HKD $13.20–16.80 per guest\n• Premium uni (Bafun AA): HKD $2.20–2.90 per gram = HKD $26.40–34.80 per guest\n• Plate-up labour, accompaniments, plating: HKD $5–8 per guest\n• Total food cost (Murasaki version): HKD $18–25 per guest\n• Total food cost (Bafun version): HKD $32–43 per guest\n• Typical menu add-on price: HKD $180–380 per guest\n• Gross margin: 80–90%\n\n**Where margin leaks in banquet seafood operations:**\n\n• **Over-ordering**: 15% buffer is standard, 25%+ buffer wastes margin on high-cost items. Track yield-after-trim by supplier and use that data to right-size buffers.\n• **Wrong-grade procurement**: ordering Bafun AA when the menu specifies Murasaki A (or vice versa) is a 2x cost differential. Confirm grade specification at the F&B order step, not just verbally.\n• **Spot-buying for forgotten upsells**: spot uni purchases at 7-day lead time can run 30–60% above confirmed allocation prices. Build the upsell tracker mentioned earlier to prevent this.\n• **Substitution downgrades**: when supplier delivers B-grade or off-origin product because allocation wasn't locked, the kitchen still pays committed prices. Written commitment letters at allocation lock prevent this.\n• **Cold-chain failure write-offs**: a single cold-chain incident on a Saturday auspicious date can cost HKD $15,000–40,000 in product loss. Backup delivery and on-property cold storage redundancy are insurance.\n\n**The premium upsell economics for the banquet operator:**\n\nA 30-table wedding with 80% upsell take rate generates:\n• 264 guests × 80% = 211 upsell guests\n• Salmon platter upsell at HKD $68/guest × 211 = HKD $14,348 incremental revenue\n• Uni feature course at HKD $280/guest × 211 = HKD $59,080 incremental revenue\n• Combined incremental gross margin (~85%): ~HKD $62,400 from one event\n\nFor a property running 80 weddings per year, this is HKD $5M+ in incremental margin from premium seafood upsells alone. The procurement reliability that enables this is the business case for investing in a strong supplier relationship.",
      },
      {
        heading: "Supplier Evaluation: What Banquet Operations Should Specifically Demand",
        body: "Generic supplier criteria apply (grade, cold-chain, documentation). Banquet operations layer on three additional must-haves:\n\n**1. Volume scaling capability for auspicious-date weekends**\n\nA supplier servicing 3 hotels needs to scale 5x on a single Saturday. Most cannot. Ask:\n• What is the largest single-day delivery volume you have executed in the last 12 months?\n• How many wedding-banquet accounts do you serve, and what is your peak-Saturday combined volume?\n• If our property has a 50-table wedding on the same Saturday as 8 other properties' weddings, can you commit volume to all of us?\n• Show me the supplier-side allocation calendar for the next 4 auspicious-date Saturdays\n\n**2. Friday-morning delivery commitment**\n\nLate-Friday or Saturday-morning delivery is unacceptable for major banquet events. Ask:\n• Can you commit to delivery before 13:00 on the day before any banquet event?\n• What is your contingency if your normal Friday-morning truck fails?\n• Do you have a Macau-side or HK-side warehouse that can run emergency deliveries?\n• Show me your Friday-morning on-time delivery rate for the last 6 months\n\n**3. Written substitution protocol**\n\nWhen the planned product is unavailable, the substitution path must be defined in writing before the event. Ask:\n• If Hokkaido Bafun AA is unavailable, what specific product will you substitute, at what price?\n• Who decides on substitution — your team or ours, and within what time window?\n• Is the substitution price-protected to the original commitment, or does it float?\n• What is your refund policy if you cannot deliver the committed product or an acceptable substitute?\n\n**Red flags specific to banquet seafood sourcing:**\n\n• Supplier won't commit to specific Friday delivery window — vague \"day-before delivery\" is not enough\n• Supplier resists written allocation commitments for auspicious-date Saturdays\n• Supplier substitutes grades or origins without prior notice on regular orders (signal of how they will behave on event week)\n• Supplier cannot produce documented Friday-morning delivery rate data\n• No clear escalation contact for event-week emergencies (a single sales rep is not enough — there must be ops/dispatch contact)\n\n**The relationship pattern that works for HK banquet operations:**\n\n• Quarterly business reviews focused on the next 13 weeks of confirmed events\n• Monthly volume forecasting calls with the F&B team\n• Pre-locked allocation for all auspicious-date Saturdays 16+ weeks ahead\n• Joint contingency planning for the 8–10 highest-stakes events of the year\n• Open invoicing reconciliation and quality issue logging\n\nSuppliers willing to operate at this engagement level are the ones worth committing to. Suppliers who treat banquet accounts as transactional volume are the ones who fail you on the wedding the couple has been planning for two years.",
      },
      {
        heading: "Practical Playbook: From Wedding Booking to Event Execution",
        body: "**The procurement workflow for a single wedding event, end-to-end:**\n\n**At booking (12–18 months out)**\n• Capture intended event date, expected guest count, premium upsell intent\n• Flag auspicious-date Saturdays immediately — these need supplier-side awareness within the week\n\n**At menu tasting (6–9 months out)**\n• Lock course composition; confirm seafood premium upsells\n• Calculate provisional volume requirement: tables × per-table spec\n• Communicate provisional volume to procurement team\n\n**At guest count lock (3–4 months out)**\n• Refine volume calculation\n• Confirm allocation request to supplier in writing\n• Receive supplier allocation confirmation in writing (volume, grade, price ceiling, delivery window)\n\n**At allocation lock (8–12 weeks out)**\n• Final volume committed in writing both directions\n• Substitution protocol confirmed in writing\n• Backup supplier identified for contingency volume\n• Cold-chain delivery window confirmed (Friday morning for Saturday events)\n\n**Event week (final adjustments)**\n• Confirm any guest-count tweaks (≤±2 tables typical)\n• Reconfirm delivery scheduling 72 hours ahead\n• Verify on-property cold storage capacity\n• Final BEO (banquet event order) distributed to kitchen, procurement, dispatch\n\n**Event day (Friday delivery → Saturday service)**\n• Friday 09:00–13:00: receive delivery, inspect, reject if needed\n• Friday 13:00–18:00: kitchen mise en place\n• Saturday morning: final prep, last sashimi cuts\n• Saturday 18:30–22:30: service\n• Saturday post-event: yield-after-use logged for next forecast cycle\n\n**Post-event (within 7 days)**\n• Yield analysis: actual usage vs. ordered, by product\n• Quality feedback to supplier (positive AND negative)\n• Update sourcing parameters for next event of similar profile\n• Reconcile invoicing\n\n**One thing not to skip:** Maintain a per-event sourcing log capturing actual product received, grade, yield, and any quality issues. Over 12 months, this data tells you which supplier is reliable for banquet accounts and which is not. Banquet F&B operations that source by gut feel get burned. The ones that source by data don't.",
      },
    ],
    conclusion: "HK wedding banquet seafood sourcing rewards operations that treat it as a high-stakes, time-locked supply chain rather than a routine restaurant order. The economics are favourable — premium upsells generate exceptional margin — but the execution risk is unforgiving. A single failed delivery on an auspicious-date Saturday can cost six figures in product, reputation, and customer goodwill. Hotels, banquet halls, and catering operators that win at this game lock allocation 8–16 weeks ahead, demand Friday-morning delivery commitments in writing, build substitution protocols before they need them, and treat their seafood supplier as a strategic partner rather than a transactional vendor. The procurement discipline pays back in margin, reliability, and a reputation that books out the next year's auspicious-date Saturdays.",
    ctaTitle: "Premium Seafood for HK Wedding Banquet Operations — Inari Global Food",
    cta: "We supply sashimi-grade sea urchin and salmon to Hong Kong hotel banquet operations, dedicated wedding halls, and outside catering operators — with auspicious-date allocation locking, Friday-morning delivery commitments, written substitution protocols, and event-volume scaling capability. Contact us to discuss your wedding event calendar, premium upsell expectations, and supplier evaluation criteria, and we'll put together a banquet sourcing proposal within 24 hours.",
  },
  "zh-HK": {
    title: "香港婚宴海鮮採購完全指南 2026：酒店、宴會廳及到會的採購攻略",
    metaDesc: "香港酒店、宴會廳及到會服務的婚宴海鮮採購指南。每圍量規劃、旺季配額鎖定、菜式級別海鮮規格、冷鏈交付時間表，以及針對婚宴運營的供應商評估標準。",
    published: "2026年5月",
    category: "宴會運營",
    intro: "香港擁有亞洲最密集的婚宴日曆之一。良辰吉日的星期六晚上，全港酒店、中菜館及婚宴廳會集中舉辦 40–80 場婚宴。海膽和三文魚日益成為高端菜單冷盤前菜的核心，而支撐它們的供應鏈與日常餐廳訂貨完全不同。單一週末可能需要全物業 200+ 公斤三文魚和 40+ 公斤海膽。配額在數週前就已鎖定。冷鏈窗口很緊。一次延誤交付會危及一對新人一生一次的婚禮夜晚。本指南是為實際採購香港婚宴海鮮的人士——宴會經理、餐飲總監、到會運營商和婚禮策劃師——準備的採購攻略，涵蓋量計算、季節性、菜式級規格、交付時間表，以及在不容妥協的關鍵時刻最重要的供應商標準。",
    sections: [
      {
        heading: "香港婚宴版圖：量、季節、菜式角色",
        body: "香港婚宴集中在四類場地，各有不同的海鮮需求模式：\n\n**5 星級酒店宴會廳**\n• 物業：四季、文華東方、半島、麗思卡爾頓、瑰麗、港麗、君悅、JW 萬豪、香格里拉等\n• 典型活動規模：20–50 圍（240–600 位賓客）\n• 海鮮重點菜式：冷盤前菜、鮑魚海參、龍蝦刺身（高端）、海膽課程（超高端）\n• 每場海膽需求：0.8–2.5 公斤（高端加價）；4–8 公斤（海膽特色菜單）\n• 每場三文魚需求：8–25 公斤刺身級\n• 高端加價接受率：60–80% 預訂包含某種海鮮加價升級\n\n**4 星級和精品酒店宴會廳**\n• 物業：九龍、港島、新界數十家\n• 典型活動規模：15–35 圍\n• 海鮮菜式：標準 9 菜式廣式婚宴，含冷盤、帶子、魚類\n• 高端加價接受率：30–50%\n\n**專門中式宴會餐廳和宴會廳**\n• 物業：海皇樓、逸東軒、龍景軒風格運營，加上九龍灣、荃灣、沙田的專業宴會廳\n• 典型活動規模：10–40 圍\n• 常一晚舉辦多場活動（星期六下午+晚上場）\n• 海鮮策略：傳統廣式期望主導；海膽仍屬小眾，但三文魚冷切日益常見\n\n**外卡到會運營商（遊艇婚禮、私人莊園、花園婚宴）**\n• 單場量較小但每公斤成本容忍度較高\n• 物流複雜度：非廚房場地的溫度管理\n• 高端定價但供應商失誤的話利潤無情\n\n**您必須規劃的季節性：**\n\n• **婚宴旺月**：10、11、12、3、4、5 月（農曆吉日集中於這些月份）\n• **吉日星期六**：每年 6–10 個日期承擔全市 2–3 倍正常週末量\n• **淡季**：7、8 月（炎熱/颱風季節）、2 月（農曆新年後低谷）\n• **抑制日期**：農曆七月（鬼月——婚宴極少）\n\n**為什麼這對採購重要：** 吉日星期六是香港海鮮供應最艱難的時刻。每家 5 星級酒店在同一天都需要高端海膽和三文魚。沒有預鎖配額的供應商會拒絕您或降級替代。在這些日期勝出的宴會運營在 12–16 週前就鎖定了供應。",
      },
      {
        heading: "菜式級規格：海膽和三文魚在 9 菜式婚宴中的位置",
        body: "標準香港廣式婚宴菜單為 8–10 道菜。海膽和三文魚並非每道菜都出現——準確了解它們的位置，能讓您正確計算訂單量。\n\n**菜式 1：冷盤前菜（前菜拼盤）**\n高端海鮮的最常見入口。標準組合：海蜇、醉雞、醃黃瓜、皮蛋。常見高端升級：\n• 三文魚刺身玫瑰花——每圍 30–50 克（8–12 位賓客圍 = 每位約 3–4 克）\n• 煙三文魚 canapés——每圍 40–60 克\n• 三文魚他他杯——每圍 30–40 克\n\n量計算：30 圍 × 40 克 = 單場宴會僅此菜式就需 1.2 公斤三文魚\n\n**菜式 2：湯（羹/湯）**\n極少使用海膽或三文魚。採購時略過。\n\n**菜式 3–4：熱海鮮類**\n通常為龍蝦、鮑魚、帶子、石斑。三文魚作熱菜在傳統廣式婚宴中不常見，但在融合菜單中出現。\n\n**高端附加：海膽特色菜**\n5 星級物業日益普遍的「特色課程」加價，每位 HKD $180–380：\n• 海膽飯（迷你）——每位 8–12 克 = 每圍 100–150 克\n• 海膽帶子刺身配對——每位 10–15 克 = 每圍 120–180 克\n• 海膽蒸蛋（chawanmushi 風格）——每位 6–8 克 = 每圍 80–100 克\n\n量計算：30 圍 × 130 克海膽 = 單場宴會海膽課程 3.9 公斤\n\n**菜式 5–6：禽類、蔬菜、飯/麵**\n通常無海鮮。\n\n**菜式 7：魚類**\n蒸魚——通常為石斑、東星斑或時令全魚。非三文魚/海膽課程。\n\n**菜式 8：甜品**\n無海鮮。\n\n**30 圍 5 星級婚宴含高端加價的實用量總結：**\n\n| 項目 | 每圍 | 30 圍 | 緩衝 (10%) | 訂單 |\n|---|---|---|---|---|\n| 三文魚刺身（冷盤） | 40 克 | 1.2 公斤 | 0.12 公斤 | 1.4 公斤 |\n| 海膽（特色課程，如預訂） | 130 克 | 3.9 公斤 | 0.4 公斤 | 4.3 公斤 |\n| 三文魚（任何熱/融合菜） | 80 克 | 2.4 公斤 | 0.24 公斤 | 2.7 公斤 |\n\n**永遠以 10–15% 緩衝訂購。** 宴會廚房在活動當日無法替代。一次少訂會破壞主廚的準備工作和新人的擺盤體驗。",
      },
      {
        heading: "量規劃：從預訂確認到配額鎖定",
        body: "婚宴採購的時間表與餐廳運營不同。預訂到活動的窗口就是規劃視野。\n\n**標準香港婚宴預訂時間表：**\n\n• **12–18 個月前**：新人鎖定場地，簽訂訂金\n• **6–9 個月前**：菜單試菜、菜式級別決定確認\n• **3–4 個月前**：賓客人數鎖定、圍數確定、高端加價確認\n• **8–12 週前**：餐飲採購應鎖定供應商配額\n• **2–3 週前**：最終賓客人數微調（通常 ±1–2 圍）\n• **活動週**：交付時間表確認、應急計劃就位\n\n**對高端海鮮而言，8–12 週的配額窗口不容妥協。** 在這個時間：\n• 北海道海膽配額在進口商層仍有彈性\n• 三文魚活動週現貨定價風險低\n• 供應商可確認特定等級和產地\n\n**宴會餐飲團隊應每週運行的預測計算：**\n\n```\n對於未來 12 週的每個活動：\n  圍數 × 每圍海鮮規格 = 基礎需求\n  + 10–15% 緩衝（修整損耗）\n  = 訂購量\n\n按週聚合：\n  [日期] 週：總海膽 + 總三文魚需求\n  與供應商確認配額比較\n  立即向採購團隊標記缺口\n```\n\n**吉日星期六配額：特殊情況**\n\n對於單一物業承載 5+ 場活動（或全港 30+ 場活動）的週末，正常配額機制崩潰。實用對策：\n\n• **提前 16–20 週鎖定供應商配額**，書面承諾函指定量、等級和價格上限\n• **跨 2 家供應商分散**，這些日期 70/30 分配以維持後備容量\n• **預付或押金**確認配額，當供應商要求時——這對頂級客戶是常規操作\n• **書面指定替代協議**：如果北海道 AA 馬糞海膽在活動日無法供應，可接受的替代路徑是什麼？\n\n**「遺忘的」加價追蹤問題**\n\n香港宴會運營常見的差距：新人在 6 個月試菜時確認海膽加價，但採購團隊只在 4 週時看到最終 BEO（宴會活動單）。屆時，配額已鎖定，供應商可能沒有額外量的庫存。修正方法：\n\n• 建立海膽/三文魚加價追蹤系統，在預訂時即時捕獲加價\n• 向採購發送每週「新加價」摘要\n• 在供應商訂單中為遲到加價預留空間（保留 5–10% 額外量）",
      },
      {
        heading: "宴會運營的冷鏈交付時間表",
        body: "宴會廚房的運營窗口很窄。交付時間和產品質量同樣重要。\n\n**星期六晚宴會時間表（典型）：**\n\n• **星期五早上–下午**：星期六活動的準備工作開始\n• **星期五傍晚**：冷盤準備、三文魚刺身切片儲存\n• **星期六早上**：最終準備工作、最後可接受交付\n• **星期六 16:00–18:00**：佈置和宴會前準備完成\n• **星期六 18:30–22:30**：宴會服務\n\n**對採購的含義：** 星期六宴會的三文魚和海膽應在星期五早上到達。這給廚房 24–30 小時的受控冷藏時間，足以進行檢查、需要時拒收和補充供應。\n\n**交付時間表經驗法則：**\n\n• **星期六宴會**：星期五 09:00–13:00 交付\n• **星期日宴會**：星期六 09:00–13:00 交付（或星期五加長儲存）\n• **吉日週末（多場活動）**：星期四+星期五錯峰交付以分散冷鏈負擔並降低拒收風險\n• **平日宴會（企業、小型婚宴）**：前一日 12:00 前交付\n\n**收貨冷鏈清單（宴會特定）：**\n\n• 到貨溫度：三文魚 ≤4°C，海膽 ≤2°C\n• 目視檢查：三文魚肉色、脂肪紋理、無血液積聚；海膽顏色鮮活、無異味、托盤無液體\n• 文件：採收日期、供應商批號、冷鏈日誌\n• 拒收協議必須事先書面定義——宴會廚房在活動週無法臨時做拒收決定\n\n**後備交付應急：**\n\n對於主要活動（50+ 圍、吉日星期六），採購團隊應預先安排：\n\n• 確認可提供當日或次晨緊急交付能力的次級供應商\n• 物業內已驗證後備容量的冷藏（以防主冷藏失效）\n• 明確的升級鏈：誰決定啟用應急，在什麼時間窗口內\n\n**香港酒店學到的昂貴教訓：** 星期五下午為星期六晚宴交付的供應商沒有恢復窗口。如果產品檢查失敗，無時間採購替代。星期五早上交付是已被燙傷一次的物業的標準。",
      },
      {
        heading: "成本結構：宴會海鮮的利潤所在",
        body: "宴會餐飲以可見的每位賓客定價運營。理解成本結構有助正確定價加價並保護利潤。\n\n**高端海鮮課程的每位賓客成本明細：**\n\n**三文魚刺身冷盤加價（每位 40 克）**\n• 三文魚成本（刺身級挪威/蘇格蘭）：每位 40 克約 HKD $5.50–8.00\n• 擺盤人工：每位 HKD $2.00\n• 配菜+飾物：每位 HKD $1.50\n• 食材總成本：每位 HKD $9–11.50\n• 典型菜單加價：每位 HKD $48–88\n• 毛利率：78–87%\n\n**海膽特色課程（每圍 130 克 = 11 人圍每位 12 克）**\n• 海膽成本（北海道紫海膽 A 級）：每克 HKD $1.10–1.40 = 每位 HKD $13.20–16.80\n• 高端海膽（馬糞 AA 級）：每克 HKD $2.20–2.90 = 每位 HKD $26.40–34.80\n• 擺盤人工、配料、裝飾：每位 HKD $5–8\n• 食材總成本（紫海膽版本）：每位 HKD $18–25\n• 食材總成本（馬糞版本）：每位 HKD $32–43\n• 典型菜單加價：每位 HKD $180–380\n• 毛利率：80–90%\n\n**宴會海鮮運營利潤滲漏點：**\n\n• **過量訂購**：15% 緩衝是標準，25%+ 緩衝在高成本項目上浪費利潤。按供應商追蹤修整後產出，使用該數據準確調整緩衝。\n• **錯誤等級採購**：菜單指定紫海膽 A 級時訂購馬糞 AA 級（反之亦然）是 2 倍成本差異。在 F&B 訂單步驟確認等級規格，而非僅口頭。\n• **遺忘加價的現貨採購**：7 日交付期的現貨海膽購買可能比確認配額價格高 30–60%。建立先前提到的加價追蹤系統以防止這種情況。\n• **替代降級**：當供應商因配額未鎖定而交付 B 級或非原產地產品時，廚房仍支付承諾價格。在配額鎖定時的書面承諾函可防止此情況。\n• **冷鏈失敗報廢**：星期六吉日的單一冷鏈事件可造成 HKD $15,000–40,000 的產品損失。後備交付和物業內冷藏冗餘是保險。\n\n**宴會運營商的高端加價經濟學：**\n\n30 圍婚宴含 80% 加價接受率產生：\n• 264 位賓客 × 80% = 211 位加價賓客\n• 三文魚拼盤加價 HKD $68/位 × 211 = HKD $14,348 增量收入\n• 海膽特色課程 HKD $280/位 × 211 = HKD $59,080 增量收入\n• 合計增量毛利（~85%）：單場活動約 HKD $62,400\n\n對於每年舉辦 80 場婚宴的物業，這是僅來自高端海鮮加價的 HKD $5M+ 增量利潤。實現此目標的採購可靠性是投資強供應商關係的商業案例。",
      },
      {
        heading: "供應商評估：宴會運營應特別要求什麼",
        body: "通用供應商標準（等級、冷鏈、文件）適用。宴會運營疊加三項額外必備：\n\n**1. 吉日週末的量擴展能力**\n\n服務 3 家酒店的供應商在單一星期六需擴展 5 倍。大多數做不到。詢問：\n• 過去 12 個月您執行的最大單日交付量是多少？\n• 您服務多少個婚宴客戶，您的星期六高峰合計量是多少？\n• 如果我們物業在同一星期六有 50 圍婚宴，與其他 8 個物業的婚宴同日，您能對我們所有人承諾量嗎？\n• 給我看下 4 個吉日星期六的供應商方配額日曆\n\n**2. 星期五早上交付承諾**\n\n星期五晚或星期六早上交付對主要宴會活動不可接受。詢問：\n• 您能承諾在任何宴會活動前一日 13:00 前交付嗎？\n• 如果您的正常星期五早上貨車失效，應急方案是什麼？\n• 您是否有澳門或香港方倉庫可運行緊急交付？\n• 給我看您過去 6 個月的星期五早上準時交付率\n\n**3. 書面替代協議**\n\n當計劃產品無法供應時，替代路徑必須在活動前書面定義。詢問：\n• 如果北海道馬糞 AA 級無法供應，您將替代什麼具體產品，價格如何？\n• 替代由誰決定——您的團隊還是我們的，在什麼時間窗口內？\n• 替代價格是否保護到原承諾，還是浮動？\n• 如果您無法交付承諾產品或可接受的替代，您的退款政策是什麼？\n\n**宴會海鮮採購的特定危險信號：**\n\n• 供應商不承諾具體星期五交付窗口——含糊的「前一日交付」不夠\n• 供應商抗拒吉日星期六的書面配額承諾\n• 供應商在常規訂單上未事先通知就替代等級或產地（活動週行為的信號）\n• 供應商無法提供文件化的星期五早上交付率數據\n• 活動週緊急情況沒有明確升級聯絡（單一銷售代表不夠——必須有運營/調度聯絡）\n\n**對香港宴會運營有效的關係模式：**\n\n• 季度業務檢視，聚焦未來 13 週的確認活動\n• 與 F&B 團隊的每月量預測通話\n• 提前 16+ 週為所有吉日星期六預鎖配額\n• 一年中 8–10 個最高風險活動的聯合應急規劃\n• 開放發票對賬和質量問題記錄\n\n願意以此參與級別運營的供應商是值得承諾的。將宴會客戶視為交易性量的供應商會在新人籌備兩年的婚禮上讓您失敗。",
      },
      {
        heading: "實用攻略：從婚宴預訂到活動執行",
        body: "**單一婚宴活動的端到端採購工作流程：**\n\n**預訂時（12–18 個月前）**\n• 捕獲預期活動日期、預期賓客人數、高端加價意圖\n• 立即標記吉日星期六——這些需要供應商方在一週內知曉\n\n**菜單試菜時（6–9 個月前）**\n• 鎖定菜式組合；確認海鮮高端加價\n• 計算暫定量需求：圍數 × 每圍規格\n• 將暫定量傳達給採購團隊\n\n**賓客人數鎖定時（3–4 個月前）**\n• 細化量計算\n• 書面向供應商確認配額請求\n• 收到供應商書面配額確認（量、等級、價格上限、交付窗口）\n\n**配額鎖定時（8–12 週前）**\n• 雙向書面承諾最終量\n• 書面確認替代協議\n• 確定後備供應商以應急量\n• 確認冷鏈交付窗口（星期六活動的星期五早上）\n\n**活動週（最終調整）**\n• 確認任何賓客人數微調（通常 ≤±2 圍）\n• 提前 72 小時重新確認交付時間表\n• 驗證物業內冷藏容量\n• 最終 BEO（宴會活動單）分發給廚房、採購、調度\n\n**活動日（星期五交付 → 星期六服務）**\n• 星期五 09:00–13:00：收貨、檢查、需要時拒收\n• 星期五 13:00–18:00：廚房準備工作\n• 星期六早上：最終準備、最後刺身切片\n• 星期六 18:30–22:30：服務\n• 星期六活動後：用後產出記錄到下一個預測週期\n\n**活動後（7 天內）**\n• 產出分析：實際使用 vs. 訂購，按產品\n• 向供應商提供質量反饋（正面 AND 負面）\n• 為類似情況的下一活動更新採購參數\n• 對賬發票\n\n**不可跳過的一項：** 維護按活動的採購記錄，捕獲實際收到的產品、等級、產出和任何質量問題。12 個月下來，這些數據會告訴您哪個供應商對宴會客戶可靠，哪個不可靠。憑直覺採購的宴會餐飲運營會被燙傷。憑數據採購的不會。",
      },
    ],
    conclusion: "香港婚宴海鮮採購獎勵將其視為高風險、時間鎖定的供應鏈而非常規餐廳訂單的運營。經濟回報誘人——高端加價產生卓越利潤——但執行風險無情。吉日星期六的單一交付失敗可造成六位數的產品、聲譽和客戶善意損失。在此遊戲中勝出的酒店、宴會廳和到會運營商提前 8–16 週鎖定配額，書面要求星期五早上交付承諾，在需要前建立替代協議，並將其海鮮供應商視為戰略夥伴而非交易性供應商。採購紀律以利潤、可靠性和訂滿明年吉日星期六的聲譽回報。",
    ctaTitle: "香港婚宴運營的高端海鮮——稻荷環球食品",
    cta: "我們向香港酒店宴會運營、專業婚宴廳和到會運營商供應刺身級海膽和三文魚——具備吉日配額鎖定、星期五早上交付承諾、書面替代協議和活動量擴展能力。聯繫我們討論您的婚宴活動日曆、高端加價預期和供應商評估標準，我們將在 24 小時內提供宴會採購方案。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return {
    alternates: alternatesFor(locale as Locale, "blog/hk-wedding-banquet-seafood-sourcing"),
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
              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold mb-3">
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

          <div className="mt-12 p-8 bg-rose-50 rounded-lg border border-rose-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{c.ctaTitle}</h3>
            <p className="text-gray-700 mb-4">{c.cta}</p>
            <a
              href={`/${locale}/contact`}
              className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition"
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
