import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Bordered</Label>
        <Textarea size="sm" variant="bordered" />
      </TextField>
      <TextField>
        <Label>Solid</Label>
        <Textarea size="md" variant="solid" />
      </TextField>
    </div>
  );
};
