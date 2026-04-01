import { useId } from "react";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "tailwind-variants";

import { CircularProgress } from "../circular-progress";
import { iconButtonStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type IconButtonVariantProps = VariantProps<typeof iconButtonStyles>;

export const IconButton = (props: IconButton.Props) => {
  const {
    color,
    size,
    variant,
    radius,
    isLoading,
    className,
    children,
    label,
    ...restProps
  } = props;
  const labelId = useId();
  return (
    <ButtonPrimitive
      aria-labelledby={labelId}
      {...restProps}
      className={iconButtonStyles({
        color,
        size,
        variant,
        radius,
        className: cn(className),
      })}
    >
      <span className="sr-only" id={labelId}>
        {label}
      </span>
      {isLoading ? <CircularProgress /> : null}
      {!isLoading && children}
    </ButtonPrimitive>
  );
};

export namespace IconButton {
  export interface Props extends ButtonPrimitive.Props, IconButtonVariantProps {
    isLoading?: boolean;
    label: string;
  }
}
