"use client";

import { motion } from "motion/react";

interface TooltipAnimationProps {
  children: React.ReactNode;
}

export default function TooltipAnimation({ children }: TooltipAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 3 }}
      exit={{ opacity: 0, y: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="rounded bg-stone-900 px-2 py-1 text-sm text-white shadow-md"
    >
      {children}
    </motion.div>
  );
}
