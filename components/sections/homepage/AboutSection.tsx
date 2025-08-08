"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaRocket, FaCogs, FaUsers } from "react-icons/fa";
import ValueBubbles from "@/components/ValueBubbles";
import Image from "next/image";

export default function HomepageAboutSection() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Overflowing cards at the top */}
      <div className="absolute top-16 md:top-4 lg:top-10 left-0 right-0 -translate-y-1/3 z-30 w-full pointer-events-none">
        <ValueBubbles />
      </div>

      {/* Main section */}
      <section
        className="homepage-about-section section relative overflow-x-hidden overflow-y-visible"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #c3e5ef 100%)",
        }}
      >
        {/* Diagonal background layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
            }}
          ></div>

          <div
            className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
            style={{
              clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)",
            }}
          ></div>
        </div>

        <div className="pt-[530px] md:pt-72 lg:pt-76 relative z-10">
          <div className="container">
            {/* Section Header */}
            <div className="text-center pb-16 md:pb-20">
              <h2 className="section-title text-teal leading-tight tracking-tight pb-6">
                {t("homepage.about.mainTitle")}
              </h2>

              <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
                {t("homepage.about.subtitle")}
              </p>
            </div>

            {/* Story Timeline */}
            <div className="relative">
              {/* Timeline Content */}
              <div className="relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-12">
                {/* First Block - Services that Transform */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="px-4 lg:px-0">
                    <div className="flex items-center gap-6 pb-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-mandarina/90 via-45% to-naranja-tostado to-100% rounded-full flex items-center justify-center shadow-2xl">
                        <Image
                          src="/assets/img/symbols/single-chevron-white.webp"
                          alt=""
                          width={16}
                          height={16}
                          className="w-10 h-10 drop-shadow-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                          {t("homepage.about.services.title")}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-negro leading-relaxed pb-6">
                      {t("homepage.about.services.description")}
                    </p>
                    <p className="text-base md:text-lg text-azul-profundo font-semibold leading-relaxed">
                      {t("homepage.about.services.highlight")}
                    </p>
                  </div>

                  <div className="relative lg:order-2 px-4 lg:px-0">
                    <div className="bg-gradient-to-br from-teal to-turquesa p-8 rounded-2xl text-white shadow-2xl">
                      <h4 className="text-xl font-bold pb-6">
                        {t("homepage.about.services.cardTitle")}
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">{t("homepage.about.services.steps.analysis")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">
                            {t("homepage.about.services.steps.strategy")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">
                            {t("homepage.about.services.steps.implementation")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">
                            {t("homepage.about.services.steps.support")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Block - Digital Transformation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="px-4 lg:px-0 lg:order-2">
                    <div className="flex items-center gap-6 pb-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-white/20 from-0% via-turquesa/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center shadow-2xl">
                        <FaCogs className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                          {t("homepage.about.digitalization.title")}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-negro leading-relaxed pb-8">
                      {t("homepage.about.digitalization.shortDescription")}
                    </p>
                  </div>

                  <div className="relative lg:order-1 px-4 lg:px-0">
                    <div className="bg-gradient-to-br from-teal to-azul-profundo p-8 rounded-2xl text-white shadow-2xl">
                      <h4 className="text-xl font-bold pb-6">
                        {t("homepage.about.digitalization.cardTitle")}
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">
                            {t("homepage.about.digitalization.steps.systems")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">
                            {t("homepage.about.digitalization.steps.cloud")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">{t("homepage.about.digitalization.steps.training")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="text-base">
                            {t("homepage.about.digitalization.steps.grants")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Block - Our Clients */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="px-4 lg:px-0">
                    <div className="flex items-center gap-6 pb-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% rounded-full flex items-center justify-center shadow-2xl">
                        <FaUsers className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                          {t("homepage.about.clients.title")}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-negro leading-relaxed pb-8">
                      {t("homepage.about.clients.shortDescription")}
                    </p>
                  </div>

                  <div className="relative lg:order-2 px-4 lg:px-0">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gradient-to-r from-blanco/20 to-blanco/80 p-6 rounded-xl border-l-4 border-blanco">
                        <h5 className="font-bold text-azul-profundo text-lg mb-2">
                          {t("homepage.about.clients.retail.title")}
                        </h5>
                        <p className="text-sm text-negro">
                          {t("homepage.about.clients.retail.need")}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-mandarina/0 to-mandarina/10 p-6 rounded-xl border-l-4 border-mandarina">
                        <h5 className="font-bold text-azul-profundo text-lg mb-2">
                          {t("homepage.about.clients.growing.title")}
                        </h5>
                        <p className="text-sm text-negro">
                          {t("homepage.about.clients.growing.need")}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-violeta/20 to-azul-profundo/20 p-6 rounded-xl border-l-4 border-violeta">
                        <h5 className="font-bold text-azul-profundo text-lg mb-2">
                          {t("homepage.about.clients.innovative.title")}
                        </h5>
                        <p className="text-sm text-negro">
                          {t("homepage.about.clients.innovative.need")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}