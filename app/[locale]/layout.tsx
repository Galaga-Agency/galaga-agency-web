import type { Metadata } from "next";
import "../globals.css";
import { TranslationProvider } from "@/hooks/useTranslation";
import LoadingWrapper from "@/components/LoadingWrapper";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getLocalBusinessSchema,
} from "@/utils/seo";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://galagaagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Galaga Agency - Transformación Digital y Marketing Inmersivo",
    template: "%s | Galaga Agency",
  },
  description:
    "Transformamos negocios a través de soluciones digitales que funcionan, con estrategia, creatividad y un enfoque 100% humano. Especialistas en automatización, CRM, ERP y marketing inmersivo en Canarias.",
  keywords: [
    "transformación digital",
    "automatización empresarial",
    "marketing inmersivo",
    "CRM",
    "ERP",
    "realidad aumentada",
    "consultoría tecnológica",
    "Las Palmas",
    "Canarias",
    "España",
    "digitalización",
    "innovación tecnológica",
  ],
  authors: [{ name: "Galaga Agency" }],
  creator: "Galaga Agency",
  publisher: "Galaga Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    siteName: "Galaga Agency",
    title: "Galaga Agency - Transformación Digital y Marketing Inmersivo",
    description:
      "Transformamos negocios con soluciones digitales que funcionan. Automatización, CRM, ERP y experiencias inmersivas que generan resultados reales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Galaga Agency - Transformación Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GalagaAgency",
    creator: "@GalagaAgency",
    title: "Galaga Agency - Transformación Digital",
    description:
      "Transformamos negocios con soluciones digitales que funcionan.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      es: `${baseUrl}/es`,
      en: `${baseUrl}/en`,
    },
  },
  other: {
    "theme-color": "#0d9488",
    "msapplication-TileColor": "#0d9488",
    "google-site-verification": "5kSZQdEf21csyU2equoyVFc4nYSU0Mrk2t-FLpigFwE",
    "msvalidate.01": "F7F24C858CE116145F087D2242CD996B",
  },
  verification: {
    google: "5kSZQdEf21csyU2equoyVFc4nYSU0Mrk2t-FLpigFwE",
  },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <TranslationProvider>
        <LoadingWrapper>
          <Navbar />
          {children}
          <Footer />
        </LoadingWrapper>
      </TranslationProvider>
    </>
  );
}
