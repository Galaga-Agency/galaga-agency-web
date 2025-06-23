"use client";

import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import CaseStudiesHeroSection from "@/components/sections/case-studies/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGridSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initCaseStudiesHeroAnimations } from "@/utils/animations/case-studies-animations";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";
import CaseStudiesCategoriesSection from "@/components/sections/case-studies/CaseStudiesCategoriesSection";
import { initCaseStudiesCategoriesAnimations } from "@/utils/animations/case-studies-categories-animation";
import CaseStudiesSection from "@/components/sections/homepage/CaseStudiesSection";
import { initCaseStudiesAnimations } from "@/utils/animations/case-studies-animation";

export default function CaseStudiesPage() {
  const isAppReady = useAppReady();

  useGSAP(() => {
    if (!isAppReady) return;

    const timer = setTimeout(() => {
      initCaseStudiesHeroAnimations();
      initCaseStudiesAnimations();
      initCaseStudiesCategoriesAnimations();
      initCTAAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [isAppReady]);

  return (
    <>
      <CaseStudiesHeroSection />
      <CaseStudiesSection />
      <CaseStudiesCategoriesSection />
      <CTASection />
    </>
  );
}
