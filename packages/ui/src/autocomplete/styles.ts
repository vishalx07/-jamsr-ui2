import { tv, type VariantProps } from "tailwind-variants";

export const autocompleteStyles = tv({
  slots: {
    root: "relative w-full",
    trigger: [
      "flex items-center justify-between w-full",
      "rounded-md border border-border bg-surface",
      "px-3 py-2 text-sm",
      "ring-offset-background",
      "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
      "disabled:status-disabled",
    ],
    input: [
      "flex-1 bg-transparent text-sm outline-none",
      "placeholder:text-foreground-tertiary",
      "disabled:cursor-not-allowed",
    ],
    content: [
      "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-border bg-surface shadow-lg",
      "max-h-60 overflow-auto",
    ],
    item: [
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm",
      "outline-none",
      "hover:bg-surface-secondary",
      "data-[highlighted]:bg-surface-secondary",
      "data-[selected]:bg-primary data-[selected]:text-primary-foreground",
    ],
    empty: "py-6 text-center text-sm text-foreground-secondary",
  },
});

export type AutocompleteVariants = VariantProps<typeof autocompleteStyles>;
