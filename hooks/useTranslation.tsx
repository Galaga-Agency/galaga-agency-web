"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, type Language } from "@/utils/routeTranslations";
import { getRouteForLanguageSwitch } from "@/utils/navigation";

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
  locale, // 👈 accept locale from layout
}: {
  children: React.ReactNode;
  locale?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // 👇 use the locale prop if provided, otherwise derive from URL
  const pathSegment = pathname.split("/")[1];
  const currentLocale =
    locale ||
    (pathSegment === "es" || pathSegment === "en"
      ? (pathSegment as Language)
      : null);

  const [language, setLanguage] = useState<Language>(
    currentLocale || defaultLocale
  );
  const [translations, setTranslations] = useState<any>({});

  const loadTranslations = async (lang: Language) => {
    try {
      const response = await import(`@/locales/${lang}.json`);
      setTranslations(response.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    }
  };

  // 🔄 update language if URL or prop changes
  useEffect(() => {
    const urlLocale = pathname.split("/")[1] as Language;
    const effectiveLocale =
      locale ||
      (urlLocale === "es" || urlLocale === "en" ? urlLocale : defaultLocale);

    setLanguage(effectiveLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", effectiveLocale);
    }
  }, [pathname, locale]);

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const changeLanguage = (newLanguage: Language) => {
    const newPath = getRouteForLanguageSwitch(pathname, newLanguage);
    window.history.replaceState({}, "", newPath);
    setLanguage(newLanguage);

    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLanguage);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    changeLanguage(newLang);
  };

  return (
    <TranslationContext.Provider
      value={{
        t,
        language,
        changeLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
