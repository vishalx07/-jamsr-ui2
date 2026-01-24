import { tv } from "tailwind-variants";

export const dialogStyles = tv({
  slots: {
    backdrop: "z-backdrop grid place-items-center",
    header: "p-4 text-base font-bold",
    body: "w-full p-4",
    container: "z-dialog max-w-md w-full focus-visible:outline-none",
    content:
      "relative flex size-full flex-col overflow-y-auto bg-surface shadow-lg",
    footer: "flex w-full items-center justify-end gap-2 p-4",
    closeButton: "absolute right-2 top-2 z-10",
  },
  variants: {
    radius: {
      none: { content: "rounded-none" },
      sm: { content: "rounded-sm" },
      md: { content: "rounded-md" },
      lg: { content: "rounded-lg" },
      full: { content: "rounded-full" },
    },
    fullWidth: {
      true: {
        container: "m-0 h-dvh max-w-full rounded-none! sm:m-0",
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
    isBordered: {
      true: {
        header: "border-b border-border",
        footer: "border-t border-border",
      },
    },
    scrollBehavior: {
      inside: {
        body: "grow overflow-y-auto",
      },
      outside: {},
    },
  },
  defaultVariants: {
    scrollBehavior: "inside",
    isBordered: false,
    backdrop: "opaque",
    radius: "md",
  },
});
