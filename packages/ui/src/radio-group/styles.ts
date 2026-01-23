import { tv, type VariantProps } from "tailwind-variants";
import { groupDataFocusVisibleClasses } from "../utils/variants";

export const radioStyles = tv({
  slots: {
    root: [
      "group relative inline-flex gap-2 cursor-default items-center justify-start tap-highlight-transparent",
      "data-disabled:status-disabled",
    ],
    control: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "shrink-0",
      "overflow-hidden",
      "border-solid",
      "border-[1.5px]",
      "box-border",
      "border-default",
      "rounded-full",
      "group-data-hovered:border-default-hover",
      "group-data-pressed:scale-95",
      "group-data-selected:border-transparent",
      ...groupDataFocusVisibleClasses,
      "group-data-invalid:border-danger",
    ],
    indicator: "absolute rounded-full bg-white",
    input: "inset-0 absolute opacity-[0.0001]",
    label: "select-none text-foreground",
    content: "flex grow flex-col",
    description: "text-foreground-secondary",
  },
  variants: {
    color: {
      default: {
        control: "group-data-selected:bg-default",
      },
      primary: {
        control: "group-data-selected:bg-primary",
      },
      secondary: {
        control: "group-data-selected:bg-secondary",
      },
      success: {
        control: "group-data-selected:bg-success",
      },
      warning: {
        control: "group-data-selected:bg-warning",
      },
      danger: {
        control: "group-data-selected:bg-danger",
      },
    },
    size: {
      sm: {
        control: "size-4",
        indicator: "size-1.5",
        labelWrapper: "ml-1",
        label: "text-sm",
        description: "text-xs",
      },
      md: {
        control: "size-4.5",
        indicator: "size-2",
        labelWrapper: "ml-2",
        label: "text-base",
        description: "text-sm",
      },
      lg: {
        control: "size-5",
        indicator: "size-2.5",
        labelWrapper: "ml-2",
        label: "text-lg",
        description: "text-base",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export const radioGroupStyles = tv({
  slots: {
    root: "group relative flex flex-col gap-2",
    label: "text-sm font-normal text-foreground",
    content: "flex flex-col flex-wrap gap-2",
    description: "text-xs text-foreground-secondary",
    errorMessage: "text-xs text-danger",
  },
  variants: {},
});

export type RadioVariants = VariantProps<typeof radioStyles>;
export type RadioSlots = keyof ReturnType<typeof radioStyles>;
export type RadioGroupVariants = VariantProps<typeof radioGroupStyles>;
export type RadioGroupSlots = keyof ReturnType<typeof radioGroupStyles>;
