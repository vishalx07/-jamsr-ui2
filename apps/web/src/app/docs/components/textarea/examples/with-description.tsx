import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaWithDescription = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Textarea placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </TextField>
  );
};
