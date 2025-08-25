import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://galagaagency.com";

  // ALWAYS ALLOW CRAWLERS 
  return {
    rules: [
      // Allow everything for all search engines
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Block API endpoints
          "/admin/", // Block admin areas
          "/_next/", // Block Next.js internals
          "/private/", // Block private content
          "/404", // Block error pages
          "/500",
          "/login", // Block authentication pages
          "/dashboard/", // Block dashboard if exists
          "/*.pdf$", // Block direct PDF access
          "/temp/", // Block temporary files
        ],
        crawlDelay: 1,
      },

      // Give Google special treatment
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/dashboard/"],
      },

      // Allow Bingbot
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
        crawlDelay: 2,
      },

      // Block resource-draining SEO bots
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot"],
        disallow: "/",
      },

      // Block AI training bots
      {
        userAgent: ["ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
