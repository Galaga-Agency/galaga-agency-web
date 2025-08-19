"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MarketingInmersivoFeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: "service-details-pages.immersive-marketing.features.ar-displays.title",
      description: "service-details-pages.immersive-marketing.features.ar-displays.description", 
      image: "/assets/img/servicios/marketing-inmersivo/ar-displays.webp"
    },
    {
      title: "service-details-pages.immersive-marketing.features.interactive-corners.title",
      description: "service-details-pages.immersive-marketing.features.interactive-corners.description",
      image: "/assets/img/servicios/marketing-inmersivo/interactive-corners.webp"
    },
    {
      title: "service-details-pages.immersive-marketing.features.smart-mirrors.title",
      description: "service-details-pages.immersive-marketing.features.smart-mirrors.description",
      image: "/assets/img/servicios/marketing-inmersivo/smart-mirrors.webp"
    },
    {
      title: "service-details-pages.immersive-marketing.features.virtual-tours.title", 
      description: "service-details-pages.immersive-marketing.features.virtual-tours.description",
      image: "/assets/img/servicios/marketing-inmersivo/virtual-tours.webp"
    }
  ];

  return (
    <section className="marketing-inmersivo-features-section section bg-gradient-to-br from-azul-profundo via-teal to-azul-profundo relative overflow-hidden">
      
      <div className="container relative z-10">
        
        <div className="text-center pb-16 md:pb-20">
          <span className="text-turquesa font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("service-details-pages.immersive-marketing.features.eyebrow")}
          </span>
          
          <h2 className="section-title text-blanco leading-tight pb-8">
            {t("service-details-pages.immersive-marketing.features.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            {t("service-details-pages.immersive-marketing.features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`marketing-inmersivo-feature-card-${index + 1} group cursor-pointer`}
            >
              <div className="bg-blanco/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-blanco/20 transition-all duration-500 hover:bg-blanco/15 hover:scale-[1.02] hover:shadow-3xl">
                
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  />
                  
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-blanco/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blanco/30">
                      <span className="text-blanco font-bold text-lg">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-blanco pb-4 leading-tight group-hover:text-lavanda transition-colors duration-300">
                    {t(feature.title)}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    {t(feature.description)}
                  </p>

                  <div className="flex justify-end pt-6">
                    <div className="w-8 h-8 bg-lavanda/20 rounded-full flex items-center justify-center group-hover:bg-lavanda/40 transition-all duration-300">
                      <svg className="w-4 h-4 text-lavanda transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-16 md:pt-20">
          <div className="inline-flex flex-col md:flex-row gap-6">
            <button className="btn-primary bg-gradient-to-r from-lavanda to-violeta hover:from-violeta hover:to-lavanda transition-all duration-300 px-8 py-4 text-lg font-semibold">
              {t("service-details-pages.immersive-marketing.features.cta.primary")}
            </button>
            <button className="btn-outline border-2 border-lavanda text-lavanda hover:bg-lavanda hover:text-azul-profundo transition-all duration-300 px-8 py-4 text-lg font-semibold">
              {t("service-details-pages.immersive-marketing.features.cta.secondary")}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}