"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AboutHeroSection from "@/components/pages/about-us-page/AboutHeroSection";
import AboutStorySection from "@/components/pages/about-us-page/AboutStorySection";
import AboutApproachSection from "@/components/pages/about-us-page/AboutApproachSection";
import AboutClientsSection from "@/components/pages/about-us-page/AboutClientsSection";
import { getLocalizedRoute } from "@/utils/navigation";
import AboutCTASection from "@/components/pages/about-us-page/AboutCTASection";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";

export default function AboutPage() {
  const { t, language } = useTranslation();

  // Breadcrumb navigation
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.about"),
      href: getLocalizedRoute("sobre-nosotros", language),
    },
  ];

    useGSAPAnimations({
      animations: [
        initEntranceAnimations,
      ],
      delay: 100,
    });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutApproachSection />
      <AboutClientsSection />
      <AboutCTASection />
    </>
  );
}
