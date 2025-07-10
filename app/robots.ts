import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://galagaagency.com";
  const isProduction = process.env.NODE_ENV === "production";

  // Block everything in development/staging
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }

  // Production rules
  return {
    rules: [
      // General rules for all search engines
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
        crawlDelay: 1, // Be respectful to server
      },

      // Give Google special treatment
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/dashboard/"],
        // No crawl delay for Google
      },

      // Allow Bingbot
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
        crawlDelay: 2,
      },

      // Block resource-draining bots
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot"],
        disallow: "/",
      },

      // Block AI training bots (optional)
      {
        userAgent: ["ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
