import { tv } from "tailwind-variants";

import { focusVisibleClasses } from "../utils/variants";

export const selectStyles = tv({
  slots: {
    root: ["group relative flex flex-col gap-1 text-sm"],
    value: [
      "text-sm",
      "font-normal overflow-hidden text-ellipsis grow text-start",
      "data-placeholder:text-foreground-secondary",
    ],
    trigger: [
      "relative flex w-full flex-row items-center gap-3 border border-border px-3 py-2 outline-none",
      "focus:border-primary data-hovered:not-focus:border-border-dark data-opened:border-primary",
      "data-disabled:status-disabled",
      ...focusVisibleClasses,
    ],
    indicator:
      "shrink-0 transition-transform duration-300 group-data-opened:rotate-180",
    itemIndicator: "ml-auto",
    popover: "z-popover outline-none overflow-hidden",
    content: [
      "z-popover flex h-full flex-col gap-px overflow-y-auto overflow-x-hidden bg-surface shadow-md backdrop-blur-3xl p-2",
      "origin-[top_center]",
    ],
    selectItem: [
      "relative flex w-full cursor-default select-none items-center gap-2 p-2 text-sm outline-none",
      "data-hovered:bg-surface-secondary",
      "data-active:bg-surface-secondary",
      "data-selected:bg-surface-secondary/50",
      "data-disabled:status-disabled",
    ],
  },
  variants: {
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    radius: {
      none: {
        trigger: "rounded-none",
        content: "rounded-none",
        selectItem: "rounded-none",
        popover: "rounded-none",
      },
      sm: {
        trigger: "rounded-sm",
        content: "rounded-sm",
        selectItem: "rounded-sm",
        popover: "rounded-sm",
      },
      md: {
        trigger: "rounded-md",
        content: "rounded-md",
        selectItem: "rounded-md",
        popover: "rounded-md",
      },
      lg: {
        trigger: "rounded-lg",
        content: "rounded-lg",
        selectItem: "rounded-lg",
        popover: "rounded-lg",
      },
      full: {
        trigger: "rounded-full",
        content: "rounded-full",
        selectItem: "rounded-full",
        popover: "rounded-full",
      },
    },
    size: {
      sm: {
        trigger: "h-8.5 min-h-8.5 px-2.5",
        value: "text-sm",
      },
      md: {
        trigger: "h-9.5 min-h-9.5 px-2.5",
        value: "text-sm",
      },
      lg: {
        trigger: "h-10.5 min-h-10.5 px-2.5",
        value: "text-base",
      },
    },
    isInvalid: {
      true: {
        trigger: "border-danger!",
      },
    },
  },
  defaultVariants: {
    size: "md",
    radius: "md",
  },
});
