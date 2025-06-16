import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSlideUpAnimation() {
  const cards = document.querySelectorAll('[data-slide-up]');
  
  cards.forEach((card) => {
    const element = card as HTMLElement;
    const delay = parseFloat(element.dataset.delay || '0');
    
    // Create scroll trigger for zoom in effect
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: delay,
          ease: "back.out(1.7)"
        });
      }
    });
  });
}