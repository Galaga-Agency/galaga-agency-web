"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { FaPlay } from "react-icons/fa";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="cta-section section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hielo/20 to-white"></div>

      <div className="container relative z-10">
        {/* Main headline - clean and powerful */}
        <div className="text-center pb-8 lg:pb-12">
          <h2 className="fade-in-up-rotate cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8">
            <span className="block text-azul-profundo pb-2">
              {t("homepage-cta.massive.line1")}
            </span>
            <span className="block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4">
              {t("homepage-cta.massive.line2")}
            </span>
          </h2>

          <p className="fade-in-up cta-subtitle text-lg lg:text-xl text-negro font-light leading-relaxed px-4" style={{ animationDelay: '0.2s' }}>
            {t("homepage-cta.massive.subtitle")}
          </p>
        </div>

        <div className="fade-in-up cta-card-buttons flex flex-col gap-4 md:flex-row justify-center" style={{ animationDelay: '0.4s' }}>
          <PrimaryButton
            href="/contacto"
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
              <span>{t("homepage-cta.scheduleCall")}</span>
            </span>
          </PrimaryButton>

          <SecondaryButton
            href="/sobre-nosotros"
            className="cta-secondary-button px-8 py-4 w-full md:w-auto transform transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-3">
              <span>{t("homepage-cta.knowMore")}</span>
            </span>
          </SecondaryButton>
        </div>

        {/* Simple contact info */}
        <div className="opacity-0 fade-in-up-rotate text-center pt-16 lg:pt-20" style={{ animationDelay: '0.6s' }}>
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