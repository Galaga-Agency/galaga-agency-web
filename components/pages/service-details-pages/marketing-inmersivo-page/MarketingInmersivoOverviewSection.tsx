"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function MarketingInmersivoOverviewSection() {
  const { t } = useTranslation();

  return (
    <section className="marketing-inmersivo-overview-section section bg-gradient-to-br from-blanco via-hielo/30 to-blanco relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-violeta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-lavanda/10 rounded-full blur-2xl" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="text-violeta font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("services.marketing-inmersivo.overview.eyebrow")}
          </span>
          
          <h2 className="marketing-inmersivo-overview-title section-title text-azul-profundo leading-tight pb-8">
            {t("services.marketing-inmersivo.overview.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("services.marketing-inmersivo.overview.subtitle")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-16">
          
          {/* Left Content */}
          <div className="marketing-inmersivo-overview-content">
            <div className="pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo pb-6 leading-tight">
                {t("services.marketing-inmersivo.overview.what-we-do.title")}
              </h3>
              <p className="text-base md:text-lg text-negro leading-relaxed pb-6">
                {t("services.marketing-inmersivo.overview.what-we-do.description")}
              </p>
              <p className="text-base md:text-lg text-violeta font-semibold leading-relaxed">
                {t("services.marketing-inmersivo.overview.what-we-do.highlight")}
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-violeta rounded-full flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold text-azul-profundo pb-2">
                    {t("services.marketing-inmersivo.overview.points.immersive-experiences.title")}
                  </h4>
                  <p className="text-negro text-sm">
                    {t("services.marketing-inmersivo.overview.points.immersive-experiences.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-lavanda rounded-full flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold text-azul-profundo pb-2">
                    {t("services.marketing-inmersivo.overview.points.ar-technology.title")}
                  </h4>
                  <p className="text-negro text-sm">
                    {t("services.marketing-inmersivo.overview.points.ar-technology.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-violeta rounded-full flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold text-azul-profundo pb-2">
                    {t("services.marketing-inmersivo.overview.points.customer-connection.title")}
                  </h4>
                  <p className="text-negro text-sm">
                    {t("services.marketing-inmersivo.overview.points.customer-connection.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="marketing-inmersivo-overview-visual relative">
            <div className="relative bg-gradient-to-br from-violeta/10 to-lavanda/20 rounded-3xl p-8 shadow-xl">
              <div className="bg-blanco rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violeta to-lavanda rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blanco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-azul-profundo">
                      {t("services.marketing-inmersivo.overview.visual.title")}
                    </h4>
                    <p className="text-sm text-negro">
                      {t("services.marketing-inmersivo.overview.visual.subtitle")}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "services.marketing-inmersivo.overview.visual.features.ar-filters",
                    "services.marketing-inmersivo.overview.visual.features.interactive-content", 
                    "services.marketing-inmersivo.overview.visual.features.virtual-try-on",
                    "services.marketing-inmersivo.overview.visual.features.gamification"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-violeta rounded-full flex-shrink-0" />
                      <span className="text-sm text-negro font-medium">
                        {t(feature)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-violeta rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-lavanda rounded-full opacity-15 animate-pulse delay-1000" />
            </div>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="marketing-inmersivo-overview-stats grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-violeta pb-2">
              {t("services.marketing-inmersivo.overview.stats.engagement.number")}
            </div>
            <p className="text-sm md:text-base text-negro font-medium">
              {t("services.marketing-inmersivo.overview.stats.engagement.label")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-lavanda pb-2">
              {t("services.marketing-inmersivo.overview.stats.retention.number")}
            </div>
            <p className="text-sm md:text-base text-negro font-medium">
              {t("services.marketing-inmersivo.overview.stats.retention.label")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-violeta pb-2">
              {t("services.marketing-inmersivo.overview.stats.conversion.number")}
            </div>
            <p className="text-sm md:text-base text-negro font-medium">
              {t("services.marketing-inmersivo.overview.stats.conversion.label")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}