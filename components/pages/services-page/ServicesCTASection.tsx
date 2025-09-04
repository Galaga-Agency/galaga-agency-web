"use client";

import { useTranslation } from "@/hooks/useTranslation";
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

  return (
    <section className="cta-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center pb-8 lg:pb-12 flex flex-col items-center">
          <h2 className="fade-in-up-rotate cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8">
            <span className="block text-azul-profundo pb-2">
              {t("services-page.cta-section.title.line1")}
            </span>
            <span className="block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4">
              {t("services-page.cta-section.title.line2")}
            </span>
          </h2>

          <p className="fade-in-up opacity-0 text-lg lg:text-xl text-negro font-light leading-relaxed px-4">
            {t(`services-page.cta-section.subtitle`)}
          </p>
        </div>

        <div className="stagger-bounce-in-up opacity-0 flex flex-col gap-4 md:flex-row justify-center">
          <PrimaryButton
            href={getLocalizedRoute("contacto", language)}
            bubbleTransition={true}
            bubbleColor="var(--color-teal)"
            transitionDuration={0.8}
            className="px-8 py-4 w-full md:w-auto transform transition-all duration-300 hover:scale-105"
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
            bubbleTransition={true}
            bubbleColor="var(--color-teal)"
            transitionDuration={0.8}
            className="px-8 py-4 w-full md:w-auto transform transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-3">
              <span>
                {t(`service-details-pages.${serviceKey}.cta.secondary`)}
              </span>
            </span>
          </SecondaryButton>
        </div>

        <div className="opacity-0 fade-in-up-rotate text-center pt-16 lg:pt-20">
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
