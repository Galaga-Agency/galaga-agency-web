import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios - Galaga Agency",
  description:
    "Descubre nuestros servicios de transformación digital. Consultoría estratégica, automatización, innovación tecnológica, marketing inmersivo y formación especializada.",
  keywords: [
    "servicios",
    "galaga agency",
    "transformación digital",
    "consultoría",
    "automatización",
    "innovación tecnológica",
    "marketing inmersivo",
    "formación",
  ],
  openGraph: {
    title: "Servicios - Galaga Agency",
    description:
      "Descubre nuestros servicios de transformación digital. Consultoría estratégica, automatización, innovación tecnológica, marketing inmersivo y formación especializada.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios - Galaga Agency",
    description:
      "Descubre nuestros servicios de transformación digital. Consultoría estratégica, automatización, innovación tecnológica, marketing inmersivo y formación especializada.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
