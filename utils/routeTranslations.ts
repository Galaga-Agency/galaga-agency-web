export const routeTranslations = {
  es: {
    services: "servicios",
    contact: "contacto",
    "about-us": "sobre-nosotros",
    "use-cases": "casos-de-exito",
  },
  en: {
    servicios: "services",
    contacto: "contact",
    "sobre-nosotros": "about-us",
    "casos-de-exito": "use-cases",
  },
};

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;

export type Language = (typeof locales)[number];
