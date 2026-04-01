import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaRadius = () => {
  return (
    <div className="grid gap-4">
      <Field>
        <Label>Radius none</Label>
        <Textarea radius="none" />
      </Field>
      <Field>
        <Label>Radius sm</Label>
        <Textarea radius="sm" />
      </Field>
      <Field>
        <Label>Radius md</Label>
        <Textarea radius="md" />
      </Field>
      <Field>
        <Label>Radius lg</Label>
        <Textarea radius="lg" />
      </Field>
      <Field>
        <Label>Radius full</Label>
        <Textarea radius="full" />
      </Field>
    </div>
  );
};
