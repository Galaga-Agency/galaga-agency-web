"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/data/services";
import HomeServiceCard from "@/components/pages/homepage/HomeServiceCard";

export default function ServicesSection() {
  const { t } = useTranslation();

  const serviceConfigs = [
    {
      ...services[0],
      theme: "teal" as const,
    },
    {
      ...services[1],
      theme: "azul-profundo" as const,
    },
    {
      ...services[2],
      theme: "mandarina" as const,
    },
    {
      ...services[3],
      theme: "violeta" as const,
    },
    {
      ...services[4],
      theme: "teal" as const,
    },
    {
      ...services[5],
      theme: "azul-profundo" as const,
    },
  ];

  return (
    <section className="relative section overflow-hidden bg-gradient-to-br from-azul-profundo via-teal to-negro">
      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center pb-16">
          <h2 className="fade-in-up section-title text-blanco pb-8 mb-0">
            {t("services-section.title")}
          </h2>
          <p className="fade-in-up text-lg md:text-xl text-hielo leading-relaxed">
            {t("services-section.subtitle")}
          </p>
        </div>

        {/* Grid — uniform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {serviceConfigs.map((service, index) => (
            <div key={index} className="fade-in-up">
              <HomeServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                theme={service.theme}
                slug={service.slug}
                hasRedirection={service.hasRedirection ?? true}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
