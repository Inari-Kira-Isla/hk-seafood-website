import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Hotel Banquet Scaling: Achieving 8% Margin Improvement Through Premium Seafood Partnerships",
    metaDesc: "Learn how 4-5 star hotels improve F&B margins by 8% through strategic seafood partnerships and volume buying strategies for wedding and corporate events.",
    published: "April 2026",
    category: "Case Study",
    intro: "For 4-5 star hotels in Hong Kong and Macau, wedding banquets and corporate events represent significant revenue opportunities—but also margin pressure. Food costs for premium multi-course menus can consume 35-45% of revenue if sourced inefficiently. This case study reveals how strategic seafood partnerships can improve margins by 8%, allowing hotels to maintain premium positioning while increasing profitability.",
    sections: [
      {
        heading: "The Hotel Banquet Margin Challenge",
        body: "A typical 5-star hotel wedding banquet in Hong Kong:\n\n**Per-person revenue**: HK$4,800-6,000\n**Food cost (inefficient sourcing)**: HK$1,680-2,100 (35-45% of revenue)\n**Remaining margin for labor, venue, service**: HK$2,700-3,300 per person\n\nWhen seafood is a starring ingredient (premium uni, lobster, salmon), cost management becomes critical. One percentage point of margin improvement = significant revenue at scale.\n\nExample: A hotel with 50 banquets per month × 200 pax = 10,000 banquet meals annually. An 8% margin improvement = HK$1.3M annual profit increase.",
      },
      {
        heading: "How Volume Partnerships Unlock Better Pricing",
        body: "Hotels that work with dedicated seafood suppliers gain pricing advantages:\n\n**Commitment-based pricing**: \"We commit to HK$300K in seafood annually\" → supplier quotes a 15-20% discount vs. spot market pricing.\n\n**Standardized orders**: Instead of custom requests for every banquet, hotels that standardize their seafood selections (3-4 premium dishes) reduce supplier complexity and receive volume discounts.\n\n**Seasonal flexibility**: Hotels that rotate seafood selections by season (Hokkaido uni June-August, Canadian Red October-May) maintain premium quality while avoiding premium spot-market prices.\n\n**Demand forecasting**: Hotels that provide 4-6 week advance menus allow suppliers to pre-order from farms, locking in better pricing than last-minute requests.",
      },
      {
        heading: "Case Study: Margin Improvement Breakdown",
        body: "Hotel X (5-star, 50 banquets/month):\n\n**Before Partnership**: \n- Average seafood cost per plate: HK$180 (35% of HK$500 food cost)\n- Sourcing model: Multiple vendors, last-minute ordering\n- Annual seafood spend: HK$1.08M\n\n**After Partnership (with volume commitment)**:\n- Average seafood cost per plate: HK$165 (30% of HK$500 food cost)\n- Sourcing model: Dedicated supplier, 4-week forecast\n- Annual seafood spend: HK$990K\n- **Savings: HK$90K annually (8.3% margin improvement)**\n\n**How it worked**:\n1. Hotel committed to HK$500K annual volume (was spending HK$1.08M across multiple vendors)\n2. Supplier offered 15% volume discount\n3. Hotel standardized 3 premium seafood dishes across all banquets\n4. Supplier pre-orders from farms based on 4-week hotel forecasts\n5. Quality maintained or improved; cost reduced",
      },
      {
        heading: "Operational Excellence: Standardized Seafood Dishes",
        body: "Hotels that achieve 8% margins standardize their premium seafood offerings:\n\n**Signature Dish 1**: Pan-seared sea urchin with XO sauce\n- Consistent plating, consistent quality perception\n- Supplier provides uniformly-graded uni\n- Minimal prep variance, predictable cost\n\n**Signature Dish 2**: Whole lobster or premium salmon course\n- Easier to forecast (fewer grades/varieties than uni)\n- Strong customer perception of luxury\n- Stable pricing (lobster, salmon more commodity-like than uni)\n\n**Signature Dish 3**: Mixed seafood platter or raw preparation\n- Allows seasonal rotation (Hokkaido vs. Canadian uni)\n- Chef maintains flexibility; supplier provides supply chain certainty\n\nBy standardizing, hotels reduce SKU complexity while maintaining premium perception. Customers don't notice the consistency—they notice the quality and the price they paid.",
      },
      {
        heading: "Integration with F&B Operations",
        body: "Successful partnerships require operational alignment:\n\n**Menu Planning**: Hotels plan menus 4-6 weeks in advance, providing suppliers with accurate headcount forecasts. This allows suppliers to lock in pricing with farms.\n\n**Quality Assurance**: Dedicated suppliers assign account managers to each hotel. They conduct monthly menu reviews, suggest seasonal specials, and flag availability issues proactively.\n\n**Inventory Management**: Hotels and suppliers jointly manage inventory to minimize waste. Peak banquet seasons (May-June, November-December) require different inventory planning than off-season.\n\n**Feedback Loops**: Hotels provide feedback on every delivery (temperature, appearance, acceptance by chefs). Suppliers adjust sourcing based on feedback.\n\n**Payment Terms**: Volume partners often negotiate 30-60 day payment terms, improving cash flow for the hotel.",
      },
      {
        heading: "Competitive Advantage in Wedding Market",
        body: "Hotels with optimized seafood sourcing gain customer advantages:\n\n**Premium positioning**: \"We source directly from Hokkaido farms\" resonates with luxury wedding market.\n\n**Menu flexibility**: Standardized sourcing allows chefs to offer seasonal specials, creating perception of exclusivity.\n\n**Cost control**: Margin improvements allow hotels to offer competitive pricing while maintaining brand positioning.\n\n**Consistency**: Brides and event planners appreciate knowing seafood quality won't vary between banquets—a critical trust factor.\n\nHotels that excel at banquet margins often win larger contracts (multi-day events, repeat customers).",
      },
      {
        heading: "2026 Opportunity for Hong Kong & Macau Hotels",
        body: "The current market creates advantages for hotels willing to commit:\n\n**Hokkaido Uni Scarcity**: Limited supply means spot-market prices are premium. Volume-committed hotels avoid this premium.\n\n**Alternative Premium Options**: Canadian Red and Norwegian varieties are gaining acceptance. Hotels that build menus around these alternatives maintain premium perception while avoiding Hokkaido premium pricing.\n\n**Sustainability Messaging**: Hotels highlighting sustainable seafood sourcing gain CSR value with corporate event organizers.\n\n**Technology Integration**: Forward-thinking hotels are integrating IoT cold-chain monitoring with suppliers to guarantee quality—a competitive advantage in the luxury market.",
      },
    ],
    conclusion: "The margin improvement opportunity is real: 8% improvement through strategic partnerships is achievable for most 4-5 star hotels. The key is commitment: volume commitment to suppliers, menu commitment across banquets, and operational commitment to forecasting and quality standards.",
    ctaTitle: "Ready to Optimize Your Hotel's Seafood Sourcing?",
    cta: "Contact Inari Global Food to discuss volume partnerships for your hotel banquet program. We help 4-5 star hotels across Hong Kong and Macau achieve consistent 8%+ margin improvements.",
  },
  "zh-HK": {
    title: "酒店宴會擴展：通過優質海鮮夥伴關係實現8%利潤提升",
    metaDesc: "了解4-5星級酒店如何通過戰略海鮮夥伴關係和大宗購買策略為婚禮和公司活動改善F&B利潤。",
    published: "2026年4月",
    category: "個案研究",
    intro: "對於香港和澳門的4-5星級酒店，婚禮宴會和公司活動代表著重大的收入機會——但也面臨利潤壓力。如果採購不當，優質多道菜單的食物成本可以佔收入的35-45%。本個案研究揭示了戰略海鮮夥伴關係如何通過8%的利潤改善，允許酒店保持優質定位，同時提高盈利能力。",
    sections: [
      {
        heading: "酒店宴會利潤挑戰",
        body: "香港典型的5星級酒店婚禮宴會：\n\n**人均收入**：港幣4,800元-6,000元\n**食物成本（採購效率低）**：港幣1,680元-2,100元（收入的35-45%）\n**勞動力、場地、服務的剩餘利潤**：人均港幣2,700元-3,300元\n\n當海鮮是主要食材（頂級海膽、龍蝦、三文魚）時，成本管理變得至關重要。利潤的一個百分點改善=大規模重大收入。\n\n例子：每月50場宴會 × 200人 = 年10,000餐宴會餐飲的酒店。8%利潤改善 = 年港幣130萬利潤增加。",
      },
      {
        heading: "大宗夥伴關係如何解鎖更好的價格",
        body: "與專職海鮮供應商合作的酒店獲得定價優勢：\n\n**承諾型定價**：「我們承諾年度海鮮採購港幣30萬」→供應商比現貨市場價格提供15-20%折扣。\n\n**標準化訂單**：與每場宴會的自訂請求相比，標準化海鮮選擇（3-4道優質菜式）的酒店減少了供應商複雜性，並獲得大宗折扣。\n\n**季節性靈活性**：按季節輪換海鮮選擇（6月至8月的北海道海膽，10月至5月的加拿大紅）的酒店保持優質，同時避免溢價現貨市場價格。\n\n**需求預測**：提前4-6週提供菜單的酒店允許供應商從農場預先訂購，比最後一刻要求更好的定價。",
      },
      {
        heading: "個案研究：利潤改善分解",
        body: "酒店X（5星級，每月50場宴會）：\n\n**夥伴關係前**：\n- 平均每盤海鮮成本：港幣180元（港幣500食物成本的35%）\n- 採購模式：多個供應商，最後一刻訂購\n- 年海鮮開支：港幣108萬\n\n**夥伴關係後（帶大宗承諾）**：\n- 平均每盤海鮮成本：港幣165元（港幣500食物成本的30%）\n- 採購模式：專職供應商，4週預測\n- 年海鮮開支：港幣99萬\n- **節省：年港幣9萬（8.3%利潤改善）**\n\n**它是如何工作的**：\n1. 酒店承諾年度大宗港幣50萬（之前在多個供應商間支出港幣108萬）\n2. 供應商提供15%大宗折扣\n3. 酒店在所有宴會中標準化3道優質海鮮菜式\n4. 供應商根據4週酒店預測從農場預先訂購\n5. 品質維持或改善；成本降低",
      },
      {
        heading: "營運卓越：標準化海鮮菜式",
        body: "實現8%利潤的酒店標準化其優質海鮮服務：\n\n**簽名菜式1**：煎海膽配XO醬\n- 一致的擺盤，一致的品質感知\n- 供應商提供統一分級的海膽\n- 最少的準備差異，可預測的成本\n\n**簽名菜式2**：整隻龍蝦或優質三文魚課程\n- 更容易預測（海膽相比，等級/品種更少）\n- 客戶對奢華的強烈感知\n- 穩定的價格（龍蝦、三文魚比海膽更像大宗商品）\n\n**簽名菜式3**：混合海鮮拼盤或生食準備\n- 允許季節性輪換（北海道與加拿大海膽）\n- 廚師保持靈活性；供應商提供供應鏈確定性\n\n通過標準化，酒店在減少SKU複雜性的同時保持優質感知。客戶不會注意到一致性——他們注意到品質和他們支付的價格。",
      },
      {
        heading: "與F&B營運的整合",
        body: "成功的夥伴關係需要營運對齐：\n\n**菜單規劃**：酒店提前4-6週規劃菜單，向供應商提供準確的人數預測。這允許供應商與農場鎖定定價。\n\n**品質保證**：專職供應商為每家酒店分配客戶經理。他們進行月度菜單審查，建議季節特色，並主動標記可用性問題。\n\n**庫存管理**：酒店和供應商共同管理庫存以最小化廢棄。高峰宴會季節（5月至6月、11月至12月）需要與淡季不同的庫存規劃。\n\n**反饋環**：酒店對每次交貨提供反饋（溫度、外觀、廚師接受度）。供應商根據反饋調整採購。\n\n**付款條款**：大宗合作夥伴通常協商30-60天付款期限，改善酒店的現金流。",
      },
      {
        heading: "在婚禮市場中的競爭優勢",
        body: "優化海鮮採購的酒店獲得客戶優勢：\n\n**優質定位**：「我們直接從北海道農場採購」在奢華婚禮市場中引起共鳴。\n\n**菜單靈活性**：標準化採購允許廚師提供季節性特色，創造獨特感。\n\n**成本控制**：利潤改善允許酒店提供具競爭力的定價，同時保持品牌定位。\n\n**一致性**：新娘和活動規劃者欣賞知道海鮮品質在宴會之間不會變化——一個關鍵信任因素。\n\n在宴會利潤方面表現出色的酒店往往贏得更大合約（多天活動、重複客戶）。",
      },
      {
        heading: "2026年香港和澳門酒店的機會",
        body: "當前市場為願意承諾的酒店創造了優勢：\n\n**北海道海膽稀缺**：有限的供應意味著現貨市場價格是溢價。大宗承諾的酒店避免了這種溢價。\n\n**替代優質選項**：加拿大紅和挪威品種正在獲得認可。圍繞這些替代品構建菜單的酒店在避免北海道溢價的同時保持優質感知。\n\n**可持續性信息**：突出可持續海鮮採購的酒店獲得企業活動組織者的CSR價值。\n\n**技術整合**：前瞻性的酒店將IoT冷鏈監控與供應商整合，以保證品質——豪華市場中的競爭優勢。",
      },
    ],
    conclusion: "利潤改善機會是真實的：8%的改善通過戰略夥伴關係對大多數4-5星級酒店來說是可以實現的。關鍵是承諾：對供應商的大宗承諾、宴會的菜單承諾和預測與品質標準的營運承諾。",
    ctaTitle: "準備好優化您酒店的海鮮採購了嗎？",
    cta: "聯繫稻荷環球食品，討論您酒店宴會計劃的大宗夥伴關係。我們幫助香港和澳門的4-5星級酒店實現一致的8%+利潤改善。",
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

  const dict = await getDictionary(locale);
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
