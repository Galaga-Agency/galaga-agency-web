"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRocket, FaArrowRight, FaPlay } from "react-icons/fa";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="cta-section section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hielo/20 to-white"></div>

      <div className="container relative z-10">
        {/* Main headline - clean and powerful */}
        <div className="text-center pb-16 lg:pb-20">
          <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8">
            <span className="block text-azul-profundo pb-2">
              {t("cta.massive.line1")}
            </span>
            <span className="block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4">
              {t("cta.massive.line2")}
            </span>
          </h2>

          <p className="cta-subtitle text-xl md:text-2xl lg:text-3xl text-grafito font-light leading-relaxed px-4">
            {t("cta.massive.subtitle")}
          </p>
        </div>

        {/* Single powerful CTA card */}
        <div className="flex justify-center px-4">
          <div className="cta-card bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-hielo/30 max-w-2xl w-full">
            <div className="text-center">
              <h3 className="cta-card-title text-2xl lg:text-3xl font-bold text-negro pb-4">
                {t("cta.island.title")}
              </h3>

              <p className="cta-card-description text-lg lg:text-xl text-grafito pb-8 font-light">
                {t("cta.island.description")}
              </p>

              <div className="cta-card-buttons flex flex-col gap-4 md:flex-row justify-center">
                <PrimaryButton
                  href="/contacto"
                  className="cta-primary-button px-8 py-4 w-full md:w-auto"
                >
                  <span className="flex items-center justify-center gap-3">
                    <FaRocket className="text-lg" />
                    <span>{t("cta.scheduleCall")}</span>
                    <FaArrowRight className="text-sm" />
                  </span>
                </PrimaryButton>

                <SecondaryButton
                  href="/sobre-nosotros"
                  className="cta-secondary-button px-8 py-4 w-full md:w-auto"
                >
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-violeta to-azul-profundo rounded-full flex items-center justify-center">
                      <FaPlay className="text-white text-xs ml-0.5" />
                    </div>
                    <span>{t("cta.knowMore")}</span>
                  </span>
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>

        {/* Simple contact info */}
        <div className="text-center pt-16 lg:pt-20">
          <p className="text-grafito text-lg font-light pb-4">
            {t("cta.directContact")}
          </p>
          <a
            href="mailto:info@galagaagency.com"
            className="inline-block text-teal hover:text-azul-profundo transition-colors duration-300 font-semibold text-lg"
          >
            info@galagaagency.com
          </a>
        </div>
      </div>
    </section>
  );
}
