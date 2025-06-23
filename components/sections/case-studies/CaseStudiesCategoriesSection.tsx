"use client";

import { useTranslation } from "@/hooks/useTranslation";
import CategoryCard from "@/components/CategoryCard";

export default function CaseStudiesCategoriesSection() {
  const { t } = useTranslation();

  const categories = [
    {
      id: "digital",
      titleKey: "case-studies-page.categories.digital",
      descriptionKey: "case-studies-page.categories.digitalDesc",
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "teal",
      accent: "turquesa",
      count: "12",
    },
    {
      id: "marketing",
      titleKey: "case-studies-page.categories.marketing",
      descriptionKey: "case-studies-page.categories.marketingDesc",
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "mandarina",
      accent: "naranja-tostado",
      count: "8",
    },
    {
      id: "events",
      titleKey: "case-studies-page.categories.events",
      descriptionKey: "case-studies-page.categories.eventsDesc",
      icon: (
        <svg
          className="w-10 h-10 md:w-12 md:h-12"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "violeta",
      accent: "azul-profundo",
      count: "6",
    },
  ];

  return (
    <section className="case-studies-categories-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="categories-bg-element-1 absolute top-1/3 left-1/4 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl"></div>
        <div className="categories-bg-element-2 absolute bottom-1/4 right-1/3 w-80 h-80 bg-mandarina/10 rounded-full blur-2xl"></div>
        <div className="categories-bg-element-3 absolute top-1/2 right-1/4 w-64 h-64 bg-violeta/10 rounded-full blur-xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="categories-eyebrow inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm">
              {t("case-studies-page.categories.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>

          <h2 className="case-studies-categories-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("case-studies-page.categories.title")}
          </h2>

          <p className="categories-subtitle text-lg md:text-xl text-hielo/90 font-light leading-relaxed px-4">
            {t("case-studies-page.categories.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="categories-cta text-center pt-16 md:pt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="categories-cta-title text-2xl md:text-3xl font-bold text-blanco pb-4">
              {t("case-studies-page.categories.cta.title")}
            </h3>
            <p className="categories-cta-description text-lg text-hielo/90 pb-8">
              {t("case-studies-page.categories.cta.description")}
            </p>
            <div className="categories-cta-buttons flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="categories-cta-primary inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal to-turquesa text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <span>
                  {t("case-studies-page.categories.cta.startProject")}
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/services"
                className="categories-cta-secondary inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span>
                  {t("case-studies-page.categories.cta.viewServices")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}