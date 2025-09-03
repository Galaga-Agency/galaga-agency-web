import { gsap } from "gsap";

interface Options {
  root: HTMLElement;
  selector?: string;
  baseOpacity?: number;
  peakOpacity?: number;
  speed?: number;
  jumpWords?: string[];
  progress?: number;
  onComplete?: () => void;
}

function fold(s: string) {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .toLowerCase();
}

export function initLoadingAnimation({
  root,
  selector = ".loading-text",
  baseOpacity = 0.3,
  peakOpacity = 1,
  speed = 1,
  jumpWords = ["Data", "Datos"],
  progress = 0,
  onComplete,
}: Options) {
  const el = root.querySelector(selector) as HTMLElement | null;
  const percentageEl = root.querySelector<HTMLElement>(".loading-percentage");

  const timelines: gsap.core.Timeline[] = [];

  // Text animation
  if (el) {
    let originalText = el.dataset.originalText ?? el.textContent ?? "";
    if (!el.dataset.split) {
      el.dataset.originalText = originalText;
      const frag = document.createDocumentFragment();

      for (const ch of originalText) {
        const span = document.createElement("span");
        if (ch === " ") {
          span.className = "lt-char lt-space inline-block";
          span.textContent = "\u00A0";
        } else {
          span.className = "lt-char inline-block";
          span.textContent = ch;
        }
        frag.appendChild(span);
      }

      el.textContent = "";
      el.appendChild(frag);
      el.dataset.split = "true";
    }

    const chars = Array.from(el.querySelectorAll<HTMLElement>(".lt-char"));

    if (chars.length) {
      const elementsToAnimate = percentageEl ? [...chars, percentageEl] : chars;

      gsap.set(elementsToAnimate, { opacity: baseOpacity });

      const waveTl = gsap.timeline({ repeat: -1 });
      waveTl.to(elementsToAnimate, {
        opacity: peakOpacity,
        duration: 0.4 * speed,
        stagger: { each: 0.08 * speed, from: "start", yoyo: true, repeat: 1 },
        ease: "sine.inOut",
      });
      timelines.push(waveTl);

      const foldedText = fold(el.dataset.originalText ?? originalText);
      const jumpSet = new Set(jumpWords.map((w) => fold(w)).filter(Boolean));

      const jumpRanges: Array<{ start: number; end: number }> = [];
      for (const jw of jumpSet) {
        if (!jw) continue;
        let idx = 0;
        while ((idx = foldedText.indexOf(jw, idx)) !== -1) {
          jumpRanges.push({ start: idx, end: idx + jw.length });
          idx += jw.length;
        }
      }

      if (jumpRanges.length) {
        const jumpTl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

        for (const { start, end } of jumpRanges) {
          const slice = chars.slice(start, end);
          if (!slice.length) continue;

          gsap.set(slice, { y: 0 });
          jumpTl.to(slice, {
            y: -6,
            duration: 0.22,
            ease: "power2.out",
            stagger: { each: 0.08, from: "start" },
          });
          jumpTl.to(
            slice,
            {
              y: 0,
              duration: 0.28,
              ease: "bounce.out",
              stagger: { each: 0.08, from: "start" },
            },
            ">-0.12"
          );
        }
        timelines.push(jumpTl);
      }
    }
  }

  // Circle pulse animation only
  const progressCircle =
    root.querySelector<SVGCircleElement>(".progress-circle");
  if (progressCircle) {
    const pulseTl = gsap.timeline({ repeat: -1 });
    pulseTl.to(progressCircle, {
      strokeWidth: 10,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    timelines.push(pulseTl);
  }

  return () => {
    timelines.forEach((tl) => tl.kill());
  };
}