import { EmailIcon } from "@jamsrui/icons";
import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputWithIcon = () => {
  return (
    <Field>
      <Label>Email</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Input placeholder="Enter your email" type="email" className="w-full" />
      </InputGroup>
    </Field>
  );
};
