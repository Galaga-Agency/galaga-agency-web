export const routeTranslations = {
  es: {
    "about-us": "sobre-nosotros",
    services: "servicios",
    "use-cases": "casos-de-exito",
    contact: "contacto",
  },
  en: {
    "about-us": "about-us",
    services: "services",
    "use-cases": "use-cases",
    contact: "contact",
  },
};

// Route mapping for switching between languages
export const routeMapping = {
  // Spanish to English
  "sobre-nosotros": "about-us",
  servicios: "services",
  "casos-de-exito": "use-cases",
  contacto: "contact",

  // English to Spanish
  "about-us": "sobre-nosotros",
  services: "servicios",
  "use-cases": "casos-de-exito",
  contact: "contacto",
};

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;

export type Language = (typeof locales)[number];
