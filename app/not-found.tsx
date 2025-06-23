"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Dark Hero Background - similar to your About hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/sobre-nosotros/hero.png')",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Multi-layer gradient overlay matching your About hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/90 via-teal/80 to-negro/85 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/70 via-transparent to-azul-profundo/50 z-15"></div>

      <div className="container relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          {/* Eyebrow like your About sections */}
          <div className="inline-flex items-center gap-3 pb-8">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm drop-shadow-lg">
              Error 404
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Big 404 number */}
          <div className="pb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-turquesa/80 leading-none drop-shadow-2xl">
              404
            </h1>
          </div>

          {/* Title and subtitle matching your About style */}
          <div className="pb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blanco leading-tight pb-6 drop-shadow-xl">
              {t("notFound.title")}
            </h2>
            <p className="text-lg md:text-xl text-hielo/90 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-light">
              {t("notFound.description")}
            </p>
          </div>

          {/* Just two buttons - primary and secondary */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-teal to-azul-profundo text-blanco px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 drop-shadow-lg"
            >
              {t("notFound.goHome")}
            </Link>

            <button
              onClick={() => window.history.back()}
              className="border-2 border-hielo/50 text-hielo px-10 py-5 rounded-2xl text-lg font-bold hover:bg-hielo/10 hover:border-hielo transition-all duration-300 backdrop-blur-sm"
            >
              {t("notFound.goBack")}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
