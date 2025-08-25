import { IconType } from "react-icons";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useRouter } from "next/navigation";
import { getLocalizedRoute } from "@/utils/navigation";
import { useTranslation } from "@/hooks/useTranslation";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  theme: "teal" | "azul-profundo" | "mandarina" | "violeta";
  size: "small" | "medium" | "large";
  imagePosition?: "top" | "bottom";
  className?: string;
  isCTA?: boolean;
  ctaButtonText?: string;
}

const themes = {
  teal: {
    glow: "shadow-teal/50",
    textColor: "text-teal",
    containerGradient: "from-teal via-turquesa to-azul-profundo",
    glowColor: "rgba(76,188,197,0.2)",
  },
  "azul-profundo": {
    glow: "shadow-azul-profundo/50",
    textColor: "text-azul-profundo",
    containerGradient: "from-azul-profundo via-negro to-teal",
    glowColor: "rgba(18,28,48,0.2)",
  },
  mandarina: {
    glow: "shadow-mandarina/50",
    textColor: "text-mandarina",
    containerGradient: "from-mandarina via-naranja-tostado to-azul-profundo",
    glowColor: "rgba(238,111,69,0.2)",
  },
  violeta: {
    glow: "shadow-violeta/50",
    textColor: "text-violeta",
    containerGradient: "from-violeta via-azul-profundo to-negro",
    glowColor: "rgba(78,58,115,0.2)",
  },
} as const;

