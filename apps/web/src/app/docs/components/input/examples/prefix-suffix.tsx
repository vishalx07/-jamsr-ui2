import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { TextField } from "jamsrui/textfield";

export const InputPrefixSuffix = () => {
  return (
    <div className="space-y-4">
      <TextField>
        <Label>Amount</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input />
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Discount</Label>
        <InputGroup variant="solid">
          <InputGroup.Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Website</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  );
};
