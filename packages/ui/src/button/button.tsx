import { Button as ButtonUI } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./styles";
import { CircularProgress } from "../circular-progress";

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
      {isLoading && <CircularProgress />}
      {children}
    </ButtonUI>
  );
};

export namespace Button {
  export interface Props extends ButtonUI.Props, ButtonVariantProps {}
}
