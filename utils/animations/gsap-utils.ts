import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationConfig {
  trigger: string;
  start?: string;
  end?: string;
  toggleActions?: string;
  animation: gsap.core.Tween | gsap.core.Timeline;
}

interface AnimationManager {
  scrollTriggers: ScrollTrigger[];
  addScrollAnimation: (config: ScrollAnimationConfig) => void;
  addAnimation: (
    selector: string,
    props: gsap.TweenVars,
    scrollConfig?: Partial<ScrollAnimationConfig>
  ) => void;
  cleanup: () => void;
}

export const createAnimationManager = (): AnimationManager => {
  const scrollTriggers: ScrollTrigger[] = [];

  const addScrollAnimation = (config: ScrollAnimationConfig) => {
    const trigger = ScrollTrigger.create({
      trigger: config.trigger,
      start: config.start || "top 80%",
      end: config.end || "bottom 20%",
      toggleActions: config.toggleActions || "play none none none",
      animation: config.animation,
    });
    scrollTriggers.push(trigger);
  };

  const addAnimation = (
    selector: string,
    props: gsap.TweenVars,
    scrollConfig?: Partial<ScrollAnimationConfig>
  ) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const animation = gsap.from(elements, { ...props, paused: true });

    if (scrollConfig) {
      addScrollAnimation({
        trigger: scrollConfig.trigger || selector,
        start: scrollConfig.start,
        end: scrollConfig.end,
        toggleActions: scrollConfig.toggleActions,
        animation,
      });
    }
  };

  const cleanup = () => {
    scrollTriggers.forEach((trigger) => trigger.kill());
    scrollTriggers.length = 0;
  };

  return {
    scrollTriggers,
    addScrollAnimation,
    addAnimation,
    cleanup,
  };
};

// Helper for safe element selection with animation
export const safeAnimate = (
  selector: string,
  animationProps: gsap.TweenVars,
  scrollConfig?: Partial<ScrollAnimationConfig>
) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    console.warn(`No elements found for selector: ${selector}`);
    return null;
  }

  const animation = gsap.from(elements, { ...animationProps, paused: true });

  if (scrollConfig) {
    return ScrollTrigger.create({
      trigger: scrollConfig.trigger || selector,
      start: scrollConfig.start || "top 80%",
      end: scrollConfig.end || "bottom 20%",
      toggleActions: scrollConfig.toggleActions || "play none none none",
      animation,
    });
  }

  return animation;
};
