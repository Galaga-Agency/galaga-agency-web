import { getLocalizedRoute } from "@/utils/navigation";
import type { Language } from "@/utils/route-translations";

export interface MenuItem {
  route: string; // The base route (without language prefix)
  label: string;
}

export const navigationItems: MenuItem[] = [
  { route: "", label: "nav.home" }, // Empty string for home
  { route: "about-us", label: "nav.about" }, // Use English as base
  { route: "services", label: "nav.services" }, // Use English as base
  { route: "use-cases", label: "nav.cases" }, // Use English as base
  { route: "contact", label: "nav.contact" }, // Use English as base
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
