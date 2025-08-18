"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function MarketingInmersivoFeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: "services.marketing-inmersivo.features.ar-displays.title",
      description: "services.marketing-inmersivo.features.ar-displays.description", 
      image: "/assets/img/servicios/marketing-inmersivo/ar-displays.webp",
      gradient: "from-violeta/80 to-lavanda/60"
    },
    {
      title: "services.marketing-inmersivo.features.interactive-corners.title",
      description: "services.marketing-inmersivo.features.interactive-corners.description",
      image: "/assets/img/servicios/marketing-inmersivo/interactive-corners.webp", 
      gradient: "from-lavanda/80 to-violeta/60"
    },
    {
      title: "services.marketing-inmersivo.features.smart-mirrors.title",
      description: "services.marketing-inmersivo.features.smart-mirrors.description",
      image: "/assets/img/servicios/marketing-inmersivo/smart-mirrors.webp",
      gradient: "from-violeta/80 to-azul-profundo/60"
    },
    {
      title: "services.marketing-inmersivo.features.virtual-tours.title", 
      description: "services.marketing-inmersivo.features.virtual-tours.description",
      image: "/assets/img/servicios/marketing-inmersivo/virtual-tours.webp",
      gradient: "from-azul-profundo/80 to-violeta/60"
    }
  ];

  return (
    <section className="marketing-inmersivo-features-section section bg-gradient-to-br from-azul-profundo via-violeta to-azul-profundo relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-lavanda/10 rounded-full blur-2xl" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-violeta/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blanco/5 rounded-full blur-xl" />
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="text-lavanda font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("services.marketing-inmersivo.features.eyebrow")}
          </span>
          
          <h2 className="marketing-inmersivo-features-title section-title text-blanco leading-tight pb-8">
            {t("services.marketing-inmersivo.features.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            {t("services.marketing-inmersivo.features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`marketing-inmersivo-feature-card-${index + 1} group cursor-pointer`}
            >
              <div className="relative bg-blanco/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-blanco/20 transition-all duration-500 hover:bg-blanco/15 hover:scale-[1.02] hover:shadow-3xl">
                
                {/* Feature Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`} />
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  />
                  
                  {/* Overlay with number */}
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-blanco/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blanco/30">
                      <span className="text-blanco font-bold text-lg">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-blanco pb-4 leading-tight group-hover:text-lavanda transition-colors duration-300">
                    {t(feature.title)}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    {t(feature.description)}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex justify-end pt-6">
                    <div className="w-8 h-8 bg-lavanda/20 rounded-full flex items-center justify-center group-hover:bg-lavanda/40 transition-all duration-300">
                      <svg className="w-4 h-4 text-lavanda transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violeta/20 to-lavanda/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-16 md:pt-20">
          <div className="marketing-inmersivo-features-cta inline-flex flex-col md:flex-row gap-6">
            <button className="btn-primary bg-gradient-to-r from-lavanda to-violeta hover:from-violeta hover:to-lavanda transition-all duration-300 px-8 py-4 text-lg font-semibold">
              {t("services.marketing-inmersivo.features.cta.primary")}
            </button>
            <button className="btn-outline border-2 border-lavanda text-lavanda hover:bg-lavanda hover:text-azul-profundo transition-all duration-300 px-8 py-4 text-lg font-semibold">
              {t("services.marketing-inmersivo.features.cta.secondary")}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}