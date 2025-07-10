"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesOverviewSection from "@/components/sections/services/ServicesOverviewSection";
import ServicesProcessSection from "@/components/sections/services/ServicesProcessSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initServicesHeroAnimations } from "@/utils/animations/services-hero-animations";
import { initServicesOverviewAnimations } from "@/utils/animations/services-overview-animations";
import { initServicesProcessAnimations } from "@/utils/animations/services-process-animations";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";
import { getLocalizedRoute } from "@/utils/navigation";

export default function ServicesPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [
      initServicesHeroAnimations,
      initServicesOverviewAnimations,
      initServicesProcessAnimations,
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
      <CTASection />
    </>
  );
}
