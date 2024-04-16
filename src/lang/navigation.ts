import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "@/constants/locale";

export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: LOCALES,
  localePrefix,
});
