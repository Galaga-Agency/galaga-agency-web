"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudiesGridSection() {
  const { t } = useTranslation();

  const caseStudies = [
    {
      slug: "dos-x-dos-grupo-imagen",
      titleKey: "caseStudies.dosxdos.title",
      challengeKey: "caseStudies.dosxdos.challenge",
      category: "digital",
      categoryKey: "case-studies-page.categories.digital",
      image: "/assets/img/case-studies/dosxdos-hero.jpg",
      metrics: [
        { value: "80%", labelKey: "caseStudies.metrics.processReduction" },
        { value: "250%", labelKey: "caseStudies.metrics.seoImprovement" },
        { value: "100%", labelKey: "caseStudies.metrics.dataUnification" },
      ],
      color: "teal",
      accent: "turquesa",
    },
    {
      slug: "energia-solar-canarias",
      titleKey: "caseStudies.energiaSolar.title",
      challengeKey: "caseStudies.energiaSolar.challenge",
      category: "digital",
      categoryKey: "case-studies-page.categories.digital",
      image: "/assets/img/case-studies/energia-solar-hero.jpg",
      metrics: [
        { value: "100%", labelKey: "caseStudies.metrics.dataUnification" },
        { value: "24/7", labelKey: "caseStudies.metrics.realTimeMonitoring" },
        { value: "60%", labelKey: "caseStudies.metrics.processReduction" },
      ],
      color: "violeta",
      accent: "azul-profundo",
    },
    {
      slug: "toyota-canarias",
      titleKey: "caseStudies.toyota.title",
      challengeKey: "caseStudies.toyota.challenge",
      category: "marketing",
      categoryKey: "case-studies-page.categories.marketing",
      image: "/assets/img/case-studies/toyota-hero.jpg",
      metrics: [
        { value: "375K+", labelKey: "caseStudies.metrics.impressions" },
        { value: "4K+", labelKey: "caseStudies.metrics.qualifiedLeads" },
        { value: "85%", labelKey: "caseStudies.metrics.engagement" },
      ],
      color: "mandarina",
      accent: "naranja-tostado",
    },
    {
      slug: "canarias-game-show",
      titleKey: "caseStudies.canariasGameShow.title",
      challengeKey: "caseStudies.canariasGameShow.challenge",
      category: "events",
      categoryKey: "case-studies-page.categories.events",
      image: "/assets/img/case-studies/canarias-game-show-hero.jpg",
      metrics: [
        { value: "30K+", labelKey: "caseStudies.metrics.attendees" },
        { value: "2", labelKey: "caseStudies.metrics.cities" },
        { value: "5M+", labelKey: "caseStudies.metrics.impressions" },
      ],
      color: "verde-azulado",
      accent: "turquesa",
    },
  ];

  const getThemeColors = (color: string) => {
    const colorMap = {
      teal: { main: "teal", accent: "turquesa" },
      violeta: { main: "violeta", accent: "azul-profundo" },
      mandarina: { main: "mandarina", accent: "naranja-tostado" },
      "verde-azulado": { main: "verde-azulado", accent: "turquesa" },
    };
    return (
      colorMap[color as keyof typeof colorMap] || {
        main: "teal",
        accent: "turquesa",
      }
    );
  };

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
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("case-studies-page.grid.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>

          <h2 className="case-studies-grid-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("case-studies-page.grid.title")}
          </h2>

          <p className="text-lg md:text-xl text-grafito font-light leading-relaxed px-4">
            {t("case-studies-page.grid.subtitle")}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {caseStudies.map((caseStudy, index) => {
            const colors = getThemeColors(caseStudy.color);

            return (
              <div
                key={caseStudy.slug}
                className="case-study-grid-card group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-hielo/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                data-index={index}
              >
                {/* Image Section */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${caseStudy.color}/80 to-${caseStudy.accent}/60 z-10 group-hover:opacity-50 transition-all duration-500`}
                  ></div>

                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div
                      className={`w-20 h-20 bg-${caseStudy.color}/30 rounded-full flex items-center justify-center`}
                    >
                      <svg
                        className={`w-10 h-10 text-${caseStudy.color}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-lg">
                      <span
                        className={`text-sm font-bold text-${caseStudy.color} uppercase tracking-wider`}
                      >
                        {t(caseStudy.categoryKey)}
                      </span>
                    </div>
                  </div>

                  {/* Metrics Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="grid grid-cols-3 gap-2">
                      {caseStudy.metrics.slice(0, 3).map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-black/20 backdrop-blur-sm rounded-lg p-3 text-center"
                        >
                          <div className="text-lg md:text-xl font-black text-white leading-none pb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-white/90 font-medium uppercase tracking-wide leading-tight">
                            {t(metric.labelKey)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <h3
                    className={`text-xl md:text-2xl font-bold text-${caseStudy.color} pb-4 group-hover:text-negro transition-colors duration-300`}
                  >
                    {t(caseStudy.titleKey)}
                  </h3>

                  <p className="text-base md:text-lg text-grafito leading-relaxed pb-6 group-hover:text-azul-profundo transition-colors duration-300">
                    {t(caseStudy.challengeKey).substring(0, 120)}...
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/cases/${caseStudy.slug}`}
                    className={`inline-flex items-center gap-3 text-${caseStudy.color} hover:text-negro font-semibold group-hover:translate-x-1 transform transition-transform duration-300`}
                  >
                    <span>{t("case-studies-page.grid.readMore")}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${caseStudy.color}/10 to-${caseStudy.accent}/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
