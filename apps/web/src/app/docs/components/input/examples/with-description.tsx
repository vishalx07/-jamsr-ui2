import { Description } from "jamsrui/description";
import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputWithDescription = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </TextField>
  );
};
