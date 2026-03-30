import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "tailwind-variants";

import { CircularProgress } from "../circular-progress";
import { buttonStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

export const Button = (props: Button.Props) => {
  const {
    color,
    size,
    variant,
    isLoading,
    className,
    children,
    radius,
    ...restProps
  } = props;
  return (
    <ButtonPrimitive
      {...restProps}
      className={buttonStyles({
        color,
        size,
        variant,
        className: cn(className),
        radius,
      })}
    >
      {isLoading ? <CircularProgress /> : null}
      {children}
    </ButtonPrimitive>
  );
};

export namespace Button {
  export interface Props extends ButtonPrimitive.Props, ButtonVariantProps {
    isLoading?: boolean;
  }
}
