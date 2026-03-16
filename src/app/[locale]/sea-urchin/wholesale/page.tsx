import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Sea Urchin Wholesale Supply — Hong Kong & Macau",
    metaDesc: "Wholesale sea urchin supply for restaurants, hotels, and casino resorts in Hong Kong and Macau. Standing orders, custom grading, and dedicated cold-chain delivery.",
    intro: "Inari Global Food is a dedicated sea urchin and salmon wholesale supplier for Hong Kong and Macau's professional F&B industry. We serve omakase restaurants, 5-star hotels, casino resort dining programs, and wholesale buyers who demand consistent quality and reliable supply.",
    clients: {
      title: "Who We Serve",
      types: [
        {
          icon: "🍱",
          title: "Omakase & Japanese Restaurants",
          desc: "Daily AA and A grade supply for omakase counters, nigiri programs, and sashimi menus. Flexible daily orders with next-day delivery.",
        },
        {
          icon: "🏨",
          title: "5-Star Hotels & Resorts",
          desc: "Consistent quality for buffets, fine dining restaurants, and banquet operations. Volume ordering with guaranteed availability.",
        },
        {
          icon: "🎰",
          title: "Macau Casino Resorts",
          desc: "Dedicated supply programs for casino hotel F&B — multiple restaurant outlets, high volume, reliable cross-border delivery from Hong Kong.",
        },
        {
          icon: "🐟",
          title: "Seafood Wholesalers",
          desc: "B2B wholesale for seafood distributors and restaurant supply companies seeking a specialized premium uni source.",
        },
      ],
    },
    services: {
      title: "Wholesale Services",
      items: [
        {
          title: "Standing Orders",
          desc: "Weekly or bi-weekly standing orders with fixed allocation and flexible top-up. Never run out during peak service. Priority customers receive first access to seasonal allocations.",
        },
        {
          title: "Custom Grading Selection",
          desc: "Order by specific grade: AA for omakase, A for premium sashimi service, B for kitchen applications. Mix grades across one order to optimize cost per application.",
        },
        {
          title: "Custom Cuts & Portioning",
          desc: "Receive full trays, half trays, or portioned packs based on your kitchen workflow. We work with your service format.",
        },
        {
          title: "Macau Cross-Border Delivery",
          desc: "Dedicated cold-chain delivery service to Macau. We handle the logistics — your uni arrives in perfect condition regardless of border complexity.",
        },
        {
          title: "Sourcing Consultation",
          desc: "Not sure which grade or species fits your menu and price point? Our team will advise — free of charge. We've supplied Hong Kong and Macau's leading restaurants for years.",
        },
        {
          title: "Quality Guarantee",
          desc: "Any quality issue — rejection at delivery, unexpected bitterness, damaged product — results in replacement within 48 hours. We stand behind every delivery.",
        },
      ],
    },
    process: {
      title: "How to Start",
      steps: [
        { num: "01", label: "Contact us", desc: "Submit your enquiry via the contact form or WhatsApp. Tell us your volume, frequency, and grade requirements." },
        { num: "02", label: "Sample order", desc: "We arrange a sample delivery so your kitchen team can evaluate the product before committing to a standing order." },
        { num: "03", label: "Set up account", desc: "We establish your delivery schedule, preferred grades, and payment terms." },
        { num: "04", label: "Weekly supply", desc: "Consistent deliveries begin. Your account manager is always available for adjustments." },
      ],
    },
    faqTitle: "Wholesale FAQs",
    faqs: [
      {
        q: "What is the minimum order for sea urchin wholesale in Hong Kong?",
        a: "Minimum orders vary by grade and season. For Hokkaido Bafun (Jun–Aug), minimum 2 trays per order due to limited supply. For Murasaki Uni and Canadian Red, we accommodate orders from 1 tray. Contact us to discuss your volume requirements.",
      },
      {
        q: "Do you deliver sea urchin to Macau?",
        a: "Yes. Inari Global Food delivers directly to Macau, including casino resorts, Japanese restaurants, and hotel F&B operations. We handle all cross-border logistics. Next-day delivery from Hong Kong to Macau is standard for standing order customers.",
      },
      {
        q: "Can I get AA grade Hokkaido uni for my omakase restaurant?",
        a: "Yes. We supply AA grade Hokkaido Bafun Uni to omakase restaurants during peak season (June–August). AA grade is allocated to committed standing order customers first — contact us before the season starts to secure your allocation.",
      },
      {
        q: "How often can I order sea urchin?",
        a: "Depending on your volume and requirements, deliveries can be arranged daily, 3x per week, or weekly. We recommend 3x per week for omakase restaurants using fresh sashimi-grade product daily.",
      },
    ],
    cta: {
      title: "Ready to Set Up a Wholesale Account?",
      desc: "Contact us to discuss your requirements. We will arrange a sample delivery and proposed pricing within 24 hours.",
      button: "Contact for Wholesale",
    },
  },
  "zh-HK": {
    title: "海膽批發供應 — 香港及澳門",
    metaDesc: "為香港及澳門的餐廳、酒店及賭場度假村提供海膽批發供應。長期訂單、定制分級及專屬冷鏈送貨服務。",
    intro: "稻荷環球食品是香港及澳門專業餐飲業的專屬海膽及三文魚批發供應商。我們服務 Omakase 餐廳、五星酒店、賭場度假村餐飲項目，以及要求穩定品質和可靠供應的批發買家。",
    clients: {
      title: "服務對象",
      types: [
        {
          icon: "🍱",
          title: "Omakase 及日式餐廳",
          desc: "每日 AA 及 A 等級供應，適用於 Omakase 吧台、握壽司及刺身菜單。靈活日訂，翌日送達。",
        },
        {
          icon: "🏨",
          title: "五星酒店及度假村",
          desc: "自助餐廳、精緻餐廳及宴會業務的穩定品質供應。大批量訂購，保證供應。",
        },
        {
          icon: "🎰",
          title: "澳門賭場度假村",
          desc: "賭場酒店餐飲的專屬供應計劃——多個餐廳出口、大批量、從香港可靠的跨境送貨。",
        },
        {
          icon: "🐟",
          title: "海鮮批發商",
          desc: "為尋求專業高端海膽來源的海鮮分銷商及餐廳供應商提供 B2B 批發服務。",
        },
      ],
    },
    services: {
      title: "批發服務",
      items: [
        {
          title: "長期訂單",
          desc: "每週或雙週長期訂單，固定配額及彈性補貨。在旺季服務中永不斷貨。優先客戶優先獲得季節性配額。",
        },
        {
          title: "定制分級選擇",
          desc: "按特定等級訂購：AA 用於 Omakase，A 用於頂級刺身服務，B 用於廚房應用。一個訂單可混合等級，優化各用途成本。",
        },
        {
          title: "定制切割及分量",
          desc: "按整盤、半盤或分量包接收，配合您的廚房工作流程。我們配合您的服務形式。",
        },
        {
          title: "澳門跨境送貨",
          desc: "提供澳門專屬冷鏈送貨服務。我們處理所有物流——無論過境多複雜，您的海膽都能以完美狀態送達。",
        },
        {
          title: "採購諮詢",
          desc: "不確定哪個等級或品種適合您的菜單和價格定位？我們的團隊將免費為您提供建議。我們為香港及澳門頂級餐廳供應多年。",
        },
        {
          title: "品質保證",
          desc: "任何品質問題——送貨拒收、意外苦澀、產品損壞——48小時內替換。我們為每次送貨負責。",
        },
      ],
    },
    process: {
      title: "如何開始",
      steps: [
        { num: "01", label: "聯繫我們", desc: "通過聯絡表格或 WhatsApp 提交查詢。告訴我們您的用量、頻率及等級要求。" },
        { num: "02", label: "樣品訂單", desc: "我們安排樣品送貨，讓您的廚房團隊在承諾長期訂單前評估產品。" },
        { num: "03", label: "建立賬戶", desc: "確定您的送貨時間表、首選等級及付款條件。" },
        { num: "04", label: "每週供應", desc: "開始穩定送貨。您的客戶經理隨時可協助調整。" },
      ],
    },
    faqTitle: "批發常見問題",
    faqs: [
      {
        q: "香港海膽批發的最低訂購量是多少？",
        a: "最低訂購量因等級和季節而異。北海道馬糞海膽（六月至八月）由於供應有限，每次訂購最少2盤。紫海膽及加拿大紅海膽可接受1盤起訂。請聯繫我們討論您的用量需求。",
      },
      {
        q: "是否提供澳門送貨服務？",
        a: "是的。稻荷環球食品直接送貨至澳門，包括賭場度假村、日式餐廳及酒店餐飲業務。我們處理所有跨境物流。長期訂單客戶可享從香港至澳門的翌日送達服務。",
      },
      {
        q: "我的 Omakase 餐廳可以獲取 AA 級北海道海膽嗎？",
        a: "可以。我們在旺季（六月至八月）向 Omakase 餐廳供應 AA 級北海道馬糞海膽。AA 等級優先分配給已承諾長期訂單的客戶——請在旺季前聯繫我們確保您的配額。",
      },
      {
        q: "我可以多頻繁訂購海膽？",
        a: "根據您的用量和需求，可以安排每日、每週3次或每週送貨。建議日常使用新鮮刺身級產品的 Omakase 餐廳每週訂購3次。",
      },
    ],
    cta: {
      title: "準備開設批發賬戶？",
      desc: "聯繫我們討論您的需求。我們將在24小時內安排樣品送貨及建議報價。",
      button: "聯繫批發採購",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale as keyof typeof content];
  return { title: c.title, description: c.metaDesc };
}

export default async function SeaUrchinWholesalePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale as keyof typeof content];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-900 to-amber-800 py-16 px-4 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{c.title}</h1>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">{c.intro}</p>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.clients.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.clients.types.map((type) => (
                <div key={type.title} className="border border-gray-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.services.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.services.items.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.process.title}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {c.process.steps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.label}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-amber-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{c.cta.title}</h2>
            <p className="text-amber-100 mb-8 text-lg">{c.cta.desc}</p>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-white text-amber-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors"
            >
              {c.cta.button}
            </a>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
