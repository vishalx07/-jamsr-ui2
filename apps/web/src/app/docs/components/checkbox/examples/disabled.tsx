import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxDisabled = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox disabled />
      <Label>Enable email notifications</Label>
    </Field>
  );
};
