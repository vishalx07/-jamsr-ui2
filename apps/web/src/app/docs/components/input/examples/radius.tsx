import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/field";

export const InputRadius = () => {
  return (
    <div className="grid gap-4">
      <Field>
        <Field.Label>Radius none</Field.Label>
        <Input radius="none" />
      </Field>
      <Field>
        <Field.Label>Radius sm</Field.Label>
        <Input radius="sm" />
      </Field>
      <Field.Label>
        <Label>Radius md</Label>
        <Input radius="md" />
      </Field.Label>
      <Field.Label>
        <Label>Radius lg</Label>
        <Input radius="lg" />
      </Field.Label>
      <Field.Label>
        <Label>Radius full</Label>
        <Input radius="full" />
      </Field.Label>
    </div>
  );
};
