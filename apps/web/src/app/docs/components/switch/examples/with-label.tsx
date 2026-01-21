import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";

export const SwitchWithLabel = () => {
  return (
    <Switch>
      <Switch.Track />
      <Switch.Content>
        <Label>This is label</Label>
      </Switch.Content>
    </Switch>
  );
};
