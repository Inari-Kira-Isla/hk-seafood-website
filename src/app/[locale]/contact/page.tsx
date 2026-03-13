import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "Contact Us",
    metaDesc: "Get in touch with Hong Kong and Macau's leading sea urchin and salmon supplier. Wholesale inquiries, partnerships, and industry consultation.",
    intro: "Whether you're a restaurant, hotel, retailer, or industry partner — we'd love to hear from you.",
    wholesaleTitle: "Wholesale Inquiries",
    wholesaleDesc: "Looking for a reliable supplier of premium sea urchin or salmon? We offer competitive wholesale pricing with flexible ordering and delivery schedules across Hong Kong and Macau.",
    partnerTitle: "Partnership Opportunities",
    partnerDesc: "Interested in exclusive distribution, joint ventures, or strategic partnerships in the Greater Bay Area? Let's explore how we can work together.",
    consultTitle: "Industry Consultation",
    consultDesc: "Need expert advice on sourcing, grading, or market trends for sea urchin and salmon? Our team is here to help.",
    locationTitle: "Location",
    location: "Hong Kong & Macau",
    hoursTitle: "Business Hours",
    hours: "Monday – Saturday, 8:00 AM – 6:00 PM HKT",
  },
  "zh-HK": {
    title: "聯絡我們",
    metaDesc: "聯絡香港及澳門領先的海膽及三文魚供應商。批發查詢、合作夥伴及行業諮詢。",
    intro: "無論您是餐廳、酒店、零售商或行業合作夥伴，我們期待與您聯繫。",
    wholesaleTitle: "批發查詢",
    wholesaleDesc: "正在尋找可靠的優質海膽或三文魚供應商？我們提供具競爭力的批發價格，靈活訂購及配送時間表，覆蓋香港及澳門。",
    partnerTitle: "合作機會",
    partnerDesc: "有興趣在大灣區進行獨家代理、合資企業或策略合作？讓我們探討合作方式。",
    consultTitle: "行業諮詢",
    consultDesc: "需要海膽及三文魚的採購、分級或市場趨勢方面的專家意見？我們的團隊隨時為您提供協助。",
    locationTitle: "地點",
    location: "香港及澳門",
    hoursTitle: "營業時間",
    hours: "星期一至六，上午8:00 – 下午6:00（香港時間）",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale];
  return { title: c.title, description: c.metaDesc };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const c = content[locale];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-lg text-gray-600">{c.intro}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.wholesaleTitle}</h2>
              <p className="text-gray-600">{c.wholesaleDesc}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.partnerTitle}</h2>
              <p className="text-gray-600">{c.partnerDesc}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{c.consultTitle}</h2>
              <p className="text-gray-600">{c.consultDesc}</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{c.locationTitle}</h2>
              <p className="text-gray-600">{c.location}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{c.hoursTitle}</h2>
              <p className="text-gray-600">{c.hours}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
