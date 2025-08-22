"use client";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import AboutSection from "@/components/pages/homepage/AboutSection";
import CTASection from "@/components/pages/homepage/CTASection";
import HeroSection from "@/components/pages/homepage/HeroSection";
import ServicesSection from "@/components/pages/homepage/ServicesSection";
import CaseStudiesSection from "@/components/pages/homepage/CaseStudiesSection";
import PartnersSection from "@/components/pages/homepage/PartnersSection";
import { initHeroTitleAnimation } from "@/utils/animations/homepage-hero-animation";
import { initHeroScrollAnimation } from "@/utils/animations/homepage-hero-scroll-animation";
import { initCarouselAnimation } from "@/utils/animations/carousel-animation";
import { initBoucingBubblesAnimation } from "@/utils/animations/bouncing-bubbles-animations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import WhyChooseUsSection from "@/components/pages/homepage/WhyChooseUsSection";
import { initAlternateBlocksAnimations } from "@/utils/animations/alternate-blocks-animations";

export default function HomePage() {
  useGSAPAnimations({
    animations: [
      initHeroScrollAnimation,
      initHeroTitleAnimation,
      initEntranceAnimations,
      initAlternateBlocksAnimations,
      initBoucingBubblesAnimation,
      initCarouselAnimation,
    ],
    delay: 100,
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="relative section">
        {/* Diagonal background layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(195,229,239,0.4) 0%, rgba(76,188,197,0.1) 50%, rgba(255,255,255,1) 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(195,229,239,0.2) 50%, rgba(255,255,255,1) 100%)",
              clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
            }}
          ></div>
        </div>

        <WhyChooseUsSection />
        <CaseStudiesSection />
      </div>
      <PartnersSection />
      <CTASection />
    </>
  );
}
