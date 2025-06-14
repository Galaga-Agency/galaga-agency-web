"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface ValuePropCardProps {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export default function ValuePropCard({ icon, titleKey, descriptionKey }: ValuePropCardProps) {
  const { t } = useTranslation();

  return (
    <div className="group relative">
      {/* Glow effect behind card */}
      <div className="absolute -inset-1 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-white/15 backdrop-blur-xl p-10 lg:p-12 rounded-3xl border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-6 shadow-2xl hover:shadow-white/20">
        
        {/* Icon container with animated background */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
          <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white/25 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40 group-hover:border-white/60 transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
            <span className="text-4xl lg:text-5xl filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500">{icon}</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center flex flex-col gap-6 items-center pt-8">
          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-white/95 transition-all duration-300">
            {t(titleKey)}
          </h3>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed font-medium group-hover:text-white/95 transition-all duration-300 max-w-xs">
            {t(descriptionKey)}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32"></div>
      </div>
    </div>
  );
}