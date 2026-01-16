"use client";

import { TextField } from "@jamsrui/textfield";
import { useRHFContext } from "./rhf-context";

export const RHFTextField = (props: RHFTextField.Props) => {
  const { field, fieldState } = useRHFContext();
  const { disabled } = field;
  const { invalid } = fieldState;
  return <TextField disabled={disabled} isInvalid={invalid} {...props} />;
};

export namespace RHFTextField {
  export interface Props extends TextField.Props {}
}
