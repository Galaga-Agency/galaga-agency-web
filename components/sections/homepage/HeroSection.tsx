"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-azul-profundo/20 via-transparent to-brand-negro/30"></div>

      <div className="hero-content relative z-40 w-full h-full flex items-center justify-center">
        <div className="hero-logo absolute opacity-0">
          <img
            className="hero-logo-img opacity-95 drop-shadow-2xl"
            src="/assets/img/logos/logo-full-white.webp"
            alt="Galaga Agency"
            style={{
              width: "clamp(300px, 50vw, 600px)",
              height: "auto"
            }}
          />
        </div>

        <div className="absolute">
          <div className="relative">
            <h1
              className="hero-title text-brand-blanco font-bold drop-shadow-2xl opacity-0 mb-6"
              style={{ 
                transform: "translateY(100px)",
                fontSize: "clamp(3rem, 15vw, 10rem)",
                lineHeight: "0.9"
              }}
            >
              {t("homepage.hero.innovamos")}
            </h1>

            <div
              className="hero-subtitle-container absolute top-full mt-4"
              style={{ right: "0" }}
            >
              <span 
                className="hero-para-ti text-brand-hielo opacity-0 whitespace-nowrap relative inline-block"
                style={{ 
                  fontSize: "clamp(1.5rem, 8vw, 4rem)"
                }}
              >
                {t("homepage.hero.forYou")}
                <span
                  className="hero-strike-line absolute top-[52%] left-0 w-full h-1 lg:h-[6px] bg-brand-hielo opacity-0 scale-x-0 origin-left"
                  style={{ transform: "translateY(-50%)" }}
                ></span>
              </span>

              <span
                className="hero-contigo absolute top-0 text-brand-hielo opacity-0 whitespace-nowrap inline-block"
                style={{ 
                  right: "0",
                  fontSize: "clamp(1.5rem, 8vw, 4rem)"
                }}
              >
                {t("homepage.hero.contigo")}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-final-logo absolute opacity-0 flex flex-col items-center">
          <img
            src="/assets/img/logos/logo-full-white.webp"
            alt="Galaga Agency"
            className="opacity-95 drop-shadow-2xl"
            style={{
              width: "clamp(250px, 45vw, 600px)",
              height: "auto",
              marginBottom: "clamp(2rem, 8vw, 3rem)"
            }}
          />
          <div 
            style={{
              height: "clamp(4rem, 12vw, 6rem)",
              width: "clamp(300px, 80vw, 800px)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <p 
              className="hero-cta-text text-brand-hielo text-center opacity-0"
              style={{
                fontSize: "clamp(1.25rem, 4vw, 2rem)",
                lineHeight: "1.4"
              }}
            >
              {t("homepage.hero.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Custom Scroll Indicator */}
      <ScrollIndicator 
        className="scroll-indicator absolute bottom-8 left-1/2 opacity-0 z-50 transform -translate-x-1/2" 
      />
    </section>
  );
}