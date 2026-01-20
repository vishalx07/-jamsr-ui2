import { Textarea, Label, TextField } from "jamsrui";

export const TextareaDisabled = () => {
  return (
    <TextField>
      <Label>Enter your name</Label>
      <Textarea disabled />
    </TextField>
  );
};
