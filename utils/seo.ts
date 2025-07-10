import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://galagaagency.com";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Galaga Agency";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  images?: string[];
  type?: "website" | "article";
  locale?: "es" | "en";
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  images = ["/og-image.jpg"],
  type = "website",
  locale = "es",
  noIndex = false,
}: SEOProps): Metadata {
  const baseKeywords = [
    "transformación digital",
    "automatización",
    "marketing inmersivo",
    "Las Palmas",
    "Canarias",
    "consultoría tecnológica",
  ];

  const fullTitle = title.includes(companyName)
    ? title
    : `${title} | ${companyName}`;
  const localeCode = locale === "es" ? "es_ES" : "en_US";
  const canonicalUrl = canonical || `${baseUrl}/${locale}`;

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      type,
      images: images.map((img) => ({
        url: img.startsWith("http") ? img : `${baseUrl}${img}`,
        width: 1200,
        height: 630,
        alt: title,
      })),
      locale: localeCode,
      siteName: companyName,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images[0]?.startsWith("http")
        ? images[0]
        : `${baseUrl}${images[0]}`,
      site: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    },
  };
}

// Organization structured data
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: companyName,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 800,
      height: 600,
    },
    description:
      "Transformamos negocios a través de soluciones digitales que funcionan, con estrategia, creatividad y un enfoque 100% humano.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Palmas de Gran Canaria",
      addressRegion: "Canarias",
      addressCountry: "ES",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Canarias",
      },
      {
        "@type": "Place",
        name: "España",
      },
    ],
    serviceType: [
      "Transformación Digital",
      "Automatización Empresarial",
      "Marketing Inmersivo",
      "Consultoría Estratégica",
      "Innovación Tecnológica",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
      contactType: "customer service",
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    ],
  };
}

// Website structured data
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: companyName,
    description: "Plataforma de transformación digital y marketing inmersivo",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: ["es-ES", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Local Business structured data
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: companyName,
    image: `${baseUrl}/business-photo.jpg`,
    telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Palmas de Gran Canaria",
      addressRegion: "Canarias",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.1248,
      longitude: -15.43,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
    },
  };
}
