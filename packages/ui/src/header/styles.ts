import { tv, type VariantProps } from "tailwind-variants";

export const headerStyles = tv({
  slots: {
    root: [
      "flex items-center justify-between",
      "w-full",
      "px-4 py-3",
      "border-b border-border",
      "bg-surface/80 backdrop-blur-md",
    ],
    logo: "flex items-center gap-2",
    nav: "flex items-center gap-4",
    actions: "flex items-center gap-2",
  },
});

export type HeaderVariants = VariantProps<typeof headerStyles>;
