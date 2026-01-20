import { Description, Input, Label, TextField } from "jamsrui";

export const InputWithDescription = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </TextField>
  );
};
