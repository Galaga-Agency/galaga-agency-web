import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://galagaagency.com";
  const currentDate = new Date();

  // Static pages with strategic priorities
  const staticPages: MetadataRoute.Sitemap = [
    // Spanish routes
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/es/sobre-nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/servicios`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/casos-de-exito`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // English routes
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/use-cases`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Case studies
    {
      url: `${baseUrl}/es/casos-de-exito/dos-x-dos-grupo-imagen`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/casos-de-exito/energia-solar-canarias`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/casos-de-exito/toyota-canarias`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/casos-de-exito/canarias-game-show`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // English case studies
    {
      url: `${baseUrl}/en/use-cases/dos-x-dos-grupo-imagen`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/use-cases/energia-solar-canarias`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/use-cases/toyota-canarias`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/use-cases/canarias-game-show`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return staticPages;
}
