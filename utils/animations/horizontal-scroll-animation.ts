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

    items.forEach((item) => {
      const itemContent = item.querySelector<HTMLElement>(".process-content");
      const itemImage = item.querySelector<HTMLElement>(".process-image");

      if (itemContent) {
        const skip =
          itemContent.classList.contains("card-slide-left") ||
          itemContent.classList.contains("card-slide-right") ||
          itemContent.classList.contains("card-slide-top") ||
          itemContent.classList.contains("card-slide-bottom") ||
          itemContent.classList.contains("card-flip-reveal") ||
          itemContent.classList.contains("card-zoom-rotate");
        if (!skip) gsap.set(itemContent, { opacity: 0, x: -100, scale: 0.8 });
      }

      if (itemImage) {
        const skip =
          itemImage.classList.contains("card-slide-left") ||
          itemImage.classList.contains("card-slide-right") ||
          itemImage.classList.contains("card-slide-top") ||
          itemImage.classList.contains("card-slide-bottom") ||
          itemImage.classList.contains("card-flip-reveal") ||
          itemImage.classList.contains("card-zoom-rotate");
        if (!skip)
          gsap.set(itemImage, { opacity: 0, x: 100, scale: 0.9, rotation: 5 });
      }
    });

    // Create the tween and attach a uniquely-id'd ScrollTrigger
    tween = gsap.to(wrapper, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        id: SCROLLTRIGGER_ID,
        trigger: container,
        pin: true,
        scrub: 1,
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

            // Position-based item progress
            const itemLeft = index * window.innerWidth;
            const itemCenter = itemLeft + window.innerWidth / 2;
            const distance = Math.abs(viewportCenter - itemCenter);
            const itemProgress = Math.max(
              0,
              Math.min(1, 1 - distance / (window.innerWidth * 0.5))
            );

            if (itemContent) {
              const skip =
                itemContent.classList.contains("card-slide-left") ||
                itemContent.classList.contains("card-slide-right") ||
                itemContent.classList.contains("card-slide-top") ||
                itemContent.classList.contains("card-slide-bottom") ||
                itemContent.classList.contains("card-flip-reveal") ||
                itemContent.classList.contains("card-zoom-rotate");
              if (!skip) {
                gsap.to(itemContent, {
                  opacity: itemProgress,
                  x: -100 + 100 * itemProgress,
                  scale: 0.8 + 0.2 * itemProgress,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            }

            if (itemImage) {
              const skip =
                itemImage.classList.contains("card-slide-left") ||
                itemImage.classList.contains("card-slide-right") ||
                itemImage.classList.contains("card-slide-top") ||
                itemImage.classList.contains("card-slide-bottom") ||
                itemImage.classList.contains("card-flip-reveal") ||
                itemImage.classList.contains("card-zoom-rotate");
              if (!skip) {
                gsap.to(itemImage, {
                  opacity: itemProgress,
                  x: 100 - 100 * itemProgress,
                  scale: 0.9 + 0.1 * itemProgress,
                  rotation: 5 - 5 * itemProgress,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            }
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
    // Extra safety: kill by id if something recreated the trigger
    const st = ScrollTrigger.getById(SCROLLTRIGGER_ID);
    if (st) st.kill();
  };
};
