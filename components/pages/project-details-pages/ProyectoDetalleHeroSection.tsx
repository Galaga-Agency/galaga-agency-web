"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiTag } from "react-icons/fi";
import { getCaseStudyBySlug } from "@/data/case-studies";

interface ProyectoDetalleHeroSectionProps {
  slug: string;
}

export default function ProyectoDetalleHeroSection({
  slug,
}: ProyectoDetalleHeroSectionProps) {
  const { t } = useTranslation();

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <section className="proyecto-detalle-hero-section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
        <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-blanco">
              {t("project-details-page.common.projectNotFound")}
            </h1>
            <Link
              href="/casos-de-exito"
              className="text-turquesa hover:text-hielo"
            >
              ← {t("project-details-page.common.backToCases")}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="proyecto-detalle-hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${caseStudy.image}')`,
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(18, 28, 48, 0.85) 0%, rgba(23, 97, 97, 0.75) 50%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      ></div>

      {/* Additional depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18, 28, 48, 0.3) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      ></div>

      <div className="container relative z-30 w-full py-20">
        <div className="proyecto-detalle-hero-content w-full flex flex-col justify-center min-h-[70vh]">
          {/* Breadcrumb */}
          <div className="proyecto-detalle-breadcrumb pb-8 md:pb-12">
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center gap-3 text-hielo/80 hover:text-blanco transition-colors duration-300 drop-shadow-lg"
            >
              <FiArrowLeft className="text-lg" />
              <span className="font-medium">
                {t("project-details-page.common.backToCases")}
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <div className="proyecto-detalle-content">
              {/* Category badge */}
              <div className="proyecto-detalle-category opacity-0 inline-flex items-center gap-2 bg-teal/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <FiTag className="text-turquesa text-sm flex-shrink-0" />
                <span className="text-turquesa font-semibold text-sm uppercase tracking-wider drop-shadow-lg">
                  {t(caseStudy.categoryKey)}
                </span>
              </div>

              {/* Title */}
              <h1 className="proyecto-detalle-title opacity-0 text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight py-6 drop-shadow-2xl">
                {t(caseStudy.titleKey)}
              </h1>

              {/* Challenge/Description */}
              <p className="proyecto-detalle-subtitle opacity-0 text-xl md:text-2xl text-hielo/90 font-light leading-relaxed pb-12 drop-shadow-lg">
                {t(caseStudy.introKey)}
              </p>

              {/* Metrics */}
              <div className="proyecto-detalle-metrics opacity-0 grid grid-cols-2 gap-6">
                {caseStudy.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="proyecto-metric-item text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 drop-shadow-xl"
                  >
                    <div className="text-3xl md:text-4xl font-black text-turquesa pb-2 drop-shadow-lg">
                      {metric.value}
                    </div>
                    <div className="text-hielo/80 text-sm font-medium uppercase tracking-wider drop-shadow-lg">
                      {t(metric.label)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image - Rectangle aspect ratio */}
            <div className="proyecto-detalle-image relative opacity-0 lg:block">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 drop-shadow-2xl">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={caseStudy.gallery[0]}
                    alt={t(caseStudy.titleKey)}
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
