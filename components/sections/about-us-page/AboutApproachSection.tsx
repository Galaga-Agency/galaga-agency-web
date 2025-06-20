"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AboutApproachSection() {
  const { t } = useTranslation();

  const approaches = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "about.approach.human.title",
      descriptionKey: "about.approach.human.description",
      color: "teal"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "about.approach.practical.title",
      descriptionKey: "about.approach.practical.description",
      color: "mandarina"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      titleKey: "about.approach.longterm.title",
      descriptionKey: "about.approach.longterm.description",
      color: "violeta"
    }
  ];

  return (
    <section className="about-approach-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
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
              {t("about.approach.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="about-approach-title text-4xl md:text-5xl lg:text-6xl font-black text-blanco leading-tight tracking-tight pb-6">
            {t("about.approach.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-hielo/90 font-light leading-relaxed max-w-3xl mx-auto px-4">
            {t("about.approach.subtitle")}
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="approach-card group relative bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500"
              data-index={index}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${approach.color}/20 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${approach.color} to-${approach.color === 'teal' ? 'azul-profundo' : approach.color === 'mandarina' ? 'naranja-tostado' : 'azul-profundo'} rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                {approach.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-xl md:text-2xl font-bold text-${approach.color} pb-4 group-hover:text-white transition-colors duration-300`}>
                  {t(approach.titleKey)}
                </h3>
                <p className="text-base md:text-lg text-hielo/80 leading-relaxed group-hover:text-hielo transition-colors duration-300">
                  {t(approach.descriptionKey)}
                </p>
              </div>

              {/* Floating accent */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-${approach.color} rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center pt-16 md:pt-20">
          <div className="max-w-4xl mx-auto">
            <blockquote className="about-approach-quote text-2xl md:text-3xl lg:text-4xl font-light text-hielo leading-relaxed italic px-4">
              <span className="text-turquesa font-semibold">"</span>
              {t("about.approach.quote")}
              <span className="text-mandarina font-semibold">"</span>
            </blockquote>
            <div className="flex justify-center pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-turquesa"></div>
                <div className="w-2 h-2 bg-turquesa rounded-full"></div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-mandarina"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}