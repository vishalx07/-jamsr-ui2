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
      <Field>
        <Field.Label>Radius md</Field.Label>
        <Input radius="md" />
      </Field>
      <Field>
        <Field.Label>Radius lg</Field.Label>
        <Input radius="lg" />
      </Field>
      <Field>
        <Field.Label>Radius full</Field.Label>
        <Input radius="full" />
      </Field>
    </div>
  );
};
