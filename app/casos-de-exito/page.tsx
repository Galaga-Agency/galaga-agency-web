"use client";

import { useGSAP } from "@gsap/react";
import Footer from "@/components/layout/Footer";
import CaseStudiesHeroSection from "@/components/sections/case-studies/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGridSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { 
  initCaseStudiesHeroAnimations, 
  initCaseStudiesGridAnimations, 
  initCaseStudiesCategoriesAnimations 
} from "@/utils/case-studies-animations";
import { initCTAAnimations } from "@/utils/homepage-cta-animation";
import CaseStudiesCategoriesSection from "@/components/sections/services/CaseStudiesCategoriesSection";

export default function CaseStudiesPage() {
  useGSAP(() => {
    const timer = setTimeout(() => {
      initCaseStudiesHeroAnimations();
      initCaseStudiesGridAnimations();
      initCaseStudiesCategoriesAnimations();
      initCTAAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="w-full">
        <CaseStudiesHeroSection />
        <CaseStudiesGridSection />
        <CaseStudiesCategoriesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}