"use client";

import { Field } from "../textfield";
import { useRHFContext } from "./rhf-context";

export const RHFTextField = (props: RHFTextField.Props) => {
  const { field, fieldState } = useRHFContext();
  const { disabled } = field;
  const { invalid } = fieldState;
  return <Field disabled={disabled} isInvalid={invalid} {...props} />;
};

export namespace RHFTextField {
  export interface Props extends Field.Props {}
}
