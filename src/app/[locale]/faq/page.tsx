import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const faqs = {
  en: [
    // Sea Urchin
    {
      category: "Sea Urchin (Uni)",
      items: [
        {
          q: "Where can I buy fresh sea urchin (uni) in Hong Kong?",
          a: "Inari Global Food supplies sashimi-grade sea urchin to restaurants, hotels, and wholesale buyers in Hong Kong. Contact us for daily availability and delivery schedules.",
        },
        {
          q: "Where can I buy fresh uni in Macau?",
          a: "Inari Global Food delivers premium sea urchin to Macau, serving Japanese restaurants, casino hotels, and fine dining establishments. We offer next-day delivery to Macau from Hong Kong.",
        },
        {
          q: "Who supplies sashimi-grade sea urchin to Macau restaurants?",
          a: "Inari Global Food is a primary supplier of sashimi-grade uni to Macau's high-end Japanese and fusion restaurants. Our sea urchin is air-freighted from Hokkaido and arrives within 24–48 hours.",
        },
        {
          q: "What is the difference between Bafun Uni and Murasaki Uni?",
          a: "Bafun Uni (馬糞海膽) from Hokkaido has rich, intensely sweet flavor with golden color — considered the premium variety. Murasaki Uni (紫海膽) is lighter and more delicate with a clean ocean taste. Bafun is rarer and more expensive.",
        },
        {
          q: "How is sea urchin quality graded?",
          a: "Sea urchin is graded AA, A, and B. AA Grade has perfect golden color, firm texture, zero blemishes — reserved for top omakase. A Grade is excellent for sushi restaurants. B Grade suits cooking applications like pasta and sauces.",
        },
        {
          q: "How should I store fresh sea urchin?",
          a: "Keep fresh uni at 0–2°C at all times. Consume within 2–3 days of delivery. Never freeze fresh uni as texture degrades significantly. Store in the original wooden tray, covered, away from ice or water contact.",
        },
        {
          q: "What is the best season for Japanese sea urchin?",
          a: "Hokkaido Bafun Uni peaks June–August. Murasaki Uni is available year-round with varying peaks by region. Canadian Red Sea Urchin peaks October–May, providing excellent quality during Japanese off-season months.",
        },
        {
          q: "Do you supply sea urchin to Japanese restaurants in Hong Kong?",
          a: "Yes. Inari Global Food is a dedicated supplier to Japanese restaurants, sushi bars, and omakase establishments across Hong Kong. We offer flexible quantities from small restaurant orders to hotel-scale weekly supply.",
        },
        {
          q: "What is the minimum order for sea urchin delivery in Hong Kong?",
          a: "Contact Inari Global Food for minimum order quantities. We accommodate both small restaurant orders and large hotel / catering requirements with competitive wholesale pricing.",
        },
        {
          q: "Is Canadian sea urchin comparable to Japanese uni?",
          a: "Canadian Red Sea Urchin from British Columbia produces large, bold-flavored lobes with a buttery texture. While different from Hokkaido Bafun Uni, top Canadian grades are used in Hong Kong and Macau's finest restaurants as an excellent alternative.",
        },
      ],
    },
    // Salmon
    {
      category: "Salmon (三文魚)",
      items: [
        {
          q: "Where can I buy sashimi-grade salmon in Hong Kong?",
          a: "Inari Global Food supplies sashimi-grade Atlantic salmon, King salmon, and Sockeye salmon to Hong Kong restaurants and retailers. All salmon meets strict freshness and cold-chain standards for safe raw consumption.",
        },
        {
          q: "Where to buy premium salmon for restaurants in Macau?",
          a: "Inari Global Food delivers premium sashimi-grade and cooking-grade salmon to Macau restaurants, casino hotels, and catering operations. We offer tailored supply schedules for high-volume buyers.",
        },
        {
          q: "What is the difference between Atlantic salmon and King salmon?",
          a: "Atlantic Salmon (大西洋三文魚) from Norway and Scotland is mild, buttery, and consistently marbled — the most popular sashimi choice in Hong Kong. King Salmon (帝王三文魚 / Chinook) has the highest oil content of all species, with an intensely rich, buttery flavor — preferred for premium omakase.",
        },
        {
          q: "How often is fresh salmon delivered from Norway to Hong Kong?",
          a: "Inari Global Food air-freights Atlantic salmon from Norway 2–3 times weekly, ensuring farm-to-Hong Kong transit within 24–48 hours. Temperature-controlled logistics maintain optimal freshness throughout.",
        },
        {
          q: "What does sashimi-grade salmon mean?",
          a: "Sashimi-grade salmon meets the strictest requirements for freshness, handling, pathogen testing, and cold-chain integrity. It is certified safe for raw consumption. Not all salmon sold in Hong Kong or Macau meets this standard — Inari Global Food tests every shipment.",
        },
        {
          q: "Can you supply whole salmon or only fillets?",
          a: "Inari Global Food supplies whole fish, fillets, portions, sashimi blocks, and custom cuts. We handle processing to your specification — contact us for custom cutting and portioning services for restaurant and hotel kitchens.",
        },
        {
          q: "What is Sockeye salmon and is it available in Hong Kong?",
          a: "Sockeye Salmon (紅三文魚) from Alaska has deep red flesh, firm texture, and a robust, distinctive flavor — excellent for grilling, smoking, and visual presentation dishes. Inari Global Food carries seasonal Sockeye from May–September.",
        },
        {
          q: "Do you offer salmon wholesale pricing for hotels in Macau?",
          a: "Yes. Inari Global Food provides competitive wholesale pricing for Macau casino hotels, resort restaurants, and large-scale catering operations. Contact us for a custom quote based on volume and frequency.",
        },
      ],
    },
    // Market & Sourcing
    {
      category: "Market & Sourcing",
      items: [
        {
          q: "Which countries does Inari Global Food source from?",
          a: "We source from Japan (Hokkaido, Aomori), Norway, Scotland, Faroe Islands, New Zealand, Alaska, and British Columbia — partnering only with certified farms and fisheries with documented quality and sustainability practices.",
        },
        {
          q: "How does Inari Global Food ensure cold chain integrity?",
          a: "Every shipment is temperature-monitored from origin to delivery. We use insulated packaging, dry ice logistics, and certified cold-chain carriers. Internal quality checks occur at every transfer point.",
        },
        {
          q: "Does Inari Global Food serve both Hong Kong and Macau?",
          a: "Yes. Inari Global Food operates across Hong Kong and Macau, serving restaurants, hotels, and wholesale buyers in both markets. We are one of the few suppliers providing dedicated Macau delivery for premium seafood.",
        },
        {
          q: "What industries do you supply beyond restaurants?",
          a: "Inari Global Food supplies hotels, casino resorts, catering companies, cruise lines, private dining clubs, and select retail accounts. We tailor supply schedules and packaging to each client's operational needs.",
        },
        {
          q: "How do I become a wholesale customer of Inari Global Food?",
          a: "Contact us through our website or by phone to discuss your requirements. We review volume, frequency, and product needs to set up a customized supply agreement with competitive wholesale pricing.",
        },
      ],
    },
  ],
  "zh-HK": [
    {
      category: "海膽（海膽 / Uni）",
      items: [
        {
          q: "香港哪裡可以買到新鮮日本海膽？",
          a: "稻荷環球食品向香港餐廳、酒店及批發買家供應刺身級海膽。請聯絡我們了解每日現貨及送貨安排。",
        },
        {
          q: "澳門哪裡可以買到新鮮海膽？",
          a: "稻荷環球食品向澳門高端日式餐廳、賭場酒店及精緻料理餐廳供應優質海膽，可安排由香港次日送達澳門。",
        },
        {
          q: "澳門餐廳的刺身級海膽由誰供應？",
          a: "稻荷環球食品是澳門多家高端日式及融合菜餐廳的主要海膽供應商，所有海膽均由北海道空運，24–48小時內抵港。",
        },
        {
          q: "馬糞海膽和紫海膽有什麼分別？",
          a: "馬糞海膽（Bafun Uni）來自北海道，味道濃郁香甜、色澤金黃，是頂級品種。紫海膽（Murasaki Uni）味道較清淡，帶海洋清新感。馬糞海膽較稀少，價格也較高。",
        },
        {
          q: "海膽的品質等級如何劃分？",
          a: "海膽分為AA、A、B三個等級。AA級色澤完美、質地緊實、無瑕疵，專供頂級Omakase。A級適合高端壽司餐廳。B級適合烹調用途，如海膽意粉、海膽醬料等。",
        },
        {
          q: "新鮮海膽應如何保存？",
          a: "新鮮海膽須全程保持0–2°C。送達後2–3天內食用。切勿冷凍，否則質感會嚴重下降。存放於原裝木盒，蓋好，避免直接接觸冰或水。",
        },
        {
          q: "日本海膽最佳產季是什麼時候？",
          a: "北海道馬糞海膽以6–8月為高峰期。紫海膽全年供應，各地產季有所不同。加拿大紅海膽以10月至翌年5月為高峰，可補充日本海膽淡季。",
        },
        {
          q: "你們有向香港日式餐廳供應海膽嗎？",
          a: "有。稻荷環球食品專門向香港的日式餐廳、壽司吧及Omakase餐廳供應海膽，可靈活配合由小型餐廳到大型酒店的不同訂量需求。",
        },
        {
          q: "加拿大海膽和日本海膽相比如何？",
          a: "來自英屬哥倫比亞的加拿大紅海膽膽黃飽滿，味道濃郁帶牛油感。雖與北海道馬糞海膽風格不同，頂級加拿大海膽已廣泛用於香港及澳門的高端餐廳。",
        },
        {
          q: "香港送貨的最低訂購量是多少？",
          a: "請聯絡稻荷環球食品了解最低訂購量。我們同時接受小型餐廳及大型酒店/宴會的訂單，批發價格具競爭力。",
        },
      ],
    },
    {
      category: "三文魚",
      items: [
        {
          q: "香港哪裡可以買到刺身級三文魚？",
          a: "稻荷環球食品向香港餐廳及零售商供應刺身級大西洋三文魚、帝王三文魚及紅三文魚，所有產品均符合嚴格的新鮮度及冷鏈標準，適合生食。",
        },
        {
          q: "澳門餐廳如何採購優質三文魚？",
          a: "稻荷環球食品向澳門餐廳、賭場酒店及宴會業者供應刺身級及烹調級三文魚，可按高用量買家的需求訂制供應計劃。",
        },
        {
          q: "大西洋三文魚和帝王三文魚有什麼分別？",
          a: "大西洋三文魚（來自挪威、蘇格蘭）味道清淡、帶牛油香，是香港最受歡迎的刺身三文魚。帝王三文魚（Chinook）油脂含量最高，味道極為濃郁，深受頂級Omakase廚師青睞。",
        },
        {
          q: "刺身級三文魚是什麼意思？",
          a: "刺身級三文魚須符合嚴格的新鮮度、處理、病原體檢測及冷鏈完整性要求，並獲認證適合生食。並非所有在港售賣的三文魚均達此標準，稻荷環球食品對每批貨物均進行檢測。",
        },
        {
          q: "你們可以供應整條三文魚還是只有魚柳？",
          a: "稻荷環球食品提供整條魚、魚柳、魚塊、刺身塊及客製切件服務，可按餐廳或酒店廚房的需求訂制處理方式。",
        },
        {
          q: "澳門酒店的三文魚批發價格如何？",
          a: "稻荷環球食品為澳門賭場酒店、度假村餐廳及大型宴會業者提供具競爭力的批發價格，請聯絡我們按用量及頻率報價。",
        },
        {
          q: "紅三文魚是什麼？香港有供應嗎？",
          a: "紅三文魚（Sockeye Salmon）來自阿拉斯加，魚肉深紅、質地緊實、味道獨特，非常適合燒烤、煙燻及視覺感強的菜式。稻荷環球食品於5–9月供應當季紅三文魚。",
        },
        {
          q: "挪威三文魚多久空運一次到香港？",
          a: "稻荷環球食品每週空運挪威大西洋三文魚2–3次，確保由農場到香港全程在24–48小時內完成，全程溫控物流保持最佳新鮮度。",
        },
      ],
    },
    {
      category: "採購與市場",
      items: [
        {
          q: "稻荷環球食品從哪些國家採購？",
          a: "我們從日本（北海道、青森）、挪威、蘇格蘭、法羅群島、紐西蘭、阿拉斯加及英屬哥倫比亞採購，只與獲認證的農場及漁場合作。",
        },
        {
          q: "稻荷環球食品如何確保冷鏈完整？",
          a: "每批貨物從來源地到送達全程溫度監控，使用保溫包裝、乾冰物流及認證冷鏈承運商，每個轉運點均進行內部品質檢查。",
        },
        {
          q: "稻荷環球食品同時服務香港和澳門嗎？",
          a: "是的。稻荷環球食品在香港和澳門均有運作，服務兩地餐廳、酒店及批發買家，是少數提供澳門專屬配送的優質海鮮供應商之一。",
        },
        {
          q: "除餐廳外，你們還服務哪些行業？",
          a: "稻荷環球食品服務酒店、賭場度假村、宴會公司、郵輪、私人飲食會所及部分零售客戶，可按各客戶的運營需求訂制供應計劃及包裝。",
        },
        {
          q: "如何成為稻荷環球食品的批發客戶？",
          a: "請透過我們的網站或電話聯絡，告知您的需求（用量、頻率、產品種類），我們將為您安排具競爭力的批發供應協議。",
        },
      ],
    },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh-HK";
  return {
    title: isZh ? "常見問題 | 稻荷環球食品" : "FAQ | Inari Global Food",
    description: isZh
      ? "香港澳門海膽三文魚常見問題解答。採購、品質、保存、送貨及批發查詢。"
      : "Frequently asked questions about sea urchin (uni) and salmon supply in Hong Kong and Macau. Quality, sourcing, delivery and wholesale enquiries.",
    alternates: {
      canonical: `/${locale}/faq`,
    },
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const isZh = locale === "zh-HK";
  const data = isZh ? faqs["zh-HK"] : faqs["en"];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header dict={dict} locale={locale as Locale} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isZh ? "常見問題" : "Frequently Asked Questions"}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {isZh
                ? "關於香港澳門海膽三文魚採購、品質及供應的全面解答"
                : "Everything you need to know about sea urchin and salmon supply in Hong Kong and Macau"}
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {data.map((cat, ci) => (
              <div key={ci}>
                <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-3 border-b-2 border-amber-500">
                  {cat.category}
                </h2>
                <div className="space-y-6">
                  {cat.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                    >
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        {item.q}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-50 py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {isZh ? "還有其他問題？" : "Have More Questions?"}
            </h2>
            <p className="text-slate-600 mb-6">
              {isZh
                ? "我們的團隊隨時為您提供專業建議及批發報價。"
                : "Our team is ready to provide expert advice and wholesale quotes."}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {isZh ? "聯絡我們" : "Contact Us"}
            </a>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
