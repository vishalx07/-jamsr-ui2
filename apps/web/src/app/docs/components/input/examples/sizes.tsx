import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";

export const InputSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Field.Label>Small</Field.Label>
        <Input size="sm" />
      </Field>
      <Field>
        <Field.Label>Medium</Field.Label>
        <Input size="md" />
      </Field>
      <Field>
        <Field.Label>Large</Field.Label>
        <Input size="lg" />
      </Field>
    </div>
  );
};
