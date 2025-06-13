"use client";

interface LanguageSelectorProps {
  language: 'es' | 'en';
  onToggle: () => void;
}

export default function LanguageSelector({ language, onToggle }: LanguageSelectorProps) {
  return (
    <button
      onClick={onToggle}
      className="text-md font-medium text-gray-400 hover:text-gray-600 transition-colors duration-200 px-6 py-1"
    >
      {language.toUpperCase()}
    </button>
  );
}