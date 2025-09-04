"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import CaseStudiesHeroSection from "@/components/pages/portfolio-page/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/pages/portfolio-page/CaseStudiesGridSection";
import CTASection from "@/components/pages/homepage/CTASection";
import { getLocalizedRoute } from "@/utils/navigation";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";

export default function CaseStudiesPage() {
  const { t, language } = useTranslation();

  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.cases"),
      href: getLocalizedRoute("use-cases", language),
    },
  ];

  useGSAPAnimations({
    animations: [initEntranceAnimations, finishPageTransition],
    delay: 100,
  });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <CaseStudiesHeroSection />
      <CaseStudiesGridSection />
      <CTASection />
    </>
  );
}
