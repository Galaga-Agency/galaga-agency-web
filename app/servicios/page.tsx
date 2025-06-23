"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesOverviewSection from "@/components/sections/services/ServicesOverviewSection";
import ServicesProcessSection from "@/components/sections/services/ServicesProcessSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initServicesHeroAnimations } from "@/utils/animations/services-hero-animations";
import { initServicesOverviewAnimations } from "@/utils/animations/services-overview-animations";
import { initServicesProcessAnimations } from "@/utils/animations/services-process-animations";
import { initCTAAnimations } from "@/utils/animations/homepage-cta-animation";

export default function services() {
  useGSAPAnimations({
    animations: [
      initServicesHeroAnimations,
      initServicesOverviewAnimations,
      initServicesProcessAnimations,
      initCTAAnimations,
    ],
    delay: 100,
  });

  return (
    <>
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServicesProcessSection />
      <CTASection />
    </>
  );
}
