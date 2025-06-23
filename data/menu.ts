export interface MenuItem {
  href: string;
  labelKey: string;
}

export const navigationItems: MenuItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/sobre-nosotros", labelKey: "nav.about" },
  { href: "/servicios", labelKey: "nav.services" },
  { href: "/casos-de-exito", labelKey: "nav.cases" },
  { href: "/contacto", labelKey: "nav.contact" },
];

export const ctaButtonKey = "nav.cta";