"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { getLocalizedRoute } from "@/utils/navigation";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import TermsConditionsHeroSection from "@/components/pages/terms-conditions-page/TermsConditionsHeroSection";
import TermsConditionsContentSection from "@/components/pages/terms-conditions-page/TermsConditionsContentSection";
import TermsConditionsCTASection from "@/components/pages/terms-conditions-page/TermsConditionsCTASection";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";

export default function TermsConditionsPage() {
  const { t, language } = useTranslation();

  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.terms-conditions"),
      href: getLocalizedRoute("terms-and-conditions", language),
    },
  ];

  useGSAPAnimations({
    animations: [initEntranceAnimations, finishPageTransition],
    delay: 100,
  });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <TermsConditionsHeroSection />
      <TermsConditionsContentSection />
      <TermsConditionsCTASection />
    </>
  );
}
