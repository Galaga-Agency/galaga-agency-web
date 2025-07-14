"use client";

import { useTranslation } from "@/hooks/useTranslation";

const metrics = [
  { value: "100+", labelKey: "hero.companiesTransformed" },
  { value: "35+", labelKey: "hero.yearsExperience" },
  { value: "24h", labelKey: "hero.guaranteedResponse" },
  { value: "100%", labelKey: "hero.humanApproach" },
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section relative min-h-[110vh] xl:min-h-[120vh] flex items-center overflow-hidden">
      {/* Background following brand book gradient style */}
      <div className="absolute inset-0 bg-hero-gradient"></div>

      {/* Subtle overlay maintaining brand book transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-azul-profundo/20 via-transparent to-brand-negro/30"></div>

      {/* Geometric elements inspired by brand book circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-turquesa/10 circle-element blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-hielo/15 circle-element blur-2xl"></div>

      <div className="container relative z-20 w-full py-20">
        <div className="hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Mobile Logo following brand book guidelines */}
          <div className="block portrait:block landscape:hidden lg:hidden pb-8 md:pb-12">
            <img
              src="/assets/img/logos/logo-mobile.webp"
              alt="Galaga Agency"
              className="w-20 h-auto md:w-24 opacity-95 drop-shadow-2xl"
            />
          </div>

          {/* Main Headline - Following brand book typography */}
          <div className="flex flex-col text-center pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-brand-blanco drop-shadow-2xl overflow-visible px-4">
              {/* Always two lines - mobile and desktop */}
              <span className="flex flex-col items-center gap-2">
                <span
                  data-anim="innovamos"
                  className="text-brand-turquesa inline-block drop-shadow-xl opacity-0 scale-[2] -translate-y-24 blur-[20px]"
                >
                  {t("homepage.hero.innovamos")}
                </span>

                {/* Rolling text container - CENTERED ON SCREEN */}
                <span className="relative w-full flex justify-center">
                  {/* First text: "for you" with strike line INSIDE */}
                  <span
                    data-anim="for-you"
                    className="text-brand-hielo inline-block drop-shadow-xl opacity-0 scale-[2] -translate-y-24 blur-[20px] whitespace-nowrap relative"
                  >
                    {t("homepage.hero.forYou")}
                    {/* Strike-through line - ONLY CROSSES THE TEXT */}
                    <span
                      data-anim="strike-line"
                      className="absolute top-[55%] left-0 w-full h-2 md:h-4 bg-brand-hielo opacity-0 scale-x-0 origin-left z-10"
                      style={{ transform: "translateY(-50%)" }}
                    ></span>
                  </span>

                  {/* Second text: "with you" / "contigo" - ABSOLUTELY CENTERED */}
                  <span
                    data-anim="with-you"
                    className="text-brand-hielo absolute top-0 left-1/2 inline-block drop-shadow-xl opacity-0 whitespace-nowrap"
                    style={{ transform: "translateX(-50%) translateY(100%)" }}
                  >
                    {t("homepage.hero.contigo")}
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle with brand book typography */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className=" text-lg md:text-2xl text-brand-hielo leading-relaxed drop-shadow-lg">
              {t("homepage.hero.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
