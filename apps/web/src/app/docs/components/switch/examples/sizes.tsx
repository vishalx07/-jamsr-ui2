import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { Field } from "jamsrui/textfield";

export const SwitchSizes = () => {
  const examples = [
    { size: "sm", label: "Dark Mode" },
    { size: "md", label: "Enable Two-Factor Authentication" },
    { size: "lg", label: "Receive Marketing Emails" },
  ] as { size: Switch.Props["size"]; label: string }[];

  return (
    <div className="flex flex-col gap-4">
      {examples.map((example) => (
        <Field key={example.size} orientation="horizontal">
          <Switch size={example.size} />
          <Label>{example.label}</Label>
        </Field>
      ))}
    </div>
  );
};
