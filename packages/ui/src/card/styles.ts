import { tv } from "tailwind-variants";

export const cardStyles = tv({
  slots: {
    root: "card card__root relative flex flex-col overflow-hidden transition-colors",
    header: "card__header relative flex flex-col gap-1 px-4 pt-4",
    title: "card__title font-medium",
    description: "card__description text-foreground-secondary",
    footer: "card__footer flex justify-end gap-2 px-4 pb-4",
    content: "card__content h-full p-4",
  },
  variants: {
    bg: {
      default: {
        root: "bg-surface",
      },
      secondary: {
        root: "bg-surface",
      },
    },
    isBordered: {
      true: { root: "border border-border-dark" },
      false: {},
    },
    isElevated: {
      true: { root: "shadow-sm" },
      false: {},
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      xl: { root: "rounded-xl" },
      "2xl": { root: "rounded-2xl" },
      "3xl": { root: "rounded-3xl" },
      full: { root: "rounded-full" },
    },
  },
  defaultVariants: {
    bg: "default",
    radius: "md",
    isBordered: false,
    isElevated: false,
  },
});
