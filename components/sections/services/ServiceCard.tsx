// components/sections/services/ServiceCard.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  accent: string;
  linkSlug: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  color,
  accent,
  linkSlug,
  index,
}: ServiceCardProps) {
  return (
    <div
      className="services-overview-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-hielo/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
      data-index={index}
    >
      {/* Glow Background */}
      <div
        className={`services-overview-card-glow absolute inset-0 bg-gradient-to-br from-${color}/10 to-${accent}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />

      {/* Icon Container */}
      <div
        className={`services-overview-card-icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${color} to-${accent} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-4xl md:text-5xl`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`services-overview-card-title text-xl md:text-2xl font-bold text-${color} pb-4 group-hover:text-negro transition-colors duration-300 pt-6`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="services-overview-card-description text-base md:text-lg text-grafito pb-6 group-hover:text-azul-profundo transition-colors duration-300">
        {description}
      </p>

      {/* Features List */}
      <ul className="services-overview-card-features space-y-3 pb-6">
        {features.map((feat, idx) => (
          <li key={idx} className="services-overview-card-feature flex items-center gap-3">
            <div className={`services-overview-feature-dot w-2 h-2 bg-${color} rounded-full`} />
            <span className="services-overview-feature-text text-sm md:text-base text-grafito/80">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Link */}
      {/* <Link
        href={`/services/${linkSlug}`}
        className={`services-overview-card-cta inline-flex items-center gap-2 text-${color} font-semibold hover:text-negro transition-transform duration-300 transform group-hover:translate-x-1`}
      >
        Learn more →
      </Link> */}

      {/* Accent Dot */}
      <div
        className={`services-overview-card-accent absolute top-4 right-4 w-3 h-3 bg-${accent} rounded-full opacity-30 group-hover:opacity-70 group-hover:scale-150 transition-all duration-300`}
      />
    </div>
  );
}