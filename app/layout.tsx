import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Simple font preload without onLoad handler */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-primary antialiased bg-white text-gray-900 no-tap-highlight">
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
