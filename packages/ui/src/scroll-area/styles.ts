import { tv } from "tailwind-variants";

import { focusVisibleClasses } from "../utils/variants";

import type { VariantProps } from "tailwind-variants";

export const scrollAreaStyles = tv({
  slots: {
    root: "",
    viewport: ["h-full rounded-md", focusVisibleClasses],
    scrollbar: [
      "m-2 flex w-1 justify-center rounded-sm bg-surface/20 opacity-0 transition-opacity pointer-events-none data-hovering:opacity-100 data-hovering:delay-0 data-hovering:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 data-scrolling:pointer-events-auto",
    ],
    thumb: "w-full rounded-sm bg-surface",
    corner: "bg-surface/20",
    content: "",
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: "",
      },
      horizontal: {
        scrollbar: "",
      },
    },
    isScrollable: {
      false: {
        scrollbar: "opacity-0 pointer-events-none",
      },
    },
  },
  defaultVariants: {
    isScrollable: true,
    orientation: "vertical",
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaStyles>;
