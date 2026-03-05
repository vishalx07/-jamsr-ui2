import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const tooltipStyles = tv({
  slots: {
    content:
      "bg-surface inline-flex px-3 py-1 text-sm font-medium text-foreground",
    arrow: "fill-background-secondary",
    positioner: "",
  },
  variants: {
    radius: {
      none: { content: "rounded-none" },
      sm: { content: "rounded-sm" },
      md: { content: "rounded-md" },
      lg: { content: "rounded-lg" },
      full: { content: "rounded-full" },
    },
  },
  defaultVariants: {
    radius: "md",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipStyles>;
export type TooltipSlots = keyof ReturnType<typeof tooltipStyles>;
