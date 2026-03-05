import { SuccessIcon } from "@jamsrui/icons";
import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { Field } from "jamsrui/textfield";

export const SwitchCustomization = () => {
  return (
    <Field orientation="horizontal">
      <Switch>
        <Switch.Thumb>
          <SuccessIcon className="size-3 shrink-0 text-primary" />
        </Switch.Thumb>
      </Switch>
      <Field.Content>
        <Label>Are you ok?</Label>
        <Description>This is a description</Description>
      </Field.Content>
    </Field>
  );
};
