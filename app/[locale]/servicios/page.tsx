"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServicesHeroSection from "@/components/pages/services-page/ServicesHeroSection";
import ServicesOverviewSection from "@/components/pages/services-page/ServicesOverviewSection";
import ServicesProcessSection from "@/components/pages/services-page/ServicesProcessSection";
import { getLocalizedRoute } from "@/utils/navigation";
import TechnologyStackSection from "@/components/pages/services-page/TechnologyStackSection";
import ServiceCTASection from "@/components/pages/services-page/ServicesCTASection";
import { initHeroGridAnimation } from "@/utils/animations/grid-animations";
import { animateHero3D } from "@/utils/animations/3D-models-animations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { init3DCardAnimations } from "@/utils/animations/3D-card-animations";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";

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

  useGSAPAnimations({
    animations: [
      initHeroGridAnimation,
      animateHero3D,
      initEntranceAnimations,
      init3DCardAnimations,
      finishPageTransition,
    ],
    delay: 100,
  });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServicesProcessSection />
      <TechnologyStackSection />
      <ServiceCTASection serviceKey="immersive-marketing" />
    </>
  );
}
