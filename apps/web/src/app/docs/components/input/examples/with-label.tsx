import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputWithLabel = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
    </TextField>
  );
};
