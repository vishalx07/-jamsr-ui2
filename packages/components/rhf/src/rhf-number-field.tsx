"use client";
import { NumberField } from "@jamsrui/number-field";

import { dataAttr } from "@jamsrui/utils";
import { useRHFContext } from "./rhf-context";

export const RHFNumberField = (props: RHFNumberField.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <NumberField
      ref={ref}
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      isInvalid={invalid}
      name={name}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFNumberField {
  export interface Props extends NumberField.Props {}
}
