"use client";

import { IconButton as IconButtonUI, CircularProgress } from "@jamsrui/react";
import { tv, VariantProps } from "tailwind-variants";
import { variantStyles } from "./utils/variants";

const iconButtonVariant = tv({
  extend: variantStyles,
  base: [
    "icon-button cursor-default relative inline-flex items-center justify-center shrink-0",
    "disabled:status-disabled",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "transition-[scale] duration-300 data-pressed:scale-98",
  ],
  variants: {
    size: {
      sm: "size-6 rounded text-sm",
      md: "size-8 rounded-lg text-base",
      lg: "size-10 rounded-xl text-lg",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
  },
});

type IconButtonVariantProps = VariantProps<typeof iconButtonVariant>;

export const IconButton = (props: IconButton.Props) => {
  const {
    color,
    size,
    variant,
    radius,
    isLoading,
    className,
    children,
    ...restProps
  } = props;
  return (
    <IconButtonUI
      {...restProps}
      className={iconButtonVariant({ color, size, variant, radius, className })}
    >
      {isLoading && <CircularProgress />}
      {!isLoading && children}
    </IconButtonUI>
  );
};

export namespace IconButton {
  export interface Props extends IconButtonUI.Props, IconButtonVariantProps {}
}
