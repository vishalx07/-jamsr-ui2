import { tv, type VariantProps } from "tailwind-variants";

export const inputGroupStyles = tv({
  slots: {
    root: "flex items-stretch",
    addon: [
      "flex items-center justify-center",
      "px-3",
      "bg-surface-secondary border border-border",
      "text-sm text-foreground-secondary",
      "first:rounded-l-md first:border-r-0",
      "last:rounded-r-md last:border-l-0",
    ],
    input: [
      "flex-1",
      "[&:not(:first-child):not(:last-child)]:rounded-none",
      "first:rounded-l-md last:rounded-r-md",
    ],
  },
});

export type InputGroupVariants = VariantProps<typeof inputGroupStyles>;
