import { Input, Label, TextField } from "jamsrui";

export const InputWithLabel = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
    </TextField>
  );
};
