"use client";

import { useGSAP } from "@gsap/react";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/sections/about-us-page/AboutHeroSection";
import AboutStorySection from "@/components/sections/about-us-page/AboutStorySection";
import AboutApproachSection from "@/components/sections/about-us-page/AboutApproachSection";
import AboutClientsSection from "@/components/sections/about-us-page/AboutClientsSection";
import { initAboutHeroAnimations } from "@/utils/about-hero-animations";
import { initAboutStoryAnimations } from "@/utils/about-story-animations";
import { initAboutClientsAnimations } from "@/utils/about-clients-animations";
import { initAboutApproachAnimations } from "@/utils/about-approach-animations";

export default function AboutPage() {
  useGSAP(() => {
    const timer = setTimeout(() => {}, 100);

    initAboutHeroAnimations();
    initAboutStoryAnimations();
    initAboutClientsAnimations();
    initAboutApproachAnimations();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="w-full">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutApproachSection />
        <AboutClientsSection />
      </main>
      <Footer />
    </>
  );
}
