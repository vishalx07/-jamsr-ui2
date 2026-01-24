import { Checkbox } from "jamsrui/checkbox";
import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";

export const CheckboxInvalid = () => {
  return (
    <Checkbox isInvalid>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Accept terms and conditions</Label>
        <Description>
          You must accept the terms and conditions to continue.
        </Description>
      </Checkbox.Content>
    </Checkbox>
  );
};
