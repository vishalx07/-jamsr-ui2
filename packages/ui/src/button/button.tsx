import { Button as ButtonUI } from "@jamsrui/react";


import { buttonStyles } from "./styles";
import { CircularProgress } from "../circular-progress";

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
    <ButtonUI
      {...restProps}
      className={buttonStyles({ color, size, variant, className, radius })}
    >
      {isLoading ? <CircularProgress /> : null}
      {children}
    </ButtonUI>
  );
};

export namespace Button {
  export interface Props extends ButtonUI.Props, ButtonVariantProps {}
}
