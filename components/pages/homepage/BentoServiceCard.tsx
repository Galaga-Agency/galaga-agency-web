"use client";
import { IconType } from "react-icons";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { getLocalizedRoute } from "@/utils/navigation";

interface ServiceConfig {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  theme: string;
  image: string;
  slug: string;
}

interface BentoServiceCardProps {
  service: ServiceConfig;
  size: "small" | "large" | "mobile";
  isHovered?: boolean;
  isNeighborHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
}

export default function BentoServiceCard({
  service,
  size,
  onHover,
}: BentoServiceCardProps) {
  const { t, language } = useTranslation();

  const themes = {
    teal: {
      gradient: "from-teal/80 via-teal to-azul-profundo",
      glow: "shadow-teal/50",
      title: "text-teal",
      bullet: "bg-teal/60",
      bulletOn: "bg-teal",
      text: "text-azul-profundo",
      ctaGradient: "from-teal via-teal to-azul-profundo",
    },
    violeta: {
      gradient: "from-violeta/80 via-violeta to-azul-profundo",
      glow: "shadow-violeta/50",
      title: "text-violeta",
      bullet: "bg-violeta/60",
      bulletOn: "bg-violeta",
      text: "text-azul-profundo",
      ctaGradient: "from-violeta via-violeta to-azul-profundo",
    },
    mandarina: {
      gradient: "from-mandarina/80 via-mandarina to-naranja-tostado",
      glow: "shadow-mandarina/50",
      title: "text-mandarina",
      bullet: "bg-mandarina/60",
      bulletOn: "bg-mandarina",
      text: "text-azul-profundo",
      ctaGradient: "from-mandarina via-mandarina to-naranja-tostado",
    },
    "azul-profundo": {
      gradient: "from-azul-profundo/80 via-azul-profundo to-negro",
      glow: "shadow-azul-profundo/50",
      title: "text-azul-profundo",
      bullet: "bg-azul-profundo/60",
      bulletOn: "bg-azul-profundo",
      text: "text-azul-profundo",
      ctaGradient: "from-azul-profundo via-azul-profundo to-negro",
    },
  } as const;

  type ThemeKey = keyof typeof themes;

  const theme = themes[service.theme as ThemeKey] ?? {
    gradient: "from-teal/80 via-teal to-azul-profundo",
    glow: "shadow-teal/50",
    title: "text-teal",
    bullet: "bg-teal/60",
    bulletOn: "bg-teal",
    text: "text-azul-profundo",
    ctaGradient: "from-teal via-teal to-azul-profundo",
  };

const translatedSlug = t(service.slug);
const servicesRoute = getLocalizedRoute("services", language);
const serviceUrl = `${servicesRoute}/${translatedSlug}`;

  return (
    <div
      className={[
        size === "large" ? "col-span-2" : size === "small" ? "col-span-1" : "",
        "relative overflow-hidden h-full cursor-pointer rounded-2xl md:rounded-3xl",
        "bg-white border border-white/20 shadow-xl hover:shadow-2xl",
        theme.glow,
        "transition-shadow duration-500 ease-out group",
      ].join(" ")}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* Background image + whitish overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
        <img
          src={service.image}
          alt={t(service.title)}
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-white/60 transition-colors duration-500 group-hover:bg-white/50" />
      </div>

      {/* Floating icon */}
      <div
        className={[
          "absolute -top-4 -right-4",
          size === "large"
            ? "text-[12rem]"
            : size === "mobile"
            ? "text-[8rem]"
            : "text-[10rem]",
          "text-white/10 rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white/30",
        ].join(" ")}
      >
        <service.icon />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
        <h3
          className={[
            size === "large" ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl",
            "font-black leading-tight pb-6",
            theme.title,
            "transition-transform duration-300 group-hover:scale-[1.02]",
          ].join(" ")}
        >
          {t(service.title)}
        </h3>

        <p
          className={[
            "text-sm lg:text-base font-semibold pb-6 leading-relaxed flex-1",
            theme.text,
          ].join(" ")}
        >
          {t(service.description)}
        </p>

        <div className="mt-auto flex flex-col gap-3">
          {service.features
            .slice(0, size === "large" ? 4 : size === "mobile" ? 3 : 3)
            .map((feature, i) => (
              <div
                key={i}
                className={[
                  "flex items-center gap-3 font-semibold text-sm",
                  theme.text,
                ].join(" ")}
              >
                <div
                  className={[
                    "w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm transition-colors",
                    theme.bullet,
                    "group-hover:" + theme.bulletOn,
                  ].join(" ")}
                />
                <span className="leading-relaxed">{t(feature)}</span>
              </div>
            ))}
        </div>

        {/* CTA - Small Circle with Arrow */}
        <Link
          href={serviceUrl}
          className="mt-6 flex items-center justify-end group"
        >
          <div
            className={`w-8 h-8 bg-gradient-to-r ${theme.ctaGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
          >
            <svg
              className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Subtle glow border */}
      <div
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r",
          theme.gradient,
          "opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm",
        ].join(" ")}
      />
    </div>
  );
}
