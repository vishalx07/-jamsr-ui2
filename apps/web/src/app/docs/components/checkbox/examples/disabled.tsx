import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxDisabled = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox disabled />
      <Field.Label>Enable email notifications</Field.Label>
    </Field>
  );
};
