import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

const SelectContent = () => {
  return (
    <Select.Content>
      <Select.Item value="apple">
        <Select.ItemIndicator />
        <Select.ItemText>Apple</Select.ItemText>
      </Select.Item>
      <Select.Item value="blueberry">
        <Select.ItemIndicator />
        <Select.ItemText>Blueberry</Select.ItemText>
      </Select.Item>
      <Select.Item value="watermelon">
        <Select.ItemIndicator />
        <Select.ItemText>Watermelon</Select.ItemText>
      </Select.Item>
      <Select.Item value="banana">
        <Select.ItemIndicator />
        <Select.ItemText>Banana</Select.ItemText>
      </Select.Item>
      <Select.Item value="orange">
        <Select.ItemIndicator />
        <Select.ItemText>Orange</Select.ItemText>
      </Select.Item>
    </Select.Content>
  );
};

export const SelectUsage = () => {
  return (
    <Select defaultValue="apple">
      <Label>Fruit</Label>
      <Select.Trigger className="min-w-40" />
      <SelectContent />
    </Select>
  );
};
