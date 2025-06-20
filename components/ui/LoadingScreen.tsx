"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after translations are loaded and DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen fixed inset-0 z-50 bg-gradient-to-br from-azul-profundo via-teal to-negro flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="loading-logo pb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-turquesa to-verde-azulado rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <div className="loading-brand pb-8">
          <h1 className="text-2xl md:text-3xl font-black text-blanco tracking-tight">
            GALAGA AGENCY
          </h1>
          <p className="text-hielo/80 text-sm md:text-base font-light pt-2">
            Innovation & Digital Transformation
          </p>
        </div>

        {/* Loading animation */}
        <div className="loading-spinner">
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-verde-azulado rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-hielo/60 text-xs md:text-sm font-medium uppercase tracking-wider">
          Cargando experiencia...
        </p>
      </div>
    </div>
  );
}