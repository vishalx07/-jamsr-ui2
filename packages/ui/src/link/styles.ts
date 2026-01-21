import { textVariants } from "@jamsrui/text";
import { tv, VariantProps } from "tailwind-variants";

export const linkStyles = tv({
  extend: textVariants,
  base: ["cursor-pointer text-foreground-link hover:text-foreground-link/80"],
  variants: {
    underline: {
      hover: "hover:underline hover:underline-offset-4",
      never: "",
      always:
        "underline underline-offset-4 transition-all hover:underline-offset-2",
    },
  },
  defaultVariants: {
    underline: "hover",
  },
});

export type LinkVariantProps = VariantProps<typeof linkStyles>;
