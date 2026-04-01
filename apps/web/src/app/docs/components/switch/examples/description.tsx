import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";

export const SwitchDescription = () => {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Content>
        <Field.Label>Are you ok?</Field.Label>
        <Field.Description>This is a description</Field.Description>
      </Field.Content>
    </Field>
  );
};
