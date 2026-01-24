import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const clipboardStyles = tv({
  slots: {
    root: "relative z-1 inline-flex cursor-copy items-center gap-0.5 hover:opacity-80",
    icon: "size-4",
  },
});

export type ClipboardVariants = VariantProps<typeof clipboardStyles>;
