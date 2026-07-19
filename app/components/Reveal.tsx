"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal fires (seconds). */
  delay?: number;
  /** Direction the element travels in from. Default "up". */
  direction?: Direction;
  /** Travel distance in px. Default 28. */
  distance?: number;
  /** Duration in seconds. Default 0.7. */
  duration?: number;
  /** If true, children animate in sequence (uses RevealItem inside). */
  stagger?: boolean;
  /** Stagger gap between children (seconds). Default 0.1. */
  staggerGap?: number;
  as?: "div" | "section" | "ul" | "li" | "span";
}

const ease = [0.22, 1, 0.36, 1] as const;

function offset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}

/**
 * Reveal - the standard scroll-triggered entrance for the V2 elevated build.
 * Fades + slides content in as it enters the viewport, once. Supports an
 * optional stagger mode that sequences direct children via <RevealItem>.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.7,
  stagger = false,
  staggerGap = 0.1,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  if (stagger) {
    const container: Variants = {
      hidden: {},
      show: {
        transition: { staggerChildren: staggerGap, delayChildren: delay },
      },
    };
    return (
      <MotionTag
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Child item for use inside a <Reveal stagger> container. */
export function RevealItem({
  children,
  className,
  direction = "up",
  distance = 28,
  duration = 0.6,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  as?: "div" | "li" | "span";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: { opacity: 0, ...offset(direction, distance) },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, ease } },
  };
  return (
    <MotionTag variants={variants} className={className}>
      {children}
    </MotionTag>
  );
}
