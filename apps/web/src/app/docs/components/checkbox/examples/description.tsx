import { Checkbox } from "jamsrui/checkbox";
import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";

export const CheckboxDescription = () => {
  return (
    <Checkbox>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
        <Description>
          Receive updates and promotional offers via email.
        </Description>
      </Checkbox.Content>
    </Checkbox>
  );
};
