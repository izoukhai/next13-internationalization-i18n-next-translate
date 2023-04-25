// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18n from "../i18n";

/** Regex to check if current path equals to a public file */
const PUBLIC_FILE = /\.(.*)$/;
/** */

/** Check if locale is present in the pathname */
const pathnameIsMissingLocale = (pathname: string) => {
  return i18n.locales.every(
    (loc) => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`
  );
};

/** Ignore non-page paths */
const shouldProceed = (pathname: string) => {
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return false;
  }
  return true;
};

export async function middleware(request: NextRequest) {
  const { locale, pathname } = request.nextUrl;

  /** Ignore non-page paths */
  if (!shouldProceed(pathname)) return;
  /** */

  if (request.nextUrl.locale === "default") {
    console.log("ifejefj");
    /** Get user's locale */
    const storedLocale = request.cookies.get("NEXT_LOCALE")?.value;
    /** */

    const response = NextResponse.redirect(
      new URL(
        `/${storedLocale || "en"}/${request.nextUrl.pathname}`,
        request.url
      )
    );

    /** Store defaut locale in user's cookies */
    if (!storedLocale)
      response.cookies.set("NEXT_LOCALE", "en", {
        path: "/",
      });
    /** */

    /** Redirect user to default locale */
    return response;
  }
  /** Adds ?lang={locale} for next-translate package */

  request.nextUrl.searchParams.set("lang", locale);

  /** */

  return NextResponse.rewrite(request.nextUrl);
}
