"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function CaseStudiesHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="case-studies-hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/casos-de-exito/hero.png')",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Brand book compliant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/90 via-teal/80 to-verde-azulado/85 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/70 via-transparent to-azul-profundo/50 z-15"></div>

      <div className="container relative z-20 w-full py-20">
        <div className="case-studies-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Eyebrow */}
          <div className="case-studies-hero-eyebrow inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("case-studies-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-verde-azulado rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="case-studies-hero-title hero-title text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa case-studies-hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("case-studies-page.hero.casos")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-turquesa to-verde-azulado bg-clip-text text-transparent case-studies-hero-word-2 drop-shadow-xl opacity-0 translate-y-24">
                  {t("case-studies-page.hero.exito")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="case-studies-hero-subtitle text-large text-hielo leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("case-studies-page.hero.subtitle")}
            </p>
          </div>

          {/* Key Stats */}
          {/* <div className="case-studies-hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
            <div className="text-center case-studies-hero-stat opacity-0 translate-y-12" data-index="0">
              <div className="case-studies-hero-stat-value text-3xl md:text-4xl lg:text-5xl font-black text-turquesa pb-2 drop-shadow-xl">
                100+
              </div>
              <div className="case-studies-hero-stat-label text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.projectsCompleted")}
              </div>
            </div>

            <div className="text-center case-studies-hero-stat opacity-0 translate-y-12" data-index="1">
              <div className="case-studies-hero-stat-value text-3xl md:text-4xl lg:text-5xl font-black text-verde-azulado pb-2 drop-shadow-xl">
                500K+
              </div>
              <div className="case-studies-hero-stat-label text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.totalImpressions")}
              </div>
            </div>

            <div className="text-center case-studies-hero-stat opacity-0 translate-y-12" data-index="2">
              <div className="case-studies-hero-stat-value text-3xl md:text-4xl lg:text-5xl font-black text-teal pb-2 drop-shadow-xl">
                98%
              </div>
              <div className="case-studies-hero-stat-label text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.clientSatisfaction")}
              </div>
            </div>

            <div className="text-center case-studies-hero-stat opacity-0 translate-y-12" data-index="3">
              <div className="case-studies-hero-stat-value text-3xl md:text-4xl lg:text-5xl font-black text-turquesa pb-2 drop-shadow-xl">
                24h
              </div>
              <div className="case-studies-hero-stat-label text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.responseTime")}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}