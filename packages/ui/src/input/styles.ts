import { tv, VariantProps } from "tailwind-variants";
import { dataFocusVisibleClasses } from "../utils/variants";

export const inputStyles = tv({
  base: [
    "input focus:outline-none disabled:status-disabled placeholder:text-foreground-secondary bg-transparent font-normal",
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      bordered:
        "border border-border data-hovered:border-border-dark focus:border-focus",
      solid: "bg-surface data-hovered:bg-surface/90",
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

export type InputVariants = VariantProps<typeof inputStyles>;

export const inputGroupInputStyles = tv({
  base: [
    "input-group__input w-full px-3 py-2 text-sm placeholder:text-sm focus:outline-none",
  ],
  variants: {
    variant: {
      bordered: "",
      solid: "bg-surface data-hovered:bg-surface/90",
    },
  },
});
