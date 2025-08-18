"use client";

import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import CaseStudiesHeroSection from "@/components/sections/case-studies-page/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/sections/case-studies-page/CaseStudiesGridSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initCTAAnimations } from "@/utils/animations/cta-animation";
import { getLocalizedRoute } from "@/utils/navigation";
import { initCaseStudiesGridAnimations } from "@/utils/animations/case-studies-grid-animations";
import { initHeroAnimations } from "@/utils/animations/hero-animations";

export default function CaseStudiesPage() {
  const isAppReady = useAppReady();
  const { t, language } = useTranslation();

  useGSAP(() => {
    if (!isAppReady) return;

    const timer = setTimeout(() => {
      initHeroAnimations();
      initCaseStudiesGridAnimations();
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
      <CaseStudiesGridSection />
      <CTASection />
    </>
  );
}
