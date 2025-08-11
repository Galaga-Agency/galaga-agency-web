"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FeaturedProject } from "@/data/featured-projects";
import Image from "next/image";

interface FeaturedClientCardProps {
  project: FeaturedProject;
  index: number;
}

export default function FeaturedClientCard({
  project,
  index,
}: FeaturedClientCardProps) {
  const { t } = useTranslation();

  const isReversed = index % 2 === 1;

  return (
    <div
      className={`featured-client-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        isReversed ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Content */}
      <div
        className={`featured-client-content ${
          isReversed ? "lg:col-start-2" : ""
        }`}
      >
        {/* Client Logo */}
        <div className="featured-client-logo-container pb-6">
          <div className="featured-client-logo inline-flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal to-azul-profundo rounded-full flex items-center justify-center shadow-xl p-3">
              <Image
                src={project.logo}
                alt={project.name}
                width={40}
                height={40}
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h4 className="featured-client-name text-xl font-bold text-negro">
                {project.name}
              </h4>
              <span className="featured-client-category text-sm text-grafito">
                {t(project.category)}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="featured-client-description text-lg text-grafito leading-relaxed pb-8">
          {t(project.description)}
        </p>

        {/* Results Grid */}
        <div className="featured-client-results grid grid-cols-2 gap-6">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="featured-client-result text-center p-4 bg-hielo/50 rounded-lg"
            >
              <div className="featured-client-result-metric text-sm text-grafito font-medium uppercase tracking-wider">
                {t(metric.label)}
              </div>
              <div className="featured-client-result-value text-2xl md:text-3xl font-black text-teal pt-2">
                {metric.value.includes("projects.")
                  ? t(metric.value)
                  : metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image - Fixed with proper relative positioning */}
      <div
        className={`featured-client-image-container relative ${
          isReversed ? "lg:col-start-1" : ""
        }`}
      >
        <div className="featured-client-image relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-hielo/20 to-turquesa/30 backdrop-blur-md">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover bg-transparent contrast-[1.2] brightness-110 mix-blend-multiply"
          />
        </div>

        {/* Floating metric badge */}
        <div
          className={`featured-client-badge absolute -top-4 -right-4 p-4 rounded-xl shadow-lg text-blanco text-center ${
            index % 3 === 0
              ? "bg-mandarina"
              : index % 3 === 1
              ? "bg-azul-profundo"
              : "bg-teal"
          }`}
        >
          <div className="featured-client-badge-metric text-xs font-medium uppercase tracking-wider opacity-90">
            {t(project.metrics[0].label)}
          </div>
          <div className="featured-client-badge-value text-xl font-black">
            {project.metrics[0].value.includes("projects.")
              ? t(project.metrics[0].value)
              : project.metrics[0].value}
          </div>
        </div>
      </div>
    </div>
  );
}
