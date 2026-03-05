import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaWithDescription = () => {
  return (
    <Field>
      <Label>Username</Label>
      <Textarea placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </Field>
  );
};
