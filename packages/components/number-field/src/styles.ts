import { tv, VariantProps } from "@jamsrui/utils";

export const numberFieldVariants = tv({
  slots: {
    root: "number-field number-field__root group flex flex-col gap-1 w-full",
    increment: "number-field__increment h-full w-12 border-l",
    decrement: "number-field__decrement h-full w-12 border-r",
    input: "number-field__input outline-0 px-2 py-1 grow",
    group: [
      "number-field__group border border-border flex items-center rounded-md h-9 w-full",
      "overflow-hidden focus-within:outline-none focus-within:border-focus",
    ],
  },
  variants: {
    isInvalid: {
      true: {
        group: "border-danger",
      },
    },
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
export type NumberFieldSlots = keyof ReturnType<typeof numberFieldVariants>;
