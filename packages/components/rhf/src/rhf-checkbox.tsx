"use client";
import { Checkbox } from "@jamsrui/checkbox";

import { dataAttr } from "@jamsrui/utils";
import { useRHFContext } from "./rhf-context";

export const RHFCheckbox = (props: RHFCheckbox.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Checkbox
      ref={ref}
      checked={value}
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      isInvalid={invalid}
      name={name}
      onBlur={onBlur}
      onCheckedChange={onChange}
      {...props}
    />
  );
};

export namespace RHFCheckbox {
  export interface Props extends Checkbox.Props {}
}
