"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import MetricCard from "@/components/MetricCard";

const metrics = [
  { value: "100+", labelKey: "hero.companiesTransformed" },
  { value: "35+", labelKey: "hero.yearsExperience" },
  { value: "24h", labelKey: "hero.guaranteedResponse" },
  { value: "100%", labelKey: "hero.humanApproach" },
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section section relative min-h-[110vh] bg-hero-gradient">
      {/* Background overlay for image blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/70 via-primary-800/60 to-primary-600/50 z-10"></div>
      
      <div className="container relative z-20">
        <div className="hero-content h-full flex flex-col justify-center mx-auto">
          {/* Main Headline */}
          <div className="flex flex-col text-center pb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight drop-shadow-2xl overflow-visible">
              <span className="block mb-8">
                <span data-anim="transformamos" className="text-primary-100">
                  {t("hero.transformamos")}
                </span>{" "}
                <span data-anim="negocios" className="text-white">
                  {t("hero.negocios")}
                </span>
              </span>
              <span className="block">
                <span
                  data-anim="sinComplicaciones"
                  className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent"
                >
                  {t("hero.sinComplicaciones")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary-50/95 leading-relaxed font-medium drop-shadow-lg">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Success Metrics */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                value={metric.value}
                labelKey={metric.labelKey}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}