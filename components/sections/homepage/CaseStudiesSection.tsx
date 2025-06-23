"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCarouselCard from "@/components/CaseStudyCarouselCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CaseStudiesSection() {
  const { t } = useTranslation();

  const stats = [
    {
      value: "100+",
      labelKey: "caseStudies.stats.projectsCompleted",
    },
    {
      value: "500K+",
      labelKey: "caseStudies.stats.totalImpressions",
    },
    {
      value: "98%",
      labelKey: "caseStudies.stats.clientSatisfaction",
    },
    {
      value: "24h",
      labelKey: "caseStudies.stats.responseTime",
    },
  ];

  return (
    <section className="case-studies-section section relative bg-gradient-to-br from-white via-hielo/30 to-white overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center pb-16">
          <h2 className="case-studies-title section-title text-teal pb-6">
            {t("caseStudies.title")}
          </h2>
          <p className="case-studies-subtitle text-large text-grafito leading-relaxed">
            {t("caseStudies.subtitle")}
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 pb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-item text-center p-6 bg-white/80 rounded-2xl border border-hielo shadow-sm"
            >
              <div className="text-2xl font-bold text-teal pb-2">
                {stat.value}
              </div>
              <div className="text-sm text-grafito">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Carousel - Full Width */}
      <div className="relative pb-12">
        <div
          className="carousel-3d-container flex justify-center items-center min-h-[750px] w-full"
          style={{ perspective: "1500px" }}
        >
          <div className="carousel-track relative w-full h-[650px] flex justify-center items-center">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCarouselCard
                key={index}
                titleKey={caseStudy.titleKey}
                categoryKey={caseStudy.categoryKey}
                challengeKey={caseStudy.challengeKey}
                metrics={caseStudy.metrics}
                image={caseStudy.image}
                theme={caseStudy.theme}
                index={index}
                slug={caseStudy.slug}
              />
            ))}
          </div>
        </div>
      </div>

        {/* CTA */}
      <div className="container relative z-10">
        <div className="text-center">
          <div className="inline-block">
            <h3 className="text-2xl font-bold text-teal pb-4">
              {t("caseStudies.cta.title")}
            </h3>
            <p className="text-lg text-grafito pb-6">
              {t("caseStudies.cta.description")}
            </p>
            <div className="flex gap-4 justify-center">
              <PrimaryButton href="/case-studies">
                {t("caseStudies.cta.viewAll")}
              </PrimaryButton>
              <SecondaryButton href="/contacto">
                {t("caseStudies.cta.startProject")}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}