import { Field } from "jamsrui/field";
import { Textarea } from "jamsrui/textarea";

export const TextareaWithLabel = () => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Textarea placeholder="Enter your username" />
    </Field>
  );
};
