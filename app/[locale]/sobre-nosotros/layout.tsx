import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Galaga Agency",
  description:
    "Conoce la historia de Galaga Agency. Transformamos negocios a través de soluciones digitales que funcionan, combinando estrategia empresarial, automatización y creatividad tecnológica.",
  keywords: [
    "sobre nosotros",
    "galaga agency",
    "historia",
    "transformación digital",
    "equipo",
    "experiencia",
    "canarias",
  ],
  openGraph: {
    title: "Sobre Nosotros - Galaga Agency",
    description:
      "Conoce la historia de Galaga Agency. Transformamos negocios a través de soluciones digitales que funcionan, combinando estrategia empresarial, automatización y creatividad tecnológica.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros - Galaga Agency",
    description:
      "Conoce la historia de Galaga Agency. Transformamos negocios a través de soluciones digitales que funcionan, combinando estrategia empresarial, automatización y creatividad tecnológica.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
