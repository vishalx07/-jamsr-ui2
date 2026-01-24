import { tv, type VariantProps } from "tailwind-variants";

export const popoverStyles = tv({
  slots: {
    container: "z-popover",
    content:
      "bg-surface max-w-64 p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none origin-(--transform-origin)",
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
  },
  variants: {
    radius: {
      none: { content: "rounded-none", popover: "rounded-none" },
      sm: { content: "rounded-sm", popover: "rounded-sm" },
      md: { content: "rounded-md", popover: "rounded-md" },
      lg: { content: "rounded-lg", popover: "rounded-lg" },
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    backdrop: "transparent",
  },
});

export type PopoverVariants = VariantProps<typeof popoverStyles>;
export type PopoverSlots = keyof ReturnType<typeof popoverStyles>;
