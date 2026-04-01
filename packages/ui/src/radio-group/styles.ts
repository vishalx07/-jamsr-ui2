import { tv } from "tailwind-variants";

import { focusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const radioStyles = tv({
  slots: {
    root: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "shrink-0",
      "overflow-hidden",
      "border-solid",
      "border-[1.5px]",
      "box-border",
      "border-default",
      "rounded-full",
      "data-hovered:border-default-hover",
      "data-pressed:scale-95",
      "data-checked:border-transparent",
      ...focusVisibleClasses,
      "data-invalid:border-danger",
    ],
    indicator: "absolute rounded-full bg-white",
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
        root: "size-4",
        indicator: "size-1.5",
        labelWrapper: "ml-1",
        label: "text-sm",
        description: "text-xs",
      },
      md: {
        root: "size-4.5",
        indicator: "size-2",
        labelWrapper: "ml-2",
        label: "text-base",
        description: "text-sm",
      },
      lg: {
        root: "size-5",
        indicator: "size-2.5",
        labelWrapper: "ml-2",
        label: "text-lg",
        description: "text-base",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export const radioGroupStyles = tv({
  base: "group relative flex flex-col gap-2",
});

export type RadioVariants = VariantProps<typeof radioStyles>;
export type RadioSlots = keyof ReturnType<typeof radioStyles>;
export type RadioGroupVariants = VariantProps<typeof radioGroupStyles>;
export type RadioGroupSlots = keyof ReturnType<typeof radioGroupStyles>;
