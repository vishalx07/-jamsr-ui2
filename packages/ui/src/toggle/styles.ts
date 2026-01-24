import { tv, type VariantProps } from "tailwind-variants";

export const toggleStyles = tv({
  base: [
    "inline-flex items-center justify-center rounded-md text-sm font-medium",
    "ring-offset-background transition-colors",
    "hover:bg-surface-secondary hover:text-foreground-secondary",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:status-disabled",
    "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
  ],
  variants: {
    size: {
      sm: "h-9 px-2.5",
      md: "h-10 px-3",
      lg: "h-11 px-5",
    },
    variant: {
      default: "bg-transparent",
      outline: "border border-border bg-transparent",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type ToggleVariants = VariantProps<typeof toggleStyles>;