const sizeClasses = {
  small: {
    title: "text-lg lg:text-xl",
    description: "text-sm",
    padding: "p-6",
  },
  medium: {
    title: "text-xl lg:text-2xl",
    description: "text-sm lg:text-base",
    padding: "p-6 lg:p-8",
  },
  large: {
    title: "text-2xl lg:text-3xl",
    description: "text-base lg:text-lg",
    padding: "p-8 lg:p-10",
  },
} as const;

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  theme,
  size,
  className = "",
  isCTA = false,
  ctaButtonText = "Solicitar demo",
}: FeatureCardProps) {
  const themeStyles = themes[theme];
  const sizeStyles = sizeClasses[size];
  const { t, language } = useTranslation();

  if (isCTA) {
    return (
      <>
        {/* Desktop CTA Card */}
        <div
          className={`hidden md:block ${className} h-[350px] relative [perspective:2000px] cursor-pointer group`}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
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

            if (card) {
              card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
            }

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
              }px) translateY(${y * 0.4}px) rotateX(${
                -y * 0.15 + 2
              }deg) rotateY(${x * 0.25}deg) scale(1.008)`;
            }
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget.querySelector(
              ".bento-card"
            ) as HTMLElement;
            const floatingImage = e.currentTarget.querySelector(
              ".floating-image"
            ) as HTMLElement;
            const floatingContent = e.currentTarget.querySelector(
              ".floating-content"
            ) as HTMLElement;

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
              className={`absolute -inset-2 bg-gradient-to-br from-teal to-azul-profundo rounded-2xl md:rounded-3xl shadow-2xl border border-white/10`}
              style={{ transform: "translateZ(-20px)" }}
            />

            <div
              className={`absolute -inset-2  bg-white/5 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl rounded-2xl md:rounded-3xl  opacity-20`}
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
              {/* White overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/10 to-white/5 transition-opacity duration-500 group-hover:from-white/15 group-hover:via-white/8 group-hover:to-white/3" />

              {/* Themed accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${themeStyles.textColor.replace(
                  "text-",
                  ""
                )}/10 via-${themeStyles.textColor.replace(
                  "text-",
                  ""
                )}/5 to-transparent`}
              />
            </div>

            {/* Layer 3: Floating Content */}
            <div
              className="floating-content relative z-10 w-full h-full transition-all duration-400 ease-out"
              style={{
                transform: "translateZ(100px) rotateX(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`${sizeStyles.padding} flex flex-col justify-center text-center items-center h-full`}
              >
                <h3
                  className={`font-black leading-tight pb-4 text-blanco ${sizeStyles.title} transition-transform duration-300 group-hover:scale-[1.02]`}
                  style={{
                    transform: "translateZ(20px)",
                    filter:
                      "drop-shadow(0 4px 8px rgba(0,0,0,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.2)) drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                  }}
                >
                  {title}
                </h3>

                <p
                  className={`font-medium leading-relaxed text-hielo ${sizeStyles.description} pb-6 drop-shadow-sm`}
                  style={{ transform: "translateZ(15px)" }}
                >
                  {description}
                </p>

                <div
                  className="flex items-center justify-center"
                >
                  <SecondaryButton
                    href={t("nav.contact").toLowerCase()}
                    borderColor="white"
                    size="md"
                    className="z-[999]"
                  >
                    {ctaButtonText}
                  </SecondaryButton>
                </div>
              </div>
            </div>

            {/* Ambient glow effect */}
            <div
              className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${themeStyles.glowColor} 0%, transparent 70%)`,
                transform: "translateZ(-25px) scale(1.1)",
              }}
            />
          </div>
        </div>

        {/* Mobile CTA Card */}
        <div className={`block md:hidden ${className} h-[400px]`}>
          <div className="relative overflow-hidden rounded-2xl bg-white border border-white/20 shadow-lg h-[400px]">
            <div
              className={`h-full flex flex-col justify-center ${sizeStyles.padding} text-center`}
            >
              <h3
                className={`font-black leading-tight pb-4 ${themeStyles.textColor} ${sizeStyles.title}`}
              >
                {title}
              </h3>

              <p
                className={`font-medium leading-relaxed text-neutral-600 ${sizeStyles.description} pb-6`}
              >
                {description}
              </p>

              <SecondaryButton
                href={getLocalizedRoute("/contacto", language)}
                darkBg
                size="md"
                className="z-[999]"
              >
                {ctaButtonText}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Regular Feature Card
  return (
    <>
      {/* Desktop Card */}
      <div
        className={`hidden md:block ${className} h-[350px] relative [perspective:2000px] cursor-pointer group hover:z-50 transition-all duration-300`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
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

          if (card) {
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
          }

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
            }px) translateY(${y * 0.4}px) rotateX(${
              -y * 0.15 + 2
            }deg) rotateY(${x * 0.25}deg) scale(1.008)`;
          }
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget.querySelector(
            ".bento-card"
          ) as HTMLElement;
          const floatingImage = e.currentTarget.querySelector(
            ".floating-image"
          ) as HTMLElement;
          const floatingContent = e.currentTarget.querySelector(
            ".floating-content"
          ) as HTMLElement;

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
            className={`absolute -inset-2 bg-gradient-to-br ${themeStyles.containerGradient} rounded-2xl md:rounded-3xl shadow-2xl border border-white/10`}
            style={{ transform: "translateZ(-20px)" }}
          />

          <div
            className={`absolute -inset-2 bg-gradient-to-br ${themeStyles.containerGradient} rounded-2xl md:rounded-3xl blur-sm opacity-20`}
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
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-40"
            />
            {/* White overlay for readability */}
            <div className="absolute inset-0 opacity-90 bg-gradient-to-t from-white/90 via-white/80 to-white/60 transition-opacity duration-500 group-hover:from-white/85 group-hover:via-white/75 group-hover:to-white/65" />

            {/* Themed accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-${themeStyles.textColor.replace(
                "text-",
                ""
              )}/10 via-${themeStyles.textColor.replace(
                "text-",
                ""
              )}/5 to-transparent`}
            />
          </div>

          {/* Layer 3: Floating Content */}
          <div
            className="floating-content relative z-10 flex flex-col h-full transition-all duration-400 ease-out"
            style={{
              transform: "translateZ(100px) rotateX(2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className={`${sizeStyles.padding} flex flex-col justify-center items-center h-full text-center`}
            >
              <h3
                className={`font-black leading-tight pb-4 ${themeStyles.textColor} ${sizeStyles.title} transition-transform duration-300 group-hover:scale-[1.02]`}
                style={{
                  transform: "translateZ(20px)",
                  filter:
                    "drop-shadow(0 4px 8px rgba(255,255,255,0.8)) drop-shadow(0 2px 4px rgba(255,255,255,0.6)) drop-shadow(0 1px 2px rgba(255,255,255,0.4))",
                }}
              >
                {title}
              </h3>

              <p
                className={`font-medium leading-relaxed text-neutral-600 ${sizeStyles.description} drop-shadow-sm`}
                style={{ transform: "translateZ(15px)" }}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Ambient glow effect */}
          <div
            className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${themeStyles.glowColor} 0%, transparent 70%)`,
              transform: "translateZ(-25px) scale(1.1)",
            }}
          />
        </div>
      </div>

      {/* Mobile Card */}
      <div className={`block md:hidden ${className} h-[400px]`}>
        <div className="relative overflow-hidden rounded-2xl bg-white border border-white/20 shadow-lg h-[400px]">
          <div className="relative h-1/2 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </div>

          <div
            className={`h-1/2 flex flex-col justify-center ${sizeStyles.padding}`}
          >
            <h3
              className={`font-black leading-tight py-3 ${themeStyles.textColor} ${sizeStyles.title}`}
            >
              {title}
            </h3>

            <p
              className={`font-medium leading-relaxed text-neutral-600 ${sizeStyles.description}`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
