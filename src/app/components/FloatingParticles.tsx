"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 23) % 100}%`,
        duration: 14 + (i % 8),
        delay: (i % 6) * 0.4,
        size: 1.5 + (i % 3),
      })),
    [],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40 blur-[0.5px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 8, -18, 0],
            opacity: [0.1, 0.45, 0.2, 0.35, 0.1],
            scale: [1, 1.4, 0.9, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
