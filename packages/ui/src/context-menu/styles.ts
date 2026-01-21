import { tv } from "tailwind-variants";

export const contextMenuStyles = tv({
  slots: {
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
    root: "min-w-[150px] z-popover",
    content:
      "relative z-popover box-border inline-flex w-full flex-col justify-center bg-surface p-1 text-sm shadow-md outline-none",
    menuItem: [
      "relative box-border flex size-full cursor-default select-none items-center gap-2 px-2 py-1.5 text-left outline-none ui-disabled:status-disabled",
      "ui-active:bg-surface-secondary",
    ],
    menuItemInner: "grow",
  },
  variants: {
    radius: {
      none: { content: "rounded-none", menuItem: "rounded-none" },
      sm: { content: "rounded-sm", menuItem: "rounded-sm" },
      md: { content: "rounded-md", menuItem: "rounded-md" },
      lg: { content: "rounded-lg", menuItem: "rounded-lg" },
      xl: { content: "rounded-xl", menuItem: "rounded-xl" },
      "2xl": { content: "rounded-2xl", menuItem: "rounded-2xl" },
      "3xl": { content: "rounded-3xl", menuItem: "rounded-3xl" },
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
        menuItem: "ui-hover:bg-surface-secondary ui-hover:text-foreground",
      },
      primary: {
        menuItem: "ui-hover:bg-primary ui-hover:text-primary-foreground",
      },
      secondary: {
        menuItem: "ui-hover:bg-secondary ui-hover:text-secondary-foreground",
      },
      success: {
        menuItem: "ui-hover:bg-success ui-hover:text-success-foreground",
      },
      warning: {
        menuItem: "ui-hover:bg-warning ui-hover:text-warning-foreground",
      },
      danger: {
        menuItem: "ui-hover:bg-danger ui-hover:text-danger-foreground",
      },
    },
  },
  defaultVariants: {
    backdrop: "transparent",
    radius: "md",
    color: "default",
  },
});
