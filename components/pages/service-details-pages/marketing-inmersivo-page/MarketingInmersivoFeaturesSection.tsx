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
} from "react-icons/fa";
import FeatureCard from "../FeatureCard";

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
        "/assets/img/servicios/immersive-marketing/pantallas-digitales.png",
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
  ];

  return (
    <section className="marketing-inmersivo-features-section section bg-gradient-to-br from-azul-profundo via-teal to-negro relative overflow-hidden">
      <div className="container relative z-10 pb-24">
        <div className="text-center">
          <h2 className="section-title text-blanco pb-8 mb-0">
            {t("service-details-pages.immersive-marketing.features.title")}
          </h2>
          <p className="text-lg md:text-xl text-hielo leading-relaxed">
            {t("service-details-pages.immersive-marketing.features.subtitle")}
          </p>
        </div>

        {/* Mobile Layout - Simple grid */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.title)}
              description={t(feature.description)}
              image={feature.image}
              theme={feature.theme}
              size="medium"
            />
          ))}
        </div>

        {/* Desktop Bento Grid - 12 column system with varying widths */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8">
          {/* Row 1: 40% + 60% */}
          <FeatureCard
            icon={features[0].icon}
            title={t(features[0].title)}
            description={t(features[0].description)}
            image={features[0].image}
            theme={features[0].theme}
            size="medium"
            className="col-span-5"
          />

          <FeatureCard
            icon={features[1].icon}
            title={t(features[1].title)}
            description={t(features[1].description)}
            image={features[1].image}
            theme={features[1].theme}
            size="medium"
            className="col-span-7"
          />

          {/* Row 2: 30% + 70% */}
          <FeatureCard
            icon={features[2].icon}
            title={t(features[2].title)}
            description={t(features[2].description)}
            image={features[2].image}
            theme={features[2].theme}
            size="medium"
            className="col-span-4"
          />

          <FeatureCard
            icon={features[3].icon}
            title={t(features[3].title)}
            description={t(features[3].description)}
            image={features[3].image}
            theme={features[3].theme}
            size="medium"
            className="col-span-8"
          />

          {/* Row 3: 65% + 35% */}
          <FeatureCard
            icon={features[4].icon}
            title={t(features[4].title)}
            description={t(features[4].description)}
            image={features[4].image}
            theme={features[4].theme}
            size="medium"
            className="col-span-8"
          />

          <FeatureCard
            icon={features[5].icon}
            title={t(features[5].title)}
            description={t(features[5].description)}
            image={features[5].image}
            theme={features[5].theme}
            size="medium"
            className="col-span-4"
          />

          {/* Row 4: 45% + 55% */}
          <FeatureCard
            icon={features[6].icon}
            title={t(features[6].title)}
            description={t(features[6].description)}
            image={features[6].image}
            theme={features[6].theme}
            size="medium"
            className="col-span-5"
          />

          <FeatureCard
            icon={features[7].icon}
            title={t(features[7].title)}
            description={t(features[7].description)}
            image={features[7].image}
            theme={features[7].theme}
            size="medium"
            className="col-span-7"
          />
        </div>
      </div>
    </section>
  );
}