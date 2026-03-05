import { EmailIcon } from "@jamsrui/icons";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaWithIcon = () => {
  return (
    <Field>
      <Label>Email</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Textarea placeholder="Enter your email" className="w-full" />
      </InputGroup>
    </Field>
  );
};
