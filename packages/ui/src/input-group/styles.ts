import { tv } from "tailwind-variants";
import { dataFocusVisibleClasses } from "../utils/variants";

export const inputGroupStyles = tv({
  slots: {
    root: [
      "input-group flex items-center group overflow-hidden",
      "rounded-md data-disabled:status-disabled",
      ...dataFocusVisibleClasses,
    ],
    prefix: "input__prefix pl-3 text-sm text-foreground-secondary select-none",
    suffix: "input__suffix pr-3 text-sm text-foreground-secondary select-none",
  },
  variants: {
    variant: {
      bordered: {
        root: [
          "border border-border focus-within:border-focus",
          "data-hovered:border-border-dark",
          "group-data-invalid:border-danger",
        ],
      },
      solid: {
        root: "bg-surface data-hovered:bg-surface/90",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    variant: "bordered",
  },
});
