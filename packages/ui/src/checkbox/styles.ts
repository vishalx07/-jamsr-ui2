import { tv } from "tailwind-variants";

import { groupDataFocusVisibleClasses } from "../utils/variants";

export const checkboxStyles = tv({
  slots: {
    root: ["group flex gap-2 items-start", "data-disabled:status-disabled"],
    control: [
      "flex justify-center items-center",
      ...groupDataFocusVisibleClasses,
      "shrink-0 border-default group-data-hovered:border-default-hover",
      "relative appearance-none border group-data-checked:border-primary group-data-checked:bg-primary group-data-checked:text-primary-foreground",
      "group-data-disabled:status-disabled group-data-pressed:scale-90 transition-all duration-300",
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
        control: "size-4",
      },
      md: {
        control: "size-4.5",
      },
      lg: {
        control: "size-5",
      },
    },
    isInvalid: {
      true: {
        control: "border-danger! group-data-checked:bg-danger",
      },
    },
    radius: {
      none: { control: "rounded-none" },
      sm: { control: "rounded-sm" },
      md: { control: "rounded-md" },
      lg: { control: "rounded-lg" },
      full: { control: "rounded-full" },
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
  },
});
