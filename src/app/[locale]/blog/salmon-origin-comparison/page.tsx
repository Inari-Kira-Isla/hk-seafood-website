import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Norwegian vs Scottish vs Tasmanian Salmon: A Sourcing Guide for HK & Macau Restaurants",
    metaDesc: "Compare Norwegian, Scottish, Chilean, and Tasmanian salmon for Hong Kong and Macau restaurant sourcing. Flavour profiles, fat content, sustainability credentials, and pricing guide for F&B buyers.",
    published: "April 2026",
    category: "Sourcing Guide",
    intro: "The salmon on your menu comes from somewhere — and that origin shapes everything: fat content, flavour intensity, texture, colour, sustainability story, and price. For F&B directors and restaurant buyers in Hong Kong and Macau, where premium seafood menus command premium justification, understanding origin distinctions is not academic. It is the difference between sourcing a commodity and sourcing a story your front-of-house can tell.",
    sections: [
      {
        heading: "Why Salmon Origin Matters for HK & Macau Menus",
        body: "Atlantic salmon (Salmo salar) farmed in Norway, Scotland, and Chile are all the same species — but environment, feed, water temperature, and husbandry practices create measurable differences in the product that arrives in your kitchen. Pacific salmon species (king/chinook, sockeye, coho) from wild fisheries add a further dimension.\n\n**For HK/Macau buyers, three factors make origin critical:**\n\n**1. Sashimi Grade Claims**: Not all farmed salmon meets sashimi-grade standards. Temperature control during air freight, parasitic load (sea lice), and fat content all vary by origin. Norwegian and Tasmanian operations generally lead on sashimi-grade certifications, though this varies by supplier.\n\n**2. Menu Differentiation**: 'Salmon sashimi' reads the same regardless of origin. 'Norwegian fjord salmon' or 'Scottish organic salmon' adds menu value that justifies a higher menu price and signals sourcing quality to a discerning Hong Kong diner.\n\n**3. Sustainability Credentials**: Hong Kong's fine dining sector increasingly fields questions from corporate clients, hotel groups, and sustainability-conscious consumers about seafood provenance. Origin credentials directly support or undermine those conversations.",
      },
      {
        heading: "Norwegian Salmon: The Global Benchmark",
        body: "Norway dominates global farmed Atlantic salmon — accounting for roughly 55% of world production. The country's long, cold, deep fjords provide near-ideal conditions for salmon farming: low ambient temperatures (6–14°C), strong tidal currents that keep water oxygenated and fish active, and a mature regulatory framework that enforces animal welfare and environmental standards.\n\n**Flavour Profile**\nFat content: High (18–22% in peak condition)\nFlavour: Rich, mild, clean oceanic taste. The fat integrates smoothly — not greasy. Classic neutral salmon profile that works across applications.\nColour: Deep pink-orange (natural astaxanthin from feed; synthetic astaxanthin common in mass-market product — premium suppliers use natural)\nTexture: Firm when fresh; silky and yields cleanly when sashimi-sliced\nBest use: Sashimi, sushi, crudo, gravlax, tataki, hot preparations (well-distributed fat handles heat without drying)\n\n**Key Norwegian Regions**\nHardangerfjord: Known for premium farmed salmon with strong environmental credentials\nTrondheim fjord region: Large-volume production; consistent quality\nNorthern Norway (Tromsø/Nordland): Cold-water conditions; premium fat development in slower-growing fish\n\n**Certifications to look for**: ASC (Aquaculture Stewardship Council), GlobalG.A.P., Norwegian Food Safety Authority approval\n\n**For HK/Macau buyers**: Norwegian salmon is the most available and price-competitive premium option. Air freight from Oslo to HK is well-established (typically 2–3 transit days). It is the most versatile default for volume operations. The challenge: it is also the most generic — 'Norwegian salmon' alone lacks the specificity to command the highest menu premiums.",
      },
      {
        heading: "Scottish Salmon: Organic and Artisanal Premium",
        body: "Scotland's salmon sector has carved a distinct niche: lower-density farming, colder and more exposed waters than Norwegian fjords, and a significant organic certification cluster that has found strong demand in Asia's premium hospitality sector.\n\n**Flavour Profile**\nFat content: Moderate to high (14–20%); varies more than Norwegian due to lower-density farming and seasonal exposure\nFlavour: Distinctive, slightly more complex than Norwegian. Some describe a subtle sweetness and a 'cleaner' marine note — attributed to the stronger Atlantic tidal influence and lower stocking density. The difference is perceptible to trained palates but not always apparent in cooked applications.\nColour: Similar to Norwegian but may vary more by farm and season\nTexture: Slightly firmer than Norwegian due to higher current exposure; fish are more active\nBest use: Sashimi, sushi (where texture differentiation is noticeable), premium cured products (gravlax, cold-smoked), presentations where organic certification adds value\n\n**Scottish Organic Distinction**\nScottish Organic Salmon — certified to Soil Association standards — commands a genuine premium in HK/Macau's hotel and Michelin market. Organic certification means:\n- No synthetic pesticides (physical sea lice treatment only)\n- Minimum 75% organic feed ingredients\n- Lower stocking densities\n- Mandatory welfare audits\n\nFor hotel banquet departments and restaurants serving corporate sustainability-focused clients, Scottish organic credentials provide tangible menu-marketing value.\n\n**Key Scottish Regions**\nOrkney Islands: Strong tidal currents; considered among Scotland's finest\nShetland Islands: Cold, exposed, high-current waters; respected premium production\nLoch Duart: Premium sustainable brand; often cited by name on HK/Macau menus\nHebrides: Organic specialists; strong sustainability story\n\n**For HK/Macau buyers**: Scottish salmon commands a 15–25% premium over Norwegian standard product. Availability is lower — Scottish farms produce roughly 10x less than Norway. For high-volume operations, Scottish may serve best as a premium feature rather than a default line item.",
      },
      {
        heading: "Chilean Salmon: Volume, Value, and Year-Round Supply",
        body: "Chile is the world's second-largest salmon producer, supplying Atlantic salmon (Salmo salar), Pacific king/chinook, and coho from the Patagonian channels and fjords of the Los Lagos and Aysén regions.\n\n**Flavour Profile**\nFat content: Moderate (12–16% for Atlantic; higher for king/chinook)\nFlavour: Milder than Norwegian or Scottish; cleaner finish. Some characterise it as less complex — suitable for applications where salmon flavour is one component among many rather than the hero.\nColour: Typically good; may be slightly lighter than Norwegian depending on feed protocol\nTexture: Good, slightly softer than Northern Atlantic product in some processors; quality varies more by supplier than Norwegian\nBest use: Cooked preparations (grilled, baked, pan-seared), sushi rolls where raw fish is combined with other ingredients, high-volume hotel banquets, staff canteens, bulk operations\n\n**Chilean King/Chinook Salmon**\nFarmed king salmon (chinook) from Chile has attracted significant interest in HK/Macau's premium market. King salmon has the highest fat content of any salmon species (25–30%+ in high-grade specimens) and a distinctly luxurious, almost buttery texture that Norwegian and Scottish Atlantic salmon cannot replicate. Premium Chilean king salmon, when properly sourced and certified, competes directly with Norwegian premium product at similar price points.\n\n**Key Chilean Regions**\nLos Lagos (Puerto Montt): Largest production zone; Atlantic salmon dominant\nAysén: Remote, colder, less dense farming; premium Atlantic and king salmon\nMagallanes: Extremely remote; highest-quality conditions; limited supply\n\n**For HK/Macau buyers**: Chilean salmon is the value option for volume operations. Standard Chilean Atlantic competes on price, not provenance. Where Chilean salmon differentiates is in king/chinook — specify this specifically when premium texture is needed without Norwegian pricing.",
      },
      {
        heading: "Tasmanian Salmon: Australia's Niche Premium",
        body: "Tasmania (Australia) produces relatively small volumes of farmed Atlantic salmon from the cold, clean Southern Ocean waters of Macquarie Harbour and Storm Bay. Tasmanian salmon has built a strong reputation in Asia's premium market, particularly Japan — a reputation that has carried into HK/Macau's Michelin circuit.\n\n**Flavour Profile**\nFat content: High (18–24%; comparable to Norwegian premium)\nFlavour: Intensely rich, clean, buttery. Often described as the 'cleanest' or 'sweetest' of the farmed Atlantic salmons — attributed to Southern Ocean water quality and lower production scale. The fat is notably smooth.\nColour: Deep, vivid pink-orange\nTexture: Firm, clean-cutting; very high sashimi integrity\nBest use: Premium sashimi, sushi (highest-tier service), crudo, raw preparations where flavour purity is showcased\n\n**Key Producers**\nHuon Aquaculture: One of Australia's largest; strong sustainability credentials; ASC certified\nTassal: Widely exported; mid-premium positioning\nPetuna: Small volume, high quality; available in selective HK/Macau importers\n\n**Sustainability Context**\nTasmania's salmon farming has faced environmental scrutiny regarding its impact on Macquarie Harbour's ecosystem. Buyers should verify current ASC certification status rather than relying on general reputation — certifications have been contested and are not universal across all Tasmanian operations.\n\n**For HK/Macau buyers**: Tasmanian salmon commands a 20–35% premium over Norwegian standard. Availability in HK/Macau is limited to specialist importers. For operations where 'Australian premium' origin adds menu value and volume requirements are modest, it is a strong choice. Verify specific farm certifications before marketing sustainability credentials to guests.",
      },
      {
        heading: "Side-by-Side Comparison: Decision Matrix for HK & Macau Buyers",
        body: "| Attribute | Norwegian | Scottish Organic | Chilean Atlantic | Chilean King | Tasmanian |\n|---|---|---|---|---|---|\n| Fat Content | High | Mod-High | Moderate | Very High | High |\n| Flavour Intensity | Medium-High | Medium-High | Medium | Very High | High |\n| Sashimi Suitability | ★★★★ | ★★★★ | ★★★ | ★★★★★ | ★★★★★ |\n| Volume Availability | Very High | Low | High | Medium | Low |\n| Typical HK Price (per kg) | HK$180–280 | HK$220–350 | HK$140–220 | HK$250–380 | HK$240–380 |\n| Sustainability Credentials | Strong | Very Strong | Variable | Variable | Strong (verify) |\n| Air Freight Lead Time | 2–3 days | 2–3 days | 3–4 days | 3–4 days | 2–3 days |\n| Best Menu Positioning | Volume + quality | Organic premium | Value/volume | Ultra-premium | Clean premium |\n\n**Decision framework:**\n\n**For Michelin/omakase (sashimi hero):** Tasmanian or Scottish organic — provenance story + texture quality justify premium menu pricing\n\n**For hotel banquet (50+ covers, cost-efficient):** Norwegian standard — volume availability, consistent quality, competitive pricing\n\n**For haute cuisine texture showcase:** Chilean king/chinook — highest fat, most luxurious mouthfeel, differentiates from standard Atlantic salmon\n\n**For corporate sustainability-focused clients:** Scottish organic (Soil Association) or Tasmanian ASC-certified — documented third-party certifications hold up to scrutiny\n\n**For year-round menu with varying menu price points:** Norwegian as base; rotate Chilean king and Scottish organic as featured specials",
      },
      {
        heading: "Practical Sourcing: What to Specify in Your PO",
        body: "A purchase order that says 'salmon' is not a purchase order — it is an open invitation for supplier substitution. Specify:\n\n**Mandatory fields:**\n- Species (Atlantic salmon / Chinook / Coho)\n- Origin country AND region (e.g., 'Norwegian — Hardangerfjord' not just 'Norwegian')\n- Farm certification (ASC / Organic / GlobalG.A.P.)\n- Grade (sashimi-grade / standard food-service)\n- Fat content minimum if relevant (e.g., '18%+ intramuscular fat for sashimi applications')\n- Processing format (H&G whole, fillet, portion, skin-on vs skin-off)\n- Pack size and net weight\n- Harvest date (not dispatch date)\n- Temperature requirement in transit (0–2°C for fresh; specify if frozen acceptable)\n\n**Red flags in supplier responses:**\n- 'We can supply from various origins' without specifying which → commodity trader, not specialist\n- No certification documentation available\n- 'Sashimi grade' claim without being able to specify fat content or parasite testing\n- Inability to confirm harvest-to-delivery timeline",
      },
    ],
    conclusion: "Norwegian, Scottish, Chilean, and Tasmanian salmon each occupy a different position on the quality, volume, and provenance spectrum. The best HK and Macau F&B operations don't source a single salmon — they maintain relationships with two or three suppliers across origins, allowing them to match ingredient to application and tell a genuine sourcing story that differentiates their menus. Know what you need before you buy.",
    ctaTitle: "Source Premium Salmon for Your HK or Macau Restaurant",
    cta: "Inari Global Food supplies premium salmon across multiple origins to restaurants and hotels in Hong Kong and Macau — Norwegian, Scottish, and Chilean, with origin documentation and grade certification on every delivery. Contact us to discuss specifications and volume pricing.",
  },
  "zh-HK": {
    title: "挪威vs蘇格蘭vs塔斯馬尼亞三文魚：港澳餐廳採購指南",
    metaDesc: "香港及澳門餐廳採購商的挪威、蘇格蘭、智利和塔斯馬尼亞三文魚比較指南。風味特點、脂肪含量、可持續性認證及定價參考。",
    published: "2026年4月",
    category: "採購指南",
    intro: "您菜單上的三文魚來自某個地方——而這個產地決定一切：脂肪含量、風味強度、質地、色澤、可持續性故事以及價格。對於香港和澳門的餐飲總監和餐廳採購商而言，在頂級海鮮菜單需要充分理由的市場中，了解產地差異並非學術研究，而是採購一種商品與採購一個前廳人員能夠講述的故事之間的區別。",
    sections: [
      {
        heading: "為何三文魚產地對港澳菜單至關重要",
        body: "在挪威、蘇格蘭和智利養殖的大西洋三文魚（Salmo salar）都是同一物種——但環境、飼料、水溫和養殖方式在送到您廚房的產品上造成可量化的差異。來自野生漁業的太平洋三文魚品種（帝王鮭/奇努克、紅鮭、銀鮭）進一步豐富了這個維度。\n\n**對港澳採購商而言，三個因素使產地至關重要：**\n\n**1. 刺身級別聲稱**：並非所有養殖三文魚都達到刺身級別標準。空運期間的溫度控制、寄生蟲負荷（海蝨）和脂肪含量因產地而異。挪威和塔斯馬尼亞的運營通常在刺身級別認證方面處於領先，但這因供應商而異。\n\n**2. 菜單差異化**：無論產地如何，「三文魚刺身」讀起來都一樣。「挪威峽灣三文魚」或「蘇格蘭有機三文魚」增加了菜單價值，可以合理化更高的菜單定價，並向挑剔的香港食客傳達採購品質。\n\n**3. 可持續性認證**：香港高端餐飲業越來越多地從企業客戶、酒店集團和注重可持續性的消費者那裡收到關於海鮮來源的詢問。產地認證直接支持或削弱了這些對話。",
      },
      {
        heading: "挪威三文魚：全球基準",
        body: "挪威主導全球養殖大西洋三文魚——佔全球產量的約55%。該國漫長、寒冷、深邃的峽灣為三文魚養殖提供了近乎理想的條件：低環境溫度（6–14°C）、強勁的潮汐流使水保持含氧量並讓魚保持活躍，以及執行動物福利和環境標準的成熟監管框架。\n\n**風味特點**\n脂肪含量：高（最佳狀態18–22%）\n風味：豐富、溫和、清爽的海洋味道。脂肪融合順滑——不油膩。經典中性三文魚特點，適用於各種應用。\n色澤：深粉橙色（飼料中的天然蝦青素；大眾市場產品常用合成蝦青素——優質供應商使用天然蝦青素）\n質地：新鮮時緊實；刺身切片時絲滑，切面乾淨\n最佳用途：刺身、壽司、意式薄片、醃製三文魚、韃靼、熱食（均勻分布的脂肪在加熱時不易變乾）\n\n**挪威主要產區**\n哈當厄爾峽灣：以強大環境認證的優質養殖三文魚著稱\n特隆赫姆峽灣地區：大批量生產；品質穩定\n北挪威（特羅姆瑟/諾蘭）：低溫水域；慢成長魚的頂級脂肪發育\n\n**值得關注的認證**：ASC（水產養殖管理委員會）、GlobalG.A.P.、挪威食品安全局批准\n\n**對港澳採購商**：挪威三文魚是最易獲得、最具性價比的優質選項。奧斯陸至香港的空運航線完善（通常2–3個運輸日）。它是大量運營最通用的默認選項。挑戰：它也是最通用的——單獨的「挪威三文魚」缺乏具體性，難以獲得最高菜單溢價。",
      },
      {
        heading: "蘇格蘭三文魚：有機和手工藝品溢價",
        body: "蘇格蘭三文魚業開闢了一個獨特定位：更低密度養殖、比挪威峽灣更寒冷更開放的水域，以及在亞洲高端酒店業找到強勁需求的重要有機認證集群。\n\n**風味特點**\n脂肪含量：中至高（14–20%）；由於低密度養殖和季節性暴露，比挪威變化更大\n風味：獨特，比挪威略複雜。一些人描述為微妙的甜味和「更清爽」的海洋氣息——歸因於更強的大西洋潮汐影響和更低的放養密度。差異對訓練有素的口感可察覺，但在熟食應用中不總是明顯。\n色澤：與挪威相似，但因農場和季節而異\n質地：由於較高的洋流暴露，略比挪威緊實；魚更活躍\n最佳用途：刺身、壽司（質地差異可察覺）、優質醃製品（醃製三文魚、冷煙熏）、有機認證增加價值的呈現\n\n**蘇格蘭有機的區別**\n蘇格蘭有機三文魚——獲得土壤協會認證——在港澳酒店和米芝蓮市場獲得真正的溢價。有機認證意味著：\n- 不使用合成農藥（僅物理海蝨處理）\n- 最少75%有機飼料成分\n- 更低的放養密度\n- 強制福利審計\n\n對於為注重可持續性的企業客戶服務的酒店宴會部門和餐廳，蘇格蘭有機認證提供了切實的菜單營銷價值。\n\n**蘇格蘭主要產區**\n奧克尼群島：強勁潮汐流；被認為是蘇格蘭最優質產區之一\n設得蘭群島：寒冷、開放、高洋流水域；受尊敬的頂級生產\nLoch Duart：頂級可持續品牌；常在港澳菜單上以名稱標示\n赫布里底群島：有機專家；強勁可持續性故事\n\n**對港澳採購商**：蘇格蘭三文魚比挪威標準產品貴15–25%。供應量較低——蘇格蘭農場的產量約為挪威的十分之一。對於大量運營，蘇格蘭最好作為頂級特色而非默認常規品項。",
      },
      {
        heading: "智利三文魚：批量、性價比與全年供應",
        body: "智利是全球第二大三文魚生產國，從洛斯拉各斯和阿伊森地區的巴塔哥尼亞海峽和峽灣供應大西洋三文魚（Salmo salar）、太平洋帝王/奇努克和銀鮭。\n\n**風味特點**\n脂肪含量：中等（大西洋三文魚12–16%；帝王/奇努克更高）\n風味：比挪威或蘇格蘭更溫和；回味更清爽。一些人認為其複雜度較低——適合三文魚風味是眾多成分之一而非主角的應用。\n色澤：通常良好；根據飼料協議，可能略淺於挪威\n質地：良好，部分加工商的產品略軟於北大西洋產品；品質因供應商差異比挪威更大\n最佳用途：熟食（烤、焗、平底鍋煎）、生魚與其他食材組合的壽司卷、大批量酒店宴會、員工餐廳、大宗業務\n\n**智利帝王/奇努克三文魚**\n來自智利的養殖帝王鮭（奇努克）在港澳高端市場引起了相當大的興趣。帝王鮭的脂肪含量是所有三文魚品種中最高的（高品質個體25–30%以上），具有挪威和蘇格蘭大西洋三文魚無法複製的奢華、幾乎是奶油般的質地。優質智利帝王鮭在適當採購和認證的情況下，以相似的價位直接與挪威頂級產品競爭。\n\n**智利主要產區**\n洛斯拉各斯（蒙特港）：最大生產區；以大西洋三文魚為主\n阿伊森：偏遠、更寒冷、密度更低的養殖；頂級大西洋三文魚和帝王鮭\n麥哲倫：極為偏遠；最佳品質條件；供應有限\n\n**對港澳採購商**：智利三文魚是大量運營的性價比選項。標準智利大西洋三文魚以價格而非產地取勝。智利三文魚的差異化在於帝王/奇努克——在需要頂級質地而無需挪威定價時，請專門指定此品種。",
      },
      {
        heading: "塔斯馬尼亞三文魚：澳洲小眾頂級",
        body: "塔斯馬尼亞（澳大利亞）從麥格理港和風暴灣的寒冷、清潔的南冰洋水域生產相對少量的養殖大西洋三文魚。塔斯馬尼亞三文魚在亞洲頂級市場，特別是日本，建立了強大聲譽——這一聲譽已延伸到港澳的米芝蓮圈子。\n\n**風味特點**\n脂肪含量：高（18–24%；可與挪威頂級產品媲美）\n風味：濃郁、清爽、奶油感。通常被描述為養殖大西洋三文魚中「最清爽」或「最甜」——歸因於南冰洋水質和較低的生產規模。脂肪明顯順滑。\n色澤：深粉橙色\n質地：緊實，切面乾淨；刺身完整性非常高\n最佳用途：頂級刺身、壽司（最高端服務）、意式薄片、風味純正度被展示的生食\n\n**主要生產商**\nHuon Aquaculture：澳大利亞最大生產商之一；強大可持續性認證；ASC認證\nTassal：廣泛出口；中高端定位\nPetuna：小批量、高品質；在特定港澳進口商處有售\n\n**可持續性背景**\n塔斯馬尼亞三文魚養殖面臨過關於其對麥格理港生態系統影響的環境審查。採購商應核實當前的ASC認證狀態，而非依賴一般聲譽——認證曾受到爭議，並非所有塔斯馬尼亞業務都普遍適用。\n\n**對港澳採購商**：塔斯馬尼亞三文魚比挪威標準產品貴20–35%。在港澳的供應量僅限於專業進口商。對於「澳洲頂級」產地增加菜單價值且需求量不大的業務，這是個強力選擇。在向客人宣傳可持續性認證前，請核實具體農場認證。",
      },
      {
        heading: "橫向比較：港澳採購商決策矩陣",
        body: "| 屬性 | 挪威 | 蘇格蘭有機 | 智利大西洋 | 智利帝王鮭 | 塔斯馬尼亞 |\n|---|---|---|---|---|---|\n| 脂肪含量 | 高 | 中至高 | 中等 | 非常高 | 高 |\n| 風味強度 | 中至高 | 中至高 | 中等 | 非常高 | 高 |\n| 刺身適合度 | ★★★★ | ★★★★ | ★★★ | ★★★★★ | ★★★★★ |\n| 供應量 | 非常高 | 低 | 高 | 中等 | 低 |\n| 典型港澳定價（每公斤） | 港幣180–280元 | 港幣220–350元 | 港幣140–220元 | 港幣250–380元 | 港幣240–380元 |\n| 可持續性認證 | 強 | 非常強 | 參差不齊 | 參差不齊 | 強（需核實）|\n| 空運前置時間 | 2–3天 | 2–3天 | 3–4天 | 3–4天 | 2–3天 |\n| 最佳菜單定位 | 批量+品質 | 有機溢價 | 性價比/批量 | 超頂級 | 清爽頂級 |\n\n**決策框架：**\n\n**米芝蓮/Omakase（刺身主角）**：塔斯馬尼亞或蘇格蘭有機——產地故事+質地品質合理化頂級菜單定價\n\n**酒店宴會（50+人，成本效益）**：挪威標準——供應量大，品質穩定，定價有競爭力\n\n**高端菜肴質地展示**：智利帝王/奇努克——最高脂肪，最奢華口感，與標準大西洋三文魚明顯差異\n\n**面向企業可持續性客戶**：蘇格蘭有機（土壤協會）或塔斯馬尼亞ASC認證——有記錄的第三方認證經得起審查\n\n**全年菜單含不同定價點**：挪威作為基礎；智利帝王鮭和蘇格蘭有機作為特色輪換",
      },
      {
        heading: "實際採購：採購訂單需指明的內容",
        body: "一份只寫「三文魚」的採購訂單不是採購訂單——而是供應商替換的開放邀請。需要指明：\n\n**必填字段：**\n- 品種（大西洋三文魚/帝王鮭/銀鮭）\n- 原產國和地區（例如「挪威——哈當厄爾峽灣」，而非只寫「挪威」）\n- 農場認證（ASC/有機/GlobalG.A.P.）\n- 等級（刺身級/標準餐飲服務）\n- 如有需要的最低脂肪含量（例如，刺身應用「肌肉內脂肪18%以上」）\n- 加工格式（H&G整條、魚柳、分份、帶皮或去皮）\n- 包裝規格和淨重\n- 採收日期（不是發貨日期——是採收日期）\n- 運輸中的溫度要求（新鮮0–2°C；如果接受冷凍請指明）\n\n**供應商回應的警示信號：**\n- 「我們可以從各個產地供應」而不指明哪些 → 商品貿易商，非專業供應商\n- 無法提供認證文件\n- 聲稱「刺身級別」但無法說明脂肪含量或寄生蟲測試\n- 無法確認從採收到交付的時間線",
      },
    ],
    conclusion: "挪威、蘇格蘭、智利和塔斯馬尼亞三文魚各自在品質、數量和產地謙遜的光譜上佔據不同位置。香港澳門最優秀的餐飲業務不會只採購一種三文魚——他們維持著跨產地兩三個供應商的關係，使他們能夠將食材與應用場景相匹配，並講述真實的採購故事，讓他們的菜單與衆不同。採購前先了解您需要什麼。",
    ctaTitle: "為您的港澳餐廳採購頂級三文魚",
    cta: "稻荷環球食品向香港和澳門的餐廳和酒店供應多個產地的頂級三文魚——挪威、蘇格蘭和智利，每次交付均附帶產地文件和等級認證。聯繫我們，討論規格和批量定價。",
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
