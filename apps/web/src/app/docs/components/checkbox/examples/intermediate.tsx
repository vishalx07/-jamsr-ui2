import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxIntermediate = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox indeterminate />
      <Field.Label>I am a checkbox</Field.Label>
    </Field>
  );
};
