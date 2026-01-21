import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleStyles = tv({
  slots: {
    root: "space-y-2",
    trigger: [
      "flex items-center justify-between w-full",
      "text-left font-medium",
      "transition-colors",
      "hover:text-foreground-secondary",
    ],
    content: [
      "overflow-hidden",
      "data-[state=closed]:animate-collapsible-up",
      "data-[state=open]:animate-collapsible-down",
    ],
  },
});

export type CollapsibleVariants = VariantProps<typeof collapsibleStyles>;
