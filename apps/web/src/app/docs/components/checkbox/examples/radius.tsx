import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxRadius = () => {
  const radiusExamples = [
    { value: "none", label: "None" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "full", label: "Full" },
  ] as { value: Checkbox.Props["radius"]; label: string }[];

  return (
    <div className="grid gap-4">
      {radiusExamples.map((item) => (
        <Field key={item.value} orientation="horizontal">
          <Checkbox radius={item.value} />
          <Label>{item.label}</Label>
        </Field>
      ))}
    </div>
  );
};
