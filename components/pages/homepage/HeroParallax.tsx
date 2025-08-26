"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { HeroImageCard } from "./HeroImageCard";
import { HeroTitleAnimation } from "./HeroTitleAnimation";
import { HeroVideoCard } from "./HeroVideoCard ";

export const HeroParallax = ({
  parallaxItems,
}: {
  parallaxItems: { title: string; image: string; video?: string }[];
}) => {
  const imageRow = parallaxItems.slice(0, 8);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring = { stiffness: 300, damping: 80, bounce: 300 };

  // Parallax stays exactly as before
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1200]),
    spring
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1200]),
    spring
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    spring
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    spring
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    spring
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    spring
  );
  const sidesOpacity = useTransform(scrollYProgress, [0.2, 0.55], [1, 0]);

  return (
    <div
      ref={ref}
      className="hero-parallax relative z-10 h-[200vh] overflow-hidden antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-azul-profundo) 0%, var(--color-teal) 50%, var(--color-negro) 100%)",
      }}
    >
      <HeroTitleAnimation />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="flex flex-col gap-20 justify-center items-center min-h-screen"
      >
        {/* ROW OF CARDS (centered vertically on screen) */}
        <div className="cards-container flex flex-row items-center justify-center gap-4 lg:gap-16 px-4">
          <motion.div
            style={{ opacity: sidesOpacity, x: translateXReverse }}
            className="flex flex-row gap-4 lg:gap-16"
          >
            {imageRow.slice(0, 4).map((item, i) => (
              <HeroImageCard
                key={i}
                item={item}
                translate={translateXReverse}
                scrollProgress={scrollYProgress}
                cardIndex={i}
              />
            ))}
          </motion.div>

          {/* we animate the WRAP from GSAP */}
          <div className="hero-video-wrap relative z-20">
            <HeroVideoCard />
          </div>

          <motion.div
            style={{ opacity: sidesOpacity, x: translateX }}
            className="flex flex-row gap-4 lg:gap-16"
          >
            {imageRow.slice(4, 8).map((item, i) => (
              <HeroImageCard
                key={i + 4}
                item={item}
                translate={translateX}
                scrollProgress={scrollYProgress}
                cardIndex={i + 4}
              />
            ))}
          </motion.div>
        </div>

        {/* travel room */}
        <div className="video-expansion-space h-[100vh]" />
      </motion.div>
    </div>
  );
};
