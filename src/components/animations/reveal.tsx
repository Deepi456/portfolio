"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

const getVariants = (direction: RevealProps["direction"]): Variants => {
  const offsets = {
    up: { y: 28, x: 0 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
    none: { x: 0, y: 0 },
  };
  const offset = offsets[direction ?? "up"];

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };
};

export function Reveal({ children, delay = 0, className, direction = "up" }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getVariants(direction)}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
