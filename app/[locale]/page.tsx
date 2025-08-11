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
import { initCTAAnimations } from "@/utils/animations/cta-animation";
import { animatePartnersSection } from "@/utils/animations/partners-animation";
import { initChevronAnimations } from "@/utils/animations/chevron-animation";
import { initCaseStudiesAnimations } from "@/utils/animations/case-studies-animation";
import { initAboutAnimations } from "@/utils/animations/about-animations";
import { fadeAnimations } from "@/utils/animations/fade-animations";
import { initWhyChooseAnimations } from "@/utils/animations/why-choose-us-animations";

export default function HomePage() {
  useGSAPAnimations({
    animations: [
      initHeroScrollAnimation,
      initHeroTitleAnimation,
      fadeAnimations,
      initAboutAnimations,
      initChevronAnimations,
      initWhyChooseAnimations,
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
