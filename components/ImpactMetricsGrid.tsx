"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { ImpactMetric } from "@/types/clients";

interface ImpactMetricsGridProps {
  metrics: ImpactMetric[];
}

export default function ImpactMetricsGrid({ metrics }: ImpactMetricsGridProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal/5 via-turquesa/10 to-mandarina/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-hielo/50 shadow-lg">
        <h3 className="about-clients-success-title text-2xl md:text-3xl font-bold text-negro pb-8">
          {t("about-page.clients.impact.title")}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-black text-${metric.color} pb-2`}>
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-grafito font-medium">
                {t(metric.labelKey)}
              </div>
            </div>
          ))}
        </div>

        <p className="text-base md:text-lg text-azul-profundo font-medium leading-relaxed">
          {t("about-page.clients.impact.summary")}
        </p>
      </div>
    </div>
  );
}