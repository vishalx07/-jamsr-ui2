import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { TextField } from "jamsrui/textfield";

export const TextareaRadius = () => {
  return (
    <div className="grid gap-4">
      <TextField>
        <Label>Radius none</Label>
        <Textarea radius="none" />
      </TextField>
      <TextField>
        <Label>Radius sm</Label>
        <Textarea radius="sm" />
      </TextField>
      <TextField>
        <Label>Radius md</Label>
        <Textarea radius="md" />
      </TextField>
      <TextField>
        <Label>Radius lg</Label>
        <Textarea radius="lg" />
      </TextField>
      <TextField>
        <Label>Radius full</Label>
        <Textarea radius="full" />
      </TextField>
    </div>
  );
};
