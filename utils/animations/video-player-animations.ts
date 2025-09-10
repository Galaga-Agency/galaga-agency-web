"use client";

import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import { deviceStore } from "@/utils/device";

/**
 * Grow .hero-video-card from in-row size to responsive size during hero scroll.
 * Mobile: 80vw x 40vh, Desktop: 80vw x 80vh
 * Pure width/height interpolation; does not affect page scroll.
 */
export const initVideoPlayerAnimation = () => {
  if (typeof window === "undefined") return () => {};

  let st: ScrollTrigger | null = null;
  let resizeHandler: (() => void) | null = null;
  const pendingTimeouts: number[] = [];

  const boot = (attempt = 0) => {
    const hero = document.querySelector<HTMLElement>(".hero-parallax");
    const card = document.querySelector<HTMLElement>(".hero-video-card");
    const videoEl =
      card?.querySelector<HTMLVideoElement>(".video-element") || null;
    const logoEl = card?.querySelector<HTMLElement>(".logo-preview") || null;

    if (!hero || !card || !videoEl || !logoEl) {
      // retry a few times to tolerate late-mounting nodes
      if (attempt < 8) {
        const id = window.setTimeout(() => boot(attempt + 1), 80);
        pendingTimeouts.push(id);
      }
      return;
    }

    // ensure no leftover from a previous run of THIS animation
    ScrollTrigger.getById("hero-video-grow")?.kill();
    (hero as HTMLElement).style.paddingBottom = "";

    gsap.set(logoEl, { opacity: 0 });
    gsap.set(videoEl, { opacity: 1 });

    let startW = 0,
      startH = 0,
      targetW = 0,
      targetH = 0;

    const measure = () => {
      gsap.set(card, { clearProps: "width,height,transform" });
      const cr = card.getBoundingClientRect();
      startW = cr.width;
      startH = cr.height;

      targetW = Math.round(window.innerWidth * 0.8);

      const { isMobile, isTablet } = deviceStore.getSnapshot();
      const heightMultiplier = isMobile || isTablet ? 0.4 : 0.8;
      targetH = Math.round(window.innerHeight * heightMultiplier);

      try {
        videoEl.muted = true;
        // attempt play; ignore failures (autoplay policy)
        // biome-ignore lint/suspicious/noDiscardedPromises: best-effort
        videoEl.play().catch(() => {});
      } catch {}
    };

    st = ScrollTrigger.create({
      id: "hero-video-grow",
      trigger: hero,
      start: "top top",
      end: "bottom bottom",
      scrub: 0, // exact sync to scroll
      invalidateOnRefresh: true,
      onRefresh: measure,
      onUpdate: (self) => {
        const p = gsap.utils.clamp(0, 1, self.progress);
        const curW = startW + (targetW - startW) * p;
        const curH = startH + (targetH - startH) * p;

        // Add mobile constraints to prevent viewport breaking
        const { isMobile, isTablet } = deviceStore.getSnapshot();
        if (isMobile || isTablet) {
          const safeW = Math.min(curW, window.innerWidth * 0.95);
          const safeH = Math.min(curH, window.innerHeight * 0.6);
          gsap.set(card, { width: safeW, height: safeH });
        } else {
          gsap.set(card, { width: curW, height: curH });
        }

        if (videoEl.paused) {
          try {
            // biome-ignore lint/suspicious/noDiscardedPromises:
            videoEl.play().catch(() => {});
          } catch {}
        }
      },
    });

    resizeHandler = () => st?.refresh();
    window.addEventListener("resize", resizeHandler, { passive: true });

    // initial measure + position
    st.refresh();
  };

  // small startup delay, consistent with the rest of your app
  const t0 = window.setTimeout(() => boot(0), 80);
  pendingTimeouts.push(t0);

  // cleanup ONLY what we created
  return () => {
    // clear any pending retries
    while (pendingTimeouts.length) {
      const id = pendingTimeouts.pop()!;
      clearTimeout(id);
    }
    // remove listener
    if (resizeHandler) {
      window.removeEventListener("resize", resizeHandler);
      resizeHandler = null;
    }
    // kill the trigger
    st?.kill();
    st = null;

    // stop any in-flight tweens on key elements if they exist
    const card = document.querySelector<HTMLElement>(".hero-video-card");
    const videoEl =
      card?.querySelector<HTMLVideoElement>(".video-element") || null;
    const logoEl = card?.querySelector<HTMLElement>(".logo-preview") || null;
    gsap.killTweensOf([card, videoEl, logoEl].filter(Boolean) as Element[]);
  };
};
