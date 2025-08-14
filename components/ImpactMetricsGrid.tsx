"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { ImpactMetric } from "@/types/clients";

interface ImpactMetricsGridProps {
  metrics: ImpactMetric[];
}

export default function ImpactMetricsGrid({ metrics }: ImpactMetricsGridProps) {
  const { t } = useTranslation();

  return (
    <div className="impact-metrics-section relative p-12 md:p-16 bg-gradient-to-br from-teal/10 to-turquesa/10 rounded-3xl border border-hielo shadow-lg">
      {/* Background decorative element */}
      <div className="impact-metrics-bg absolute inset-0 opacity-5 overflow-hidden rounded-3xl">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-mandarina rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-turquesa rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <h3 className="impact-metrics-title text-3xl md:text-4xl font-bold text-negro pb-12">
          {t("about-page.clients.impact.title")}
        </h3>

        <div className="impact-metrics-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="impact-metric text-center p-6 bg-blanco rounded-2xl shadow-md border border-hielo hover:border-teal/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="impact-metric-value text-3xl md:text-4xl font-black text-teal pb-2">
                {metric.value}
              </div>
              <div className="impact-metric-label text-sm md:text-base text-grafito font-medium">
                {t(metric.label)}
              </div>
            </div>
          ))}
        </div>

        <p className="impact-metrics-summary text-base md:text-lg text-negro font-light leading-relaxed">
          {t("about-page.clients.impact.summary")}
        </p>
      </div>
    </div>
  );
}
