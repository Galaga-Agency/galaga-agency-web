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
  hasRedirection: boolean;
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
      containerGradient: "from-teal via-turquesa to-azul-profundo",
    },
    violeta: {
      gradient: "from-violeta/80 via-violeta to-azul-profundo",
      glow: "shadow-violeta/50",
      title: "text-violeta",
      bullet: "bg-violeta/60",
      bulletOn: "bg-violeta",
      text: "text-azul-profundo",
      ctaGradient: "from-violeta via-violeta to-azul-profundo",
      containerGradient: "from-violeta via-azul-profundo to-negro",
    },
    mandarina: {
      gradient: "from-mandarina/80 via-mandarina to-naranja-tostado",
      glow: "shadow-mandarina/50",
      title: "text-mandarina",
      bullet: "bg-mandarina/60",
      bulletOn: "bg-mandarina",
      text: "text-azul-profundo",
      ctaGradient: "from-mandarina via-mandarina to-naranja-tostado",
      containerGradient: "from-mandarina via-naranja-tostado to-azul-profundo",
    },
    "azul-profundo": {
      gradient: "from-azul-profundo/80 via-azul-profundo to-negro",
      glow: "shadow-azul-profundo/50",
      title: "text-azul-profundo",
      bullet: "bg-azul-profundo/60",
      bulletOn: "bg-azul-profundo",
      text: "text-azul-profundo",
      ctaGradient: "from-azul-profundo via-azul-profundo to-negro",
      containerGradient: "from-azul-profundo via-negro to-teal",
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
    containerGradient: "from-teal via-turquesa to-azul-profundo",
  };

  const translatedSlug = t(service.slug);
  const servicesRoute = getLocalizedRoute("services", language);
  const serviceUrl = `${servicesRoute}/${translatedSlug}`;
  const hasLink = service.hasRedirection;

  return (
    <div
      className={[
        size === "large" ? "col-span-2" : size === "small" ? "col-span-1" : "",
        "relative h-full [perspective:2000px] cursor-pointer group",
      ].join(" ")}
      onMouseEnter={() => onHover?.(true)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // Better sensitivity - make small cards more responsive
        const x = (e.clientX - rect.left - rect.width / 2) / 40;
        const y = (e.clientY - rect.top - rect.height / 2) / 40;

        const card = e.currentTarget.querySelector(
          ".bento-card"
        ) as HTMLElement;
        const floatingImage = e.currentTarget.querySelector(
          ".floating-image"
        ) as HTMLElement;
        const floatingContent = e.currentTarget.querySelector(
          ".floating-content"
        ) as HTMLElement;

        // Better rotation that's noticeable but not crazy
        if (card) {
          card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        }

        // More movement so you can actually see it
        if (floatingImage) {
          floatingImage.style.transform = `translateZ(80px) translateX(${
            x * 1.5
          }px) translateY(${y * 0.8}px) rotateY(${x * 0.4}deg) rotateX(${
            -y * 0.3 + 5
          }deg) scale(1.015)`;
        }

        if (floatingContent) {
          floatingContent.style.transform = `translateZ(120px) translateX(${
            x * 0.8
          }px) translateY(${y * 0.4}px) rotateX(${-y * 0.15 + 2}deg) rotateY(${
            x * 0.25
          }deg) scale(1.008)`;
        }
      }}
      onMouseLeave={(e) => {
        onHover?.(false);
        const card = e.currentTarget.querySelector(
          ".bento-card"
        ) as HTMLElement;
        const floatingImage = e.currentTarget.querySelector(
          ".floating-image"
        ) as HTMLElement;
        const floatingContent = e.currentTarget.querySelector(
          ".floating-content"
        ) as HTMLElement;

        // Reset to SAME values for all cards
        if (card) {
          card.style.transform = "rotateY(0deg) rotateX(0deg)";
        }
        if (floatingImage) {
          floatingImage.style.transform =
            "translateZ(60px) rotateX(5deg) rotateY(0deg) scale(1)";
        }
        if (floatingContent) {
          floatingContent.style.transform =
            "translateZ(100px) rotateX(2deg) rotateY(0deg) scale(1)";
        }
      }}
    >
      <div className="bento-card relative w-full h-full [transform-style:preserve-3d] transition-transform duration-400 ease-out">
        {/* Layer 1: Base Container */}
        <div
          className={`absolute -inset-2 bg-gradient-to-br ${theme.containerGradient} rounded-2xl md:rounded-3xl shadow-2xl border border-white/10`}
          style={{ transform: "translateZ(-20px)" }}
        />

        <div
          className={`absolute -inset-2 bg-gradient-to-br ${theme.containerGradient} rounded-2xl md:rounded-3xl blur-sm opacity-20`}
          style={{ transform: "translateZ(-15px)" }}
        />

        {/* Layer 2: Floating Image */}
        <div
          className="floating-image absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-400 ease-out"
          style={{
            transform: "translateZ(60px) rotateX(5deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={service.image}
            alt={t(service.title)}
            className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-40"
          />
          {/* White overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/80 to-white/60 transition-opacity duration-500 group-hover:from-white/85 group-hover:via-white/75 group-hover:to-white/65" />

          {/* Themed accent */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-${theme.title}/10 via-${theme.title}/5 to-transparent`}
          />
        </div>

        {/* Layer 3: Floating Content */}
        <div
          className="floating-content relative z-10 flex flex-col h-full p-6 lg:p-8 transition-all duration-400 ease-out"
          style={{
            transform: "translateZ(100px) rotateX(2deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Floating icon */}
          <div
            className={[
              "absolute -top-4 right-4",
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
          <h3
            className={[
              size === "large" ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl",
              "font-black leading-tight pb-6",
              theme.title,
              "transition-transform duration-300 group-hover:scale-[1.02]",
            ].join(" ")}
            style={{
              transform: "translateZ(20px)",
              filter:
                "drop-shadow(0 4px 8px rgba(255,255,255,0.8)) drop-shadow(0 2px 4px rgba(255,255,255,0.6)) drop-shadow(0 1px 2px rgba(255,255,255,0.4))",
            }}
          >
            {t(service.title)}
          </h3>

          <p
            className={[
              "text-md lg:text-base pb-6 leading-relaxed flex-1",
              theme.text,
              "drop-shadow-sm",
            ].join(" ")}
            style={{ transform: "translateZ(15px)" }}
          >
            {t(service.description)}
          </p>

          <div
            className="mt-auto flex flex-col gap-3"
            style={{ transform: "translateZ(10px)" }}
          >
            {service.features
              .slice(0, size === "large" ? 4 : size === "mobile" ? 3 : 3)
              .map((feature, i) => (
                <div
                  key={i}
                  className={[
                    "flex items-center gap-3 text-md",
                    theme.text,
                    "drop-shadow-sm",
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

          {/* CTA Button */}
          {hasLink && (
            <Link
              href={serviceUrl}
              className="mt-6 flex items-center justify-end group"
              style={{ transform: "translateZ(25px)" }}
            >
              <div
                className={`w-10 h-10 bg-gradient-to-r ${theme.ctaGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl`}
              >
                <svg
                  className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
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
          )}
        </div>

        {/* Ambient glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}
          style={{
            background: `radial-gradient(circle at center, ${
              theme.glow.includes("teal")
                ? "rgba(76,188,197,0.2)"
                : theme.glow.includes("violeta")
                ? "rgba(78,58,115,0.2)"
                : theme.glow.includes("mandarina")
                ? "rgba(238,111,69,0.2)"
                : "rgba(18,28,48,0.2)"
            } 0%, transparent 70%)`,
            transform: "translateZ(-25px) scale(1.1)",
          }}
        />
      </div>
    </div>
  );
}
