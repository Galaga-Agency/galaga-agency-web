"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AboutHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="about-hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/sobre-nosotros/hero.png')",
          backgroundPosition: "center center"
        }}
      ></div>

      {/* Multi-layer gradient overlay for perfect blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/85 via-teal/75 to-mandarina/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/60 via-transparent to-azul-profundo/40 z-15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-transparent to-turquesa/20 z-15"></div>

      <div className="container relative z-20 w-full py-20">
        <div className="about-hero-content w-full flex flex-col ju
        
        .stify-center items-center min-h-[70vh]">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("about-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="about-hero-title text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa about-hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("about-page.hero.innovamos")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-mandarina via-naranja-tostado to-turquesa bg-clip-text text-transparent about-hero-word-2 drop-shadow-xl opacity-0 translate-y-24">
                  {t("about-page.hero.contigo")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="about-hero-subtitle text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("about-page.hero.subtitle")}
            </p>
          </div>

          {/* Key Stats */}
          <div className="about-hero-stats grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-5xl">
            <div className="text-center about-hero-stat opacity-0 translate-y-12" data-index="0">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-turquesa pb-2 drop-shadow-xl">
                35+
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("about-page.hero.stats.yearsExperience")}
              </div>
            </div>
            
            <div className="text-center about-hero-stat opacity-0 translate-y-12" data-index="1">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-mandarina pb-2 drop-shadow-xl">
                100+
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("about-page.hero.stats.projectsCompleted")}
              </div>
            </div>

            <div className="text-center about-hero-stat col-span-2 md:col-span-1 opacity-0 translate-y-12" data-index="2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-verde-azulado pb-2 drop-shadow-xl">
                100%
              </div>
              <div className="text-sm md:text-base text-hielo/90 font-medium drop-shadow-lg">
                {t("about-page.hero.stats.humanApproach")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}