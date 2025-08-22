"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { services } from "@/data/services";

export default function ServicesOverviewSection() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
          <span className="fade-in-up opacity-0 text-teal font-semibold tracking-wider uppercase text-sm">
            {t("services-page.overview-section.eyebrow")}
          </span>

          <h2 className="fade-in-up opacity-0 section-title text-teal pt-4 pb-6">
            {t("services-page.overview-section.title")}
          </h2>

          <p className="fade-in-up opacity-0 text-lg md:text-xl text-negro/70 w-full container-tablet">
            {t("services-page.overview-section.subtitle")}
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="services-overview-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="stagger-bounce-in-up opacity-0 h-full w-full"
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