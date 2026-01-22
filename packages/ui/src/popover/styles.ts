import { tv, type VariantProps } from "tailwind-variants";
import { radiusVariant } from "../utils/variants";

export const popoverStyles = tv({
  slots: {
    container: "popover popover__content z-popover",
    content:
      "popover__dialog bg-surface max-w-64 p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none origin-(--transform-origin)",
    arrow: "popover__arrow fill-background-secondary",
    backdrop: "popover__backdrop z-backdrop",
  },
  variants: {
    radius: radiusVariant("content", "popover"),
    backdrop: {
      transparent: {
        backdrop: "popover--backdrop-transparent",
      },
      opaque: {
        backdrop: "popover--backdrop-opaque bg-black/50",
      },
      blur: {
        backdrop:
          "popover--backdrop-blur bg-black/30 backdrop-blur-md backdrop-saturate-150",
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
