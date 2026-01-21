import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";

export const CheckboxCustomization = () => {
  return (
    <Checkbox>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
