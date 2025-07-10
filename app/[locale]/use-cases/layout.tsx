import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases - Galaga Agency",
  description:
    "Discover how we've transformed real businesses with innovative technological solutions. Success stories in digitalization, immersive marketing and events.",
  keywords: [
    "use cases",
    "success stories",
    "galaga agency",
    "projects",
    "digital transformation",
    "immersive marketing",
    "digitalization",
    "events",
    "results",
  ],
  openGraph: {
    title: "Use Cases - Galaga Agency",
    description:
      "Discover how we've transformed real businesses with innovative technological solutions. Success stories in digitalization, immersive marketing and events.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases - Galaga Agency",
    description:
      "Discover how we've transformed real businesses with innovative technological solutions. Success stories in digitalization, immersive marketing and events.",
  },
};

export default function UseeCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
