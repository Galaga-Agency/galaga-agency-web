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
import { useRef, useEffect, useState } from "react";

export default function MarketingInmersivoFeaturesSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const features = [
    {
      icon: FaDesktop,
      title:
        "service-details-pages.immersive-marketing.features.ar-displays.title",
      description:
        "service-details-pages.immersive-marketing.features.ar-displays.description",
      image: "/assets/img/servicios/immersive-marketing/ar-displays.png",
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
      title:
        "service-details-pages.immersive-marketing.features.gamification.title",
      description:
        "service-details-pages.immersive-marketing.features.gamification.description",
      image: "/assets/img/servicios/immersive-marketing/gamification.png",
      theme: "teal" as const,
    },
    {
      icon: FaVrCardboard,
      title:
        "service-details-pages.immersive-marketing.features.virtual-reality.title",
      description:
        "service-details-pages.immersive-marketing.features.virtual-reality.description",
      image: "/assets/img/servicios/immersive-marketing/virtual-reality.png",
      theme: "azul-profundo" as const,
    },
    {
      icon: FaServer,
      title:
        "service-details-pages.immersive-marketing.features.content-management.title",
      description:
        "service-details-pages.immersive-marketing.features.content-management.description",
      image: "/assets/img/servicios/immersive-marketing/content-management.png",
      theme: "mandarina" as const,
    },
    {
      icon: FaPlay,
      title:
        "service-details-pages.immersive-marketing.features.ar-experiences.title",
      description:
        "service-details-pages.immersive-marketing.features.ar-experiences.description",
      image: "/assets/img/servicios/immersive-marketing/ar-experience.png",
      theme: "violeta" as const,
    },
    {
      icon: FaChartLine,
      title:
        "service-details-pages.immersive-marketing.features.behavior-analytics.title",
      description:
        "service-details-pages.immersive-marketing.features.behavior-analytics.description",
      image: "/assets/img/servicios/immersive-marketing/behavior-analytics.png",
      theme: "teal" as const,
    },
    {
      icon: FaHandPointer,
      title:
        "service-details-pages.immersive-marketing.features.interactive-totems.title",
      description:
        "service-details-pages.immersive-marketing.features.interactive-totems.description",
      image: "/assets/img/servicios/immersive-marketing/interactive-totems.png",
      theme: "azul-profundo" as const,
    },
    {
      icon: FaLightbulb,
      title:
        "service-details-pages.immersive-marketing.features.sensorial-integration.title",
      description:
        "service-details-pages.immersive-marketing.features.sensorial-integration.description",
      image:
        "/assets/img/servicios/immersive-marketing/sensorial-integration.png",
      theme: "mandarina" as const,
    },
    {
      icon: FaCouch,
      title:
        "service-details-pages.immersive-marketing.features.dynamic-furniture.title",
      description:
        "service-details-pages.immersive-marketing.features.dynamic-furniture.description",
      image: "/assets/img/servicios/immersive-marketing/dynamic-furniture.png",
      theme: "violeta" as const,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="marketing-inmersivo-features-section section bg-gradient-to-br from-azul-profundo via-teal to-negro relative overflow-hidden"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(76, 188, 197, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76, 188, 197, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      />

      <div className="container relative z-10 pb-0 md:pb-24">
        {/* Header */}
        <div className="text-center pb-16">
          <h2 className="section-title text-blanco pb-8 mb-0 fade-in-up opacity-0">
            {t("service-details-pages.immersive-marketing.features.title")}
          </h2>
          <p className="text-lg md:text-xl text-hielo leading-relaxed slide-in-up opacity-0">
            {t("service-details-pages.immersive-marketing.features.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-in-up opacity-0"
              style={{
                animationDelay: `${index * 0.05}s`,
                transform: `translateY(${(index % 3) * 20}px)`,
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={t(feature.title)}
                description={t(feature.description)}
                image={feature.image}
                theme={feature.theme}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
