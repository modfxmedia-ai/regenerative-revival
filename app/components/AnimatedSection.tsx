"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Fade-up distance in px. Default 30. */
  y?: number;
}

/**
 * Reusable scroll-trigger animation wrapper to match the rest of the site.
 * Fires once when the section enters the viewport (with a 100px top margin
 * so it's not too late). Server pages can compose this client wrapper
 * around any block without needing to convert the whole page to client.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 30,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
