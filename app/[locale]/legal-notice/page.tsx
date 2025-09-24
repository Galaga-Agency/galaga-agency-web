"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { getLocalizedRoute } from "@/utils/navigation";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import LegalNoticeHeroSection from "@/components/pages/legal-notice-page/LegalNoticeHeroSection";
import LegalNoticeContentSection from "@/components/pages/legal-notice-page/LegalNoticeContentSection";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";
import LegalNoticeCTASection from "@/components/pages/legal-notice-page/LegalNoticeCTASection";

export default function LegalNoticePage() {
  const { t, language } = useTranslation();

  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.legal-notice"),
      href: getLocalizedRoute("aviso-legal", language),
    },
  ];

  useGSAPAnimations({
    animations: [initEntranceAnimations, finishPageTransition],
    delay: 100,
  });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <LegalNoticeHeroSection />
      <LegalNoticeContentSection />
      <LegalNoticeCTASection />
    </>
  );
}
