import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { Field } from "jamsrui/textfield";

export const SwitchWithLabel = () => {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Label>This is label</Label>
    </Field>
  );
};
