import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { Field } from "jamsrui/textfield";

export const SwitchColors = () => {
  const data: { color: Switch.Props["color"]; description: string }[] = [
    {
      color: "default",
      description: "Enable notifications (Default)",
    },
    {
      color: "primary",
      description: "Set as primary (Primary)",
    },
    {
      color: "secondary",
      description: "Enable advanced settings (Secondary)",
    },
    {
      color: "success",
      description: "Mark task as complete (Success)",
    },
    {
      color: "warning",
      description: "Show critical alerts (Warning)",
    },
    {
      color: "danger",
      description: "Delete user account (Danger)",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <Field key={item.color} orientation="horizontal">
          <Switch color={item.color} />
          <Field.Content>
            <Label className="capitalize">{item.color}</Label>
            <Description>{item.description}</Description>
          </Field.Content>
        </Field>
      ))}
    </div>
  );
};
