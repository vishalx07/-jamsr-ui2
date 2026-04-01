import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputRadius = () => {
  return (
    <div className="grid gap-4">
      <Field>
        <Label>Radius none</Label>
        <Input radius="none" />
      </Field>
      <Field>
        <Label>Radius sm</Label>
        <Input radius="sm" />
      </Field>
      <Field>
        <Label>Radius md</Label>
        <Input radius="md" />
      </Field>
      <Field>
        <Label>Radius lg</Label>
        <Input radius="lg" />
      </Field>
      <Field>
        <Label>Radius full</Label>
        <Input radius="full" />
      </Field>
    </div>
  );
};
