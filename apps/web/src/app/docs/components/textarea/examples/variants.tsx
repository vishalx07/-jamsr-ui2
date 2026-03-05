import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";

export const TextareaVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Label>Bordered</Label>
        <Textarea size="sm" variant="bordered" />
      </Field>
      <Field>
        <Label>Solid</Label>
        <Textarea size="md" variant="solid" />
      </Field>
    </div>
  );
};
