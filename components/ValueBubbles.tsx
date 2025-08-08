"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

export default function ValueBubbles() {
  const { t } = useTranslation();

  return (
    <div className="container relative z-10 pt-8 pb-36 md:pb-12 lg:pb-20 overflow-hidden pointer-events-auto">
      {/* Circles layout exactly like WhyChooseUs */}
      <div className="relative min-h-[600px] md:min-h-[500px]">
        {/* Top left - Organizar */}
        <div className="value-card-1 absolute top-0 left-[10%] md:left-[5%] lg:left-[15%] opacity-0">
          <div className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-radial-[at_30%_30%] from-white from-20% via-neutral-50 via-60% to-neutral-200 to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center flex flex-col items-center">
              <div className="pb-4">
                <FaShuffle className="text-4xl lg:text-5xl xl:text-6xl mx-auto filter drop-shadow-lg" style={{ color: "#176161" }} />
              </div>
              <h3 className="text-base lg:text-lg xl:text-xl font-bold pb-3 leading-tight tracking-tight" style={{ color: "#121c30" }}>
                {t("hero.organize")}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg leading-relaxed font-medium" style={{ color: "#2c2c2c" }}>
                {t("hero.organizeDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Top right - Conectar */}
        <div className="value-card-2 absolute top-[35%] md:top-0 right-[1%] md:right-[5%] lg:right-[15%] opacity-0">
          <div className="w-60 h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full bg-radial-[at_35%_20%] from-azul-profundo from-40% via-teal via-80% to-negro to-95% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center flex flex-col items-center">
              <div className="pb-4">
                <FaHandshake className="text-4xl lg:text-5xl xl:text-6xl mx-auto filter drop-shadow-lg" style={{ color: "#c3e5ef" }} />
              </div>
              <h3 className="text-base lg:text-lg xl:text-xl font-bold pb-3 leading-tight tracking-tight" style={{ color: "#ffffff" }}>
                {t("hero.connect")}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg leading-relaxed font-medium" style={{ color: "#4cbcc5" }}>
                {t("hero.connectDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom center - Automatizar */}
        <div className="value-card-3 absolute -bottom-24 md:bottom-12 lg:bottom-6 left-[51%] transform -translate-x-1/2 opacity-0">
          <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full bg-radial-[at_25%_25%] from-turquesa from-15% via-teal via-60% to-azul-profundo to-90% shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center flex flex-col items-center">
              <div className="pb-4">
                <FaRobot className="text-5xl lg:text-6xl xl:text-7xl mx-auto filter drop-shadow-lg" style={{ color: "#ffffff" }} />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold pb-3 leading-tight tracking-tight max-w-[85%] text-center px-auto" style={{ color: "#ffffff" }}>
                {t("hero.automate")}
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-medium" style={{ color: "#c3e5ef" }}>
                {t("hero.automateDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}