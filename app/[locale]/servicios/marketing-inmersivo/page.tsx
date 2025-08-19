"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { initHeroAnimations } from "@/utils/animations/hero-animations";
import { getLocalizedRoute } from "@/utils/navigation";
import MarketingInmersivoHeroSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoHeroSection";

export default function MarketingInmersivoPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [initHeroAnimations],
    delay: 100,
  });

  // Breadcrumb navigation
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.services"),
      href: getLocalizedRoute("servicios", language),
    },
    {
      name: t("services.marketing-inmersivo.title"),
      href: getLocalizedRoute("servicios/marketing-inmersivo", language),
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <MarketingInmersivoHeroSection />
      {/* <MarketingInmersivoOverviewSection />
      <MarketingInmersivoFeaturesSection />
      <MarketingInmersivoProcessSection />
      <MarketingInmersivoTechnologiesSection />
      <MarketingInmersivoResultsSection />
      <ServiceCTASection serviceKey="marketing-inmersivo" /> */}
    </>
  );
}
