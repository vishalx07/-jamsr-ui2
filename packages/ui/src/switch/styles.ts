import { tv } from "tailwind-variants";

import { groupDataFocusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const switchStyles = tv({
  slots: {
    root: "group flex gap-2",
    control: [
      ...groupDataFocusVisibleClasses,
      "flex relative cursor-default shrink-0 items-center rounded-full bg-surface-secondary p-1",
      "group-data-disabled:status-disabled",
      "group-data-hovered:opacity-90",
      "justify-start group-data-checked:justify-end",
      "border-[0.5px] border-border-light",
    ],
    thumb: [
      "rounded-full bg-white flex justify-center items-center",
      "duration-300 transition-[width,height]",
    ],
    content: "grid grow gap-1",
    input:
      "opacity-[0.0001] absolute inset-0 cursor-default disabled:cursor-disabled z-1",
  },
  variants: {
    color: {
      default: {
        control: "group-data-checked:bg-default",
      },
      primary: {
        control: "group-data-checked:bg-primary",
      },
      secondary: {
        control: "group-data-checked:bg-secondary",
      },
      success: {
        control: "group-data-checked:bg-success",
      },
      warning: {
        control: "group-data-checked:bg-warning",
      },
      danger: {
        control: "group-data-checked:bg-danger",
      },
    },
    size: {
      sm: {
        control: "h-5 w-9",
        thumb: "size-3.5 group-data-pressed:w-4",
      },
      md: {
        control: "h-6 w-10",
        thumb: "size-4 group-data-pressed:w-5",
      },
      lg: {
        control: "h-7 w-12",
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
