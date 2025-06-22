"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      titleKey: "servicesPage.process.discovery.title",
      descriptionKey: "servicesPage.process.discovery.description",
      color: "teal",
      accent: "turquesa"
    },
    {
      number: "02",
      titleKey: "servicesPage.process.strategy.title",
      descriptionKey: "servicesPage.process.strategy.description",
      color: "mandarina",
      accent: "naranja-tostado"
    },
    {
      number: "03",
      titleKey: "servicesPage.process.implementation.title",
      descriptionKey: "servicesPage.process.implementation.description",
      color: "violeta",
      accent: "azul-profundo"
    },
    {
      number: "04",
      titleKey: "servicesPage.process.optimization.title",
      descriptionKey: "servicesPage.process.optimization.description",
      color: "verde-azulado",
      accent: "turquesa"
    }
  ];

  return (
    <section className="services-process-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violeta/10 rounded-full blur-xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm">
              {t("servicesPage.process.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="services-process-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("servicesPage.process.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-hielo/90 font-light leading-relaxed px-4">
            {t("servicesPage.process.subtitle")}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-mandarina to-verde-azulado opacity-30 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="process-step-card group relative text-center"
                data-index={index}
              >
                {/* Step number */}
                <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-${step.color} to-${step.accent} rounded-full flex items-center justify-center mx-auto pb-6 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  <span className="text-white font-black text-lg md:text-xl">
                    {step.number}
                  </span>
                  
                  {/* Connecting dot for line */}
                  <div className="hidden lg:block absolute -right-12 top-1/2 w-4 h-4 bg-white/20 rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold text-${step.color} pb-4 group-hover:text-white transition-colors duration-300`}>
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-base md:text-lg text-hielo/80 leading-relaxed group-hover:text-hielo transition-colors duration-300">
                    {t(step.descriptionKey)}
                  </p>
                </div>

                {/* Floating accent */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${step.accent} rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-16 md:pt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="services-process-cta-title text-2xl md:text-3xl font-bold text-blanco pb-4">
              {t("servicesPage.process.cta.title")}
            </h3>
            <p className="text-lg text-hielo/90 pb-8">
              {t("servicesPage.process.cta.description")}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal to-turquesa text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <span>{t("servicesPage.process.cta.startProject")}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/about"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span>{t("servicesPage.process.cta.learnMore")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}