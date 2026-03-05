import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const switchStyles = tv({
  slots: {
    root: [
      ...dataFocusVisibleClasses,
      "flex group relative cursor-default shrink-0 items-center rounded-full bg-surface-secondary p-1",
      "data-disabled:status-disabled",
      "data-hovered:opacity-90",
      "justify-start data-checked:justify-end",
      "border-[0.5px] border-border-light",
    ],
    thumb: [
      "rounded-full bg-white flex justify-center items-center",
      "duration-300 transition-[width,height]",
    ],
    input:
      "opacity-[0.0001] absolute inset-0 cursor-default disabled:cursor-disabled z-1",
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
        thumb: "size-3.5 data-pressed:w-4",
      },
      md: {
        root: "h-6 w-10",
        thumb: "size-4 group-data-pressed:w-5",
      },
      lg: {
        root: "h-7 w-12",
        thumb: "size-5 group-data-pressed:w-6",
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
