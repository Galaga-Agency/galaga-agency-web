"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { initHeroAnimations } from "@/utils/animations/hero-animations";
import { getLocalizedRoute } from "@/utils/navigation";
import MarketingInmersivoHeroSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoHeroSection";
import MarketingInmersivoOverviewSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoOverviewSection";
import MarketingInmersivoFeaturesSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoFeaturesSection";
import MarketingInmersivoProcessSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoProcessSection";
import MarketingInmersivoTechnologiesSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoTechnologiesSection";
import ServiceCTASection from "@/components/pages/service-details-pages/ServiceCTASection";
import { initAboutAnimations } from "@/utils/animations/about-animations";

export default function MarketingInmersivoPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [initHeroAnimations, initAboutAnimations],
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
      name: t("services.immersive-marketing.title"),
      href: getLocalizedRoute("servicios/marketing-inmersivo", language),
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <MarketingInmersivoHeroSection />
      <MarketingInmersivoOverviewSection />
      <MarketingInmersivoFeaturesSection />
      <MarketingInmersivoProcessSection />
      <MarketingInmersivoTechnologiesSection />
      <ServiceCTASection serviceKey="immersive-marketing" />
    </>
  );
}
