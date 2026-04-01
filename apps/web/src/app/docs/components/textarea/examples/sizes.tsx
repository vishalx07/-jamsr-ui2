import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/field";

export const TextareaSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Field.Label>Small</Field.Label>
        <Textarea size="sm" />
      </Field>
      <Field>
        <Field.Label>Medium</Field.Label>
        <Textarea size="md" />
      </Field>
      <Field>
        <Field.Label>Large</Field.Label>
        <Textarea size="lg" />
      </Field>
    </div>
  );
};
