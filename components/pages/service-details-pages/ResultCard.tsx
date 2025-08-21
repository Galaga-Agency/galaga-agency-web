"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { IconType } from "react-icons";

interface Result {
  icon: IconType;
  percentage: string;
  title: string;
  description: string;
  detail: string;
  color: string;
}

interface ResultCardProps {
  result: Result;
  index: number;
}

export default function ResultCard({ result, index }: ResultCardProps) {
  const { t } = useTranslation();

  const themes = {
    teal: {
      gradient: "bg-teal-gradient",
      glow: "hover:shadow-teal/50",
      title: "text-teal",
      border: "border-teal/20",
    },
    skyblue: {
      gradient: "bg-skyblue-gradient",
      glow: "hover:shadow-turquesa/50",
      title: "text-turquesa",
      border: "border-turquesa/20",
    },
    violeta: {
      gradient: "bg-purple-gradient",
      glow: "hover:shadow-violeta/50",
      title: "text-violeta",
      border: "border-violeta/20",
    },
    mandarina: {
      gradient: "bg-orange-gradient",
      glow: "hover:shadow-mandarina/50",
      title: "text-mandarina",
      border: "border-mandarina/20",
    },
    "azul-profundo": {
      gradient: "bg-darkblue-gradient",
      glow: "hover:shadow-azul-profundo/50",
      title: "text-azul-profundo",
      border: "border-azul-profundo/20",
    },
  } as const;

  type ThemeKey = keyof typeof themes;

  const theme = themes[result.color as ThemeKey] ?? {
    gradient: "bg-teal-gradient",
    glow: "hover:shadow-teal/50",
    title: "text-teal",
    border: "border-teal/20",
  };

  return (
    <div
      className={`relative overflow-hidden h-full rounded-2xl md:rounded-3xl bg-white shadow-lg hover:shadow-xl ${theme.glow} border ${theme.border} hover:border-${result.color}/40 transition-all duration-500 ease-out group`}
    >
      {/* Background image + whitish overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
        <div className="absolute inset-0 bg-white/60 transition-colors duration-500 group-hover:bg-white/50" />
      </div>

      {/* Floating percentage */}
      <div className="absolute -top-4 -right-4 text-[10rem] text-white/10 rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white/30 font-black">
        {result.percentage}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
        {/* Themed Icon Bubble */}
        <div
          className={`w-16 h-16 rounded-full ${theme.gradient} flex items-center justify-center text-blanco text-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg shadow-lg`}
        >
          <result.icon />
        </div>

        <h3
          className={`text-xl lg:text-2xl font-black leading-tight py-6 ${theme.title} transition-transform duration-300 group-hover:scale-[1.02] group-hover:translate-x-1`}
        >
          {t(result.title)}
        </h3>

        <p className="text-sm lg:text-base font-semibold pb-6 leading-relaxed flex-1 text-azul-profundo group-hover:text-negro transition-colors duration-300">
          {t(result.description)}
        </p>

        <div className="mt-auto">
          <p className="text-sm font-medium text-azul-profundo/70 leading-relaxed">
            {t(result.detail)}
          </p>
        </div>
      </div>

      {/* Enhanced Glow Border Effect */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm`}
      />
    </div>
  );
}
