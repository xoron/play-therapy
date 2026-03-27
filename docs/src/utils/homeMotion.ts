import type {Transition, Variants} from 'framer-motion';

export const HOME_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SCROLL_VIEWPORT = {
  once: true as const,
  amount: 0.22 as const,
  margin: '0px 0px -56px 0px' as const,
};

export function homeTransition(
  prefersReducedMotion: boolean | null,
  overrides: Partial<Transition> = {},
): Transition {
  if (prefersReducedMotion) {
    return {duration: 0, ...overrides};
  }
  return {
    duration: 0.55,
    ease: HOME_EASE,
    ...overrides,
  };
}

export function heroStaggerVariants(prefersReducedMotion: boolean | null): {
  container: Variants;
  item: Variants;
} {
  if (prefersReducedMotion) {
    return {
      container: {hidden: {}, visible: {}},
      item: {
        hidden: {opacity: 1, y: 0},
        visible: {opacity: 1, y: 0},
      },
    };
  }
  return {
    container: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.11,
          delayChildren: 0.08,
        },
      },
    },
    item: {
      hidden: {opacity: 0, y: 22},
      visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.52, ease: HOME_EASE},
      },
    },
  };
}

export function heroFigureVariants(prefersReducedMotion: boolean | null): Variants {
  if (prefersReducedMotion) {
    return {
      hidden: {opacity: 1, x: 0, scale: 1},
      visible: {opacity: 1, x: 0, scale: 1},
    };
  }
  return {
    hidden: {opacity: 0, x: 40, scale: 0.98},
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {...homeTransition(prefersReducedMotion), duration: 0.62},
    },
  };
}
