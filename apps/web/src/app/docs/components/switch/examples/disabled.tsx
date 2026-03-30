import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";

export const SwitchDisabled = () => {
  return (
    <Field orientation="horizontal">
      <Switch disabled />
      <Field.Label>Enable Notifications</Field.Label>
    </Field>
  );
};
