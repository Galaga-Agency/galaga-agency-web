"use client";

import ValuePropCard from "@/components/ValuePropCard";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake, FaLightbulb } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

export default function HomepageAboutSection() {
  const { t } = useTranslation();

  const valueProps = [
    {
      icon: <FaShuffle />,
      titleKey: "hero.organize",
      descriptionKey: "hero.organizeDesc",
      use3DRobot: false,
    },
    {
      icon: <FaRobot />,
      titleKey: "hero.automate",
      descriptionKey: "hero.automateDesc",
      use3DRobot: true,
    },
    {
      icon: <FaHandshake />,
      titleKey: "hero.connect",
      descriptionKey: "hero.connectDesc",
      use3DRobot: false,
    },
  ];

  return (
    <section className="homepage-about-section section relative bg-gradient-to-br from-blanco to-hielo overflow-visible">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        {/* Top diagonal - Subtle teal light */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/40 via-turquesa/10 to-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
          }}
        ></div>

        {/* Bottom diagonal - Pure white */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white via-hielo/20 to-white"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      {/* Overflowing cards at the top */}
      <div className="absolute top-32 md:top-0 left-0 right-0 -translate-y-1/4 md:-translate-y-1/3 z-30 overflow-visible">
        <div className="px-32 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible ">
            {valueProps.map((item, idx) => (
              <ValuePropCard
                key={idx}
                icon={item.icon}
                titleKey={item.titleKey}
                descriptionKey={item.descriptionKey}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container pt-[750px] md:pt-56 lg:pt-48 relative z-10">
        {/* Main heading section */}
        <div className="text-center pb-16 md:pb-20 lg:pb-24">
          <h2 className="section-title text-teal tracking-tight py-8">
            {t("homepage.about.poeticHeading")}
          </h2>

          <div className="px-4 md:px-8">
            <p className="text-large text-azul-profundo font-light leading-relaxed">
              <span className="font-semibold text-negro text-2xl">
                {t("homepage.about.galagaAgency")}
              </span>{" "}
              <span className="text-grafito text-xl">
                {t("homepage.about.mainDescription")}
              </span>
            </p>
          </div>
        </div>

        {/* Two circles side by side like in screenshot */}
        <div className="relative h-96 lg:h-[500px] flex justify-center items-center gap-8 lg:gap-16">
          
          {/* Left circle with question */}
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-turquesa rounded-full flex items-center justify-center text-center">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white px-8">
                {t("homepage.about.focusTitle")}
              </h3>
            </div>
            {/* Small icon circle positioned outside */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-azul-profundo rounded-full flex items-center justify-center">
              <FaHandshake className="text-turquesa text-lg" />
            </div>
          </div>

          {/* Right circle with description */}
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-verde-azulado rounded-full flex items-center justify-center text-center">
              <p className="text-lg lg:text-xl text-white leading-relaxed px-8">
                {t("homepage.about.ourFocus")}
              </p>
            </div>
            {/* Small white circle positioned outside */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-turquesa rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Second bubble for the offer content */}
        <div className="relative pt-16 md:pt-20 lg:pt-24 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-120 lg:h-120 bg-teal rounded-full flex items-center justify-center text-center">
              <div className="px-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white pb-4">
                  {t("homepage.about.offerTitle")}
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  {t("homepage.about.whatWeOffer")}
                </p>
              </div>
            </div>
            {/* Small icon circle for this bubble */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-azul-profundo rounded-full flex items-center justify-center">
              <FaLightbulb className="text-turquesa text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}