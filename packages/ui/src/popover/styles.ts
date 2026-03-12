import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const popoverStyles = tv({
  slots: {
    positioner: "z-popover focus-visible:outline-none",
    content:
      "bg-surface max-w-64 p-2 text-sm shadow-md backdrop-blur-3xl origin-(--transform-origin)",
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
  },
  variants: {
    radius: {
      none: { content: "rounded-none", positioner: "rounded-none" },
      sm: { content: "rounded-sm", positioner: "rounded-sm" },
      md: { content: "rounded-md", positioner: "rounded-md" },
      lg: { content: "rounded-lg", positioner: "rounded-lg" },
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    backdrop: "transparent",
  },
});

export type PopoverVariants = VariantProps<typeof popoverStyles>;
export type PopoverSlots = keyof ReturnType<typeof popoverStyles>;
