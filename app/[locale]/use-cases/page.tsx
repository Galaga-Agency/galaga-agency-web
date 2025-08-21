"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import CaseStudiesHeroSection from "@/components/pages/portfolio-page/CaseStudiesHeroSection";
import CaseStudiesGridSection from "@/components/pages/portfolio-page/CaseStudiesGridSection";
import CTASection from "@/components/pages/homepage/CTASection";
import { getLocalizedRoute } from "@/utils/navigation";

export default function CaseStudiesPage() {
  const { t, language } = useTranslation();

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
