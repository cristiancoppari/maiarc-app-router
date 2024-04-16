import createMiddleware from "next-intl/middleware";
import { LOCALES } from "./constants/locale";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es)/:path*"],
};
