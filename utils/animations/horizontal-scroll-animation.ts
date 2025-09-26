// utils/animations/initHorizontalScrollAnimation.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SCROLLTRIGGER_ID = "horizontal-scroll-immersive-process";

export const initHorizontalScrollAnimation = () => {
  let interval = window.setInterval(boot, 100);
  let tween: gsap.core.Tween | null = null;

  function boot() {
    const container = document.querySelector<HTMLElement>(
      ".horizontal-scroll-container"
    );
    const wrapper = document.querySelector<HTMLElement>(
      ".horizontal-scroll-wrapper"
    );
    const items = document.querySelectorAll<HTMLElement>(".process-item");

    if (!container || !wrapper || !items.length) return;

    clearInterval(interval);

    const totalWidth = Array.from(items).reduce(
      (total, item) => total + item.offsetWidth,
      0
    );
    gsap.set(wrapper, { width: totalWidth });

    // Enhanced initial states - more dramatic but clean
    items.forEach((item) => {
      const itemContent = item.querySelector<HTMLElement>(".process-content");
      const itemImage = item.querySelector<HTMLElement>(".process-image");

      if (itemContent) {
        gsap.set(itemContent, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationX: 10,
        });
      }

      if (itemImage) {
        gsap.set(itemImage, {
          opacity: 0,
          y: -60,
          scale: 0.85,
          rotationX: -8,
          rotationY: 12,
        });
      }
    });

    tween = gsap.to(wrapper, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        id: SCROLLTRIGGER_ID,
        trigger: container,
        pin: true,
        scrub: 1.2,
        end: () => `+=${totalWidth - window.innerWidth}`,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const maxScroll = totalWidth - window.innerWidth;
          const currentScroll = progress * maxScroll;
          const viewportCenter = currentScroll + window.innerWidth / 2;

          items.forEach((item, index) => {
            const itemContent =
              item.querySelector<HTMLElement>(".process-content");
            const itemImage = item.querySelector<HTMLElement>(".process-image");

            if (!itemContent && !itemImage) return;

            // Smoother progress calculation
            const itemLeft = index * window.innerWidth;
            const itemCenter = itemLeft + window.innerWidth / 2;
            const distance = Math.abs(viewportCenter - itemCenter);
            const maxDistance = window.innerWidth * 0.6;
            const itemProgress = Math.max(
              0,
              Math.min(1, 1 - distance / maxDistance)
            );

            // Eased progress for smoother animations
            const easeProgress = gsap.parseEase("power2.out")(itemProgress);

            if (itemContent) {
              gsap.to(itemContent, {
                opacity: itemProgress,
                y: 80 - 80 * easeProgress,
                scale: 0.9 + 0.1 * easeProgress,
                rotationX: 10 - 10 * easeProgress,
                duration: 0.6,
                ease: "power2.out",
              });
            }

            if (itemImage) {
              gsap.to(itemImage, {
                opacity: itemProgress,
                y: -60 + 60 * easeProgress,
                scale: 0.85 + 0.15 * easeProgress,
                rotationX: -8 + 8 * easeProgress,
                rotationY: 12 - 12 * easeProgress,
                duration: 0.6,
                ease: "power2.out",
              });
            }

            // Subtle depth effect without blur
            const depthScale = 0.98 + 0.02 * itemProgress;
            gsap.to(item, {
              scale: depthScale,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        },
      },
    });
  }

  return () => {
    clearInterval(interval);
    if (tween) {
      tween.scrollTrigger?.kill();
      tween.kill();
      tween = null;
    }
    const st = ScrollTrigger.getById(SCROLLTRIGGER_ID);
    if (st) st.kill();
  };
};
