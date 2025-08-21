"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { services } from "@/data/services";

export default function ServicesOverviewSection() {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
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
    <section 
      ref={elementRef}
      className="services-overview-section section bg-hielo/20"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center pb-16">
          <span 
            className={`services-overview-eyebrow text-teal font-semibold tracking-wider uppercase text-sm transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            {t("services-page.overview-section.eyebrow")}
          </span>

          <h2 
            className={`services-overview-title section-title text-teal pt-4 pb-6 transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {t("services-page.overview-section.title")}
          </h2>

          <p 
            className={`services-overview-subtitle text-lg md:text-xl text-negro/70 w-full container-tablet transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {t("services-page.overview-section.subtitle")}
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="services-overview-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card-wrapper h-full w-full transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${600 + (index * 150)}ms` }}
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