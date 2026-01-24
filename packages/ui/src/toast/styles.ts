import { tv, type VariantProps } from "tailwind-variants";

export const toastStyles = tv({
  slots: {
    root: [
      "flex items-center gap-4 rounded-lg p-4 relative",
      "bg-surface shadow-lg border border-border",
    ],
    content: "flex-1 flex flex-col gap-1",
    title: "font-medium text-sm",
    description: "text-xs text-foreground-secondary",
    action: "",
    closeButton:
      "rounded-full p-1 hover:bg-surface-secondary transition-colors",
    icon: "shrink-0",
  },
  variants: {
    variant: {
      default: {},
      success: {
        root: "border-success/20 bg-success/10",
        icon: "text-success",
      },
      error: {
        root: "border-danger/20 bg-danger/10",
        icon: "text-danger",
      },
      warning: {
        root: "border-warning/20 bg-warning/10",
        icon: "text-warning",
      },
      info: {
        root: "border-primary/20 bg-primary/10",
        icon: "text-primary",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ToastVariants = VariantProps<typeof toastStyles>;
