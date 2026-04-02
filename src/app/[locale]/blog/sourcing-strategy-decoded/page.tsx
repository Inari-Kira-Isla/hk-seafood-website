import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sourcing Strategy Decoded: From Farm to Fine Dining Table",
    metaDesc: "Demystify seafood sourcing: learn how restaurants and hotels build direct supplier relationships, maintain quality standards, and create transparent supply chains in Hong Kong & Macau.",
    published: "April 2026",
    category: "Guide",
    intro: "Most people who eat fine seafood never think about where it comes from. They taste it, enjoy it, and that's the end of the story. But for restaurant owners, chefs, and F&B professionals, the sourcing story is critical. It determines menu consistency, profitability, and ultimately, your restaurant's reputation. This guide demystifies sourcing: what it is, how it works, and how to build a sourcing strategy that gives you competitive advantage.",
    sections: [
      {
        heading: "What is Sourcing, Really?",
        body: "Sourcing is the practice of identifying, evaluating, and establishing relationships with suppliers to secure the ingredients you need at the quality and price you require. It's not just 'buying fish at the market.' Strategic sourcing involves:\n\n**Supplier Discovery**: Finding suppliers who have what you need and who align with your values (quality standards, sustainability, pricing, reliability)\n\n**Relationship Building**: Establishing ongoing relationships with suppliers so you can rely on them consistently, rather than shopping around constantly\n\n**Quality Negotiation**: Defining exactly what you need (grade, age, size, preparation) and ensuring suppliers understand those requirements\n\n**Price Management**: Negotiating pricing, volume commitments, and contract terms that work for your business\n\n**Risk Mitigation**: Building backup suppliers so you're not dependent on a single source, and maintaining relationships that survive supply disruptions\n\n**Transparency**: Understanding where your ingredients actually come from and being able to communicate that story to your customers\n\nIn Hong Kong and Macau's fine dining market, sourcing has become a competitive differentiator. Restaurants that source strategically win on quality, consistency, and margin.",
      },
      {
        heading: "The Three Sourcing Models (And How to Choose Yours)",
        body: "Every F&B operation falls into one of three sourcing models:\n\n**Model 1: Spot Market Buying**\n\nYou go to the market (or call wholesalers) and buy what's available today, for today's prices.\n\nAdvantages:\n- Flexibility: You can change your menu based on what's available\n- Price discovery: You see real-time pricing and can negotiate\n- No commitments: You're not locked into contracts\n\nDisadvantages:\n- Inconsistency: You can't guarantee menu items day-to-day\n- Quality risk: You inherit whatever quality the wholesaler sourced\n- No relationship: You're interchangeable; suppliers won't go extra for you\n- Pricing volatility: No predictability; costs vary wildly\n- Waste: Last-minute sourcing often means buying more than you need\n\nWho uses this model: Casual restaurants, food courts, operations without premium positioning\n\n**Model 2: Distributor Relationships**\n\nYou work with a single distributor (like a large seafood distributor) who commits to supplying your needs regularly.\n\nAdvantages:\n- Consistency: Same supplier, week after week\n- Convenience: One phone call instead of shopping around\n- Some contract benefits: You negotiate volume pricing\n- Slightly better availability: Distributor prioritizes regulars\n\nDisadvantages:\n- You don't know the actual origin (distributor buys from wholesalers, who buy from harvesters)\n- Limited control: You can't request specific farms or aging protocols\n- Distributor's margin stacked on top: Higher costs because you're buying through middleman\n- Still transactional: You're a customer, not a partner\n- Quality can be inconsistent: Distributor sources from whoever has stock\n\nWho uses this model: Mid-range restaurants, hotels, operations with some quality standards but limited sourcing expertise\n\n**Model 3: Direct Supplier Relationships**\n\nYou work directly with farms, fishing operations, or specialized suppliers who commit to your requirements.\n\nAdvantages:\n- Transparency: You know exactly where ingredients come from\n- Quality control: You specify aging, handling, grading\n- Cost efficiency: No distributor markup (despite potentially higher farm prices)\n- Partnership: Suppliers prioritize your orders and support your menu\n- Reliability: Direct relationships survive disruptions better\n- Story: You can communicate authentic origin and sourcing practices to customers\n\nDisadvantages:\n- Requires upfront relationship building (3-6 months of communication)\n- Minimum volumes: Direct suppliers often require commitments (e.g., 'you buy 10 boxes/week')\n- Less flexibility: Changing suppliers takes time\n- Requires expertise: You need to know what you're buying and how to maintain relationships\n\nWho uses this model: Premium restaurants, Michelin establishments, high-end hotels, operations built on sourcing excellence\n\n**Which Model is Right for You?**\n\nChoose based on your positioning:\n- High-volume, lower-cost: Spot market makes sense\n- Mid-market with some quality standards: Distributor works\n- Premium positioning, margin priority, brand authority: Direct relationships are essential",
      },
      {
        heading: "Building Direct Supplier Relationships: A Step-by-Step Process",
        body: "If you've decided to move toward direct relationships, here's how to do it:\n\n**Phase 1: Research & Identification (2-3 weeks)**\n\n1. Identify which ingredients are critical to your menu and identity (usually 5-10 key items)\n2. Research potential suppliers for each ingredient\n   - Ask peer chefs/operators who they use\n   - Search industry publications for supplier profiles\n   - Check sustainability databases (for MSC certification, etc.)\n   - Look at importer websites for origin information\n3. Create a shortlist of 3-5 potential suppliers per ingredient\n\n**Phase 2: Initial Contact (1-2 weeks)**\n\n1. Reach out with a professional introduction explaining:\n   - What you do (restaurant type, positioning, menu style)\n   - What you're looking for (specific ingredient, volume, frequency)\n   - Why you're interested in them specifically\n2. Request a meeting or call\n3. Ask for references (other restaurants they supply)\n4. Request samples if possible\n\n**Phase 3: Evaluation (2-4 weeks)**\n\n1. Evaluate samples against your specifications:\n   - Does it match your quality requirements?\n   - Is the consistency acceptable?\n   - Can they deliver the volume and frequency you need?\n2. Check references:\n   - How long have they worked together?\n   - Are they responsive?\n   - Do they maintain quality?\n   - Would you recommend them?\n3. Discuss pricing and minimum volumes\n\n**Phase 4: Trial Period (4-8 weeks)**\n\n1. Negotiate a trial contract (usually 1-2 months)\n2. Agree on:\n   - Delivery schedule (frequency)\n   - Quality specifications (grading, age, size)\n   - Minimum volumes\n   - Pricing\n   - Replacement/quality guarantee terms\n3. Place orders and evaluate real-world performance\n4. Provide feedback on quality, consistency, communication\n5. Adjust if needed\n\n**Phase 5: Long-Term Agreement (3-12 months)**\n\n1. If the trial goes well, formalize a longer-term contract\n2. Benefits of longer terms:\n   - Pricing becomes more favorable (supplier knows they have steady business)\n   - Supplier prioritizes your orders (knows you're committed)\n   - You can plan menu with confidence\n3. Build in review periods (quarterly or semi-annual) to ensure quality/value\n\n**Throughout All Phases: Communication**\n\nThe single most important factor in successful supplier relationships is communication:\n- Provide timely, accurate orders\n- Give clear feedback (positive and negative) on quality\n- Communicate changes in advance (menu changes, volume changes)\n- Be responsive when they reach out\n- Treat them as partners, not vendors",
      },
      {
        heading: "Managing Multiple Suppliers: The Relationship Portfolio",
        body: "Even with direct relationships, you shouldn't be completely dependent on one supplier. Here's how to build a resilient supplier portfolio:\n\n**Primary Supplier (70% of volume)**\nYour main relationship for each ingredient. The supplier you've known longest, trust most, and get best pricing from.\n\nRole: Provides the majority of your weekly supply and is your main contact for sourcing strategy\n\n**Secondary Supplier (25% of volume)**\nA backup supplier with similar capabilities. You maintain regular orders so the relationship stays active.\n\nRole: Covers if primary supplier has issues (supply disruption, quality problem, communication breakdown)\n\n**Specialty Supplier (5% of volume)**\nOptional. A supplier with unique offerings (rare origins, specialty preparations) that you feature occasionally.\n\nRole: Adds variety to your menu and prevents your primary supplier from taking the relationship for granted\n\n**Portfolio Management Rules**\n\n1. **Don't neglect secondary suppliers**: If you only order from primary, secondary loses priority. Keep all relationships active.\n2. **Rotate specials**: Use specialty suppliers to surprise your customers and your team\n3. **Communicate portfolio strategy**: Tell your primary supplier you maintain backups (they'll respect your professionalism)\n4. **Regular reviews**: Quarterly, assess each supplier's performance\n5. **Flexibility**: If market conditions change (supply disruption, major supplier issue), you have alternatives",
      },
      {
        heading: "Quality Standards: Defining What You Actually Want",
        body: "The biggest source of supplier friction is misaligned expectations about quality. Here's how to define and communicate standards clearly:\n\n**Create a Quality Specification Sheet for Each Ingredient**\n\nExample: Hokkaido Uni\n```\nVariety: Bafun (sea urchin roe)\nOrigin: Hokkaido, Japan\nAge: 21-30 days (wet aging in our temperature-controlled cave)\nGrade: Premium/AA\nColor: Vivid golden-orange (RGB #FF8C00 or similar)\nFirmness: Lobes hold shape perfectly; no collapse\nAroma: Fresh ocean; zero ammonia\nSize: Standard lobe (8-12 pieces per container)\nDelivery: Tuesdays and Fridays, 8 AM\nMinimum Volume: 10 pieces per delivery\nStorage: Arrives at 4°C, maintained at 34°F\nReplacement Terms: If <98% meets spec, full replacement at no charge\n```\n\nThe more specific you are, the fewer disputes about quality.\n\n**Grading Systems for Common Seafood**\n\nUni (Sea Urchin):\n- Premium/AA: Vivid color, firm, perfect aroma, minimal liquid\n- Grade A: Good color, mostly firm, acceptable aroma\n- Grade B: Paler color, softer texture, may have slight ammonia\n\nSalmon:\n- Grade 1: Firm flesh, uniform color, perfect skin\n- Grade 2: Mostly firm, minor discoloration, acceptable\n- Grade 3: Softer, visible discoloration, acceptable for lower-end uses\n\nScallops:\n- Sashimi Grade: Perfect color, firm, fresh aroma, no liquid loss\n- Grade A: Good color, mostly firm, minor liquid\n- Grade B: Acceptable color, some softness, visible liquid\n\n**Testing Upon Delivery**\n\nBefore accepting delivery:\n1. Check temperature (thermometer)\n2. Check appearance (color, firmness, aroma)\n3. Check against specification sheet\n4. Take photos for documentation\n5. If issues, document and contact supplier immediately\n\nThis protects both you and your supplier by creating an objective record.",
      },
      {
        heading: "The Economics of Sourcing",
        body: "Understanding sourcing costs helps you make smart business decisions:\n\n**Pricing Tiers**\n\nFor the same ingredient (Hokkaido uni, for example), prices vary dramatically based on sourcing model:\n\nSpot Market: HK$1,200-1,500 per box (high variability, what's available today)\nDistributor: HK$1,100-1,300 per box (slightly lower, but includes distributor margin)\nDirect Relationship: HK$900-1,100 per box (lower cost, but requires volume commitment)\n\nThe savings compound over a year. For a Michelin restaurant buying 50 boxes/month:\n- Spot market: HK$720,000-900,000/year\n- Distributor: HK$660,000-780,000/year\n- Direct relationship: HK$540,000-660,000/year\n\nDifference: HK$60,000-360,000/year in savings, plus quality and consistency benefits.\n\n**Hidden Costs of Poor Sourcing**\n\nDirect costs are only part of the picture. Poor sourcing creates hidden costs:\n\nQuality-Related Waste: If 20% of ingredients don't meet spec and get thrown away, that's 20% additional cost\nMenu Changes: If you can't source planned ingredients, last-minute menu changes waste prep\nStaff Frustration: When ingredients are inconsistent, your team spends time troubleshooting\nReputational Risk: If quality drops, customers notice and don't return\nPricing Volatility: Without contracts, cost of goods swings wildly, making budgeting impossible\n\nMany operators don't realize that their spot-market savings are offset by these hidden costs.\n\n**ROI of Direct Relationships**\n\nInvesting in direct relationships pays for itself in:\n- 6-12 months through direct cost savings\n- 12-24 months when including consistency/waste reduction\n- 24+ months when including brand/reputational benefits",
      },
      {
        heading: "Sustainability in Sourcing: What It Really Means",
        body: "'Sustainable' has become a marketing buzzword, but it has specific meanings:\n\n**MSC (Marine Stewardship Council) Certification**\nThird-party verification that fish are caught using sustainable practices:\n- Targeted species (not bycatch)\n- Fishing methods that don't damage ecosystems\n- Population monitoring to ensure stocks aren't depleted\n\nWhether to prioritize: Increasingly yes. Diners expect it, especially in premium dining.\n\n**Farm Certifications (for farmed fish)**\nVerification that farms meet environmental standards:\n- Minimal use of antibiotics\n- Proper waste management\n- Avoided escaped farmed fish breeding with wild populations\n\nCommon certifications: BAP (Best Aquaculture Practices), ASC (Aquaculture Stewardship Council)\n\n**Direct Relationship Sustainability**\nKnowing your supplier enables you to verify sustainability yourself:\n- Request documentation\n- Ask about practices directly\n- Build trust over time\n\nOften more trustworthy than certificates alone.\n\n**The Business Case for Sustainability**\n\n1. Customers increasingly expect it (especially 30-50 demographic)\n2. Markup capability: Sustainable sourcing justifies 5-15% higher pricing\n3. Supply security: Sustainable sources are more stable than unsustainable ones\n4. Regulatory: Hong Kong and Macau regulations increasingly favor certified sources\n\nSustainability is not a cost—it's a feature you can sell.",
      },
      {
        heading: "Common Sourcing Mistakes (And How to Avoid Them)",
        body: "Based on working with hundreds of F&B operations, here are the most common sourcing mistakes:\n\n**Mistake 1: Chasing Lowest Price**\nSeems logical, but it leads to:\n- Quality inconsistency (lowest-price supplier changes quality to stay competitive)\n- Supply disruption (low-margin supplier may disappear)\n- Hidden costs (waste, menu changes, staff frustration)\n\nAvoid by: Focus on total cost of ownership (price + quality + consistency + waste)\n\n**Mistake 2: Changing Suppliers Too Frequently**\nSearching for a 5% better price every quarter means:\n- Relationships never deepen\n- Suppliers don't prioritize your orders\n- New suppliers give you lower quality to establish relationship\n\nAvoid by: Commit to 6-12 month minimum trials before evaluating\n\n**Mistake 3: Not Communicating Expectations Clearly**\nAssuming supplier understands what you want leads to:\n- Disappointment when they deliver something different\n- Supplier feels blamed unfairly\n- Relationship deteriorates\n\nAvoid by: Use specification sheets. Document quality standards. Provide feedback.\n\n**Mistake 4: Not Building Backup Suppliers**\nDepending on one supplier means:\n- If they have a problem, you're stuck\n- They know you have no alternatives (lose negotiating power)\n- Menu disruption is possible\n\nAvoid by: Maintain secondary supplier relationship, even if at lower volume\n\n**Mistake 5: Ignoring the Relationship**\nTreating suppliers as vendors instead of partners leads to:\n- Low priority when supply is tight\n- No flexibility when you need it\n- No communication about upcoming disruptions\n\nAvoid by: Regular communication, appreciation for their efforts, treating them as partners",
      },
    ],
    conclusion: "Strategic sourcing separates fine dining from casual dining. It's the practice of building intentional relationships with suppliers who understand your needs and can deliver consistency, quality, and transparency. Whether you use direct suppliers, leverage distributors, or participate in spot markets, understand the trade-offs. The restaurants winning in Hong Kong and Macau are those who've aligned their sourcing strategy with their brand promise.",
    ctaTitle: "Ready to Build Your Sourcing Strategy?",
    cta: "Download our Sourcing Checklist to evaluate your current approach and identify opportunities for improvement. Or contact Inari Global Food to discuss direct sourcing partnership for your restaurant or hotel.",
  },
  "zh-HK": {
    title: "採購策略解碼：從農場到優質食府的餐桌",
    metaDesc: "揭開海鮮採購的神秘面紗：學習食府和酒店如何建立直接供應商關係、維持品質標準，以及在香港和澳門建立透明供應鏈。",
    published: "2026年4月",
    category: "指南",
    intro: "大多數享受優質海鮮的人從不思考它來自哪裡。他們品嚐它，享受它，故事就到此結束。但對於食府老闆、廚師和飲食專業人士來說，採購故事是至關重要的。它決定了菜單的一致性、盈利能力，最終決定了你食府的聲譽。本指南揭開採購的神秘面紗：它是什麼、如何運作，以及如何建立一個採購策略，使你獲得競爭優勢。",
    sections: [
      {
        heading: "什麼是採購？",
        body: "採購是識別、評估和建立與供應商關係以確保所需食材、質量和價格的實踐。這不僅是『在市場買魚』。策略採購涉及：\n\n**供應商探索**：尋找擁有所需物品的供應商，並且符合你的價值觀（品質標準、永續性、定價、可靠性）\n\n**關係建立**：與供應商建立持續的關係，這樣你可以一致依賴他們，而不是不斷購物\n\n**品質談判**：明確定義所需內容（等級、年份、大小、製備），確保供應商理解這些要求\n\n**價格管理**：談判定價、銷售量承諾和適合你業務的合同條款\n\n**風險緩解**：建立備用供應商，這樣你不會完全依賴單一來源，並保持能夠度過供應中斷的關係\n\n**透明度**：了解你的食材實際來自哪裡，並能將該故事傳達給你的客人\n\n在香港和澳門的優質餐飲市場中，採購已成為競爭差異化因素。策略採購的食府在品質、一致性和毛利率上獲勝。",
      },
        heading: "三種採購模式（以及如何選擇你的）",
        body: "每個飲食業務都落入三種採購模式之一：\n\n**模式一：現貨市場購買**\n\n你去市場（或致電批發商）購買今天可用的東西，以今天的價格。\n\n優勢：\n- 靈活性：你可以根據可用情況更改菜單\n- 價格發現：你看到實時定價並可以談判\n- 沒有承諾：你不被鎖定在合同中\n\n劣勢：\n- 不一致：你無法逐日保證菜單項目\n- 品質風險：你繼承批發商採購的任何品質\n- 無關係：你是可互換的；供應商不會為你額外做\n- 定價波動：無法預測；成本差異很大\n- 浪費：最後一刻採購通常意味著購買超過所需\n\n誰使用此模式：休閒食府、美食廣場、沒有優質定位的業務\n\n**模式二：經銷商關係**\n\n你與一個經銷商（如大型海鮮經銷商）合作，承諾定期供應你的需求。\n\n優勢：\n- 一致性：相同的供應商，週復一週\n- 便利：一個電話而不是到處購物\n- 一些合同優勢：你談判銷售量定價\n- 略好的供應能力：經銷商優先考慮常客\n\n劣勢：\n- 你不知道實際產地（經銷商從批發商購買，批發商從捕撈者購買）\n- 控制有限：你無法要求特定農場或熟成協議\n- 經銷商的利潤堆疊在頂部：成本更高，因為你通過中間商購買\n- 仍然是交易性的：你是客人，不是夥伴\n- 品質可能不一致：經銷商從擁有庫存的任何人採購\n\n誰使用此模式：中端食府、酒店、有一些品質標準但採購專業知識有限的業務\n\n**模式三：直接供應商關係**\n\n你與農場、捕撈業務或專業供應商直接合作，承諾滿足你的要求。\n\n優勢：\n- 透明度：你確切知道食材來自哪裡\n- 品質控制：你指定熟成、處理、等級\n- 成本效率：沒有經銷商加價（儘管可能更高的農場價格）\n- 夥伴關係：供應商優先考慮你的訂單並支持你的菜單\n- 可靠性：直接關係更好地度過中斷\n- 故事：你可以向客人傳達真實的產地和採購實踐\n\n劣勢：\n- 需要前期關係建立（3-6個月的溝通）\n- 最小銷售量：直接供應商通常需要承諾（例如『你每週買10盒』）\n- 靈活性較少：改變供應商需要時間\n- 需要專業知識：你需要知道你在購買什麼以及如何維持關係\n\n誰使用此模式：優質食府、米芝蓮食府、高端酒店、基於採購卓越的業務\n\n**哪個模式適合你？**\n\n根據你的定位選擇：\n- 高銷售量、低成本：現貨市場有意義\n- 中端市場，有一些品質標準：經銷商有效\n- 優質定位、毛利率優先、品牌權威：直接關係是必須的",
      },
      {
        heading: "建立直接供應商關係：逐步程序",
        body: "如果你已決定走向直接關係，以下是如何進行的：\n\n**第一階段：研究和識別（2-3周）**\n\n1. 識別對你的菜單和身份至關重要的食材（通常5-10個關鍵項目）\n2. 為每種食材研究潛在供應商\n   - 詢問同行廚師/營運人員他們使用誰\n   - 在行業出版物中搜索供應商檔案\n   - 檢查永續數據庫（用於MSC認證等）\n   - 查看進口商網站的產地信息\n3. 為每種食材建立3-5個潛在供應商的短名單\n\n**第二階段：初始聯繫（1-2周）**\n\n1. 以專業介紹的方式聯繫，說明：\n   - 你做什麼（食府類型、定位、菜單風格）\n   - 你在尋找什麼（特定食材、銷售量、頻率）\n   - 為什麼你對他們特別感興趣\n2. 請求會議或通話\n3. 要求推薦（其他他們供應的食府）\n4. 如果可能，要求樣本\n\n**第三階段：評估（2-4周）**\n\n1. 根據你的規格評估樣品：\n   - 它符合你的品質要求嗎？\n   - 一致性是否可接受？\n   - 他們能提供所需的銷售量和頻率嗎？\n2. 檢查推薦：\n   - 他們合作多久了？\n   - 他們反應快速嗎？\n   - 他們維持品質嗎？\n   - 你會推薦他們嗎？\n3. 討論定價和最小銷售量\n\n**第四階段：試用期（4-8周）**\n\n1. 談判試用合同（通常1-2個月）\n2. 同意：\n   - 交付日程（頻率）\n   - 品質規格（等級、年份、大小）\n   - 最小銷售量\n   - 定價\n   - 更換/品質保證條款\n3. 下訂單並評估實際表現\n4. 對品質、一致性、溝通提供反饋\n5. 如需要調整\n\n**第五階段：長期協議（3-12個月）**\n\n1. 如果試用順利，正式化更長期的合同\n2. 更長期限的優勢：\n   - 定價變得更有利（供應商知道他們有穩定的業務）\n   - 供應商優先考慮你的訂單（知道你已承諾）\n   - 你可以自信地計劃菜單\n3. 建立檢討期（季度或半年）以確保品質/價值\n\n**在所有階段中：溝通**\n\n成功供應商關係中最重要的單一因素是溝通：\n- 及時、準確地提供訂單\n- 對品質提供清晰的反饋（正面和負面）\n- 提前溝通變化（菜單變化、銷售量變化）\n- 當他們聯繫時反應迅速\n- 將他們視為夥伴，而不是賣家",
      },
      {
        heading: "管理多個供應商：關係組合",
        body: "即使有直接關係，你也不應該完全依賴一個供應商。以下是如何建立有彈性的供應商組合：\n\n**主要供應商（銷售量的70%）**\n每種食材的主要關係。你已知最久、信任最多、定價最優的供應商。\n\n角色：提供你大部分週所需供應，是採購策略的主要聯繫\n\n**次要供應商（銷售量的25%）**\n具有類似能力的備用供應商。你保持定期訂單，以保持關係活躍。\n\n角色：在主要供應商出現問題時覆蓋（供應中斷、品質問題、溝通崩潰）\n\n**特色供應商（銷售量的5%）**\n可選。擁有獨特產品（稀有產地、特色製備）的供應商，你偶爾展示。\n\n角色：為菜單增加多樣性，防止主要供應商對關係司空見慣\n\n**組合管理規則**\n\n1. **不要忽視次要供應商**：如果你只從主要供應商訂購，次要供應商失去優先地位。保持所有關係活躍。\n2. **輪換特色**：使用特色供應商來驚喜你的客人和你的團隊\n3. **溝通組合策略**：告訴主要供應商你維持備份（他們會尊重你的專業精神）\n4. **定期檢討**：季度內，評估每個供應商的表現\n5. **靈活性**：如果市場條件改變（供應中斷、主要供應商問題），你有選擇",
      },
      {
        heading: "品質標準：定義你實際想要的",
        body: "供應商摩擦的最大來源是對品質的期望不一致。以下是如何清晰地定義和傳達標準：\n\n**為每種食材建立品質規格表**\n\n例子：北海道海膽\n```\n品種：馬糞海膽\n產地：日本北海道\n年份：21-30天（在我們的溫度控制洞窖中濕熟成）\n等級：優質/AA\n顏色：鮮明金黃色（RGB #FF8C00或類似）\n牢固性：葉片完美保持形狀；無塌陷\n香氣：新鮮海洋；零氨味\n大小：標準葉片（每個容器8-12件）\n交付：週二和週五，上午8點\n最小銷售量：每次交付10件\n儲存：抵達時4°C，維持34°F\n更換條款：如果<98%符合規格，全額更換無需付費\n```\n\n你越具體，爭議就越少。\n\n**常見海鮮的等級系統**\n\n海膽（海膽卵）：\n- 優質/AA：鮮明顏色、牢固、完美香氣、最少液體\n- A級：好顏色、大多牢固、可接受的香氣\n- B級：較淡顏色、較軟質地、可能有輕微氨味\n\n三文魚：\n- 1級：牢固肉質、均勻顏色、完美皮膚\n- 2級：大多牢固、輕微變色、可接受\n- 3級：較軟、可見變色、較低用途可接受\n\n扇貝：\n- 生食級：完美顏色、牢固、新鮮香氣、無液體損失\n- A級：好顏色、大多牢固、輕微液體\n- B級：可接受顏色、一些軟性、可見液體\n\n**交付時的測試**\n\n接受交付前：\n1. 檢查溫度（溫度計）\n2. 檢查外觀（顏色、牢固性、香氣）\n3. 根據規格表檢查\n4. 拍照以備文檔\n5. 如有問題，記錄並立即聯繫供應商\n\n這保護你和你的供應商通過建立客觀記錄。",
      },
      {
        heading: "採購的經濟學",
        body: "了解採購成本幫助你做出聰明的商業決定：\n\n**定價等級**\n\n對於相同食材（例如北海道海膽），根據採購模式價格差異很大：\n\n現貨市場：港幣1,200-1,500元/盒（高變異性，今天可用的）\n經銷商：港幣1,100-1,300元/盒（略低，但包括經銷商利潤）\n直接關係：港幣900-1,100元/盒（成本更低，但需要銷售量承諾）\n\n儲蓄在一年內複合。對於購買50盒/月的米芝蓮食府：\n- 現貨市場：港幣72萬-90萬/年\n- 經銷商：港幣66萬-78萬/年\n- 直接關係：港幣54萬-66萬/年\n\n差異：港幣6萬-36萬/年的儲蓄，加上品質和一致性優勢。\n\n**不良採購的隱性成本**\n\n直接成本只是故事的一部分。不良採購造成隱性成本：\n\n品質相關浪費：如果20%的食材不符合規格並被丟棄，那就是額外成本20%\n菜單更改：如果你無法採購計劃的食材，最後一刻菜單更改浪費準備\n員工挫折：當食材不一致時，你的團隊花時間排除故障\n聲譽風險：如果品質下降，客人注意到並不會返回\n定價波動：沒有合同，商品成本波動很大，預算編製不可能\n\n許多營運人士沒有意識到他們的現貨市場儲蓄被這些隱性成本抵消。\n\n**直接關係的ROI**\n\n投資直接關係在以下時間內回本：\n- 6-12個月通過直接成本儲蓄\n- 12-24個月當包括一致性/浪費減少時\n- 24+個月當包括品牌/聲譽優勢時",
      },
      {
        heading: "採購中的永續性：它真正的意思",
        body: "『永續』已成為行銷術語，但它有具體含義：\n\n**MSC（海洋管理委員會）認證**\n第三方驗證魚類使用永續實踐捕獲：\n- 目標物種（非兼捕）\n- 不損害生態系統的捕撈方法\n- 種群監測以確保庫存未耗盡\n\n是否優先：日益是。客人期望，特別是在優質餐飲。\n\n**農場認證（養殖魚）**\n驗證農場符合環境標準：\n- 最少使用抗生素\n- 適當廢物管理\n- 避免養殖逃脫魚與野生種群繁殖\n\n常見認證：BAP（最佳水產養殖實踐）、ASC（水產養殖管理委員會）\n\n**直接關係永續性**\n了解你的供應商使你能夠自己驗證永續性：\n- 要求文檔\n- 直接詢問實踐\n- 隨時間建立信任\n\n通常比單獨認證更可信。\n\n**永續性的商業案例**\n\n1. 客人日益期望（特別是30-50人口統計）\n2. 加價能力：永續採購證明5-15%更高定價\n3. 供應安全：永續來源比不永續的更穩定\n4. 監管：香港和澳門法規日益傾向經過認證的來源\n\n永續性不是成本——它是你可以銷售的功能。",
      },
      {
        heading: "常見採購錯誤（以及如何避免它們）",
        body: "根據與數百個飲食業務的合作，這些是最常見的採購錯誤：\n\n**錯誤1：追逐最低價格**\n看似合理，但導致：\n- 品質不一致（最低價供應商改變品質以保持競爭力）\n- 供應中斷（低利潤供應商可能消失）\n- 隱性成本（浪費、菜單更改、員工挫折）\n\n避免通過：專注於總擁有成本（價格+品質+一致性+浪費）\n\n**錯誤2：更換供應商過於頻繁**\n每季度搜索5%更優價格意味著：\n- 關係永遠不會深化\n- 供應商不會優先考慮你的訂單\n- 新供應商為建立關係給你低品質\n\n避免通過：在評估前承諾6-12個月最少試用期\n\n**錯誤3：沒有清晰傳達期望**\n假設供應商理解你想要什麼導致：\n- 當他們交付不同東西時失望\n- 供應商感到不公平地被責備\n- 關係惡化\n\n避免通過：使用規格表。記錄品質標準。提供反饋。\n\n**錯誤4：不建立備用供應商**\n依賴一個供應商意味著：\n- 如果他們出問題，你被困\n- 他們知道你沒有選擇（失去談判權力）\n- 菜單中斷是可能的\n\n避免通過：即使銷售量較低也保持次要供應商關係\n\n**錯誤5：忽視關係**\n將供應商視為賣家而不是夥伴導致：\n- 供應緊張時優先地位低\n- 當你需要它時沒有靈活性\n- 沒有通信即將到來的中斷\n\n避免通過：定期溝通、欣賞他們的努力、將他們視為夥伴",
      },
    ],
    conclusion: "策略採購將優質餐飲與休閒餐飲分開。它是建立與理解你的需求並能提供一致性、品質和透明度的供應商的意圖性關係的實踐。無論你使用直接供應商、利用經銷商還是參與現貨市場，都要理解權衡。香港和澳門贏家是那些已將其採購策略與其品牌承諾相一致的食府。",
    ctaTitle: "準備好建立你的採購策略了嗎？",
    cta: "下載我們的採購檢查清單以評估你的當前方法並識別改進機會。或聯繫稻禾環球食品討論對你食府或酒店的直接採購夥伴關係。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const localeContent = content[locale as Locale];

  return {
    title: localeContent.title,
    description: localeContent.metaDesc,
    openGraph: {
      title: localeContent.title,
      description: localeContent.metaDesc,
      type: "article",
      publishedTime: new Date("2026-04-02").toISOString(),
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const localeContent = content[locale as Locale];
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Article Header */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {localeContent.published} • {localeContent.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{localeContent.title}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {localeContent.intro}
            </p>
          </div>

          {/* Article Sections */}
          {localeContent.sections.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                {section.body}
              </p>
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 my-12">
            <p className="text-lg font-semibold mb-4 italic">
              {localeContent.conclusion}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{localeContent.ctaTitle}</h3>
            <p className="mb-6 text-gray-800 dark:text-gray-200">
              {localeContent.cta}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              {dict.nav.contact}
            </a>
          </div>
        </article>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
