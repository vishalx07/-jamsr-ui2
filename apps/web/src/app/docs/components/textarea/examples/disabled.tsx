import { Field } from "jamsrui/field";
import { Textarea } from "jamsrui/textarea";

export const TextareaDisabled = () => {
  return (
    <Field>
      <Field.Label>Enter your name</Field.Label>
      <Textarea disabled />
    </Field>
  );
};
