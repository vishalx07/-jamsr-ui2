"use client";

import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

export const SelectCustomRenderValue = () => {
  return (
    <Select className="max-w-xs w-full" placeholder="Choose Fruit">
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="apple" textValue="Apple">
          Apple
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value="blueberry" textValue="Blueberry">
          Blueberry
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value="watermelon" textValue="Watermelon">
          Watermelon
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value="banana" textValue="Banana">
          Banana
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value="orange" textValue="Orange">
          Orange
          <Select.ItemIndicator />
        </Select.Item>
      </Select.Content>
    </Select>
  );
};
