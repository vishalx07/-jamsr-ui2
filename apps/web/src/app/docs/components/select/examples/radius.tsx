"use client";

import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

export const SelectRadius = () => {
  const radii: Select.Props["radius"][] = ["none", "sm", "md", "lg", "full"];
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      {radii.map((radius) => (
        <Select className="max-w-xs w-full" radius={radius} key={radius}>
          <Label>Select Label</Label>
          <Select.Trigger />
          <Select.Popover>
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
          </Select.Popover>
        </Select>
      ))}
    </div>
  );
};
