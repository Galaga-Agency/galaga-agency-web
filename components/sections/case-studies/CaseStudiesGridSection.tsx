"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function CaseStudiesGridSection() {
  const { t } = useTranslation();

  return (
    <section className="case-studies-grid-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/15 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="case-studies-grid-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("case-studies-page.grid.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>

          <h2 className="case-studies-grid-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("case-studies-page.grid.title")}
          </h2>

          <p className="case-studies-grid-subtitle text-lg md:text-xl text-grafito font-light leading-relaxed px-4">
            {t("case-studies-page.grid.subtitle")}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}