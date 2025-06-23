"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import AboutHeroSection from "@/components/sections/about-us-page/AboutHeroSection";
import AboutStorySection from "@/components/sections/about-us-page/AboutStorySection";
import AboutApproachSection from "@/components/sections/about-us-page/AboutApproachSection";
import AboutClientsSection from "@/components/sections/about-us-page/AboutClientsSection";
import { initAboutHeroAnimations } from "@/utils/animations/about-hero-animations";
import { initAboutStoryAnimations } from "@/utils/animations/about-story-animations";
import { initAboutClientsAnimations } from "@/utils/animations/about-clients-animations";
import { initAboutApproachAnimations } from "@/utils/animations/about-approach-animations";

export default function AboutPage() {
  useGSAPAnimations({
    animations: [
      initAboutHeroAnimations,
      initAboutStoryAnimations,
      initAboutClientsAnimations,
      initAboutApproachAnimations
    ],
    delay: 100
  });

  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutApproachSection />
      <AboutClientsSection />
    </>
  );
}