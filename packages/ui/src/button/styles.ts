import { tv } from "tailwind-variants";
import { variantStyles } from "../utils/variants";

export const buttonStyles = tv({
  extend: variantStyles,
  base: [
    "button cursor-default relative inline-flex py-2 px-4 rounded-full justify-center items-center gap-2 shrink-0",
    "disabled:status-disabled",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "font-medium",
    "transition-[scale] duration-300 data-pressed:scale-98",
  ],
  variants: {
    size: {
      sm: "min-w-16 gap-1 px-3 py-1.5 text-xs",
      md: "min-w-20 gap-2 px-4 py-1.5 text-sm",
      lg: "min-w-30 gap-2 px-5 py-1.5 text-base",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
  },
});
