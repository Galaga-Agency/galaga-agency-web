"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  // Get current language for services link
  const currentLang = t("nav.language");
  const servicesLink = currentLang === "es" ? "/servicios" : "/services";

  return (
    <section className="hero-section bg-gradient-to-br from-azul-profundo via-teal to-negro relative min-h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="hero-content relative z-40 w-full min-h-screen flex flex-col items-center justify-center pt-0 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full px-4">
          <div className="relative">
            {/* Logo */}
            <div className="hero-logo w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 z-50 flex justify-center">
              <Image
                className="hero-logo-img opacity-95 drop-shadow-2xl w-full md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-auto"
                src="/assets/img/logos/logo-full-white.webp"
                alt="Galaga Agency"
                height={800}
                width={800}
              />
            </div>

            <h1 className="hero-title font-bold drop-shadow-2xl opacity-0 text-white translate-y-[100px] text-center leading-[0.8]">
              {t("homepage.hero-section.innovamos")}
            </h1>
            <div className="hero-subtitle-container absolute pt-[clamp(1rem,6vw,2rem)] w-full flex justify-end right-0">
              <div className="relative">
                <span className="hero-para-ti opacity-0 whitespace-nowrap relative inline-block text-hielo text-[clamp(1.2rem,6vw,3rem)] leading-[0.9]">
                  {t("homepage.hero-section.forYou")}
                  <span className="hero-strike-line absolute top-[52%] left-0 w-full h-1 lg:h-[6px] opacity-0 scale-x-0 origin-left bg-hielo -translate-y-1/2"></span>
                </span>

                <span className="hero-contigo absolute top-0 right-0 opacity-0 whitespace-nowrap inline-block text-hielo text-[clamp(1.2rem,6vw,3rem)] leading-[0.9]">
                  {t("homepage.hero-section.contigo")}
                </span>
              </div>
            </div>
          </div>

          <div className="hero-value-proposition pt-8 md:pt-12 z-50 opacity-0 px-2 md:px-12 relative">
            <div className="text-left">
              <p className="hero-value-text-line1 text-body-large opacity-0 lg:max-w-auto pb-4 pt-24">
                {t("homepage.hero-section.valuePropositionLine1")}
              </p>
              <p className="hero-value-text-line2 text-body-large opacity-0 lg:max-w-auto">
                {t("homepage.hero-section.valuePropositionLine2")}
              </p>
            </div>

            {/* CTA Buttons - Hidden on mobile if not enough space */}
            <div className="hero-cta-buttons opacity-0 translate-y-4 flex-col md:flex-row gap-4 pt-8 md:pt-12 justify-center items-center hidden md:flex">
              <PrimaryButton href={servicesLink} bgColor="white" size="lg">
                {t("homepage.hero-section.cta.services")}
              </PrimaryButton>

              <SecondaryButton
                href="https://calendly.com/operaciones-galagaagency/30min"
                borderColor="white"
                size="lg"
                external
              >
                {t("homepage.hero-section.cta.scheduleCall")}
              </SecondaryButton>
            </div>

            {/* Double Chevron Symbol - Behind Second CTA Button Area */}
            <div className="hero-chevron absolute right-0 -bottom-16 lg:right-[5vw] xl:-bottom-[0vh] opacity-30 pointer-events-none">
              <Image
                src="/assets/img/symbols/double-chevron-white.webp"
                alt="Double Chevron"
                width={120}
                height={120}
                className="w-[50vw] lg:w-[20vw] h-auto"
              />
            </div>
          </div>
        </div>

        <ScrollIndicator className="scroll-indicator absolute bottom-8 left-1/2 opacity-0 z-50 transform -translate-x-1/2" />
      </div>
    </section>
  );
}