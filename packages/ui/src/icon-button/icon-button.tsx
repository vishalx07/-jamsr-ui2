import { IconButton as IconButtonUI } from "@jamsrui/react";


import { iconButtonStyles } from "./styles";
import { CircularProgress } from "../circular-progress";

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
    ...restProps
  } = props;
  return (
    <IconButtonUI
      {...restProps}
      className={iconButtonStyles({ color, size, variant, radius, className })}
    >
      {isLoading ? <CircularProgress /> : null}
      {!isLoading && children}
    </IconButtonUI>
  );
};

export namespace IconButton {
  export interface Props extends IconButtonUI.Props, IconButtonVariantProps {}
}
