"use client";

import useDeviceDetect from "@/hooks/useDeviceDetect";
import { useTranslation } from "@/hooks/useTranslation";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface ScrollIndicatorProps {
  className?: string;
}

export default function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  return (
    <div className={`${!isTouchDevice && 'hidden'} scroll-indicator-wrapper flex flex-col items-center gap-3 ${className}`}>
      <span className="text-hielo text-sm font-medium tracking-wider hidden md:block">
        {t("homepage.hero-section.scrollDown")}
      </span>
      <ChevronDownIcon 
        className="text-hielo w-8 h-8 animate-bounce"
        aria-hidden="true"
      />
    </div>
  );
}