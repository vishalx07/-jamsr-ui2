import { tv, type VariantProps } from "tailwind-variants";

export const textareaStyles = tv({
  base: [
    "textarea focus:outline-none disabled:status-disabled placeholder:text-foreground-secondary bg-transparent font-normal",
  ],
  variants: {
    variant: {
      bordered:
        "border border-border enabled:hover:border-border-light enabled:focus:border-focus",
      solid: "bg-surface hover:bg-surface/90",
    },
    size: {
      sm: "textarea--sm px-3 py-1.5 text-sm placeholder:text-sm",
      md: "textarea--md px-3 py-2 text-sm placeholder:text-sm",
      lg: "textarea--lg px-3 py-2 text-base placeholder:text-base",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isInvalid: {
      true: "border-danger!",
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
    variant: "bordered",
  },
});

export type TextareaVariants = VariantProps<typeof textareaStyles>;
