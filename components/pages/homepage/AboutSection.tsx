// components/pages/homepage/AboutSection.tsx  (bubbles pulled up to overlap hero)
"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaRocket, FaCogs, FaUsers } from "react-icons/fa";
import ValueBubbles from "@/components/pages/homepage/ValueBubbles";
import Image from "next/image";

export default function HomepageAboutSection() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-visible">
      {/* Overlap hero */}
      <div className="absolute -top-[320px] md:-top-[360px] lg:-top-[160px] left-0 right-0 z-[60] pointer-events-none overflow-visible">
        <ValueBubbles />
      </div>

      <section
        className="homepage-about-section section relative z-20 overflow-x-hidden overflow-y-visible"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #c3e5ef 100%)",
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
            style={{ clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)" }}
          />
        </div>

        <div className="pt-[300px] md:pt-24 lg:pt-72 relative z-10">
          <div className="container">
            <div className="text-center pb-16 md:pb-20">
              <h2 className="fade-in-up opacity-0 section-title text-teal leading-tight tracking-tight pb-6">
                {t("homepage.about-section.mainTitle")}
              </h2>
              <p className="fade-in-up opacity-0 text-lg md:text-xl text-negro leading-relaxed px-4">
                {t("homepage.about-section.subtitle")}
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-12">
                {/* Block 1 */}
                <div className="block-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="px-4 lg:px-0">
                    <div className="flex items-center gap-6 pb-8">
                      <div className="flex-shrink-0 block-icon-1 opacity-0 w-16 h-16 md:w-20 md:h-20 bg-orange-gradient rounded-full flex items-center justify-center shadow-2xl">
                        <Image
                          src="/assets/img/symbols/single-chevron-white.webp"
                          alt=""
                          width={16}
                          height={16}
                          className="w-10 h-10 drop-shadow-lg translate-y-1 -translate-x-0.5"
                        />
                      </div>
                      <div className="block-title-1 opacity-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                          {t("homepage.about-section.services-block.title")}
                        </h3>
                      </div>
                    </div>
                    <p className="block-description-1 opacity-0 text-base md:text-lg text-negro leading-relaxed pb-6">
                      {t("homepage.about-section.services-block.description")}
                    </p>
                    <p className="block-description-1 opacity-0 text-base md:text-lg text-azul-profundo font-semibold leading-relaxed">
                      {t("homepage.about-section.services-block.highlight")}
                    </p>
                  </div>

                  <div className="block-image-1 opacity-0 relative lg:order-2 px-4 lg:px-0">
                    <div className="bg-gradient-to-br from-teal to-turquesa p-8 rounded-2xl text-white shadow-2xl">
                      <h4 className="text-xl font-bold pb-6">
                        {t("homepage.about-section.services-block.cardTitle")}
                      </h4>
                      <div className="flex flex-col gap-4">
                        {[
                          "homepage.about-section.services-block.steps.analysis",
                          "homepage.about-section.services-block.steps.strategy",
                          "homepage.about-section.services-block.steps.implementation",
                          "homepage.about-section.services-block.steps.support",
                        ].map((k) => (
                          <div className="flex items-center gap-3" key={k}>
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                            <span className="text-base">{t(k)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="block-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="px-4 lg:px-0 lg:order-2">
                    <div className="flex items-center gap-6 pb-8">
                      <div className="block-icon-2 opacity-0 w-16 h-16 md:w-20 md:h-20 bg-teal-gradient rounded-full flex items-center justify-center shadow-2xl">
                        <FaCogs className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                      </div>
                      <div className="block-title-2 opacity-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                          {t(
                            "homepage.about-section.digitalization-block.title"
                          )}
                        </h3>
                      </div>
                    </div>
                    <p className="block-description-2 opacity-0 text-base md:text-lg text-negro leading-relaxed pb-8">
                      {t(
                        "homepage.about-section.digitalization-block.shortDescription"
                      )}
                    </p>
                  </div>

                  <div className="block-image-2 opacity-0 relative lg:order-1 px-4 lg:px-0">
                    <div className="bg-gradient-to-br from-teal to-azul-profundo p-8 rounded-2xl text-white shadow-2xl">
                      <h4 className="text-xl font-bold pb-6">
                        {t(
                          "homepage.about-section.digitalization-block.cardTitle"
                        )}
                      </h4>
                      <div className="flex flex-col gap-4">
                        {[
                          "homepage.about-section.digitalization-block.steps.systems",
                          "homepage.about-section.digitalization-block.steps.cloud",
                          "homepage.about-section.digitalization-block.steps.training",
                          "homepage.about-section.digitalization-block.steps.grants",
                        ].map((k) => (
                          <div className="flex items-center gap-3" key={k}>
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                            <span className="text-base">{t(k)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="block-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="px-4 lg:px-0">
                    <div className="flex items-center gap-6 pb-8">
                      <div className="block-icon-3 opacity-0 w-16 h-16 md:w-20 md:h-20 bg-skyblue-gradient rounded-full flex items-center justify-center shadow-2xl">
                        <FaUsers className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                      </div>
                      <div className="block-title-3 opacity-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo leading-tight">
                          {t("homepage.about-section.clients-block.title")}
                        </h3>
                      </div>
                    </div>
                    <p className="block-description-3 opacity-0 text-base md:text-lg text-negro leading-relaxed pb-8">
                      {t(
                        "homepage.about-section.clients-block.shortDescription"
                      )}
                    </p>
                  </div>

                  <div className="block-image-3 opacity-0 relative lg:order-2 px-4 lg:px-0">
                    <div className="grid grid-cols-1 gap-4">
                      {(
                        [
                          [
                            "homepage.about-section.clients-block.retail.title",
                            "homepage.about-section.clients-block.retail.need",
                            "from-blanco/20 to-blanco/80",
                            "border-blanco",
                          ],
                          [
                            "homepage.about-section.clients-block.growing.title",
                            "homepage.about-section.clients-block.growing.need",
                            "from-mandarina/0 to-mandarina/10",
                            "border-mandarina",
                          ],
                          [
                            "homepage.about-section.clients-block.innovative.title",
                            "homepage.about-section.clients-block.innovative.need",
                            "from-violeta/20 to-azul-profundo/20",
                            "border-violeta",
                          ],
                        ] as const
                      ).map(([titleKey, needKey, grad, border], i) => (
                        <div
                          key={i}
                          className={`bg-gradient-to-r ${grad} p-6 rounded-xl border-l-4 ${border}`}
                        >
                          <h5 className="font-bold text-azul-profundo text-lg pb-2">
                            {t(titleKey)}
                          </h5>
                          <p className="text-sm text-negro">{t(needKey)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* end blocks */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
