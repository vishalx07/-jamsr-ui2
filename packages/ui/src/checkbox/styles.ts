import { tv } from "tailwind-variants";

export const checkboxStyles = tv({
  slots: {
    root: [
      "checkbox group flex gap-2 items-start",
      "data-disabled:status-disabled",
    ],
    control: [
      "checkbox__control flex justify-center items-center",
      "shrink-0 border-default uig-hover:border-default-hover",
      "relative appearance-none border uig-checked:border-primary uig-checked:bg-primary uig-checked:text-primary-foreground",
      "uig-disabled:status-disabled uig-pressed:scale-90 transition-all duration-300",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    ],
    input:
      "checkbox__input absolute opacity-[0.0001] cursor-default disabled:cursor-not-allowed inset-0 z-1",
    content: "checkbox__content flex flex-col justify-center gap-1",
    indicator: "checkbox__indicator size-3",
  },
  variants: {
    size: {
      sm: {
        root: "checkbox--sm",
        control: "size-4",
      },
      md: {
        root: "checkbox--md",
        control: "size-4.5",
      },
      lg: {
        root: "checkbox--lg",
        control: "size-5",
      },
    },
    isInvalid: {
      true: {
        control: "border-danger! uig-checked:bg-danger",
      },
    },
    radius: {
      none: { control: "rounded-none" },
      sm: { control: "rounded-sm" },
      md: { control: "rounded-md" },
      lg: { control: "rounded-lg" },
      xl: { control: "rounded-xl" },
      "2xl": { control: "rounded-2xl" },
      "3xl": { control: "rounded-3xl" },
      full: { control: "rounded-full" },
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
  },
});
