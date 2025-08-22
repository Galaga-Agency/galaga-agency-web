"use client";

import { useState } from "react";
import { useCookies } from "@/hooks/useCookies";
import { useTranslation } from "@/hooks/useTranslation";
import { CookieConsent } from "@/types/cookies";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { FaCookieBite } from "react-icons/fa";

interface CookieBannerProps {
  // Remove language prop since we'll use the translation hook
}

export default function CookieBanner({}: CookieBannerProps) {
  const { showBanner, acceptAll, rejectAll, saveConsent } = useCookies();
  const { t } = useTranslation(); // Use your translation system
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<
    Omit<CookieConsent, "timestamp">
  >({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  if (!showBanner) return null;

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    saveConsent(preferences);
    setShowDetails(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-6 w-[90vw] mx-auto md:inset-x-auto md:bottom-6 md:right-6 md:w-auto md:max-w-lg z-50 overflow-hidden">
      {!showDetails ? (
        /* Main Banner with Dramatic 3D effects and Cookie Cursor */
        <div
          className="perspective-1000 group cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            // More dramatic tilt - increased sensitivity from /25 to /15
            const x = (e.clientX - rect.left - rect.width / 2) / 15;
            const y = (e.clientY - rect.top - rect.height / 2) / 15;
            const card = e.currentTarget.querySelector(
              ".cookie-card"
            ) as HTMLElement;
            const cursor = e.currentTarget.querySelector(
              ".cookie-cursor"
            ) as HTMLElement;

            if (card) {
              card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateZ(20px)`;
            }

            // Custom cookie cursor position
            if (cursor) {
              cursor.style.left = `${e.clientX - rect.left}px`;
              cursor.style.top = `${e.clientY - rect.top}px`;
              cursor.style.opacity = "1";
            }
          }}
          onMouseEnter={(e) => {
            const cursor = e.currentTarget.querySelector(
              ".cookie-cursor"
            ) as HTMLElement;
            if (cursor) {
              cursor.style.opacity = "1";
            }
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget.querySelector(
              ".cookie-card"
            ) as HTMLElement;
            const cursor = e.currentTarget.querySelector(
              ".cookie-cursor"
            ) as HTMLElement;
            if (card) {
              card.style.transform =
                "rotateY(0deg) rotateX(0deg) translateZ(0px)";
            }
            if (cursor) {
              cursor.style.opacity = "0";
            }
          }}
        >
          {/* Custom Cookie Cursor */}
          <div
            className="cookie-cursor absolute pointer-events-none z-10 opacity-0 transition-opacity duration-200"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="w-8 h-8  rounded-full bg-blanco/60 backdrop-blur-md flex items-center justify-center shadow-lg border-1 border-white">
              <FaCookieBite className="w-5 h-5 text-teal" />
            </div>
          </div>

          <div
            className="cookie-card transform-gpu bg-white/80 backdrop-blur-md border-4 border-teal rounded-2xl shadow-2xl hover:shadow-teal/20 transition-all duration-500 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Header with Icon */}
            <div className="flex items-start gap-4 pb-6 p-8">
              <div className="flex-1">
                <h3
                  className="font-semibold text-negro pb-3 text-xl transition-transform duration-500 ease-out"
                  style={{ transform: "translateZ(40px)" }}
                >
                  {t("cookies.title")}
                </h3>
                <p
                  className="text-neutral-600 leading-relaxed text-base transition-transform duration-500 ease-out"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {t("cookies.description")}
                </p>
              </div>
            </div>

            {/* Actions - All buttons same height */}
            <div className="flex flex-col gap-4 px-8 pb-8">
              {/* Primary Action */}
              <div
                className="transition-transform duration-500 ease-out"
                style={{ transform: "translateZ(60px)" }}
              >
                <PrimaryButton
                  onClick={acceptAll}
                  className="w-full h-14 text-lg font-medium hover:scale-105 transition-transform duration-200"
                >
                  {t("cookies.acceptAll")}
                </PrimaryButton>
              </div>

              {/* Secondary Actions - Same height */}
              <div className="flex gap-4">
                <div
                  className="flex-1 transition-transform duration-500 ease-out"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <SecondaryButton
                    onClick={rejectAll}
                    className="w-full h-12 hover:scale-105 transition-transform duration-200 flex items-center justify-center"
                  >
                    {t("cookies.rejectAll")}
                  </SecondaryButton>
                </div>

                <div
                  className="flex-1 transition-transform duration-500 ease-out"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <button
                    onClick={() => setShowDetails(true)}
                    className="w-full h-12 flex items-center justify-center gap-2 text-neutral-600 hover:text-negro transition-all border border-neutral-200 rounded-lg hover:bg-hielo/30 hover:scale-105 duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  <span className="hidden md:block">{t("cookies.customize")}</span>  
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Detailed Settings with Dramatic 3D effects and Cookie Cursor */
        <div
          className="perspective-1000 group cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            // More dramatic tilt
            const x = (e.clientX - rect.left - rect.width / 2) / 15;
            const y = (e.clientY - rect.top - rect.height / 2) / 15;
            const card = e.currentTarget.querySelector(
              ".cookie-card-settings"
            ) as HTMLElement;
            const cursor = e.currentTarget.querySelector(
              ".cookie-cursor"
            ) as HTMLElement;

            if (card) {
              card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateZ(20px)`;
            }

            // Custom cookie cursor position
            if (cursor) {
              cursor.style.left = `${e.clientX - rect.left}px`;
              cursor.style.top = `${e.clientY - rect.top}px`;
              cursor.style.opacity = "1";
            }
          }}
          onMouseEnter={(e) => {
            const cursor = e.currentTarget.querySelector(
              ".cookie-cursor"
            ) as HTMLElement;
            if (cursor) {
              cursor.style.opacity = "1";
            }
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget.querySelector(
              ".cookie-card-settings"
            ) as HTMLElement;
            const cursor = e.currentTarget.querySelector(
              ".cookie-cursor"
            ) as HTMLElement;
            if (card) {
              card.style.transform =
                "rotateY(0deg) rotateX(0deg) translateZ(0px)";
            }
            if (cursor) {
              cursor.style.opacity = "0";
            }
          }}
        >
          {/* Custom Cookie Cursor */}
          <div
            className="cookie-cursor absolute pointer-events-none z-10 opacity-0 transition-opacity duration-200"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="w-8 h-8  rounded-full bg-blanco/60 backdrop-blur-md flex items-center justify-center shadow-lg border-1 border-white">
              <FaCookieBite className="w-5 h-5 text-teal" />
            </div>
          </div>

          <div
            className="cookie-card-settings transform-gpu bg-blanco/80 rounded-2xl shadow-2xl border border-hielo p-6 max-w-md mx-auto backdrop-blur-md transition-all duration-500 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6">
              <h3
                className="font-semibold text-negro text-lg transition-transform duration-500 ease-out"
                style={{ transform: "translateZ(40px)" }}
              >
                {t("cookies.title")}
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                    className="w-8 h-8 rounded-full bg-blanco/60 text-teal font-semibold backdrop-blur-md flex items-center justify-center shadow-lg border-1 border-white"
                style={{ transform: "translateZ(50px)" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="gap-4 pb-6 grid">
              {/* Necessary */}
              <div
                className="p-4 bg-hielo/20 rounded-lg border border-hielo hover:scale-105 transition-transform duration-500 ease-out"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-negro text-sm">
                    {t("cookies.necessary")}
                  </h4>
                  <div className="w-10 h-5 bg-teal rounded-full relative opacity-50">
                    <div className="w-4 h-4 bg-blanco rounded-full absolute top-0.5 right-0.5 shadow-sm" />
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {t("cookies.necessaryDesc")}
                </p>
              </div>

              {/* Analytics */}
              <div
                className="p-4 bg-blanco rounded-lg border border-neutral-200 hover:border-teal/30 transition-all hover:scale-105 duration-500 ease-out"
                style={{ transform: "translateZ(36px)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-negro text-sm">
                    {t("cookies.analytics")}
                  </h4>
                  <button
                    onClick={() => togglePreference("analytics")}
                    className={`w-10 h-5 rounded-full relative transition-all duration-200 hover:scale-110 ${
                      preferences.analytics ? "bg-teal" : "bg-neutral-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-blanco rounded-full absolute top-0.5 transition-transform duration-200 shadow-sm ${
                        preferences.analytics
                          ? "translate-x-5"
                          : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {t("cookies.analyticsDesc")}
                </p>
              </div>

              {/* Marketing */}
              <div
                className="p-4 bg-blanco rounded-lg border border-neutral-200 hover:border-teal/30 hover:scale-105 transition-all duration-500 ease-out"
                style={{ transform: "translateZ(42px)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-negro text-sm">
                    {t("cookies.marketing")}
                  </h4>
                  <button
                    onClick={() => togglePreference("marketing")}
                    className={`w-10 h-5 rounded-full relative transition-all duration-200 hover:scale-110 ${
                      preferences.marketing ? "bg-teal" : "bg-neutral-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-blanco rounded-full absolute top-0.5 transition-transform duration-200 shadow-sm ${
                        preferences.marketing
                          ? "translate-x-5"
                          : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {t("cookies.marketingDesc")}
                </p>
              </div>
            </div>

            {/* Actions - Same height buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div
                  className="flex-1 transition-transform duration-500 ease-out"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <SecondaryButton
                    onClick={acceptAll}
                    size="sm"
                    className="w-full h-12 hover:scale-105 transition-transform duration-200 flex items-center justify-center"
                  >
                    {t("cookies.acceptAll")}
                  </SecondaryButton>
                </div>
                <div
                  className="flex-1 transition-transform duration-500 ease-out"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <PrimaryButton
                    onClick={handleSave}
                    size="sm"
                    className="w-full h-12 hover:scale-105 transition-transform duration-200 flex items-center justify-center"
                  >
                    {t("cookies.save")}
                  </PrimaryButton>
                </div>
              </div>

              <button
                onClick={rejectAll}
                className="w-full text-xs text-neutral-600 hover:text-negro transition-all underline py-2 hover:scale-105 duration-200"
                style={{ transform: "translateZ(20px)" }}
              >
                {t("cookies.rejectAll")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
