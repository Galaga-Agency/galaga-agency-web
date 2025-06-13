import { useState } from "react";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

type Language = "es" | "en";
type TranslationKey = string;

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: TranslationKey): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return {
    t,
    language,
    changeLanguage,
    toggleLanguage,
  };
}
