import { getLocalizedRoute } from "@/utils/navigation";
import type { Language } from "@/utils/routeTranslations";

export interface MenuItem {
  route: string; // The base route (without language prefix)
  labelKey: string;
}

export const navigationItems: MenuItem[] = [
  { route: "", labelKey: "nav.home" }, // Empty string for home
  { route: "sobre-nosotros", labelKey: "nav.about" },
  { route: "servicios", labelKey: "nav.services" },
  { route: "casos-de-exito", labelKey: "nav.cases" },
  { route: "contacto", labelKey: "nav.contact" },
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
