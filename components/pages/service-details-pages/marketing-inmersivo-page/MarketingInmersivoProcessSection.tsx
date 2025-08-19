"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MarketingInmersivoProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      title: "services.marketing-inmersivo.process.briefing.title",
      description: "services.marketing-inmersivo.process.briefing.description",
      color: "violeta",
      image: "/assets/img/servicios/marketing-inmersivo/process-1.webp"
    },
    {
      number: "02", 
      title: "services.marketing-inmersivo.process.creative-concept.title",
      description: "services.marketing-inmersivo.process.creative-concept.description", 
      color: "lavanda",
      image: "/assets/img/servicios/marketing-inmersivo/process-2.webp"
    },
    {
      number: "03",
      title: "services.marketing-inmersivo.process.technical-design.title", 
      description: "services.marketing-inmersivo.process.technical-design.description",
      color: "azul-profundo", 
      image: "/assets/img/servicios/marketing-inmersivo/process-3.webp"
    },
    {
      number: "04",
      title: "services.marketing-inmersivo.process.implementation.title",
      description: "services.marketing-inmersivo.process.implementation.description",
      color: "teal",
      image: "/assets/img/servicios/marketing-inmersivo/process-4.webp"
    },
    {
      number: "05", 
      title: "services.marketing-inmersivo.process.optimization.title",
      description: "services.marketing-inmersivo.process.optimization.description",
      color: "violeta",
      image: "/assets/img/servicios/marketing-inmersivo/process-5.webp"
    }
  ];

  const colorClasses = {
    violeta: {
      bg: "bg-violeta",
      text: "text-violeta",
      border: "border-violeta",
      gradient: "from-violeta/20 to-violeta/5"
    },
    lavanda: {
      bg: "bg-lavanda", 
      text: "text-lavanda",
      border: "border-lavanda",
      gradient: "from-lavanda/20 to-lavanda/5"
    },
    "azul-profundo": {
      bg: "bg-azul-profundo",
      text: "text-azul-profundo", 
      border: "border-azul-profundo",
      gradient: "from-azul-profundo/20 to-azul-profundo/5"
    },
    teal: {
      bg: "bg-teal",
      text: "text-teal",
      border: "border-teal", 
      gradient: "from-teal/20 to-teal/5"
    }
  };

  return (
    <section className="marketing-inmersivo-process-section section bg-gradient-to-br from-blanco via-hielo/20 to-blanco relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-violeta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-16 w-48 h-48 bg-lavanda/8 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="text-violeta font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("services.marketing-inmersivo.process.eyebrow")}
          </span>
          
          <h2 className="marketing-inmersivo-process-title section-title text-azul-profundo leading-tight pb-8">
            {t("services.marketing-inmersivo.process.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("services.marketing-inmersivo.process.subtitle")}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violeta/20 via-lavanda/30 to-violeta/20 transform -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={index}
                  className={`marketing-inmersivo-process-step-${index + 1} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'} px-4 lg:px-0`}>
                    <div className="flex items-center gap-6 pb-6">
                      {/* Step Number */}
                      <div className={`w-16 h-16 md:w-20 md:h-20 ${colors.bg} rounded-full flex items-center justify-center shadow-xl`}>
                        <span className="text-blanco font-black text-xl md:text-2xl">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Step Title */}
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold ${colors.text} leading-tight`}>
                          {t(step.title)}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Step Description */}
                    <div className="pl-22 md:pl-26">
                      <p className="text-base md:text-lg text-negro leading-relaxed">
                        {t(step.description)}
                      </p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} px-4 lg:px-0`}>
                    <div className={`relative bg-gradient-to-br ${colors.gradient} rounded-3xl p-6 shadow-xl border ${colors.border}/20`}>
                      <div className="relative bg-blanco rounded-2xl overflow-hidden shadow-lg">
                        <div 
                          className="h-64 md:h-80 bg-cover bg-center"
                          style={{ backgroundImage: `url('${step.image}')` }}
                        />
                        
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-${step.color}/20 to-transparent`} />
                        
                        {/* Corner decoration */}
                        <div className={`absolute top-4 right-4 w-8 h-8 ${colors.bg} rounded-full opacity-20`} />
                      </div>
                      
                      {/* Floating element */}
                      <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${colors.bg} rounded-full opacity-15 animate-pulse`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center pt-20 md:pt-24">
          <div className="marketing-inmersivo-process-quote bg-gradient-to-r from-violeta/10 to-lavanda/10 rounded-3xl p-8 md:p-12 border border-violeta/20">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-azul-profundo leading-relaxed italic">
              "{t("services.marketing-inmersivo.process.quote")}"
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}