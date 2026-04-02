import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Fine Dining Differentiation: How Seafood Sourcing Becomes Your Competitive Advantage",
    metaDesc: "Discover how fine dining restaurants in Hong Kong & Macau use premium seafood sourcing as a menu differentiator. Strategy for building brand identity through ingredient excellence.",
    published: "April 2026",
    category: "Strategy",
    intro: "In Hong Kong and Macau's crowded fine dining market, every restaurant claims to serve 'premium ingredients.' But when ten restaurants all have the same description, how do diners actually choose? The answer lies not in the claim, but in the differentiation: the specific farms you work with, the stories you tell, the consistency you deliver, and the relationships you've built with suppliers who understand your vision.",
    sections: [
      {
        heading: "The Commoditization Problem in Fine Dining",
        body: "Fine dining menus across Hong Kong and Macau have converged toward similar language:\n\n- 'Fresh, sustainable seafood'\n- 'Premium ingredients sourced globally'\n- 'Direct supplier relationships'\n\nYet these phrases mean almost nothing to diners. When every restaurant uses identical marketing language, trust erodes. Diners can't differentiate between a restaurant that truly sources with intention and one that's simply using trendy language.\n\nThis is where sourcing strategy becomes a competitive weapon. If your sourcing is genuinely different—if you work with specific farms, follow unique aging protocols, or support distinctive sustainability practices—you can communicate that difference through every menu item.\n\nThe restaurants winning in today's market aren't the ones with the most expensive ingredients. They're the ones with the clearest, most authentic sourcing story.",
      },
      {
        heading: "Three Sourcing Archetypes That Work in Hong Kong & Macau",
        body: "Successful fine dining restaurants in the region typically follow one of three sourcing archetypes:\n\n**Archetype 1: The Heritage Traditionalist**\nFocus: Japanese aging protocols, traditional preparation methods\n\nExample positioning: 'All uni is aged 21 days in our caves, following 50-year-old Hokkaido traditions.'\n\nTarget diners: Purists, age 45+, repeat customers who appreciate mastery through restraint\n\nOperational model: Fewer ingredients, deeper relationships with Japanese suppliers, premium pricing justified by consistency and heritage\n\n**Archetype 2: The Sustainability Evangelist**\nFocus: MSC certification, sustainable fishing practices, transparency through third-party verification\n\nExample positioning: 'Every salmon is from Norwegian farms certified by Marine Stewardship Council.'\n\nTarget diners: Environmentally conscious, age 30-50, willing to pay premium for ethical sourcing\n\nOperational model: Build relationships with certified suppliers, highlight certifications on menu, tie sustainability story to pricing\n\n**Archetype 3: The Innovation Explorer**\nFocus: Emerging origins, experimental aging, collaboration with chefs on new sourcing ideas\n\nExample positioning: 'This month: uni from a new Norwegian farm, aged in seaweed brine for enhanced umami.'\n\nTarget diners: Adventurous, food-forward, age 25-45, value discovery and novelty\n\nOperational model: Work with suppliers willing to experiment, change menu monthly, build reputation as source of discovery",
      },
      {
        heading: "Building Your Sourcing Narrative",
        body: "Once you've chosen your archetype, the next step is storytelling. A strong sourcing narrative has four elements:\n\n**1. Origin Story**\n\nDon't just say 'Norwegian salmon.' Say: 'Atlantic salmon from Hardangerfjord, a farm that started in 1987 when Erik Johansen decided to apply wine-country principles to fish farming—small batches, precise temperature control, single-origin farms.'\n\nThe specific detail creates credibility. A vague claim could apply to any restaurant. A detailed origin story cannot be copied.\n\n**2. Constraint Story**\n\nWhy aren't you serving this ingredient year-round? This is your secret advantage. Tell the truth:\n\n'Hokkaido Bafun uni is available only June-August. During these months, it's the centerpiece of our menu. September-May, we feature Canadian uni—still premium, still from a supplier we trust, but different in character. This seasonal rotation means our menu evolves with the ocean.'\n\nConstraint builds credibility. It shows you understand your ingredients, not just your marketing.\n\n**3. Relationship Story**\n\nTell diners about your supplier relationships. What makes your suppliers different?\n\n'We've worked with the same Hokkaido uni farmer for eight years. He holds back the best harvest for six restaurants only—including ours. He turns down lucrative offers from larger distributors because he values the relationship and the feedback we give him. That's why the quality is non-negotiable.'\n\nRelationship stories build emotional connection. They turn a transaction into a partnership narrative.\n\n**4. Quality Proof Story**\n\nWhat's the tangible evidence of quality? How would a diner know if this ingredient is really different?\n\n'Taste the color. Premium uni should be vivid golden-orange, not pale yellow. The color tells you the uni was aged at precise temperature and handled with care. Look for firmness—lobes should hold their shape, never mushy. Smell the aroma: fresh ocean, zero ammonia. If you taste ammonia or see brown discoloration, the handling failed.'\n\nGiving diners a framework for recognizing quality turns them into sophisticated tasters, not passive consumers.",
      },
      {
        heading: "Implementing Sourcing Differentiation Across Your Menu",
        body: "Strong sourcing differentiation doesn't stop at uni and salmon. It extends across your entire menu. Here's how to audit and strengthen your sourcing story:\n\n**Step 1: Map Your Current Suppliers**\n\nList every ingredient in your menu by category:\n- Shellfish (uni, scallops, shrimp, oysters)\n- Fish (salmon, white fish, etc.)\n- Vegetables & produce\n- Specialty items\n\nFor each, ask: Can I tell a sourcing story about this? Do I have a genuine relationship with the supplier? Is there something distinctive about my sourcing approach?\n\n**Step 2: Prioritize High-Impact Ingredients**\n\nNot every ingredient needs an elaborate sourcing story. Focus on the ingredients that:\n- Account for 20%+ of your COGS\n- Appear multiple times across menu\n- Are visible to diners (seafood, premium proteins)\n- Affect final dish quality significantly\n\nFor these ingredients, develop detailed sourcing narratives.\n\n**Step 3: Create Menu Descriptions That Sell Your Story**\n\nInstead of: 'Sea urchin, salmon, ponzu'\n\nTry: 'Hokkaido Bafun uni (aged 21 days in our cave), Norwegian Atlantic salmon (MSC-certified), house-made yuzu ponzu'\n\nThe specificity signals quality. Diners feel they're getting something thoughtfully sourced, not generic.\n\n**Step 4: Build Supplier Relationships That Support Your Story**\n\nFind suppliers who align with your narrative:\n- Heritage traditionalists need suppliers with deep farming knowledge\n- Sustainability evangelists need certified, transparent suppliers\n- Innovation explorers need suppliers willing to experiment\n\nChoose suppliers based on story-fit, not just price.",
      },
      {
        heading: "The Pricing Power of Sourcing Differentiation",
        body: "Here's the commercial advantage: restaurants with strong sourcing differentiation command price premiums.\n\n**Scenario 1: The Commoditized Restaurant**\n- Menu positioning: 'Premium seafood'\n- Customer perception: Generic, trendy\n- Price sensitivity: High (customers shop based on price/marketing)\n- Gross margin: 55-60%\n\n**Scenario 2: The Differentiated Restaurant**\n- Menu positioning: 'Hokkaido uni (aged 21 days), Norwegian salmon (MSC), direct supplier relationships'\n- Customer perception: Intentional, sophisticated\n- Price sensitivity: Low (customers value the story, justify the premium)\n- Gross margin: 65-72%\n\nThe difference: 7-12 percentage points of margin. On a HK$3,500 per person omakase menu, that's HK$250-400 additional profit per customer.\n\nOver a year, a restaurant serving 120 covers/week generates HK$1.56M-2.5M additional annual profit from pricing power alone—just from having a clearer sourcing story.",
      },
      {
        heading: "2026 Sourcing Opportunity for Hong Kong & Macau Fine Dining",
        body: "The market is shifting in restaurants' favor right now:\n\n**Supply Tightness**: Traditional Hokkaido uni supply is constrained. Restaurants that have secured direct sourcing relationships now have competitive advantage over restaurants still spot-buying.\n\n**Transparency as Trend**: ESG (environmental, social, governance) is moving from marketing trend to customer expectation. Fine diners increasingly want to know where food comes from and whether it was sourced responsibly.\n\n**Diner Sophistication**: Hong Kong and Macau diners are increasingly knowledgeable. They recognize quality differences. They reward restaurants that help them understand what they're eating.\n\n**Sustainability as Barrier**: Restaurants without credible sustainable sourcing stories will face pressure. Building these relationships now positions you ahead of competition.",
      },
    ],
    conclusion: "Fine dining restaurants in Hong Kong and Macau that build clear sourcing differentiation will win in the next three years. They'll win on price (through margin power). They'll win on reputation (through authenticity). They'll win on retention (through the emotional connection of a great story). The restaurants that continue to claim 'premium ingredients' without backing it with genuine supplier relationships will become increasingly irrelevant.",
    ctaTitle: "Ready to Build Your Sourcing Differentiation Strategy?",
    cta: "Contact Inari Global Food to develop a supplier strategy aligned with your restaurant's positioning. We work with fine dining establishments across Hong Kong and Macau to build the direct relationships that enable true differentiation.",
  },
  "zh-HK": {
    title: "米芝蓮級食材採購策略：如何透過優質海鮮建立競爭優勢",
    metaDesc: "發現香港及澳門頂級食府如何透過優質海鮮採購打造品牌優勢。食材卓越背後的策略及市場定位。",
    published: "2026年4月",
    category: "策略",
    intro: "在香港及澳門擁擠的頂級餐飲市場中，每間食府都標榜『優質食材』。但當十間食府都用相同的描述時，客人實際上如何選擇？答案不在宣傳，而在於差異化：你合作的農場、你訴說的故事、你提供的一致性，以及與了解你願景的供應商建立的關係。",
    sections: [
      {
        heading: "頂級餐飲中的同質化問題",
        body: "香港及澳門的頂級餐廳菜單語言趨於相近：\n\n- 『新鮮、永續海鮮』\n- 『全球優質食材直送』\n- 『直接供應商關係』\n\n但這些詞彙對客人來說幾乎毫無意義。當每間食府使用相同的市場語言時，信任度下降。客人無法區分真正用心採購的食府與只是跟風宣傳的食府。\n\n這正是採購策略成為競爭利器的時刻。如果你的採購真正與眾不同——與特定農場合作、遵循獨特的熟成方式、或支持獨特的永續實踐——你可以透過菜單上的每一項食材傳達這種差異。\n\n市場上贏家不是食材最昂貴的食府。而是擁有最清晰、最真實採購故事的食府。",
      },
      {
        heading: "香港及澳門行得通的三種採購模式",
        body: "成功的頂級食府通常遵循以下三種採購模式之一：\n\n**模式一：傳統工藝派**\n重點：日本熟成工藝、傳統烹飪方法\n\n市場定位範例：『所有海膽在我們的洞窖中熟成21天，遵循50年歷史的北海道傳統。』\n\n目標客群：美食家、45歲以上、欣賞透過克制展現技藝的常客\n\n營運模式：食材種類少但關係深厚、與日本供應商建立深層關係、優質定價因應一致性和傳統工藝而合理\n\n**模式二：永續推廣派**\n重點：MSC認證、永續捕撈、第三方驗證的透明度\n\n市場定位範例：『每條三文魚來自獲得海洋管理委員會認證的挪威農場。』\n\n目標客群：環保意識人士、30-50歲、願意為倫理採購支付溢價\n\n營運模式：與認證供應商建立關係、突顯菜單上的認證、將永續故事與定價掛鉤\n\n**模式三：創新探險派**\n重點：新興產地、實驗性熟成、與廚師合作開發新採購想法\n\n市場定位範例：『本月特色：來自挪威新農場的海膽，以海帶鹽水熟成以增強鮮味。』\n\n目標客群：探險精神、美食導向、25-45歲、重視發現和新奇\n\n營運模式：與願意實驗的供應商合作、每月更新菜單、建立發現源頭的聲譽",
      },
      {
        heading: "建立你的採購故事",
        body: "選定模式後，下一步是說故事。強有力的採購故事有四個要素：\n\n**1. 產地故事**\n\n不只說『挪威三文魚』。而是說：『來自哈當厄峽灣的大西洋三文魚，一個1987年由埃里克·約翰森創立的農場，他決定將葡萄酒產業的原則應用於養魚——小批量、精確溫度控制、單一產地農場。』\n\n具體細節創造可信度。模糊聲明可能適用於任何食府。詳細的產地故事無法被複製。\n\n**2. 限制故事**\n\n為什麼你不全年供應這種食材？這是你的秘密優勢。說出真相：\n\n『北海道馬糞海膽僅在6月至8月供應。這幾個月是我們菜單的中心。9月至5月，我們推出加拿大海膽——仍然優質，來自我們信任的供應商，但特性不同。這種季節輪換意味著我們的菜單隨著海洋季節演變。』\n\n限制建立可信度。它顯示你了解食材，而不僅是行銷。\n\n**3. 關係故事**\n\n告訴客人你與供應商的關係。是什麼讓你的供應商與眾不同？\n\n『我們與同一位北海道海膽農民合作了八年。他每年只為六間食府保留最佳收成——包括我們。他拒絕來自大型經銷商的利潤豐厚報價，因為他重視關係和我們的回饋。這就是為什麼品質是不可妥協的。』\n\n關係故事建立情感連結。它將交易轉變為夥伴關係敘事。\n\n**4. 品質證明故事**\n\n品質的切實證據是什麼？客人如何判斷這種食材真的不同？\n\n『品嚐顏色。優質海膽應該是鮮明的金黃色，不是蒼白的黃色。顏色告訴你海膽在精確溫度下熟成並細心處理。尋找牢固感——葉片應保持形狀，絕不黏軟。聞聞香氣：新鮮海洋，完全沒有氨味。如果你聞到氨味或看到褐色變色，處理失敗了。』\n\n給客人一個識別品質的框架，將他們轉變為老練的品嚐者，而不是被動的消費者。",
      },
      {
        heading: "在整個菜單中實施採購差異化",
        body: "強大的採購差異化不會止於海膽和三文魚。它擴展到你的整個菜單。以下是如何審核和加強你的採購故事：\n\n**第一步：繪製你目前的供應商地圖**\n\n按類別列出菜單上的每一種食材：\n- 貝類（海膽、扇貝、蝦、牡蠣）\n- 魚類（三文魚、白身魚等）\n- 蔬菜和農產品\n- 特色食材\n\n對於每一項，問自己：我能講述這個食材的採購故事嗎？我與供應商有真實的關係嗎？我的採購方式有什麼獨特之處？\n\n**第二步：優先考慮高影響食材**\n\n不是每種食材都需要詳細的採購故事。專注於以下食材：\n- 佔貨物成本的20%以上\n- 在菜單上多次出現\n- 對客人可見（海鮮、優質蛋白質）\n- 顯著影響最終菜餚品質\n\n對於這些食材，開發詳細的採購敘事。\n\n**第三步：建立推銷你故事的菜單描述**\n\n與其說：『海膽、三文魚、橙醋』\n\n不如說：『北海道馬糞海膽（洞窖熟成21天）、挪威大西洋三文魚（MSC認證）、自製柚子橙醋』\n\n具體性表明品質。客人感到他們得到的是用心採購的食材，而非通用的。\n\n**第四步：建立支持你故事的供應商關係**\n\n尋找與你敘事相符的供應商：\n- 傳統工藝派需要具有深厚農業知識的供應商\n- 永續推廣派需要經過認證、透明的供應商\n- 創新探險派需要願意實驗的供應商\n\n基於故事適配性而非僅價格選擇供應商。",
      },
      {
        heading: "採購差異化的定價權力",
        body: "這是商業優勢：擁有強大採購差異化的食府可以指揮溢價。\n\n**情景一：同質化食府**\n- 菜單定位：『優質海鮮』\n- 客人感知：通用、流行\n- 價格敏感度：高（客人根據價格/行銷購買）\n- 毛利率：55-60%\n\n**情景二：差異化食府**\n- 菜單定位：『北海道海膽（熟成21天）、挪威三文魚（MSC）、直接供應商關係』\n- 客人感知：用心、老練\n- 價格敏感度：低（客人重視故事，合理化溢價）\n- 毛利率：65-72%\n\n差異：7-12個百分點的毛利率。在港幣3,500元的懷石料理菜單上，每位客人可增加250-400港元利潤。\n\n一年內，每週提供120位客人的食府因為有更清晰的採購故事而額外獲得港幣156萬-250萬年利潤——僅從定價權力。",
      },
      {
        heading: "2026年香港及澳門頂級餐飲的採購機遇",
        body: "目前市場形勢對食府有利：\n\n**供應緊張**：傳統北海道海膽供應受限。已確保直接採購關係的食府現在相比仍然現貨購買的食府擁有競爭優勢。\n\n**透明度成為趨勢**：環境、社會、治理（ESG）從行銷趨勢轉變為客人期望。頂級客人日益想知道食物來源以及是否以負責任的方式採購。\n\n**客人知識增進**：香港及澳門客人日益知識豐富。他們認識品質差異。他們獎勵幫助他們理解所吃食物的食府。\n\n**永續性成為障礙**：沒有可信永續採購故事的食府將面臨壓力。現在建立這些關係將讓你先於競爭對手。",
      },
    ],
    conclusion: "未來三年，在香港和澳門建立清晰採購差異化的頂級食府將贏。他們將在價格上贏（透過毛利率權力）。他們將在聲譽上贏（透過真實性）。他們將在保留率上贏（透過精美故事的情感連結）。繼續聲稱『優質食材』而沒有真實供應商關係支持的食府將變得日益無關。",
    ctaTitle: "準備好建立你的採購差異化策略了嗎？",
    cta: "聯絡稻禾環球食品，制定與你食府定位相符的供應商策略。我們與香港及澳門的頂級食府合作，建立真正差異化所需的直接關係。",
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
