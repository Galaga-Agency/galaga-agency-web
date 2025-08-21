"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { Building2, Gamepad2, Target } from "lucide-react";

export default function AboutStorySection() {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef}
      className="about-story-section section relative overflow-hidden"
    >
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        {/* Top diagonal - Light teal gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
          }}
        ></div>

        {/* Bottom diagonal - Pure white */}
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
          <div className={`about-story-eyebrow inline-flex items-center gap-3 pb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("about-page.story-section.eyebrow")}
            </span>
          </div>

          <h2 className={`about-story-title section-title text-teal leading-tight tracking-tight pb-6 ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
            {t("about-page.story-section.title")}
          </h2>

          <p className={`about-story-subtitle text-lg md:text-xl text-negro leading-relaxed px-4 ${isVisible ? 'animate-slide-up  animation-delay-800' : 'opacity-0'}`}>
            {t("about-page.story-section.subtitle")}
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">

          {/* Timeline Content */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-12">
            {/* First Story Block - Traditional Business */}
            <div className={`story-block-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isVisible ? 'animate-slide-right animation-delay-400' : 'opacity-0'}`}>
              <div className="story-content-1 px-4 lg:px-0">
                <div className="story-header-1 flex items-center gap-6 pb-8">
                  <div className={`story-icon-1 w-16 h-16 md:w-20 md:h-20 bg-orange-gradient rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <span className={`story-year-1 text-sm font-semibold text-teal uppercase tracking-wider ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      1985 - 2020
                    </span>
                    <h3 className={`story-title-1 text-2xl md:text-3xl font-bold text-azul-profundo leading-tight pt-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      {t("about-page.story-section.traditional.title")}
                    </h3>
                  </div>
                </div>
                <p className={`story-description-1 text-base md:text-lg text-negro leading-relaxed ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {t("about-page.story-section.traditional.description")}
                </p>
              </div>

              <div className="story-image-container-1 relative lg:order-2">
                <div className={`story-image-1 relative aspect-video rounded-2xl overflow-hidden border border-mandarina shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <Image
                    src="/assets/img/sobre-nosotros/dos-x-dos-grupo-imagen.webp"
                    alt="dos x dos Grupo Imagen - Traditional Business"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Story Block - Gaming Evolution */}
            <div className={`story-block-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isVisible ? 'animate-slide-left animation-delay-400' : 'opacity-0'}`}>
              <div className="story-content-2 px-4 lg:px-0 lg:order-2">
                <div className="story-header-2 flex items-center gap-6 pb-8">
                  <div className={`story-icon-2 w-16 h-16 md:w-20 md:h-20 bg-teal-gradient rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <span className={`story-year-2 text-sm font-semibold text-turquesa uppercase tracking-wider ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      2020
                    </span>
                    <h3 className={`story-title-2 text-2xl md:text-3xl font-bold text-azul-profundo leading-tight pt-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      {t("about-page.story-section.gaming.title")}
                    </h3>
                  </div>
                </div>
                <p className={`story-description-2 text-base md:text-lg text-negro leading-relaxed ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {t("about-page.story-section.gaming.description")}
                </p>
              </div>

              <div className="story-image-container-2 relative lg:order-1">
                <div className={`story-image-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-turquesa transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <Image
                    src="/assets/img/sobre-nosotros/galaga-gaming.png"
                    alt="Galaga Gaming - Gaming Innovation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Third Story Block - Agency Today */}
            <div className={`story-block-3 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isVisible ? 'animate-slide-right animation-delay-400' : 'opacity-0'}`}>
              <div className="story-content-3 px-4 lg:px-0">
                <div className="story-header-3 flex items-center gap-6 pb-8">
                  <div className={`story-icon-3 w-16 h-16 md:w-20 md:h-20 bg-skyblue-gradient rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <span className={`story-year-3 text-sm font-semibold text-violeta uppercase tracking-wider ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      {t("about-page.story-section.today.year")}
                    </span>
                    <h3 className={`story-title-3 text-2xl md:text-3xl font-bold text-azul-profundo leading-tight pt-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      {t("about-page.story-section.today.title")}
                    </h3>
                  </div>
                </div>
                <p className={`story-description-3 text-base md:text-lg text-negro leading-relaxed pb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {t("about-page.story-section.today.description")}
                </p>
              </div>

              <div className="story-image-container-3 relative lg:order-2">
                <div className={`story-image-3 relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-violeta transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <Image
                    src="/assets/img/sobre-nosotros/galaga-hoy-1.jpg"
                    alt="Galaga Agency Today - Digital Dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}