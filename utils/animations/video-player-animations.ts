// utils/animations/video-player-animations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * No bump. No pin. No sticky.
 * Grow .hero-video-card from in-row size to 80vw x 80vh during hero scroll.
 * Pure width/height interpolation (crisp). Does not affect page scroll.
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
      targetH = Math.round(window.innerHeight * 0.8);
      try {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      } catch {}
    };

    const st = ScrollTrigger.create({
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
        gsap.set(card, { width: curW, height: curH });

        if (videoEl.paused) {
          try {
            videoEl.play().catch(() => {});
          } catch {}
        }
      },
    });

    window.addEventListener("resize", () => st.refresh(), { passive: true });
  };

  setTimeout(boot, 80);
};
