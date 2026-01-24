import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputDisabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField disabled>
        <Label>Enter your name</Label>
        <Input />
      </TextField>
      <TextField disabled>
        <Label>Enter your name</Label>
        <InputGroup>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  );
};
