import { Toggle as ToggleUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { toggleStyles } from "./styles";

type ToggleVariants = VariantProps<typeof toggleStyles>;

export const Toggle = (props: Toggle.Props) => {
  const { size, variant, className, ...rest } = props;
  return (
    <ToggleUI
      {...rest}
      className={cn(toggleStyles({ size, variant }), className)}
    />
  );
};

export namespace Toggle {
  export interface Props extends ToggleUI.Props, ToggleVariants {}
}
