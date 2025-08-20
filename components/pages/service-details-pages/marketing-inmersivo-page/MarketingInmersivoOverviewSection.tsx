"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaEye, FaUsers } from "react-icons/fa";
import Image from "next/image";

export default function MarketingInmersivoOverviewSection() {
  const { t } = useTranslation();

  return (
    <section className="marketing-inmersivo-overview-section homepage-about-section section relative overflow-x-hidden overflow-y-visible bg-gradient-to-br from-blanco via-hielo/30 to-blanco">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"></div>
      </div>

      <div className="relative z-10">
        <div className="container">
          {/* Section Header */}
          <div className="text-center pb-16 md:pb-20">
            <h2 className="section-title text-teal leading-tight tracking-tight pb-6">
              {t("service-details-pages.immersive-marketing.hero-section.what-we-do.title")}
            </h2>
            <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
              {t("service-details-pages.immersive-marketing.hero-section.what-we-do.description")}
            </p>
          </div>

          {/* Philosophy Block - What we understand */}
          <div className="pb-16 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Concept Text */}
              <div className="marketing-inmersivo-concept-text px-4 lg:px-0">
                <h3 className="text-3xl md:text-4xl font-black text-mandarina leading-tight pb-8">
                  {t("service-details-pages.immersive-marketing.concept.title")}
                </h3>
                
                <div className="flex flex-col gap-6">
                  <p className="text-lg text-negro leading-relaxed">
                    {t("service-details-pages.immersive-marketing.concept.description-1")}
                  </p>
                  
                  <p className="text-lg text-negro leading-relaxed">
                    {t("service-details-pages.immersive-marketing.concept.description-2")}
                  </p>
                  
                  <p className="text-lg text-negro leading-relaxed">
                    {t("service-details-pages.immersive-marketing.concept.description-3")}
                  </p>

                  <div className="pt-6 bg-gradient-to-r from-teal/10 to-turquesa/5 rounded-2xl p-6">
                    <p className="text-xl md:text-2xl font-bold text-teal leading-tight">
                      {t("service-details-pages.immersive-marketing.concept.highlight.title")}
                    </p>
                  </div>
                </div>
              </div>

              {/* AR Demo Image */}
              <div className="marketing-inmersivo-concept-ar-demo px-4 lg:px-0">
                <div className="relative">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/img/servicios/immersive-marketing/event.png"
                      alt="Immersive marketing experience"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="relative">
            <div className="relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-12">
              
              {/* First Block - Immersive Experiences */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="px-4 lg:px-0">
                  <div className="flex items-center gap-6 pb-8">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-teal-gradient rounded-full flex items-center justify-center shadow-2xl">
                      <FaEye className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                        {t("service-details-pages.immersive-marketing.hero-section.points.immersive-experiences.title")}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-negro leading-relaxed">
                    {t("service-details-pages.immersive-marketing.hero-section.points.immersive-experiences.description")}
                  </p>
                </div>

                <div className="relative lg:order-2 px-4 lg:px-0">
                  <div className="bg-gradient-to-br from-teal to-turquesa p-8 rounded-2xl text-white shadow-2xl">
                    <h4 className="text-xl font-bold pb-6">
                      {t("service-details-pages.immersive-marketing.hero-section.visual.title")}
                    </h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.hero-section.visual.features.ar-filters")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.hero-section.visual.features.interactive-content")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.hero-section.visual.features.virtual-try-on")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.hero-section.visual.features.gamification")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Block - Customer Connection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                <div className="relative order-1 px-4 lg:px-0">
                  <div className="bg-gradient-to-br from-azul-profundo to-teal p-8 rounded-2xl text-white shadow-2xl">
                    <h4 className="text-xl font-bold pb-6">
                      {t("service-details-pages.immersive-marketing.overview.results.title")}
                    </h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.overview.results.engagement")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.overview.results.conversion")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.overview.results.analytics")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">
                          {t("service-details-pages.immersive-marketing.overview.results.memorable")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 lg:px-0 lg:order-2">
                  <div className="flex items-center gap-6 pb-8">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-purple-gradient rounded-full flex items-center justify-center shadow-2xl">
                      <FaUsers className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                        {t("service-details-pages.immersive-marketing.hero-section.points.customer-connection.title")}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-negro leading-relaxed pb-6">
                    {t("service-details-pages.immersive-marketing.hero-section.points.customer-connection.description")}
                  </p>
                  <p className="text-base md:text-lg text-azul-profundo font-semibold leading-relaxed">
                    {t("service-details-pages.immersive-marketing.hero-section.what-we-do.highlight")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}