"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function AboutStorySection() {
  const { t } = useTranslation();

  return (
    <section className="about-story-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        {/* Top diagonal - Light teal gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)"
          }}
        ></div>
        
        {/* Bottom diagonal - Pure white */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("about.story.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="about-story-title text-4xl md:text-5xl lg:text-6xl font-black text-teal leading-tight tracking-tight pb-6">
            {t("about.story.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-grafito font-light leading-relaxed px-4">
            {t("about.story.subtitle")}
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Background decorative element */}
          <div className="absolute top-0 right-0 md:right-8 lg:right-16 pointer-events-none z-0 opacity-20">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-teal/30 to-turquesa/30 rounded-full blur-3xl"></div>
          </div>

          {/* Timeline Content */}
          <div className="relative z-10 flex flex-col gap-16 md:gap-20 lg:gap-24">
            
            {/* First Story Block - Traditional Business */}
            <div className="story-block grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-story="1">
              <div className="px-4 lg:px-0">
                <div className="flex items-center gap-6 pb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal to-azul-profundo rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h6v4H7V6zm6 6v2H7v-2h6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-teal uppercase tracking-wider">1985 - 2020</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-negro leading-tight">
                      {t("about.story.traditional.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-grafito leading-relaxed">
                  {t("about.story.traditional.description")}
                </p>
              </div>
              
              <div className="relative lg:order-2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-teal/20 group hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/img/sobre-nosotros/dosxdos.webp"
                    alt="dos x dos Grupo Imagen - Traditional Business"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay for brand consistency */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-azul-profundo/10"></div>
                </div>
              </div>
            </div>

            {/* Second Story Block - Gaming Evolution */}
            <div className="story-block grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-story="2">
              <div className="relative lg:order-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-mandarina/20 group hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/img/sobre-nosotros/galaga-gaming.png"
                    alt="Galaga Gaming - Gaming Innovation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay for brand consistency */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mandarina/10 to-naranja-tostado/10"></div>
                </div>
              </div>
              
              <div className="px-4 lg:px-0 lg:order-2">
                <div className="flex items-center gap-6 pb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-mandarina to-naranja-tostado rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-mandarina uppercase tracking-wider">2020</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-negro leading-tight">
                      {t("about.story.gaming.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-grafito leading-relaxed">
                  {t("about.story.gaming.description")}
                </p>
              </div>
            </div>

            {/* Third Story Block - Agency Today */}
            <div className="story-block grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-story="3">
              <div className="px-4 lg:px-0">
                <div className="flex items-center gap-6 pb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violeta to-azul-profundo rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-violeta uppercase tracking-wider">{t("about.story.today.year")}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-negro leading-tight">
                      {t("about.story.today.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-grafito leading-relaxed pb-6">
                  {t("about.story.today.description")}
                </p>
                
                {/* Key Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-hielo/50">
                    <div className="text-lg font-bold text-teal pb-1">{t("about.story.values.strategy")}</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-hielo/50">
                    <div className="text-lg font-bold text-mandarina pb-1">{t("about.story.values.technology")}</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-hielo/50">
                    <div className="text-lg font-bold text-violeta pb-1">{t("about.story.values.emotion")}</div>
                  </div>
                </div>
              </div>
              
              <div className="relative lg:order-2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-violeta/20 group hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/img/sobre-nosotros/gaming.jpg"
                    alt="Galaga Agency Today - Digital Dashboard"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay for brand consistency */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violeta/10 to-azul-profundo/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}