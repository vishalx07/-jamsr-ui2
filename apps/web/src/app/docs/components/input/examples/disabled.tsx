import { Input, Label, TextField } from "jamsrui";

export const InputDisabled = () => {
  return (
    <TextField>
      <Label>Enter your name</Label>
      <Input disabled />
    </TextField>
  );
};
