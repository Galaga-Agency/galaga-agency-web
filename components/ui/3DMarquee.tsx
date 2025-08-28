"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
  baseDuration = 50, // lower = faster
  columns = 4,
  tilt = 55,
  minItemsPerCol = 12, 
}: {
  images: string[];
  className?: string;
  baseDuration?: number;
  columns?: number;
  tilt?: number;
  minItemsPerCol?: number;
}) => {
  const chunkSize = Math.ceil(images.length / columns);
  const chunks = Array.from({ length: columns }, (_, i) =>
    images.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* massive square to cover viewport */}
      <div className="absolute left-1/2 top-1/2 size-[300vmin] -translate-x-1/2 -translate-y-1/2">
        <div
          style={{ transform: `rotateX(${tilt}deg) rotateZ(-45deg)` }}
          className="grid size-full origin-center grid-cols-4 gap-8"
        >
          {chunks.map((col, colIndex) => {
            // pad each column so a single stack is tall enough
            const MIN = 16; // bump if you still see a gap on ultra-tall screens
            const filled = Array.from(
              { length: Math.max(MIN, col.length) },
              (_, i) => col[i % col.length]
            );
            const duration = baseDuration * (colIndex % 2 === 0 ? 1 : 1.5);

            // Alternate directions: even columns go down, odd columns go up
            const isEven = colIndex % 2 === 0;
            const animateY = isEven ? ["0%", "-100%"] : ["-100%", "0%"];

            return (
              <div key={colIndex} className="relative h-full overflow-hidden">
                {/* Endless loop: two identical stacks, alternating directions */}
                <motion.div
                  className="absolute inset-0 flex flex-col gap-8"
                  animate={{ y: animateY }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                  {/* Stack A */}
                  <div className="flex flex-col gap-8">
                    {filled.map((img, idx) => (
                      <motion.img
                        key={`A-${idx}-${img}`}
                        src={img}
                        alt=""
                        width={800}
                        height={600}
                        className="aspect-[4/3] w-full rounded-lg object-cover ring-1 ring-black/10 hover:scale-105 transition-transform duration-300"
                        whileHover={{ y: -10 }}
                      />
                    ))}
                  </div>
                  {/* Stack B (duplicate) */}
                  <div className="flex flex-col gap-8">
                    {filled.map((img, idx) => (
                      <motion.img
                        key={`B-${idx}-${img}`}
                        src={img}
                        alt=""
                        width={800}
                        height={600}
                        className="aspect-[4/3] w-full rounded-lg object-cover ring-1 ring-black/10 hover:scale-105 transition-transform duration-300"
                        whileHover={{ y: -10 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
