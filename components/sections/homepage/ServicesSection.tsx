"use client";
import ServiceCard from "@/components/ServiceCard";
import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/data/services";
import { useState } from "react";

export default function ServicesSection() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getUpdatedTheme = (oldTheme: string) => {
    const themeMap = {
      'primary': 'teal',
      'creative': 'violeta', 
      'accent': 'turquesa',
      'warm': 'mandarina',
      'secondary': 'azul-profundo',
      'electric': 'verde-azulado'
    };
    return themeMap[oldTheme as keyof typeof themeMap] || oldTheme;
  };

  const handleCardHover = (cardIndex: number, isHovered: boolean) => {
    setHoveredCard(isHovered ? cardIndex : null);
  };

  // Define neighbor pairs for the bento layout
  const getNeighborIndex = (cardIndex: number): number | null => {
    const neighborPairs = [
      [0, 1], // Row 1: small + large
      [2, 3], // Row 2: large + small  
      [4, 5]  // Row 3: small + large
    ];
    
    for (const [first, second] of neighborPairs) {
      if (cardIndex === first) return second;
      if (cardIndex === second) return first;
    }
    
    return null;
  };

  return (
    <section className="relative section overflow-hidden bg-gradient-to-br from-azul-profundo via-teal to-negro">

      <div className="relative z-10">
        {/* Enhanced section header */}
        <div className="text-center pb-16">
          <div className="inline-block p-3 mb-6">
            <h2 className="section-title text-blanco pb-0 mb-0">
              {t("services.title")}
            </h2>
          </div>
          <p className="text-large text-hielo leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="section-break mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                theme={getUpdatedTheme(service.theme)}
                size="mobile"
                isHovered={hoveredCard === index}
                isNeighborHovered={false}
                onHover={(isHovered) => handleCardHover(index, isHovered)}
              />
            ))}
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 auto-rows-[auto]">
            {/* Row 1: Small + Large with neighbor interaction */}
            <ServiceCard
              icon={services[0].icon}
              title={services[0].title}
              description={services[0].description}
              features={services[0].features}
              theme={getUpdatedTheme(services[0].theme)}
              size="small"
              isHovered={hoveredCard === 0}
              isNeighborHovered={hoveredCard === 1}
              onHover={(isHovered) => handleCardHover(0, isHovered)}
            />
            <ServiceCard
              icon={services[1].icon}
              title={services[1].title}
              description={services[1].description}
              features={services[1].features}
              theme={getUpdatedTheme(services[1].theme)}
              size="large"
              isHovered={hoveredCard === 1}
              isNeighborHovered={hoveredCard === 0}
              onHover={(isHovered) => handleCardHover(1, isHovered)}
            />
                     
            {/* Row 2: Large + Small with neighbor interaction */}
            <ServiceCard
              icon={services[2].icon}
              title={services[2].title}
              description={services[2].description}
              features={services[2].features}
              theme={getUpdatedTheme(services[2].theme)}
              size="large"
              isHovered={hoveredCard === 2}
              isNeighborHovered={hoveredCard === 3}
              onHover={(isHovered) => handleCardHover(2, isHovered)}
            />
            <ServiceCard
              icon={services[3].icon}
              title={services[3].title}
              description={services[3].description}
              features={services[3].features}
              theme={getUpdatedTheme(services[3].theme)}
              size="small"
              isHovered={hoveredCard === 3}
              isNeighborHovered={hoveredCard === 2}
              onHover={(isHovered) => handleCardHover(3, isHovered)}
            />
                     
            {/* Row 3: Small + Large with neighbor interaction */}
            <ServiceCard
              icon={services[4].icon}
              title={services[4].title}
              description={services[4].description}
              features={services[4].features}
              theme={getUpdatedTheme(services[4].theme)}
              size="small"
              isHovered={hoveredCard === 4}
              isNeighborHovered={hoveredCard === 5}
              onHover={(isHovered) => handleCardHover(4, isHovered)}
            />
            <ServiceCard
              icon={services[5].icon}
              title={services[5].title}
              description={services[5].description}
              features={services[5].features}
              theme={getUpdatedTheme(services[5].theme)}
              size="large"
              isHovered={hoveredCard === 5}
              isNeighborHovered={hoveredCard === 4}
              onHover={(isHovered) => handleCardHover(5, isHovered)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}