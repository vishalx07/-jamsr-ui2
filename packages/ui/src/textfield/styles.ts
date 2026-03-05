import { tv } from "tailwind-variants";

export const textFieldStyles = tv({
  base: "group flex gap-1",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});
