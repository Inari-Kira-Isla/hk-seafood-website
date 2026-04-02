import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Food Safety & Compliance Guide: Hong Kong and Macau Seafood Regulations",
    metaDesc: "Complete guide to seafood compliance requirements for Hong Kong & Macau restaurants, hotels, and operators. Import regulations, certifications, and best practices.",
    published: "April 2026",
    category: "Compliance",
    intro: "For F&B operators in Hong Kong and Macau, food safety compliance isn't optional—it's fundamental to keeping your license, protecting your customers, and maintaining your reputation. This guide covers the specific regulations governing seafood imports, handling, and service in both jurisdictions, plus practical strategies for staying compliant.",
    sections: [
      {
        heading: "Hong Kong Food Safety Framework",
        body: "Hong Kong operates under the Food Safety Ordinance (FSO), enforced by the Food and Environmental Hygiene Department (FEHD). Key requirements for seafood:\n\n**Import & Registration Requirements**\n- All seafood must be imported through licensed importers\n- Importers must submit certificates of origin and health certificates\n- Products are subject to random testing at the border\n- High-risk items (raw seafood for sashimi/oysters) get additional scrutiny\n- Any batch failing testing is quarantined and destroyed\n\n**Supplier Documentation**\nYou must maintain:\n- Importer's license and certificate\n- Certificate of origin (from farm/harvest location)\n- Health certificate (issued by exporting country's authority)\n- Test results proving freedom from bacterial/viral contamination\n- Traceability documentation (farm identification, harvest date)\n\nMissing documentation = FEHD can refuse entry or conduct store inspections\n\n**Temperature Control**\n- Seafood must maintain 0-4°C (32-39°F) during transport\n- Storage at point of sale: 0-4°C maximum\n- Violations result in warnings, fines, or license suspension\n\n**Handling & Preparation**\n- Raw seafood (sashimi, oysters) must come from approved suppliers on approved lists\n- No cross-contamination with other foods\n- Separate cutting boards, utensils for raw seafood\n- Staff training on food safety mandatory\n\n**Record-Keeping**\nHKFEHD requires:\n- Supplier records (with contact information)\n- Batch/lot numbers\n- Receipt dates and quantities\n- Temperature logs\n- Staff training records\n- Cleaning and sanitation logs\n\nRetention period: 2 years minimum",
      },
      {
        heading: "Macau Food Safety Framework",
        body: "Macau operates under the Decree-Law No. 92/91/M (Macau Food Hygiene Law), enforced by the Macau Food Safety Coordination Unit. Key differences from Hong Kong:\n\n**Import Approval**\n- All imported seafood requires pre-approval from Macau authorities\n- Application process takes 3-5 business days\n- Approval is product and supplier specific (can't change suppliers without reapplying)\n- Macau maintains its own approved supplier list\n\n**Supplier Certification Requirements**\nFor suppliers in Macau (whether for Macau restaurants or imports):\n- Health Code certification from Macau authorities\n- HACCP (Hazard Analysis and Critical Control Points) certification\n- Cold chain documentation\n- Regular health inspections (quarterly minimum)\n\n**Gaming Venue Specifics**\nIf you supply to gaming resorts (a major segment):\n- Additional documentation required (gaming license holders need verified suppliers)\n- Quarterly audits of supplier facilities\n- Documentation of food safety incidents must be reported to gaming authority\n- Higher fines for violations at gaming venues\n\n**Storage & Temperature**\n- Same as Hong Kong: 0-4°C\n- Additional requirement: separate storage for imported vs. local seafood\n- Documentation of temperature checks required every 2 hours\n\n**Processing & Preparation**\n- HACCP plans mandatory for any facility processing raw seafood\n- Staff health certificates required (annual)\n- Separate facilities or times for raw vs. cooked seafood processing",
      },
      {
        heading: "Cross-Border Compliance: Hong Kong-Macau Operations",
        body: "If you operate in both jurisdictions (many hotel chains, restaurant groups do), you need dual compliance:\n\n**Different Approval Processes**\nApproving a supplier in HK doesn't mean it's approved in Macau (and vice versa). You must:\n\n1. Get supplier approved in HK by FEHD\n2. Separately apply for approval in Macau\n3. Maintain separate documentation\n4. Use different import channels (can't cross-import between HK and Macau without reapproval)\n\n**Practical Strategy**\nMost restaurant groups solve this by:\n- Using HK-approved suppliers for HK operations\n- Using Macau-approved suppliers for Macau operations\n- Using international suppliers (e.g., Japan, Norway) who have pre-approval in both jurisdictions\n\nInternational suppliers with both approvals cost 10-20% premium but eliminate cross-border hassle.\n\n**Physical Movement of Product**\nYou cannot:\n- Move product from HK operation to Macau without customs clearance\n- Pool inventory between HK and Macau\n- Combine shipments from HK for use in Macau\n\nEach location must have independent supply chains.",
      },
      {
        heading: "Certifications & Standards That Matter",
        body: "Beyond government requirements, certain third-party certifications strengthen your position:\n\n**HACCP (Hazard Analysis and Critical Control Points)**\nWhat: Food safety management system identifying critical control points\nWho needs it: Required in Macau, optional but recommended in HK\nHow to get it: Work with certified food safety consultant (cost: HK$5,000-15,000)\nBenefit: Demonstrates proactive food safety; defense in case of incident\n\n**MSC (Marine Stewardship Council) Certification**\nWhat: Certification that fish was caught sustainably\nWho has it: Reputable suppliers\nWhy it matters: Increasingly expected by high-end customers; some regulatory incentives in both HK and Macau\nCost to verify: Minimal (just check supplier's MSC listing)\n\n**BRC (British Retail Consortium) Certification**\nWhat: Global food safety standard for suppliers\nWho has it: Large, professional suppliers\nWhy it matters: Signals professional operation; reduces your liability\nCost to verify: Minimal (just request certificate)\n\n**Food Safety Training Certificates**\nWhat: Proof your staff completed food safety training\nWho needs it: Required in both HK and Macau\nWho provides it: Government courses or licensed private trainers\nCost: HK$300-800 per person\nFrequency: Annual or biennial (check current requirements)\n\n**ISO 22000**\nWhat: International food safety management standard\nWho has it: Premium suppliers\nWhy it matters: Highest level of food safety assurance\nCost to verify: Free (just request certificate)",
      },
      {
        heading: "Common Compliance Issues & How to Avoid Them",
        body: "Based on FEHD and Macau authority inspection data:\n\n**Issue 1: Missing Supplier Documentation**\nMost common violation. Result: Warnings, fines, product seizure\n\nHow to avoid:\n- Require all suppliers to provide documentation BEFORE first delivery\n- Create a checklist: origin certificate, health certificate, test results, importer license\n- Keep copies organized by supplier\n- Update annually (some documents expire)\n\n**Issue 2: Temperature Control Failures**\nSecond most common. Result: Product recall, license suspension risk\n\nHow to avoid:\n- Invest in reliable refrigeration (no cheap units)\n- Install thermometers in all seafood storage areas\n- Log temperatures every 2 hours during operating hours\n- Train all staff on temperature requirements\n- Have backup plan for refrigeration failure\n\n**Issue 3: Cross-Contamination**\nThird most common. Result: Major fines, possible closure\n\nHow to avoid:\n- Separate cutting boards (color-code: red for raw, white for cooked)\n- Separate utensils\n- Dedicated prep area for raw seafood\n- Clean between uses (not just wipe)\n- Train staff on why this matters (not just rules)\n\n**Issue 4: Inadequate Staff Training**\nOften cited in inspection reports. Result: Warnings, mandatory retraining\n\nHow to avoid:\n- Complete formal food safety course (not just on-the-job training)\n- Certificate on file\n- Annual refresher training\n- Test staff monthly (simple quiz) to verify retention\n\n**Issue 5: Insufficient Records**\nOften compounded with other violations. Result: Fines increased 2-3x\n\nHow to avoid:\n- Maintain organized records from day 1\n- Keep 2+ years minimum\n- Digital backup (in case of fire/flood)\n- Create simple forms for staff to fill daily\n- Assign responsibility (one person manages compliance records)",
      },
      {
        heading: "Inspection Preparation Checklist",
        body: "FEHD and Macau authorities conduct random inspections. Here's what they look for:\n\n**Documentation (They will ask for)**\n☑ Supplier list with contact info\n☑ Import certificates for current inventory\n☑ Health certificates from exporting countries\n☑ Temperature logs (last 2 weeks)\n☑ Staff food safety certificates\n☑ Cleaning/sanitation logs\n☑ Record of any food safety incidents or complaints\n\n**Physical Inspection (They will observe)**\n☑ Refrigeration temperature (thermometer check)\n☑ Cleanliness of prep areas\n☑ Separation of raw/cooked areas\n☑ Proper labeling of ingredients (date, source)\n☑ Staff uniforms and hygiene\n☑ Pest control evidence (no rodents, insects)\n\n**Interview (They will ask)**\n☑ Name of supervisor responsible for food safety\n☑ When was staff trained?\n☑ What do you do if food is recalled?\n☑ Show them temperature log for today\n☑ Explain your supplier approval process\n\n**How to Prepare**\n1. Review all documentation 1 week before typical inspection period\n2. Do a mock inspection using checklist above\n3. Fix any issues immediately\n4. Brief your team on food safety basics\n5. Keep top manager available during inspection\n6. Be respectful and cooperative (attitude matters for borderline violations)",
      },
      {
        heading: "Raw Seafood Special Rules (Sashimi, Oysters, Ceviche)",
        body: "Raw seafood has extra regulations because of bacterial/viral risk:\n\n**Approved Supplier List (ASL)**\nBoth HK and Macau maintain official ASL for raw seafood\n- Only products from ASL suppliers can be served raw\n- Using non-ASL supplier for raw seafood = immediate violation\n- ASL is published online; check it before adding to menu\n\n**Freezing Requirements**\nSome raw seafood requires freezing to kill parasites:\n- Sashimi-grade fish: must be frozen to -4°C or lower for 7 days\n- Oysters: varies by origin; check supplier's certification\n- Uni: varies; typically not frozen requirement if sourced correctly\n\nFailure to freeze = liability for parasitic infection\n\n**Storage Separation**\nRaw seafood must be stored separately from:\n- Cooked seafood\n- Meat\n- Vegetables\n- All other ingredients\n\nReason: Any cross-contamination risk eliminates the 'raw ready' status\n\n**Staff Certification**\nStaff handling raw seafood should have additional training on:\n- Temperature control\n- Contamination prevention\n- Parasitic risk\n- What to do if product looks unusual\n\nInvest in specialized training (cost: HK$500-1,500 per person)\n\n**Communication to Customers**\nMany jurisdictions require disclosure when serving raw seafood:\n- 'This product contains raw fish'\n- 'This product may contain parasites'\n- Recommended in HK; required in some Macau establishments\n\nFailure to disclose = customer illness = major liability",
      },
      {
        heading: "2026 Regulatory Trends & Preparation",
        body: "Food safety regulation is evolving. Stay ahead:\n\n**Trend 1: Increased Traceability Requirements**\nBoth HK and Macau moving toward farm-to-table documentation\n- More detail on origin (not just country; specific farm/region)\n- Harvest date and batch number\n- Previous handling/storage documentation\n\nPrepare by: Requiring suppliers to provide detailed traceability documentation\n\n**Trend 2: Sustainability Documentation**\nIncreasing expectation that suppliers provide:\n- MSC or equivalent certification\n- Proof of sustainable farming/fishing practices\n- Carbon footprint documentation\n\nPrepare by: Prioritizing suppliers with sustainability credentials\n\n**Trend 3: Digital Record-Keeping**\nMovement away from paper logs toward digital platforms\n- Digital temperature logging (IoT sensors)\n- Cloud-based supplier documentation\n- Blockchain-based traceability\n\nPrepare by: Starting to use digital record systems now (not mandatory yet, but coming)\n\n**Trend 4: Temperature Monitoring Mandates**\nLikely coming: Continuous temperature monitoring (not just spot checks)\n- Sensors in refrigeration units\n- Automatic alerts if temperature drops\n- Data retention for audits\n\nPrepare by: Installing modern refrigeration with monitoring capability\n\n**Action Items for 2026**\n1. Audit current documentation system (is it sufficient for coming requirements?)\n2. Assess supplier documentation (can they provide increasing detail?)\n3. Upgrade refrigeration/monitoring if using old equipment\n4. Schedule staff training updates\n5. Budget for potential compliance system upgrades",
      },
      {
        heading: "Working with Compliance Suppliers",
        body: "The easiest way to stay compliant is to work with suppliers who understand regulations:\n\n**What to Ask Prospective Suppliers**\n\n☑ 'Are you on the FEHD approved list?' (if in HK)\n☑ 'Do you have Macau approval?' (if serving Macau)\n☑ 'Can you provide certificates of origin for every batch?'\n☑ 'What's your response time if a product fails testing?'\n☑ 'Do you have HACCP certification?'\n☑ 'Can you provide detailed traceability documentation?'\n☑ 'What happens if a health issue occurs?'\n☑ 'Are you insured for food safety liability?'\n\n**Red Flags (Don't Work with These Suppliers)**\n- Hesitate or refuse to provide origin certificates\n- Can't explain their quality control process\n- Don't have cold chain documentation\n- Suggest 'alternative' suppliers if your preferred product is unavailable\n- Offer suspiciously low pricing (often means cut corners on safety)\n- Don't maintain batch/lot records\n\n**Best Practice: Put It in the Contract**\nYour supplier agreement should specify:\n- Documentation requirements (what you'll receive)\n- Quality standards (grade, temperature, contamination limits)\n- Traceability commitment (can trace back to farm/harvest)\n- Replacement terms (if product fails spec)\n- Insurance requirements (liability coverage)\n- Audit rights (you can inspect facility)\n\nHaving clear contracts protects both you and your supplier by making expectations explicit.",
      },
    ],
    conclusion: "Food safety compliance in Hong Kong and Macau is complex but manageable if you understand the requirements and build a system around them. Work with compliant suppliers, maintain meticulous records, train your staff, and stay updated on regulatory changes. The cost of proactive compliance is far lower than the cost of a violation, recall, or food safety incident. Your customers' health—and your business—depend on it.",
    ctaTitle: "Need Help with Compliance Documentation?",
    cta: "Inari Global Food provides all required compliance documentation with our seafood supplies, including certificates of origin, health certificates, and traceability records. Contact us to discuss how we support your regulatory requirements.",
  },
  "zh-HK": {
    title: "食物安全及合規指南：香港及澳門海鮮法規",
    metaDesc: "香港及澳門食府、酒店及營運人員的海鮮合規要求完整指南。進口法規、認證及最佳實踐。",
    published: "2026年4月",
    category: "合規",
    intro: "對於香港和澳門的飲食營運人員來說，食物安全合規不是可選的——它是保持執照、保護客人和維持聲譽的基礎。本指南涵蓋了管理兩個司法管轄區海鮮進口、處理和服務的具體規定，以及保持合規的實踐策略。",
    sections: [
      {
        heading: "香港食物安全框架",
        body: "香港根據《食物安全條例》（FSO）運作，由食物環境衞生署（FEHD）執行。海鮮的關鍵要求：\n\n**進口及註冊要求**\n- 所有海鮮必須通過獲許可進口商進口\n- 進口商必須提交原產地證書和衞生證書\n- 產品在邊境受隨機檢測\n- 高風險物品（生魚片/生蠔用海鮮）受到額外審查\n- 任何批次不合格測試被隔離並銷毀\n\n**供應商文檔**\n你必須保持：\n- 進口商執照和證書\n- 原產地證書（來自農場/收穫位置）\n- 衞生證書（由出口國權威機構發行）\n- 測試結果證明不含細菌/病毒汙染\n- 可追溯性文檔（農場識別、收穫日期）\n\n缺失文檔 = FEHD可拒絕進入或進行店舖檢查\n\n**溫度控制**\n- 海鮮在運輸期間必須保持0-4°C（32-39°F）\n- 銷售點儲存：最多0-4°C\n- 違規導致警告、罰款或執照暫停\n\n**處理及製備**\n- 生海鮮（生魚片、生蠔）必須來自已批准供應商名單上的已批准供應商\n- 沒有與其他食物交叉汙染\n- 生海鮮的單獨砧板、用具\n- 強制性員工食物安全培訓\n\n**記錄保存**\nHKFEHD要求：\n- 供應商記錄（含聯繫信息）\n- 批次/批號\n- 接收日期和數量\n- 溫度日誌\n- 員工培訓記錄\n- 清潔和衞生日誌\n\n保留期：最少2年",
      },
      {
        heading: "澳門食物安全框架",
        body: "澳門根據《第92/91/M號法令》（澳門食物衞生法）運作，由澳門食物安全協調單位執行。與香港的主要差異：\n\n**進口批准**\n- 所有進口海鮮需要澳門當局的預先批准\n- 申請程序需要3-5個工作天\n- 批准是產品和供應商特定的（改變供應商而不重新申請不行）\n- 澳門維持其自己的已批准供應商名單\n\n**供應商認證要求**\n對於澳門供應商（無論是澳門食府還是進口）：\n- 澳門當局的《衞生守則》認證\n- HACCP（危害分析及臨界控制點）認證\n- 冷鏈文檔\n- 定期衞生檢查（最少季度）\n\n**博彩場地具體情況**\n如果你供應博彩度假村（主要部分）：\n- 需要額外文檔（博彩執照持有人需要驗證供應商）\n- 季度審計供應商設施\n- 食物安全事件文檔必須向博彩當局報告\n- 博彩場地違規罰款更高\n\n**儲存及溫度**\n- 與香港相同：0-4°C\n- 額外要求：進口海鮮與本地海鮮分開儲存\n- 每2小時溫度檢查文檔必需\n\n**加工及製備**\n- HACCP計劃對任何加工生海鮮的設施強制\n- 員工衞生證書要求（年度）\n- 生和熟海鮮加工分開設施或時間",
      },
      {
        heading: "跨境合規：香港-澳門業務",
        body: "如果你在兩個司法管轄區運作（許多酒店連鎖、食府集團都這樣），你需要雙重合規：\n\n**不同批准程序**\n在HK批准供應商並不意味著它在澳門被批准（反之亦然）。你必須：\n\n1. 在FEHD中批准香港供應商\n2. 分別在澳門申請批准\n3. 保持分開文檔\n4. 使用不同進口渠道（不能未經重新批准在HK和澳門之間交叉進口）\n\n**實踐策略**\n大多數食府集團通過以下方式解決：\n- 在HK業務中使用HK批准供應商\n- 在澳門業務中使用澳門批准供應商\n- 使用國際供應商（例如日本、挪威）在兩個司法管轄區具有預先批准\n\n在兩個司法管轄區中都有批准的國際供應商成本溢價10-20%，但消除了跨境麻煩。\n\n**產品物理移動**\n你不能：\n- 在未經海關清關的情況下將產品從HK業務移動到澳門\n- 在HK和澳門之間匯集庫存\n- 結合HK發貨以供澳門使用\n\n每個位置必須有獨立供應鏈。",
      },
      {
        heading: "重要的認證和標準",
        body: "除了政府要求外，某些第三方認證加強你的地位：\n\n**HACCP（危害分析及臨界控制點）**\n是什麼：識別臨界控制點的食物安全管理系統\n誰需要：在澳門要求，在HK可選但建議\n如何獲得：與經過認證的食物安全顧問合作（成本：港幣5,000-15,000）\n優勢：展示主動食物安全；如有事件則辯護\n\n**MSC（海洋管理委員會）認證**\n是什麼：魚類捕捉永續認證\n誰有：信譽供應商\n為什麼重要：日益被高端客人期望；一些HK和澳門的監管激勵\n驗證成本：最少（只需檢查供應商的MSC名單）\n\n**BRC（英國零售聯盟）認證**\n是什麼：供應商全球食物安全標準\n誰有：大型、專業供應商\n為什麼重要：表明專業運作；減少你的責任\n驗證成本：最少（只需請求證書）\n\n**食物安全培訓證書**\n是什麼：員工完成食物安全培訓的證明\n誰需要：在HK和澳門要求\n誰提供：政府課程或獲許可私人培訓師\n成本：港幣300-800元每人\n頻率：年度或兩年期（檢查當前要求）\n\n**ISO 22000**\n是什麼：國際食物安全管理標準\n誰有：優質供應商\n為什麼重要：最高食物安全保證水平\n驗證成本：免費（只需請求證書）",
      },
      {
        heading: "常見合規問題及如何避免它們",
        body: "根據FEHD和澳門當局檢查數據：\n\n**問題1：缺失供應商文檔**\n最常見違規。後果：警告、罰款、產品沒收\n\n如何避免：\n- 要求所有供應商在首次交付前提供文檔\n- 建立檢查清單：產地證書、衞生證書、測試結果、進口商執照\n- 按供應商組織副本\n- 年度更新（某些文檔過期）\n\n**問題2：溫度控制失敗**\n第二常見。後果：產品召回、執照暫停風險\n\n如何避免：\n- 投資可靠冷藏設備（無廉價單位）\n- 在所有海鮮儲存區安裝溫度計\n- 營業時間每2小時記錄溫度\n- 培訓所有員工溫度要求\n- 冷藏失敗備用計劃\n\n**問題3：交叉汙染**\n第三常見。後果：重大罰款、可能關閉\n\n如何避免：\n- 分開砧板（色彩編碼：紅色表示生，白色表示熟）\n- 分開用具\n- 生海鮮專用準備區域\n- 用途之間清潔（不僅是擦拭）\n- 培訓員工為什麼重要（不只是規則）\n\n**問題4：不適當員工培訓**\n檢查報告經常引用。後果：警告、強制再培訓\n\n如何避免：\n- 完成正式食物安全課程（不只是工作培訓）\n- 證書備案\n- 年度進修培訓\n- 月度測試員工（簡單問卷）驗證保留\n\n**問題5：記錄不足**\n經常與其他違規混合。後果：罰款增加2-3倍\n\n如何避免：\n- 從第一天開始保持組織記錄\n- 保持2+年最少\n- 數字備份（如果火災/洪水）\n- 為員工創建簡單填寫表格\n- 指派責任（一個人管理合規記錄）",
      },
      {
        heading: "檢查準備檢查清單",
        body: "FEHD和澳門當局進行隨機檢查。他們尋找的是：\n\n**文檔（他們會要求）**\n☑ 供應商名單含聯繫信息\n☑ 進口證書為當前庫存\n☑ 來自出口國衞生證書\n☑ 溫度日誌（過去2週）\n☑ 員工食物安全證書\n☑ 清潔/衞生日誌\n☑ 任何食物安全事件或投訴記錄\n\n**物理檢查（他們會觀察）**\n☑ 冷藏溫度（溫度計檢查）\n☑ 準備區域潔淨度\n☑ 生/熟區域分開\n☑ 食材適當標籤（日期、來源）\n☑ 員工制服和衞生\n☑ 蟲害控制證據（無嚙齒動物、昆蟲）\n\n**面談（他們會問）**\n☑ 負責食物安全的主管名字\n☑ 員工何時被培訓？\n☑ 如果食物被召回你做什麼？\n☑ 向他們展示今天的溫度日誌\n☑ 解釋你的供應商批准程序\n\n**如何準備**\n1. 典型檢查期之前1週檢查所有文檔\n2. 使用上面檢查清單進行模擬檢查\n3. 立即修復任何問題\n4. 向你的團隊簡報食物安全基礎\n5. 在檢查期間保持頂級經理可用\n6. 尊重和合作（態度對邊界違規很重要）",
      },
      {
        heading: "生海鮮特殊規則（生魚片、生蠔、橘子魚）",
        body: "生海鮮有額外規定，因為有細菌/病毒風險：\n\n**已批准供應商名單（ASL）**\nHK和澳門都維持生海鮮的官方ASL\n- 只有ASL供應商的產品才能生食\n- 使用非ASL供應商生海鮮 = 即時違規\n- ASL在線發佈；在添加到菜單前檢查\n\n**冷凍要求**\n某些生海鮮需要冷凍以殺死寄生蟲：\n- 生魚片級別魚：必須冷凍至-4°C或更低7天\n- 生蠔：因產地而異；檢查供應商的認證\n- 海膽：因產地而異；通常如果正確採購則無冷凍要求\n\n冷凍失敗 = 寄生蟲感染責任\n\n**儲存分開**\n生海鮮必須與以下分開儲存：\n- 熟海鮮\n- 肉\n- 蔬菜\n- 所有其他食材\n\n原因：任何交叉汙染風險消除『生就緒』狀態\n\n**員工認證**\n處理生海鮮的員工應有額外培訓：\n- 溫度控制\n- 汙染預防\n- 寄生蟲風險\n- 如果產品看起來異常怎麼辦\n\n投資專業培訓（成本：港幣500-1,500元每人）\n\n**與客人溝通**\n許多司法管轄區在提供生海鮮時要求披露：\n- 『本產品含生魚』\n- 『本產品可能含寄生蟲』\n- HK建議；某些澳門食府要求\n\n披露失敗 = 客人生病 = 重大責任",
      },
      {
        heading: "2026年監管趨勢及準備",
        body: "食物安全法規在演變。保持領先：\n\n**趨勢1：增加追蹤要求**\nHK和澳門都朝農場餐桌文檔移動\n- 產地更詳細（不只是國家；特定農場/地區）\n- 收穫日期和批號\n- 先前處理/儲存文檔\n\n準備通過：要求供應商提供詳細追蹤文檔\n\n**趨勢2：永續性文檔**\n越來越多期望供應商提供：\n- MSC或等效認證\n- 永續農業/漁業實踐證明\n- 碳足跡文檔\n\n準備通過：優先考慮具有永續認證的供應商\n\n**趨勢3：數字記錄保存**\n紙質日誌向數字平台移動\n- 數字溫度記錄（IoT傳感器）\n- 基於雲的供應商文檔\n- 基於區塊鏈的追蹤\n\n準備通過：現在開始使用數字記錄系統（還不強制，但正在逼近）\n\n**趨勢4：溫度監測授權**\n可能即將推出：連續溫度監測（不只是現場檢查）\n- 冷藏設備中的傳感器\n- 溫度下降時的自動警報\n- 審計數據保留\n\n準備通過：如果使用舊設備，現在安裝現代冷藏監測能力\n\n**2026行動項目**\n1. 審計現在文檔系統（是否足以滿足即將推出的要求？）\n2. 評估供應商文檔（他們能否提供增加細節？）\n3. 如果使用舊設備，升級冷藏/監測\n4. 安排員工培訓更新\n5. 為潛在合規系統升級編預算",
      },
      {
        heading: "與合規供應商合作",
        body: "保持合規最簡單方式是與理解法規的供應商合作：\n\n**詢問潛在供應商的內容**\n\n☑ 『你在FEHD批准名單上嗎？』（如果在HK）\n☑ 『你有澳門批准嗎？』（如果服務澳門）\n☑ 『你能為每批提供原產地證書嗎？』\n☑ 『如果產品不合規，你的反應時間是多少？』\n☑ 『你有HACCP認證嗎？』\n☑ 『你能提供詳細追蹤文檔嗎？』\n☑ 『如果發生健康問題會發生什麼？』\n☑ 『你有食物安全責任保險嗎？』\n\n**紅旗（不要與這些供應商合作）**\n- 不願意提供原產地證書\n- 無法解釋其品質控制程序\n- 沒有冷鏈文檔\n- 在你的首選產品不可用時建議『替代』供應商\n- 提供可疑低定價（通常意味著安全捷徑）\n- 不保持批/批次記錄\n\n**最佳實踐：將其放在合同中**\n你的供應商協議應指定：\n- 文檔要求（你會接收什麼）\n- 品質標準（等級、溫度、汙染限制）\n- 追蹤承諾（可追蹤回農場/收穫）\n- 更換條款（如果產品未達規格）\n- 保險要求（責任覆蓋）\n- 審計權（你可以檢查設施）\n\n有明確合同通過使期望明確保護你和你的供應商。",
      },
    ],
    conclusion: "香港和澳門的食物安全合規是複雜的，但如果你理解要求並圍繞它們建立系統，則可管理。與合規供應商合作、保持細緻記錄、培訓你的員工、保持法規變化更新。主動合規的成本遠低於違規、召回或食物安全事件的成本。你客人的健康——以及你的業務——取決於它。",
    ctaTitle: "需要幫助合規文檔嗎？",
    cta: "稻禾環球食品為我們的海鮮供應提供所有必要合規文檔，包括原產地證書、衞生證書和追蹤記錄。聯繫我們討論我們如何支持你的監管要求。",
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
