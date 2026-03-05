"use client";

import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { Tabs } from "jamsrui/tabs";
import { useState } from "react";
import { Field } from "jamsrui/textfield";

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
    </>
  );
};
