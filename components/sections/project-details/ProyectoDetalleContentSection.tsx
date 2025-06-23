"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FiTarget, FiZap, FiCheckCircle } from "react-icons/fi";
import { getCaseStudyBySlug } from "@/data/case-studies";

interface ProyectoDetalleContentSectionProps {
  slug: string;
}

export default function ProyectoDetalleContentSection({ slug }: ProyectoDetalleContentSectionProps) {
  const { t } = useTranslation();
  
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return null;
  }

  return (
    <section className="proyecto-detalle-content-section section relative bg-gradient-to-br from-blanco to-hielo">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-turquesa/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Challenge Section */}
        <div className="proyecto-content-challenge pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-6 pb-8">
                <div className="p-5 bg-teal/20 rounded-2xl flex-shrink-0">
                  <FiTarget className="challenge-icon opacity-0 text-4xl lg:text-5xl text-teal" />
                </div>
                <h2 className="proyecto-content-challenge-title opacity-0 text-3xl md:text-4xl lg:text-5xl font-black text-teal leading-tight">
                  {t("proyecto-detalle.challenge.title")}
                </h2>
              </div>
              <p className="proyecto-content-challenge-text opacity-0 text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {t(caseStudy.challengeKey)}
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="proyecto-content-solution pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="hidden lg:block lg:order-1"></div>
            <div className="lg:order-2">
              <div className="flex items-center gap-6 pb-8">
                <div className="p-5 bg-mandarina/20 rounded-2xl flex-shrink-0">
                  <FiZap className="solution-icon opacity-0 text-4xl lg:text-5xl text-naranja-tostado" />
                </div>
                <h2 className="proyecto-content-solution-title opacity-0 text-3xl md:text-4xl lg:text-5xl font-black text-teal leading-tight">
                  {t("proyecto-detalle.solution.title")}
                </h2>
              </div>
              <p className="proyecto-content-solution-text opacity-0 text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {t(caseStudy.solutionKey)}
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="proyecto-content-results">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 pb-8">
                <div className="p-5 bg-verde-azulado/20 rounded-2xl flex-shrink-0">
                  <FiCheckCircle className="results-icon opacity-0 text-4xl lg:text-5xl text-verde-azulado" />
                </div>
                <h2 className="proyecto-content-results-title opacity-0 text-3xl md:text-4xl lg:text-5xl font-black text-teal leading-tight">
                  {t("proyecto-detalle.results.title")}
                </h2>
              </div>
              <p className="proyecto-content-results-text opacity-0 text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {t(caseStudy.resultKey)}
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}