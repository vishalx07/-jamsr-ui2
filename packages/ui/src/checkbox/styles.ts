import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses } from "../utils/variants";

export const checkboxStyles = tv({
  slots: {
    root: [
      "flex justify-center items-center",
      ...dataFocusVisibleClasses,
      "shrink-0 border-default data-hovered:border-default-hover",
      "relative appearance-none border data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground",
      "data-disabled:status-disabled data-pressed:scale-90 transition-all duration-300",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    ],
    input:
      "absolute opacity-[0.0001] cursor-interactive disabled:cursor-disabled inset-0 z-1",
    content: "flex flex-col justify-center gap-1",
    indicator: "size-3",
  },
  variants: {
    size: {
      sm: {
        root: "size-4",
      },
      md: {
        root: "size-4.5",
      },
      lg: {
        root: "size-5",
      },
    },
    isInvalid: {
      true: {
        root: "border-danger! data-checked:bg-danger",
      },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      full: { root: "rounded-full" },
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
  },
});
