"use client";

import ServiceCard from "@/components/ServiceCard";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FaBullseye,
  FaCogs,
  FaRocket,
  FaGamepad,
  FaGraduationCap,
  FaDollarSign
} from "react-icons/fa";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: FaBullseye,
      title: "services.strategy.title",
      description: "services.strategy.description",
      features: [
        "services.strategy.feature1",
        "services.strategy.feature2",
      ],
      theme: "primary",
      size: "small", // 1/3 width
    },
    {
      icon: FaCogs,
      title: "services.automation.title",
      description: "services.automation.description",
      features: [
        "services.automation.feature1",
        "services.automation.feature2",
      ],
      theme: "creative",
      size: "large", // 2/3 width
    },
    {
      icon: FaRocket,
      title: "services.innovation.title",
      description: "services.innovation.description",
      features: [
        "services.innovation.feature1",
        "services.innovation.feature2",
        "services.innovation.feature3",
      ],
      theme: "accent",
      size: "large", // 2/3 width
    },
    {
      icon: FaGamepad,
      title: "services.immersive.title",
      description: "services.immersive.description",
      features: [
        "services.immersive.feature1",
        "services.immersive.feature2",
        "services.immersive.feature3",
      ],
      theme: "warm",
      size: "small", // 1/3 width
    },
    {
      icon: FaGraduationCap,
      title: "services.training.title",
      description: "services.training.description",
      features: [
        "services.training.feature1",
        "services.training.feature2",
        "services.training.feature3",
        "services.training.feature4",
      ],
      theme: "secondary",
      size: "small", // 1/3 width
    },
    {
      icon: FaDollarSign,
      title: "services.grants.title",
      description: "services.grants.description",
      features: [
        "services.grants.feature1",
        "services.grants.feature2",
        "services.grants.feature3",
        "services.grants.feature4",
      ],
      theme: "electric",
      size: "large", // 2/3 width
    },
  ];

  return (
    <section className="relative section overflow-hidden bg-gradient-to-br from-teal-900 via-slate-800 to-slate-900">
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center pb-16">
          <h2 className="section-title text-white pb-6">
            {t("services.title")}
          </h2>
          <p className="text-large text-neutral-300">
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
                theme={service.theme}
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
              theme={services[0].theme}
              size="small"
            />
            <ServiceCard
              icon={services[1].icon}
              title={services[1].title}
              description={services[1].description}
              features={services[1].features}
              theme={services[1].theme}
              size="large"
            />
            
            {/* Row 2: Large (2/3) + Small (1/3) */}
            <ServiceCard
              icon={services[2].icon}
              title={services[2].title}
              description={services[2].description}
              features={services[2].features}
              theme={services[2].theme}
              size="large"
            />
            <ServiceCard
              icon={services[3].icon}
              title={services[3].title}
              description={services[3].description}
              features={services[3].features}
              theme={services[3].theme}
              size="small"
            />
            
            {/* Row 3: Small (1/3) + Large (2/3) */}
            <ServiceCard
              icon={services[4].icon}
              title={services[4].title}
              description={services[4].description}
              features={services[4].features}
              theme={services[4].theme}
              size="small"
            />
            <ServiceCard
              icon={services[5].icon}
              title={services[5].title}
              description={services[5].description}
              features={services[5].features}
              theme={services[5].theme}
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
}