import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputDisabled = () => {
  return (
    <TextField>
      <Label>Enter your name</Label>
      <Input disabled />
    </TextField>
  );
};
