import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputWithLabel = () => {
  return (
    <Field>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
    </Field>
  );
};
