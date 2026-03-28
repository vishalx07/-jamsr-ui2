import { FieldError } from "jamsrui/field-error";
import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectWithErrorMessage = () => {
  return (
    <Select items={apples} isInvalid>
      <Label>Fruit</Label>
      <Select.Trigger className="min-w-40" />
      <Select.Content>
        {apples.map(({ label, value }) => (
          <Select.Item key={label} value={value}>
            <Select.ItemIndicator />
            <Select.ItemText>{label}</Select.ItemText>
          </Select.Item>
        ))}
      </Select.Content>
      <FieldError>Please select a fruit</FieldError>
    </Select>
  );
};
