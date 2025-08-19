"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaEye, FaCogs, FaUsers } from "react-icons/fa";
import Image from "next/image";

export default function MarketingInmersivoOverviewSection() {
  const { t } = useTranslation();

  return (
    <section className="marketing-inmersivo-overview-section homepage-about-section section relative overflow-x-hidden overflow-y-visible bg-gradient-to-br from-blanco via-hielo/30 to-blanco">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
        ></div>
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

          {/* Content Blocks */}
          <div className="relative">
            <div className="relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-12">
              
              {/* First Block - Immersive Experiences */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="px-4 lg:px-0">
                  <div className="flex items-center gap-6 pb-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center shadow-2xl">
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

              {/* Second Block - AR Technology */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="px-4 lg:px-0 lg:order-2">
                  <div className="flex items-center gap-6 pb-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-turquesa/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center shadow-2xl">
                      <FaCogs className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                        {t("service-details-pages.immersive-marketing.hero-section.points.ar-technology.title")}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-negro leading-relaxed pb-8">
                    {t("service-details-pages.immersive-marketing.hero-section.points.ar-technology.description")}
                  </p>
                </div>

                <div className="relative lg:order-1 px-4 lg:px-0">
                  <div className="bg-gradient-to-br from-teal to-azul-profundo p-8 rounded-2xl text-white shadow-2xl">
                    <h4 className="text-xl font-bold pb-6">
                      {t("service-details-pages.immersive-marketing.technologies.ar-platforms.title")}
                    </h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">ARCore (Android)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">ARKit (iOS)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">Spark AR (Meta)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-base">Unity AR Foundation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Block - Customer Connection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="px-4 lg:px-0">
                  <div className="flex items-center gap-6 pb-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center shadow-2xl">
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

                <div className="relative lg:order-2 px-4 lg:px-0">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-blanco/20 to-blanco/80 p-6 rounded-xl border-l-4 border-teal">
                      <h5 className="font-bold text-azul-profundo text-lg pb-2">
                        {t("services-section.immersive-marketing.feature1")}
                      </h5>
                      <p className="text-sm text-negro">
                        {t("services-section.immersive-marketing.description")}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-turquesa/0 to-turquesa/10 p-6 rounded-xl border-l-4 border-turquesa">
                      <h5 className="font-bold text-azul-profundo text-lg pb-2">
                        {t("services-section.immersive-marketing.feature2")}
                      </h5>
                      <p className="text-sm text-negro">
                        {t("services-section.immersive-marketing.feature3")}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-azul-profundo/20 to-azul-profundo/20 p-6 rounded-xl border-l-4 border-azul-profundo">
                      <h5 className="font-bold text-azul-profundo text-lg pb-2">
                        {t("services-section.immersive-marketing.feature1")}
                      </h5>
                      <p className="text-sm text-negro">
                        {t("services-section.immersive-marketing.feature2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}