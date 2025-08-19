// /components/pages/immersive-marketing/MarketingInmersivoHeroSection.tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { FaEye } from "react-icons/fa";

export default function MarketingInmersivoHeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  return (
    <section className="immersive-marketing-hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violeta via-azul-profundo to-negro" />

      <div className="container relative z-20 w-full py-20">
        <div className="immersive-marketing-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Service Icon */}
          <div className="hero-icon mb-8 md:mb-12 opacity-0 scale-75">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-violeta to-lavanda rounded-full flex items-center justify-center shadow-2xl">
              <FaEye className="w-12 h-12 md:w-16 md:h-16 text-blanco drop-shadow-lg" />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <span className="text-lavanda font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("service-details.immersive-marketing.hero.eyebrow")}
            </span>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4 text-center">
              <span className="block pb-2 md:pb-4">
                <span className="hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("services.immersive-marketing.hero.marketing")}
                </span>
              </span>
              <span className="block">
                <span className="hero-word-2 drop-shadow-xl opacity-0 translate-y-24 bg-gradient-to-r from-violeta to-lavanda bg-clip-text text-transparent">
                  {t("services.immersive-marketing.hero.inmersivo")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="hero-subtitle text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("services.immersive-marketing.hero.subtitle")}
            </p>
          </div>

          {/* Key Features Pills */}
          <div className="hero-features flex flex-wrap justify-center gap-4 pb-12 md:pb-16 opacity-0 translate-y-12">
            <div className="bg-violeta/20 backdrop-blur-sm border border-violeta/30 rounded-full px-6 py-3 text-lavanda font-medium">
              {t("services.immersive-marketing.features.realidad-aumentada")}
            </div>
            <div className="bg-violeta/20 backdrop-blur-sm border border-violeta/30 rounded-full px-6 py-3 text-lavanda font-medium">
              {t(
                "services.immersive-marketing.features.experiencias-interactivas"
              )}
            </div>
            <div className="bg-violeta/20 backdrop-blur-sm border border-violeta/30 rounded-full px-6 py-3 text-lavanda font-medium">
              {t("services.immersive-marketing.features.contenido-inmersivo")}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col md:flex-row gap-6 opacity-0 translate-y-12">
            <button className="btn-primary bg-gradient-to-r from-violeta to-lavanda hover:from-lavanda hover:to-violeta transition-all duration-300 px-8 py-4 text-lg font-semibold">
              {t("services.immersive-marketing.cta.primary")}
            </button>
            <button className="btn-outline border-2 border-lavanda text-lavanda hover:bg-lavanda hover:text-azul-profundo transition-all duration-300 px-8 py-4 text-lg font-semibold">
              {t("services.immersive-marketing.cta.secondary")}
            </button>
          </div>
        </div>
      </div>

      <ScrollIndicator className="hero-scroll-indicator absolute bottom-8 left-1/2 opacity-0 z-50 transform -translate-x-1/2" />
    </section>
  );
}
