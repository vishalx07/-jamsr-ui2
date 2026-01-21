import { EmailIcon } from "@jamsrui/icons";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaWithIcon = () => {
  return (
    <TextField>
      <Label>Email</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Textarea placeholder="Enter your email" className="w-full" />
      </InputGroup>
    </TextField>
  );
};
