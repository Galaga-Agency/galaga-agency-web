"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MarketingInmersivoTechnologiesSection() {
  const { t } = useTranslation();

  const technologies = [
    {
      category: "services.marketing-inmersivo.technologies.ar-platforms.title",
      description: "services.marketing-inmersivo.technologies.ar-platforms.description",
      items: [
        "ARCore (Android)",
        "ARKit (iOS)", 
        "Spark AR (Meta)",
        "Lens Studio (Snapchat)",
        "8th Wall",
        "Unity AR Foundation"
      ],
      icon: "📱",
      color: "violeta"
    },
    {
      category: "services.marketing-inmersivo.technologies.interactive-displays.title", 
      description: "services.marketing-inmersivo.technologies.interactive-displays.description",
      items: [
        "TouchDesigner",
        "Processing",
        "OpenFrameworks", 
        "Kinect SDK",
        "Intel RealSense",
        "Leap Motion"
      ],
      icon: "🖥️", 
      color: "lavanda"
    },
    {
      category: "services.marketing-inmersivo.technologies.content-management.title",
      description: "services.marketing-inmersivo.technologies.content-management.description", 
      items: [
        "Custom CMS",
        "Real-time Analytics",
        "Cloud Integration",
        "API Management",
        "Content Scheduling", 
        "Remote Updates"
      ],
      icon: "☁️",
      color: "teal"
    },
    {
      category: "services.marketing-inmersivo.technologies.analytics.title",
      description: "services.marketing-inmersivo.technologies.analytics.description",
      items: [
        "Heat Mapping",
        "User Journey Tracking", 
        "Engagement Metrics",
        "A/B Testing",
        "Real-time Dashboards",
        "ROI Analytics"
      ],
      icon: "📊",
      color: "azul-profundo"
    }
  ];

  const colorClasses = {
    violeta: {
      bg: "bg-violeta",
      text: "text-violeta", 
      border: "border-violeta",
      gradient: "from-violeta/20 to-violeta/5",
      dot: "bg-violeta"
    },
    lavanda: {
      bg: "bg-lavanda",
      text: "text-lavanda",
      border: "border-lavanda", 
      gradient: "from-lavanda/20 to-lavanda/5",
      dot: "bg-lavanda"
    },
    teal: {
      bg: "bg-teal",
      text: "text-teal",
      border: "border-teal",
      gradient: "from-teal/20 to-teal/5", 
      dot: "bg-teal"
    },
    "azul-profundo": {
      bg: "bg-azul-profundo",
      text: "text-azul-profundo",
      border: "border-azul-profundo",
      gradient: "from-azul-profundo/20 to-azul-profundo/5",
      dot: "bg-azul-profundo"
    }
  };

  return (
    <section className="marketing-inmersivo-technologies-section section bg-gradient-to-br from-azul-profundo via-violeta to-negro relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-12 w-32 h-32 bg-lavanda/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-violeta/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="text-lavanda font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("services.marketing-inmersivo.technologies.eyebrow")}
          </span>
          
          <h2 className="marketing-inmersivo-technologies-title section-title text-blanco leading-tight pb-8">
            {t("services.marketing-inmersivo.technologies.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            {t("services.marketing-inmersivo.technologies.subtitle")}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {technologies.map((tech, index) => {
            const colors = colorClasses[tech.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index}
                className={`marketing-inmersivo-tech-card-${index + 1} group`}
              >
                <div className="bg-blanco/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blanco/20 transition-all duration-500 hover:bg-blanco/15 hover:scale-[1.02] h-full">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 pb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-blanco leading-tight group-hover:text-lavanda transition-colors duration-300">
                        {t(tech.category)}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed pb-8 text-base md:text-lg">
                    {t(tech.description)}
                  </p>

                  {/* Technology List */}
                  <div className="space-y-3">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full flex-shrink-0`} />
                        <span className="text-blanco font-medium text-sm md:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom decoration */}
                  <div className="flex justify-end pt-6">
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

        {/* Bottom Tech Stats */}
        <div className="marketing-inmersivo-technologies-stats grid grid-cols-1 md:grid-cols-4 gap-8 pt-20 border-t border-blanco/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-violeta pb-2">
              {t("services.marketing-inmersivo.technologies.stats.platforms.number")}
            </div>
            <p className="text-sm md:text-base text-gray-300 font-medium">
              {t("services.marketing-inmersivo.technologies.stats.platforms.label")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-lavanda pb-2">
              {t("services.marketing-inmersivo.technologies.stats.devices.number")}
            </div>
            <p className="text-sm md:text-base text-gray-300 font-medium">
              {t("services.marketing-inmersivo.technologies.stats.devices.label")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-teal pb-2">
              {t("services.marketing-inmersivo.technologies.stats.integrations.number")}
            </div>
            <p className="text-sm md:text-base text-gray-300 font-medium">
              {t("services.marketing-inmersivo.technologies.stats.integrations.label")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-violeta pb-2">
              {t("services.marketing-inmersivo.technologies.stats.uptime.number")}
            </div>
            <p className="text-sm md:text-base text-gray-300 font-medium">
              {t("services.marketing-inmersivo.technologies.stats.uptime.label")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}