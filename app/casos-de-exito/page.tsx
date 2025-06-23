"use client";

import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import CaseStudiesHeroSection from "@/components/sections/case-studies/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGridSection";
import CTASection from "@/components/sections/homepage/CTASection";
import {
  initCaseStudiesHeroAnimations,
  initCaseStudiesGridAnimations,
  initCaseStudiesCategoriesAnimations,
} from "@/utils/animations/case-studies-animations";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";
import CaseStudiesCategoriesSection from "@/components/sections/case-studies/CaseStudiesCategoriesSection";

export default function CaseStudiesPage() {
  const isAppReady = useAppReady();

  useGSAP(() => {
    if (!isAppReady) return;

    const timer = setTimeout(() => {
      initCaseStudiesHeroAnimations();
      initCaseStudiesGridAnimations();
      initCaseStudiesCategoriesAnimations();
      initCTAAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [isAppReady]);

  return (
    <>
      <CaseStudiesHeroSection />
      <CaseStudiesGridSection />
      <CaseStudiesCategoriesSection />
      <CTASection />
    </>
  );
}
