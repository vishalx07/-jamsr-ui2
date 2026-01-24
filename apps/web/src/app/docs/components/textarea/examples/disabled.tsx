import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaDisabled = () => {
  return (
    <TextField>
      <Label>Enter your name</Label>
      <Textarea disabled />
    </TextField>
  );
};
