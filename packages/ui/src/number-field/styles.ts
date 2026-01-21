import { tv, type VariantProps } from "tailwind-variants";

export const numberFieldStyles = tv({
  slots: {
    root: [
      "flex items-center gap-2",
      "rounded-md border border-border bg-surface",
      "ring-offset-background",
      "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
    ],
    input: [
      "flex-1 bg-transparent px-3 py-2 text-sm outline-none",
      "tabular-nums",
      "placeholder:text-foreground-tertiary",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    button: [
      "flex items-center justify-center",
      "size-8 shrink-0",
      "border-l border-border",
      "hover:bg-surface-secondary",
      "disabled:status-disabled",
    ],
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldStyles>;
