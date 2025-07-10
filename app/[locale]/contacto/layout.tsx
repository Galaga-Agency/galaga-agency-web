import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Galaga Agency",
  description:
    "Ponte en contacto con Galaga Agency. Hablemos sobre cómo transformar tu negocio con soluciones digitales que funcionan.",
  keywords: [
    "contacto",
    "galaga agency",
    "transformación digital",
    "consultoría empresarial",
  ],
  openGraph: {
    title: "Contacto - Galaga Agency",
    description:
      "Ponte en contacto con Galaga Agency. Hablemos sobre cómo transformar tu negocio con soluciones digitales que funcionan.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Galaga Agency",
    description:
      "Ponte en contacto con Galaga Agency. Hablemos sobre cómo transformar tu negocio con soluciones digitales que funcionan.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
