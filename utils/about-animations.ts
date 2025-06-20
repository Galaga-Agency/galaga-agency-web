import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = () => {
  // Animate FaLightbulb icon
  gsap.fromTo(".lightbulb-icon", 
    { scale: 1, rotation: 0 },
    {
      scale: 2,
      rotation: 15,
      duration: 0.8,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".lightbulb-icon",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate FaHandshake icon
  gsap.fromTo(".handshake-icon", 
    { scale: 1, rotation: 0 },
    {
      scale: 2,
      rotation: -12,
      duration: 0.8,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".handshake-icon",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );
};