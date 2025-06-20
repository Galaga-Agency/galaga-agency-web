export interface MenuItem {
  href: string;
  labelKey: string;
}

export const navigationItems: MenuItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/sobre-nosotros", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/contact", labelKey: "nav.contact" },
];

export const ctaButtonKey = "nav.cta";
