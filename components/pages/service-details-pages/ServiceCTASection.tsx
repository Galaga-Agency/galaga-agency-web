"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getLocalizedRoute } from "@/utils/navigation";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

interface ServiceCTASectionProps {
  serviceKey: string;
  animationVariant?: "slide-up" | "zoom" | "slide-sides";
}

export default function ServiceCTASection({ 
  serviceKey, 
  animationVariant = "slide-up" 
}: ServiceCTASectionProps) {
  const { t, language } = useTranslation();
  
  // Use intersection observer for triggering animations
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true
  });

  // Define animation classes based on variant
  const getAnimationClasses = () => {
    switch (animationVariant) {
      case "zoom":
        return {
          title: isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75',
          subtitle: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8',
          buttons: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8',
          contact: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        };
      case "slide-sides":
        return {
          title: isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-12',
          subtitle: isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-12',
          buttons: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8',
          contact: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        };
      default: // slide-up with Y rotation like homepage
        return {
          title: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12',
          subtitle: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8',
          buttons: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8',
          contact: isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        };
    }
  };

  const animations = getAnimationClasses();

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="cta-section section relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="text-center pb-8 lg:pb-12">
          <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight pb-8">
            <span 
              className="block text-azul-profundo pb-2 transition-all duration-1000"
              style={{ 
                transitionDelay: '0ms',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: isVisible 
                  ? 'translateY(0) rotateY(0deg)' 
                  : 'translateY(48px) rotateY(180deg)',
                opacity: isVisible ? 1 : 0
              }}
            >
              {t(`service-details-pages.${serviceKey}.cta.title.line1`)}
            </span>
            <span 
              className="block bg-gradient-to-r from-teal to-turquesa bg-clip-text text-transparent pb-4 transition-all duration-1000"
              style={{ 
                transitionDelay: '100ms',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: isVisible 
                  ? 'translateY(0) rotateY(0deg)' 
                  : 'translateY(48px) rotateY(180deg)',
                opacity: isVisible ? 1 : 0
              }}
            >
              {t(`service-details-pages.${serviceKey}.cta.title.line2`)}
            </span>
          </h2>

          <p className={`cta-subtitle text-lg lg:text-xl text-negro font-light leading-relaxed px-4 transition-all duration-1000 ${
            animations.subtitle
          }`} style={{ transitionDelay: '300ms' }}>
            {t(`service-details-pages.${serviceKey}.cta.subtitle`)}
          </p>
        </div>

        <div className={`cta-card-buttons flex flex-col gap-4 md:flex-row justify-center transition-all duration-1000 ${
          animations.buttons
        }`} style={{ transitionDelay: '450ms' }}>
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
              <span>{t(`service-details-pages.${serviceKey}.cta.primary`)}</span>
            </span>
          </PrimaryButton>

          <SecondaryButton
            href={getLocalizedRoute("casos-de-exito", language)}
            className="cta-secondary-button px-8 py-4 w-full md:w-auto transform transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-3">
              <span>{t(`service-details-pages.${serviceKey}.cta.secondary`)}</span>
            </span>
          </SecondaryButton>
        </div>

        <div className="text-center pt-16 lg:pt-20">
          <p className={`text-negro text-lg font-light pb-4 transition-all duration-1000 ${
            animations.contact
          }`} style={{ transitionDelay: '600ms' }}>
            {t("homepage-cta.directContact")}
          </p>
          <a
            href="mailto:info@galagaagency.com"
            className="inline-block text-teal hover:text-azul-profundo font-semibold text-lg hover:scale-105 transform transition-all duration-1000"
            style={{ 
              transitionDelay: '750ms',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              transform: isVisible 
                ? 'translateY(0) rotateY(0deg)' 
                : 'translateY(24px) rotateY(180deg)',
              opacity: isVisible ? 1 : 0
            }}
          >
            info@galagaagency.com
          </a>
        </div>
      </div>
    </section>
  );
}