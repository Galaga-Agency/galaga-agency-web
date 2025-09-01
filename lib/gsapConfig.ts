"use client";

import { gsap as _gsap } from "gsap";
import { ScrollTrigger as _ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin as _ScrollToPlugin } from "gsap/ScrollToPlugin";

// Initialize once and memoize across HMR / navigations
type GSAPBundle = {
  gsap: typeof _gsap;
  ScrollTrigger: typeof _ScrollTrigger;
  ScrollToPlugin: typeof _ScrollToPlugin;
};

function init(): GSAPBundle {
  _gsap.registerPlugin(_ScrollTrigger, _ScrollToPlugin);
  // Global prefs/config (adjust if you like)
  _gsap.ticker.lagSmoothing(500, 33);
  _ScrollTrigger.defaults({ markers: false });
  _ScrollTrigger.config({ ignoreMobileResize: true });
  return {
    gsap: _gsap,
    ScrollTrigger: _ScrollTrigger,
    ScrollToPlugin: _ScrollToPlugin,
  };
}

const GSAP = ((globalThis as any).__GSAP_CONFIG__ ??= init()) as GSAPBundle;

export const gsap = GSAP.gsap;
export const ScrollTrigger = GSAP.ScrollTrigger;
export const ScrollToPlugin = GSAP.ScrollToPlugin;
