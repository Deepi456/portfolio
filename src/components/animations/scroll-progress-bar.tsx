"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgressBar() {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-accent-violet via-accent-blue to-accent-cyan"
      style={{ scaleX: scrollProgress }}
    />
  );
}
