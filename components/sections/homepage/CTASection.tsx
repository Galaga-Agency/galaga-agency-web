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
        {/* Top diagonal - Subtle teal light */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/40 via-turquesa/10 to-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)"
          }}
        ></div>
        
        {/* Bottom diagonal - Pure white */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white via-hielo/20 to-white"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* HEADLINE - Dark text on light diagonal */}
        <div className="text-center pb-8 md:pb-12 lg:pb-16">
          <div className="cta-eyebrow inline-flex items-center gap-2 md:gap-3 pb-4 md:pb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-xs md:text-sm">
              {t("cta.eyebrow")}
            </span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>

          <h2 className="cta-title text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight pb-4 md:pb-6">
            <span className="cta-title-line-1 block text-negro pb-1 md:pb-2">
              {t("cta.massive.line1")}
            </span>
            <span className="cta-title-line-2 block bg-gradient-to-r from-teal via-turquesa to-verde-azulado bg-clip-text text-transparent p-2">
              {t("cta.massive.line2")}
            </span>
          </h2>

          <p className="cta-subtitle text-lg md:text-xl lg:text-2xl text-grafito font-light leading-relaxed px-4 md:px-0">
            {t("cta.massive.subtitle")}
          </p>
        </div>

        {/* FLOATING ACTION CARD - Crosses the diagonal line */}
        <div className="relative pb-8 md:pb-12 lg:pb-16">
          <div className="flex justify-center px-4 md:px-0">
            <div className="relative w-full max-w-2xl">
              {/* Epic glow effect */}
              <div className="cta-card-glow absolute inset-0 bg-gradient-to-r from-teal/20 to-turquesa/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl scale-105 md:scale-110"></div>
              
              {/* Main card - White with epic shadow */}
              <div className="cta-card relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl md:shadow-2xl border border-hielo/30">

                <div className="text-center">
                  <div className="cta-card-badge inline-flex items-center gap-2 md:gap-3 pb-3 md:pb-4">
                    <HiSparkles className="cta-card-icon-left text-xl md:text-2xl text-teal animate-spin-slow" />
                    <span className="cta-card-badge-text text-base md:text-lg font-semibold text-teal">
                      {t("cta.island.badge")}
                    </span>
                    <HiSparkles className="cta-card-icon-right text-xl md:text-2xl text-mandarina animate-spin-slow" style={{animationDirection: "reverse"}} />
                  </div>

                  <h3 className="cta-card-title text-xl md:text-2xl lg:text-3xl font-bold text-negro pb-2 md:pb-3">
                    {t("cta.island.title")}
                  </h3>
                  
                  <p className="cta-card-description text-base md:text-lg text-grafito pb-6 md:pb-8 font-light">
                    {t("cta.island.description")}
                  </p>

                  <div className="cta-card-buttons flex flex-col gap-3 md:gap-4 md:flex-row justify-center">
                    
                    <div className="cta-primary-wrapper group relative">
                      <div className="cta-primary-glow absolute inset-0 bg-gradient-to-r from-teal to-turquesa rounded-xl md:rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-300"></div>
                      <PrimaryButton 
                        href="/contacto"
                        className="cta-primary-button relative group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-all duration-300 px-6 py-3 md:px-8 md:py-4 w-full md:w-auto"
                      >
                        <span className="flex items-center justify-center gap-2 md:gap-3">
                          <FaRocket className="cta-primary-icon text-base md:text-lg group-hover:animate-bounce" />
                          <span className="cta-primary-text text-sm md:text-base">{t("cta.scheduleCall")}</span>
                          <FaArrowRight className="cta-primary-arrow text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </PrimaryButton>
                    </div>

                    <div className="cta-secondary-wrapper group">
                      <SecondaryButton 
                        href="/about"
                        className="cta-secondary-button group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-all duration-300 px-6 py-3 md:px-8 md:py-4 w-full md:w-auto"
                      >
                        <span className="flex items-center justify-center gap-2 md:gap-3">
                          <div className="cta-secondary-icon w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-violeta to-azul-profundo rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <FaPlay className="text-white text-xs ml-0.5" />
                          </div>
                          <span className="cta-secondary-text text-sm md:text-base">{t("cta.knowMore")}</span>
                        </span>
                      </SecondaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT BAR - Light glass on light background */}
        <div className="cta-contact-section relative z-10 pt-4 md:pt-6 lg:pt-8">
          <div className="text-center px-4 md:px-0">
            <div className="cta-contact-bar inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 border border-hielo/50 shadow-lg max-w-full">
              
              <span className="cta-contact-label text-grafito font-medium text-sm md:text-base">
                {t("cta.directContact")}
              </span>

              <div className="cta-contact-links flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                <a
                  href="mailto:info@galagaagency.com"
                  className="cta-contact-email group flex items-center gap-2 md:gap-3 text-teal hover:text-azul-profundo transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
                >
                  <FaEnvelope className="cta-contact-email-icon text-base md:text-lg flex-shrink-0" />
                  <span className="cta-contact-email-text break-all md:break-normal">info@galagaagency.com</span>
                </a>

                <a
                  href="https://linkedin.com/company/galagaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-contact-linkedin group flex items-center gap-2 md:gap-3 text-azul-profundo hover:text-teal transition-all duration-300 font-semibold hover:scale-105 text-sm md:text-base"
                >
                  <FaLinkedinIn className="cta-contact-linkedin-icon text-base md:text-lg flex-shrink-0" />
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