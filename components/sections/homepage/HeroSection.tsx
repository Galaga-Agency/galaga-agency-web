"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  return (
    <section className="hero-section relative min-h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Hero gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #121c30 0%, #176161 50%, #4cbcc5 100%)",
        }}
      ></div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18, 28, 48, 0.2) 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      ></div>

      <div className="hero-content relative z-40 w-full h-full flex items-center justify-center -pt-18 md:-pt-16 lg:-pt-20 overflow-hidden">
        <img
          src="/assets/img/symbols/double-chevron-white.webp"
          alt="Double Chevron"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 hidden md:block w-[85vw] lg:w-[50vw] xl:w-[40vw] z-0 pointer-events-none select-none"
          aria-hidden="true"
        />

        <div className="hero-logo absolute opacity-0">
          <img
            className="hero-logo-img opacity-95 drop-shadow-2xl"
            src="/assets/img/logos/logo-full-white.webp"
            alt="Galaga Agency"
            style={{
              width: "clamp(300px, 50vw, 600px)",
              height: "auto",
            }}
          />
        </div>

        <div className="absolute">
          <div className="relative">
            <h1
              className="hero-title font-bold drop-shadow-2xl opacity-0 mb-6"
              style={{
                color: "#ffffff",
                transform: "translateY(100px)",
                fontSize: "clamp(3rem, 15vw, 10rem)",
                lineHeight: "0.9",
              }}
            >
              {t("homepage.hero.innovamos")}
            </h1>

            <div
              className="hero-subtitle-container absolute top-full mt-4"
              style={{ right: "0" }}
            >
              <span
                className="hero-para-ti opacity-0 whitespace-nowrap relative inline-block"
                style={{
                  color: "#c3e5ef",
                  fontSize: "clamp(1.5rem, 8vw, 4rem)",
                }}
              >
                {t("homepage.hero.forYou")}
                <span
                  className="hero-strike-line absolute top-[52%] left-0 w-full h-1 lg:h-[6px] opacity-0 scale-x-0 origin-left"
                  style={{
                    backgroundColor: "#c3e5ef",
                    transform: "translateY(-50%)",
                  }}
                ></span>
              </span>

              <span
                className="hero-contigo absolute top-0 opacity-0 whitespace-nowrap inline-block"
                style={{
                  color: "#c3e5ef",
                  right: "0",
                  fontSize: "clamp(1.5rem, 8vw, 4rem)",
                }}
              >
                {t("homepage.hero.contigo")}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-final-logo absolute opacity-0 flex flex-col items-center">
          <img
            src="/assets/img/logos/logo-mobile-white.webp"
            alt="Galaga Agency"
            className="opacity-95 drop-shadow-2xl"
            style={{
              width: "clamp(150px, 20vw, 250px)",
              height: "auto",
              marginBottom: "clamp(2rem, 5vw, 2rem)",
            }}
          />
          <div
            style={{
              height: "clamp(4rem, 12vw, 6rem)",
              width: "clamp(300px, 80vw, 800px)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <p
              className="hero-cta-text text-center opacity-0"
              style={{
                color: "#c3e5ef",
                fontSize: "clamp(1.25rem, 4vw, 2rem)",
                lineHeight: "1.4",
              }}
            >
              {t("homepage.hero.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Custom Scroll Indicator */}
      <ScrollIndicator className="scroll-indicator absolute bottom-8 left-1/2 opacity-0 z-50 transform -translate-x-1/2" />
    </section>
  );
}
