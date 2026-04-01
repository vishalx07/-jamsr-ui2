import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";

export const InputWithLabel = () => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input placeholder="Enter your username" />
    </Field>
  );
};
