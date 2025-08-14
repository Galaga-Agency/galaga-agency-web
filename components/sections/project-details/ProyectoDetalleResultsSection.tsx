"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { FiTrendingUp, FiAward } from "react-icons/fi";

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
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="results-eyebrow opacity-0 inline-flex items-center gap-3 pb-6">
            <FiAward className="text-turquesa text-lg" />
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm">
              {t("proyecto-detalle.metrics.eyebrow")}
            </span>
            <FiTrendingUp className="text-mandarina text-lg" />
          </div>

          <h2 className="results-title opacity-0 text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("proyecto-detalle.metrics.title")}
          </h2>

          <p className="results-subtitle opacity-0 text-lg md:text-xl text-hielo/90 font-light leading-relaxed container-mobile">
            {t("proyecto-detalle.metrics.subtitle")}
          </p>
        </div>

        {/* Clean Metrics Display */}
        <div className="results-showcase">
          {/* Main metrics grid */}
          <div className="results-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-12">
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={index}
                className="result-card opacity-0 group relative"
                data-index={index}
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 text-center">
                  {/* Value */}
                  <div className="result-card-value text-5xl md:text-6xl lg:text-7xl font-black text-turquesa pb-4 group-hover:text-hielo transition-colors duration-300">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <p className="result-card-label text-lg md:text-xl text-hielo/80 font-medium leading-relaxed group-hover:text-hielo transition-colors duration-300">
                    {t(metric.label)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom summary card */}
          <div className="results-summary opacity-0 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-blanco pb-4">
              {t("proyecto-detalle.summary.title")}
            </h3>
            <p className="text-lg text-hielo/80 leading-relaxed">
              {t("proyecto-detalle.summary.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
