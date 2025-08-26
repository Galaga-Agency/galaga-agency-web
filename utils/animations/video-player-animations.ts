// utils/animations/video-player-animations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * No bump. No pin. No sticky.
 * Grows the video card from its natural in-row size to 80vw × 80vh
 * across the hero's scroll range. Pure width/height interpolation (crisp).
 */
export const initVideoPlayerAnimation = () => {
  const boot = () => {
    const hero = document.querySelector(".hero-parallax") as HTMLElement | null;
    const card = document.querySelector(
      ".hero-video-card"
    ) as HTMLElement | null;
    const videoEl = card?.querySelector(
      ".video-element"
    ) as HTMLVideoElement | null;
    const logoEl = card?.querySelector(".logo-preview") as HTMLElement | null;

    if (!hero || !card || !videoEl || !logoEl) {
      setTimeout(boot, 80);
      return;
    }

    // Kill old trigger & clear any old padding
    ScrollTrigger.getById("hero-video-grow")?.kill();
    (hero as HTMLElement).style.paddingBottom = "";

    // Visual state
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
      targetW = Math.round(window.innerWidth * 0.8); // 80vw
      targetH = Math.round(window.innerHeight * 0.8); // 80vh

      try {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      } catch {}
    };

    ScrollTrigger.create({
      id: "hero-video-grow",
      trigger: hero,
      start: "top top",
      end: "bottom bottom",
      scrub: 0, // 1:1 sync
      invalidateOnRefresh: true,
      onRefresh: measure,
      onUpdate: (self) => {
        const p = gsap.utils.clamp(0, 1, self.progress);
        const curW = startW + (targetW - startW) * p;
        const curH = startH + (targetH - startH) * p;
        gsap.set(card, { width: curW, height: curH });

        if (videoEl.paused) {
          try {
            videoEl.play().catch(() => {});
          } catch {}
        }
      },
    });

    window.addEventListener(
      "resize",
      () => ScrollTrigger.getById("hero-video-grow")?.refresh(),
      { passive: true }
    );
  };

  setTimeout(boot, 80);
};
