import { Label } from "jamsrui/label";
import { NumberField } from "jamsrui/number-field";

export const NumberFieldUsage = () => {
  return (
    <NumberField
      formatOptions={{
        currency: "INR",
        currencySign: "accounting",
        style: "currency",
        minimumFractionDigits: 0,
        currencyDisplay: "code",
        signDisplay: "always",
      }}
    >
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
    </NumberField>
  );
};
