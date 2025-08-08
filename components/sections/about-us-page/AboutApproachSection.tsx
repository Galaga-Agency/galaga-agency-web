"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaUser, FaCog, FaClock } from "react-icons/fa";

export default function AboutApproachSection() {
  const { t } = useTranslation();

  return (
    <section className="about-approach-section section relative bg-gradient-to-br from-teal-600 via-teal-700 to-slate-800 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <span className="text-gray-300 font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("about-page.approach.eyebrow")}
          </span>

          <h2 className="about-approach-title section-title text-blanco leading-tight pb-6">
            {t("about-page.approach.title")}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            {t("about-page.approach.subtitle")}
          </p>
        </div>

        {/* Approach Bubbles */}
        <div className="relative min-h-[600px] md:min-h-[500px]">
          <img
            src="/assets/img/symbols/double-chevron-white.webp"
            alt="Double Chevron"
            className="absolute left-1/2 top-[45%] -translate-x-2/3 -translate-y-1/2 opacity-10 hidden md:block w-[55vw] xl:w-[40vw] z-0 pointer-events-none select-none"
            aria-hidden="true"
          />
          {/* Top left */}
          <div className="approach-bubble-1 absolute top-0 left-[10%] md:left-[5%] lg:left-8 xl:left-[15%]">
            <div className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-radial-[at_30%_30%] from-turquesa from-20% via-teal via-60% to-azul-profundo to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="text-center flex flex-col items-center">
                <h3 className="text-base lg:text-lg xl:text-xl font-bold text-blanco pb-3 leading-tight tracking-tight">
                  {t("about-page.approach.human.title")}
                </h3>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed font-medium text-hielo">
                  {t("about-page.approach.human.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Top right */}
          <div className="approach-bubble-2 absolute top-[35%] md:top-0 right-[1%] md:right-[5%] lg:right-8 xl:right-[15%]">
            <div className="w-60 h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full bg-radial-[at_30%_30%] from-blanco from-10% via-hielo via-50% to-azul-profundo to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="text-center flex flex-col items-center">
                <h3 className="text-base lg:text-lg xl:text-xl font-bold text-azul-profundo pb-3 leading-tight tracking-tight">
                  {t("about-page.approach.practical.title")}
                </h3>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed font-medium text-azul-profundo">
                  {t("about-page.approach.practical.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom center */}
          <div className="approach-bubble-3 absolute -bottom-24 md:bottom-12 lg:bottom-6 left-[51%] transform -translate-x-1/2">
            <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full bg-radial-[at_25%_25%] from-teal from-10% via-negro via-60% to-negro to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="text-center flex flex-col items-center">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-blanco pb-3 leading-tight tracking-tight max-w-[85%] text-center px-auto">
                  {t("about-page.approach.longterm.title")}
                </h3>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-medium text-gray-300">
                  {t("about-page.approach.longterm.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center pt-36 md:pt-6">
          <p className="about-approach-quote text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed px-4">
            {t("about-page.approach.quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
