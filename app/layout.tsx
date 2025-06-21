import type { Metadata } from "next";
import "./globals.css";
import { TranslationProvider } from "@/hooks/useTranslation";
import LoadingWrapper from "@/components/LoadingWrapper";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Galaga Agency - Innovation and Digital Transformation",
    template: "%s | Galaga Agency",
  },
  description:
    "We transform businesses through digital solutions that work, with strategy, creativity and a 100% human approach.",
  keywords: [
    "digital transformation",
    "business innovation",
    "automation",
    "Canarias",
    "marketing",
    "technology",
  ],
  authors: [{ name: "Galaga Agency" }],
  creator: "Galaga Agency",
  publisher: "Galaga Agency",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://galagaagency.com",
    siteName: "Galaga Agency",
    title: "Galaga Agency - Innovation and Digital Transformation",
    description:
      "We transform businesses through digital solutions that work, with strategy, creativity and a 100% human approach.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GalagaAgency",
    creator: "@GalagaAgency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Adobe Fonts - Aileron */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/your-font-id.css"
        />
      </head>
      <body className="antialiased">
        <TranslationProvider>
          <LoadingWrapper>
            <Navbar />
            {children}
          </LoadingWrapper>
        </TranslationProvider>
      </body>
    </html>
  );
}
