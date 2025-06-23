"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ServiceCard from "./ServiceCard";
import {
  FiTarget,
  FiZap,
  FiStar,
  FiEye,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

interface RawService {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  color: string;
  accent: string;
}

export default function ServicesOverviewSection() {
  const { t } = useTranslation();

  const services: RawService[] = [
    {
      icon: <FiTarget />,
      titleKey: "services.strategy.title",
      descriptionKey: "services.strategy.description",
      featuresKeys: [
        "services.strategy.feature1",
        "services.strategy.feature2",
        "services.strategy.feature3",
      ],
      color: "teal",
      accent: "turquesa",
    },
    {
      icon: <FiZap />,
      titleKey: "services.automation.title",
      descriptionKey: "services.automation.description",
      featuresKeys: [
        "services.automation.feature1",
        "services.automation.feature2",
        "services.automation.feature3",
      ],
      color: "mandarina",
      accent: "naranja-tostado",
    },
    {
      icon: <FiStar />,
      titleKey: "services.innovation.title",
      descriptionKey: "services.innovation.description",
      featuresKeys: [
        "services.innovation.feature1",
        "services.innovation.feature2",
        "services.innovation.feature3",
      ],
      color: "violeta",
      accent: "azul-profundo",
    },
    {
      icon: <FiEye />,
      titleKey: "services.immersive.title",
      descriptionKey: "services.immersive.description",
      featuresKeys: [
        "services.immersive.feature1",
        "services.immersive.feature2",
        "services.immersive.feature3",
      ],
      color: "verde-azulado",
      accent: "turquesa",
    },
    {
      icon: <FiBookOpen />,
      titleKey: "services.training.title",
      descriptionKey: "services.training.description",
      featuresKeys: [
        "services.training.feature1",
        "services.training.feature2",
        "services.training.feature3",
      ],
      color: "azul-profundo",
      accent: "teal",
    },
    {
      icon: <FiAward />,
      titleKey: "services.grants.title",
      descriptionKey: "services.grants.description",
      featuresKeys: [
        "services.grants.feature1",
        "services.grants.feature2",
        "services.grants.feature3",
      ],
      color: "turquesa",
      accent: "verde-azulado",
    },
  ];

  return (
    <section className="services-overview-section section relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/15 to-blanco"
          style={{ clipPath: "polygon(0 0,100% 0,100% 70%,0 50%)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{ clipPath: "polygon(0 50%,100% 70%,100% 100%,0 100%)" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="services-overview-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="text-teal font-semibold uppercase text-sm">
              {t("service-page.overview.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300" />
          </div>
          <h2 className="services-overview-title text-4xl md:text-5xl lg:text-6xl font-black text-teal pb-6">
            {t("services.title")}
          </h2>
          <p className="services-overview-subtitle text-lg md:text-xl text-grafito px-4">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-overview-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              title={t(s.titleKey)}
              description={t(s.descriptionKey)}
              features={s.featuresKeys.map((k) => t(k))}
              color={s.color}
              accent={s.accent}
              linkSlug={s.titleKey.split(".").pop()!}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
