"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function CaseStudiesCategoriesSection() {
  const { t } = useTranslation();

  const categories = [
    {
      id: "digital",
      titleKey: "caseStudiesPage.categories.digital",
      descriptionKey: "caseStudiesPage.categories.digitalDesc",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: "teal",
      accent: "turquesa",
      count: "12"
    },
    {
      id: "marketing",
      titleKey: "caseStudiesPage.categories.marketing",
      descriptionKey: "caseStudiesPage.categories.marketingDesc",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      color: "mandarina",
      accent: "naranja-tostado",
      count: "8"
    },
    {
      id: "events",
      titleKey: "caseStudiesPage.categories.events",
      descriptionKey: "caseStudiesPage.categories.eventsDesc",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      ),
      color: "violeta",
      accent: "azul-profundo",
      count: "6"
    }
  ];

  return (
    <section className="case-studies-categories-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violeta/10 rounded-full blur-xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm">
              {t("caseStudiesPage.categories.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="case-studies-categories-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("caseStudiesPage.categories.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-hielo/90 font-light leading-relaxed px-4">
            {t("caseStudiesPage.categories.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="category-card group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500"
              data-index={index}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/20 to-${category.accent}/10 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="relative text-center">
                {/* Icon */}
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-${category.color} to-${category.accent} rounded-2xl flex items-center justify-center text-white mx-auto pb-6 shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold text-${category.color} pb-4 group-hover:text-white transition-colors duration-300`}>
                  {t(category.titleKey)}
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-hielo/80 leading-relaxed pb-6 group-hover:text-hielo transition-colors duration-300">
                  {t(category.descriptionKey)}
                </p>

                {/* Count */}
                <div className="flex items-center justify-center gap-3">
                  <div className={`w-8 h-8 bg-${category.color}/20 rounded-full flex items-center justify-center`}>
                    <span className={`text-sm font-bold text-${category.color} group-hover:text-white transition-colors duration-300`}>
                      {category.count}
                    </span>
                  </div>
                  <span className="text-hielo/60 text-sm font-medium group-hover:text-hielo/80 transition-colors duration-300">
                    {t("caseStudiesPage.categories.projects")}
                  </span>
                </div>
              </div>

              {/* Floating accent */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-${category.accent} rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-16 md:pt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="case-studies-categories-cta-title text-2xl md:text-3xl font-bold text-blanco pb-4">
              {t("caseStudiesPage.categories.cta.title")}
            </h3>
            <p className="text-lg text-hielo/90 pb-8">
              {t("caseStudiesPage.categories.cta.description")}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal to-turquesa text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <span>{t("caseStudiesPage.categories.cta.startProject")}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/services"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span>{t("caseStudiesPage.categories.cta.viewServices")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}