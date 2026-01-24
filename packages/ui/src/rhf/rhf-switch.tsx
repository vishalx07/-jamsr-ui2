"use client";

import { dataAttr } from "@jamsrui/utils";
import { useRHFContext } from "./rhf-context";
import { Switch } from "../switch";

export const RHFSwitch = (props: RHFSwitch.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Switch
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

export namespace RHFSwitch {
  export interface Props extends Switch.Props {}
}
