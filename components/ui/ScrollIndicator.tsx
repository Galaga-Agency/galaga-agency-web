"use client";

import useDeviceDetect from "@/hooks/useDeviceDetect";
import { useTranslation } from "@/hooks/useTranslation";

interface ScrollIndicatorProps {
  className?: string;
}

export default function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  const { t } = useTranslation();
    const { isTouchDevice } = useDeviceDetect();


  return (
    <div className={`${!isTouchDevice && 'hidden'} scroll-indicator-wrapper flex flex-col items-center gap-3 ${className}`}>
      <span className="text-brand-hielo text-sm font-medium tracking-wider">
        {t("homepage.hero.scrollDown")}
      </span>
      <div className="scroll-mouse-container">
        <div className="scroll-mouse"></div>
      </div>
    </div>
  );
}