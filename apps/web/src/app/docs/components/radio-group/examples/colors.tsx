"use client";

import { Label, Radio, RadioGroup, Tabs } from "jamsrui";
import { useState } from "react";

type Color = NonNullable<Radio.Props["color"]>;

export const RadioColors = () => {
  const colors: Color[] = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  const [color, setColor] = useState<Color>("primary");

  return (
    <>
      <Tabs defaultValue="primary">
        <Tabs.List>
          {colors.map((color) => (
            <Tabs.Tab value={color} key={color} onClick={() => setColor(color)}>
              {color}
              <Tabs.Indicator />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <RadioGroup color={color}>
        <Label>Select your favorite city</Label>
        <Radio value="buenos-aires">
          <Radio.Control />
          <Radio.Content>
            <Label>Buenos Aires</Label>
          </Radio.Content>
        </Radio>
        <Radio value="sydney">
          <Radio.Control />
          <Radio.Content>
            <Label>Sydney</Label>
          </Radio.Content>
        </Radio>
        <Radio value="san-francisco">
          <Radio.Control />
          <Radio.Content>
            <Label>San Francisco</Label>
          </Radio.Content>
        </Radio>
        <Radio value="london">
          <Radio.Control />
          <Radio.Content>
            <Label>London</Label>
          </Radio.Content>
        </Radio>
        <Radio value="tokyo">
          <Radio.Control />
          <Radio.Content>
            <Label>Tokyo</Label>
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </>
  );
};
