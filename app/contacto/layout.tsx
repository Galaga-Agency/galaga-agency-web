import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Galaga Agency",
  description: "Get in touch with Galaga Agency. Let's talk about transforming your business with digital solutions that work.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}