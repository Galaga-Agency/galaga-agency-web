"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

export default function ServicesOverviewSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "servicesPage.overview.strategy.title",
      descriptionKey: "servicesPage.overview.strategy.description",
      featuresKeys: [
        "servicesPage.overview.strategy.feature1",
        "servicesPage.overview.strategy.feature2",
        "servicesPage.overview.strategy.feature3"
      ],
      color: "teal",
      accent: "turquesa"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "servicesPage.overview.automation.title",
      descriptionKey: "servicesPage.overview.automation.description",
      featuresKeys: [
        "servicesPage.overview.automation.feature1",
        "servicesPage.overview.automation.feature2",
        "servicesPage.overview.automation.feature3"
      ],
      color: "mandarina",
      accent: "naranja-tostado"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "servicesPage.overview.innovation.title",
      descriptionKey: "servicesPage.overview.innovation.description",
      featuresKeys: [
        "servicesPage.overview.innovation.feature1",
        "servicesPage.overview.innovation.feature2",
        "servicesPage.overview.innovation.feature3"
      ],
      color: "violeta",
      accent: "azul-profundo"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "servicesPage.overview.immersive.title",
      descriptionKey: "servicesPage.overview.immersive.description",
      featuresKeys: [
        "servicesPage.overview.immersive.feature1",
        "servicesPage.overview.immersive.feature2",
        "servicesPage.overview.immersive.feature3"
      ],
      color: "verde-azulado",
      accent: "turquesa"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      titleKey: "servicesPage.overview.training.title",
      descriptionKey: "servicesPage.overview.training.description",
      featuresKeys: [
        "servicesPage.overview.training.feature1",
        "servicesPage.overview.training.feature2",
        "servicesPage.overview.training.feature3"
      ],
      color: "azul-profundo",
      accent: "teal"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "servicesPage.overview.grants.title",
      descriptionKey: "servicesPage.overview.grants.description",
      featuresKeys: [
        "servicesPage.overview.grants.feature1",
        "servicesPage.overview.grants.feature2",
        "servicesPage.overview.grants.feature3"
      ],
      color: "turquesa",
      accent: "verde-azulado"
    }
  ];

  return (
    <section className="services-overview-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/15 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)"
          }}
        ></div>
        
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("servicesPage.overview.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="services-overview-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("servicesPage.overview.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-grafito font-light leading-relaxed max-w-4xl mx-auto px-4">
            {t("servicesPage.overview.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-overview-card group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-hielo/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              data-index={index}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-${service.accent}/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Icon container */}
              <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${service.color} to-${service.accent} rounded-2xl flex items-center justify-center text-white pb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className={`text-xl md:text-2xl font-bold text-${service.color} pb-4 group-hover:text-negro transition-colors duration-300`}>
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-base md:text-lg text-grafito leading-relaxed pb-6 group-hover:text-azul-profundo transition-colors duration-300">
                  {t(service.descriptionKey)}
                </p>

                {/* Features list */}
                <ul className="space-y-3 pb-6">
                  {service.featuresKeys.map((featureKey, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm md:text-base text-grafito/80">
                        {t(featureKey)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link 
                  href={`/services/${service.titleKey.split('.').pop()}`}
                  className={`inline-flex items-center gap-2 text-${service.color} font-semibold hover:text-negro group-hover:translate-x-1 transform transition-transform duration-300`}
                >
                  <span>{t("servicesPage.overview.learnMore")}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-${service.color} rounded-full opacity-30 group-hover:opacity-70 group-hover:scale-150 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}