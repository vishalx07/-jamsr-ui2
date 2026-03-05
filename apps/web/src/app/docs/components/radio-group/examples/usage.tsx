import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { Field } from "jamsrui/textfield";

export const RadioUsage = () => {
  return (
    <RadioGroup>
      <Label>Select your favorite city</Label>
      <Field orientation="horizontal">
        <Radio value="buenos-aires" />
        <Label>Buenos Aires</Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="sydney" />
        <Label>Sydney</Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="san-francisco" />
        <Label>San Francisco</Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="london" />
        <Label>London</Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="tokyo" />
        <Label>Tokyo</Label>
      </Field>
    </RadioGroup>
  );
};
