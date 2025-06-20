"use client";

import ServiceCard from "@/components/ServiceCard";
import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/data/services";

export default function ServicesSection() {
  const { t } = useTranslation();

  // Map old theme names to your new color system
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

  return (
    <section className="relative section overflow-hidden bg-gradient-to-br from-azul-profundo via-teal to-negro">
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center pb-16">
          <h2 className="section-title text-blanco pb-6">
            {t("services.title")}
          </h2>
          <p className="text-large text-hielo">
            {t("services.subtitle")}
          </p>
        </div>

        {/* BENTO LAYOUT  */}
        <div className="section-break mx-auto px-4">
          {/* Mobile: Single column */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                theme={getUpdatedTheme(service.theme)}
                size="mobile"
              />
            ))}
          </div>

          {/* Tablet and Desktop: Bento layout */}
          <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 auto-rows-[auto]">
            {/* Row 1: Small (1/3) + Large (2/3) */}
            <ServiceCard
              icon={services[0].icon}
              title={services[0].title}
              description={services[0].description}
              features={services[0].features}
              theme={getUpdatedTheme(services[0].theme)}
              size="small"
            />
            <ServiceCard
              icon={services[1].icon}
              title={services[1].title}
              description={services[1].description}
              features={services[1].features}
              theme={getUpdatedTheme(services[1].theme)}
              size="large"
            />
            
            {/* Row 2: Large (2/3) + Small (1/3) */}
            <ServiceCard
              icon={services[2].icon}
              title={services[2].title}
              description={services[2].description}
              features={services[2].features}
              theme={getUpdatedTheme(services[2].theme)}
              size="large"
            />
            <ServiceCard
              icon={services[3].icon}
              title={services[3].title}
              description={services[3].description}
              features={services[3].features}
              theme={getUpdatedTheme(services[3].theme)}
              size="small"
            />
            
            {/* Row 3: Small (1/3) + Large (2/3) */}
            <ServiceCard
              icon={services[4].icon}
              title={services[4].title}
              description={services[4].description}
              features={services[4].features}
              theme={getUpdatedTheme(services[4].theme)}
              size="small"
            />
            <ServiceCard
              icon={services[5].icon}
              title={services[5].title}
              description={services[5].description}
              features={services[5].features}
              theme={getUpdatedTheme(services[5].theme)}
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
}