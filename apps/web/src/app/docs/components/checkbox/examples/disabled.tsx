import { Checkbox, Label } from "jamsrui";

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
