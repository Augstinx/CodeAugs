import { Variants, Transition } from "framer-motion";

// Cubic bezier curves matching modern enterprise UIs
export const transitionTransitions = {
  easeSmooth: [0.25, 0.1, 0.25, 1.0],
  easeBounce: [0.175, 0.885, 0.32, 1.275],
  easeOutFast: [0.0, 0.0, 0.2, 1.0],
} as const;

// Default physics springs
export const springPresets = {
  gentle: { stiffness: 120, damping: 14 },
  bouncy: { stiffness: 300, damping: 10 },
  stiff: { stiffness: 400, damping: 30 },
} satisfies Record<string, Transition>;

// Standard Fade-In Variant
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: transitionTransitions.easeSmooth },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: transitionTransitions.easeOutFast },
  },
};

// Slide Up & Fade Variant (ideal for cards and sections)
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: transitionTransitions.easeSmooth },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25, ease: transitionTransitions.easeOutFast },
  },
};

// Scale In Variant (ideal for modals, popovers, and badges)
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: transitionTransitions.easeSmooth },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, ease: transitionTransitions.easeOutFast },
  },
};

// Staggered Container Variant (for lists and grids)
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};