"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { HeroImageCard } from "./HeroImageCard";
import { HeroTitleAnimation } from "./HeroTitleAnimation";
import { HeroVideoCard } from "./HeroVideoCard ";
import Image from "next/image";

export const HeroParallax = ({
  parallaxItems,
}: {
  parallaxItems: { title: string; image: string; video?: string }[];
}) => {
  const imageRow = parallaxItems.slice(0, 8);
  const hasAnimated = useRef(false);

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

  // Logo animation - moved here from HeroTitleAnimation
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Simple logo animation with JavaScript
    const logoContainer: any = document.querySelector(".hero-logo-js");
    const logoImg = logoContainer?.querySelector("img");

    if (!logoContainer || !logoImg) return;

    // FORCE THE SIZE BEFORE ANIMATION
    logoContainer.style.width = "90vw";
    logoContainer.style.maxWidth = "600px";
    logoContainer.style.minWidth = "300px";
    logoImg.style.width = "100%";
    logoImg.style.height = "auto";
    logoImg.style.maxWidth = "none";

    // Set initial state
    logoContainer.style.opacity = "0";
    logoImg.style.transform = "perspective(1000px) rotateX(-90deg)";
    logoImg.style.transformOrigin = "center center -100px";

    // Animate in
    setTimeout(() => {
      logoContainer.style.transition = "opacity 0.3s ease-out";
      logoContainer.style.opacity = "1";

      logoImg.style.transition = "transform 1s ease-out";
      logoImg.style.transform = "perspective(1000px) rotateX(0deg)";
    }, 600);

    // Fade out
    setTimeout(() => {
      logoContainer.style.transition = "opacity 0.6s ease-out";
      logoContainer.style.opacity = "0";
    }, 1800);

    // Remove
    setTimeout(() => {
      logoContainer.style.display = "none";
    }, 2500);
  }, []);

  return (
    <div
      ref={ref}
      className="hero-parallax relative z-10 h-[190vh] md:h-[180vh] lg:h-[170vh] xl:h-[200vh] 2xl:h-[210vh] overflow-hidden antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-azul-profundo) 0%, var(--color-teal) 50%, var(--color-negro) 100%)",
      }}
    >
      {/* Logo Animation - positioned relative to viewport */}
      <div
        className="hero-logo-js fixed z-[100] opacity-0 pointer-events-none"
        style={{
          top: "50vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
          width: "90vw !important",
          maxWidth: "600px !important",
          minWidth: "300px !important",
        }}
      >
        <Image
          src="/assets/img/logos/logo-full-white.webp"
          alt="Galaga Agency"
          className=""
          width={600}
          height={600}
          style={{
            width: "100% !important",
            height: "auto !important",
            maxWidth: "none !important",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      <HeroTitleAnimation />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="flex flex-col gap-20 justify-center items-center min-h-screen"
      >
        {/* ROW OF CARDS (centered vertically on screen) */}
        <div className="cards-container flex flex-row items-center justify-center gap-24 lg:gap-16 px-4">
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
