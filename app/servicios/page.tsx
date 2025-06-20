"use client";

import { useGSAP } from "@gsap/react";
import Footer from "@/components/layout/Footer";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesOverviewSection from "@/components/sections/services/ServicesOverviewSection";
import ServicesProcessSection from "@/components/sections/services/ServicesProcessSection";
import CTASection from "@/components/sections/homepage/CTASection";
import { initServicesHeroAnimations } from "@/utils/services-hero-animations";
import { initServicesOverviewAnimations } from "@/utils/services-overview-animations";
import { initServicesProcessAnimations } from "@/utils/services-process-animations";
import { initCTAAnimations } from "@/utils/homepage-cta-animation";

export default function ServicesPage() {
  useGSAP(() => {
    const timer = setTimeout(() => {
      initServicesHeroAnimations();
      initServicesOverviewAnimations();
      initServicesProcessAnimations();
      initCTAAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="w-full">
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <ServicesProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}