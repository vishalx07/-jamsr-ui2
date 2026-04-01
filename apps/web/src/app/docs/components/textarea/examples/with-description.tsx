import { Description } from "jamsrui/description";
import { Field } from "jamsrui/field";
import { Textarea } from "jamsrui/textarea";

export const TextareaWithDescription = () => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Textarea placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </Field>
  );
};
