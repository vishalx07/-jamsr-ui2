import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaWithLabel = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Textarea placeholder="Enter your username" />
    </TextField>
  );
};
