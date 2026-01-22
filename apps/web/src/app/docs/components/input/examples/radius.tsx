import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputRadius = () => {
  return (
    <div className="grid gap-4">
      <TextField>
        <Label>Radius none</Label>
        <Input radius="none" />
      </TextField>
      <TextField>
        <Label>Radius sm</Label>
        <Input radius="sm" />
      </TextField>
      <TextField>
        <Label>Radius md</Label>
        <Input radius="md" />
      </TextField>
      <TextField>
        <Label>Radius lg</Label>
        <Input radius="lg" />
      </TextField>
      <TextField>
        <Label>Radius full</Label>
        <Input radius="full" />
      </TextField>
    </div>
  );
};
