import { Checkbox, Label } from "jamsrui";

export const CheckboxUsage = () => {
  return (
    <Checkbox>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
