import type { Transition, Variants } from "framer-motion";

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 28,
  mass: 0.7,
};

export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT_QUART },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_QUART } },
};

export const stagger = (childDelay = 0.05, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: childDelay,
      delayChildren,
    },
  },
});

export const wordFade: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE_OUT_QUART },
  },
};
