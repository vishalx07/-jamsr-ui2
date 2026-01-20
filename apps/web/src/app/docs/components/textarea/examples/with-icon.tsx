import { EmailIcon } from "@jamsrui/icons";
import { InputGroup, Label, Textarea, TextField } from "jamsrui";

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
