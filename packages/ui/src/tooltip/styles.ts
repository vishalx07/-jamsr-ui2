import { radiusVariant } from "../utils/variants";
import { tv, type VariantProps } from "tailwind-variants";

export const tooltipStyles = tv({
  slots: {
    content:
      "bg-surface inline-flex px-3 py-1 text-sm font-medium text-foreground",
    arrow: "fill-background-secondary",
  },
  variants: {
    radius: radiusVariant("content"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipStyles>;
export type TooltipSlots = keyof ReturnType<typeof tooltipStyles>;
