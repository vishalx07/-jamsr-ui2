import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

export const SelectMultiple = () => {
  return (
    <Select className="max-w-md w-full" placeholder="Select Label" isMultiple>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          {Array(20)
            .fill(null)
            .map((_, idx) => {
              const value = `option${idx}`;
              return (
                <Select.Item key={value} value={value} textValue={value}>
                  {`Option ${idx}`}
                  <Select.ItemIndicator />
                </Select.Item>
              );
            })}
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
