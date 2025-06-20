"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AboutClientsSection() {
  const { t } = useTranslation();

  const clientTypes = [
    {
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "about.clients.growing.title",
      descriptionKey: "about.clients.growing.description",
      color: "mandarina",
      accent: "naranja-tostado"
    },
    {
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "about.clients.innovative.title",
      descriptionKey: "about.clients.innovative.description",
      color: "violeta",
      accent: "azul-profundo"
    }
  ];

  return (
    <section className="about-clients-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        {/* Top diagonal - Light gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/60 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)"
          }}
        ></div>
        
        {/* Bottom diagonal - Pure white */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("about.clients.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="about-clients-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("about.clients.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-grafito font-light leading-relaxed max-w-3xl mx-auto px-4">
            {t("about.clients.subtitle")}
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-16 md:pb-20">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="client-type-card group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl border border-hielo/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              data-index={index}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${client.color}/10 to-${client.accent}/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Icon container */}
              <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-${client.color} to-${client.accent} rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {client.icon}
                
                {/* Floating accent dots */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${client.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className={`text-xl md:text-2xl font-bold text-${client.color} pb-4 group-hover:text-negro transition-colors duration-300`}>
                  {t(client.titleKey)}
                </h3>
                <p className="text-base md:text-lg text-grafito leading-relaxed group-hover:text-azul-profundo transition-colors duration-300">
                  {t(client.descriptionKey)}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute bottom-4 right-4 w-2 h-2 bg-${client.color} rounded-full opacity-30 group-hover:opacity-70 transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className="relative">
          {/* Background decorative element */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal/5 via-turquesa/10 to-mandarina/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-hielo/50 shadow-lg">
            <h3 className="about-clients-success-title text-2xl md:text-3xl font-bold text-negro pb-6">
              {t("about.clients.success.title")}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-8">
              {/* Success metric 1 */}
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-teal pb-2">
                  {t("about.clients.success.energiaSolar.metric")}
                </div>
                <div className="text-sm md:text-base text-grafito font-medium">
                  {t("about.clients.success.energiaSolar.description")}
                </div>
              </div>
              
              {/* Success metric 2 */}
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-mandarina pb-2">
                  {t("about.clients.success.toyota.metric")}
                </div>
                <div className="text-sm md:text-base text-grafito font-medium">
                  {t("about.clients.success.toyota.description")}
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-azul-profundo font-medium leading-relaxed">
              {t("about.clients.success.summary")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}