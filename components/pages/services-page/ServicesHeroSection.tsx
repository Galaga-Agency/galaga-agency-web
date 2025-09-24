"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useRef } from "react";
import {
  useScrollIndicator,
  useMousePosition,
} from "@/hooks/useHeroInteractions";
import { animateHero3DElement } from "@/utils/animations/hero-animations";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { Gear3D } from "@/components/3D/Gear3D";

export default function ServicesHeroSection() {
  const { t } = useTranslation();
  const showScrollIndicator = useScrollIndicator();
  const mousePosition = useMousePosition();
  const gearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateHero3DElement({ elementRef: gearRef as any });
  }, []);

  return (
    <section className="services-hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-teal">
      <div
        className="absolute inset-0 opacity-50 transition-all duration-700 ease-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePosition.x}% ${
            mousePosition.y
          }%, rgba(76,188,197,0.9) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, rgba(18,28,48,0.7) 0%, transparent 60%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      />

      <div className="absolute top-20 left-20 w-32 h-32 bg-turquesa/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-azul-profundo/40 rounded-full blur-3xl animate-float-slower" />

      <div
        ref={gearRef}
        className="absolute left-1/2 pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          zIndex: 1,
        }}
      >
        <Gear3D />
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="services-hero-content w-full flex flex-col justify-center items-center text-center min-h-[70vh]">
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <span className="hero-eyebrow text-blanco font-bold tracking-widest uppercase text-sm md:text-base opacity-0">
              {t("services-page.hero-section.eyebrow")}
            </span>
          </div>

          <div className="pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-blanco leading-[0.85] tracking-tighter px-4">
              <span className="block pb-4">
                <span className="hero-word-1 inline-block opacity-0">
                  {t("services-page.hero-section.creamos")}
                </span>
              </span>
              <span className="block">
                <span className="hero-word-2 inline-block opacity-0">
                  {t("services-page.hero-section.elFuturo")}
                </span>
              </span>
            </h1>
          </div>

          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="hero-subtitle text-lg md:text-2xl lg:text-3xl text-blanco/90 leading-relaxed font-light opacity-0">
              {t("services-page.hero-section.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`hero-scroll-indicator absolute bottom-16 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-600 ${
          showScrollIndicator ? "opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}
