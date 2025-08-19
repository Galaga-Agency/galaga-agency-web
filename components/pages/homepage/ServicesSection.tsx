"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/data/services";
import { useState } from "react";
import BentoServiceCard from "@/components/pages/homepage/BentoServiceCard";

export default function ServicesSection() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Service configurations
  const serviceConfigs = [
    {
      ...services[0],
      theme: "teal",
      image: "/assets/img/servicios/consultoria.jpg",
    },
    {
      ...services[1],
      theme: "azul-profundo",
      image: "/assets/img/servicios/automatizacion.jpg",
    },
    {
      ...services[2],
      theme: "mandarina",
      image: "/assets/img/servicios/innovacion.png",
    },
    {
      ...services[3],
      theme: "violeta",
      image: "/assets/img/servicios/gaming.png",
    },
    {
      ...services[4],
      theme: "azul-profundo",
      image: "/assets/img/servicios/formacion.jpg",
    },
    {
      ...services[5],
      theme: "teal",
      image: "/assets/img/servicios/subvenciones.png",
    },
  ];

  const handleCardHover = (cardIndex: number, isHovered: boolean) => {
    setHoveredCard(isHovered ? cardIndex : null);
  };

  return (
    <section className="relative section overflow-hidden bg-gradient-to-br from-azul-profundo via-teal to-negro">
      <div className="relative z-10">
        {/* Enhanced section header */}
        <div className="text-center pb-16">
          <div className="inline-block p-3 mb-6">
            <h2 className="section-title text-blanco pb-8 mb-0">
              {t("services-section.title")}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-hielo leading-relaxed">
            {t("services-section.subtitle")}
          </p>
        </div>

        <div className="section-break mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:hidden">
            {serviceConfigs.map((service, index) => (
              <BentoServiceCard
                key={index}
                service={service}
                size="mobile"
                isHovered={hoveredCard === index}
                isNeighborHovered={false}
                onHover={(isHovered) => handleCardHover(index, isHovered)}
              />
            ))}
          </div>

          <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-10 auto-rows-[auto]">
            {/* Row 1: Small + Large */}
            <BentoServiceCard
              service={serviceConfigs[0]}
              size="small"
              isHovered={hoveredCard === 0}
              isNeighborHovered={hoveredCard === 1}
              onHover={(isHovered) => handleCardHover(0, isHovered)}
            />
            <BentoServiceCard
              service={serviceConfigs[1]}
              size="large"
              isHovered={hoveredCard === 1}
              isNeighborHovered={hoveredCard === 0}
              onHover={(isHovered) => handleCardHover(1, isHovered)}
            />

            {/* Row 2: Large + Small */}
            <BentoServiceCard
              service={serviceConfigs[2]}
              size="large"
              isHovered={hoveredCard === 2}
              isNeighborHovered={hoveredCard === 3}
              onHover={(isHovered) => handleCardHover(2, isHovered)}
            />
            <BentoServiceCard
              service={serviceConfigs[3]}
              size="small"
              isHovered={hoveredCard === 3}
              isNeighborHovered={hoveredCard === 2}
              onHover={(isHovered) => handleCardHover(3, isHovered)}
            />

            {/* Row 3: Small + Large */}
            <BentoServiceCard
              service={serviceConfigs[4]}
              size="small"
              isHovered={hoveredCard === 4}
              isNeighborHovered={hoveredCard === 5}
              onHover={(isHovered) => handleCardHover(4, isHovered)}
            />
            <BentoServiceCard
              service={serviceConfigs[5]}
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