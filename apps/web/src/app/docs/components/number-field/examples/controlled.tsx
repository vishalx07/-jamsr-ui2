"use client";

import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { NumberField } from "jamsrui/number-field";
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
