import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const otpInputVariants = tv({
  slots: {
    root: "otp-input otp-input__root relative flex gap-2 items-center group data-disabled:status-disabled",
    group: "otp-input__group flex",
    slot: [
      "otp-input__slot border-border relative flex items-center justify-center",
      "border-y border-r first:border-l first:rounded-l-md last:rounded-r-md outline-solid outline-0 outline-border/20",
      "transition-all duration-300 ease-in-out",
      "group-data-hover:border-border-dark data-active:border-transparent data-active:outline-focus data-active:outline-2",
      "group-data-invalid:border-danger group-data-invalid:data-active:outline-danger",
    ],
    separator: "otp-input__separator w-4 h-1 bg-divider",
    input: [
      "otp-input__input absolute bg-transparent inset-0 size-full outline-none outline-0 border-none border-0",
      "z-10 text-transparent selection:text-transparent selection:bg-transparent",
      "disabled:cursor-not-allowed",
    ],
    caret:
      "otp-input__caret absolute pointer-events-none flex w-[1.5px] bg-foreground animate-caret-blink z-1",
  },
  variants: {
    radius: radiusVariant(["group", "separator"], "otp-input"),
    size: {
      sm: {
        slot: "w-8 h-8",
        caret: "h-4",
      },
      md: {
        slot: "w-10 h-10",
        caret: "h-5",
      },
      lg: {
        slot: "w-12 h-12",
        caret: "h-6",
      },
    },
  },
  defaultVariants: { radius: "md", size: "md" },
});

export type OtpInputVariants = VariantProps<typeof otpInputVariants>;
export type OtpInputSlots = keyof ReturnType<typeof otpInputVariants>;
