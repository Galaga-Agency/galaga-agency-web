"use client";

import { useGSAP } from "@gsap/react";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/homepage/AboutSection";
import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";
import { initHeroTitleAnimation } from "@/utils/hero-title-animation";
import { initHeroScrollAnimation } from "@/utils/hero-scroll-animation";

export default function HomePage() {
  useGSAP(() => {
    const timer = setTimeout(() => {
      initHeroTitleAnimation();
      initHeroScrollAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}