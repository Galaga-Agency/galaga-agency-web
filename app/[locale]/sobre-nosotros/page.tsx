"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AboutHeroSection from "@/components/sections/about-us-page/AboutHeroSection";
import AboutStorySection from "@/components/sections/about-us-page/AboutStorySection";
import AboutApproachSection from "@/components/sections/about-us-page/AboutApproachSection";
import AboutClientsSection from "@/components/sections/about-us-page/AboutClientsSection";
import { initAboutHeroAnimations } from "@/utils/animations/about-hero-animations";
import { initAboutStoryAnimations } from "@/utils/animations/about-story-animations";
import { initAboutClientsAnimations } from "@/utils/animations/about-clients-animations";
import { getLocalizedRoute } from "@/utils/navigation";

export default function AboutPage() {
  const { t, language } = useTranslation();

  useGSAPAnimations({
    animations: [
      initAboutHeroAnimations,
      initAboutStoryAnimations,
      initAboutClientsAnimations,
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
    </>
  );
}
