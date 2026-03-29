import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from "./field";

export const Field = Object.assign(FieldRoot, {
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
  Label: FieldLabel,
});
