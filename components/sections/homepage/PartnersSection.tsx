import React from "react";
import { partners } from "@/data/partners";
import { useTranslation } from "@/hooks/useTranslation";

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="partners-section section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="bg-decoration absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="bg-decoration absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"></div>
        <div className="bg-decoration absolute top-1/2 right-1/3 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
      </div>

      <div className="w-full container relative z-10">
        {/* Title */}
        <h2 className="partners-title text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center pb-6 md:pb-8">
          {t("partners.title")}
        </h2>

        {/* Subtitle */}
        <p className="partners-subtitle text-center text-white/70 text-lg md:text-xl pb-16 md:pb-20 lg:pb-24">
          {t("partners.subtitle")}
        </p>

        {/* Partners flowing grid - no cards, just logos */}
        <div className="partners-container w-full">
          {/* First row - 4 logos */}
          <div className="flex justify-center items-center mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full">
              {partners.slice(0, 4).map((partner, index) => (
                <div
                  key={partner.id}
                  className={`partner-logo partner-logo-${index} group cursor-pointer flex justify-center`}
                >
                  <div className="relative">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-28 md:h-32 lg:h-36 xl:h-48 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                  </div>
                  {/* Partner name appears on hover */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-white/80 text-sm font-medium whitespace-nowrap bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - 4 logos, centered */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full">
              {partners.slice(4, 8).map((partner, index) => (
                <div
                  key={partner.id}
                  className={`partner-logo partner-logo-${
                    index + 4
                  } group cursor-pointer flex justify-center`}
                >
                  <div className="relative">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-28 md:h-32 lg:h-36 xl:h-48 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                  </div>
                  {/* Partner name appears on hover */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-white/80 text-sm font-medium whitespace-nowrap bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
