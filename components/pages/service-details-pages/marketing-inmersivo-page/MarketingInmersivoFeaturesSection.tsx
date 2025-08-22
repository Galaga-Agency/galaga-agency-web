"use client";

import { useTranslation } from "@/hooks/useTranslation";
import {
  FaDesktop,
  FaEye,
  FaMobile,
  FaCube,
  FaGamepad,
  FaVrCardboard,
  FaServer,
  FaPlay,
  FaChartLine,
  FaHandPointer,
  FaLightbulb,
  FaCouch,
} from "react-icons/fa";
import FeatureCard from "../FeatureCard";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function MarketingInmersivoFeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: FaDesktop,
      title:
        "service-details-pages.immersive-marketing.features.ar-displays.title",
      description:
        "service-details-pages.immersive-marketing.features.ar-displays.description",
      image:
        "/assets/img/servicios/immersive-marketing/ar-displays.png",
      theme: "teal" as const,
    },
    {
      icon: FaEye,
      title:
        "service-details-pages.immersive-marketing.features.interactive-corners.title",
      description:
        "service-details-pages.immersive-marketing.features.interactive-corners.description",
      image:
        "/assets/img/servicios/immersive-marketing/interactive-corners.png",
      theme: "azul-profundo" as const,
    },
    {
      icon: FaMobile,
      title:
        "service-details-pages.immersive-marketing.features.smart-mirrors.title",
      description:
        "service-details-pages.immersive-marketing.features.smart-mirrors.description",
      image: "/assets/img/servicios/immersive-marketing/smart-mirror.png",
      theme: "mandarina" as const,
    },
    {
      icon: FaCube,
      title:
        "service-details-pages.immersive-marketing.features.virtual-tours.title",
      description:
        "service-details-pages.immersive-marketing.features.virtual-tours.description",
      image: "/assets/img/servicios/immersive-marketing/tour-virtuales.png",
      theme: "violeta" as const,
    },
    {
      icon: FaGamepad,
      title: "service-details-pages.immersive-marketing.features.gamification.title",
      description:
        "service-details-pages.immersive-marketing.features.gamification.description",
      image: "/assets/img/servicios/immersive-marketing/gamification.png",
      theme: "teal" as const,
    },
    {
      icon: FaVrCardboard,
      title: "service-details-pages.immersive-marketing.features.virtual-reality.title",
      description:
        "service-details-pages.immersive-marketing.features.virtual-reality.description",
      image: "/assets/img/servicios/immersive-marketing/virtual-reality.png",
      theme: "azul-profundo" as const,
    },
    {
      icon: FaServer,
      title: "service-details-pages.immersive-marketing.features.content-management.title",
      description:
        "service-details-pages.immersive-marketing.features.content-management.description",
      image:
        "/assets/img/servicios/immersive-marketing/content-management.png",
      theme: "mandarina" as const,
    },
    {
      icon: FaPlay,
      title: "service-details-pages.immersive-marketing.features.ar-experiences.title",
      description:
        "service-details-pages.immersive-marketing.features.ar-experiences.description",
      image: "/assets/img/servicios/immersive-marketing/ar-experience.png",
      theme: "violeta" as const,
    },
    {
      icon: FaChartLine,
      title: "service-details-pages.immersive-marketing.features.behavior-analytics.title",
      description:
        "service-details-pages.immersive-marketing.features.behavior-analytics.description",
      image: "/assets/img/servicios/immersive-marketing/behavior-analytics.png",
      theme: "teal" as const,
    },
    {
      icon: FaHandPointer,
      title: "service-details-pages.immersive-marketing.features.interactive-totems.title",
      description:
        "service-details-pages.immersive-marketing.features.interactive-totems.description",
      image: "/assets/img/servicios/immersive-marketing/interactive-totems.png",
      theme: "azul-profundo" as const,
    },
    {
      icon: FaLightbulb,
      title: "service-details-pages.immersive-marketing.features.sensorial-integration.title",
      description:
        "service-details-pages.immersive-marketing.features.sensorial-integration.description",
      image: "/assets/img/servicios/immersive-marketing/sensorial-integration.png",
      theme: "mandarina" as const,
    },
    {
      icon: FaCouch,
      title: "service-details-pages.immersive-marketing.features.dynamic-furniture.title",
      description:
        "service-details-pages.immersive-marketing.features.dynamic-furniture.description",
      image: "/assets/img/servicios/immersive-marketing/dynamic-furniture.png",
      theme: "violeta" as const,
    },
  ];

  return (
    <section className="marketing-inmersivo-features-section section bg-gradient-to-br from-azul-profundo via-teal to-negro relative overflow-hidden">
      <div className="container relative z-10 pb-0 md:pb-24">
        <div className="text-center">
          <h2 className="section-title text-blanco pb-8 mb-0 fade-in-up opacity-0">
            {t("service-details-pages.immersive-marketing.features.title")}
          </h2>
          <p className="text-lg md:text-xl text-hielo leading-relaxed slide-in-up opacity-0">
            {t("service-details-pages.immersive-marketing.features.subtitle")}
          </p>
        </div>

        {/* Mobile Layout - Simple grid with stagger bounce */}
        <div className="grid grid-cols-1 gap-6 pt-12 md:hidden">
          {features.map((feature, index) => (
            <div key={index} className="stagger-bounce-in-up opacity-0">
              <FeatureCard
                icon={feature.icon}
                title={t(feature.title)}
                description={t(feature.description)}
                image={feature.image}
                theme={feature.theme}
                size="medium"
              />
            </div>
          ))}
        </div>

        {/* Desktop Bento Grid - Beautiful asymmetric layout with varying animations */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8">
          {/* Row 1: 40% + 60% */}
          <div className="col-span-5 fade-in-left opacity-0">
            <FeatureCard
              icon={features[0].icon}
              title={t(features[0].title)}
              description={t(features[0].description)}
              image={features[0].image}
              theme={features[0].theme}
              size="medium"
            />
          </div>

          <div className="col-span-7 fade-in-right opacity-0">
            <FeatureCard
              icon={features[1].icon}
              title={t(features[1].title)}
              description={t(features[1].description)}
              image={features[1].image}
              theme={features[1].theme}
              size="medium"
            />
          </div>

          {/* Row 2: 70% + 30% */}
          <div className="col-span-8 bounce-in-up opacity-0">
            <FeatureCard
              icon={features[2].icon}
              title={t(features[2].title)}
              description={t(features[2].description)}
              image={features[2].image}
              theme={features[2].theme}
              size="medium"
            />
          </div>

          <div className="col-span-4 fade-in-right opacity-0">
            <FeatureCard
              icon={features[3].icon}
              title={t(features[3].title)}
              description={t(features[3].description)}
              image={features[3].image}
              theme={features[3].theme}
              size="medium"
            />
          </div>

          {/* Row 3: 35% + 65% */}
          <div className="col-span-4 fade-in-left opacity-0">
            <FeatureCard
              icon={features[4].icon}
              title={t(features[4].title)}
              description={t(features[4].description)}
              image={features[4].image}
              theme={features[4].theme}
              size="medium"
            />
          </div>

          <div className="col-span-8 fade-in-right opacity-0">
            <FeatureCard
              icon={features[5].icon}
              title={t(features[5].title)}
              description={t(features[5].description)}
              image={features[5].image}
              theme={features[5].theme}
              size="medium"
            />
          </div>

          {/* Row 4: 55% + 45% */}
          <div className="col-span-7 fade-in-left opacity-0">
            <FeatureCard
              icon={features[6].icon}
              title={t(features[6].title)}
              description={t(features[6].description)}
              image={features[6].image}
              theme={features[6].theme}
              size="medium"
            />
          </div>

          <div className="col-span-5 fade-in-right opacity-0">
            <FeatureCard
              icon={features[7].icon}
              title={t(features[7].title)}
              description={t(features[7].description)}
              image={features[7].image}
              theme={features[7].theme}
              size="medium"
            />
          </div>

          {/* Row 5: 25% + 50% + 25% */}
          <div className="col-span-3 fade-in-left opacity-0">
            <FeatureCard
              icon={features[8].icon}
              title={t(features[8].title)}
              description={t(features[8].description)}
              image={features[8].image}
              theme={features[8].theme}
              size="medium"
            />
          </div>

          <div className="col-span-6 bounce-in-up opacity-0">
            <FeatureCard
              icon={features[9].icon}
              title={t(features[9].title)}
              description={t(features[9].description)}
              image={features[9].image}
              theme={features[9].theme}
              size="medium"
            />
          </div>

          <div className="col-span-3 fade-in-right opacity-0">
            <FeatureCard
              icon={features[10].icon}
              title={t(features[10].title)}
              description={t(features[10].description)}
              image={features[10].image}
              theme={features[10].theme}
              size="medium"
            />
          </div>

          {/* Row 6: 60% + 40% */}
          <div className="col-span-7 fade-in-left opacity-0">
            <FeatureCard
              icon={features[11].icon}
              title={t(features[11].title)}
              description={t(features[11].description)}
              image={features[11].image}
              theme={features[11].theme}
              size="medium"
            />
          </div>

          <div className="col-span-5 fade-in-right opacity-0">
            <FeatureCard
              icon={FaHandPointer}
              title={t("service-details-pages.immersive-marketing.features.cta.title")}
              description={t("service-details-pages.immersive-marketing.features.cta.description")}
              image="/assets/img/servicios/immersive-marketing/cta-placeholder.png"
              theme="teal"
              size="medium"
              isCTA={true}
              ctaButtonText={t("service-details-pages.immersive-marketing.features.cta.primary")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}