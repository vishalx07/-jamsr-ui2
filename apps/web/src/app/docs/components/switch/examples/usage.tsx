import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { useId } from "react";

export const SwitchUsage = () => {
  return (
    <div className="flex flex-col gap-2">
      <SwitchUsage1 />
      <SwitchUsage2 />
      <SwitchUsage3 />
      <SwitchUsage4 />
    </div>
  );
};

const SwitchUsage1 = () => {
  return <Switch />;
};

const SwitchUsage2 = () => {
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

const SwitchUsage3 = () => {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Switch inputProps={{ id }} />
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm font-medium">
          Press Me!
        </label>
        <div className="text-xs text-foreground-secondary">
          This is a description
        </div>
      </div>
    </div>
  );
};

const SwitchUsage4 = () => {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Switch inputProps={{ id }} />
      <label htmlFor={id} className="flex flex-col">
        <span className="text-sm font-medium">Press Me!</span>
        <span className="text-xs text-foreground-secondary">
          This is a description
        </span>
      </label>
    </div>
  );
};
