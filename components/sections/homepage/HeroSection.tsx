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
    <section className="hero-section relative min-h-[110vh] xl:min-h-[120vh] flex items-center overflow-hidden">
      {/* Background following brand book gradient style */}
      <div className="absolute inset-0 bg-hero-gradient"></div>

      {/* Subtle overlay maintaining brand book transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-azul-profundo/20 via-transparent to-brand-negro/30"></div>

      {/* Geometric elements inspired by brand book circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-turquesa/10 circle-element blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-hielo/15 circle-element blur-2xl"></div>

      <div className="container relative z-20 w-full py-20">
        <div className="hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Mobile Logo following brand book guidelines */}
          <div className="block portrait:block landscape:hidden lg:hidden pb-8 md:pb-12">
            <img
              src="/assets/img/logos/logo-mobile.webp"
              alt="Galaga Agency"
              className="w-20 h-auto md:w-24 opacity-95 drop-shadow-2xl"
            />
          </div>

          {/* Main Headline - Following brand book typography */}
          <div className="flex flex-col text-center pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-brand-blanco drop-shadow-2xl overflow-visible px-4">
              <span className="block md:pb-4">
                <span
                  data-anim="transformamos"
                  className="text-brand-turquesa block md:inline drop-shadow-xl opacity-0 scale-[2] -translate-y-24 blur-[20px]"
                >
                  {t("hero.transformamos")}
                </span>{" "}
                <span
                  data-anim="negocios"
                  className="text-brand-hielo block md:inline drop-shadow-xl opacity-0 scale-[2] -translate-y-24 blur-[20px]"
                >
                  {t("hero.negocios")}
                </span>
              </span>
              <span className="block">
                <span
                  data-anim="sinComplicaciones"
                  className="text-brand-blanco drop-shadow-xl opacity-0 scale-0 rotate-180 blur-[10px]"
                >
                  {t("hero.sinComplicaciones")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle with brand book typography */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="homepage-hero-subtitle text-lg md:text-2xl text-brand-hielo leading-relaxed drop-shadow-lg opacity-0">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Brand book inspired metrics display */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="brand-card text-center glass-effect px-6 py-8 hover:glass-effect-dark group transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-teal group-hover:text-turquesa transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm lg:text-base text-grafito group-hover:text-hielo transition-colors pt-2">
                  {t(metric.labelKey)}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
