import { Input as InputUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { inputStyles } from "./styles";

type InputVariants = VariantProps<typeof inputStyles>;

export const Input = (props: Input.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const styles = inputStyles({ variant, size, radius, isInvalid });
  return <InputUI {...restProps} className={cn(styles, className)} />;
};

export namespace Input {
  export interface Props extends Omit<InputUI.Props, "size">, InputVariants {}
}
