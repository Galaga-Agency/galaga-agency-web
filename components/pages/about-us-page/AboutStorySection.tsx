"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { Building2, Gamepad2, Target } from "lucide-react";

export default function AboutStorySection() {
  const { t } = useTranslation();

  return (
    <section className="about-story-section section relative overflow-hidden">
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
          <div className="fade-in-up opacity-0 about-story-eyebrow inline-flex items-center gap-3 pb-6">
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("about-page.story-section.eyebrow")}
            </span>
          </div>

          <h2 className="fade-in-up opacity-0 about-story-title section-title text-teal leading-tight tracking-tight pb-6">
            {t("about-page.story-section.title")}
          </h2>

          <p className="fade-in-up opacity-0 about-story-subtitle text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("about-page.story-section.subtitle")}
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Timeline Content */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-12">
            {/* First Block */}
            <div className="block-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="px-4 lg:px-0">
                <div className="flex items-center gap-6 pb-8">
                  <div className="block-icon-1 opacity-0 w-16 h-16 md:w-20 md:h-20 bg-orange-gradient rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="block-title-1 opacity-0">
                    <span className="text-sm font-semibold text-teal uppercase tracking-wider">
                      1985 - 2020
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight pt-2">
                      {t("about-page.story-section.traditional.title")}
                    </h3>
                  </div>
                </div>
                <p className="block-description-1 opacity-0 text-base md:text-lg text-negro leading-relaxed">
                  {t("about-page.story-section.traditional.description")}
                </p>
              </div>

              <div className="block-image-1 opacity-0 relative lg:order-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-mandarina shadow-2xl transition-all duration-500 hover:scale-105">
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

            {/* Second Block */}
            <div className="block-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="px-4 lg:px-0 lg:order-2">
                <div className="flex items-center gap-6 pb-8">
                  <div className="block-icon-2 opacity-0 w-16 h-16 md:w-20 md:h-20 bg-teal-gradient rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="block-title-2 opacity-0">
                    <span className="text-sm font-semibold text-turquesa uppercase tracking-wider">
                      2020
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight pt-2">
                      {t("about-page.story-section.gaming.title")}
                    </h3>
                  </div>
                </div>
                <p className="block-description-2 opacity-0 text-base md:text-lg text-negro leading-relaxed">
                  {t("about-page.story-section.gaming.description")}
                </p>
              </div>

              <div className="block-image-2 opacity-0 relative lg:order-1">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-turquesa transition-all duration-500 hover:scale-105">
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

            {/* Third Block */}
            <div className="block-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="px-4 lg:px-0">
                <div className="flex items-center gap-6 pb-8">
                  <div className="flex-shrink-0 block-icon-3 opacity-0 w-16 h-16 md:w-20 md:h-20 bg-purple-gradient rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="block-title-3 opacity-0">
                    <span className="text-sm font-semibold text-violeta uppercase tracking-wider">
                      {t("about-page.story-section.today.year")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight pt-2">
                      {t("about-page.story-section.today.title")}
                    </h3>
                  </div>
                </div>
                <p className="block-description-3 opacity-0 text-base md:text-lg text-negro leading-relaxed pb-6">
                  {t("about-page.story-section.today.description")}
                </p>
              </div>

              <div className="block-image-3 opacity-0 relative lg:order-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-violeta transition-all duration-500 hover:scale-105">
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