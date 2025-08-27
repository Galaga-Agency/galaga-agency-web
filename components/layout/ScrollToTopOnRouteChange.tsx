// components/layout/ScrollToTopOnRouteChange.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // If you're using Lenis (new API) and made it global:
    const anyWin = window as any;
    const lenis = anyWin.__LENIS__;
    if (lenis) {
      // snap to top instantly on route change
      lenis.scrollTo(0, { immediate: true });
    } else {
      // native scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
      // Fallback for Safari (no 'instant' support):
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
