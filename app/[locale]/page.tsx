"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import AboutSection from "@/components/sections/homepage/AboutSection";
import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";
import CaseStudiesSection from "@/components/sections/homepage/CaseStudiesSection";
import PartnersSection from "@/components/sections/homepage/PartnersSection";
import { initHeroTitleAnimation } from "@/utils/animations/hero-title-animation";
import { initHeroScrollAnimation } from "@/utils/animations/hero-scroll-animation";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";
import { animatePartnersSection } from "@/utils/animations/partners-animation";
import { initChevronAnimations } from "@/utils/animations/chevron-animation";
import { initCaseStudiesAnimations } from "@/utils/animations/case-studies-animation";
import { initAboutAnimations } from "@/utils/animations/about-animations";
import { fadeAnimations } from "@/utils/animations/fade-animations";
import { initVideoHeroAnimations, initFallbackHeroAnimations } from "@/utils/animations/video-hero-animations";

export default function HomePage() {
  useGSAPAnimations({
    animations: [
      initHeroScrollAnimation,
      // Dynamic hero animation based on video support
      () => {
        const videoElement = document.querySelector('.video-hero');
        const fallbackElements = document.querySelector('[data-anim="innovamos"]');
        
        if (videoElement) {
          return initVideoHeroAnimations();
        } else if (fallbackElements) {
          return initFallbackHeroAnimations();
        }
      },
      fadeAnimations,
      initAboutAnimations,
      initChevronAnimations,
      initCaseStudiesAnimations,
      animatePartnersSection,
      initCTAAnimations,
    ],
    delay: 100,
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}