import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaWithLabel = () => {
  return (
    <Field>
      <Label>Username</Label>
      <Textarea placeholder="Enter your username" />
    </Field>
  );
};
