"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface ValuePropCardProps {
  icon: any;
  titleKey: string;
  descriptionKey: string;
  index?: number;
  delay?: number;
}

export default function ValuePropCard({ icon, titleKey, descriptionKey, index = 0, delay = 0 }: ValuePropCardProps) {
  const { t } = useTranslation();

  return (
    <div 
      className="group relative"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-1 bg-gradient-to-br from-teal/20 to-turquesa/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
             
      <div className="relative bg-blanco p-10 lg:p-12 rounded-3xl border border-hielo hover:border-teal/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 shadow-2xl hover:shadow-3xl">
                 
        {/* Icon container with animated background */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-turquesa/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
          <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-teal to-turquesa rounded-2xl flex items-center justify-center border border-teal/20 group-hover:border-teal/40 transition-all duration-500 transform group-hover:rotate-3 group-hover:scale-110">
            <span className="text-4xl lg:text-5xl filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 text-blanco">{icon}</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center flex flex-col gap-6 items-center pt-8">
          <h3 className="text-2xl lg:text-3xl font-black text-negro leading-tight tracking-tight group-hover:text-teal transition-all duration-300">
            {t(titleKey)}
          </h3>
          <p className="text-lg lg:text-xl text-grafito leading-relaxed font-medium group-hover:text-azul-profundo transition-all duration-300 max-w-xs">
            {t(descriptionKey)}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-teal/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32"></div>
      </div>
    </div>
  );
}