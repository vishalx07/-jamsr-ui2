import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxInvalid = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox isInvalid />
      <Field.Content>
        <Field.Label>Accept terms and conditions</Field.Label>
        <Field.Description>
          You must accept the terms and conditions to continue.
        </Field.Description>
      </Field.Content>
    </Field>
  );
};
