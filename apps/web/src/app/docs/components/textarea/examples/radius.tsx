import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/field";

export const TextareaRadius = () => {
  return (
    <div className="grid gap-4">
      <Field>
        <Field.Label>Radius none</Field.Label>
        <Textarea radius="none" />
      </Field>
      <Field>
        <Field.Label>Radius sm</Field.Label>
        <Textarea radius="sm" />
      </Field>
      <Field>
        <Field.Label>Radius md</Field.Label>
        <Textarea radius="md" />
      </Field>
      <Field>
        <Field.Label>Radius lg</Field.Label>
        <Textarea radius="lg" />
      </Field>
      <Field>
        <Field.Label>Radius full</Field.Label>
        <Textarea radius="full" />
      </Field>
    </div>
  );
};
