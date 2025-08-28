"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesOverviewSection() {
  const { t } = useTranslation();

  return (
    <section className="services-overview-section section bg-[#f6fbfd]">
      <div className="container">
        {/* Header */}
        <div className="text-center pb-16 w-full">
          <span className="fade-in-up opacity-0 text-teal font-semibold tracking-wider uppercase text-sm">
            {t("services-page.overview-section.eyebrow")}
          </span>
          <h2 className="fade-in-up opacity-0 section-title text-teal pt-4 pb-6">
            {t("services-page.overview-section.title")}
          </h2>
          <p className="fade-in-up opacity-0 text-lg md:text-xl text-negro/70 w-full">
            {t("services-page.overview-section.subtitle")}
          </p>
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="fade-in-up">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
