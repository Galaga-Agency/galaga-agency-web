"use client";

import { useTranslation } from "@/hooks/useTranslation";

const metrics = [
  { value: "100+", labelKey: "hero.companiesTransformed" },
  { value: "35+", labelKey: "hero.yearsExperience" },
  { value: "24h", labelKey: "hero.guaranteedResponse" },
  { value: "100%", labelKey: "hero.humanApproach" },
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section relative min-h-[110vh] xl:min-h-[120vh] bg-hero-gradient flex items-center">
      {/* Background overlay for image blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/70 via-teal/60 to-mandarina z-10"></div>
      
      <div className="container relative z-20 w-full py-20">
        <div className="hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          
          {/* Mobile Logo - Only visible on portrait orientation */}
          <div className="block portrait:block landscape:hidden lg:hidden pb-8 md:pb-12">
            <img 
              src="/assets/img/logos/logo-mobile.webp" 
              alt="Galaga Agency" 
              className="w-20 h-auto md:w-24 opacity-90 drop-shadow-2xl"
            />
          </div>

          {/* Main Headline */}
          <div className="flex flex-col text-center pb-8 md:pb-12 w-full">
            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-8xl font-black text-blanco tracking-tight drop-shadow-2xl overflow-visible px-4">
              <span className="block md:pb-4">
                <span data-anim="transformamos" className="text-turquesa block md:inline">
                  {t("hero.transformamos")}
                </span>{" "}
                <span data-anim="negocios" className="text-blanco block md:inline">
                  {t("hero.negocios")}
                </span>
              </span>
              <span className="block">
                <span
                  data-anim="sinComplicaciones"
                  className="bg-gradient-to-r from-turquesa to-verde-azulado bg-clip-text text-transparent"
                >
                  {t("hero.sinComplicaciones")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-8 md:pb-12 w-full px-4">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-hielo leading-relaxed font-medium drop-shadow-lg">
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