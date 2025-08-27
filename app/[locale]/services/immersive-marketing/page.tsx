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
import { use } from "react";
import { init } from "next/dist/compiled/webpack/webpack";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { initAlternateBlocksAnimations } from "@/utils/animations/alternate-blocks-animations";
import { init3DCardAnimations } from "@/utils/animations/3D-card-animations";

interface ServiceDetailsPageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

export default function MarketingInmersivoPage({
  params,
}: ServiceDetailsPageProps) {
  const { t, language } = useTranslation();
  const { serviceSlug } = use(params);

  useGSAPAnimations({
    animations: [
      initHorizontalScrollAnimation,
      initEntranceAnimations,
      initAlternateBlocksAnimations,
      init3DCardAnimations,
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
      href: getLocalizedRoute("services", language),
    },
    {
      name: t("services.immersive-marketing.title"),
      href: getLocalizedRoute(`services/${serviceSlug}`, language),
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
