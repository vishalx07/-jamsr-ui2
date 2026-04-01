import { Field as FieldRoot, FieldContent } from "./textfield";

export const Field = Object.assign(FieldRoot, {
  Content: FieldContent,
});

export { FieldContent };

export namespace Field {
  export interface Props extends FieldRoot.Props {}
  export interface Content extends FieldContent.Props {}
}
