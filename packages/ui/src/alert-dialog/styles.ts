import { tv } from "tailwind-variants";

export const alertDialogStyles = tv({
  slots: {
    header: "p-4 text-base font-bold",
    container: "z-dialog max-w-md w-full",
    content:
      "relative flex size-full flex-col overflow-y-auto bg-surface shadow-lg",
    footer: "flex w-full items-center justify-end gap-2 p-4",
    body: "w-full p-4",
    trigger: "",
    title: "text-foreground",
    description: "text-foreground-secondary",
    backdrop: "z-backdrop grid place-items-center",
    cancel: "",
    action: "",
  },
  variants: {
    radius: {
      none: {
        content: "rounded-none",
      },
      sm: {
        content: "rounded-sm",
      },
      md: {
        content: "rounded-md",
      },
      lg: {
        content: "rounded-lg",
      },
      full: {
        content: "rounded-full",
      },
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
  },
  defaultVariants: {
    backdrop: "opaque",
    radius: "md",
  },
});
