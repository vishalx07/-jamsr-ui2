import { tv, type VariantProps } from "tailwind-variants";
import { dataFocusVisibleClasses } from "../utils/variants";

export const numberFieldStyles = tv({
  slots: {
    root: ["group flex flex-col gap-1 w-full"],
    increment: "h-full w-12 border-l",
    decrement: "h-full w-12 border-r",
    input: "outline-0 px-3 py-1 grow text-sm",
    group: [
      "border border-border flex items-center rounded-md h-9 w-full",
      "overflow-hidden focus-within:outline-none focus-within:border-focus hover:not-focus-within:border-border-dark",
      ...dataFocusVisibleClasses,
    ],
  },
  variants: {
    isInvalid: {
      true: {
        group: "border-danger focus-within:border-danger",
      },
    },
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldStyles>;
