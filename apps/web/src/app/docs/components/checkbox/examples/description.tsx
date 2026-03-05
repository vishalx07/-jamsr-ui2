import { Checkbox } from "jamsrui/checkbox";
import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxDescription = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Label>Enable email notifications</Label>
        <Description>
          Receive updates and promotional offers via email.
        </Description>
      </Field.Content>
    </Field>
  );
};
