"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FeaturedProject } from "@/data/featured-projects";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FeaturedClientCardProps {
  project: FeaturedProject & { background?: string }; // background optional
  index: number;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
}

export default function FeaturedClientCard({
  project,
  index,
  isHovered = false,
  isNeighborHovered = false,
}: FeaturedClientCardProps) {
  const { t } = useTranslation();
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`
        featured-client-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center
        ${isReversed ? "lg:grid-flow-dense" : ""}
        transition-opacity duration-300 ease-out
        ${isNeighborHovered ? "opacity-95" : ""}
      `}
    >
      {/* Content */}
      <div
        className={`featured-client-content ${
          isReversed ? "lg:col-start-2" : ""
        }`}
      >
        {/* Logo + CTA */}
        <div className="featured-client-logo-container pb-6 flex justify-between items-center">
          <div className="featured-client-logo inline-flex items-center gap-4">
            <div
              className={`
                w-16 h-16 md:w-20 md:h-20 
                bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100% 
                rounded-full flex items-center justify-center 
                shadow-xl p-3
                transition-transform duration-300
                ${isHovered ? "scale-105 rotate-3" : ""}
              `}
            >
              <Image
                src={project.logo}
                alt={project.name}
                width={40}
                height={40}
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h4
                className={`
                  featured-client-name text-xl font-bold
                  transition-colors duration-300
                  ${isHovered ? "text-teal" : "text-black"}
                `}
              >
                {project.name}
              </h4>
              <span className="featured-client-category text-sm text-azul-profundo">
                {t(project.category)}
              </span>
            </div>
          </div>

          <Link
            href={`/servicios/${project.slug}`}
            className="mt-6 flex items-center justify-end gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-bold text-azul-profundo">
                {t("caseStudies.readMore")}
              </span>
            </div>
            <ChevronRight
              className={`w-6 h-6 md:w-8 md:h-8 text-teal transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1`}
            />
          </Link>
        </div>

        {/* Description */}
        <p className="featured-client-description text-lg leading-relaxed pb-8 text-azul-profundo">
          {t(project.description)}
        </p>

        {/* Results */}
        <div className="featured-client-results grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {project.metrics?.map((metric, idx) => (
            <div
              key={idx}
              className="featured-client-result text-center p-4 rounded-lg bg-white transition-all duration-300 group-hover:bg-gray-100/70 group-hover:shadow-md"
            >
              <div className="featured-client-result-metric text-sm text-azul-profundo font-medium uppercase tracking-wider">
                {t(metric.label)}
              </div>
              <div className="featured-client-result-value text-2xl md:text-3xl font-black pt-2 text-teal">
                {metric.value.includes("projects.")
                  ? t(metric.value)
                  : metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div
        className={`featured-client-image-container relative ${
          isReversed ? "lg:col-start-1" : ""
        }`}
      >
        <div
          className={`
            featured-client-image relative aspect-video rounded-2xl overflow-hidden 
            shadow-xl bg-gradient-to-br from-gray-100/20 to-teal/30 backdrop-blur-md
            transition-transform duration-700 ease-out
            ${isHovered ? "scale-[1.02]" : ""}
          `}
        >
          {/* BACKGROUND layer (project.background) */}
          {project.background && (
            <Image
              src={project.background}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center opacity-20"
              priority={false}
            />
          )}

          {/* FOREGROUND main image */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover contrast-[1.2] brightness-110 mix-blend-multiply"
          />
        </div>

        {/* Floating metric badge */}
        <div
          className={`
            featured-client-badge absolute -top-4 -right-4 p-4 rounded-xl 
            shadow-lg text-white text-center
            transition-transform duration-300
            ${isHovered ? "scale-105" : ""}
            ${
              index % 3 === 0
                ? "bg-gradient-to-r from-mandarina/80 via-mandarina to-naranja-tostado"
                : index % 3 === 1
                ? "bg-gradient-to-r  from-violeta/80 via-violeta to-azul-profundo"
                : "bg-teal"
            }
          `}
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
