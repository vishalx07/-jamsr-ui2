import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaDisabled = () => {
  return (
    <Field>
      <Label>Enter your name</Label>
      <Textarea disabled />
    </Field>
  );
};
