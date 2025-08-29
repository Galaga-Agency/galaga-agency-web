"use client";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Image from "next/image";

export const HeroTitleAnimation = () => {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();
  const hasAnimated = useRef(false);

  // Get current language for services link
  const currentLang = t("nav.language");
  const servicesLink = currentLang === "es" ? "/servicios" : "/services";

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Simple logo animation with JavaScript
    const logoContainer: any = document.querySelector(".hero-logo-js");
    const logoImg = logoContainer?.querySelector("img");

    if (!logoContainer || !logoImg) return;

    // Set initial state
    logoContainer.style.opacity = "0";
    logoImg.style.transform = "perspective(1000px) rotateX(-90deg)";
    logoImg.style.transformOrigin = "center center -100px";

    // Animate in
    setTimeout(() => {
      logoContainer.style.transition = "opacity 0.3s ease-out";
      logoContainer.style.opacity = "1";

      logoImg.style.transition = "transform 1s ease-out";
      logoImg.style.transform = "perspective(1000px) rotateX(0deg)";
    }, 600);

    // Fade out
    setTimeout(() => {
      logoContainer.style.transition = "opacity 0.6s ease-out";
      logoContainer.style.opacity = "0";
    }, 1800);

    // Remove
    setTimeout(() => {
      logoContainer.style.display = "none";
    }, 2500);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center z-20">
      {/* Simple Logo Animation - Changed to absolute positioning within the centered container */}
      <div className="hero-logo-js absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] opacity-0">
        <Image
          src="/assets/img/logos/logo-full-white.webp"
          alt="Galaga Agency"
          className="w-[90vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] h-auto opacity-95 drop-shadow-2xl"
          width={600}
          height={600}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      <div className="hero-content relative z-40 w-full min-h-screen flex flex-col items-center justify-center pt-0 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full px-4">
          <div className="relative">
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
              <p className="hero-value-text-line1 text-body-large opacity-0 lg:max-w-auto pb-4 pt-24 text-white">
                {t("homepage.hero-section.valuePropositionLine1")}
              </p>
              <p className="hero-value-text-line2 text-body-large opacity-0 lg:max-w-auto text-white">
                {t("homepage.hero-section.valuePropositionLine2")}
              </p>
            </div>

            {/* CTA Buttons */}
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
          </div>
        </div>

        <ScrollIndicator className="scroll-indicator absolute bottom-20 left-1/2 opacity-0 z-50 transform -translate-x-1/2" />
      </div>
    </div>
  );
};
