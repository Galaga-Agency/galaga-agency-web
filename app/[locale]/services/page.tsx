"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServicesHeroSection from "@/components/pages/services-page/ServicesHeroSection";
import ServicesOverviewSection from "@/components/pages/services-page/ServicesOverviewSection";
import ServicesProcessSection from "@/components/pages/services-page/ServicesProcessSection";
import { getLocalizedRoute } from "@/utils/navigation";
import TechnologyStackSection from "@/components/pages/services-page/TechnologyStackSection";
import ServicesCTASection from "@/components/pages/services-page/ServicesCTASection";

export default function ServicesPage() {
  const { t, language } = useTranslation();

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
      <ServicesCTASection serviceKey="immersive-marketing" />
    </>
  );
}
