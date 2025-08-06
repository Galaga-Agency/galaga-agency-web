"use client";

import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="loading-screen fixed inset-0 z-50 bg-gradient-to-br from-brand-hielo via-brand-blanco to-brand-turquesa/20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand-turquesa/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-brand-mandarina/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-turquesa/5 to-brand-teal/5 rounded-full blur-3xl"></div>
      </div>

      {/* Proper centering container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Company Logo */}
          <div className="loading-logo mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/img/logos/logo-full-vertical.webp"
                alt="Galaga Agency"
                className="opacity-90 w-auto h-auto max-w-[200px] max-h-[200px]"
                height={200}
                width={200}
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Fixed Loading animation with corporate blues */}
          <div className="loading-spinner">
            <div className="flex items-center justify-center gap-3">
              <div className="loading-dot-1 w-3 h-3 bg-azul-profundo rounded-full"></div>
              <div className="loading-dot-2 w-3 h-3 bg-teal rounded-full"></div>
              <div className="loading-dot-3 w-3 h-3 bg-turquesa rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}