import { IconType } from "react-icons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  theme: "teal" | "azul-profundo" | "mandarina" | "violeta";
  size: "small" | "medium" | "large";
  imagePosition?: "top" | "bottom";
  className?: string;
}

const themes = {
  teal: {
    glow: "shadow-teal/30",
    iconBg: "bg-teal",
    textColor: "text-teal",
    hoverBg: "group-hover:bg-teal/10",
    iconGradient:
      "bg-radial-[at_30%_25%] from-hielo/20 from-0% via-teal/90 via-45% to-azul-profundo to-100%",
  },
  "azul-profundo": {
    glow: "shadow-azul-profundo/30",
    iconBg: "bg-azul-profundo",
    textColor: "text-azul-profundo",
    hoverBg: "group-hover:bg-azul-profundo/10",
    iconGradient:
      "bg-radial-[at_30%_25%] from-white/20 from-0% via-azul-profundo/90 via-45% to-negro to-100%",
  },
  mandarina: {
    glow: "shadow-mandarina/30",
    iconBg: "bg-mandarina",
    textColor: "text-mandarina",
    hoverBg: "group-hover:bg-mandarina/10",
    iconGradient:
      "bg-radial-[at_30%_25%] from-white/20 from-0% via-mandarina/90 via-45% to-naranja-tostado to-100%",
  },
  violeta: {
    glow: "shadow-violeta/30",
    iconBg: "bg-violeta",
    textColor: "text-violeta",
    hoverBg: "group-hover:bg-violeta/10",
    iconGradient:
      "bg-radial-[at_30%_25%] from-white/20 from-0% via-violeta/90 via-45% to-azul-profundo to-100%",
  },
} as const;

const sizeClasses = {
  small: {
    card: "h-[350px]",
    title: "text-lg lg:text-xl",
    description: "text-sm",
    padding: "p-6",
    icon: "text-4xl",
    iconContainer: "w-12 h-12",
  },
  medium: {
    card: "h-[350px]",
    title: "text-xl lg:text-2xl",
    description: "text-sm lg:text-base",
    padding: "p-6 lg:p-8",
    icon: "text-5xl",
    iconContainer: "w-14 h-14",
  },
  large: {
    card: "h-[350px]",
    title: "text-2xl lg:text-3xl",
    description: "text-base lg:text-lg",
    padding: "p-8 lg:p-10",
    icon: "text-6xl",
    iconContainer: "w-16 h-16",
  },
} as const;

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  theme,
  size,
  imagePosition,
  className = "",
}: FeatureCardProps) {
  const themeStyles = themes[theme];
  const sizeStyles = sizeClasses[size];

  return (
    <>
      {/* Desktop Card - Original layout with 3D overflowing image */}
      <div
        className={`hidden md:block ${className} h-[350px] group hover:z-50 relative transition-all duration-300`}
      >
        <CardContainer className="w-full h-full">
          <CardBody
            className={`
            relative group/card bg-white border border-white/20 shadow-xl hover:shadow-2xl
            ${themeStyles.glow} h-[350px]
            w-full rounded-2xl lg:rounded-3xl
            transition-all duration-500 ease-out
          `}
          >
            {/* Content and Image Container - Original layout */}
            <div className="relative z-10 flex h-full">
              {/* Content side with semi-transparent overlay */}
              <div
                className={`
                flex flex-col justify-center flex-shrink-0 ${sizeStyles.padding}
                w-full relative rounded-l-2xl lg:rounded-l-3xl
              `}
              >
                {/* Semi-transparent white overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl"></div>

                {/* Content with 3D effects on top of overlay */}
                <div className="relative z-10">
                  {/* Title with 3D float */}
                  <CardItem translateZ="40" className="w-fit">
                    <h3
                      className={`
                      font-black leading-tight pb-4
                      ${themeStyles.textColor} ${sizeStyles.title}
                    `}
                    >
                      {title}
                    </h3>
                  </CardItem>

                  {/* Description with 3D float */}
                  <CardItem translateZ="20" className="w-fit">
                    <p
                      className={`
                      font-medium leading-relaxed text-neutral-600 ${sizeStyles.description}
                    `}
                    >
                      {description}
                    </p>
                  </CardItem>
                </div>
              </div>

              {/* Image side - 3D overflow effect covering entire card */}
              <CardItem
                translateZ="80"
                rotateX={15}
                rotateZ={-5}
                className="absolute inset-0 w-full h-full rounded-l-2xl lg:rounded-l-3xl"
              >
                <div className="absolute inset-0 group-hover:w-auto group-hover:h-auto overflow-hidden rounded-2xl lg:rounded-3xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:object-contain group-hover/card:scale-125 rounded-2xl lg:rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-white/60 transition-colors duration-300 group-hover:bg-white/0" />
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Mobile Card */}
      <div className={`block md:hidden ${className} h-[400px]`}>
        <div
          className={`
          relative overflow-hidden rounded-2xl bg-white border border-white/20 shadow-lg
          h-[400px] 
        `}
        >
          <div className="relative h-1/2 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 " />
          </div>

          <div
            className={`h-1/2 flex flex-col justify-center ${sizeStyles.padding}`}
          >
            <h3
              className={`
              font-black leading-tight py-3
              ${themeStyles.textColor} ${sizeStyles.title}
            `}
            >
              {title}
            </h3>

            <p
              className={`
              font-medium leading-relaxed text-neutral-600 ${sizeStyles.description}
            `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      <div
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r",
          themeStyles.glow,
          "opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm",
        ].join(" ")}
      />
    </>
  );
}
