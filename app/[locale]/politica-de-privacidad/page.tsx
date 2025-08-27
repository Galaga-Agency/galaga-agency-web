"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { getLocalizedRoute } from "@/utils/navigation";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import PrivacyPolicyHeroSection from "@/components/pages/privacy-policy-page/PrivacyPolicyHeroSection";
import PrivacyPolicyContentSection from "@/components/pages/privacy-policy-page/PrivacyPolicyContentSection";
import PrivacyPolicyCTASection from "@/components/pages/privacy-policy-page/PrivacyPolicyCTASection";

export default function PrivacyPolicyPage() {
  const { t, language } = useTranslation();

  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.privacy-policy"),
      href: getLocalizedRoute("politica-de-privacidad", language),
    },
  ];

  useGSAPAnimations({
    animations: [initEntranceAnimations],
    delay: 100,
  });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContentSection />
      <PrivacyPolicyCTASection />
    </>
  );
}
