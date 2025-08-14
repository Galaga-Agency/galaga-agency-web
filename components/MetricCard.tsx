"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white mb-2">
        {value}
      </div>
      <div className="text-white/80 font-semibold">{t(label)}</div>
    </div>
  );
}
