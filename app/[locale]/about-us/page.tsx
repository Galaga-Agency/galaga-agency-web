"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AboutHeroSection from "@/components/pages/about-us-page/AboutHeroSection";
import AboutStorySection from "@/components/pages/about-us-page/AboutStorySection";
import AboutApproachSection from "@/components/pages/about-us-page/AboutApproachSection";
import AboutClientsSection from "@/components/pages/about-us-page/AboutClientsSection";
import AboutCTASection from "@/components/pages/about-us-page/AboutCTASection";
import { getLocalizedRoute } from "@/utils/navigation";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { initHeroGridAnimation } from "@/utils/animations/grid-animations";
import { animateHero3D } from "@/utils/animations/3D-models-animations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { initAlternateBlocksAnimations } from "@/utils/animations/alternate-blocks-animations";
import { finishPageTransition } from "@/utils/animations/page-transition-animation";

export default function AboutPage() {
  const { t, language } = useTranslation();

  // Breadcrumbs
  const breadcrumbs = [
    {
      name: t("nav.home"),
      href: getLocalizedRoute("", language),
    },
    {
      name: t("nav.about"),
      href: getLocalizedRoute("about-us", language),
    },
  ];

  useGSAPAnimations({
    animations: [
      initHeroGridAnimation, 
      animateHero3D,
      initEntranceAnimations, 
      initAlternateBlocksAnimations, 
      finishPageTransition, 
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
