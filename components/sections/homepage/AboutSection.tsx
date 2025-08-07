"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaHandshake, FaLightbulb } from "react-icons/fa";
import ValueBubbles from "@/components/ValueBubbles";

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
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(195,229,239,0.4) 0%, rgba(76,188,197,0.1) 50%, rgba(255,255,255,1) 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(195,229,239,0.2) 50%, rgba(255,255,255,1) 100%)",
              clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
            }}
          ></div>
        </div>

        {/* Main content */}
        <div className="pt-[500px] md:pt-40 lg:pt-48 xl:pt-64 xxl:pt-56 relative z-10 !px-0">
          <div className="text-center pb-8 md:pb-0 lg:pb-8">
            <h2 className="section-title text-teal tracking-tight py-8">
              {t("homepage.about.poeticHeading")}
            </h2>

            <div className="px-4 md:px-8">
              <p className="text-large text-azul-profundo font-light leading-relaxed">
                <span className="font-semibold text-negro text-xl">
                  {t("homepage.about.galagaAgency")}
                </span>{" "}
                <span className="text-grafito text-xl">
                  {t("homepage.about.mainDescription")}
                </span>
              </p>
            </div>
          </div>

          {/* First Block - Focus */}
          <div className="w-screen relative break-padding-x pt-8">
            <div className="relative h-[500px] md:h-[300px] lg:h-[360px] xxl:h-[400px] mb-32 md:mb-40 lg:mb-48">
              {/* Icon */}
              <div className="absolute -top-6 left-4 md:left-0 xl:left-32 xl:top-0 z-30">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg bg-radial-[at_35%_20%] from-azul-profundo from-40% via-teal via-80% to-negro to-95% border border-white/40 backdrop-blur-sm">
                  <FaHandshake className="text-hielo text-2xl md:text-4xl -rotate-12 drop-shadow-sm" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute top-4 left-[30vw] md:left-[14vw] lg:left-[13vw] xl:left-[18vw] xxl:left-[26vw] -translate-x-1/2 z-20">
                <div className="w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full flex items-center justify-center text-center shadow-xl bg-gradient-to-br from-teal to-turquesa text-white p-6 border border-white/40 backdrop-blur-sm">
                  <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight drop-shadow-sm">
                    {t("homepage.about.focusTitle")}
                  </h3>
                </div>
              </div>

              {/* Desc */}
              <div className="absolute top-36 right-0 md:top-16 z-10">
                <div className="h-82 md:h-60 lg:h-72 w-[95vw] md:w-[80vw] lg:w-[78vw] xxl:w-[60vw] glass-effect border border-white/30 rounded-l-[3rem] shadow-xl pl-8 lg:pl-0 flex items-center justify-center text-left">
                  <p className="text-xl lg:text-2xl text-azul-profundo leading-relaxed max-w-[90%] md:max-w-[80%]">
                    {t("homepage.about.ourFocus")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Block - Offer */}
          <div className="w-screen relative break-padding-x z-50">
            <div className="relative h-[500px] md:h-[300px] lg:h-[360px] xxl:h-[400px] mb-32 md:mb-40 lg:mb-48">
              {/* Desc */}
              <div className="absolute top-36 left-0 md:-left-8 md:top-16 z-10">
                <div className="h-82 md:h-60 lg:h-72 w-[95vw] md:w-[80vw] lg:w-[78vw] xxl:w-[60vw] glass-effect border border-white/30 rounded-r-[3rem] shadow-xl pr-8 flex items-center justify-center text-left">
                  <p className="text-xl lg:text-2xl text-azul-profundo leading-relaxed max-w-[90%] md:max-w-[80%]">
                    {t("homepage.about.whatWeOffer")}
                  </p>
                </div>
              </div>

              {/* Title */}
              <div className="absolute top-4 right-[30vw] md:right-[24vw] lg:right-[20vw] xl:right-[20vw] translate-x-1/2 z-20">
                <div className="w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full flex items-center justify-center text-center shadow-xl bg-radial-[at_35%_20%] from-azul-profundo from-40% via-teal via-80% to-negro to-95% text-white p-6 border border-white/40 backdrop-blur-sm">
                  <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight drop-shadow-sm">
                    {t("homepage.about.offerTitle")}
                  </h3>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute -top-6 right-4 md:right-12 lg:right-16 xl:right-40 xl:top-0 z-30">
                <div className="rotate-4 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-hielo via-white to-hielo border border-white/40 backdrop-blur-sm">
                  <FaLightbulb className="text-teal text-2xl md:text-4xl drop-shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}