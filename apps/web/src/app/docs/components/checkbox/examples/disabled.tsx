import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";

export const CheckboxDisabled = () => {
  return (
    <Checkbox disabled>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
