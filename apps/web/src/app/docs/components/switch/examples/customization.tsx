import { SuccessIcon } from "@jamsrui/icons";
import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";

export const SwitchCustomization = () => {
  return (
    <Switch>
      <Switch.Control>
        <Switch.Thumb>
          <SuccessIcon className="size-3 shrink-0 text-primary" />
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Content>
        <Label>Are you ok?</Label>
        <Description>This is a description</Description>
      </Switch.Content>
    </Switch>
  );
};
