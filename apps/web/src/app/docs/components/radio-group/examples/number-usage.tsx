"use client";

import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { useState } from "react";

enum Gender {
  MALE = 1,
  FEMALE = 2,
}

export const RadioNumberUsage = () => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  return (
    <RadioGroup value={gender} onValueChange={setGender}>
      <Label>Select your favorite city</Label>
      <Radio value={Gender.MALE}>
        <Radio.Control />
        <Radio.Content>
          <Label>Buenos Aires</Label>
        </Radio.Content>
      </Radio>
      <Radio value={Gender.FEMALE}>
        <Radio.Control />
        <Radio.Content>
          <Label>Sydney</Label>
        </Radio.Content>
      </Radio>
    </RadioGroup>
  );
};
