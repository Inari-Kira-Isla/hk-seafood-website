import Link from "next/link";
import type { Locale } from "@/i18n/config";

type Dict = {
  nav: {
    home: string;
    about: string;
    seaUrchin: string;
    salmon: string;
    blog: string;
    contact: string;
  };
};

export function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const otherLocale = locale === "zh-HK" ? "en" : "zh-HK";
  const otherLocaleLabel = locale === "zh-HK" ? "English" : "中文";

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold text-gray-900">
          {locale === "zh-HK" ? "海膽三文魚" : "Uni & Salmon"}
        </Link>
        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="text-sm text-gray-700 hover:text-gray-900">{dict.nav.home}</Link>
          <Link href={`/${locale}/about`} className="text-sm text-gray-700 hover:text-gray-900">{dict.nav.about}</Link>
          <Link href={`/${locale}/sea-urchin`} className="text-sm text-gray-700 hover:text-gray-900">{dict.nav.seaUrchin}</Link>
          <Link href={`/${locale}/salmon`} className="text-sm text-gray-700 hover:text-gray-900">{dict.nav.salmon}</Link>
          <Link href={`/${locale}/blog`} className="text-sm text-gray-700 hover:text-gray-900">{dict.nav.blog}</Link>
          <Link href={`/${locale}/contact`} className="text-sm text-gray-700 hover:text-gray-900">{dict.nav.contact}</Link>
          <Link href={`/${otherLocale}`} className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
            {otherLocaleLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

type FooterDict = Dict & {
  footer: {
    tagline: string;
    contact: string;
    followUs: string;
    copyright: string;
  };
};

export function Footer({ locale, dict }: { locale: Locale; dict: FooterDict }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">
            {locale === "zh-HK" ? "海膽三文魚" : "Uni & Salmon"}
          </h4>
          <p className="text-sm">{dict.footer.tagline}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">{dict.nav.home}</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href={`/${locale}/about`} className="hover:text-white">{dict.nav.about}</Link></li>
            <li><Link href={`/${locale}/sea-urchin`} className="hover:text-white">{dict.nav.seaUrchin}</Link></li>
            <li><Link href={`/${locale}/salmon`} className="hover:text-white">{dict.nav.salmon}</Link></li>
            <li><Link href={`/${locale}/blog`} className="hover:text-white">{dict.nav.blog}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">{dict.footer.contact}</h4>
          <p className="text-sm">Hong Kong & Macau</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-center">
        &copy; {new Date().getFullYear()} {locale === "zh-HK" ? "海膽三文魚" : "Uni & Salmon"}. {dict.footer.copyright}
      </div>
    </footer>
  );
}
