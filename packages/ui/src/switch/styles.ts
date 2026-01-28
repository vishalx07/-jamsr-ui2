import { tv  } from "tailwind-variants";

import { groupDataFocusVisibleClasses } from "../utils/variants";

import type {VariantProps} from "tailwind-variants";

export const switchStyles = tv({
  slots: {
    root: "group flex gap-2",
    track: [
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
        track: "group-data-checked:bg-default",
      },
      primary: {
        track: "group-data-checked:bg-primary",
      },
      secondary: {
        track: "group-data-checked:bg-secondary",
      },
      success: {
        track: "group-data-checked:bg-success",
      },
      warning: {
        track: "group-data-checked:bg-warning",
      },
      danger: {
        track: "group-data-checked:bg-danger",
      },
    },
    size: {
      sm: {
        track: "h-5 w-9",
        thumb: "size-3.5 group-data-pressed:w-4",
      },
      md: {
        track: "h-6 w-10",
        thumb: "size-4 group-data-pressed:w-5",
      },
      lg: {
        track: "h-7 w-12",
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
