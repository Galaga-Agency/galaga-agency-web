"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ServicesCTASection() {
  const { t } = useTranslation();

  return (
    <section className="cta-section section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hielo/20 to-white"></div>

      {/* Background chevron */}
      <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-end md:pb-16 md:pr-64">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <Image
            src="/assets/img/symbols/double-chevron-teal.webp"
            alt=""
            width={300}
            height={300}
            className="w-full h-full object-contain opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent from-30% via-white/90 via-70% to-white/90"></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Main headline - focused on action */}
        <div className="text-center pb-8 lg:pb-12">
          <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8">
            <span className="block text-azul-profundo pb-2">
              {t("services-page.cta-section.line1")}
            </span>
            <span className="block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4">
              {t("services-page.cta-section.line2")}
            </span>
          </h2>

          <p className="cta-subtitle text-lg lg:text-xl text-negro font-light leading-relaxed px-4">
            {t("services-page.cta-section.subtitle")}
          </p>
        </div>

        <div className="cta-card-buttons flex flex-col gap-4 md:flex-row justify-center">
          <PrimaryButton
            href="/casos-de-exito"
            className="cta-primary-button px-8 py-4 w-full md:w-auto"
          >
            <span className="flex items-center justify-center gap-3">
              <Image
                src="/assets/img/symbols/single-chevron-white.webp"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>{t("services-page.cta-section.seePortfolio")}</span>
            </span>
          </PrimaryButton>

          <SecondaryButton
            href="/contacto"
            className="cta-secondary-button px-8 py-4 w-full md:w-auto"
          >
            <span className="flex items-center justify-center gap-3">
              <span>{t("services-page.cta-section.getStarted")}</span>
            </span>
          </SecondaryButton>
        </div>

        {/* Engagement message */}
        <div className="text-center pt-16 lg:pt-20">
          <p className="text-negro text-lg font-light pb-4">
            {t("services-page.cta-section.readyToStart")}
          </p>
          
           <a href="mailto:info@galagaagency.com"
            className="inline-block text-teal hover:text-azul-profundo transition-colors duration-300 font-semibold text-lg"
          >
            info@galagaagency.com
          </a>
        </div>
      </div>
    </section>
  );
}