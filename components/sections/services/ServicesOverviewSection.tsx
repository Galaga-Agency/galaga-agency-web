"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import {
  FiTarget,
  FiZap,
  FiStar,
  FiEye,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

interface Service {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  slug: string;
  image: string;
  theme: string;
}

export default function ServicesOverviewSection() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: <FiTarget />,
      titleKey: "services.strategy.title",
      descriptionKey: "services.strategy.description",
      featuresKeys: [
        "services.strategy.feature1",
        "services.strategy.feature2",
        "services.strategy.feature3",
      ],
      slug: "strategy",
      image: "/assets/img/servicios/consultoria.jpg",
      theme: "teal",
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
      slug: "automation",
      image: "/assets/img/servicios/automatizacion.jpg",
      theme: "azul-profundo",
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
      slug: "innovation",
      image: "/assets/img/servicios/innovacion.png",
      theme: "mandarina",
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
      slug: "immersive",
      image: "/assets/img/servicios/gaming.png",
      theme: "violeta",
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
      slug: "training",
      image: "/assets/img/servicios/formacion.jpg",
      theme: "azul-profundo",
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
      slug: "grants",
      image: "/assets/img/servicios/subvenciones.png",
      theme: "teal",
    },
  ];

  // Define neighbor relationships for a 3-column grid
  const getNeighbors = (index: number): number[] => {
    const neighbors: { [key: number]: number[] } = {
      0: [1, 3], // Top-left: right and below
      1: [0, 2, 3, 4], // Top-center: left, right, and both below
      2: [1, 4, 5], // Top-right: left and below
      3: [0, 1, 4], // Bottom-left: above and right
      4: [1, 2, 3, 5], // Bottom-center: all around
      5: [2, 4], // Bottom-right: above and left
    };
    return neighbors[index] || [];
  };

  const handleCardHover = (cardIndex: number, isHovered: boolean) => {
    setHoveredCard(isHovered ? cardIndex : null);
  };

  const isNeighbor = (cardIndex: number): boolean => {
    if (hoveredCard === null) return false;
    return getNeighbors(hoveredCard).includes(cardIndex);
  };

  return (
    <section className="services-overview-section section bg-hielo/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center pb-16">
          <span className="services-overview-eyebrow text-teal font-semibold tracking-wider uppercase text-sm">
            {t("services-page.overview.eyebrow")}
          </span>
          
          <h2 className="services-overview-title section-title text-teal pt-4 pb-6">
            {t("services-page.overview.title")}
          </h2>
          
          <p className="services-overview-subtitle text-lg md:text-xl text-negro/70 w-full container-tablet">
            {t("services-page.overview.subtitle")}
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="services-overview-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-wrapper h-full w-full"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <ServiceCard
                service={service}
                index={index}
                isHovered={hoveredCard === index}
                isNeighborHovered={isNeighbor(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}