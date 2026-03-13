import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isValidLocale } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  let detectedLocale = defaultLocale;

  if (acceptLanguage.includes("zh")) {
    detectedLocale = "zh-HK";
  } else if (acceptLanguage.includes("en")) {
    detectedLocale = "en";
  }

  // Redirect to locale-prefixed path
  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
