"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary to-accent overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          {/* Impact statement */}
          <div className="mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-lg font-semibold border border-white/30">
              🚀 {t("hero.trustedBy")} 100+ empresas
            </span>
          </div>

          {/* Main headline - WHITE AND MASSIVE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter max-w-7xl mx-auto">
            <span className="block mb-4 transform hover:scale-105 transition-transform duration-500">
              {t("hero.transformamos")} {t("hero.negocios")}
            </span>
            <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-transform duration-500 delay-100 whitespace-nowrap">
              {t("hero.sinComplicaciones")}
            </span>
          </h1>

          {/* Power subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            <strong className="text-white">{t("hero.subtitle")}</strong>
          </p>

          {/* Value proposition cards - FLOATING */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("hero.organize")}
              </h3>
              <p className="text-white/80">Sistemas que organizan tu caos</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("hero.automate")}
              </h3>
              <p className="text-white/80">IA que trabaja mientras duermes</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("hero.connect")}
              </h3>
              <p className="text-white/80">Clientes que no te olvidan</p>
            </div>
          </div>

          {/* MASSIVE CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="bg-white text-primary px-16 py-6 rounded-2xl text-2xl font-black hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 shadow-xl"
            >
              🚀 {t("hero.startTransformation")}
            </Link>
            <Link
              href="/about"
              className="border-3 border-white/50 text-white px-16 py-6 rounded-2xl text-2xl font-black hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md"
            >
              {t("hero.learnMore")} →
            </Link>
          </div>

          {/* Success metrics - IMPACTFUL */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                100+
              </div>
              <div className="text-white/80 font-semibold">
                Empresas transformadas
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                35+
              </div>
              <div className="text-white/80 font-semibold">
                Años de experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                24h
              </div>
              <div className="text-white/80 font-semibold">
                Respuesta garantizada
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                100%
              </div>
              <div className="text-white/80 font-semibold">Enfoque humano</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
