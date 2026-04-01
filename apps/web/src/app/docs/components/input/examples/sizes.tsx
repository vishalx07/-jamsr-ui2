import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Label>Small</Label>
        <Input size="sm" />
      </Field>
      <Field>
        <Label>Medium</Label>
        <Input size="md" />
      </Field>
      <Field>
        <Label>Large</Label>
        <Input size="lg" />
      </Field>
    </div>
  );
};
