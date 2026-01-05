"use client";

import { Description, Label, NumberField } from "@jamsrui/react";
import { useState } from "react";

export const NumberFieldControlled = () => {
  const [value, setValue] = useState<number>();
  return (
    <NumberField value={value} onValueChange={setValue}>
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
      <Description>value is {value}</Description>
    </NumberField>
  );
};
