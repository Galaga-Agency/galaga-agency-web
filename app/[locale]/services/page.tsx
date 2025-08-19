"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServicesHeroSection from "@/components/pages/services-page/ServicesHeroSection";
import ServicesOverviewSection from "@/components/pages/services-page/ServicesOverviewSection";
import ServicesProcessSection from "@/components/pages/services-page/ServicesProcessSection";
import CTASection from "@/components/pages/homepage/CTASection";
import { initServicesOverviewAnimations } from "@/utils/animations/services-overview-animations";
import { initServicesProcessAnimations } from "@/utils/animations/services-process-animations";
import { initCTAAnimations } from "@/utils/animations/cta-animation";
import { getLocalizedRoute } from "@/utils/navigation";
import TechnologyStackSection from "@/components/pages/services-page/TechnologyStackSection";
import { initTechnologyStackAnimations } from "@/utils/animations/technology-stack-animations";
import ServicesCTASection from "@/components/pages/services-page/ServicesCTASection";
import { initHeroAnimations } from "@/utils/animations/hero-animations";

export default function ServicesPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [
      initHeroAnimations,
      initServicesOverviewAnimations,
      initServicesProcessAnimations,
      initTechnologyStackAnimations,
      initCTAAnimations,
    ],
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
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServicesProcessSection />
      <TechnologyStackSection />
      <ServicesCTASection />
    </>
  );
}
