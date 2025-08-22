export const routeTranslations = {
  es: {
    "about-us": "sobre-nosotros",
    services: "servicios",
    "use-cases": "casos-de-exito",
    contact: "contacto",
    "consultoria-estrategica": "consultoria-estrategica",
    automatizacion: "automatizacion",
    "innovacion-tecnologica": "innovacion-tecnologica",
    "marketing-inmersivo": "marketing-inmersivo",
    "formacion-y-soporte": "formacion-y-soporte",
    "gestion-de-subvenciones": "gestion-de-subvenciones",
  },
  en: {
    "about-us": "about-us",
    services: "services",
    "use-cases": "use-cases",
    contact: "contact",
    "strategic-consulting": "strategic-consulting",
    automation: "automation",
    "technological-innovation": "technological-innovation",
    "immersive-marketing": "immersive-marketing",
    "training-and-support": "training-and-support",
    "grants-management": "grants-management",
  },
};

// Route mapping for switching between languages
export const routeMapping = {
  "sobre-nosotros": "about-us",
  servicios: "services", 
  "casos-de-exito": "use-cases",
  contacto: "contact",
  "consultoria-estrategica": "strategic-consulting",
  automatizacion: "automation",
  "innovacion-tecnologica": "technological-innovation", 
  "marketing-inmersivo": "immersive-marketing",
  "formacion-y-soporte": "training-and-support",
  "gestion-de-subvenciones": "grants-management",
  "about-us": "sobre-nosotros",
  services: "servicios",
  "use-cases": "casos-de-exito", 
  contact: "contacto",
  "strategic-consulting": "consultoria-estrategica",
  automation: "automatizacion",
  "technological-innovation": "innovacion-tecnologica",
  "immersive-marketing": "marketing-inmersivo", 
  "training-and-support": "formacion-y-soporte",
  "grants-management": "gestion-de-subvenciones",
};

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;

export type Language = (typeof locales)[number];
