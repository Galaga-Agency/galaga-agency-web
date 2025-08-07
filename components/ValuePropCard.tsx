"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface ValuePropCardProps {
  icon: any;
  titleKey: string;
  descriptionKey: string;
  index?: number;
  delay?: number;
}

export default function ValuePropCard({
  icon,
  titleKey,
  descriptionKey,
  index = 0,
  delay = 0,
}: ValuePropCardProps) {
  const { t } = useTranslation();

  const bubbleVariations = [
    {
      size: "w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80",
      gradient:
        "bg-radial-[at_30%_30%] from-white from-20% via-neutral-50 via-60% to-neutral-200 to-90%",
      iconColor: "#176161",
      titleColor: "#121c30",
      textColor: "#2c2c2c",
      position:
        "absolute z-30 -top-32 md:-top-6 lg:-top-2 xl:-top-18 left-6 xl:left-0 lg:relative lg:-mr-8 lg:mt-4",
      iconSize: "text-4xl lg:text-5xl xl:text-6xl",
      textSize: "text-base lg:text-lg xl:text-xl",
      descSize: "text-sm lg:text-base xl:text-lg",
    },
    {
      size: "w-72 h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88",
      gradient:
        "bg-radial-[at_25%_25%] from-turquesa from-15% via-teal via-60% to-azul-profundo to-90%",
      iconColor: "#ffffff",
      titleColor: "#ffffff",
      textColor: "#c3e5ef",
      position:
        "absolute z-40 top-20 md:top-0 left-[60%] md:left-[52%] -translate-x-1/2 lg:relative lg:top-auto lg:left-auto lg:translate-x-0 lg:-mt-12 lg:-mx-4",
      iconSize: "text-5xl lg:text-6xl xl:text-7xl",
      textSize: "text-lg lg:text-xl xl:text-2xl",
      descSize: "text-base lg:text-lg xl:text-xl",
    },
    {
      size: "w-60 h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76",
      gradient:
        "bg-radial-[at_35%_20%] from-azul-profundo from-40% via-teal via-80% to-negro to-95%",
      iconColor: "#c3e5ef",
      titleColor: "#ffffff",
      textColor: "#4cbcc5",
      position:
        "absolute z-20 top-82 md:-top-16 right-24 md:right-6 xl:right-0 xl:-top-20 lg:relative lg:top-auto lg:-mt-16 lg:-ml-8",
      iconSize: "text-4xl lg:text-5xl xl:text-6xl",
      textSize: "text-base lg:text-lg xl:text-xl",
      descSize: "text-sm lg:text-base xl:text-lg",
    },
  ];

  const variation = bubbleVariations[index] || bubbleVariations[0];

  return (
    <div className={`group opacity-0 fade-up ${variation.position}`}>
      <div
        className={`${variation.size} rounded-full ${variation.gradient} shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 hover:rotate-2 flex flex-col items-center justify-center text-center p-8 border border-white/40 backdrop-blur-sm`}
      >
        <div className="pb-4">
          <span
            className={`${variation.iconSize} filter drop-shadow-lg`}
            style={{ color: variation.iconColor }}
          >
            {icon}
          </span>
        </div>

        <h3
          className={`${variation.textSize} font-bold leading-tight tracking-tight pb-3 max-w-[180px] drop-shadow-sm`}
          style={{ color: variation.titleColor }}
        >
          {t(titleKey)}
        </h3>

        <p
          className={`${variation.descSize} leading-relaxed font-medium max-w-[200px] drop-shadow-sm`}
          style={{ color: variation.textColor }}
        >
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  );
}