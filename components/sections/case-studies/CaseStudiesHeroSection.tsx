"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function CaseStudiesHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="case-studies-hero-section relative min-h-screen bg-gradient-to-br from-azul-profundo via-teal to-negro flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="case-studies-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base">
              {t("caseStudiesPage.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="case-studies-hero-title text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa case-studies-hero-word-1">
                  {t("caseStudiesPage.hero.casos")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-mandarina via-naranja-tostado to-verde-azulado bg-clip-text text-transparent case-studies-hero-word-2">
                  {t("caseStudiesPage.hero.exito")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="case-studies-hero-subtitle text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-lg max-w-4xl mx-auto">
              {t("caseStudiesPage.hero.subtitle")}
            </p>
          </div>

          {/* Key Stats */}
          <div className="case-studies-hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
            <div className="text-center case-studies-hero-stat" data-index="0">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-turquesa pb-2 drop-shadow-xl">
                100+
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium">
                {t("caseStudiesPage.hero.stats.projectsCompleted")}
              </div>
            </div>
            
            <div className="text-center case-studies-hero-stat" data-index="1">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-mandarina pb-2 drop-shadow-xl">
                500K+
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium">
                {t("caseStudiesPage.hero.stats.totalImpressions")}
              </div>
            </div>

            <div className="text-center case-studies-hero-stat" data-index="2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-verde-azulado pb-2 drop-shadow-xl">
                98%
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium">
                {t("caseStudiesPage.hero.stats.clientSatisfaction")}
              </div>
            </div>

            <div className="text-center case-studies-hero-stat" data-index="3">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-violeta pb-2 drop-shadow-xl">
                24h
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium">
                {t("caseStudiesPage.hero.stats.responseTime")}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="case-studies-hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70">
            <div className="flex flex-col items-center gap-2">
              <span className="text-hielo text-xs uppercase tracking-wider">
                {t("caseStudiesPage.hero.scroll")}
              </span>
              <div className="w-6 h-10 border-2 border-hielo rounded-full flex justify-center">
                <div className="w-1 h-3 bg-hielo rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}