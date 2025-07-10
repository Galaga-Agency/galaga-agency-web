interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price?: string;
  locale: "es" | "en";
}

export default function ServiceSchema({
  serviceName,
  description,
  price,
  locale,
}: ServiceSchemaProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://galagaagency.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Galaga Agency",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Canarias, España",
    },
    serviceType: "Digital Transformation",
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price,
        priceCurrency: "EUR",
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
