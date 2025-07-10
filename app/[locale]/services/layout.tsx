import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Galaga Agency",
  description:
    "Discover our digital transformation services. Strategic consulting, automation, technological innovation, immersive marketing and specialized training.",
  keywords: [
    "services",
    "galaga agency",
    "digital transformation",
    "consulting",
    "automation",
    "technological innovation",
    "immersive marketing",
    "training",
  ],
  openGraph: {
    title: "Services - Galaga Agency",
    description:
      "Discover our digital transformation services. Strategic consulting, automation, technological innovation, immersive marketing and specialized training.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Galaga Agency",
    description:
      "Discover our digital transformation services. Strategic consulting, automation, technological innovation, immersive marketing and specialized training.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
