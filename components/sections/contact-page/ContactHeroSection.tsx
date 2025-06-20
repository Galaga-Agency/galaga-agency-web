"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ContactHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-hero-section relative min-h-screen bg-gradient-to-br from-azul-profundo via-teal to-negro flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="contact-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base">
              {t("contactPage.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="contact-hero-title text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa contact-hero-word-1">
                  {t("contactPage.hero.hablemos")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-mandarina via-naranja-tostado to-verde-azulado bg-clip-text text-transparent contact-hero-word-2">
                  {t("contactPage.hero.proyecto")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="contact-hero-subtitle text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-lg max-w-4xl mx-auto">
              {t("contactPage.hero.subtitle")}
            </p>
          </div>

          {/* Contact Methods Preview */}
          <div className="contact-hero-methods grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
            <div className="text-center contact-hero-method" data-index="0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal to-azul-profundo rounded-2xl flex items-center justify-center mx-auto pb-4 shadow-xl">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-turquesa pb-2">
                {t("contactPage.hero.methods.email")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90">
                info@galagaagency.com
              </p>
            </div>
            
            <div className="text-center contact-hero-method" data-index="1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-mandarina to-naranja-tostado rounded-2xl flex items-center justify-center mx-auto pb-4 shadow-xl">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-mandarina pb-2">
                {t("contactPage.hero.methods.location")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90">
                Las Palmas, España
              </p>
            </div>

            <div className="text-center contact-hero-method" data-index="2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violeta to-azul-profundo rounded-2xl flex items-center justify-center mx-auto pb-4 shadow-xl">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violeta pb-2">
                {t("contactPage.hero.methods.response")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90">
                24h garantizadas
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="contact-hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70">
            <div className="flex flex-col items-center gap-2">
              <span className="text-hielo text-xs uppercase tracking-wider">
                {t("contactPage.hero.scroll")}
              </span>
              <div className="w-6 h-10 border-2 border-hielo rounded-full flex justify-center">
                <div className="w-1 h-3 bg-hielo rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}