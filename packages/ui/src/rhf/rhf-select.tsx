"use client";

import { dataAttr } from "@jamsrui/utils";

import { useRHFContext } from "./rhf-context";
import { Select } from "../select";

export const RHFSelect = (props: RHFSelect.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Select
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

export namespace RHFSelect {
  export interface Props extends Select.Props {}
}
