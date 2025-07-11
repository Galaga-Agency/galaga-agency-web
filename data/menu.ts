import { getLocalizedRoute } from "@/utils/navigation";
import type { Language } from "@/utils/routeTranslations";

export interface MenuItem {
  route: string; // The base route (without language prefix)
  labelKey: string;
}

export const navigationItems: MenuItem[] = [
  { route: "", labelKey: "nav.home" }, // Empty string for home
  { route: "about-us", labelKey: "nav.about" }, // Use English as base
  { route: "services", labelKey: "nav.services" }, // Use English as base
  { route: "use-cases", labelKey: "nav.cases" }, // Use English as base
  { route: "contact", labelKey: "nav.contact" }, // Use English as base
];

export const ctaButtonKey = "nav.cta";

// Helper function to get navigation items with localized hrefs
export function getLocalizedNavigationItems(
  language: Language
): Array<MenuItem & { href: string }> {
  return navigationItems.map((item) => ({
    ...item,
    href: getLocalizedRoute(item.route, language),
  }));
}
