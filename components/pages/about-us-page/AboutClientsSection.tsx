"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { featuredProjects } from "@/data/featured-projects";
import { clientCategories } from "@/data/client-categories";
import ClientCategoryCard from "@/components/pages/about-us-page/ClientCategoryCard";
import FeaturedClientCard from "@/components/pages/about-us-page/FeaturedClientCard";
import { useState } from "react";

export default function AboutClientsSection() {
  const { t } = useTranslation();
  const [hoveredCategoryCard, setHoveredCategoryCard] = useState<number | null>(
    null
  );
  const [hoveredFeaturedCard, setHoveredFeaturedCard] = useState<number | null>(
    null
  );

  // Category cards neighbor relationships (3-column grid)
  const getCategoryNeighbors = (index: number): number[] => {
    const neighbors: { [key: number]: number[] } = {
      0: [1, 3], // Top-left
      1: [0, 2, 3, 4], // Top-center
      2: [1, 4, 5], // Top-right
      3: [0, 1, 4], // Bottom-left
      4: [1, 2, 3, 5], // Bottom-center
      5: [2, 4], // Bottom-right
    };
    return neighbors[index] || [];
  };

  const handleCategoryCardHover = (cardIndex: number, isHovered: boolean) => {
    setHoveredCategoryCard(isHovered ? cardIndex : null);
  };

  const handleFeaturedCardHover = (cardIndex: number, isHovered: boolean) => {
    setHoveredFeaturedCard(isHovered ? cardIndex : null);
  };

  const isCategoryNeighbor = (cardIndex: number): boolean => {
    if (hoveredCategoryCard === null) return false;
    return getCategoryNeighbors(hoveredCategoryCard).includes(cardIndex);
  };

  return (
    <section className="about-clients-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/60 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="fade-in-up opacity-0 about-clients-eyebrow inline-flex items-center gap-3 pb-6">
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("about-page.clients-section.eyebrow")}
            </span>
          </div>

          <h2
            className="fade-in-up opacity-0 about-clients-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6"
            style={{ animationDelay: "0.2s" }}
          >
            {t("about-page.clients-section.title")}
          </h2>

          <p
            className="fade-in-up opacity-0 about-clients-subtitle text-lg md:text-xl text-grafito font-light leading-relaxed px-4"
            style={{ animationDelay: "0.4s" }}
          >
            {t("about-page.clients-section.subtitle")}
          </p>
        </div>

        {/* Interactive Client Categories Grid */}
        <div className="about-clients-grid grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 md:pb-24">
          {clientCategories.map((category, index) => (
            <div
              key={index}
              className={`
                stagger-bounce-in-up opacity-0
                client-category-wrapper
                transition-all duration-500 ease-out
                ${
                  hoveredCategoryCard === index
                    ? "scale-[1.01] -translate-y-1 z-20"
                    : isCategoryNeighbor(index)
                    ? "scale-[0.99] opacity-90"
                    : "scale-100"
                }
              `}
              onMouseEnter={() => handleCategoryCardHover(index, true)}
              onMouseLeave={() => handleCategoryCardHover(index, false)}
            >
              <ClientCategoryCard
                category={category}
                isHovered={hoveredCategoryCard === index}
                isNeighborHovered={isCategoryNeighbor(index)}
              />
            </div>
          ))}
        </div>

        {/* Featured Success Stories */}
        <div className="about-clients-featured">
          <div className="text-center pb-12 md:pb-16">
            <h3
              className="fade-in-up opacity-0 about-clients-featured-title text-3xl md:text-4xl font-bold text-negro pb-4"
              style={{ animationDelay: "0.2s" }}
            >
              {t("about-page.clients-section.featured.title")}
            </h3>
            <p
              className="fade-in-up opacity-0 about-clients-featured-subtitle text-lg text-grafito"
              style={{ animationDelay: "0.4s" }}
            >
              {t("about-page.clients-section.featured.subtitle")}
            </p>
          </div>

          {/* Interactive Featured Projects List */}
          <div className="about-clients-featured-list flex flex-col gap-12 md:gap-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  ${index === 0 ? "fade-in-left" : "fade-in-right"} opacity-0
                  featured-client-wrapper
                  transition-all duration-500 ease-out
                  ${
                    hoveredFeaturedCard === index
                      ? "scale-[1.005] z-10"
                      : hoveredFeaturedCard !== null &&
                        hoveredFeaturedCard !== index
                      ? "opacity-95"
                      : "scale-100"
                  }
                `}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                onMouseEnter={() => handleFeaturedCardHover(index, true)}
                onMouseLeave={() => handleFeaturedCardHover(index, false)}
              >
                <FeaturedClientCard
                  project={project}
                  index={index}
                  isHovered={hoveredFeaturedCard === index}
                  isNeighborHovered={
                    hoveredFeaturedCard !== null &&
                    hoveredFeaturedCard !== index
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
