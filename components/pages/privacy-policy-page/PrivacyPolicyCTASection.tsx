"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedRoute } from "@/utils/navigation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function PrivacyPolicyCTASection() {
  const { t, language } = useTranslation();

  return (
    <section className="cta-section section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hielo/20 to-white"></div>

      {/* Background chevron with GSAP animation */}
      <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-end md:pb-16 md:pr-32">
        <div className="fade-in-up opacity-0 relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/assets/img/symbols/single-chevron-teal.webp"
            alt=""
            width={300}
            height={300}
            className="w-full h-full object-contain opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent from-30% via-white/90 via-70% to-white/90"></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Main headline */}
        <div className="text-center pb-8 lg:pb-12">
          <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8">
            <span className="fade-in-up-rotate opacity-0 block text-azul-profundo pb-2">
              {t("legal-pages.cta-section.line1")}
            </span>
            <span
              className="fade-in-up-rotate opacity-0 block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4"
              style={{ animationDelay: "0.2s" }}
            >
              {t("legal-pages.cta-section.line2")}
            </span>
          </h2>

          <p
            className="fade-in-up opacity-0 cta-subtitle text-lg lg:text-xl text-negro font-light leading-relaxed px-4 container-tablet"
            style={{ animationDelay: "0.4s" }}
          >
            {t("legal-pages.cta-section.subtitle.privacy")}
          </p>
        </div>

        {/* CTA Buttons with stagger effect */}
        <div className="cta-card-buttons flex flex-col gap-4 md:flex-row justify-center">
          <div className="stagger-bounce-in-up opacity-0">
            <PrimaryButton
              href={getLocalizedRoute("contacto", language)}
              bubbleTransition={true}
              bubbleColor="var(--color-teal)"
              transitionDuration={0.8}
              className="legal-cta-primary px-8 py-4 w-full md:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <Image
                  src="/assets/img/symbols/single-chevron-white.webp"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span>{t("legal-pages.cta-section.primaryButton")}</span>
              </span>
            </PrimaryButton>
          </div>

          <div className="stagger-bounce-in-up opacity-0">
            <SecondaryButton
              href={getLocalizedRoute("terms-and-conditions", language)}
              bubbleTransition={true}
              bubbleColor="var(--color-teal)"
              transitionDuration={0.8}
              className="legal-cta-secondary px-8 py-4 w-full md:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <span>
                  {t("legal-pages.cta-section.secondaryButton.privacy")}
                </span>
              </span>
            </SecondaryButton>
          </div>
        </div>

        {/* Contact info with subtle animation */}
        <div
          className="fade-in-up-rotate opacity-0 text-center pt-16 lg:pt-20"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-negro text-lg font-light pb-4">
            {t("legal-pages.cta-section.directContact")}
          </p>

          <a
            href="mailto:info@galagaagency.com"
            className="inline-block text-teal hover:text-azul-profundo transition-colors duration-300 font-semibold text-lg hover:scale-105 transform"
          >
            info@galagaagency.com
          </a>
        </div>
      </div>
    </section>
  );
}
