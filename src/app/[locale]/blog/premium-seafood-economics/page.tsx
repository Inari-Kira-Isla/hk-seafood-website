import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content: Record<string, any> = {
  en: {
    title: "Premium Seafood Economics: Building Margin and Justifying Price in Hong Kong and Macau",
    metaDesc: "Strategic guide to seafood pricing, margin optimization, cost structure analysis, and communicating value to justify premium pricing in Hong Kong and Macau restaurants.",
    published: "March 2026",
    category: "Business Strategy",
    intro: "Most restaurants treat seafood as a cost to minimize. Strategic operators treat it as a revenue driver to maximize. The difference is understanding premium seafood economics — how to structure your costs, optimize margins, and price your dishes to reflect true value. In Hong Kong and Macau's ultra-competitive restaurant market, the margin difference between mediocre and exceptional seafood sourcing directly impacts profitability. This guide covers cost structure, margin math, pricing strategy, and how to communicate value to justify premium prices that diners willingly pay.",
    sections: [
      {
        heading: "Seafood Cost Structure: Understanding Your True COGS",
        body: "Most restaurants calculate seafood costs as 'wholesale price per kg.' This is incomplete. True seafood COGS includes multiple layers.\n\n**The Full Cost Equation:**\n\n```\nSeafood COGS = Wholesale Price + Freight + Handling + Wastage + Cold-Chain + Labor\n```\n\n**1. Wholesale Price (60-70% of total cost)**\nExample: Canadian Red Sea Urchin\n- Base price: HKD 800/kg\n- This is your starting point\n\n**2. Freight & Logistics (8-12% of total cost)**\nOften hidden in wholesale pricing, but real:\n- Air freight surcharges: HKD 50-100/kg for priority delivery\n- Cold-chain logistics: HKD 30-50/kg for specialized handling\n- Customs clearance: HKD 20-30/kg for import fees\n- Example: HKD 100-180/kg in additional logistics costs\n\n**3. Handling & Waste (10-15% of total cost)**\nLosses from receiving to plate:\n- Quality inspection rejects: 2-3% of incoming volume (grading variation)\n- Preparation waste (shells, membrane, inedible portions): 15-20% typical\n- Spoilage from temperature fluctuations: 1-2% if not careful\n- Trimming and portioning: 5-10% loss typical\n\nExample calculation:\n- Order 10kg Canadian Red Sea Urchin\n- Receive 10kg; inspect and grade\n- Reject 200g (2%) due to quality — loss HKD 160\n- Use 8kg (20% is membrane/waste) — effective yield is 8kg\n- Trim and portion for service — 400g additional loss\n- Effective yield: 7.6kg from 10kg order (24% total loss)\n\nWaste cost: HKD 800 × 10kg = HKD 8,000 cost for 7.6kg product = effective HKD 1,053/kg\n\n**4. Cold-Chain Management (3-5% of total cost)**\nEnergy and equipment to maintain quality:\n- Dedicated refrigerator maintenance and temperature monitoring\n- Ice and cold packs for delivery\n- Daily rotation and FIFO tracking labor\n- Backup cooling if primary fails\n\nExample: HKD 1,000/month cold-chain costs ÷ 100kg monthly seafood = HKD 10/kg overhead\n\n**5. Labor: Receiving, Inspection, Prep (5-10% of total cost)**\nPeople costs to handle incoming inventory:\n- Receiving and inspecting deliveries: 0.25 hours per delivery = HKD 150\n- Grading and quality assessment: 0.5 hours per order = HKD 300\n- Prep (cleaning, portioning, plating): varies by dish (see labor cost below)\n- FIFO rotation and inventory tracking: 0.5 hours weekly = HKD 75\n\nExample: HKD 525 labor/delivery on 10kg order = HKD 52.50/kg\n\n**True COGS Example: Canadian Red Sea Urchin**\n```\nWholesale price:           HKD 800/kg (base)\nFreight/logistics:       + HKD 150/kg (air freight, customs, handling)\nWaste (24% loss):        + HKD 253/kg (800 × 24% ÷ 76% yield)\nCold-chain overhead:     + HKD 10/kg\nLabor (handling/prep):   + HKD 53/kg\n────────────────────────────\nTrue COGS:               HKD 1,266/kg\n────────────────────────────\n```\n\nThis means:\n- Your true cost is 58% higher than the wholesale price\n- A HKD 800/kg quote is actually HKD 1,266/kg when fully costed\n- Pricing HKD 1,200/kg thinking you're making margin? You're losing money\n\n**Cost Variation by Product:**\n\nHigher-waste products:\n- Sea urchin (uni): 20-25% waste (membrane removal)\n- Live lobster: 35-40% waste (head, shells)\n- Whole fish: 30-35% waste (head, bones, guts)\n\nLower-waste products:\n- Salmon fillet: 3-5% waste (portioning trim)\n- Scallop meat: 5-8% waste (side muscle)\n- Pre-portioned products: 1-2% waste\n\nHigher-waste products require higher gross margin to achieve same net margin.",
      },
      {
        heading: "Gross Margin vs. Net Margin: What Actually Matters",
        body: "Restaurant operators confuse gross margin and net margin. This costs money.\n\n**Gross Margin = Revenue - COGS (raw material cost)**\n\nExample: Sea Urchin Sashimi\n- Plate sells for: HKD 380\n- COGS (true cost, calculated above): HKD 127 (based on 10% portion of HKD 1,266/kg)\n- Gross margin: HKD 380 - HKD 127 = HKD 253\n- Gross margin %: HKD 253 ÷ HKD 380 = 66.6%\n\nSounds excellent. But this is before:\n- Soy sauce, wasabi, garnish\n- Plate, bowl, ice\n- Chef labor to plate\n- Rent, utilities, insurance\n- Marketing, delivery, etc.\n\n**Net Margin = (Revenue - COGS - Operating Costs) ÷ Revenue**\n\nFor typical Hong Kong restaurants:\n- Gross Margin Target: 65-70% (after all food costs)\n- Operating Costs: 35-40% (rent, labor, utilities)\n- Net Margin (Profit): 25-35%\n\nThis means:\n- A HKD 380 dish with HKD 127 COGS leaves HKD 253 gross\n- Operating costs take ~HKD 140 of that (35%)\n- Net profit: ~HKD 113 per plate (30%)\n\n**The Real Question: Does Your Seafood Pricing Support This?**\n\nMany restaurants under-price premium seafood because they don't understand true COGS.\n\nExample: Premium sea urchin sashimi\n- Wholesale quoted: HKD 800/kg\n- Chef says: \"That's cheap, let's price at HKD 380/portion\"\n- True COGS: HKD 1,266/kg (66% higher!)\n- At 10g portion: HKD 127 per plate\n- Gross margin needed for 65% target: HKD 127 ÷ 0.35 = HKD 363 revenue\n- Actual price: HKD 380 (barely hitting margin target)\n\nOnce operating costs apply, profit is thin. One spike in waste or labor cost, and you lose money on the dish.\n\n**Solution: Cost + Margin = Price**\n\nDon't accept wholesale quotes at face value. Calculate true COGS first.\n\n```\nTrue COGS per portion: HKD 127\nDesired gross margin: 65% (means 35% max COGS ratio)\nRequired revenue: HKD 127 ÷ 0.35 = HKD 363\nTarget price (with 5-10% luxury markup): HKD 420-450\nActually competitive in Hong Kong premium market: YES\n```\n\nThis is why Michelin-starred restaurants charge HKD 450+ for sea urchin sashimi. They've calculated true COGS and priced accordingly.",
      },
      {
        heading: "Pricing Premium Seafood: Value-Based vs. Cost-Based Pricing",
        body: "Two pricing philosophies: cost-based (what you pay + markup) vs. value-based (what diners will pay).\n\n**Cost-Based Pricing (Most Common, Often Wrong)**\n\nFormula: COGS × Markup Multiple = Selling Price\n\nExample:\n- COGS: HKD 127\n- Standard restaurant markup: 3x\n- Price: HKD 381\n\nProblem: Ignores market value. If diners will pay HKD 500 for that dish, you're leaving money on the table.\n\n**Value-Based Pricing (Strategic Restaurants, Higher Margin)**\n\nApproach: Research what market will pay, then back-calculate margin\n\n```\nDish: Uni (Sea Urchin) Sashimi (3-piece, 12g total)\n\nMarket Research (February 2026, Hong Kong):\n- 3-star Michelin: HKD 520-680 per portion\n- High-end omakase: HKD 420-520 per portion\n- Fine dining: HKD 320-420 per portion\n- Casual premium: HKD 220-320 per portion\n- Target positioning: High-end omakase\n- Optimal price: HKD 450\n\nMargin Calculation:\n- Revenue: HKD 450\n- COGS: HKD 127\n- Gross margin: HKD 323 (71.8%)\n- This exceeds 65% target — profitable and competitive\n```\n\n**Value-Based Pricing Factors for Hong Kong/Macau:**\n\n**1. Restaurant Positioning**\n- Michelin-starred: HKD 450-680 per seafood course\n- High-end omakase counter: HKD 350-500\n- Fine dining (hotel/casino): HKD 280-400\n- Casual premium (neighborhood): HKD 200-350\n\n**2. Product Rarity/Seasonality**\n- Year-round available (Atlantic salmon): Standard pricing\n- Seasonal (Hokkaido uni, June-July): +15-25% premium\n- Limited allocation (King salmon): +40-80% premium\n- Harvest-dependent (spot prawns, March-April): +50-100% premium\n\n**3. Preparation Complexity**\n- Simple plating (sashimi on ice): Base price\n- Moderate prep (sauce, garnish, warmth): +10-15%\n- High prep (multiple components, technique): +25-40%\n- Show/theater element (table plating): +30-50%\n\n**4. Guest Perception of Value**\n- Transparency (\"Norwegian salmon, today's catch\"): +10%\n- Certification (MSC, ASC visible): +5-10%\n- Story (fishery name, harvest date): +10-15%\n- Rarity communication (\"only available February\"): +15-25%\n\n**5. Competitive Benchmarking**\n- Research 3-5 direct competitors\n- Identify price ranges for similar dishes\n- Position 10-15% premium if differentiation exists\n\n**Example: Premium Salmon Sashimi Pricing**\n```\nBase COGS (Atlantic salmon, 20g): HKD 95\nCompetitor research:\n- Restaurant A (Michelin): HKD 420\n- Restaurant B (High-end omakase): HKD 380\n- Restaurant C (Fine dining): HKD 320\n- Average: HKD 373\n\nYour positioning: Premium omakase counter, Hong Kong location\nMargin target: 65%\nRequired price: HKD 95 ÷ 0.35 = HKD 271 minimum\n\nValue-based approach:\n- Competitive price: HKD 380 (matches high-end omakase)\n- Margin check: (HKD 380 - HKD 95) ÷ HKD 380 = 75% gross margin ✓\n- Profitability: Excellent at HKD 380\n\nFinal decision: HKD 380 (matches market, achieves margin, defensible)\n```",
      },
      {
        heading: "Maximizing Margin Without Cutting Quality: Strategic Sourcing",
        body: "You can improve margins without cutting corners. The secret is strategic sourcing.\n\n**1. Negotiate Better Base Pricing (5-15% savings)**\n\nLeverage:\n- Volume commitments: \"We'll commit to 15kg/month for 6 months\" → 10% discount\n- Standing orders: Consistent, predictable volume → 5-8% discount\n- Early payment: Pay within 10 days → 2-3% discount\n- Off-season purchases: Buy during low season for peak season use → 10-20% discount\n\nExample:\n- Current: HKD 800/kg (spot market)\n- Volume commitment + standing order + 30-day prepayment: HKD 680/kg (15% savings)\n- Monthly volume: 10kg\n- Annual savings: HKD 1,200 on 120kg purchase\n\n**2. Reduce Waste Through Better Handling (3-8% improvement)**\n\nTargets:\n- Inspection/grading loss: Currently 2%, target 0.5% (better supplier, better process)\n- Prep waste: Currently 20%, target 15% (better training, better technique)\n- Spoilage: Currently 2%, target 0% (better cold-chain management)\n\nExample: Sea Urchin (currently 24% total waste)\n```\nCurrent state:\n- Order 10kg @ HKD 800 = HKD 8,000\n- 24% waste = 2.4kg lost\n- Yield: 7.6kg\n- Effective cost per kg: HKD 1,053/kg\n\nImproved state (through better handling & training):\n- Order 10kg @ HKD 800 = HKD 8,000\n- 16% waste = 1.6kg lost\n- Yield: 8.4kg\n- Effective cost per kg: HKD 952/kg\n- Savings: HKD 101/kg (9.6% improvement)\n```\n\n**3. Switch Products Strategically (5-20% margins)**\n\nSame category, different products:\n- Canadian Red Sea Urchin (HKD 800/kg, seasonal supply)\n- Chilean Sea Urchin (HKD 650/kg, year-round, slightly different flavor)\n- Hokkaido Bafun (HKD 1,400/kg, premium, seasonal)\n\nMenu strategy:\n- Off-season: Use Chilean as base (lower cost)\n- Peak season: Feature Hokkaido (premium)\n- Omakase menu: Offer both, let chef choose daily\n- Result: Better margins year-round, fresh menu\n\n**4. Reduce Portion Size Strategically (2-8% margin improvement)**\n\nNot recommended as primary strategy, but valid when paired with price increase:\n\nExample:\n- Current: 15g sea urchin sashimi @ HKD 380\n- Reduced portion: 12g @ HKD 360\n- Guest perception: Slightly smaller, but still premium\n- Cost savings: HKD 24 reduction\n- Result: -HKD 20 revenue, -HKD 24 cost = net +HKD 4 margin\n\nCaution: Only works if competitors have also reduced portions. Transparent signaling (\"3-piece vs 4-piece\") reduces backlash.\n\n**5. Optimize Dish Composition (5-15% margin improvement)**\n\nInstead of reducing quality, change the dish composition:\n\nExample: Sea Urchin Sashimi with Complementary Components\n```\nOld composition (high cost):\n- 15g premium sea urchin only\n- COGS: HKD 190 (@ HKD 1,266/kg effective cost)\n- Price: HKD 380\n- Margin: 50%\n\nNew composition (same experience, better margin):\n- 10g premium sea urchin (star ingredient): HKD 127\n- 3g quality salmon: HKD 12\n- Seasonal garnish, sauce, ice: HKD 15\n- Total COGS: HKD 154\n- Price: HKD 380 (same as before)\n- Margin: 59% (9 percentage point improvement)\n\nGuest perception:\n- More interesting dish (multi-component)\n- Better presentation (visual sophistication)\n- Highlight premium uni more (by contrast with supporting ingredients)\n- Price same, margin higher, perceived value higher\n```\n\n**6. Use Premium Seafood for \"Anchor\" High-Margin Dishes (15-40% margin boost)**\n\nStrategy: Use expensive seafood in high-profit-per-unit dishes\n\nExample: Omakase tasting menu\n```\nDish 1: Sea urchin sashimi (3 pieces, 12g)\n- COGS: HKD 127\n- Price: HKD 450\n- Margin: 72%\n\nDish 2: Uni butter toast\n- Same 5g uni (HKD 53)\n- Toast, butter, garnish: HKD 15\n- COGS: HKD 68\n- Price: HKD 280\n- Margin: 76%\n\nResult: Same expensive ingredient, different dishes, both high margin\nCustomers get variety, you get consistency\n```",
      },
      {
        heading: "Communicating Value: Why Diners Will Pay Premium Prices",
        body: "Price is only 'high' if the value isn't clear. Strategic restaurants communicate value explicitly.\n\n**1. Transparency About Sourcing**\n\nWhat to communicate:\n- Origin: \"Norwegian Atlantic Salmon, air-freighted twice weekly\"\n- Quality standard: \"Sashimi-grade, parasite-tested, MSC-certified\"\n- Freshness: \"Landed 36 hours ago, maintained 2-4°C cold chain\"\n- Taste profile: \"Buttery, medium oil content, peak season flavor\"\n\nExample menu description (weak):\n```\nSalmon Sashimi — HKD 380\n```\n\nExample menu description (strong):\n```\nNorwegian Atlantic Salmon Sashimi — HKD 420\nAir-freighted from Faroe Islands 3x weekly. Sashimi-grade, \nMSC-certified, parasite-tested. Served within 48 hours of arrival.\nButtery flavor, medium oil content, Faroe Islands peak season.\n```\n\nResult: HKD 40 (10.5%) price premium justified and expected by diners\n\n**2. Certification Visibility**\n\nMSC (Marine Stewardship Council):\n- Wild-caught sustainable sourcing\n- Appeals to environmentally conscious diners\n- Justifies premium: +5-10%\n\nASC (Aquaculture Stewardship Council):\n- Responsible farming\n- Appeals to sustainability + quality\n- Justifies premium: +5-10%\n\nJapanese Grading Certification:\n- AA, A, B grades visible on menu\n- Creates quality hierarchy\n- Premium grades command premium prices\n- Example: AA-Grade Uni HKD 450 vs A-Grade HKD 320\n\n**3. Menu Positioning**\n\nTier 1 (Highest Price, Premium Positioning):\n- \"Chef's Selection Uni\" (premium grade, sourced specially)\n- \"Hokkaido Bafun Sashimi\" (seasonal, limited availability)\n- \"Premium King Salmon\" (highest quality tier)\n\nTier 2 (Mid-Range, Standard Premium):\n- \"Canadian Red Sea Urchin\" (year-round, reliable quality)\n- \"Norwegian Salmon\" (versatile, consistent)\n\nTier 3 (Entry Premium, Accessible):\n- \"Atlantic Salmon Sashimi\" (standard quality, accessible price)\n\nResult: Clear hierarchy, premium tiers command premium prices, customers self-select\n\n**4. Story-Based Pricing**\n\nExamples:\n- \"Only available May-July, Hokkaido waters, 3-week limited harvest\"\n- \"This week: Faroe Islands salmon, peak oil content season\"\n- \"Special order: King salmon from Sitka, Alaska waters\"\n- \"Partnership with 3-generation family fishery in Norway\"\n\nEffect: Story transforms commodity into experience\nPrice impact: +15-30% premium for identical (chemically) product with story\n\n**5. Comparison-Based Justification**\n\nMany diners don't know premium seafood pricing. Help them understand.\n\nExample: Menu note\n```\nWhy is our sea urchin HKD 480?\n\nPremium sourcing costs:\n- Sashimi-grade uni: HKD 800/kg wholesale\n- Air freight + customs: HKD 150/kg\n- Cold chain + handling: HKD 60/kg\n- Portion 10g = HKD 127 cost per plate\n\nComparison:\n- Casual premium restaurants: HKD 200-300 (lower grade)\n- Fine dining: HKD 350-450 (our level)\n- Michelin-starred: HKD 500-680 (higher grade/rarer)\n\nOur HKD 480 reflects AA-grade, sashimi-certified, \ntraced to specific fishery. Value is transparent.\n```\n\nEffect: Educated customers appreciate value and don't negotiate price\n\n**6. Limited Availability Creates Premium**\n\n- \"Only 3 portions available today\" → psychological premium\n- \"Peak season pricing\" → explains seasonal price variation\n- \"Allocation limited\" → justifies higher price\n- \"Not available next month\" → creates urgency\n\nExample: Menu notation\n```\nHokkaido Bafun Uni (June-July only) — HKD 520\nNow: Peak season, peak flavor. Next availability: June 2027.\n```\n\nEffect: Creates scarcity perception, justifies premium pricing",
      },
    ],
    conclusion: "Premium seafood economics isn't about cutting corners — it's about understanding true costs, pricing strategically, and communicating value. Most restaurants leave 10-20% margin on the table by mis-pricing premium seafood. By calculating true COGS, understanding market value, reducing waste through better handling, and telling the sourcing story, you can achieve 65-75% gross margins on premium dishes while maintaining exceptional quality. That's how high-end restaurants achieve profitability while serving the finest products.",
    ctaTitle: "Ready to Optimize Your Seafood Margins?",
    cta: "Partner with Inari Global Food for transparent sourcing, premium quality, and competitive pricing that supports your margin targets.",
  },
  "zh-HK": {
    title: "高級海鮮經濟學：在香港澳門打造利潤並合理化價格",
    metaDesc: "香港澳門餐廳海鮮定價、利潤優化、成本結構分析和溝通價值以合理化高級定價的戰略指南。",
    published: "2026年3月",
    category: "商業戰略",
    intro: "大多數餐廳將海鮮視為要最小化的成本。戰略性經營者將其視為要最大化的收入驅動力。區別在於理解高級海鮮經濟學。本指南涵蓋成本結構、利潤數學、定價策略，以及如何溝通價值。",
    sections: [
      {
        heading: "海鮮成本結構：了解您的真實食品成本",
        body: "大多數餐廳將海鮮成本計算為批發價格除以公斤。這是不完整的。真實海鮮食品成本包括批發價格、運費、處理、廢損、冷鏈和勞動力。總成本通常是批發價格的150%以上。請計算真實成本，然後相應定價。",
      },
      {
        heading: "毛利潤對比淨利潤：真正重要的是什麼",
        body: "毛利潤是收入減食品成本。淨利潤是毛利潤減營運成本。高級餐廳針對65-70%毛利潤和25-35%淨利潤。不要以批發價格的3倍來定價；以真實成本加入市場毛利潤目標來定價。米芝蓮星級餐廳在海膽刺身上的收費更高，因為他們計算了真實成本。",
      },
      {
        heading: "定價高級海鮮：基於價值對比基於成本的定價",
        body: "基於成本定價：食品成本乘以3倍。基於價值定價：研究市場願意支付什麼。米芝蓮級餐廳港幣450-680元/份。高端omakase港幣350-500元/份。利用季節性、稀有性和準備複雜性來證明溢價。",
      },
    ],
    conclusion: "高級海鮮經濟學不是關於偷工減料——而是關於理解真實成本、戰略性定價和溝通價值。大多數餐廳通過高級海鮮定價錯誤而在桌面上留下10-20%利潤。通過計算真實食品成本、了解市場價值、通過更好的處理減少廢損，並講述採購故事，您可以在優質菜肴上實現65-75%毛利潤，同時保持卓越品質。這就是高級餐廳如何在服務最優秀產品的同時實現盈利能力。",
    ctaTitle: "準備優化海鮮利潤？",
    cta: "與稻荷環球食品合作，獲得透明採購、優質品質和支持您利潤目標的競爭性定價。",
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

  const dict = await getDictionary(locale);
  const c = content[locale as keyof typeof content];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <article className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">{c.title}</h1>
            <div className="flex items-center gap-4 text-slate-600 mb-8 border-b pb-4">
              <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded">
                {c.category}
              </span>
              <span className="text-sm">{c.published}</span>
            </div>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed font-semibold">
              {c.intro}
            </p>

            <div className="space-y-8">
              {c.sections.map((section: any, idx: number) => (
                <section key={idx} className="bg-slate-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-slate-900">
                    {section.heading}
                  </h2>
                  <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

            <section className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-lg mt-8">
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                {c.conclusion}
              </p>
              <div className="bg-white p-6 rounded border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {c.ctaTitle}
                </h3>
                <p className="text-slate-700">{c.cta}</p>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
