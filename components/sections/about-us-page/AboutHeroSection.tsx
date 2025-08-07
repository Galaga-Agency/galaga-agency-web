"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function AboutHeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  return (
    <section className="about-hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Same background gradients as homepage */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(135deg, #121c30 0%, #176161 50%, #4cbcc5 100%)"
        }}
      ></div>
      
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(18, 28, 48, 0.2) 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)"
        }}
      ></div>

      <div className="container relative z-20 w-full py-20">
        <div className="about-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-blanco font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("about-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-hielo rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline - YOUR content with better styling */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4 text-center">
              <span className="block pb-2 md:pb-4">
                <span className="about-hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("about-page.hero.encendemos")}
                </span>
              </span>
              <span className="block">
                <span className="about-hero-word-2 drop-shadow-xl opacity-0 translate-y-24">
                  {t("about-page.hero.tuExito")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle - YOUR content */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="about-hero-subtitle text-lg md:text-2xl lg:text-3xl text-blanco leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("about-page.hero.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <ScrollIndicator 
        className="about-hero-scroll-indicator absolute bottom-8 left-1/2 opacity-0 z-50 transform -translate-x-1/2" 
      />
    </section>
  );
}