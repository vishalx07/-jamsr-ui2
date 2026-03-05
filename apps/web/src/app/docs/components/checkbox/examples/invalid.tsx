import { Checkbox } from "jamsrui/checkbox";
import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxInvalid = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox isInvalid />
      <Field.Content>
        <Label>Accept terms and conditions</Label>
        <Description>
          You must accept the terms and conditions to continue.
        </Description>
      </Field.Content>
    </Field>
  );
};
