"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getLocalizedRoute } from "@/utils/navigation";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

interface ServiceCTASectionProps {
  serviceKey: string;
}

export default function ServiceCTASection({
  serviceKey,
}: ServiceCTASectionProps) {
  const { t, language } = useTranslation();

  // Use intersection observer for triggering animations
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="cta-section section relative overflow-hidden"
    >
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center pb-8 lg:pb-12">
          <h2
            className={`cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <span className="block text-azul-profundo pb-2">
              {t(`service-details-pages.${serviceKey}.cta.title`)}
            </span>
          </h2>

          <p
            className={`cta-subtitle text-lg lg:text-xl text-negro font-light leading-relaxed px-4 ${
              isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
            }`}
          >
            {t(`service-details-pages.${serviceKey}.cta.subtitle`)}
          </p>
        </div>

        <div
          className={`cta-card-buttons flex flex-col gap-4 md:flex-row justify-center ${
            isVisible ? "animate-slide-up animation-delay-400" : "opacity-0"
          }`}
        >
          <PrimaryButton
            href={getLocalizedRoute("contacto", language)}
            className="cta-primary-button px-8 py-4 w-full md:w-auto transform transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-3">
              <Image
                src="/assets/img/symbols/single-chevron-white.webp"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>
                {t(`service-details-pages.${serviceKey}.cta.primary`)}
              </span>
            </span>
          </PrimaryButton>

          <SecondaryButton
            href={getLocalizedRoute("casos-de-exito", language)}
            className="cta-secondary-button px-8 py-4 w-full md:w-auto transform transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-3">
              <span>
                {t(`service-details-pages.${serviceKey}.cta.secondary`)}
              </span>
            </span>
          </SecondaryButton>
        </div>

        <div
          className={`text-center pt-16 lg:pt-20 ${
            isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
          }`}
        >
          <p className="text-negro text-lg font-light pb-4">
            {t("homepage-cta.directContact")}
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
