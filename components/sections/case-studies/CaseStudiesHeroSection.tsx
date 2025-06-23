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

      {/* Multi-layer gradient overlay for perfect blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/85 via-teal/75 to-negro/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/60 via-transparent to-azul-profundo/40 z-15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-transparent to-mandarina/20 z-15"></div>

      {/* Background decorative elements - kept but more subtle */}
      <div className="absolute inset-0 z-18">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="case-studies-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("case-studies-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="case-studies-hero-title text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa case-studies-hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("case-studies-page.hero.casos")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-mandarina via-naranja-tostado to-verde-azulado bg-clip-text text-transparent case-studies-hero-word-2 drop-shadow-xl opacity-0 translate-y-24">
                  {t("case-studies-page.hero.exito")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="case-studies-hero-subtitle text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("case-studies-page.hero.subtitle")}
            </p>
          </div>

          {/* Key Stats */}
          <div className="case-studies-hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
            <div
              className="text-center case-studies-hero-stat opacity-0 translate-y-12"
              data-index="0"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-turquesa pb-2 drop-shadow-xl">
                100+
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.projectsCompleted")}
              </div>
            </div>

            <div
              className="text-center case-studies-hero-stat opacity-0 translate-y-12"
              data-index="1"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-mandarina pb-2 drop-shadow-xl">
                500K+
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.totalImpressions")}
              </div>
            </div>

            <div
              className="text-center case-studies-hero-stat opacity-0 translate-y-12"
              data-index="2"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-verde-azulado pb-2 drop-shadow-xl">
                98%
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.clientSatisfaction")}
              </div>
            </div>

            <div
              className="text-center case-studies-hero-stat opacity-0 translate-y-12"
              data-index="3"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-violeta pb-2 drop-shadow-xl">
                24h
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("case-studies-page.hero.stats.responseTime")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
