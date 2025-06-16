"use client";

import { useGSAP } from "@gsap/react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/homepage/AboutSection";
import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";
import { initHeroTitleAnimation } from "@/utils/hero-title-animation";
import { initSlideUpAnimation } from "@/utils/slide-up-animation";

export default function HomePage() {
  useGSAP(() => {
    const timer = setTimeout(() => {
      initHeroTitleAnimation();
      initSlideUpAnimation()
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full text-center px-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
