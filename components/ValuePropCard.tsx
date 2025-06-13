"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface ValuePropCardProps {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export default function ValuePropCard({ icon, titleKey, descriptionKey }: ValuePropCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 text-center">
        {t(titleKey)}
      </h3>
      <p className="text-white/80 text-center">{t(descriptionKey)}</p>
    </div>
  );
}