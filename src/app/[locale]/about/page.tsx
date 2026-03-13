import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header, Footer } from "@/components/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: "About Us",
    metaDesc: "Learn about Hong Kong and Macau's leading sea urchin and salmon supplier. Our mission, expertise, and commitment to premium seafood.",
    mission: "Our Mission",
    missionText: "To be the definitive source and industry representative for premium sea urchin (uni) and salmon in Hong Kong and Macau, connecting the world's best fisheries with discerning buyers across the Greater Bay Area.",
    storyTitle: "Our Story",
    storyText: "Founded with a passion for premium seafood, we established ourselves as the bridge between the world's finest fisheries and Hong Kong and Macau's vibrant dining scene. Our team brings deep expertise in sourcing, grading, and distributing sea urchin and salmon — two of the most sought-after delicacies in East Asian cuisine.",
    whyTitle: "Why Choose Us",
    reasons: [
      { title: "Direct Sourcing", desc: "We maintain direct relationships with fisheries in Japan, Canada, Norway, and other premium origins, ensuring the freshest product at competitive prices." },
      { title: "Quality Expertise", desc: "Our team includes certified grading experts who personally inspect and select every shipment, guaranteeing consistent quality." },
      { title: "Cold Chain Excellence", desc: "From ocean to plate, we maintain an unbroken cold chain with state-of-the-art logistics, ensuring peak freshness on delivery." },
      { title: "Market Knowledge", desc: "With deep roots in the Hong Kong and Macau market, we understand what restaurants, hotels, and retailers need and deliver accordingly." },
    ],
    marketsTitle: "Markets We Serve",
    markets: ["Fine dining and Japanese restaurants", "Hotel food & beverage", "Premium supermarkets", "Specialty seafood retailers", "Online fresh food platforms", "Catering and events"],
  },
  "zh-HK": {
    title: "關於我們",
    metaDesc: "了解香港及澳門領先的海膽及三文魚供應商。我們的使命、專業知識及對優質海鮮的承諾。",
    mission: "我們的使命",
    missionText: "成為香港及澳門優質海膽及三文魚的權威來源及行業代表，將全球最優質的漁場與大灣區的專業買家連繫起來。",
    storyTitle: "我們的故事",
    storyText: "我們懷著對優質海鮮的熱情而創立，致力成為全球頂級漁場與香港及澳門蓬勃餐飲業之間的橋樑。我們的團隊在海膽及三文魚的採購、分級及分銷方面擁有深厚的專業知識——這是東亞料理中最受追捧的兩大珍饈。",
    whyTitle: "為何選擇我們",
    reasons: [
      { title: "直接採購", desc: "我們與日本、加拿大、挪威等優質產地的漁場保持直接合作關係，確保以具競爭力的價格提供最新鮮的產品。" },
      { title: "品質專業", desc: "我們的團隊包括認證分級專家，親自檢查及挑選每批貨物，保證品質穩定。" },
      { title: "冷鏈卓越", desc: "從海洋到餐桌，我們以最先進的物流維持完整冷鏈，確保送達時保持最佳鮮度。" },
      { title: "市場洞察", desc: "深耕香港及澳門市場，我們了解餐廳、酒店及零售商的需求，並按需供應。" },
    ],
    marketsTitle: "服務市場",
    markets: ["高級餐廳及日本料理", "酒店餐飲", "優質超市", "特色海鮮零售", "網上生鮮平台", "宴會及活動"],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = content[locale];
  return {
    title: c.title,
    description: c.metaDesc,
  };
}

export default async function AboutPage({ params }: Props) {
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
            <h2 className="text-xl text-blue-700 font-medium mb-4">{c.mission}</h2>
            <p className="text-lg text-gray-600">{c.missionText}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.storyTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{c.storyText}</p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{c.whyTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {c.reasons.map((r) => (
                <div key={r.title} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-gray-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.marketsTitle}</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {c.markets.map((m) => (
                <li key={m} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}
