import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Small</Label>
        <Textarea size="sm" />
      </TextField>
      <TextField>
        <Label>Medium</Label>
        <Textarea size="md" />
      </TextField>
      <TextField>
        <Label>Large</Label>
        <Textarea size="lg" />
      </TextField>
    </div>
  );
};
