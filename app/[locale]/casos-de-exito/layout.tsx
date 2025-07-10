import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito - Galaga Agency",
  description:
    "Descubre cómo hemos transformado negocios reales con soluciones tecnológicas innovadoras. Casos de éxito en digitalización, marketing inmersivo y eventos.",
  keywords: [
    "casos de éxito",
    "galaga agency",
    "proyectos",
    "transformación digital",
    "marketing inmersivo",
    "digitalización",
    "eventos",
    "resultados",
  ],
  openGraph: {
    title: "Casos de Éxito - Galaga Agency",
    description:
      "Descubre cómo hemos transformado negocios reales con soluciones tecnológicas innovadoras. Casos de éxito en digitalización, marketing inmersivo y eventos.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de Éxito - Galaga Agency",
    description:
      "Descubre cómo hemos transformado negocios reales con soluciones tecnológicas innovadoras. Casos de éxito en digitalización, marketing inmersivo y eventos.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
