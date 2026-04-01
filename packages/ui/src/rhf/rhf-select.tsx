"use client";

import { dataAttr } from "@jamsrui/utils";

import { Select } from "../select";
import { useRHFContext } from "./rhf-context";

export const RHFSelect = <Value, Multiple extends boolean | undefined = false>(
  props: RHFSelect.Props<Value, Multiple>,
) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Select
      inputRef={ref}
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      isInvalid={invalid}
      name={name}
      // onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFSelect {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = Select.Props<Value, Multiple>;
}
