import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHorizontalScrollAnimation = () => {
  let interval = window.setInterval(() => {
    const container = document.querySelector<HTMLElement>(".horizontal-scroll-container");
    const wrapper = document.querySelector<HTMLElement>(".horizontal-scroll-wrapper");
    const items = document.querySelectorAll<HTMLElement>(".process-item");

    if (container && wrapper && items.length) {
      clearInterval(interval);

      const totalWidth = Array.from(items).reduce((total, item) => total + item.offsetWidth, 0);
      gsap.set(wrapper, { width: totalWidth });

      items.forEach((item) => {
        const itemContent = item.querySelector<HTMLElement>(".process-content");
        const itemImage = item.querySelector<HTMLElement>(".process-image");
        
        if (itemContent && itemImage) {
          gsap.set(itemContent, { opacity: 0, x: -100, scale: 0.8 });
          gsap.set(itemImage, { opacity: 0, x: 100, scale: 0.9, rotation: 5 });
        }
      });

      gsap.to(wrapper, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth - window.innerWidth}`,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            items.forEach((item, index) => {
              const itemContent = item.querySelector<HTMLElement>(".process-content");
              const itemImage = item.querySelector<HTMLElement>(".process-image");
              
              if (itemContent && itemImage) {
                const itemLeft = index * window.innerWidth;
                const currentScroll = progress * (totalWidth - window.innerWidth);
                const itemCenter = itemLeft + (window.innerWidth / 2);
                const viewportCenter = currentScroll + (window.innerWidth / 2);
                const distance = Math.abs(viewportCenter - itemCenter);
                const itemProgress = Math.max(0, Math.min(1, 1 - (distance / (window.innerWidth * 0.5))));
                
                gsap.to(itemContent, {
                  opacity: itemProgress,
                  x: -100 + (100 * itemProgress),
                  scale: 0.8 + (0.2 * itemProgress),
                  duration: 0.3,
                  ease: "power2.out"
                });
                
                gsap.to(itemImage, {
                  opacity: itemProgress,
                  x: 100 - (100 * itemProgress),
                  scale: 0.9 + (0.1 * itemProgress),
                  rotation: 5 - (5 * itemProgress),
                  duration: 0.3,
                  ease: "power2.out"
                });
              }
            });
          }
        }
      });

      console.log("Horizontal scroll animation initialized successfully");
    }
  }, 100);

  return () => {
    clearInterval(interval);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};