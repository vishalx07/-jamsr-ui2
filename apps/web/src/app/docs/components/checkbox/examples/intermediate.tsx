import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxIntermediate = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox isIntermediate />
      <Label>I am a checkbox</Label>
    </Field>
  );
};
