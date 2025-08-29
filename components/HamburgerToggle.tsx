"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { initHamburgerAnimation } from "@/utils/animations/menu-toggle-animation";

interface HamburgerToggleProps {
  isOpen: boolean;
  onClick: () => void;
  isScrolled: boolean;
}

export default function HamburgerToggle({ isOpen, onClick, isScrolled }: HamburgerToggleProps) {
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!hamburgerRef.current) return;

    const cleanup = initHamburgerAnimation({
      element: hamburgerRef.current,
      isOpen
    });

    return cleanup;
  }, [isOpen]);

  return (
    <button
      ref={hamburgerRef}
      onClick={onClick}
      className={`fixed top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 z-[1002] hamburger-btn xl:hidden ${
        isScrolled && !isOpen
          ? "bg-white border border-hielo/30"
          : "bg-white/20 backdrop-blur-sm border border-white/20"
      }`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-6 h-5 hamburger-icon">
        <span
          className={`hamburger-line hamburger-line-1 absolute left-0 top-0 w-full h-0.5 rounded-full transition-colors duration-200 ${
            isScrolled && !isOpen ? "bg-teal" : "bg-white"
          }`}
        ></span>
        <span
          className={`hamburger-line hamburger-line-2 absolute left-0 top-2 w-full h-0.5 rounded-full transition-colors duration-200 ${
            isScrolled && !isOpen ? "bg-teal" : "bg-white"
          }`}
        ></span>
        <span
          className={`hamburger-line hamburger-line-3 absolute left-0 top-4 w-full h-0.5 rounded-full transition-colors duration-200 ${
            isScrolled && !isOpen ? "bg-teal" : "bg-white"
          }`}
        ></span>
      </div>
    </button>
  );
}