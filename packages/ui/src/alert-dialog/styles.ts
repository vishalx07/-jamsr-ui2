import { tv } from "tailwind-variants";

export const alertDialogStyles = tv({
  slots: {
    header: "alert-dialog__header p-4 text-base font-bold",
    container: "alert-dialog alert-dialog__container z-dialog max-w-md w-full",
    content:
      "alert-dialog__content relative flex size-full flex-col overflow-y-auto bg-surface shadow-lg",
    footer:
      "alert-dialog__footer flex w-full items-center justify-end gap-2 p-4",
    body: "alert-dialog__body w-full p-4",
    trigger: "alert-dialog__trigger",
    title: "alert-dialog__title text-foreground",
    description: "alert-dialog__description text-foreground-secondary",
    backdrop: "alert-dialog__backdrop z-backdrop grid place-items-center",
    cancel: "alert-dialog__cancel",
    action: "alert-dialog__action",
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
        backdrop: "alert-dialog--backdrop-transparent",
      },
      opaque: {
        backdrop: "alert-dialog--backdrop-opaque bg-black/50",
      },
      blur: {
        backdrop:
          "alert-dialog--backdrop-blur bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
  },
  defaultVariants: {
    backdrop: "opaque",
    radius: "md",
  },
});
