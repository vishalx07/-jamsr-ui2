"use client";

import { Input as InputUI, useInputGroupContextOpt } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { inputGroupInputStyles, inputStyles } from "./styles";

type InputVariants = VariantProps<typeof inputStyles>;

export const Input = (props: Input.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const ctx = useInputGroupContextOpt();
  const styles = ctx
    ? inputGroupInputStyles({ variant, className })
    : inputStyles({ variant, size, radius, isInvalid, className });
  return <InputUI className={styles} {...restProps} />;
};

export namespace Input {
  export interface Props extends Omit<InputUI.Props, "size">, InputVariants {}
}
