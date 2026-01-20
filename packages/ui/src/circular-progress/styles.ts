import { tv } from "tailwind-variants";

export const circularProgressStyles = tv({
  slots: {
    root: "size-5",
    track: "stroke-background-secondary",
    progress: "stroke-success",
    label: "fill-foreground text-xs",
  },
  variants: {
    isIntermediate: {
      true: {
        root: "animate-spin",
      },
    },
    color: {
      current: {
        progress: "stroke-current",
      },
      default: {
        progress: "stroke-background-tertiary",
      },
      primary: {
        progress: "stroke-primary",
      },
      danger: {
        progress: "stroke-danger",
      },
      success: {
        progress: "stroke-success",
      },
      secondary: {
        progress: "stroke-secondary",
      },
      warning: {
        progress: "stroke-warning",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    isIntermediate: true,
  },
});
