"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { initHamburgerAnimation } from "@/utils/hamburger-animation";

interface HamburgerToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerToggle({ isOpen, onClick }: HamburgerToggleProps) {
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
      className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 z-[200] hamburger-btn"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-6 h-5 hamburger-icon">
        <span className="hamburger-line hamburger-line-1 absolute left-0 top-0 w-full h-0.5 bg-gray-800 rounded-full"></span>
        <span className="hamburger-line hamburger-line-2 absolute left-0 top-2 w-full h-0.5 bg-gray-800 rounded-full"></span>
        <span className="hamburger-line hamburger-line-3 absolute left-0 top-4 w-full h-0.5 bg-gray-800 rounded-full"></span>
      </div>
    </button>
  );
}