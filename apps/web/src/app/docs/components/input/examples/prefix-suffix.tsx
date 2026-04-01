import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const InputPrefixSuffix = () => {
  return (
    <div className="space-y-4">
      <Field>
        <Label>Amount</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <Input />
        </InputGroup>
      </Field>
      <Field>
        <Label>Discount</Label>
        <InputGroup variant="solid">
          <Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </Field>
      <Field>
        <Label>Website</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
