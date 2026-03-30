import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxDescription = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Label>Enable email notifications</Field.Label>
        <Field.Description>
          Receive updates and promotional offers via email.
        </Field.Description>
      </Field.Content>
    </Field>
  );
};
