"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import AboutSection from "@/components/pages/homepage/AboutSection";
import CTASection from "@/components/pages/homepage/CTASection";
import HeroSection from "@/components/pages/homepage/HeroSection";
import ServicesSection from "@/components/pages/homepage/ServicesSection";
import CaseStudiesSection from "@/components/pages/homepage/CaseStudiesSection";
import PartnersSection from "@/components/pages/homepage/PartnersSection";
import { initHeroTitleAnimation } from "@/utils/animations/homepage-hero-animation";
import { initHeroScrollAnimation } from "@/utils/animations/homepage-hero-scroll-animation";
import { initCarouselAnimation } from "@/utils/animations/carousel-animation";
import { initBoucingBubblesAnimation } from "@/utils/animations/bouncing-bubbles-animations";

export default function HomePage() {
  useGSAPAnimations({
    animations: [
      initHeroScrollAnimation,
      initHeroTitleAnimation,
      initBoucingBubblesAnimation,
      initCarouselAnimation,
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
