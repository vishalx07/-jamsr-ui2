import { tv } from "tailwind-variants";

import { focusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const switchStyles = tv({
  slots: {
    root: [
      ...focusVisibleClasses,
      "flex group relative cursor-default shrink-0 items-center rounded-full bg-surface-secondary p-1",
      "data-disabled:status-disabled",
      "data-hovered:opacity-90",
      "border-[0.5px] border-border-light",
    ],
    thumb: [
      "rounded-full bg-white flex justify-center items-center",
      "transition-transform duration-150",
    ],
  },
  variants: {
    color: {
      default: {
        root: "data-checked:bg-default",
      },
      primary: {
        root: "data-checked:bg-primary",
      },
      secondary: {
        root: "data-checked:bg-secondary",
      },
      success: {
        root: "data-checked:bg-success",
      },
      warning: {
        root: "data-checked:bg-warning",
      },
      danger: {
        root: "data-checked:bg-danger",
      },
    },
    size: {
      sm: {
        root: "h-5 w-9",
        thumb: "size-3.5 data-checked:translate-x-3.5",
      },
      md: {
        root: "h-6 w-10",
        thumb: "size-4 data-checked:translate-x-4",
      },
      lg: {
        root: "h-7 w-12",
        thumb: "size-5 data-checked:translate-x-5",
      },
    },
    isInvalid: {
      true: {},
    },
  },
  defaultVariants: {
    size: "md",
    color: "success",
  },
});

export type SwitchVariants = VariantProps<typeof switchStyles>;
export type SwitchSlots = keyof ReturnType<typeof switchStyles>;
