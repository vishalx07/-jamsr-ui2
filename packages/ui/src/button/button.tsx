import { Button as ButtonUI, CircularProgress } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { buttonStyles } from "./styles";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

export const Button = (props: Button.Props) => {
  const { color, size, variant, isLoading, className, children, ...restProps } =
    props;
  return (
    <ButtonUI
      {...restProps}
      className={buttonStyles({ color, size, variant, className })}
    >
      {isLoading && <CircularProgress />}
      {children}
    </ButtonUI>
  );
};

export namespace Button {
  export interface Props extends ButtonUI.Props, ButtonVariantProps {}
}
