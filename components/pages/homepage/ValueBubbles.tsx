"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

export default function ValueBubbles() {
  const { t } = useTranslation();

  return (
    <div className="value-bubbles-layer container relative z-[60] pointer-events-none overflow-visible">
      <div className="relative min-h-[520px] md:min-h-[500px]">
        {/* Top-left */}
        <div className="absolute top-0 left-[10%] md:left-[6%] lg:left-10 xl:left-[15%]">
          <div className="value-bubble opacity-0 will-change-transform">
            <div className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-white via-neutral-50 to-azul-profundo/30 shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="text-center flex flex-col items-center">
                <FaShuffle className="text-4xl lg:text-6xl text-[#176161] drop-shadow-lg pb-4" />
                <h3 className="text-base lg:text-xl font-bold pb-2 text-[#121c30]">
                  {t("homepage.about-section.organize")}
                </h3>
                <p className="text-sm lg:text-lg font-medium text-[#2c2c2c]">
                  {t("homepage.about-section.organizeDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top-right */}
        <div className="absolute top-[32%] md:top-[8%] right-[2%] md:right-[6%] lg:right-10 xl:right-[15%]">
          <div className="value-bubble opacity-0 will-change-transform">
            <div className="w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-azul-profundo via-teal to-negro shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="text-center flex flex-col items-center">
                <FaHandshake className="text-4xl lg:text-6xl text-[#c3e5ef] drop-shadow-lg pb-4" />
                <h3 className="text-base lg:text-xl font-bold pb-2 text-white">
                  {t("homepage.about-section.connect")}
                </h3>
                <p className="text-sm lg:text-lg font-medium text-[#4cbcc5]">
                  {t("homepage.about-section.connectDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-center */}
        <div className="absolute -bottom-24 md:bottom-12 lg:bottom-6 left-1/2 -translate-x-1/2">
          <div className="value-bubble opacity-0 will-change-transform">
            <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full bg-gradient-to-br from-turquesa via-teal to-azul-profundo shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="text-center flex flex-col items-center">
                <FaRobot className="text-5xl lg:text-7xl text-white drop-shadow-lg pb-4" />
                <h3 className="text-lg lg:text-2xl font-bold pb-2 text-white text-center max-w-[85%]">
                  {t("homepage.about-section.automate")}
                </h3>
                <p className="text-base lg:text-xl font-medium text-[#c3e5ef] text-center">
                  {t("homepage.about-section.automateDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
