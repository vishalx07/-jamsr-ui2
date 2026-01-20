import { Checkbox, Label } from "jamsrui";

export const CheckboxIntermediate = () => {
  return (
    <Checkbox isIntermediate>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>I am a checkbox</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
