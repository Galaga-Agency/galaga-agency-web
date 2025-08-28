"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useEffect, useState } from "react";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function CaseStudiesHeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    let hasScrolled = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        setShowScrollIndicator(false);
      }

      if (hasScrolled && window.scrollY <= 10) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          hasScrolled = false;
          setShowScrollIndicator(true);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section className="case-studies-hero-section bg-gradient-to-br from-azul-profundo via-teal to-negro relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/casos-de-exito/hero.png')",
        }}
      />

      {/* Gradient overlay that blends with the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(18, 28, 48, 0.85) 0%, rgba(23, 97, 97, 0.75) 50%, rgba(76, 188, 197, 0.65) 100%)",
        }}
      />

      {/* Additional gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18, 28, 48, 0.3) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      <div className="container relative z-20 w-full py-20">
        <div className="case-studies-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <span className="hero-eyebrow text-blanco font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg opacity-0">
              {t("case-studies-page.hero-section.eyebrow")}
            </span>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4 text-center">
              <span className="block pb-2 md:pb-4">
                <span className="hero-word-1 drop-shadow-xl opacity-0">
                  {t("case-studies-page.hero-section.innovacion")}
                </span>
              </span>
              <span className="block">
                <span className="hero-word-2 drop-shadow-xl opacity-0">
                  {t("case-studies-page.hero-section.conImpacto")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="hero-subtitle text-lg md:text-2xl lg:text-3xl text-blanco leading-relaxed font-light drop-shadow-xl opacity-0">
              {t("case-studies-page.hero-section.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`hero-scroll-indicator absolute bottom-12 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-600 ${
          showScrollIndicator ? "opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}
