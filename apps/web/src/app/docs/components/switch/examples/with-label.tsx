import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";

export const SwitchWithLabel = () => {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>This is label</Field.Label>
    </Field>
  );
};
