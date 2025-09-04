"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { getLocalizedRoute } from "@/utils/navigation";
import ServiceCTASection from "@/components/pages/service-details-pages/ServiceCTASection";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import GrantsManagementHeroSection from "@/components/pages/service-details-pages/grants-management-page/GrantsManagementHeroSection";
import { use } from "react";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";

interface ServiceDetailsPageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

export default function GrantsManagementPage({
  params,
}: ServiceDetailsPageProps) {
  const { t, language } = useTranslation();
  const { serviceSlug } = use(params);

  useGSAPAnimations({
    animations: [initEntranceAnimations, finishPageTransition],
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
      <GrantsManagementHeroSection />
      <ServiceCTASection serviceKey="grants-management" />
    </>
  );
}
