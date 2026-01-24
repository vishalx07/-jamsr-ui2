import { FieldError as FieldErrorRoot } from "./field-error";

export const FieldError = Object.assign(FieldErrorRoot, {});

export namespace FieldError {
  export interface Props extends FieldErrorRoot.Props {}
}
