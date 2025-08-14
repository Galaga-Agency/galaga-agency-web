"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FiTarget, FiZap, FiCheckCircle } from "react-icons/fi";
import { getCaseStudyBySlug } from "@/data/case-studies";
import Image from "next/image";

interface ProyectoDetalleContentSectionProps {
  slug: string;
}

export default function ProyectoDetalleContentSection({
  slug,
}: ProyectoDetalleContentSectionProps) {
  const { t } = useTranslation();

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return null;
  }

  return (
    <section
      className="proyecto-detalle-content-section section relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #c3e5ef 100%)",
      }}
    >
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* First Block - Challenge/Situation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-16 md:pb-20">
          <div className="px-4 lg:px-0">
            <div className="flex items-center gap-6 pb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
                <FiTarget className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-azul-profundo leading-tight">
                  {t(caseStudy.situationTitleKey)}
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-negro leading-relaxed pb-6">
              {t(caseStudy.situationDescKey)}
            </p>
            <div className="flex flex-col gap-4">
              {caseStudy.issues.map((issue, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full flex-shrink-0"></div>
                  <span className="text-base">{t(issue)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:order-2 px-4 lg:px-0">
            <div className="bg-gradient-to-br from-teal to-turquesa p-8 rounded-2xl text-white shadow-2xl">
              <h4 className="text-lg font-bold pb-6">
                {t("proyecto-detalle.projectDetails")}
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-base">
                    {t("proyecto-detalle.projectDuration")}:{" "}
                    {caseStudy.duration} {t("months")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-base">
                    {t("proyecto-detalle.projectType")}:{" "}
                    {t(caseStudy.categoryKey)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-base">
                    {t("proyecto-detalle.problemsDetected")}:{" "}
                    {caseStudy.issues.length}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-base">
                    {t("proyecto-detalle.technologiesUsed")}:{" "}
                    {caseStudy.technologies.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Block - Solution/Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-16 md:pb-20">
          <div className="px-4 lg:px-0 lg:order-2">
            <div className="flex items-center gap-6 pb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-mandarina/90 via-45% to-naranja-tostado to-100% rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
                <FiZap className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-azul-profundo leading-tight">
                  {t(caseStudy.approachTitleKey)}
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-negro leading-relaxed pb-8">
              {t(caseStudy.approachDescKey)}
            </p>
          </div>

          <div className="relative lg:order-1 px-4 lg:px-0">
            <div className="bg-gradient-to-br from-teal to-azul-profundo p-8 rounded-2xl text-white shadow-2xl">
              <h4 className="text-lg font-bold pb-6">
                {t("proyecto-detalle.implementedTechnologies")}
              </h4>
              <div className="flex flex-col gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-base">{t(tech)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Block - Impact/Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="px-4 lg:px-0">
            <div className="flex items-center gap-6 pb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-turquesa/90 via-45% to-azul-profundo rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
                <FiCheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-azul-profundo leading-tight">
                  {t(caseStudy.impactTitleKey)}
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-negro leading-relaxed pb-8">
              {t(caseStudy.impactDescKey)}
            </p>
          </div>

          <div className="relative lg:order-2 px-4 lg:px-0">
            <div className="grid grid-cols-1 gap-4">
              {caseStudy.metrics.map((metric, index: any) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-blanco/20 to-blanco/80 p-6 rounded-xl border-l-4 ${
                    index === 0 ? "border-teal" : "border-mandarina"
                  } `}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-teal pb-2">
                        {metric.value}
                      </div>
                      <div className="text-azul-profundo text-sm font-medium uppercase tracking-wider">
                        {t(metric.label)}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center">
                      <FiCheckCircle className="text-xl text-teal" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
