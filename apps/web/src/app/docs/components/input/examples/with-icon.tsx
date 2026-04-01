import { EmailIcon } from "@jamsrui/icons";
import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { Field } from "jamsrui/field";

export const InputWithIcon = () => {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Input placeholder="Enter your email" type="email" className="w-full" />
      </InputGroup>
    </Field>
  );
};
