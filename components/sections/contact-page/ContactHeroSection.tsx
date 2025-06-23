"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { MdEmail, MdLocationOn, MdSchedule } from "react-icons/md";

export default function ContactHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/contacto/hero.png')",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Multi-layer gradient overlay for perfect blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/85 via-teal/75 to-negro/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/60 via-transparent to-azul-profundo/40 z-15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-transparent to-violeta/20 z-15"></div>

      {/* Background decorative elements - kept but more subtle */}
      <div className="absolute inset-0 z-18">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="contact-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("contact-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="contact-hero-title text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa contact-hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("contact-page.hero.hablemos")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-mandarina via-naranja-tostado to-verde-azulado bg-clip-text text-transparent contact-hero-word-2 drop-shadow-xl opacity-0 translate-y-24">
                  {t("contact-page.hero.proyecto")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="contact-hero-subtitle text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("contact-page.hero.subtitle")}
            </p>
          </div>

          {/* Contact Methods Preview */}
          <div className="contact-hero-methods grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
            <div
              className="flex flex-col justify-center items-center contact-hero-method opacity-0 translate-y-20"
              data-index="0"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal to-azul-profundo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl contact-hero-icon">
                <MdEmail className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-turquesa py-2 drop-shadow-lg">
                {t("contact-page.hero.methods.email")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                info@galagaagency.com
              </p>
            </div>

            <div
              className="flex flex-col justify-center items-center contact-hero-method opacity-0 translate-y-20"
              data-index="1"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-mandarina to-naranja-tostado rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl contact-hero-icon">
                <MdLocationOn className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-mandarina py-2 drop-shadow-lg">
                {t("contact-page.hero.methods.location")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                Las Palmas, España
              </p>
            </div>

            <div
              className="flex flex-col justify-center items-center contact-hero-method opacity-0 translate-y-20"
              data-index="2"
            >
              <div className=" w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violeta to-azul-profundo rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl contact-hero-icon">
                <MdSchedule className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violeta py-2 drop-shadow-lg">
                {t("contact-page.hero.methods.response")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                24h garantizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
