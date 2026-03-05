import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { Field } from "jamsrui/textfield";

export const SwitchDescription = () => {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Content>
        <Label>Are you ok?</Label>
        <Description>This is a description</Description>
      </Field.Content>
    </Field>
  );
};
