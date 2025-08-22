"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="services-process-section section relative bg-gradient-to-br from-azul-profundo via-teal to-negro overflow-hidden">
      <div className="container relative z-10 overflow-hidden">
        <div className="text-center pb-12">
          <h2 className="fade-in-up opacity-0 section-title text-blanco pb-8">
            {t("services-page.process-section.title")}
          </h2>
          <div className="mx-auto">
            <p className="fade-in-up opacity-0 text-lg md:text-xl text-hielo/90 leading-relaxed">
              {t("services-page.process-section.subtitle")}
            </p>
          </div>
        </div>

        {/* Circles */}
        <div className="relative flex justify-center">
          <div className="relative min-h-[780px] md:min-h-[380px] lg:min-h-[400px] w-full md:w-[768px] lg:w-[1070px] overflow-visible">
            {/* Bubble 1 - Discovery */}
            <div className="bounce-in-up opacity-0 absolute top-0 left-0 md:top-0 md:left-0">
              <div className="w-48 h-48 lg:w-54 lg:h-54 xl:w-60 xl:h-60 rounded-full bg-radial-[at_30%_30%] from-white from-20% via-neutral-50 via-60% to-azul-profundo/30 to-90% shadow-2xl flex items-center justify-center p-5 backdrop-blur-sm">
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center text-sm font-black mx-auto">
                    01
                  </div>
                  <h3 className="text-sm lg:text-base xl:text-lg font-bold text-azul-profundo pt-3 pb-2 leading-tight tracking-tight">
                    {t("services-page.process-section.discovery.title")}
                  </h3>
                  <p className="text-xs lg:text-sm xl:text-base leading-relaxed font-medium text-azul-profundo/80">
                    {t("services-page.process-section.discovery.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble 2 - Strategy */}
            <div className="bounce-in-up opacity-0 absolute top-32 right-0 md:top-auto md:bottom-0 md:left-[15%] lg:left-[18%] lg:bottom-8">
              <div className="w-60 h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full bg-radial-[at_25%_25%] from-turquesa from-15% via-teal via-60% to-azul-profundo to-90% shadow-2xl flex items-center justify-center p-6 backdrop-blur-sm">
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-teal flex items-center justify-center text-sm font-black">
                    02
                  </div>
                  <h3 className="text-sm lg:text-base xl:text-lg font-bold text-blanco pt-3 pb-2 leading-tight tracking-tight">
                    {t("services-page.process-section.strategy.title")}
                  </h3>
                  <p className="text-xs lg:text-sm xl:text-base leading-relaxed font-medium text-hielo">
                    {t("services-page.process-section.strategy.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble 3 - Implementation */}
            <div className="bounce-in-up opacity-0 absolute top-82 left-0 md:top-0 md:left-auto md:right-[20%] lg:right-[25%]">
              <div className="w-68 h-68 lg:w-76 lg:h-76 xl:w-84 xl:h-84 rounded-full bg-radial-[at_35%_20%] from-azul-profundo from-40% via-teal via-80% to-negro to-95% shadow-2xl flex items-center justify-center p-7 backdrop-blur-sm">
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-turquesa text-azul-profundo flex items-center justify-center text-sm font-black mx-auto">
                    03
                  </div>
                  <h3 className="text-sm lg:text-base xl:text-lg font-bold text-blanco pt-3 pb-2 leading-tight tracking-tight">
                    {t("services-page.process-section.implementation.title")}
                  </h3>
                  <p className="text-xs lg:text-sm xl:text-base leading-relaxed font-medium text-turquesa">
                    {t("services-page.process-section.implementation.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble 4 - Optimization */}
            <div className="bounce-in-up opacity-0 absolute top-136 right-0 md:top-auto md:bottom-0 md:right-0 lg:right-0 lg:bottom-8">
              <div className="w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full bg-radial-[at_30%_30%] from-white from-20% via-neutral-50 via-60% to-azul-profundo/30 to-90% shadow-2xl flex items-center justify-center p-6 backdrop-blur-sm">
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center text-sm font-black mx-auto">
                    04
                  </div>
                  <h3 className="text-sm lg:text-base xl:text-lg font-bold text-azul-profundo pt-3 pb-2 leading-tight tracking-tight">
                    {t("services-page.process-section.optimization.title")}
                  </h3>
                  <p className="text-xs lg:text-sm xl:text-base leading-relaxed font-medium text-azul-profundo/80">
                    {t("services-page.process-section.optimization.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}