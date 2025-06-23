"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { getCaseStudyBySlug } from "@/data/case-studies";

interface ProyectoDetalleResultsSectionProps {
  slug: string;
}

export default function ProyectoDetalleResultsSection({
  slug,
}: ProyectoDetalleResultsSectionProps) {
  const { t } = useTranslation();

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return null;
  }

  return (
    <section className="proyecto-detalle-results-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="results-bg-element-1 opacity-0 absolute top-1/3 left-1/4 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl"></div>
        <div className="results-bg-element-2 opacity-0 absolute bottom-1/4 right-1/3 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="results-eyebrow opacity-0 inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm">
              {t("proyecto-detalle.metrics.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>

          <h2 className="results-title opacity-0 text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("proyecto-detalle.metrics.title")}
          </h2>

          <p className="results-subtitle opacity-0 text-lg md:text-xl text-hielo/90 font-light leading-relaxed px-4">
            {t("proyecto-detalle.metrics.subtitle")}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="results-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudy.metrics.map((metric, index) => (
            <div
              key={index}
              className="result-card opacity-0 group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center"
              data-index={index}
            >
              {/* Value */}
              <div className="result-card-value text-5xl md:text-6xl lg:text-7xl font-black text-turquesa pb-4 group-hover:text-hielo transition-colors duration-300">
                {metric.value}
              </div>

              {/* Label */}
              <p className="result-card-label text-lg md:text-xl text-hielo/80 font-medium leading-relaxed group-hover:text-hielo transition-colors duration-300">
                {t(metric.labelKey)}
              </p>

              {/* Floating accent */}
              <div className="result-card-accent absolute top-6 right-6 w-4 h-4 bg-mandarina rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}