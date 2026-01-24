import { IconButton as IconButtonUI } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { iconButtonStyles } from "./styles";
import { CircularProgress } from "../circular-progress";

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
    ...restProps
  } = props;
  return (
    <IconButtonUI
      {...restProps}
      className={iconButtonStyles({ color, size, variant, radius, className })}
    >
      {isLoading && <CircularProgress />}
      {!isLoading && children}
    </IconButtonUI>
  );
};

export namespace IconButton {
  export interface Props extends IconButtonUI.Props, IconButtonVariantProps {}
}
