import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputDisabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field disabled>
        <Label>Enter your name</Label>
        <Input />
      </Field>
      <Field disabled>
        <Label>Enter your name</Label>
        <InputGroup>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
