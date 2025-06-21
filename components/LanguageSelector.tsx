"use client";

interface LanguageSelectorProps {
  language: 'es' | 'en';
  onToggle: () => void;
  isScrolled: boolean;
}

export default function LanguageSelector({ language, onToggle, isScrolled }: LanguageSelectorProps) {
  return (
    <button
      onClick={onToggle}
      className={`text-md font-medium transition-colors duration-200 px-6 py-1 cursor-pointer ${
        isScrolled 
          ? 'text-gray-400 hover:text-gray-600' 
          : 'text-white/70 hover:text-white'
      }`}
    >
      {language.toUpperCase()}
    </button>
  );
}