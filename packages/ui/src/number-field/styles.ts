import { tv } from "tailwind-variants";

import { dataFocusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const numberFieldStyles = tv({
  slots: {
    root: ["group flex flex-col gap-1 w-full"],
    increment: "h-full w-12 border-l border-l-border grid place-content-center",
    decrement: "h-full w-12 border-r border-r-border grid place-content-center",
    input: [
      "outline-0 px-3 py-1 grow text-sm",
      "focus:z-1 tabular-nums text-center",
      "min-w-0",
    ],
    group: [
      "border border-border flex items-center rounded-md h-9 w-full",
      "overflow-hidden focus-within:outline-none focus-within:border-focus hover:not-focus-within:border-border-dark",
      ...dataFocusVisibleClasses,
    ],
    scrubArea: "cursor-ew-resize",
    label: "cursor-ew-resize text-sm font-medium text-foreground",
    scrubAreaCursor: "drop-shadow-[0_1px_1px_#0008] filter",
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
