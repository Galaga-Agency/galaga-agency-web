"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRocket, FaArrowRight, FaPlay, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="cta-section section relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Simplified diagonal backgrounds */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/30 via-turquesa/8 to-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)"
          }}
        ></div>
        
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white via-hielo/15 to-white"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Simplified headline */}
        <div className="text-center pb-12 lg:pb-16">
          <div className="cta-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("cta.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full"></div>
          </div>

          <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight pb-6">
            <span className="cta-title-line-1 block text-negro pb-2">
              {t("cta.massive.line1")}
            </span>
            <span className="cta-title-line-2 block bg-gradient-to-r from-teal via-turquesa to-verde-azulado bg-clip-text text-transparent">
              {t("cta.massive.line2")}
            </span>
          </h2>

          <p className="cta-subtitle text-lg md:text-xl lg:text-2xl text-grafito font-light leading-relaxed px-4 md:px-0">
            {t("cta.massive.subtitle")}
          </p>
        </div>

        {/* Simplified floating action card */}
        <div className="relative pb-12 lg:pb-16">
          <div className="flex justify-center px-4 md:px-0">
            <div className="relative w-full max-w-2xl">
              {/* Subtle glow effect */}
              <div className="cta-card-glow absolute inset-0 bg-gradient-to-r from-teal/15 to-turquesa/15 rounded-3xl blur-2xl"></div>
              
              {/* Main card */}
              <div className="cta-card relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-hielo/30">
                <div className="text-center">
                  <div className="cta-card-badge inline-flex items-center gap-3 pb-4">
                    <HiSparkles className="cta-card-icon-left text-2xl text-teal" />
                    <span className="cta-card-badge-text text-lg font-semibold text-teal">
                      {t("cta.island.badge")}
                    </span>
                    <HiSparkles className="cta-card-icon-right text-2xl text-mandarina" />
                  </div>

                  <h3 className="cta-card-title text-2xl lg:text-3xl font-bold text-negro pb-3">
                    {t("cta.island.title")}
                  </h3>
                  
                  <p className="cta-card-description text-lg text-grafito pb-8 font-light">
                    {t("cta.island.description")}
                  </p>

                  <div className="cta-card-buttons flex flex-col gap-4 md:flex-row justify-center">
                    <div className="cta-primary-wrapper">
                      <PrimaryButton 
                        href="/contacto"
                        className="cta-primary-button transition-all duration-300 px-8 py-4 w-full md:w-auto"
                      >
                        <span className="flex items-center justify-center gap-3">
                          <FaRocket className="cta-primary-icon text-lg" />
                          <span className="cta-primary-text">{t("cta.scheduleCall")}</span>
                          <FaArrowRight className="cta-primary-arrow text-sm transition-transform duration-300" />
                        </span>
                      </PrimaryButton>
                    </div>

                    <div className="cta-secondary-wrapper">
                      <SecondaryButton 
                        href="/sobre-nosotros"
                        className="cta-secondary-button transition-all duration-300 px-8 py-4 w-full md:w-auto"
                      >
                        <span className="flex items-center justify-center gap-3">
                          <div className="cta-secondary-icon w-6 h-6 bg-gradient-to-r from-violeta to-azul-profundo rounded-full flex items-center justify-center transition-transform duration-300">
                            <FaPlay className="text-white text-xs ml-0.5" />
                          </div>
                          <span className="cta-secondary-text">{t("cta.knowMore")}</span>
                        </span>
                      </SecondaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified contact bar */}
        <div className="cta-contact-section relative z-10 pt-8">
          <div className="text-center px-4 md:px-0">
            <div className="cta-contact-bar inline-flex flex-col md:flex-row items-center gap-6 lg:gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-5 lg:px-10 lg:py-6 border border-hielo/50 shadow-lg">
              
              <span className="cta-contact-label text-grafito font-medium">
                {t("cta.directContact")}
              </span>

              <div className="cta-contact-links flex flex-col md:flex-row items-center gap-6 lg:gap-8">
                <a
                  href="mailto:info@galagaagency.com"
                  className="cta-contact-email group flex items-center gap-3 text-teal hover:text-azul-profundo transition-all duration-300 font-semibold"
                >
                  <FaEnvelope className="cta-contact-email-icon text-lg flex-shrink-0" />
                  <span className="cta-contact-email-text">info@galagaagency.com</span>
                </a>

                <a
                  href="https://linkedin.com/company/galagaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-contact-linkedin group flex items-center gap-3 text-azul-profundo hover:text-teal transition-all duration-300 font-semibold"
                >
                  <FaLinkedinIn className="cta-contact-linkedin-icon text-lg flex-shrink-0" />
                  <span className="cta-contact-linkedin-text">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}