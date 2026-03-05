"use client";

import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";
import { useState } from "react";

enum Fruits {
  APPLE = 1,
  BLUEBERRY = 2,
  WATERMELON = 3,
  BANANA = 4,
  ORANGE = 5,
}

export const SelectControlledNumber = () => {
  const [value, setValue] = useState<Fruits>();
  return (
    <Select className="max-w-xs w-full" value={value} onValueChange={setValue}>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value={Fruits.APPLE} textValue="Apple">
          Apple
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value={Fruits.BLUEBERRY} textValue="Blueberry">
          Blueberry
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value={Fruits.WATERMELON} textValue="Watermelon">
          Watermelon
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value={Fruits.BANANA} textValue="Banana">
          Banana
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value={Fruits.ORANGE} textValue="Orange">
          Orange
          <Select.ItemIndicator />
        </Select.Item>
      </Select.Content>
    </Select>
  );
};
