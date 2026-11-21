export const MOTION_EASE = [0.16, 1, 0.3, 1] as const;
export const MOTION_EASE_SUBTLE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  fast: 0.35,
  base: 0.65,
  slow: 0.95,
  reveal: 1.1,
} as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: "some" as const,
} as const;
