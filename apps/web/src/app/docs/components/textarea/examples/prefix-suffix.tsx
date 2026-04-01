import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/field";

export const TextareaPrefixSuffix = () => {
  return (
    <div className="space-y-4">
      <Field>
        <Field.Label>Amount</Field.Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <Textarea />
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Discount</Field.Label>
        <InputGroup variant="solid">
          <Textarea />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Website</Field.Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Textarea />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
