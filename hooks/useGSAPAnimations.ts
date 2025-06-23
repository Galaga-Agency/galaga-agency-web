import { useGSAP } from "@gsap/react";
import { useAppReady } from "@/hooks/useAppReady";

type AnimationFunction = () => (() => void) | void;

interface UseGSAPAnimationsProps {
  animations: AnimationFunction[];
  delay?: number;
  dependencies?: any[];
}

export const useGSAPAnimations = ({ 
  animations, 
  delay = 100, 
  dependencies = [] 
}: UseGSAPAnimationsProps) => {
  const isAppReady = useAppReady();

  useGSAP(() => {
    if (!isAppReady) return;

    const cleanupFunctions: (() => void)[] = [];

    const timer = setTimeout(() => {
      animations.forEach(animationFn => {
        const cleanup = animationFn();
        if (cleanup && typeof cleanup === 'function') {
          cleanupFunctions.push(cleanup);
        }
      });
    }, delay);

    // Return cleanup function
    return () => {
      clearTimeout(timer);
      
      // Call all cleanup functions
      cleanupFunctions.forEach(cleanup => cleanup());
      
      // Kill all ScrollTrigger instances as fallback
      if (typeof window !== 'undefined') {
        const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
        ScrollTrigger.killAll();
      }
    };
  }, [isAppReady, ...dependencies]);
};