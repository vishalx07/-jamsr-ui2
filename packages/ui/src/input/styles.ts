import { tv } from "tailwind-variants";

export const inputStyles = tv({
  base: [
    "input focus:outline-none disabled:status-disabled placeholder:text-foreground-secondary bg-transparent font-normal",
  ],
  variants: {
    variant: {
      bordered:
        "border border-border enabled:hover:border-border-dark enabled:focus:border-focus",
      solid: "bg-surface hover:bg-surface/90",
    },
    size: {
      sm: "input--sm px-3 py-1.5 text-sm placeholder:text-sm",
      md: "input--md px-3 py-2 text-sm placeholder:text-sm",
      lg: "input--lg px-3 py-2 text-base placeholder:text-base",
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

export const inputGroupInputStyles = tv({
  base: [
    "input-group__input w-full px-3 py-2 text-sm placeholder:text-sm focus:outline-none",
  ],
  variants: {
    variant: {
      bordered: "",
      solid: "bg-surface hover:bg-surface/90",
    },
  },
});
