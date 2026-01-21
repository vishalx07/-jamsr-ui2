import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const dividerStyles = tv({
  slots: {
    root: "flex items-center gap-2",
    divider: "",
  },
  variants: {
    orientation: {
      vertical: {
        root: "flex-col",
        divider: "h-full w-px",
      },
      horizontal: {
        divider: "h-px w-full",
      },
    },
    variant: {
      light: { divider: "bg-border-light" },
      dark: { divider: "bg-border-dark" },
      default: { divider: "bg-border" },
      gradient: {
        divider: "from-transparent via-[#989AA6]/50 to-transparent",
      },
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "gradient",
      className: {
        divider: "bg-linear-to-r",
      },
    },
    {
      orientation: "vertical",
      variant: "gradient",
      className: {
        divider: "bg-linear-to-b",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

export type DividerVariants = VariantProps<typeof dividerStyles>;
