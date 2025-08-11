"use client";

import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import CaseStudiesHeroSection from "@/components/sections/case-studies/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGridSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initCaseStudiesHeroAnimations } from "@/utils/animations/case-studies-hero-animations";
import { initCTAAnimations } from "@/utils/animations/cta-animation";
import CaseStudiesCategoriesSection from "@/components/sections/case-studies/CaseStudiesCategoriesSection";
import { initCaseStudiesCategoriesAnimations } from "@/utils/animations/case-studies-categories-animation";
import CaseStudiesSection from "@/components/sections/homepage/CaseStudiesSection";
import { initCaseStudiesAnimations } from "@/utils/animations/case-studies-animation";
import { getLocalizedRoute } from "@/utils/navigation";

export default function CaseStudiesPage() {
  const isAppReady = useAppReady();
  const { t, language } = useTranslation();

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

  // Breadcrumb navigation
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.cases"),
      href: getLocalizedRoute("casos-de-exito", language),
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <CaseStudiesHeroSection />
      <CaseStudiesSection />
      <CaseStudiesCategoriesSection />
      <CTASection />
    </>
  );
}
