import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";

export const SwitchDescription = () => {
  return (
    <Switch>
      <Switch.Control />
      <Switch.Content>
        <Label>Are you ok?</Label>
        <Description>This is a description</Description>
      </Switch.Content>
    </Switch>
  );
};
