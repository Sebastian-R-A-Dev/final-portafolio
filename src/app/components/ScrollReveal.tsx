"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Pick<MotionProps, "initial" | "whileInView" | "viewport" | "transition">;

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  initial = { opacity: 0, y: 60 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, margin: "-80px" },
  transition = { duration: 0.55, ease: "easeOut" },
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
