"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MarketingInmersivoResultsSection() {
  const { t } = useTranslation();

  const results = [
    {
      title: "services.marketing-inmersivo.results.emotional-connection.title",
      description: "services.marketing-inmersivo.results.emotional-connection.description", 
      metric: "services.marketing-inmersivo.results.emotional-connection.metric",
      detail: "services.marketing-inmersivo.results.emotional-connection.detail",
      color: "violeta",
      icon: "💝"
    },
    {
      title: "services.marketing-inmersivo.results.conversion-increase.title",
      description: "services.marketing-inmersivo.results.conversion-increase.description",
      metric: "services.marketing-inmersivo.results.conversion-increase.metric", 
      detail: "services.marketing-inmersivo.results.conversion-increase.detail",
      color: "mandarina",
      icon: "📈"
    },
    {
      title: "services.marketing-inmersivo.results.data-driven-decisions.title",
      description: "services.marketing-inmersivo.results.data-driven-decisions.description",
      metric: "services.marketing-inmersivo.results.data-driven-decisions.metric",
      detail: "services.marketing-inmersivo.results.data-driven-decisions.detail", 
      color: "teal",
      icon: "🎯"
    },
    {
      title: "services.marketing-inmersivo.results.space-optimization.title",
      description: "services.marketing-inmersivo.results.space-optimization.description",
      metric: "services.marketing-inmersivo.results.space-optimization.metric",
      detail: "services.marketing-inmersivo.results.space-optimization.detail",
      color: "azul-profundo", 
      icon: "🏪"
    },
    {
      title: "services.marketing-inmersivo.results.real-time-personalization.title",
      description: "services.marketing-inmersivo.results.real-time-personalization.description",
      metric: "services.marketing-inmersivo.results.real-time-personalization.metric",
      detail: "services.marketing-inmersivo.results.real-time-personalization.detail",
      color: "lavanda",
      icon: "⚡"
    },
    {
      title: "services.marketing-inmersivo.results.competitive-advantage.title", 
      description: "services.marketing-inmersivo.results.competitive-advantage.description",
      metric: "services.marketing-inmersivo.results.competitive-advantage.metric",
      detail: "services.marketing-inmersivo.results.competitive-advantage.detail",
      color: "violeta",
      icon: "🏆"
    }
  ];

  const colorClasses = {
    violeta: {
      bg: "bg-violeta",
      text: "text-violeta",
      border: "border-violeta", 
      gradient: "from-violeta/20 to-violeta/5"
    },
    mandarina: {
      bg: "bg-mandarina",
      text: "text-mandarina",
      border: "border-mandarina",
      gradient: "from-mandarina/20 to-mandarina/5"
    },
    teal: {
      bg: "bg-teal", 
      text: "text-teal",
      border: "border-teal",
      gradient: "from-teal/20 to-teal/5"
    },
    "azul-profundo": {
      bg: "bg-azul-profundo",
      text: "text-azul-profundo",
      border: "border-azul-profundo", 
      gradient: "from-azul-profundo/20 to-azul-profundo/5"
    },
    lavanda: {
      bg: "bg-lavanda",
      text: "text-lavanda",
      border: "border-lavanda",
      gradient: "from-lavanda/20 to-lavanda/5"
    }
  };

  return (
    <section className="marketing-inmersivo-results-section section bg-gradient-to-br from-blanco via-hielo/10 to-blanco relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 w-56 h-56 bg-violeta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-12 w-64 h-64 bg-lavanda/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-mandarina/5 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="text-violeta font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("services.marketing-inmersivo.results.eyebrow")}
          </span>
          
          <h2 className="marketing-inmersivo-results-title section-title text-azul-profundo leading-tight pb-8">
            {t("services.marketing-inmersivo.results.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("services.marketing-inmersivo.results.subtitle")}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {results.map((result, index) => {
            const colors = colorClasses[result.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index}
                className={`marketing-inmersivo-result-card-${index + 1} group cursor-pointer`}
              >
                <div className={`bg-gradient-to-br ${colors.gradient} rounded-3xl p-8 shadow-xl border ${colors.border}/20 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col`}>
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 pb-6">
                    <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center text-xl shadow-lg`}>
                      {result.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg md:text-xl font-bold ${colors.text} leading-tight`}>
                        {t(result.title)}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-negro leading-relaxed pb-6 text-base flex-grow">
                    {t(result.description)}
                  </p>

                  {/* Metric */}
                  <div className="bg-blanco/60 rounded-2xl p-4 border border-blanco/40">
                    <div className={`text-2xl md:text-3xl font-black ${colors.text} pb-2`}>
                      {t(result.metric)}
                    </div>
                    <p className="text-sm text-negro font-medium">
                      {t(result.detail)}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex justify-end pt-4">
                    <div className={`w-8 h-8 ${colors.bg}/20 rounded-full flex items-center justify-center group-hover:${colors.bg}/40 transition-all duration-300`}>
                      <svg className={`w-4 h-4 ${colors.text} transition-transform duration-300 group-hover:translate-x-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center pt-20 md:pt-24">
          <div className="marketing-inmersivo-results-quote bg-gradient-to-r from-violeta/10 via-lavanda/10 to-violeta/10 rounded-3xl p-8 md:p-12 border-2 border-violeta/20">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-azul-profundo leading-relaxed italic pb-6">
              "{t("services.marketing-inmersivo.results.quote")}"
            </blockquote>
            <cite className="text-violeta font-semibold text-lg">
              {t("services.marketing-inmersivo.results.quote-author")}
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
}