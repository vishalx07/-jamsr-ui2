import { tv } from "tailwind-variants";

export const inputGroupStyles = tv({
  slots: {
    root: [
      "input-group flex items-center group overflow-hidden",
      "rounded-md uig-disabled:status-disabled",
      "not-uig-invalid:uig-focus:border-primary uig-focus:ring-primary",
      "not-uig-invalid:uig-hover:border-border-dark",
    ],
    prefix: "input__prefix pl-3 text-sm text-foreground-secondary select-none",
    suffix: "input__suffix pr-3 text-sm text-foreground-secondary select-none",
  },
  variants: {
    variant: {
      bordered: {
        root: [
          "border border-border focus-within:not-group-data-invalid:border-focus",
          "group-data-invalid:border-danger",
        ],
      },
      solid: {
        root: "bg-surface hover:bg-surface/90",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    variant: "bordered",
  },
});
