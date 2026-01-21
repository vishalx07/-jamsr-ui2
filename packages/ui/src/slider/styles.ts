import { tv, type VariantProps } from "tailwind-variants";

export const sliderStyles = tv({
  slots: {
    root: "relative flex touch-none select-none items-center",
    control: "flex items-center",
    track:
      "relative h-5 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800",
    indicator: "absolute h-full bg-primary",
    thumb:
      "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:status-disabled",
    value: "text-sm",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "w-full",
        control: "w-full",
      },
      vertical: {
        control: "h-full",
        root: "h-full flex-col",
        track: "h-full w-5",
        indicator: "w-full bottom-0",
      },
    },
    isDisabled: {
      true: {},
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type SliderVariants = VariantProps<typeof sliderStyles>;
