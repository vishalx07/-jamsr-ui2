import { tv } from "tailwind-variants";

export const textFieldStyles = tv({
  slots: {
    root: "group flex gap-1",
    content: "flex flex-col",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "flex-row",
      },
      vertical: {
        root: "flex-col",
      },
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});
