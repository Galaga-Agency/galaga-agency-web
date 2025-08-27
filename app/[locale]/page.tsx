"use client";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useTranslation } from "@/hooks/useTranslation";
import AboutSection from "@/components/pages/homepage/AboutSection";
import CTASection from "@/components/pages/homepage/CTASection";
import ServicesSection from "@/components/pages/homepage/ServicesSection";
import CaseStudiesSection from "@/components/pages/homepage/CaseStudiesSection";
import PartnersSection from "@/components/pages/homepage/PartnersSection";
import WhyChooseUsSection from "@/components/pages/homepage/WhyChooseUsSection";
import { HeroParallax } from "@/components/pages/homepage/HeroParallax";
import { initHeroTitleAnimation } from "@/utils/animations/homepage-hero-animation";
import { initHeroScrollAnimation } from "@/utils/animations/homepage-hero-scroll-animation";
import { initCarouselAnimation } from "@/utils/animations/carousel-animation";
import { initBoucingBubblesAnimation } from "@/utils/animations/bouncing-bubbles-animations";
import { initEntranceAnimations } from "@/utils/animations/entrance-animations";
import { initAlternateBlocksAnimations } from "@/utils/animations/alternate-blocks-animations";
import { initVideoPlayerAnimation } from "@/utils/animations/video-player-animations";
import { parallaxItems } from "@/data/hero-parallax-items";
import { init3DCardAnimations } from "@/utils/animations/3D-card-animations";

export default function HomePage() {
  const { t } = useTranslation();

  const items: { title: string; image: string; video?: string }[] =
    parallaxItems.map((item) => ({
      title: t(item.title),
      image: item.image,
      video: item.video, // This was missing!
    }));

  useGSAPAnimations({
    animations: [
      initHeroScrollAnimation,
      initHeroTitleAnimation,
      initVideoPlayerAnimation,
      initEntranceAnimations,
      initAlternateBlocksAnimations,
      initBoucingBubblesAnimation,
      init3DCardAnimations,
      initCarouselAnimation,
    ],
    delay: 100,
  });

  return (
    <>
      <HeroParallax parallaxItems={items} />
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
