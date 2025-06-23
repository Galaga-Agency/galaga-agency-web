"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  titleKey: string;
  categoryKey: string;
  challengeKey: string;
  solutionKey: string;
  resultKey: string;
  metrics: Array<{
    value: string;
    labelKey: string;
  }>;
  image: string;
  theme: 'digital' | 'marketing' | 'events';
  slug: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const { t } = useTranslation();

  const getThemeColors = (theme: string) => {
    const colorMap = {
      digital: { main: "teal", accent: "turquesa" },
      marketing: { main: "mandarina", accent: "naranja-tostado" },
      events: { main: "violeta", accent: "azul-profundo" },
    };
    return (
      colorMap[theme as keyof typeof colorMap] || {
        main: "teal",
        accent: "turquesa",
      }
    );
  };

  const colors = getThemeColors(caseStudy.theme);

  return (
    <div
      className="case-study-grid-card group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-hielo/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
      data-index={index}
    >
      {/* Image Section */}
      <div className="case-study-grid-image-container relative h-64 md:h-80 overflow-hidden">
        {/* Gradient Overlay */}
        <div
          className={`case-study-grid-overlay absolute inset-0 bg-gradient-to-br from-${colors.main}/80 to-${colors.accent}/60 z-10 group-hover:opacity-50 transition-all duration-500`}
        ></div>

        {/* Image */}
        <div className="case-study-grid-image relative w-full h-full">
          <Image
            src={caseStudy.image}
            alt={t(caseStudy.titleKey)}
            fill
            className="object-cover"
          />
        </div>

        {/* Category Badge */}
        <div className="case-study-grid-badge absolute top-6 left-6 z-20">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-lg">
            <span
              className={`case-study-grid-badge-text text-sm font-bold text-${colors.main} uppercase tracking-wider`}
            >
              {t(caseStudy.categoryKey)}
            </span>
          </div>
        </div>

        {/* Metrics Overlay */}
        <div className="case-study-grid-metrics absolute bottom-6 left-6 right-6 z-20">
          <div className="grid grid-cols-2 gap-2">
            {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
              <div
                key={idx}
                className="case-study-grid-metric bg-black/20 backdrop-blur-sm rounded-lg p-3 text-center"
              >
                <div className="case-study-grid-metric-value text-lg md:text-xl font-black text-white leading-none pb-1">
                  {metric.value}
                </div>
                <div className="case-study-grid-metric-label text-xs text-white/90 font-medium uppercase tracking-wide leading-tight">
                  {t(metric.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="case-study-grid-arrow absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
      <div className="case-study-grid-content p-6 md:p-8">
        <h3
          className={`case-study-grid-title text-xl md:text-2xl font-bold text-${colors.main} pb-4 group-hover:text-negro transition-colors duration-300`}
        >
          {t(caseStudy.titleKey)}
        </h3>

        <p className="case-study-grid-description text-base md:text-lg text-grafito leading-relaxed pb-6 group-hover:text-azul-profundo transition-colors duration-300">
          {t(caseStudy.challengeKey).substring(0, 120)}...
        </p>

        {/* CTA */}
        <Link
          href={`/casos-de-exito/${caseStudy.slug}`}
          className={`case-study-grid-cta inline-flex items-center gap-3 text-${colors.main} hover:text-negro font-semibold group-hover:translate-x-1 transform transition-transform duration-300`}
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
        className={`case-study-grid-glow absolute inset-0 bg-gradient-to-br from-${colors.main}/10 to-${colors.accent}/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
      ></div>
    </div>
  );
}