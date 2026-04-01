import { Field as FieldRoot } from "./field";
import { FieldContent } from "./field-content";

export { useFieldContext as useFieldContext } from "./field-context";
export { useField as useField } from "./use-field";

export const Field = Object.assign(FieldRoot, {
  Content: FieldContent,
});

export namespace Field {
  export interface Props extends FieldRoot.Props {}
  export interface Content extends FieldContent.Props {}
}
