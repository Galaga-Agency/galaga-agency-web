"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ProcessCard from "./ProcessCard";

export default function ServicesProcessSection() {
  const { t } = useTranslation();
  const steps = [
    {
      number: "01",
      titleKey: "service-page.process.discovery.title",
      descriptionKey: "service-page.process.discovery.description",
      color: "teal",
      accent: "turquesa",
    },
    {
      number: "02",
      titleKey: "service-page.process.strategy.title",
      descriptionKey: "service-page.process.strategy.description",
      color: "mandarina",
      accent: "naranja-tostado",
    },
    {
      number: "03",
      titleKey: "service-page.process.implementation.title",
      descriptionKey: "service-page.process.implementation.description",
      color: "violeta",
      accent: "azul-profundo",
    },
    {
      number: "04",
      titleKey: "service-page.process.optimization.title",
      descriptionKey: "service-page.process.optimization.description",
      color: "verde-azulado",
      accent: "turquesa",
    },
  ];

  return (
    <section className="services-process-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      <div className="absolute inset-0">
        <div className="services-process-bg-element-1 absolute top-1/4 left-1/4 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl" />
        <div className="services-process-bg-element-2 absolute bottom-1/3 right-1/4 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl" />
        <div className="services-process-bg-element-3 absolute top-1/2 right-1/3 w-64 h-64 bg-violeta/10 rounded-full blur-xl" />
      </div>
      <div className="container relative z-10">
        <div className="text-center pb-16 md:pb-20">
          <div className="services-process-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse" />
            <span className="text-hielo font-semibold uppercase text-sm">
              {t("service-page.process.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300" />
          </div>
          <h2 className="services-process-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco pb-6">
            {t("service-page.process.title")}
          </h2>
          <p className="services-process-subtitle text-lg md:text-xl text-hielo/90 font-light px-4">
            {t("service-page.process.subtitle")}
          </p>
        </div>
        <div className="relative">
          <div className="services-process-connecting-line hidden absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-mandarina to-verde-azulado opacity-30 transform -translate-y-1/2" />
          <div className="services-process-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <ProcessCard key={idx} index={idx} {...step} />
            ))}
          </div>
        </div>
        <div className="process-cta text-center pt-16 md:pt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="services-process-cta-title text-2xl md:text-3xl font-bold text-blanco pb-4">
              {t("service-page.process.cta.title")}
            </h3>
            <p className="services-process-cta-description text-lg text-hielo/90 pb-8">
              {t("service-page.process.cta.description")}
            </p>
            <div className="process-cta-buttons flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="services-process-cta-primary inline-flex items-center gap-3 bg-gradient-to-r from-teal to-turquesa text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                {t("service-page.process.cta.startProject")}
              </a>
              <a
                href="/about"
                className="services-process-cta-secondary inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                {t("service-page.process.cta.learnMore")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
