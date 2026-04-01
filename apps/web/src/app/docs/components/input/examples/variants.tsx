import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";

export const InputVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Field.Label>Bordered</Field.Label>
        <Input size="sm" variant="bordered" />
      </Field>
      <Field>
        <Field.Label>Solid</Field.Label>
        <Input size="md" variant="solid" />
      </Field>
    </div>
  );
};
