import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Galaga Agency",
  description:
    "Get in touch with Galaga Agency. Let's talk about transforming your business with digital solutions that work.",
  keywords: [
    "contact",
    "galaga agency",
    "digital transformation",
    "business consultation",
  ],
  openGraph: {
    title: "Contact Us - Galaga Agency",
    description:
      "Get in touch with Galaga Agency. Let's talk about transforming your business with digital solutions that work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Galaga Agency",
    description:
      "Get in touch with Galaga Agency. Let's talk about transforming your business with digital solutions that work.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
