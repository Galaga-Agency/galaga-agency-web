"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaPlay } from "react-icons/fa";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CTASection() {
  const { t } = useTranslation();
  
  // Use intersection observer for triggering animations
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true
  });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="cta-section section relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-hielo/20 to-white"></div>

      <div className="container relative z-10">
        {/* Main headline - clean and powerful */}
        <div className="text-center pb-8 lg:pb-12">
          <h2 className={`cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <span className="block text-azul-profundo pb-2">
              {t("homepage-cta.massive.line1")}
            </span>
            <span className="block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4">
              {t("homepage-cta.massive.line2")}
            </span>
          </h2>

          <p className={`cta-subtitle text-lg lg:text-xl text-negro font-light leading-relaxed px-4 ${
            isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'
          }`}>
            {t("homepage-cta.massive.subtitle")}
          </p>
        </div>

        <div className={`cta-card-buttons flex flex-col gap-4 md:flex-row justify-center ${
          isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'
        }`}>
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
        <div className={`text-center pt-16 lg:pt-20 ${
          isVisible ? 'animate-slide-up animation-delay-600' : 'opacity-0'
        }`}>
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