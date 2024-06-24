import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n.config";

function getLocale(request: NextRequest) {
  const negotiatorHeaders: any = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.includes(".") || pathname.includes("api")) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|opengraph-image|robots.txt|sitemap).*)",
  ],
};
