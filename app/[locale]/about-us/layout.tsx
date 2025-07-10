import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Galaga Agency",
  description:
    "Learn about Galaga Agency's story. We transform businesses through digital solutions that work, combining business strategy, automation and technological creativity.",
  keywords: [
    "about us",
    "galaga agency",
    "story",
    "digital transformation",
    "team",
    "experience",
    "canary islands",
  ],
  openGraph: {
    title: "About Us - Galaga Agency",
    description:
      "Learn about Galaga Agency's story. We transform businesses through digital solutions that work, combining business strategy, automation and technological creativity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Galaga Agency",
    description:
      "Learn about Galaga Agency's story. We transform businesses through digital solutions that work, combining business strategy, automation and technological creativity.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
