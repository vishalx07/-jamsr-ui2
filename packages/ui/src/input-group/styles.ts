import { tv } from "tailwind-variants";
import { dataFocusVisibleClasses } from "../utils/variants";

export const inputGroupStyles = tv({
  slots: {
    root: [
      "flex items-center group overflow-hidden",
      "rounded-md data-disabled:status-disabled",
      ...dataFocusVisibleClasses,
    ],
    prefix: "pl-3 text-sm text-foreground-secondary select-none",
    suffix: "pr-3 text-sm text-foreground-secondary select-none",
  },
  variants: {
    variant: {
      bordered: {
        root: [
          "border border-border focus-within:border-focus",
          "data-hovered:not-focus:border-border-dark",
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
