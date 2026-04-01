import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Label>Bordered</Label>
        <Input size="sm" variant="bordered" />
      </Field>
      <Field>
        <Label>Solid</Label>
        <Input size="md" variant="solid" />
      </Field>
    </div>
  );
};
