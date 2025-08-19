"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AboutHeroSection from "@/components/pages/about-us-page/AboutHeroSection";
import AboutStorySection from "@/components/pages/about-us-page/AboutStorySection";
import AboutApproachSection from "@/components/pages/about-us-page/AboutApproachSection";
import AboutClientsSection from "@/components/pages/about-us-page/AboutClientsSection";
import { initAboutStoryAnimations } from "@/utils/animations/about-story-animations";
import { initAboutClientsAnimations } from "@/utils/animations/about-clients-animations";
import { getLocalizedRoute } from "@/utils/navigation";
import { initAboutApproachAnimations } from "@/utils/animations/about-approach-animations";
import { initCTAAnimations } from "@/utils/animations/cta-animation";
import AboutCTASection from "@/components/pages/about-us-page/AboutCTASection";
import { initHeroAnimations } from "@/utils/animations/hero-animations";

export default function AboutPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [
      initHeroAnimations,
      initAboutStoryAnimations,
      initAboutApproachAnimations,
      initAboutClientsAnimations,
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
      name: t("nav.about"),
      href: getLocalizedRoute("sobre-nosotros", language),
    },
  ];

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
