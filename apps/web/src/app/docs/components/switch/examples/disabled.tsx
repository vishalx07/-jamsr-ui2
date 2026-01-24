import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";

export const SwitchDisabled = () => {
  return (
    <Switch disabled>
      <Switch.Track />
      <Switch.Content>
        <Label>Enable Notifications</Label>
      </Switch.Content>
    </Switch>
  );
};
