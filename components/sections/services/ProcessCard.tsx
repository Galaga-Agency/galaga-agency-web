"use client";

import { ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export interface ProcessCardProps {
  number: string;
  titleKey: string;
  descriptionKey: string;
  color: string;
  accent: string;
  index: number;
}

export default function ProcessCard({ number, titleKey, descriptionKey, color, accent, index }: ProcessCardProps) {
  const { t } = useTranslation();
  return (
    <div
      className="services-process-step-card flex flex-col items-center group relative text-center"
      data-index={index}
    >
      <div
        className={`services-process-step-number relative w-20 h-20 bg-gradient-to-br from-${color} to-${accent} rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
      >
        <span className="text-white font-black text-lg md:text-xl">
          {number}
        </span>
        <div className="services-process-connecting-dot hidden lg:block absolute -right-12 top-1/2 w-4 h-4 bg-white/20 rounded-full transform -translate-y-1/2" />
      </div>
      <h3
        className={`services-process-step-title pt-6 text-xl md:text-2xl font-bold text-${color} pb-4 group-hover:text-white transition-colors duration-300`}
      >
        {t(titleKey)}
      </h3>
      <p className="services-process-step-description text-base md:text-lg text-hielo/80 leading-relaxed group-hover:text-hielo transition-colors duration-300">
        {t(descriptionKey)}
      </p>
      <div
        className={`services-process-step-accent absolute -top-2 -right-2 w-4 h-4 bg-${accent} rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}
      />
    </div>
  );
}