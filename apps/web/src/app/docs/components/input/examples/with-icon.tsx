import { EmailIcon } from "@jamsrui/icons";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputWithIcon = () => {
  return (
    <TextField>
      <Label>Email</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <InputGroup.Input
          placeholder="Enter your email"
          type="email"
          className="w-full"
        />
      </InputGroup>
    </TextField>
  );
};
