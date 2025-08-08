"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  return (
    <div className="container relative z-10 pb-36 md:pb-12 lg:pb-32 overflow-hidden">
      {/* Main question - centered like screenshot */}
      <div className="text-center pb-16">
        <h2 className="section-title text-teal pb-8">
          {t("homepage.whyChoose.title")}
        </h2>
        <div className="mx-auto">
          <p className="text-lg md:text-xl text-grafito leading-relaxed">
            {t("homepage.whyChoose.intro")}
          </p>
          <p className="text-xl md:text-2xl font-semibold text-negro pt-2">
            {t("homepage.whyChoose.mainMessage")}
          </p>
        </div>
      </div>

      {/* Circles */}
      <div className="relative min-h-[600px] md:min-h-[500px]">
        <img
          src="/assets/img/symbols/double-chevron-teal.webp"
          alt="Double Chevron"
          className="absolute left-1/2 top-[45%] -translate-x-2/3 -translate-y-1/2 opacity-10 hidden md:block w-[55vw] xl:w-[40vw] z-0 pointer-events-none select-none"
          aria-hidden="true"
        />

        {/* Top left circle - Transparency */}
        <div className="why-circle-1 absolute top-0 left-[10%] md:left-[5%] lg:left-[15%] opacity-0">
          <div className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-radial-[at_30%_30%] from-white from-20% via-neutral-50 via-60% to-neutral-200 to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-base lg:text-lg xl:text-xl font-bold text-azul-profundo pb-3 leading-tight tracking-tight">
                {t("homepage.whyChoose.transparency.title")}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg leading-relaxed font-medium text-grafito">
                {t("homepage.whyChoose.transparency.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Top right circle - Strategy */}
        <div className="why-circle-2 absolute top-[35%] md:top-0 right-[1%] md:right-[5%] lg:right-[15%] opacity-0">
          <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full bg-radial-[at_25%_25%] from-turquesa from-15% via-teal via-60% to-azul-profundo to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center flex flex-col items-center">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-blanco pb-3 leading-tight tracking-tight max-w-[85%] text-center px-auto">
                {t("homepage.whyChoose.strategy.title")}
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-medium text-hielo">
                {t("homepage.whyChoose.strategy.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom center circle -Involvement */}
        <div className="why-circle-3 absolute -bottom-24 md:bottom-12 lg:bottom-0 left-1/2 transform -translate-x-1/2 opacity-0">
          <div className="w-60 h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full bg-radial-[at_35%_20%] from-azul-profundo from-40% via-teal via-80% to-negro to-95% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-base lg:text-lg xl:text-xl font-bold text-blanco pb-3 leading-tight tracking-tight">
                {t("homepage.whyChoose.involvement.title")}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg leading-relaxed font-medium text-turquesa">
                {t("homepage.whyChoose.involvement.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
