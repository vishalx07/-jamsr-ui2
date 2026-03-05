"use client";

import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { useState } from "react";
import { Field } from "jamsrui/textfield";

enum Gender {
  MALE = 1,
  FEMALE = 2,
}

export const RadioNumberUsage = () => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  return (
    <RadioGroup value={gender} onValueChange={setGender}>
      <Label>Select your favorite city</Label>
      <Field orientation="horizontal">
        <Radio value={Gender.MALE} />
        <Label>Buenos Aires</Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value={Gender.FEMALE} />
        <Label>Sydney</Label>
      </Field>
    </RadioGroup>
  );
};
