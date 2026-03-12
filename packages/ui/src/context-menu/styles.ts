import { tv } from "tailwind-variants";

export const contextMenuStyles = tv({
  slots: {
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
    positioner: "min-w-37.5 z-popover focus-visible:outline-none",
    content:
      "relative z-popover box-border inline-flex w-full flex-col justify-center bg-surface p-1 text-sm shadow-md",
    menuItem: [
      "relative box-border flex size-full cursor-default select-none items-center gap-2 px-2 py-1.5 text-left outline-none data-disabled:status-disabled",
      "data-active:bg-surface-secondary",
    ],
  },
  variants: {
    radius: {
      none: { content: "rounded-none", menuItem: "rounded-none" },
      sm: { content: "rounded-sm", menuItem: "rounded-sm" },
      md: { content: "rounded-md", menuItem: "rounded-md" },
      lg: { content: "rounded-lg", menuItem: "rounded-lg" },
      full: { content: "rounded-full", menuItem: "rounded-full" },
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
    color: {
      default: {
        menuItem:
          "data-hovered:bg-surface-secondary data-hovered:text-foreground",
      },
      primary: {
        menuItem:
          "data-hovered:bg-primary data-hovered:text-primary-foreground",
      },
      secondary: {
        menuItem:
          "data-hovered:bg-secondary data-hovered:text-secondary-foreground",
      },
      success: {
        menuItem:
          "data-hovered:bg-success data-hovered:text-success-foreground",
      },
      warning: {
        menuItem:
          "data-hovered:bg-warning data-hovered:text-warning-foreground",
      },
      danger: {
        menuItem: "data-hovered:bg-danger data-hovered:text-danger-foreground",
      },
    },
  },
  defaultVariants: {
    backdrop: "transparent",
    radius: "md",
    color: "default",
  },
});
