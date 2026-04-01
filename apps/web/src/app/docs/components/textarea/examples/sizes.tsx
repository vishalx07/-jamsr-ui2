import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Label>Small</Label>
        <Textarea size="sm" />
      </Field>
      <Field>
        <Label>Medium</Label>
        <Textarea size="md" />
      </Field>
      <Field>
        <Label>Large</Label>
        <Textarea size="lg" />
      </Field>
    </div>
  );
};
