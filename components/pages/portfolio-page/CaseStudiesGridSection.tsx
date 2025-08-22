"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesGridSection() {
  const { t } = useTranslation();

  return (
    <section
      className="case-studies-grid-section section relative overflow-hidden"
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
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="fade-in-up opacity-0 text-teal font-semibold tracking-wider uppercase text-sm">
            {t("case-studies-page.grid-section.eyebrow")}
          </span>

          <h2 className="fade-in-up opacity-0 section-title text-teal leading-tight tracking-tight pt-4 pb-6">
            {t("case-studies-page.grid-section.title")}
          </h2>

          <p className="fade-in-up opacity-0 text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("case-studies-page.grid-section.subtitle")}
          </p>
        </div>

        {/* Responsive Bento Grid */}
        <div className="case-studies-bento-grid grid grid-cols-12 gap-6 md:gap-8">
          {/* First row - Hero takes more space on larger screens */}
          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-8 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[0]} index={0} size="hero" />
          </div>

          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-4 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[1]} index={1} size="medium" />
          </div>

          {/* Second row */}
          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-4 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[2]} index={2} size="medium" />
          </div>

          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-8 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[3]} index={3} size="wide" />
          </div>

          {/* Third row - Equal height columns */}
          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-6 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[4]} index={4} size="large" />
          </div>

          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-6 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[5]} index={5} size="large" />
          </div>

          {/* Fourth row */}
          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-4 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[6]} index={6} size="medium" />
          </div>

          <div className="stagger-bounce-in-up opacity-0 col-span-12 lg:col-span-8 h-[500px] md:h-[600px] lg:h-[550px] xl:h-[600px]">
            <CaseStudyCard caseStudy={caseStudies[7]} index={7} size="wide" />
          </div>
        </div>
      </div>
    </section>
  );
}