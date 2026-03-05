import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { Field } from "jamsrui/textfield";

export const SwitchDisabled = () => {
  return (
    <Field orientation="horizontal">
      <Switch disabled />
      <Label>Enable Notifications</Label>
    </Field>
  );
};
