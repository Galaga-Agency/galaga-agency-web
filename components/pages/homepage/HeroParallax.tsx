"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { HeroServiceCard } from "./HeroServiceCard";
import { HeroTitleAnimation } from "./HeroTitleAnimation";

export const HeroParallax = ({
  parallaxItems,
}: {
  parallaxItems: {
    title: string;
    image: string;
  }[];
}) => {
  const firstRow = parallaxItems.slice(0, 6);
  const secondRow = parallaxItems.slice(6, 12);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 80, bounce: 300 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-1100, 100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-azul-profundo) 0%, var(--color-teal) 50%, var(--color-negro) 100%)",
      }}
    >
      <HeroTitleAnimation />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col gap-12 justify-center"
      >
        <motion.div className="flex justify-center gap-4 lg:gap-28 px-4">
          <Image
            src={"/assets/img/logos/logo-mobile-white.webp"}
            alt={"Logo Galaga Agency"}
            className="w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[20vw] h-auto opacity-95 drop-shadow-2xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-4 lg:gap-20 mb-20 px-4">
          {firstRow.map((parallaxItem) => (
            <HeroServiceCard
              parallaxItem={parallaxItem}
              translate={translateX}
              key={parallaxItem.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 gap-4 lg:gap-20 px-4">
          {secondRow.map((parallaxItem) => (
            <HeroServiceCard
              parallaxItem={parallaxItem}
              translate={translateXReverse}
              key={parallaxItem.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
