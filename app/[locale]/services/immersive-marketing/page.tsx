"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { getLocalizedRoute } from "@/utils/navigation";
import MarketingInmersivoHeroSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoHeroSection";
import MarketingInmersivoOverviewSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoOverviewSection";
import MarketingInmersivoFeaturesSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoFeaturesSection";
import MarketingInmersivoProcessSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoProcessSection";
import { initHorizontalScrollAnimation } from "@/utils/animations/horizontal-scroll-animation";
import MarketingInmersivoResultsSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoResultsSection";
import ServiceCTASection from "@/components/pages/service-details-pages/ServiceCTASection";
import MarketingInmersivoCollaborationSection from "@/components/pages/service-details-pages/marketing-inmersivo-page/MarketingInmersivoCollaborationSection";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { initAlternateBlocksAnimations } from "@/utils/animations/alternate-blocks-animations";

export default function MarketingInmersivoPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [
      initEntranceAnimations,
      initAlternateBlocksAnimations,
      initHorizontalScrollAnimation,
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
      <div className="relative">
        {/* Diagonal background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/50 via-turquesa/20 to-blanco"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"></div>
        </div>
        <MarketingInmersivoProcessSection />
        <MarketingInmersivoCollaborationSection />
      </div>
      <MarketingInmersivoResultsSection />
      <ServiceCTASection serviceKey="immersive-marketing" />
    </>
  );
}
